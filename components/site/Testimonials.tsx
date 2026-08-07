"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { reviewSummary as defaultSummary, testimonials as defaultTestimonials } from "@/content/testimonials";

type TestimonialItem = {
  author: string;
  initials: string;
  age: string;
  rating: number;
  verified: boolean;
  quote: string;
  photo: string;
};

type TestimonialsProps = {
  summary?: {
    business: string;
    rating: string;
    reviewCount: string;
    source: string;
    thumbnail: string;
  };
  reviews?: TestimonialItem[];
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#fbbc04]" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={18} fill="currentColor" aria-hidden />
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <span className="font-sans text-lg font-bold tracking-tight" aria-label="Google">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc04]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

export function Testimonials({ summary = defaultSummary, reviews = defaultTestimonials }: TestimonialsProps = {}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("article");
    const gap = 16;
    const distance = card ? card.offsetWidth + gap : Math.round(track.clientWidth * 0.8);
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - distance / 2;
    const atStart = track.scrollLeft <= distance / 2;

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      return;
    }

    track.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => slide(1), 3600);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#f3f5f8] px-4 py-12 md:px-10">
      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <aside className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl bg-paper p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src={summary.thumbnail}
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-ink">{summary.business}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xl font-semibold text-[#f59f00]">{summary.rating}</span>
                  <Stars rating={5} />
                </div>
                <p className="mt-1 text-sm text-slate">
                  {summary.reviewCount} reviews on <GoogleMark />
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="relative min-w-0">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => slide(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper shadow-lg md:flex"
          >
            <ChevronLeft size={24} aria-hidden />
          </button>
          <div
            ref={trackRef}
            className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((item) => (
              <article
                key={item.author}
                className="min-w-[320px] snap-start rounded-3xl bg-paper p-7 shadow-sm md:min-w-[430px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4f35b5] text-xl font-semibold text-paper">
                      {item.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">{item.author}</h3>
                      <p className="text-sm text-slate">{item.age}</p>
                    </div>
                  </div>
                  <GoogleMark />
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <Stars rating={item.rating} />
                  {item.verified && <ShieldCheck size={19} className="text-[#4285f4]" fill="currentColor" aria-hidden />}
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_96px]">
                  <div>
                    <p className="line-clamp-5 text-base leading-7 text-ink">{item.quote}</p>
                    <button type="button" className="mt-2 text-sm font-semibold text-slate underline">
                      Show more
                    </button>
                  </div>
                  <Image
                    src={item.photo}
                    alt=""
                    width={120}
                    height={120}
                    className="hidden h-24 w-24 rounded-2xl object-cover sm:block"
                  />
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => slide(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper shadow-lg md:flex"
          >
            <ChevronRight size={24} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
