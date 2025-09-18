import { useEffect } from "react";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Head({ title, description, canonical, og = {} }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) upsertMeta("name", "description", description);
    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
    Object.entries({
      "og:title": og.title ?? title,
      "og:description": og.description ?? description,
      "og:url": og.url ?? canonical,
      "og:image": og.image,
      "og:type": og.type ?? "website",
    }).forEach(([k, v]) => v && upsertMeta("property", k, v));
  }, [title, description, canonical, og]);

  return null;
}
