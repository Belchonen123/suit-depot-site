import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/site/ButtonLink";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { MapEmbed } from "@/components/site/MapEmbed";
import { areas } from "@/content/pages";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ "city-name": string }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({ "city-name": area.slug }));
}

async function getArea(params: Props["params"]) {
  const { "city-name": slug } = await params;
  return areas.find((area) => area.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = await getArea(params);
  if (!area) return {};

  return {
    title: `Mens Suits in ${area.name}`,
    description: `Mens suits in ${area.name} with custom suits, tuxedo rentals, tailoring, and wedding menswear from The Suit Depot.`,
  };
}

export default async function CityServiceAreaPage({ params }: Props) {
  const area = await getArea(params);
  if (!area) notFound();

  const storeAddress = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.postal}`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    area.landmark,
  )}&destination=${encodeURIComponent(storeAddress)}&travelmode=driving`;

  return (
    <>
      <PageHero
        image="/media/photos/team-showroom.jpg"
        eyebrow="Service area"
        title={`Mens Suits in ${area.name}`}
        text={`${area.note} Visit The Suit Depot for designer suits, custom suits, tuxedo rentals, tailoring, and wedding-party support near ${area.name}.`}
        primary={{ label: "Plan Your Visit", href: directionsLink, external: true }}
        secondary={{ label: "Start Your Wedding Planning", href: "/oak-park#contact-us" }}
      />

      <Section title="Directions to our Oak Park showroom">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <MapEmbed
            title={`Google Maps directions from ${area.landmark} to The Suit Depot`}
            origin={area.landmark}
            destination={storeAddress}
            className="min-h-[460px] w-full border border-ink/10"
          />
          <div className="bg-cream p-8">
            <h3 className="font-serif text-3xl font-semibold">
              From {area.landmark}
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate">
              Use the Google map for directions from a recognizable {area.name} landmark
              to The Suit Depot showroom at {storeAddress}.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <ButtonLink href={directionsLink} external variant="dark">
                Plan Your Visit
              </ButtonLink>
              <ButtonLink href="/oak-park#contact-us" variant="outline">
                Start Your Wedding Planning
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream" title={area.cityPageContent.heading}>
        <div className="max-w-5xl space-y-6 text-xl leading-9 text-slate">
          {area.cityPageContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Visit The Suit Depot to explore designer suits, custom suits and shirts,
            tuxedo rentals, wedding menswear, accessories, and tailoring in person.
          </p>
        </div>
      </Section>

      <Section title={`Plan a visit from ${area.name}`}>
        <p className="max-w-4xl text-xl leading-9 text-slate">
          Open the Google Maps route from {area.landmark}, or contact the showroom
          before your visit if you are coordinating a wedding party, custom fitting,
          or time-sensitive alteration.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={directionsLink} external variant="dark">
            Plan Your Visit
          </ButtonLink>
          <ButtonLink href="/oak-park#contact-us">
            Start Your Wedding Planning
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
