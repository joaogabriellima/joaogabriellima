import { getTranslations, setRequestLocale } from "next-intl/server";
import { InnerPageLayout } from "@/components/inner-page-layout";
import { PlaceholderLorem } from "@/components/placeholder-lorem";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return { title: t("about.metaTitle") };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("about.heading")}>
      <PlaceholderLorem />
    </InnerPageLayout>
  );
}
