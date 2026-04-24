import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactRequestSchema,
  escapeHtml,
  type ContactRequest,
} from "@/lib/contact-request";

function buildEmailHtml(payload: ContactRequest): string {
  const sourceLabel = payload.source === "hero" ? "Hero (home)" : "Contact page";
  const nameBlock =
    payload.name?.trim() && payload.message
      ? `<p><strong>Name:</strong> ${escapeHtml(payload.name.trim())}</p>`
      : "";
  const messageBlock =
    payload.message?.trim() && payload.source === "contact"
      ? `<p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(payload.message.trim())}</p>`
      : payload.source === "hero"
        ? "<p><em>Quick lead — only email captured on the hero form.</em></p>"
        : "";

  return `
    <h2>New portfolio message</h2>
    <p><strong>Source:</strong> ${escapeHtml(sourceLabel)}</p>
    <p><strong>From email:</strong> ${escapeHtml(payload.email)}</p>
    ${nameBlock}
    ${messageBlock}
    <hr />
    <p style="color:#666;font-size:12px">Reply to this email is set to the visitor address when supported.</p>
  `;
}

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.TO_EMAIL;
  const from = process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";

  if (!key || !to) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const payload = parsed.data;
  const subject =
    payload.source === "hero"
      ? `[Portfolio] New lead from hero — ${payload.email}`
      : `[Portfolio] Message from ${payload.name?.trim() ?? "contact"}`;

  const resend = new Resend(key);

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject,
    html: buildEmailHtml(payload),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Could not send email. Try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
