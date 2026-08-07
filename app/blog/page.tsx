import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPostCard } from "@/components/site/PostCard";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { blogCategories, posts } from "@/content/blog";

export const metadata = {
  title: "Blog",
  description: "Menswear guides from The Suit Depot.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        image="/media/photos/suit-on-hanger.jpg"
        title="Menswear Guides"
        text="Practical style, fit, wedding, tailoring, and custom-suiting notes from The Suit Depot showroom."
      />
      <Section eyebrow="Featured" title="Start with the latest guide.">
        <BlogPostCard post={featured} featured />
      </Section>
      <Section tone="cream" eyebrow="Topics" title="Browse by menswear need.">
        <div className="flex flex-wrap gap-3">
          {blogCategories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
              className="border border-ink/10 bg-paper px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] transition hover:border-gold hover:text-gold"
            >
              {category}
            </a>
          ))}
        </div>
      </Section>
      <Section eyebrow="Latest" title="Style, fit, and event planning notes.">
        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
      <Section tone="ink" eyebrow="Showroom help" title="Need advice for a specific date or garment?">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-lg leading-8 text-paper/70">
            Bring the event date, dress-code notes, inspiration photos, and any garments that already fit well. The showroom team can help narrow the options.
          </p>
          <Link
            href="/oak-park#contact-us"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold bg-gold px-8 py-3 text-sm font-extrabold uppercase tracking-[0.03em] text-ink transition hover:bg-goldDark hover:text-paper"
          >
            Ask the showroom <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
