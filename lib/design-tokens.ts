/**
 * Programmatic design-system metadata (the source of values for the UI
 * is CSS in `app/globals.css`; this module documents and drives the preview).
 */

export const LAYOUT = {
  siteHeader: "var(--site-header-h) — 4rem mobile, 5rem lg+",
  widthReadable: "var(--width-readable) — 48rem (inner / article)",
  widthWide: "var(--width-wide) — 80rem (hero & wide sections)",
} as const;

export const SEMANTIC_SWATCHES = [
  {
    name: "background",
    labelKey: "background" as const,
    className: "bg-background",
    textClass: "text-foreground",
  },
  {
    name: "foreground",
    labelKey: "foreground" as const,
    className: "bg-foreground",
    textClass: "text-background",
  },
  { name: "card", labelKey: "card" as const, className: "bg-card", textClass: "text-card-foreground" },
  { name: "primary", labelKey: "primary" as const, className: "bg-primary", textClass: "text-primary-foreground" },
  { name: "secondary", labelKey: "secondary" as const, className: "bg-secondary", textClass: "text-secondary-foreground" },
  { name: "muted", labelKey: "muted" as const, className: "bg-muted", textClass: "text-muted-foreground" },
  { name: "accent", labelKey: "accent" as const, className: "bg-accent", textClass: "text-accent-foreground" },
  { name: "destructive", labelKey: "destructive" as const, className: "bg-destructive", textClass: "text-white" },
  { name: "border", labelKey: "border" as const, className: "bg-border", textClass: "text-foreground" },
] as const;

export const RADIUS_DEMO = [
  { className: "rounded-sm", label: "sm" },
  { className: "rounded-md", label: "md" },
  { className: "rounded-lg", label: "lg" },
  { className: "rounded-xl", label: "xl" },
  { className: "rounded-2xl", label: "2xl" },
  { className: "rounded-3xl", label: "3xl" },
] as const;

export const TYPO_SCALE = [
  { className: "text-xs", sample: "Display xs" },
  { className: "text-sm", sample: "Display sm" },
  { className: "text-base", sample: "Display base" },
  { className: "text-lg", sample: "Display lg" },
  { className: "text-xl", sample: "Display xl" },
  { className: "text-2xl font-semibold", sample: "Display 2xl" },
  { className: "text-3xl font-bold", sample: "Display 3xl" },
  { className: "text-4xl font-bold", sample: "Display 4xl" },
] as const;

/** Tailwind spacing scale: step → box (both dimensions = step in spacing units). */
export const SPACING_STEPS = [
  { step: 2, box: "h-2 w-2" },
  { step: 4, box: "h-4 w-4" },
  { step: 6, box: "h-6 w-6" },
  { step: 8, box: "h-8 w-8" },
  { step: 12, box: "h-12 w-12" },
  { step: 16, box: "h-16 w-16" },
] as const;
