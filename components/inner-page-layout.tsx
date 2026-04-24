import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

/** Shared h1 styles for inner pages; use with `omitHeading` when the title lives in custom layout. */
export const innerPageHeadingTextClassName =
  "text-3xl font-bold tracking-tight text-foreground sm:text-4xl";

type InnerPageLayoutProps = {
  children: React.ReactNode;
  /** Merges with default content padding (e.g. contact: tighter vertical for above-the-fold). */
  contentClassName?: string;
} & (
  | {
      title: string;
      /** Merges with default h1 margin. */
      headingClassName?: string;
      omitHeading?: false;
    }
  | {
      /** Skip the default full-width h1; render the title inside `children` (e.g. beside a form). */
      omitHeading: true;
    }
);

export function InnerPageLayout(props: InnerPageLayoutProps) {
  const { children, contentClassName } = props;
  const useDefaultHeading = !("omitHeading" in props && props.omitHeading);
  const title = "title" in props ? props.title : undefined;
  const headingClassName = "title" in props ? props.headingClassName : undefined;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative pt-site-header">
        <div className="ds-ambient" aria-hidden>
          <div className="ds-ambient-blob-right" />
          <div className="ds-ambient-blob-left" />
        </div>
        <div
          className={cn(
            "mx-auto w-full min-w-0 max-w-[var(--width-readable)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8",
            contentClassName
          )}
        >
          {useDefaultHeading && title != null ? (
            <h1
              className={cn("mb-8", innerPageHeadingTextClassName, headingClassName)}
            >
              {title}
            </h1>
          ) : null}
          {children}
        </div>
      </main>
    </div>
  );
}
