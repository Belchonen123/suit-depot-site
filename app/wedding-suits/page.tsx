import Image from "next/image";
import { CtaBand } from "@/components/site/CtaBand";
import { ButtonLink } from "@/components/site/ButtonLink";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";
import { site } from "@/content/site";

export const metadata = {
  title: "Wedding Suits & Formalwear",
  description:
    "Wedding suits, tuxedo rentals, and groomsmen formalwear coordination at The Suit Depot in Oak Park, Michigan.",
};

export default function WeddingSuitsPage() {
  return (
    <>
      <PageHero
        image="/media/photos/wedding-party-suits.jpg"
        eyebrow="Wedding suits in Oak Park"
        title="Wedding Suits and Tuxedo Services in Metro Detroit"
        text="Coordinate the groom, groomsmen, tuxedos, suits, vests, shirts, shoes, and accessories with a showroom team that handles wedding menswear every week."
        primary={{ label: "Start Your Wedding Planning", href: "/oak-park#contact-us" }}
        secondary={{ label: "Tuxedo Rentals", href: "/tuxedo-rentals" }}
      />

      <Section title="Stress-free wedding logistics">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="text-xl leading-9 text-slate">
            <p>
              Once you provide the contact information for your groomsmen, we take over. We handle measurements, reminders, and follow-ups. For out-of-town members, we provide self-measurement guides and ship suits directly to them with over a month to spare.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/oak-park#contact-us" variant="dark">
                Start Your Wedding Planning
              </ButtonLink>
              <ButtonLink href={site.shopUrl} external variant="outline">
                Shop Online
              </ButtonLink>
            </div>
          </div>
          <VisualPanel
            eyebrow="Wedding logistics"
            title="Measurements, reminders, shipping, and follow-up handled for the party."
            text="The Suit Depot keeps the process organized for local and out-of-town groomsmen so the group is ready before the wedding week."
            src="/media/photos/wedding-party-suits.jpg"
            align="left"
          />
        </div>
      </Section>

      <Section tone="cream" title="The groom's consultation">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="overflow-hidden bg-ink">
            <Image
              src="/media/photos/suit-consultation.jpg"
              alt=""
              width={1200}
              height={900}
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl leading-9 text-slate">
              We provide a consultation for the bride and groom to determine the vision and formality level. We help you ensure the groom stands out.
            </p>
            <div className="mt-8 border-l-4 border-gold bg-paper p-7">
              <h3 className="font-serif text-3xl font-semibold">Hard-to-fit body types</h3>
              <p className="mt-3 text-lg leading-8 text-slate">
                We hold the largest selection in Michigan, making us the best choice for large wedding parties. Discounts available for parties of 5 or more.
              </p>
              <div className="mt-6">
                <ButtonLink href="/oak-park#contact-us" variant="dark">
                  Start Your Wedding Planning
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
