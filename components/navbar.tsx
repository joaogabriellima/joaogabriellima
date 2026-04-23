"use client";

import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";

const socialLinks = [
  { href: "https://github.com/joaogabriellima" as const, icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/joaoggabriellima/" as const, icon: Linkedin, label: "LinkedIn" },
] as const;

const navHrefs = [
  { href: "/#about", key: "about" as const },
  { href: "/#works", key: "works" as const },
  { href: "/#services", key: "services" as const },
  { href: "/#contact", key: "contact" as const },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            {t("logo")}
            <span className="text-primary">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navHrefs.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navHrefs.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
