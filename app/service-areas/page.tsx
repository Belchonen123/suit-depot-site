import Link from "next/link";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ReviewsWidget } from "@/components/site/ReviewsWidget";
import { PressBanner } from "@/components/site/PressBanner";
import { MapEmbed } from "@/components/site/MapEmbed";
import { areas } from "@/content/pages";

export const metadata = {
  title: "Menswear and Tailoring Services in Metro Detroit",
  description:
    "Service areas for The Suit Depot menswear, custom suits, tuxedo rentals, wedding suits, and tailoring across Metro Detroit.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        image="/media/photos/team-showroom.jpg"
        title="Menswear and Tailoring Services in Metro Detroit"
        text="A regional destination for suits, tailoring, custom shirts, tuxedo rentals, wedding suits, and in-person fit guidance."
      />
      <Section title="View all service areas">
        <p className="mb-10 max-w-4xl text-xl leading-9 text-slate">
          The Suit Depot serves Metro Detroit communities from the Oak Park showroom. Choose your local service-area page for menswear, tailoring, custom suits, tuxedo rentals, and wedding-party planning near you.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={`/service-areas/${area.slug}`}
              className="group border border-ink/10 bg-paper p-7 transition hover:border-gold hover:bg-ink hover:text-paper"
            >
              <h3 className="font-serif text-3xl font-semibold">{area.name}</h3>
              <p className="mt-3 leading-7 text-slate group-hover:text-paper/75">{area.note}</p>
              <span className="mt-6 inline-block text-sm font-extrabold uppercase tracking-[0.12em] text-gold">
                View local page
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <MapEmbed
            title="The Suit Depot Oak Park showroom on Google Maps"
            className="min-h-[460px] w-full border border-ink/10"
          />
        </div>
      </Section>

      <Section tone="cream" title="As seen on">
        <PressBanner />
      </Section>

      <Section className="px-0" title="Metro Detroit reviews">
        <ReviewsWidget />
      </Section>

      <CtaBand />
    </>
  );
}
