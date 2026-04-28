"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type WorkCardDescriptionProps = {
  text: string;
};

/**
 * Collapsed: description hidden; only a control under title + kicker.
 * Expanded: full description and a way to collapse again.
 */
export function WorkCardDescription({ text }: WorkCardDescriptionProps) {
  const t = useTranslations("pages.works");
  const [expanded, setExpanded] = useState(false);

  if (!text.trim()) {
    return null;
  }

  return (
    <div className="mt-2">
      {expanded ? (
        <>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground/90">
            {text}
          </p>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-1.5 text-left text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {t("readLess")}
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="text-left text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {t("readMore")}
        </button>
      )}
    </div>
  );
}
