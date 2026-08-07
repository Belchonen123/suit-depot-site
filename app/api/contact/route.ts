import { NextResponse } from "next/server";

const submissions = new Map<string, { count: number; resetAt: number }>();
const windowMs = 10 * 60 * 1000;
const maxSubmissions = 5;

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = submissions.get(key);

  if (!current || current.resetAt < now) {
    submissions.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > maxSubmissions;
}

function clean(value: unknown) {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const clientKey = getClientKey(request);

  if (!body || body.website) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(clientKey)) {
    return NextResponse.json({ error: "Too many submissions" }, { status: 429 });
  }

  const required = ["firstName", "lastName", "phone", "email", "message"];
  const missing = required.some((field) => !clean(body[field]));
  const email = clean(body.email);

  if (missing || !email.includes("@")) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const payload = {
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    phone: clean(body.phone),
    email,
    interest: clean(body.interest) || "General inquiry",
    eventDate: clean(body.eventDate),
    partySize: clean(body.partySize),
    message: clean(body.message),
  };

  if (!process.env.RESEND_API_KEY) {
    console.log("Contact form submission", payload);
    return NextResponse.json({ ok: true, mode: "local-log" });
  }

  const to = process.env.RESEND_TO_EMAIL || "hello@thesuitdepot.com";
  const from = process.env.RESEND_FROM_EMAIL || "The Suit Depot <onboarding@resend.dev>";

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: payload.email,
        subject: `Website inquiry from ${payload.firstName} ${payload.lastName}`,
        text: [
          `Name: ${payload.firstName} ${payload.lastName}`,
          `Phone: ${payload.phone}`,
          `Email: ${payload.email}`,
          `Interest: ${payload.interest}`,
          payload.eventDate ? `Event date: ${payload.eventDate}` : "",
          payload.partySize ? `Party size: ${payload.partySize}` : "",
          "",
          payload.message,
        ].filter(Boolean).join("\n"),
      }),
    });
  } catch (error) {
    // Network/transport failure — don't lose the lead or scare the customer.
    console.error("Contact email request errored; capturing submission", error, payload);
    return NextResponse.json({ ok: true, mode: "logged-fallback" });
  }

  if (!response.ok) {
    // Resend rejected the send (e.g. sender domain not yet verified). Capture the
    // submission server-side and confirm to the customer rather than erroring out.
    const detail = await response.text().catch(() => "");
    console.error("Contact email send failed; capturing submission", response.status, detail, payload);
    return NextResponse.json({ ok: true, mode: "logged-fallback" });
  }

  return NextResponse.json({ ok: true, mode: "email-sent" });
}
