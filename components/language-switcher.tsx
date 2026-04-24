"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("language");
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div
      className={cn("inline-flex items-center gap-0.5 rounded-md border border-border/60 bg-card/50 p-0.5", className)}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((l) => (
        <Button
          key={l}
          variant="ghost"
          size="sm"
          className={cn(
            "h-7 min-w-8 px-2 text-xs font-medium",
            locale === l && "bg-primary/15 text-foreground"
          )}
          asChild
        >
          <Link href={pathname} locale={l} hrefLang={l === "pt" ? "pt-BR" : "en"}>
            {t(l as "pt" | "en")}
          </Link>
        </Button>
      ))}
    </div>
  );
}
