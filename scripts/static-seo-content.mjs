import { SITE_URL } from './seo-data.mjs';

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const TOP_GUIDES = [
  { slug: 'huntshowdown-esp-guide', label: 'Hunt Showdown ESP Guide' },
  { slug: 'huntshowdown-aimbot-setup', label: 'Hunt Showdown Aimbot Setup' },
  { slug: 'huntshowdown-dma-guide', label: 'Hunt Showdown DMA Guide' },
  { slug: 'undetected-huntshowdown-cheats', label: 'Undetected Hunt Showdown Cheats' },
  { slug: 'best-huntshowdown-cheats-2026', label: 'Best Hunt Showdown Cheats 2026' },
  { slug: 'huntshowdown-triggerbot-guide', label: 'Hunt Showdown Triggerbot Guide' },
];

function link(path, label) {
  return `<a href="${SITE_URL}${path}">${label}</a>`;
}

function guideLinks() {
  return TOP_GUIDES.map(g => link(`/blog/${g.slug}`, g.label)).join(', ');
}

export function staticSeoBody(route, blogPosts = []) {
  if (route.path === '/') {
    return `
<main id="seo-static">
  <h1>Hunt Showdown Cheats. ESP, Aimbot and more</h1>
  <p>Undetected Hunt Showdown cheats with Hunt Showdown aimbot, Hunt Showdown ESP, Hunt Showdown wallhack, Hunt Showdown triggerbot, Hunt Showdown radar and Hunt Showdown DMA support. See every hunter through walls, land silent aim shots, control recoil, and stay stream-proof. Updated after every Crytek patch on Windows 10 and Windows 11.</p>

  <h2>Built for Hunt Showdown. Engineered to Stay Safe.</h2>
  <p>Our Hunt Showdown cheat package is built specifically for Crytek's extraction shooter. You get external undetected aimbot, full ESP, wallhack, triggerbot, radar and optional Cloud-DMA — all updated within hours of every game patch so your loader always matches the live client.</p>

  <h2>Hunt Showdown ESP Features — Total Awareness in Every Fight</h2>
  <p>Hunt Showdown ESP shows enemy hunters, loot, bosses and extract points through walls. Customize 2D boxes, skeleton lines, player distance, info colors, ESP range and player alerts for clean visibility in Louisiana bayou firefights.</p>

  <h3>Hunt Showdown Aimbot Features — Aim to Win</h3>
  <p>The Hunt Showdown aimbot includes custom aim key, visibility check, bone selector, aim smooth, FOV circle, recoil control and triggerbot. Settings stay natural-looking for competitive Hunt Showdown matches.</p>

  <h3>Hunt Showdown Wallhack, Radar and DMA</h3>
  <p>Beyond ESP and aimbot, our Hunt Showdown cheats include wallhack for structural visibility, radar for map-wide tracking, and Cloud-DMA for hardware-level memory reading — the safest long-term profile against Easy Anti-Cheat.</p>

  <h2>Frequently Asked Questions</h2>
  <p><strong>Are Hunt Showdown cheats undetected?</strong> Yes. Our external Hunt Showdown cheat stays undetected against Easy Anti-Cheat with updates after every Crytek patch.</p>
  <p><strong>Does Hunt Showdown ESP work through walls?</strong> Yes. ESP shows hunters, loot and bosses through all walls with adjustable range and colors.</p>

  <nav aria-label="Primary">
    <p>${link('/', 'Home')} · ${link('/buy', 'Get Hunt Showdown Cheats')} · ${link('/blog', 'Hunt Showdown Cheats Blog')}</p>
  </nav>
  <nav aria-label="Guides">
    <p>Popular guides: ${guideLinks()}.</p>
  </nav>
  <p>Official store: <a href="https://zadeyo.com/go/RUSHBA?to=%2Fproducts%2Fhunt-showdown" rel="noopener noreferrer">Get Hunt Showdown Cheats on Zadeyo</a>.</p>
</main>`;
  }

  if (route.path === '/buy') {
    return `
<main id="seo-static">
  <h1>Get Hunt Showdown Cheats – Aimbot, ESP, Triggerbot &amp; Radar</h1>
  <p>Get undetected Hunt Showdown cheats with aimbot, ESP, wallhack, triggerbot, radar, DMA, recoil control, silent aim and stream-proof mode. Instant loader access after checkout on Windows 10 and Windows 11.</p>
  <h2>What Is Included</h2>
  <p>Every Hunt Showdown cheat subscription includes full ESP, aimbot, triggerbot, wallhack, radar, recoil control, stream-proof overlay mode and post-patch loader updates. Cloud-DMA option available for maximum safety.</p>
  <h2>Setup and Support</h2>
  <p>Setup takes under a minute with our video guide and step-by-step instructions. Support tickets and Discord help are available 24/7 for HWID transfers, patch updates and loader issues.</p>
  <nav aria-label="Primary">
    <p>${link('/', 'Hunt Showdown Cheats Home')} · ${link('/buy', 'Pricing')} · ${link('/blog', 'Guides')} · ${guideLinks()}</p>
  </nav>
</main>`;
  }

  if (route.path === '/blog') {
    const postLinks = blogPosts
      .slice(0, 12)
      .map(p => link(`/blog/${p.slug}`, p.title))
      .join(' · ');
    return `
<main id="seo-static">
  <h1>Hunt Showdown Cheats Blog</h1>
  <p>Expert guides on Hunt Showdown ESP, aimbot setup, triggerbot, wallhack, radar, DMA and ban protection. Updated after every Crytek patch for undetected Hunt Showdown cheats users.</p>
  <h2>Latest Hunt Showdown Guides</h2>
  <p>${postLinks}</p>
  <nav aria-label="Primary">
    <p>${link('/', 'Home')} · ${link('/buy', 'Get Hunt Showdown Cheats')} · ${link('/blog', 'Blog')}</p>
  </nav>
</main>`;
  }

  if (route.path.startsWith('/blog/') && route.excerpt) {
    return `
<main id="seo-static">
  <h1>${esc(route.h1 ?? route.title)}</h1>
  <p>${esc(route.excerpt)}</p>
  <h2>Related Hunt Showdown Cheats Topics</h2>
  <p>${guideLinks()}.</p>
  <nav aria-label="Primary">
    <p>${link('/', 'Home')} · ${link('/buy', 'Get Cheats')} · ${link('/blog', 'All Guides')}</p>
  </nav>
</main>`;
  }

  return `
<main id="seo-static">
  <h1>${esc(route.h1 ?? route.title)}</h1>
  <p>${esc(route.description)}</p>
  <nav aria-label="Primary">
    <p>${link('/', 'Home')} · ${link('/buy', 'Get Hunt Showdown Cheats')} · ${link('/blog', 'Blog')}</p>
  </nav>
</main>`;
}
