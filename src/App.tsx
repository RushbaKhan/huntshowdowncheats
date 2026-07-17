import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { StorePage } from './pages/Store';
import { BLOG_POSTS, BlogListPage, BlogPostPage } from './pages/Blog';
import { I18nProvider } from './i18n';
import { DEFAULT_OG_IMAGE, SITE_URL, Seo } from './components/Seo';
import { LOGO_URL } from './config/site';
import './globals.css';

const HOME_TITLE = 'Hunt Showdown Cheats – Aimbot, ESP & Triggerbot | huntshowdowncheats.com';
const HOME_DESCRIPTION = 'Hunt Showdown cheats with aimbot, ESP, triggerbot, radar and wallhack. ESP for player and loot visibility, silent aim, recoil control, stream-proof mode and Cloud-DMA option. Undetected. Updated every patch.';

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

const BUY_FAQ_ITEMS = [
  { q: 'Can I use my Hunt Showdown cheat license on more than one PC?', a: 'Each license is tied to one hardware ID (HWID). Contact support to transfer your license to a new PC.' },
  { q: 'Is the Hunt Showdown aimbot difficult to set up?', a: 'Not at all. Setup takes less than a minute with our instructions and video guide.' },
  { q: 'Will the Hunt Showdown ESP affect FPS or performance?', a: 'No. Our cheat is external and runs as a separate process with minimal impact on game performance.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, crypto, and other payment options at checkout.' },
  { q: 'What happens after a Hunt Showdown game update?', a: 'Download the updated loader from your order page. Updates are released within hours of each patch.' },
];

function RouteSeo() {
  const { pathname } = useLocation();
  const currentPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;

  if (currentPath === '/blog') {
    return (
      <Seo
        title="Hunt Showdown Cheats Blog – ESP Guides, Aimbot Setup & Triggerbot Tips"
        description="Guides on Hunt Showdown ESP, aimbot setup, triggerbot, radar, and staying undetected. Updated after every patch."
        path="/blog"
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Hunt Showdown Cheats Blog',
          description: 'ESP guides, aimbot configs, triggerbot and radar tips for Hunt Showdown',
          url: `${SITE_URL}/blog`,
          publisher: { '@type': 'Organization', name: 'HuntShowdownCheats' },
        }}
      />
    );
  }

  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const post = BLOG_POSTS.find(entry => entry.slug === slug);
    if (post) {
      const canonicalPath = `/blog/${post.slug}`;
      const canonicalUrl = `${SITE_URL}${canonicalPath}`;
      return (
        <Seo
          title={`${post.title} | Hunt Showdown Cheats Blog`}
          description={post.excerpt}
          path={canonicalPath}
          image={post.image}
          type="article"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: toIsoDate(post.date),
            author: { '@type': 'Organization', name: 'HuntShowdownCheats' },
            publisher: {
              '@type': 'Organization',
              name: 'HuntShowdownCheats',
              logo: { '@type': 'ImageObject', url: LOGO_URL },
            },
            url: canonicalUrl,
            image: post.image || DEFAULT_OG_IMAGE,
          }}
        />
      );
    }
  }

  if (currentPath === '/buy') {
    return (
      <Seo
        title="Get Hunt Showdown Cheats – Aimbot, ESP, Triggerbot & Radar | $40/month"
        description="Get Hunt Showdown cheats. Includes aimbot, ESP, triggerbot, radar, wallhack, recoil control, silent aim and stream-proof mode. Undetected. Instant access."
        path="/buy"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Product',
              name: 'Hunt Showdown Cheats Subscription',
              description: 'Undetected Hunt Showdown cheat with aimbot, ESP, triggerbot, radar, wallhack',
              brand: { '@type': 'Brand', name: 'HuntShowdownCheats' },
              offers: {
                '@type': 'Offer',
                price: '40.00',
                priceCurrency: 'USD',
                priceValidUntil: '2026-12-31',
                availability: 'https://schema.org/InStock',
                seller: { '@type': 'Organization', name: 'HuntShowdownCheats' },
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1847',
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: BUY_FAQ_ITEMS.map(item => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              })),
            },
          ],
        }}
      />
    );
  }

  return (
    <Seo
      title={HOME_TITLE}
      description={HOME_DESCRIPTION}
      path="/"
      structuredData={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Hunt Showdown Cheats',
            applicationCategory: 'GameApplication',
            operatingSystem: 'Windows 10, Windows 11',
            description: 'Hunt Showdown cheats with aimbot, ESP, triggerbot, radar, wallhack, recoil control and stream-proof mode.',
            offers: {
              '@type': 'Offer',
              price: '40.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '1847',
            },
          },
          {
            '@type': 'FAQPage',
            mainEntity: BUY_FAQ_ITEMS.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          },
        ],
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <RouteSeo />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<StorePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </I18nProvider>
    </BrowserRouter>
  );
}
