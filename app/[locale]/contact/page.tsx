import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import { InnerPageLayout } from "@/components/inner-page-layout";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return {
    title: t("contact.metaTitle"),
    description: t("contact.metaDescription"),
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("contact.heading")}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p className="text-foreground/90">{t("contact.introP1")}</p>
          <p>{t("contact.introP2")}</p>
        </div>
        <div>
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              {t("contact.formTitle")}
            </h2>
            <p className="mb-5 mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {t("contact.formIntro")}
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
