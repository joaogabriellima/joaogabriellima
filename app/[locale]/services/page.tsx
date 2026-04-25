import { getTranslations, setRequestLocale } from "next-intl/server";
import { InnerPageLayout } from "@/components/inner-page-layout";
import { Separator } from "@/components/ui/separator";
import { services, type ServiceId } from "./services";

type PageProps = {
  params: Promise<{ locale: string }>;
};

function serviceCopyKey(
  id: ServiceId,
  field: "title" | "kicker" | "description",
) {
  return `services.items.${id}.${field}` as const;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return { title: t("services.metaTitle") };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("services.heading")}>
      <div className="mb-10">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("services.intro")}
        </p>
      </div>
      <ol className="list-none space-y-0">
        {services.map((item, i) => (
          <li key={item.id}>
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
                  {t(serviceCopyKey(item.id, "title"))}
                </h2>
                <p className="text-sm text-primary/90">
                  {t(serviceCopyKey(item.id, "kicker"))}
                </p>
                <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t(serviceCopyKey(item.id, "description"))}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </InnerPageLayout>
  );
}
