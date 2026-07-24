import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { HomePage } from './pages/Home';
import { StorePage } from './pages/Store';
import { BLOG_POSTS, BlogListPage, BlogPostPage } from './pages/Blog';
import { I18nProvider } from './i18n';
import { DEFAULT_OG_IMAGE, SITE_URL, Seo } from './components/Seo';
import { LOGO_URL } from './config/site';
import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BUY_DESCRIPTION,
  BUY_TITLE,
  HOME_DESCRIPTION,
  HOME_FAQ_ITEMS,
  HOME_TITLE,
  STORE_FAQ_ITEMS,
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  productSchema,
  softwareApplicationSchema,
  videoObjectSchema,
  webPageSchema,
} from './config/seo';
import './globals.css';

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

function RouteSeo() {
  const { pathname } = useLocation();
  const currentPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;

  if (currentPath === '/blog') {
    return (
      <Seo
        title={BLOG_TITLE}
        description={BLOG_DESCRIPTION}
        path="/blog"
        type="website"
        structuredData={[
          {
            '@type': 'Blog',
            name: 'Hunt Showdown Cheats Blog',
            description: BLOG_DESCRIPTION,
            url: `${SITE_URL}/blog`,
            publisher: organizationSchema(),
            blogPost: BLOG_POSTS.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              url: absoluteUrl(`/blog/${post.slug}`),
              datePublished: toIsoDate(post.date),
            })),
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />
    );
  }

  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const post = BLOG_POSTS.find(entry => entry.slug === slug);
    if (post) {
      const canonicalPath = `/blog/${post.slug}`;
      const canonicalUrl = absoluteUrl(canonicalPath);
      const imageUrl = absoluteUrl(post.image || DEFAULT_OG_IMAGE);
      const articleSchemas: Record<string, unknown>[] = [
        {
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: toIsoDate(post.date),
          dateModified: toIsoDate(post.date),
          author: organizationSchema(),
          publisher: {
            ...organizationSchema(),
            logo: { '@type': 'ImageObject', url: LOGO_URL },
          },
          mainEntityOfPage: canonicalUrl,
          url: canonicalUrl,
          image: imageUrl,
          articleSection: post.category,
        },
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: canonicalPath },
        ]),
      ];
      if (post.faq?.length) {
        articleSchemas.push(faqPageSchema(post.faq));
      }
      return (
        <Seo
          title={`${post.title} | Hunt Cheats Blog`}
          description={post.excerpt}
          path={canonicalPath}
          image={post.image}
          type="article"
          structuredData={articleSchemas}
        />
      );
    }
  }

  if (currentPath === '/buy') {
    return (
      <Seo
        title={BUY_TITLE}
        description={BUY_DESCRIPTION}
        path="/buy"
        structuredData={[
          productSchema(),
          faqPageSchema(STORE_FAQ_ITEMS),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Get Hunt Showdown Cheats', path: '/buy' },
          ]),
        ]}
      />
    );
  }

  return (
    <Seo
      title={HOME_TITLE}
      description={HOME_DESCRIPTION}
      path="/"
      structuredData={[
        webPageSchema('/', HOME_TITLE, HOME_DESCRIPTION),
        softwareApplicationSchema(),
        faqPageSchema(HOME_FAQ_ITEMS),
        videoObjectSchema(),
        breadcrumbSchema([{ name: 'Home', path: '/' }]),
      ]}
    />
  );
}

export default function App() {
  return (
    <SmoothScroll>
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
    </SmoothScroll>
  );
}
