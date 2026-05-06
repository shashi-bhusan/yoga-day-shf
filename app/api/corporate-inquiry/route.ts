import { Resend } from "resend";

type CorporateInquiryPayload = {
  name: string;
  contact: string;
  organisation: string;
  interest: string;
  message: string;
  website?: string;
  startedAt?: number;
};

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function normalizeText(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildTextEmail(payload: CorporateInquiryPayload) {
  const lines = [
    "New corporate enquiry",
    "",
    `Name: ${payload.name}`,
    `Contact: ${payload.contact}`,
    `Organisation / business: ${payload.organisation}`,
    `Stall / sponsor / partner interest: ${payload.interest || "(not selected)"}`,
    "",
    "Tell us about yourself:",
    payload.message,
  ];
  return lines.join("\n");
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Partial<CorporateInquiryPayload>;

    const payload: CorporateInquiryPayload = {
      name: normalizeText(data.name),
      contact: normalizeText(data.contact),
      organisation: normalizeText(data.organisation),
      interest: normalizeText(data.interest),
      message: normalizeText(data.message),
      website: normalizeText(data.website),
      startedAt: typeof data.startedAt === "number" ? data.startedAt : undefined,
    };

    // Basic bot checks: honeypot + minimum time on form.
    if (payload.website) {
      return Response.json({ ok: true }, { status: 200 });
    }
    if (payload.startedAt && Date.now() - payload.startedAt < 1500) {
      return Response.json({ ok: true }, { status: 200 });
    }

    if (!payload.name || !payload.contact || !payload.organisation || !payload.message) {
      return Response.json(
        { ok: false, error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const resend = new Resend(getEnv("RESEND_API_KEY"));
    const to = process.env.CORPORATE_INQUIRY_TO ?? "info@scotlandyogaday.co.uk";
    const from = getEnv("RESEND_FROM");

    const replyTo = looksLikeEmail(payload.contact) ? payload.contact : undefined;

    await resend.emails.send({
      from,
      to,
      subject: "Corporate enquiry — Scotland's International Yoga Day",
      text: buildTextEmail(payload),
      replyTo,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}

