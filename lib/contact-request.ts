import { z } from "zod";

export const contactRequestSchema = z
  .object({
    source: z.enum(["hero", "contact"]),
    email: z.string().email().max(254),
    name: z.string().max(120).optional(),
    message: z.string().max(5000).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.source === "contact") {
      const name = data.name?.trim() ?? "";
      if (name.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "name",
          path: ["name"],
        });
      }
      const msg = data.message?.trim() ?? "";
      if (msg.length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "message",
          path: ["message"],
        });
      }
    }
  });

export type ContactRequest = z.infer<typeof contactRequestSchema>;

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
