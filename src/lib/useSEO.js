import { useEffect } from 'react';

const BASE_URL = 'https://mashtech.masheco.tech';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * useSEO — sets per-page title, description, OG/Twitter meta tags and JSON-LD
 * @param {object} options
 * @param {string} options.title        Page title (appended with " | MASH Tech Ltd")
 * @param {string} options.description  Meta description
 * @param {string} [options.path]       URL path e.g. '/about'
 * @param {string} [options.image]      OG image URL
 * @param {object} [options.schema]     Extra JSON-LD object to inject
 */
export default function useSEO({ title, description, path = '/', image = DEFAULT_IMAGE, schema } = {}) {
  const fullTitle = title ? `${title} | MASH Tech Ltd` : 'MASH Tech Ltd | Web & App Development Agency in Dhaka';
  const canonical = `${BASE_URL}${path}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = attr.split('=');
        el.setAttribute(attrName.trim(), attrVal?.trim().replace(/"/g, '') ?? '');
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Primary
    setMeta('meta[name="description"]', 'name=description', description);
    setMeta('meta[name="robots"]', 'name=robots', 'index, follow');

    // Canonical
    let canonical_el = document.querySelector('link[rel="canonical"]');
    if (!canonical_el) {
      canonical_el = document.createElement('link');
      canonical_el.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical_el);
    }
    canonical_el.setAttribute('href', canonical);

    // OG
    setMeta('meta[property="og:title"]', 'property=og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property=og:description', description);
    setMeta('meta[property="og:url"]', 'property=og:url', canonical);
    setMeta('meta[property="og:image"]', 'property=og:image', image);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);
    setMeta('meta[name="twitter:url"]', 'name=twitter:url', canonical);
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', image);

    // JSON-LD (page-specific)
    if (schema) {
      const id = 'page-schema-ld';
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    return () => {
      // cleanup page-specific schema on unmount
      const s = document.getElementById('page-schema-ld');
      if (s) s.remove();
    };
  }, [fullTitle, description, canonical, image, schema]);
}
