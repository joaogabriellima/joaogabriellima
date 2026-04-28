import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { InnerPageLayout } from "@/components/inner-page-layout";
import { WorkCardDescription } from "@/components/work-card-description";
import { works, type WorkId } from "./works";

type PageProps = {
  params: Promise<{ locale: string }>;
};

function workCopyKey(
  id: WorkId,
  field: "title" | "kicker" | "description",
) {
  return `works.items.${id}.${field}` as const;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  return { title: t("works.metaTitle") };
}

export default async function WorksPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <InnerPageLayout title={t("works.heading")}>
      <div className="mb-10">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("works.intro")}
        </p>
      </div>
      <ul className="grid list-none gap-6 sm:grid-cols-2">
        {works.map((work) => (
          <li key={work.id}>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 transition-colors hover:border-border">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/5 via-muted/50 to-primary/10">
                <Image
                  src={work.image}
                  alt={t(workCopyKey(work.id, "title"))}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="font-semibold text-foreground">
                  {t(workCopyKey(work.id, "title"))}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(workCopyKey(work.id, "kicker"))}
                </p>
                <WorkCardDescription
                  text={t(workCopyKey(work.id, "description"))}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </InnerPageLayout>
  );
}
