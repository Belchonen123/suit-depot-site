import { posts } from "./blog";
import {
  areas,
  customDetails,
  faqs,
  fitSignals,
  serviceCards,
  showroomPath,
  showroomStats,
  tailoringDetails,
  visitPrep,
  weddingTimeline,
} from "./pages";
import { brandGroups } from "./brands";
import { shopLinks, site } from "./site";

export type KnowledgeChunk = {
  id: string;
  title: string;
  source: string;
  href: string;
  text: string;
  keywords: string[];
};

const hours = site.hours.map(([day, time]) => `${day}: ${time}`).join("; ");
const address = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.postal}`;

export const knowledgeBase: KnowledgeChunk[] = [
  {
    id: "business-overview",
    title: "Business overview",
    source: "Site facts",
    href: "/oak-park",
    text: `${site.name} is an Oak Park, Michigan menswear showroom. Tagline: ${site.tagline}. Positioning: ${site.boutiqueLine} Founded online in 2010, retail showroom in 2015, with an 11,000-square-foot showroom and worldwide Shopify shipping.`,
    keywords: ["overview", "about", "history", "founded", "showroom", "selection", "designer", "menswear"],
  },
  {
    id: "contact-location",
    title: "Location and contact",
    source: "Contact page",
    href: "/oak-park#contact-us",
    text: `The showroom address is ${address}. Primary listed phone is ${site.phone}. Alternate listed phone is ${site.alternatePhone}. Email is ${site.email}. Public phone and hours still need client confirmation before launch.`,
    keywords: ["address", "location", "directions", "phone", "email", "contact", "map", "where"],
  },
  {
    id: "hours",
    title: "Showroom hours",
    source: "Site facts",
    href: "/oak-park#contact-us",
    text: `Current listed hours are ${hours}. These hours are from public listing data and should be confirmed with the client before launch.`,
    keywords: ["hours", "open", "closed", "today", "schedule", "time"],
  },
  {
    id: "shopify",
    title: "Online shopping",
    source: "Shop links",
    href: site.shopUrl,
    text: `The Suit Depot already has a full Shopify store at ${site.shopUrl}. Products, cart, checkout, and worldwide shipping remain on Shopify. This marketing site links out to Shopify instead of rebuilding ecommerce. Shop links include ${shopLinks.map((link) => link.label).join(", ")}.`,
    keywords: ["shop", "online", "shipping", "cart", "checkout", "buy", "shopify", "order"],
  },
  {
    id: "custom",
    title: "Custom suits and shirts",
    source: "Custom page",
    href: "/custom-suits",
    text: `Custom suits and shirts include fabric selection, measurement, and consultation. Walk-ins can view fabrics; appointments are recommended for measurements and a full fitting consultation. Details: ${customDetails.map((item) => `${item.title}: ${item.text}`).join(" ")}`,
    keywords: ["custom", "bespoke", "fabric", "fabrics", "shirts", "suits", "measurement", "appointment"],
  },
  {
    id: "tailoring",
    title: "Tailoring and alterations",
    source: "Tailoring page",
    href: "/tailoring",
    text: `Tailoring support includes hemming, sleeve adjustments, waist and seat adjustments, jacket fit tuning, repairs, and wedding-party support. Fit notes: ${tailoringDetails.map((item) => `${item.title}: ${item.text}`).join(" ")} Fit signals: ${fitSignals.join(" ")}`,
    keywords: ["tailoring", "alterations", "hem", "sleeve", "repair", "jacket", "trouser", "fit"],
  },
  {
    id: "tuxedo-rentals",
    title: "Tuxedo rentals",
    source: "Tuxedo rental page",
    href: "/tuxedo-rentals",
    text: "The Suit Depot can help with tuxedo rentals and formalwear for black-tie events, formal occasions, proms, and wedding parties. Bring the event date, dress code, color direction, and any group details.",
    keywords: ["tuxedo", "tux", "rental", "rentals", "formalwear", "formal", "black tie", "prom"],
  },
  {
    id: "weddings",
    title: "Wedding suits and formalwear",
    source: "Wedding suits page",
    href: "/wedding-suits",
    text: `The Suit Depot can help coordinate tuxedos, suits, vests, shirts, and accessories for wedding parties. Workflow: ${weddingTimeline.join(" ")} Bring the wedding date, party list, color direction, and dress-code notes.`,
    keywords: ["wedding", "tuxedo", "tux", "rental", "groom", "groomsmen", "formalwear", "vest"],
  },
  {
    id: "visit-prep",
    title: "Visit prep",
    source: "Visit prep page",
    href: "/visit-prep",
    text: `Before visiting: ${visitPrep.map((item) => `${item.title}: ${item.text}`).join(" ")} Showroom path: ${showroomPath.map((item) => `${item.title}: ${item.text}`).join(" ")}`,
    keywords: ["prepare", "bring", "visit", "appointment", "fitting", "before", "shoes", "dress code"],
  },
  {
    id: "areas",
    title: "Areas served",
    source: "Service areas page",
    href: "/service-areas",
    text: `The showroom serves ${areas.map((area) => `${area.name}: ${area.note}`).join(" ")}`,
    keywords: ["areas", "serve", "oak park", "southfield", "birmingham", "royal oak", "farmington", "detroit"],
  },
  {
    id: "brands",
    title: "Brands and categories",
    source: "Brands page",
    href: "/brands",
    text: `Brand and category placeholders include ${brandGroups.map((group) => `${group.name}: ${group.brands.map((brand) => brand.name).join(", ")}`).join(" ")}. Full brand list and Shopify deep links should be confirmed with the client before launch.`,
    keywords: ["brands", "canali", "boss", "ralph", "dkny", "shirts", "shoes", "sportcoats", "designer"],
  },
  {
    id: "showroom-stats",
    title: "Showroom stats",
    source: "Homepage",
    href: "/",
    text: `Showroom stats: ${showroomStats.map((stat) => `${stat.value} ${stat.label}`).join("; ")}. Main service paths: ${serviceCards.map((card) => `${card.title}: ${card.text}`).join(" ")}`,
    keywords: ["stats", "square feet", "showroom", "services", "custom", "tailoring", "tuxedo"],
  },
  ...faqs.map((faq, index) => ({
    id: `faq-${index + 1}`,
    title: faq.question,
    source: "FAQ",
    href: "/",
    text: `${faq.question} ${faq.answer}`,
    keywords: faq.question.toLowerCase().split(/\W+/).filter(Boolean),
  })),
  ...posts.map((post) => ({
    id: `blog-${post.slug}`,
    title: post.title,
    source: `Blog: ${post.category}`,
    href: `/blog/${post.slug}`,
    text: `${post.title}. ${post.excerpt} ${post.body
      .flatMap((section) => [section.heading, ...section.paragraphs])
      .join(" ")}`,
    keywords: [post.category, ...post.tags, post.title].join(" ").toLowerCase().split(/\W+/).filter(Boolean),
  })),
];
