// lib/url.ts

// Base URL — change this in one place if your domain changes
export const BASE_URL = "https://ypd-chat.vercel.app";

type UrlOptions = {
  path?: string; // e.g., "/product-name"
  query?: Record<string, string | number>; // e.g., { role: "professional" }
};

// Helper to build full URLs
export function buildUrl({ path = "", query }: UrlOptions) {
  let url = BASE_URL;

  // Add path if exists
  if (path) {
    if (!path.startsWith("/")) path = "/" + path;
    url += path;
  }

  // Add query params if exists
  if (query && Object.keys(query).length > 0) {
    const params = new URLSearchParams(
      query as Record<string, string>
    ).toString();
    url += `?${params}`;
  }

  return url;
}
