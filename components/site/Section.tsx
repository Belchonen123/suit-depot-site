import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "paper" | "cream" | "ink";
  className?: string;
  id?: string;
};

export function Section({
  children,
  eyebrow,
  title,
  intro,
  tone = "paper",
  className = "",
  id,
}: SectionProps) {
  const toneClass =
    tone === "ink"
      ? "bg-ink text-paper"
      : tone === "cream"
        ? "bg-cream text-ink"
        : "bg-paper text-ink";

  return (
    <section id={id} className={`${toneClass} scroll-mt-32 px-5 py-20 sm:scroll-mt-20 md:px-8 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-[1540px]">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-5xl md:mb-14">
            {eyebrow && (
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <div className="md:flex md:items-center md:gap-6">
                <h2 className="min-w-0 font-serif text-4xl font-semibold leading-[1.02] md:text-5xl">
                  {title}
                </h2>
                <span className="hidden h-px flex-1 bg-current/18 md:block" />
              </div>
            )}
            {intro && (
              <p className="mt-5 text-lg leading-8 text-current/72">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
