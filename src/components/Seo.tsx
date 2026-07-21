import { useEffect } from 'react';
import { SEO_KEYWORDS } from '../config/seo';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../config/site';

export { SITE_URL, DEFAULT_OG_IMAGE };

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  return new URL(pathOrUrl, SITE_URL).toString();
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  structuredData,
}: SeoProps) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const structuredDataJson = structuredData
    ? JSON.stringify(
        Array.isArray(structuredData)
          ? { '@context': 'https://schema.org', '@graph': structuredData }
          : structuredData
      )
    : '';

  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: SEO_KEYWORDS });
    upsertMeta('meta[name="author"]', { name: 'author', content: 'HuntShowdownCheats' });
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: 'index, follow' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'HuntShowdownCheats' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1920' });
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '1080' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: '@huntshowdowncheats' });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: 'twitter:image:alt',
      content: 'Hunt Showdown Cheats – Aimbot, ESP, Wallhack and Triggerbot',
    });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

    const existingJsonLd = document.head.querySelector('script[data-route-json-ld="true"]');
    if (!structuredDataJson) {
      existingJsonLd?.remove();
      return;
    }
    const jsonLd = (existingJsonLd ?? document.createElement('script')) as HTMLScriptElement;
    jsonLd.type = 'application/ld+json';
    jsonLd.dataset.routeJsonLd = 'true';
    jsonLd.textContent = structuredDataJson;
    if (!existingJsonLd) {
      document.head.appendChild(jsonLd);
    }
  }, [canonicalUrl, description, imageUrl, structuredDataJson, title, type]);

  return null;
}
