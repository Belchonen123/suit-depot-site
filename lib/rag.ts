import { knowledgeBase, type KnowledgeChunk } from "@/content/knowledge";
import { site } from "@/content/site";

export type RetrievedChunk = KnowledgeChunk & {
  score: number;
};

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "about",
  "can",
  "do",
  "for",
  "from",
  "how",
  "i",
  "is",
  "it",
  "me",
  "of",
  "on",
  "or",
  "the",
  "to",
  "what",
  "where",
  "with",
  "you",
  "your",
]);

function terms(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 1 && !stopWords.has(term));
}

export function retrieve(query: string, limit = 4): RetrievedChunk[] {
  const queryTerms = terms(query);
  const queryPhrase = query.toLowerCase();

  return knowledgeBase
    .map((chunk) => {
      const haystack = `${chunk.title} ${chunk.source} ${chunk.text} ${chunk.keywords.join(" ")}`.toLowerCase();
      const score = queryTerms.reduce((total, term) => {
        const exact = haystack.includes(term) ? 2 : 0;
        const keyword = chunk.keywords.some((item) => item.toLowerCase() === term) ? 4 : 0;
        const phrase = queryPhrase.includes(term) && chunk.title.toLowerCase().includes(term) ? 2 : 0;
        return total + exact + keyword + phrase;
      }, 0);

      return { ...chunk, score };
    })
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function composeAnswer(query: string, chunks: RetrievedChunk[]) {
  if (!chunks.length) {
    return {
      answer:
        "I could not find that in the Suit Depot site knowledge base. I can answer questions about hours, location, custom suits, tailoring, tuxedo rental, wedding parties, service areas, brands, blog guides, and online shopping.",
      cta: { label: "Contact the showroom", href: "/oak-park#contact-us" },
      sources: [],
    };
  }

  const top = chunks[0];
  const context = chunks.map((chunk) => chunk.text).join(" ");
  const bullets = chunks.slice(0, 3).map((chunk) => {
    const text = chunk.text
      .replace(/\s+/g, " ")
      .replace(`${chunk.title} `, "")
      .slice(0, 360);
    return `- ${text}${chunk.text.length > 360 ? "..." : ""}`;
  });

  const lower = query.toLowerCase();
  const caveat =
    context.toLowerCase().includes("confirm") || context.toLowerCase().includes("placeholder")
      ? "\n\nNote: Some business facts are marked for client confirmation before launch."
      : "";

  let cta = { label: "Contact the showroom", href: "/oak-park#contact-us", external: false };
  if (top.href.startsWith("http")) {
    cta = { label: "Open source link", href: top.href, external: true };
  } else if (lower.includes("shop") || lower.includes("buy") || lower.includes("checkout")) {
    cta = { label: "Shop online", href: site.shopUrl, external: true };
  } else if (lower.includes("wedding") || lower.includes("tux")) {
    cta = { label: "Plan wedding formalwear", href: "/wedding-suits", external: false };
  } else if (lower.includes("custom") || lower.includes("fabric")) {
    cta = { label: "Book a custom fitting", href: "/custom-suits", external: false };
  } else if (lower.includes("tailor") || lower.includes("alter")) {
    cta = { label: "Ask about tailoring", href: "/tailoring", external: false };
  } else if (lower.includes("where") || lower.includes("direction") || lower.includes("address")) {
    cta = { label: "Get directions", href: site.mapsLink, external: true };
  }

  return {
    answer: `Based on the Suit Depot site knowledge base:\n\n${bullets.join("\n\n")}${caveat}`,
    cta,
    sources: chunks.map((chunk) => ({
      title: chunk.title,
      source: chunk.source,
      href: chunk.href,
      score: chunk.score,
    })),
  };
}
