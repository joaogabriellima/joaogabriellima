export type WorkId = "desce";

/**
 * Image paths are URLs from the site root — files sit in `public/`.
 * Example: `/works/desce.png` → `public/works/desce.png`.
 * Keep these here so next/image and the bundler get static strings, not i18n copy.
 */
export const works: ReadonlyArray<{
  id: WorkId;
  image: string;
}> = [{ id: "desce", image: "/works/desce.png" }];
