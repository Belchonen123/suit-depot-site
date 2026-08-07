import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { StatsBand } from "@/components/site/StatsBand";
import { VisualPanel } from "@/components/site/VisualPanel";

export const metadata = {
  title: "About",
  description: "Learn about The Suit Depot showroom in Oak Park, Michigan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/media/photos/suit-consultation.jpg"
        title="11,000 Square Feet of Designer Menswear, Since 2010."
        text="From online roots to a dedicated Oak Park showroom, The Suit Depot focuses on serious menswear selection and practical fit guidance."
      />
      <Section eyebrow="Story" title="Built for men who want selection without losing service.">
        <div className="grid gap-8 text-lg leading-8 text-slate md:grid-cols-2">
          <p>
            The Suit Depot began online in 2010 and expanded into brick-and-mortar retail in 2015. The showroom brings suits, sportcoats, shirts, shoes, tuxedos, and accessories together under one roof.
          </p>
          <p>
            The team sources across price points and designer labels, with a menswear-only focus that makes fit, fabric, and event needs easier to compare in person.
          </p>
        </div>
        <div className="mt-12">
          <StatsBand />
        </div>
      </Section>
      <Section tone="paper" className="pt-0">
        <VisualPanel
          eyebrow="Oak Park"
          title="A regional destination for designer menswear and practical service."
          text="The showroom gives shoppers room to compare brands, fits, formalwear, accessories, and tailoring needs in one visit."
          src="/media/photos/suit-consultation.jpg"
        />
      </Section>
      <Section tone="cream" eyebrow="Approach" title="Department-store inventory with boutique-level attention.">
        <div className="grid gap-4 md:grid-cols-3">
          {["Designer range", "Fit-first guidance", "Value pricing"].map((item) => (
            <div key={item} className="border border-ink/10 bg-paper p-7">
              <h3 className="font-serif text-2xl font-semibold">{item}</h3>
              <p className="mt-3 leading-7 text-slate">
                A focused showroom experience for building wardrobes, preparing for events, and finding the right cut.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
