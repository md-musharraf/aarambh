import { useEffect } from "react";

/**
 * SEO component updates page metadata dynamically via DOM manipulation.
 * This is clean, lightweight, and prevents peer dependency issues with React 19.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalPath = "",
  ogImage = "https://ik.imagekit.io/ts2hm0adf/tr:w-1200/aarambh-banquet-ranchi/THE9-20_.jpg?updatedAt=1782469690532",
  ogType = "website",
  schema = null,
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to set or create a meta tag
    const setMetaTag = (attrName, attrVal, contentVal) => {
      if (contentVal === undefined || contentVal === null) return;
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", contentVal);
    };

    // 2. Set Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // 3. Set Open Graph (OG) Tags
    const siteUrl = "https://aarambhbanquet.com";
    const fullUrl = `${siteUrl}${canonicalPath}`;
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:type", ogType);

    // 4. Set Twitter Card Tags
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);
    setMetaTag("name", "twitter:card", "summary_large_image");

    // 5. Set Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", fullUrl);

    // 6. Set Structured Data (JSON-LD Schema)
    let scriptEl = document.getElementById("json-ld-schema");
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "json-ld-schema";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else {
      if (scriptEl) {
        scriptEl.remove();
      }
    }

    // Cleanup when component unmounts or updates
    return () => {
      // If schema changes or component unmounts, remove it
      const currentScript = document.getElementById("json-ld-schema");
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, ogImage, ogType, schema]);

  return null;
};

export default SEO;
