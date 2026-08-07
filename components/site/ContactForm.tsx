"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });
    setStatus(response.ok ? "sent" : "error");
    if (response.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-semibold">
        What can we help with?
        <select name="interest" className="border border-ink/15 bg-paper px-4 py-3 font-normal" defaultValue="Showroom visit">
          <option>Showroom visit</option>
          <option>Custom suit or shirt</option>
          <option>Tailoring or alterations</option>
          <option>Tuxedo rental</option>
          <option>Wedding party</option>
          <option>Online order question</option>
        </select>
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          First name
          <input name="firstName" className="border border-ink/15 px-4 py-3 font-normal" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Last name
          <input name="lastName" className="border border-ink/15 px-4 py-3 font-normal" required />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Phone
          <input name="phone" type="tel" className="border border-ink/15 px-4 py-3 font-normal" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input name="email" type="email" className="border border-ink/15 px-4 py-3 font-normal" required />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Event Date <span className="font-normal text-slate">(optional)</span>
          <input name="eventDate" type="date" className="border border-ink/15 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Party size
          <input
            name="partySize"
            type="number"
            min="1"
            inputMode="numeric"
            className="border border-ink/15 px-4 py-3 font-normal"
            placeholder="Optional"
          />
        </label>
      </div>
      <label className="hidden">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Message
        <textarea name="message" rows={6} className="border border-ink/15 px-4 py-3 font-normal" required />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 border border-ink bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-paper transition hover:bg-charcoal disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send Message"}
      </button>
      {status === "sent" && <p className="text-sm text-slate">Message received. The showroom can follow up with the details you submitted.</p>}
      {status === "error" && <p className="text-sm text-red-700">Something went wrong. Please call the showroom directly.</p>}
    </form>
  );
}
