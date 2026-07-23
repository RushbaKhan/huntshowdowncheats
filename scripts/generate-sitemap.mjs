import { writeFileSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { BLOG_SLUGS, SITE_URL, STATIC_ROUTES } from './seo-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const today = new Date().toISOString().slice(0, 10);

function parseBlogPosts() {
  const source = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
  const posts = [];
  const blockRe = /slug:\s*'([^']+)'[\s\S]*?title:\s*"([^"]+)"[\s\S]*?excerpt:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
  let match;
  while ((match = blockRe.exec(source)) !== null) {
    posts.push({ slug: match[1], title: match[2], excerpt: match[3], image: match[4] });
  }
  return posts;
}

const blogPosts = parseBlogPosts();
const blogBySlug = Object.fromEntries(blogPosts.map(p => [p.slug, p]));

function urlEntry(loc, lastmod, changefreq, priority, image) {
  const imageBlock = image
    ? `
    <image:image>
      <image:loc>${SITE_URL}${image.startsWith('/') ? image : `/${image}`}</image:loc>
      <image:title>${loc.split('/').pop()?.replace(/-/g, ' ') ?? 'Hunt Showdown Cheats'}</image:title>
    </image:image>`
    : '';
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imageBlock}
  </url>`;
}

const staticPages = STATIC_ROUTES.map(route =>
  urlEntry(`${SITE_URL}${route.path === '/' ? '/' : route.path}`, today, route.changefreq, route.priority, '/huntshowdown-cheats-esp-screenshot-1.png')
);

const blogPages = BLOG_SLUGS.map(({ slug, lastmod, priority }) => {
  const post = blogBySlug[slug];
  return urlEntry(
    `${SITE_URL}/blog/${slug}`,
    lastmod,
    'monthly',
    priority,
    post?.image ?? '/huntshowdown-cheats-esp-screenshot-1.png'
  );
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${[...staticPages, ...blogPages].join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log('Generated public/sitemap.xml');
