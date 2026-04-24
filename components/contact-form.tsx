"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/submit-contact";
import { cn } from "@/lib/utils";

export function ContactForm({ className }: { className?: string }) {
  const t = useTranslations("contactForm");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorKey, setErrorKey] = useState<"network" | "validationName" | "validationMessage" | null>(
    null
  );

  function clearFeedback() {
    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorKey(null);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nameTrim = name.trim();
    const emailTrim = email.trim();
    const messageTrim = message.trim();

    if (nameTrim.length < 1) {
      setErrorKey("validationName");
      setStatus("error");
      return;
    }
    if (messageTrim.length < 10) {
      setErrorKey("validationMessage");
      setStatus("error");
      return;
    }

    setErrorKey(null);
    setStatus("sending");
    const result = await submitContact({
      source: "contact",
      email: emailTrim,
      name: nameTrim,
      message: messageTrim,
    });

    if (result.ok) {
      setStatus("success");
      setErrorKey(null);
      setName("");
      setEmail("");
      setMessage("");
      return;
    }
    setErrorKey("network");
    setStatus("error");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-4", className)}
    >
      <div className="space-y-2">
        <Label htmlFor="contact-name">{t("name")}</Label>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clearFeedback();
          }}
          required
          disabled={status === "sending"}
          className="h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">{t("email")}</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            clearFeedback();
          }}
          required
          disabled={status === "sending"}
          className="h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">{t("message")}</Label>
        <Textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearFeedback();
          }}
          required
          minLength={10}
          rows={5}
          disabled={status === "sending"}
          className="min-h-[120px] resize-y"
        />
        <p className="text-xs text-muted-foreground">{t("messageHint")}</p>
      </div>
      <Button
        type="submit"
        className="h-11 w-full sm:w-auto"
        disabled={status === "sending"}
      >
        {status === "sending" ? t("sending") : t("send")}
      </Button>
      {status === "success" ? (
        <p className="text-sm text-primary" role="status">
          {t("success")}
        </p>
      ) : null}
      {status === "error" && errorKey ? (
        <p className="text-sm text-destructive" role="alert">
          {errorKey === "network"
            ? t("error")
            : errorKey === "validationName"
              ? t("validationName")
              : t("validationMessage")}
        </p>
      ) : null}
    </form>
  );
}
