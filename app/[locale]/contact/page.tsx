import { getTranslations, setRequestLocale } from "next-intl/server";
import { InnerPageLayout } from "@/components/inner-page-layout";
import { PlaceholderLorem } from "@/components/placeholder-lorem";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return { title: t("contact.metaTitle") };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("contact.heading")}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div>
          <PlaceholderLorem
            extraParagraphs={[
              "Aenean vehicula leo a erat tempus, vitae tincidunt nisl convallis. Nunc a magna a lectus tincidunt tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            ]}
          />
        </div>
        <div>
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6 sm:p-8">
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              {t("contact.formLabel")}
            </p>
            <div className="space-y-4" aria-hidden>
              <div className="h-10 rounded-lg border border-dashed border-border/80 bg-background/50" />
              <div className="h-10 rounded-lg border border-dashed border-border/80 bg-background/50" />
              <div className="h-28 rounded-lg border border-dashed border-border/80 bg-background/50" />
              <div className="h-11 w-full max-w-xs rounded-lg border border-dashed border-primary/30 bg-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
