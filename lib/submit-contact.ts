export type SubmitContactInput =
  | { source: "hero"; email: string }
  | {
      source: "contact";
      email: string;
      name: string;
      message: string;
    };

export async function submitContact(body: SubmitContactInput): Promise<
  | { ok: true }
  | { ok: false; status: number; message?: string }
> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      return { ok: false, status: res.status, message: data.error };
    }
    return { ok: true };
  } catch {
    return { ok: false, status: 0 };
  }
}
