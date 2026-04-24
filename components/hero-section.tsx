"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitContact } from "@/lib/submit-contact";
import { cn } from "@/lib/utils";

import portrait from "@/public/portrait.jpeg";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = useTranslations("hero");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const result = await submitContact({ source: "hero", email: email.trim() });
    if (result.ok) {
      setStatus("success");
      setEmail("");
      return;
    }
    setStatus("error");
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-x-clip pt-site-header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/15 rounded-full animate-pulse delay-700" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--width-wide)] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="min-w-0 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                {t("greeting")}
              </p>
              <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                <span className="block">{t("headline1")}</span>
                <span className="text-gradient-brand block">
                  {t("headline2")}
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty">
              {t("sub")}
            </p>

            <div className="max-w-md mx-auto w-full space-y-2 lg:mx-0">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error" || status === "success") setStatus("idle");
                  }}
                  className="h-12 rounded-xl bg-card border-border/50 focus:border-primary"
                  required
                  disabled={status === "sending"}
                />
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium gap-2 group shrink-0"
                >
                  {status === "sending" ? t("formSending") : t("cta")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              {(status === "success" || status === "error") && (
                <p
                  className={cn(
                    "text-sm",
                    status === "success" && "text-primary",
                    status === "error" && "text-destructive"
                  )}
                  role={status === "error" ? "alert" : "status"}
                >
                  {status === "success" ? t("formSuccess") : t("formError")}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">9+</p>
                <p className="text-sm text-muted-foreground">{t("statsYears")}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">{t("statsProjects")}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">{t("statsClients")}</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
            </div>

            <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-3xl rotate-6" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src={portrait}
                  alt={t("portraitAlt")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
