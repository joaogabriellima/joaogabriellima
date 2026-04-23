import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { DesignSystemContent } from "@/components/design-system/design-system-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return {
    title: t("designSystem.metaTitle"),
    robots: { index: false, follow: false },
  };
}

export default async function DesignSystemPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative pt-site-header">
        <div className="ds-ambient" aria-hidden>
          <div className="ds-ambient-blob-right" />
          <div className="ds-ambient-blob-left" />
        </div>
        <div className="relative mx-auto w-full min-w-0 max-w-[var(--width-wide)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("designSystem.heading")}
          </h1>
          <DesignSystemContent locale={locale} />
        </div>
      </main>
    </div>
  );
}
