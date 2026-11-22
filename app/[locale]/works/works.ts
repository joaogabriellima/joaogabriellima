export type WorkId = "desce" | "wahi";

/**
 * Image paths are URLs from the site root — files sit in `public/`.
 * Example: `/works/desce.png` → `public/works/desce.png`.
 * Keep these here so next/image and the bundler get static strings, not i18n copy.
 */
export const works: ReadonlyArray<{
  id: WorkId;
  image: string;
  /** Live product. When set, the whole card links to it (new tab). */
  url?: string;
}> = [
  { id: "desce", image: "/works/desce.png" },
  { id: "wahi", image: "/works/wahi.png", url: "https://joinwahi.com.br" },
];
