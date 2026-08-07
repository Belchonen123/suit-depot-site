import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/content/blog";

export function BlogPostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group overflow-hidden border border-ink/10 bg-paper transition hover:border-gold ${
        featured ? "grid md:grid-cols-[1.1fr_0.9fr]" : "block"
      }`}
    >
      <div className={featured ? "min-h-80" : "aspect-[4/3]"}>
        <Image
          src={post.image}
          alt=""
          width={1200}
          height={900}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className={featured ? "flex flex-col justify-center p-8 md:p-10" : "p-5"}>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
          <span>{post.category}</span>
          <span className="text-slate">/</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className={`${featured ? "text-4xl md:text-5xl" : "text-2xl"} mt-4 font-serif font-semibold leading-tight group-hover:text-gold`}>
        {post.title}
        </h3>
        <p className={`${featured ? "text-base leading-8" : "text-sm leading-6"} mt-4 text-slate`}>
          {post.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-cream px-3 py-1 text-xs font-semibold text-slate">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
