import { getTranslations, setRequestLocale } from "next-intl/server";
import { InnerPageLayout } from "@/components/inner-page-layout";
import { PlaceholderLorem } from "@/components/placeholder-lorem";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return { title: t("works.metaTitle") };
}

const PLACEHOLDER_LABELS = [
  "Dolor sit amet",
  "Consectetur elit",
  "Adipiscing sed do",
  "Eiusmod tempor",
  "Incididunt labore",
  "Aliqua commodo",
];

export default async function WorksPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("works.heading")}>
      <div className="mb-10">
        <PlaceholderLorem
          extraParagraphs={[
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras tincidunt, risus a finibus tristique, elit mauris facilisis velit, sit amet varius sapien augue a sem.",
          ]}
        />
      </div>
      <ul className="grid list-none gap-6 sm:grid-cols-2">
        {PLACEHOLDER_LABELS.map((label, i) => (
          <li key={i}>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 transition-colors hover:border-border">
              <div
                className="aspect-[16/10] w-full bg-gradient-to-br from-primary/5 via-muted/50 to-primary/10"
                aria-hidden
              />
              <div className="p-4 sm:p-5">
                <h2 className="font-semibold text-foreground">Project {i + 1}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </InnerPageLayout>
  );
}
