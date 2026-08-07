"use client";

import { Bot, ExternalLink, MessageCircle, Send, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
  cta?: { label: string; href: string; external?: boolean };
  sources?: Array<{ title: string; source: string; href: string; score: number }>;
};

const starterMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi, I use the Suit Depot site knowledge base to answer questions about hours, directions, custom suits, tailoring, tuxedo rental, weddings, brands, blog guides, and online shopping.",
  },
];

const prompts = [
  "What are your hours?",
  "Do I need an appointment?",
  "Help with wedding tuxedos",
  "Where is the showroom?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const visiblePrompts = useMemo(() => prompts.filter((prompt) => prompt !== input), [input]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Chat failed");
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: data.answer,
          cta: data.cta,
          sources: data.sources,
        },
      ]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please call the showroom or use the contact form.",
          cta: { label: "Contact the showroom", href: "/oak-park#contact-us" },
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-2xl transition hover:bg-goldDark hover:text-paper md:bottom-6"
        aria-label="Open chat"
      >
        <MessageCircle size={24} aria-hidden />
      </button>

      {open && (
        <section className="fixed inset-x-3 bottom-5 z-50 overflow-hidden border border-ink/15 bg-paper text-ink shadow-2xl md:bottom-6 md:left-auto md:right-6 md:w-[410px]">
          <div className="flex items-center justify-between bg-ink px-5 py-4 text-paper">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
                <Bot size={19} aria-hidden />
              </span>
              <div>
                <h2 className="font-serif text-xl font-semibold">Suit Depot Assistant</h2>
                <p className="text-xs text-paper/65">Local showroom helper</p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="p-2">
              <X size={20} aria-hidden />
            </button>
          </div>

          <div className="max-h-[52vh] space-y-4 overflow-y-auto bg-cream p-4 md:max-h-[470px]">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block max-w-[88%] whitespace-pre-line px-4 py-3 text-sm leading-6 ${
                    message.role === "user" ? "bg-ink text-paper" : "bg-paper text-ink"
                  }`}
                >
                  {message.content}
                </div>
                {message.cta && (
                  <div className="mt-2">
                    {message.cta.external ? (
                      <a
                        href={message.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-gold"
                      >
                        {message.cta.label} <ExternalLink size={13} aria-hidden />
                      </a>
                    ) : (
                      <Link
                        href={message.cta.href}
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-gold"
                      >
                        {message.cta.label}
                      </Link>
                    )}
                  </div>
                )}
                {!!message.sources?.length && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.sources.slice(0, 3).map((source) => {
                      const label = `${source.source}: ${source.title}`;
                      return source.href.startsWith("http") ? (
                        <a
                          key={`${source.href}-${source.title}`}
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-ink/10 bg-paper px-2 py-1 text-[11px] font-semibold text-slate hover:border-gold"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          key={`${source.href}-${source.title}`}
                          href={source.href}
                          onClick={() => setOpen(false)}
                          className="border border-ink/10 bg-paper px-2 py-1 text-[11px] font-semibold text-slate hover:border-gold"
                        >
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="inline-block bg-paper px-4 py-3 text-sm text-slate">Retrieving Suit Depot context...</div>
            )}
          </div>

          <div className="border-t border-ink/10 bg-paper p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {visiblePrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="border border-ink/10 px-3 py-2 text-xs font-semibold text-slate hover:border-gold hover:text-ink"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form ref={formRef} onSubmit={submit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about fitting, rentals, hours..."
                className="min-h-12 flex-1 border border-ink/15 px-3 text-sm"
                aria-label="Chat message"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex min-h-12 w-12 items-center justify-center bg-ink text-paper disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={18} aria-hidden />
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
