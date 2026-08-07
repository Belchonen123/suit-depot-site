import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPostCard } from "@/components/site/PostCard";
import { CtaBand } from "@/components/site/CtaBand";
import { posts } from "@/content/blog";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return {
    title: post?.title ?? "Blog",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = posts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .concat(posts.filter((item) => item.slug !== post.slug && item.category !== post.category))
    .slice(0, 3);

  return (
    <>
      <article className="bg-paper">
        <header className="relative isolate overflow-hidden bg-ink px-5 pb-16 pt-36 text-paper md:px-8 md:pb-24 md:pt-44">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            className="absolute inset-0 -z-20 object-cover opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,14,14,0.92),rgba(14,14,14,0.72),rgba(14,14,14,0.3))]" />
          <div className="mx-auto max-w-4xl">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-gold">
              <ArrowLeft size={16} aria-hidden />
              Back to guides
            </Link>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              {post.category} / {post.date} / {post.readTime}
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight md:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-paper/78">{post.excerpt}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="border border-paper/20 px-3 py-1 text-xs font-semibold text-paper/75">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1fr)_300px]">
            <div className="grid gap-12">
              {post.body.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-4xl font-semibold leading-tight">{section.heading}</h2>
                  <div className="mt-6 grid gap-6 text-lg leading-9 text-slate">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="h-fit border border-ink/10 bg-cream p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Showroom note</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">Make the guide practical.</h2>
              <p className="mt-4 leading-7 text-slate">
                Bring your event date, dress code, preferred colors, and any fit concerns to the showroom.
              </p>
              <Link
                href="/oak-park#contact-us"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-gold"
              >
                Contact the showroom <ArrowRight size={16} aria-hidden />
              </Link>
            </aside>
          </div>
        </div>
      </article>

      <section className="bg-cream px-5 py-20 text-ink md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Keep reading</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">Related guides</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <BlogPostCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
