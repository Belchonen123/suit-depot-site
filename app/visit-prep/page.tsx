import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { PrepChecklist } from "@/components/site/PrepChecklist";
import { Section } from "@/components/site/Section";
import { ShowroomPath } from "@/components/site/ShowroomPath";

export const metadata = {
  title: "Visit Prep",
  description: "How to prepare for a fitting, custom consultation, tailoring visit, or wedding-party appointment at The Suit Depot.",
};

export default function VisitPrepPage() {
  return (
    <>
      <PageHero
        image="/media/photos/measurement-shoulder.jpg"
        title="Prepare for a Better Showroom Visit"
        text="A little context makes fittings, tailoring, custom work, and wedding-party planning faster and more useful."
        primary={{ label: "Contact the Showroom", href: "/oak-park#contact-us" }}
      />
      <Section eyebrow="Showroom flow" title="A practical path through the visit.">
        <ShowroomPath />
      </Section>
      <Section tone="cream" eyebrow="Before you arrive" title="Bring the details that affect fit and timing.">
        <PrepChecklist />
      </Section>
      <CtaBand />
    </>
  );
}
