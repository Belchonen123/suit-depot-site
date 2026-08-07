import { CtaBand } from "@/components/site/CtaBand";
import { Faqs } from "@/components/site/Faqs";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";
import { tailoringDetails } from "@/content/pages";

export const metadata = {
  title: "Tailoring & Alterations",
  description: "Menswear tailoring and alteration services at The Suit Depot.",
};

const services = [
  "Hemming",
  "Sleeve adjustments",
  "Waist and seat adjustments",
  "Jacket fit tuning",
  "Repairs",
  "Wedding-party support",
];

export default function TailoringPage() {
  return (
    <>
      <PageHero
        image="/media/photos/master-tailor-sewing.jpg"
        title="Tailoring and Alterations for a Cleaner Fit"
        text="Bring the garment closer to how it should sit: cleaner breaks, sharper sleeves, and event-ready details."
        primary={{ label: "Contact Tailoring", href: "/oak-park#contact-us" }}
      />
      <Section eyebrow="Services" title="Core alteration support for menswear.">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="border border-ink/10 bg-paper p-7">
              <h3 className="font-serif text-3xl font-semibold">{service}</h3>
              <p className="mt-3 leading-7 text-slate">
                Confirm timing and exact service scope with the showroom before your event date.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="cream" eyebrow="Fit notes" title="Small changes can make the whole garment read sharper.">
        <div className="grid gap-4 md:grid-cols-3">
          {tailoringDetails.map((item) => (
            <div key={item.title} className="border border-ink/10 bg-paper p-7">
              <h3 className="font-serif text-3xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <VisualPanel
            eyebrow="Alterations"
            title="Dial in the line, length, and proportions before the event."
            text="Confirm turnaround timing with the showroom, especially for wedding parties or garments needed by a fixed date."
            src="/media/photos/tailor-hem-fitting.jpg"
          />
        </div>
      </Section>
      <Section eyebrow="Tailoring questions" title="Confirm the details before timing matters.">
        <Faqs
          items={[
            {
              question: "Should I bring the shoes I plan to wear?",
              answer:
                "Yes. Shoes help set the pant break and overall proportions, especially for event looks.",
            },
            {
              question: "Can wedding-party alterations be handled together?",
              answer:
                "The showroom can help coordinate group needs, but timing should be confirmed early so the team can plan the workflow.",
            },
            {
              question: "Are all alteration services confirmed?",
              answer:
                "The page lists common menswear services. Exact scope and turnaround should be confirmed directly with the store before launch.",
            },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
