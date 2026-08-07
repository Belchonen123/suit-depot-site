import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";

export function CtaBand() {
  return (
    <section className="bg-charcoal px-5 py-14 text-paper md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Oak Park showroom</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">Get fitted in person or shop online.</h2>
          <p className="mt-3 max-w-2xl text-paper/70">
            Visit the Greenfield Road showroom for fit guidance, tailoring, custom options, and formalwear support.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/oak-park#contact-us" variant="light">
            Get Fitted
          </ButtonLink>
          <ButtonLink href={site.shopUrl} external>
            Shop Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
