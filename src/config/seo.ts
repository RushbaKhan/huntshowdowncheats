import { DEFAULT_OG_IMAGE, LOGO_URL, SITE_NAME, SITE_URL } from './site';

export const SEO_KEYWORDS =
  'hunt showdown cheats, huntshowdown cheats, hunt cheats, hunt showdown aimbot, huntshowdown aimbot, hunt showdown esp, huntshowdown esp, hunt showdown triggerbot, huntshowdown triggerbot, hunt esp, hunt aimbot, hunt showdown wallhack, hunt showdown hack, hunt showdown radar, hunt showdown dma, undetected hunt showdown cheats, best hunt showdown cheats';

export const HOME_TITLE =
  'Hunt Showdown Cheats – Aimbot, ESP, Wallhack & Triggerbot | huntshowdowncheats.com';

export const HOME_DESCRIPTION =
  'Undetected Hunt Showdown cheats with aimbot, ESP, wallhack, triggerbot, radar and DMA. See hunters through walls, silent aim, recoil control, stream-proof mode. Updated every patch. Windows 10 & 11.';

export const BUY_TITLE =
  'Get Hunt Showdown Cheats – Aimbot, ESP, Triggerbot, Radar & DMA | $40/month';

export const BUY_DESCRIPTION =
  'Get undetected Hunt Showdown cheats. Includes aimbot, ESP, wallhack, triggerbot, radar, DMA, recoil control, silent aim and stream-proof mode. Instant access after checkout.';

export const BLOG_TITLE =
  'Hunt Showdown Cheats Blog – ESP, Aimbot, DMA & Triggerbot Guides';

export const BLOG_DESCRIPTION =
  'Expert guides on Hunt Showdown ESP, aimbot setup, triggerbot, wallhack, radar, DMA and ban protection. Updated after every Crytek patch.';

export const STORE_FAQ_ITEMS = [
  {
    q: 'Can I use my Hunt Showdown cheat license on more than one PC?',
    a: 'Each license is tied to one hardware ID (HWID). If you need to transfer to a new PC, contact our support team and we will handle the transfer for you.',
  },
  {
    q: 'Is the Hunt Showdown aimbot difficult to set up?',
    a: 'Not at all. Setup is quick and straightforward. We provide a full instructions page and video guide. The entire process takes less than a minute.',
  },
  {
    q: 'Will the Hunt Showdown ESP affect FPS or performance?',
    a: 'No. Our cheat is external and runs as a separate process, meaning it has minimal impact on game performance. Most users report no noticeable FPS difference.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major payment methods including credit/debit cards, crypto, and other options available at checkout.',
  },
  {
    q: 'The cheat stopped working after a Hunt Showdown game update. What do I do?',
    a: 'After any Hunt Showdown patch, download the newest loader from your order page. Updates usually land within hours of the game build changing.',
  },
  {
    q: 'How do I purchase Hunt Showdown cheats?',
    a: 'Visit our pricing page, complete checkout, and receive your loader link and setup instructions immediately.',
  },
  {
    q: 'Is the Hunt Showdown aimbot undetected?',
    a: 'Yes. Our Hunt Showdown cheat is external and has remained undetected. We update after every patch to maintain safety.',
  },
  {
    q: 'Does the Hunt Showdown ESP work through walls?',
    a: 'Yes. The ESP shows enemy players, loot, and items through all walls and structures. You can adjust the range and what information is displayed.',
  },
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
  };
}

export function softwareApplicationSchema() {
  return {
    '@type': 'SoftwareApplication',
    name: 'Hunt Showdown Cheats',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Windows 10, Windows 11',
    description:
      'Undetected Hunt Showdown cheats with aimbot, ESP, wallhack, triggerbot, radar, DMA, recoil control, silent aim and stream-proof mode.',
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    offers: {
      '@type': 'Offer',
      price: '40.00',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl('/buy'),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1847',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function faqPageSchema(items: readonly { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function productSchema() {
  return {
    '@type': 'Product',
    name: 'Hunt Showdown Cheats Subscription',
    description:
      'Undetected Hunt Showdown cheat with aimbot, ESP, wallhack, triggerbot, radar and DMA support.',
    brand: { '@type': 'Brand', name: SITE_NAME },
    image: DEFAULT_OG_IMAGE,
    url: absoluteUrl('/buy'),
    offers: {
      '@type': 'Offer',
      price: '40.00',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl('/buy'),
      seller: organizationSchema(),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1847',
      bestRating: '5',
      worstRating: '1',
    },
  };
}
