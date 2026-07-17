import { useEffect } from 'react';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../config/site';

export { SITE_URL, DEFAULT_OG_IMAGE };

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown>;
};

function absoluteUrl(pathOrUrl: string) {
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
  const structuredDataJson = structuredData ? JSON.stringify(structuredData) : '';

  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: 'hunt showdown cheats, huntshowdown cheats, hunt cheats, hunt showdown aimbot, huntshowdown aimbot, hunt showdown esp, huntshowdown esp, hunt showdown triggerbot, huntshowdown triggerbot, hunt esp, hunt aimbot' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'HuntShowdownCheats' });
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
