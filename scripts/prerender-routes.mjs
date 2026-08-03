import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOG_SLUGS, SEO_KEYWORDS, SITE_URL, STATIC_ROUTES } from './seo-data.mjs';
import { staticSeoBody } from './static-seo-content.mjs';

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

function applyRouteMeta(html, route, blogPosts) {
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const ogType = route.type === 'article' ? 'article' : 'website';
  const staticBody = staticSeoBody(route, blogPosts);

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
      /<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="en" href="${canonical}" />`
    )
    .replace(
      /<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="x-default" href="${canonical}" />`
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
    )
    .replace(
      /<meta property="og:image" content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${SITE_URL}/huntshowdown-cheats-esp-screenshot-1.png" />`
    )
    .replace('<div id="root"></div>', `<div id="root">${staticBody}</div>`);

  return out;
}

function writeRouteHtml(route, blogPosts) {
  const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
  const html = applyRouteMeta(baseHtml, route, blogPosts);
  const segments = route.path.split('/').filter(Boolean);
  const targetDir = segments.length ? join(distDir, ...segments) : distDir;
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, 'index.html'), html, 'utf8');
}

const blogPosts = parseBlogPosts();
const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
if (!baseHtml.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html missing — run vite build first');
}

for (const route of STATIC_ROUTES) {
  writeRouteHtml(route, blogPosts);
}

for (const post of blogPosts) {
  writeRouteHtml(
    {
      path: `/blog/${post.slug}`,
      title: `${post.title} | Hunt Cheats Blog`,
      description: post.excerpt,
      h1: post.title,
      excerpt: post.excerpt,
      type: 'article',
    },
    blogPosts
  );
}

console.log(`Prerendered ${STATIC_ROUTES.length + blogPosts.length} SEO route HTML files`);
