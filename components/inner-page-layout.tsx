import { Navbar } from "@/components/navbar";

type InnerPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function InnerPageLayout({ title, children }: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative pt-site-header">
        <div className="ds-ambient" aria-hidden>
          <div className="ds-ambient-blob-right" />
          <div className="ds-ambient-blob-left" />
        </div>
        <div className="mx-auto w-full min-w-0 max-w-[var(--width-readable)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {children}
        </div>
      </main>
    </div>
  );
}
