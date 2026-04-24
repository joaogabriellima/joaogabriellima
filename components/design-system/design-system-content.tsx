import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  LAYOUT,
  RADIUS_DEMO,
  SEMANTIC_SWATCHES,
  SPACING_STEPS,
  TYPO_SCALE,
} from "@/lib/design-tokens";

type DesignSystemContentProps = {
  locale: string;
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

export async function DesignSystemContent({ locale }: DesignSystemContentProps) {
  const t = await getTranslations({ locale, namespace: "pages" });

  return (
    <div className="space-y-16 pb-20">
      <p className="text-pretty text-lg text-muted-foreground">{t("designSystem.intro")}</p>

      <Section title={t("designSystem.sections.layout")}>
        <div className="grid gap-3 font-mono text-sm text-foreground sm:grid-cols-2">
          {Object.values(LAYOUT).map((row) => (
            <div
              key={row}
              className="rounded-lg border border-border/80 bg-card/30 px-4 py-3 text-xs sm:text-sm"
            >
              {row}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          CSS: <code className="rounded bg-muted px-1.5 py-0.5">.pt-site-header</code>
          {", "}
          <code className="rounded bg-muted px-1.5 py-0.5">max-w-[var(--width-readable)]</code>
          {", "}
          <code className="rounded bg-muted px-1.5 py-0.5">max-w-[var(--width-wide)]</code>
        </p>
      </Section>

      <Section title={t("designSystem.sections.colors")}>
        <ul className="grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SEMANTIC_SWATCHES.map((s) => (
            <li key={s.name}>
              <div
                className={cn(
                  "flex h-20 flex-col justify-end rounded-xl border border-border/60 p-2 shadow-sm",
                  s.className
                )}
              >
                <span
                  className={cn("truncate text-xs font-medium", s.textClass)}
                  title={s.name}
                >
                  {t(`designSystem.swatchNames.${s.labelKey}`)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={t("designSystem.sections.typography")}>
        <div className="space-y-2 rounded-xl border border-border/60 bg-card/20 p-4">
          {TYPO_SCALE.map((row) => (
            <p key={row.className} className={cn(row.className, "text-foreground")}>
              {row.sample} — {row.className}
            </p>
          ))}
        </div>
      </Section>

      <Section title={t("designSystem.sections.spacing")}>
        <div className="flex flex-wrap items-end gap-4">
          {SPACING_STEPS.map((s) => (
            <div
              key={s.step}
              className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground"
            >
              <div
                className={cn("shrink-0 rounded-sm bg-primary/80", s.box)}
                title={`${s.step} → ${(s.step * 0.25).toFixed(2).replace(/\.?0+$/, "")} rem`}
              />
              {s.step} ({(s.step * 0.25).toString().replace(/\.0$/, "")} rem)
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {t("designSystem.spacingNote")}
        </p>
      </Section>

      <Section title={t("designSystem.sections.radius")}>
        <div className="flex flex-wrap items-end gap-4">
          {RADIUS_DEMO.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
              <div className={cn("h-14 w-14 border-2 border-primary/30 bg-primary/5", r.className)} />
              {r.label}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">{t("designSystem.radiusNote")}</p>
      </Section>

      <Section title={t("designSystem.sections.brand")}>
        <p className="text-sm text-muted-foreground">{t("designSystem.brandBody")}</p>
        <p className="text-gradient-brand w-fit text-2xl font-bold sm:text-3xl">Aa — sample gradient</p>
        <code className="text-xs text-muted-foreground">.text-gradient-brand</code>
      </Section>

      <Section title={t("designSystem.sections.components")}>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Button sm</Button>
            <Button>Button default</Button>
            <Button size="lg">Button lg</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="max-w-sm space-y-2">
            <Input placeholder="Input" />
            <Textarea className="min-h-[100px] resize-y" placeholder="Textarea" />
          </div>
          <div className="max-w-sm">
            <Card>
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>Supporting copy for a card in the system.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card content area.</p>
                <Separator className="my-4" />
                <Button className="w-full">Action</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
