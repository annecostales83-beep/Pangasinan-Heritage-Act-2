/**
 * Prefixes public asset paths when the app is deployed as a GitHub Pages
 * project site (for example /pangasinan-heritage).
 *
 * Next.js automatically applies basePath to <Link> routes, but plain <img>
 * elements need the prefix added manually.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  if (!path) return basePath || "/";
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
