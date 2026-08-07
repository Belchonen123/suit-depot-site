import { CtaBand } from "@/components/site/CtaBand";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Faqs } from "@/components/site/Faqs";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { site } from "@/content/site";
import { VisualPanel } from "@/components/site/VisualPanel";
import { weddingTimeline } from "@/content/pages";

export const metadata = {
  title: "Tuxedo Rentals",
  description: "Tuxedo rentals and wedding-party formalwear in Oak Park, Michigan.",
};

export default function TuxedoRentalPage() {
  return (
    <>
      <PageHero
        image="/media/photos/showroom-tuxedo-group.jpg"
        title="Tuxedo Rentals in Metro Detroit"
        text="Coordinate tuxedos, suits, vests, shirts, and accessories for formal events and wedding groups."
        primary={{ label: "Plan the Wedding Party", href: "/oak-park#contact-us" }}
        secondary={{ label: "Shop Formalwear", href: site.shopUrl, external: true }}
      />
      <Section eyebrow="Formalwear" title="A complete look for the aisle, reception, and photos.">
        <div className="grid gap-4 md:grid-cols-4">
          {["Tuxedos", "Suits", "Vests", "Accessories"].map((item) => (
            <div key={item} className="border border-ink/10 p-7">
              <h3 className="font-serif text-3xl font-semibold">{item}</h3>
              <p className="mt-3 leading-7 text-slate">Match the dress code, color story, and timing for your event.</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <VisualPanel
            eyebrow="Group planning"
            title="Keep the wedding-party look coordinated from first fitting to pickup."
            text="Bring the dress code, color notes, event date, and party list so the team can help map the right next step."
            src="/media/photos/showroom-tuxedo-group.jpg"
            align="left"
          />
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/oak-park#contact-us" variant="dark">
            Ask About Rentals
          </ButtonLink>
          <ButtonLink href={site.shopUrl} external variant="outline">
            Shop Online
          </ButtonLink>
        </div>
      </Section>
      <Section tone="cream" eyebrow="Timeline" title="A simpler wedding-party workflow.">
        <ol className="grid gap-4 md:grid-cols-4">
          {weddingTimeline.map((step, index) => (
            <li key={step} className="border border-ink/10 bg-paper p-6">
              <p className="font-serif text-4xl text-gold">0{index + 1}</p>
              <p className="mt-4 leading-7 text-slate">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section eyebrow="Wedding questions" title="Plan the group before the final rush.">
        <Faqs
          items={[
            {
              question: "Can the groom and groomsmen coordinate together?",
              answer:
                "Yes. Bring the wedding date, party list, color direction, and dress-code notes so the team can map the best approach.",
            },
            {
              question: "Is tuxedo rental handled online or in store?",
              answer:
                "This needs client confirmation. The site currently supports both a contact flow and an external Shopify shop link.",
            },
            {
              question: "How early should we start?",
              answer:
                "Earlier is better for group sizing, color coordination, alterations, and pickup timing, especially during wedding season.",
            },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
