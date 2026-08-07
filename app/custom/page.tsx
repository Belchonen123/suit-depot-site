import Image from "next/image";
import { CtaBand } from "@/components/site/CtaBand";
import { ButtonLink } from "@/components/site/ButtonLink";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";

export const metadata = {
  title: "Custom Suits",
  description: "Custom suits and custom shirts with Italian fabrics at The Suit Depot in Oak Park, Michigan.",
};

export default function CustomPage() {
  return (
    <>
      <PageHero
        image="/media/photos/showroom-guide.jpg"
        title="Custom Suits and Tailoring in Metro Detroit"
        text="Custom suits built around fabric, measurements, fitting garments, and practical tailoring guidance."
        primary={{ label: "Book Your Custom Fitting", href: "/oak-park#contact-us" }}
      />

      <Section title="The custom process">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="text-xl leading-9 text-slate">
            <p>
              Starting at $599. We source fabrics from world-class mills including Reda, VBC, Ermenegildo Zegna, Marzotto, and Style Biella. We take 20 body measurements and require 2 to 3 fittings.
            </p>
            <div className="mt-8 border-l-4 border-gold bg-cream p-7">
              <h3 className="font-serif text-3xl font-semibold">The fitting garment</h3>
              <p className="mt-3 text-lg leading-8 text-slate">
                We use a mock-up garment to ensure all posture adjustments are captured.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate">
                <span className="font-semibold text-ink">Turnaround:</span> We prefer a 6-week turnaround for the initial suit, but we can expedite to 3 weeks. Remakes or follow-ups are 3 weeks.
              </p>
            </div>
          </div>
          <VisualPanel
            eyebrow="Fabric and fit"
            title="Twenty body measurements and fitting-garment checks before the final suit."
            text="The process gives the tailoring team room to capture posture, proportion, and design decisions before the finished garment is completed."
            src="/media/photos/showroom-guide.jpg"
            align="left"
          />
        </div>
      </Section>

      <Section tone="cream" title="Personalization options">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="overflow-hidden bg-ink">
            <Image
              src="/media/photos/tie-wall-display.jpg"
              alt=""
              width={1200}
              height={900}
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl leading-9 text-slate">
              We offer over 150 linings to choose from, custom monograms, and design choices like lapel width and button stance.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["150+ linings", "Custom monograms", "Design details"].map((item) => (
                <div key={item} className="border border-ink/10 bg-paper p-6">
                  <h3 className="font-serif text-2xl font-semibold">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate">
                    Choose the details that make the garment feel personal and useful.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/oak-park#contact-us" variant="dark">
                Book Your Custom Fitting
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
