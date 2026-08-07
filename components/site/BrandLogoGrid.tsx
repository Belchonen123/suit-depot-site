"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { featuredBrands } from "@/content/brands";

function brandClass(name: string) {
  if (name === "Theory") return "font-sans text-6xl font-bold tracking-[-0.04em]";
  if (name === "Vince.") return "font-sans text-5xl font-black uppercase tracking-[0.18em]";
  if (name === "Jack Victor") return "font-serif text-4xl font-medium tracking-[0.02em]";
  if (name === "Ted Baker London") return "font-sans text-3xl font-semibold uppercase tracking-[0.35em]";
  if (name === "Robert Barakett") return "font-sans text-3xl font-semibold uppercase tracking-[0.45em]";
  return "font-serif text-4xl font-semibold tracking-[0.02em]";
}

function displayName(name: string) {
  if (name === "Ted Baker London") {
    return (
      <span className="inline-flex border-2 border-ink px-6 py-4 text-center">
        TED BAKER
        <span className="ml-3 text-xs tracking-[0.4em]">LONDON</span>
      </span>
    );
  }
  if (name === "Robert Barakett") {
    return (
      <span className="grid gap-1 text-center leading-none">
        <span>ROBERT</span>
        <span>BARAKETT</span>
      </span>
    );
  }
  return name;
}

export function BrandLogoGrid() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction === "left" ? -520 : 520,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative bg-paper py-4 text-ink">
      <div className="mb-10 flex items-center gap-6">
        <h3 className="shrink-0 font-serif text-4xl font-semibold">Brands We Carry</h3>
        <div className="h-px flex-1 bg-ink" />
      </div>

      <button
        type="button"
        aria-label="Previous brands"
        onClick={() => scroll("left")}
        className="absolute left-0 top-[58%] z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-ink/70 text-paper md:flex"
      >
        <ChevronLeft size={24} aria-hidden />
      </button>

      <div
        ref={trackRef}
        className="flex snap-x gap-16 overflow-x-auto pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...featuredBrands, ...featuredBrands.slice(0, 5)].map((brand, index) => (
          <a
            key={`${brand.name}-${index}`}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-32 min-w-[260px] snap-center items-center justify-center text-center text-ink transition hover:text-gold md:min-w-[330px]"
            aria-label={`Shop ${brand.name}`}
          >
            <span className={brandClass(brand.name)}>{displayName(brand.name)}</span>
          </a>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next brands"
        onClick={() => scroll("right")}
        className="absolute right-0 top-[58%] z-10 hidden h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-ink/70 text-paper md:flex"
      >
        <ChevronRight size={24} aria-hidden />
      </button>
    </div>
  );
}
