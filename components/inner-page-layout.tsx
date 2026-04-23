import { Navbar } from "@/components/navbar";

type InnerPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function InnerPageLayout({ title, children }: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative pt-16 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-x-clip"
          aria-hidden
        >
          <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl md:h-80 md:w-80" />
          <div className="absolute top-1/2 -left-20 h-48 w-48 rounded-full bg-primary/[0.04] blur-3xl" />
        </div>
        <div className="mx-auto w-full min-w-0 max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {children}
        </div>
      </main>
    </div>
  );
}
