"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field-level validation errors, keyed by field name. */
  errors?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendEnquiry(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // Honeypot: real users never fill this hidden field; bots do.
  if (formData.get("company")) {
    return { status: "success", message: "Thank you! We'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const destination = String(formData.get("destination") ?? "").trim();
  const travelDate = String(formData.get("travelDate") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "That email doesn't look right.";
  if (!message) errors.message = "Please add a short message.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "magicalcontinentltd@outlook.com";
  const from = process.env.RESEND_FROM ?? "Magical Continent <onboarding@resend.dev>";

  // If email delivery isn't configured yet, don't lose the lead — surface a
  // clear message so the site owner knows to set the env vars (see .env.example).
  if (!apiKey) {
    console.warn(
      "[sendEnquiry] RESEND_API_KEY is not set — enquiry received but not emailed:",
      { name, email, destination, travelDate }
    );
    return {
      status: "error",
      message:
        "We couldn't submit your enquiry right now. Please reach us on WhatsApp or by phone below.",
    };
  }

  const html = `
    <h2>New travel enquiry — Magical Continent</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Destination:</strong> ${escapeHtml(destination) || "—"}</p>
    <p><strong>Travel date:</strong> ${escapeHtml(travelDate) || "—"}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name}${destination ? ` — ${destination}` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[sendEnquiry] Resend API error:", res.status, detail);
      return {
        status: "error",
        message: "Something went wrong sending your enquiry. Please try again shortly.",
      };
    }
  } catch (err) {
    console.error("[sendEnquiry] Network error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your enquiry. Please try again shortly.",
    };
  }

  return {
    status: "success",
    message: "Thank you! Your enquiry is on its way — we'll reply very soon.",
  };
}
