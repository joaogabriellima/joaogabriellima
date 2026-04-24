import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

type InnerPageLayoutProps = {
  title: string;
  children: React.ReactNode;
  /** Merges with default content padding (e.g. contact: tighter vertical for above-the-fold). */
  contentClassName?: string;
  /** Merges with default h1 margin. */
  headingClassName?: string;
};

export function InnerPageLayout({
  title,
  children,
  contentClassName,
  headingClassName,
}: InnerPageLayoutProps) {
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
          <h1
            className={cn(
              "mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
              headingClassName
            )}
          >
            {title}
          </h1>
          {children}
        </div>
      </main>
    </div>
  );
}
