import { getTranslations, setRequestLocale } from "next-intl/server";
import { InnerPageLayout } from "@/components/inner-page-layout";
import { PlaceholderLorem } from "@/components/placeholder-lorem";
import { Separator } from "@/components/ui/separator";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return { title: t("services.metaTitle") };
}

const SERVICE_PLACEHOLDERS = [
  { title: "Service A", kicker: "Lorem dolor" },
  { title: "Service B", kicker: "Ipsum elit" },
  { title: "Service C", kicker: "Sit amet" },
  { title: "Service D", kicker: "Consequat" },
];

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("services.heading")}>
      <div className="mb-10">
        <PlaceholderLorem />
      </div>
      <ol className="list-none space-y-0">
        {SERVICE_PLACEHOLDERS.map((item, i) => (
          <li key={item.title}>
            {i > 0 ? <Separator className="my-8" /> : null}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-sm font-semibold text-muted-foreground"
                aria-hidden
              >
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                  {item.title}
                </h2>
                <p className="text-sm text-primary/90">{item.kicker}</p>
                <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </InnerPageLayout>
  );
}
