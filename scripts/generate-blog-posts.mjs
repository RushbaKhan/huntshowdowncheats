import { writeFileSync, mkdirSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { wc, body, escapeTs, faqSection } from './blog-helpers.mjs';
import { ALL_POSTS } from './blog-all-posts.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '../src/data/blogPosts.ts');

mkdirSync(dirname(outPath), { recursive: true });

const results = [];
for (const post of ALL_POSTS) {
  const count = wc(post.content);
  results.push({ slug: post.slug, words: count, ok: count >= 1200 && count <= 1800 });
  if (count < 1200) console.warn(`WARN: ${post.slug} only ${count} words (need 1200+)`);
  if (count > 1800) console.warn(`WARN: ${post.slug} has ${count} words (max 1800)`);
}

const ts = `export type BlogFaq = { q: string; a: string };
export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: string;
  faq: BlogFaq[];
};

export const BLOG_POSTS: BlogPost[] = [
${ALL_POSTS.map(
  (p) => `  {
    slug: '${p.slug}',
    title: ${JSON.stringify(p.title)},
    category: ${JSON.stringify(p.category)},
    date: ${JSON.stringify(p.date)},
    readTime: ${JSON.stringify(p.readTime)},
    image: ${JSON.stringify(p.image)},
    excerpt: ${JSON.stringify(p.excerpt)},
    body: \`${escapeTs(p.content.trim())}\`,
    faq: ${JSON.stringify(p.faq, null, 6).replace(/^/gm, '    ').trim()},
  }`
).join(',\n')}
];
`;

writeFileSync(outPath, ts, 'utf8');
const size = statSync(outPath).size;

console.log('\n=== Word Count Report ===');
for (const r of results) {
  const status = r.ok ? 'OK' : 'FAIL';
  console.log(`${status}  ${r.slug}: ${r.words} words`);
}
console.log(`\nTotal posts: ${results.length}`);
console.log(`File: ${outPath}`);
console.log(`File size: ${size} bytes (${(size / 1024).toFixed(1)} KB)`);
console.log(`All OK: ${results.every((r) => r.ok)}`);
