import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOG_SLUGS, SEO_KEYWORDS, SITE_URL, STATIC_ROUTES } from './seo-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

function parseBlogPosts() {
  const source = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
  const posts = [];
  const blockRe = /slug:\s*'([^']+)'[\s\S]*?title:\s*"([^"]+)"[\s\S]*?excerpt:\s*"([^"]+)"/g;
  let match;
  while ((match = blockRe.exec(source)) !== null) {
    posts.push({ slug: match[1], title: match[2], excerpt: match[3] });
  }
  return posts;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applyRouteMeta(html, route) {
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const ogType = route.type === 'article' ? 'article' : 'website';

  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(route.description)}" />`
    )
    .replace(
      /<meta name="keywords" content="[^"]*"\s*\/?>/,
      `<meta name="keywords" content="${escapeHtml(SEO_KEYWORDS)}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`
    )
    .replace(
      /<meta property="og:type" content="[^"]*"\s*\/?>/,
      `<meta property="og:type" content="${ogType}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonical}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
    );

  const noscript = `
    <noscript>
      <article style="max-width:760px;margin:2rem auto;padding:0 1rem;font-family:system-ui,sans-serif;color:#e8e8f0">
        <h1>${escapeHtml(route.h1 ?? route.title)}</h1>
        <p>${escapeHtml(route.description)}</p>
        ${route.excerpt ? `<p>${escapeHtml(route.excerpt)}</p>` : ''}
        <p><a href="${canonical}">Continue to ${escapeHtml(route.h1 ?? route.title)}</a></p>
      </article>
    </noscript>`;

  out = out.replace('</body>', `${noscript}\n  </body>`);
  return out;
}

function writeRouteHtml(route) {
  const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
  const html = applyRouteMeta(baseHtml, route);
  const segments = route.path.split('/').filter(Boolean);
  const targetDir = segments.length ? join(distDir, ...segments) : distDir;
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, 'index.html'), html, 'utf8');
}

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
if (!baseHtml.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html missing — run vite build first');
}

for (const route of STATIC_ROUTES) {
  writeRouteHtml(route);
}

for (const post of parseBlogPosts()) {
  writeRouteHtml({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Hunt Showdown Cheats Blog`,
    description: post.excerpt,
    h1: post.title,
    excerpt: post.excerpt,
    type: 'article',
  });
}

console.log(`Prerendered ${STATIC_ROUTES.length + parseBlogPosts().length} SEO route HTML files`);
