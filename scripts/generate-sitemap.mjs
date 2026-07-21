import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const siteUrl = 'https://huntshowdowncheats.com';
const today = new Date().toISOString().slice(0, 10);

const blogSlugs = [
  { slug: 'huntshowdown-esp-guide', lastmod: '2026-06-20', priority: '0.8' },
  { slug: 'huntshowdown-aimbot-setup', lastmod: '2026-06-18', priority: '0.8' },
  { slug: 'huntshowdown-triggerbot-guide', lastmod: '2026-06-15', priority: '0.7' },
  { slug: 'huntshowdown-radar-guide', lastmod: '2026-07-11', priority: '0.7' },
  { slug: 'huntshowdown-wallhack-guide', lastmod: '2026-06-12', priority: '0.7' },
  { slug: 'huntshowdown-dma-guide', lastmod: '2026-07-15', priority: '0.8' },
  { slug: 'best-huntshowdown-cheats-2026', lastmod: '2026-06-10', priority: '0.9' },
  { slug: 'huntshowdown-anticheat-analysis', lastmod: '2026-06-08', priority: '0.7' },
  { slug: 'undetected-huntshowdown-cheats', lastmod: '2026-06-05', priority: '0.8' },
  { slug: 'huntshowdown-cheats-smart-buying', lastmod: '2026-06-03', priority: '0.7' },
  { slug: 'huntshowdown-recoil-control', lastmod: '2026-07-01', priority: '0.7' },
  { slug: 'huntshowdown-stream-proof-mode', lastmod: '2026-07-18', priority: '0.7' },
];

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const staticPages = [
  urlEntry(`${siteUrl}/`, today, 'weekly', '1.0'),
  urlEntry(`${siteUrl}/blog`, today, 'weekly', '0.9'),
  urlEntry(`${siteUrl}/buy`, today, 'weekly', '0.95'),
  ...blogSlugs.map(({ slug, lastmod, priority }) =>
    urlEntry(`${siteUrl}/blog/${slug}`, lastmod, 'monthly', priority)
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticPages.join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log('Generated public/sitemap.xml');
