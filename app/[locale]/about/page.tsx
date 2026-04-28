import { getTranslations, setRequestLocale } from "next-intl/server";
import { InnerPageLayout } from "@/components/inner-page-layout";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return {
    title: t("about.metaTitle"),
    description: t("about.metaDescription"),
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("about.heading")}>
      <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p className="text-foreground/90">{t("about.p1")}</p>
        <p className="text-foreground/90">{t("about.p2")}</p>
        <p className="text-foreground/90">{t("about.p3")}</p>
        <p>{t("about.p4")}</p>
        <p>{t("about.p5")}</p>
      </div>
    </InnerPageLayout>
  );
}
