import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, Navigation } from "lucide-react";
import { Section } from "@/components/site/Section";
import { ReviewsWidget } from "@/components/site/ReviewsWidget";
import { PressBanner } from "@/components/site/PressBanner";
import { MapEmbed } from "@/components/site/MapEmbed";
import { ContactForm } from "@/components/site/ContactForm";
import { ButtonLink } from "@/components/site/ButtonLink";
import { HomeIntroCollage } from "@/components/site/HomeIntroCollage";
import { HourDetroitAward } from "@/components/site/HourDetroitAward";
import { featuredSocialPosts, site } from "@/content/site";

export const metadata = {
  title: "Michigan's Largest Mens Suit Store",
  description:
    "Michigan mens suit store with over 10,000 suits in stock, on-site tailoring, tuxedo rentals, wedding suits, and luxury menswear 40% - 80% below original retail prices.",
  alternates: { canonical: "/oak-park" },
};

const featuredSocialLabels = new Set(["Instagram", "Facebook", "YouTube"]);

const showroomPhotos = [
  {
    src: "/media/photos/suit-consultation.jpg",
    alt: "Suit Depot staff consulting with a menswear customer",
  },
  {
    src: "/media/photos/team-showroom.jpg",
    alt: "The Suit Depot showroom team standing among suits and accessories",
  },
  {
    src: "/media/photos/master-tailor-sewing.jpg",
    alt: "Tailoring detail work at The Suit Depot",
  },
];

const homepageBrandLogos = [
  "Hugo Boss",
  "Tommy Hilfiger",
  "Canali",
  "Mazara",
  "TAVARIOS",
  "Ferragamo",
  "Steven Land",
  "Armani",
];

const serviceCards = [
  {
    title: "Buy In Store",
    href: "#contact-us",
    image: "/media/photos/showroom-overview.jpg",
    text: "Compare thousands of garments in person and get direct fit guidance before you buy.",
    cta: "Plan your visit",
  },
  {
    title: "Weddings",
    href: "/wedding-suits",
    image: "/media/photos/wedding-party-suits.jpg",
    text: "Coordinate the groom and party with suits, formalwear, shoes, and accessories.",
    cta: "Learn more",
  },
  {
    title: "Custom Suits",
    href: "/custom-suits",
    image: "/media/generated/custom-fabrics.png",
    text: "Choose fabrics, refine measurements, and build a custom garment with practical guidance.",
    cta: "Learn more",
  },
  {
    title: "On-Site Tailoring",
    href: "/tailoring",
    image: "/media/photos/master-tailor-sewing.jpg",
    text: "Handle fit adjustments, hems, repairs, and garment work with a tailor in the store.",
    cta: "Learn more",
  },
  {
    title: "Rentals",
    href: "/tuxedo-rentals",
    image: "/media/photos/showroom-tuxedo-group.jpg",
    text: "Find rental formalwear for proms, black-tie events, galas, and wedding parties.",
    cta: "Learn more",
  },
];

function brandLogoClass(name: string) {
  if (name === "Tommy Hilfiger") return "font-sans text-2xl font-black uppercase tracking-[0.24em] sm:text-3xl";
  if (name === "TAVARIOS") return "font-sans text-3xl font-extrabold uppercase tracking-[0.18em]";
  if (name === "Ferragamo") return "font-serif text-4xl font-medium italic";
  if (name === "Canali") return "font-serif text-4xl font-semibold uppercase tracking-[0.12em]";
  return "font-serif text-3xl font-semibold tracking-[0.03em] sm:text-4xl";
}

function SectionScrollCue({ href, label }: { href: string; label: string }) {
  return (
    <div className="relative z-10 flex h-0 items-center justify-center">
      <a
        href={href}
        aria-label={label}
        className="group flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-paper shadow-xl backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-ink focus:bg-gold focus:text-ink focus:outline-none"
      >
        <ChevronDown size={24} className="animate-bounce" aria-hidden />
      </a>
    </div>
  );
}

export default function MainStorePage() {
  return (
    <>
      <section className="relative isolate min-h-[840px] overflow-hidden bg-ink px-5 pb-12 pt-32 text-paper sm:min-h-[800px] md:px-8">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover brightness-105 saturate-[1.08]"
          poster="/media/photos/tailor-hem-fitting.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Customer fitting, measuring, and tailoring video"
        >
          <source src="/media/suit-depot-hero.mp4" type="video/mp4" />
        </video>
        <Image
          src="/media/photos/tailor-hem-fitting.jpg"
          alt=""
          width={1800}
          height={1100}
          priority
          className="absolute inset-0 -z-30 h-full w-full object-cover brightness-105 saturate-[1.08]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.56)_42%,rgba(0,0,0,0.14)_100%),linear-gradient(0deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.34)_100%)]" />
        <div className="mx-auto flex min-h-[600px] max-w-[1500px] flex-col pt-28 sm:min-h-[560px] md:pt-36 xl:pt-40">
          <div>
            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[1.02] text-paper/92 drop-shadow-[0_5px_22px_rgba(0,0,0,0.58)] sm:text-5xl lg:text-6xl">
              Michigan&apos;s Largest Men&apos;s Suit Store
            </h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-7 text-paper/78 drop-shadow-[0_4px_18px_rgba(0,0,0,0.72)] sm:text-lg md:mt-8 md:text-xl md:leading-9">
              Find out why we are the top-rated suit store in the state. Buying a suit should be simple. We design and manufacture our own clothing to pass the savings directly to you. Our staff does not work on commission. They just know exactly how a suit should fit. You get expert tailoring and a stress-free experience without high-pressure sales tactics.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={site.mapsLink} external>
                Get Directions
              </ButtonLink>
              <ButtonLink href="tel:+12489822101" variant="outline">
                {site.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
        <a
          href="#services"
          aria-label="Scroll to more content"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-paper/65 transition hover:text-gold focus:text-gold focus:outline-none md:block"
        >
          <span className="flex h-11 w-11 animate-bounce items-center justify-center rounded-full border border-paper/25 bg-ink/30 backdrop-blur-sm">
            <ChevronDown size={24} aria-hidden />
          </span>
        </a>
      </section>

      <Section
        id="services"
        tone="cream"
        eyebrow="What sets us apart"
        title="More Ways We Can Help"
        intro="Start with the reasons customers choose The Suit Depot most: in-store selection, wedding coordination, custom garments, and on-site tailoring, with rentals available when the event calls for them."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative isolate flex min-h-[340px] overflow-hidden bg-ink text-paper shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/70"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.58)_58%,rgba(0,0,0,0.08)_100%)] transition group-hover:bg-[linear-gradient(to_top,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.68)_58%,rgba(0,0,0,0.12)_100%)]" />
              <span className="relative z-10 mt-auto block p-7">
                <span className="block font-serif text-3xl font-semibold">{service.title}</span>
                <span className="mt-3 block max-w-md leading-7 text-paper/80">{service.text}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.1em] text-gold">
                  {service.cta} <ArrowRight size={16} aria-hidden />
                </span>
              </span>
            </Link>
          ))}
          <div className="min-h-[340px] overflow-hidden">
            <HourDetroitAward />
          </div>
        </div>
      </Section>

      <Section id="why-visit" tone="paper">
        <div className="max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
            Why come here
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Why Customers Choose The Suit Depot
          </h2>
          <div className="mt-7 space-y-6 text-lg leading-8 text-slate">
            <p>
              The Suit Depot carries the largest inventory in Michigan. We keep over 10,000 suits in stock. We cut out the middleman by manufacturing our own clothing. This gives us direct control over the final cost. We pass that value directly to you. Our industry relationships also allow us to carry designer brands like Hugo Boss and Canali at 40 to 80 percent off retail prices.
            </p>
            <p>
              Our salesmen genuinely love fashion. They know exactly how a suit should fit. We do not pay our staff on commission. You get honest guidance from people who care about the details without the pressure to buy.
            </p>
          </div>
        </div>
      </Section>

      <HomeIntroCollage />
      <SectionScrollCue href="#contact-us" label="Scroll to location and contact" />

      <Section id="contact-us" tone="cream" title="Visit our Oak Park showroom">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-8">
            <div className="overflow-hidden border border-ink/10 bg-paper shadow-xl">
              <div className="relative">
                <MapEmbed
                  title="The Suit Depot showroom map"
                  className="min-h-[400px] w-full"
                />
                <div className="pointer-events-none absolute inset-x-4 bottom-4">
                  <div className="pointer-events-auto flex flex-col gap-4 border border-ink/10 bg-paper/95 p-5 shadow-xl backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
                        <MapPin size={15} aria-hidden />
                        Showroom directions
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                        26150 Greenfield Rd, Oak Park, MI 48237
                      </p>
                    </div>
                    <a
                      href={site.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 bg-gold px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-ink transition hover:bg-ink hover:text-paper"
                    >
                      <Navigation size={17} aria-hidden />
                      Get Driving Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-paper p-8">
              <h3 className="font-serif text-3xl font-semibold">Oak Park showroom</h3>
              <div className="mt-5 grid gap-4 text-lg leading-8 text-slate">
                <p>
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.postal}
                </p>
                <p>
                  <a href="tel:+12489822101" className="font-semibold text-ink hover:text-gold">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className="font-semibold text-ink hover:text-gold">
                    {site.email}
                  </a>
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={site.mapsLink} external variant="dark">
                  Get Driving Directions
                </ButtonLink>
                <ButtonLink href={`tel:+12489822101`}>
                  Call Store
                </ButtonLink>
              </div>
              <dl className="mt-6 grid gap-2 text-sm text-slate">
                {site.hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-5 border-t border-ink/10 pt-2">
                    <dt>{day}</dt>
                    <dd className="font-semibold text-ink">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="border border-ink/10 bg-paper p-8 shadow-sm">
            <h3 className="font-serif text-3xl font-semibold">Send a message</h3>
            <p className="mt-3 text-lg leading-8 text-slate">
              Tell us what you need fitted, tailored, or coordinated and the showroom will follow up.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      <SectionScrollCue href="#social-proof" label="Scroll to client reviews" />

      <Section id="serving-metro-detroit" tone="ink" title="Serving Metro Detroit">
        <div className="max-w-2xl">
          <p className="text-xl leading-9 text-paper/82">
            The Oak Park showroom serves customers across Metro Detroit for suits, tuxedos, tailoring, weddings, and in-person fit guidance.
          </p>
          <div className="mt-8">
            <ButtonLink href="/service-areas" variant="light">
              View All Service Areas
            </ButtonLink>
          </div>
        </div>
      </Section>
      <SectionScrollCue href="#social-proof" label="Scroll to client reviews" />

      <Section id="social-proof" title="What Our Clients Say">
        <PressBanner className="mb-10 border-y border-ink/10 bg-cream/45 py-8" />
        <ReviewsWidget />
      </Section>
      <SectionScrollCue href="#tailoring" label="Scroll to tailoring" />

      <Section id="tailoring" title="Lincoln Tailor at The Suit Depot">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden bg-ink shadow-2xl">
            <Image
              src="/media/photos/master-tailor-sewing.jpg"
              alt=""
              width={1200}
              height={900}
              className="h-[520px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl leading-9 text-slate">
              Roman, our master tailor, brings 35 years of experience to every garment. We handle everything from basic hems to complex reconstruction.
            </p>
            <div className="mt-8 border-l-4 border-gold bg-cream p-7 shadow-sm">
              <h3 className="font-serif text-3xl font-semibold">Same-day tailoring</h3>
              <p className="mt-3 text-lg leading-8 text-slate">
                We offer same-day service for basic alterations.
              </p>
              <div className="mt-6">
                <ButtonLink href="/tailoring" variant="dark">
                  View Alteration Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <SectionScrollCue href="#about-us" label="Scroll to about us" />

      <Section id="about-us" tone="ink" title="About Us">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-4xl text-xl leading-10 text-paper/82">
            <p>
              A great suit is an investment. We make sure it looks like one—and never feels like it.
            </p>
            <p className="mt-6">
              What began with one young entrepreneur selling on eBay has grown into Michigan&apos;s largest designer menswear destination: an 11,000-square-foot showroom in Oak Park stocked with thousands of styles, from a first interview suit to black tie for the biggest day of your life.
            </p>
            <p className="mt-6">
              We&apos;re a family-owned Jewish business, and we run it the way families do—with honest prices, no pressure, and service that turns a first suit into a lifetime of them. And when our community has needed us, whether donating thousands of masks during difficult times or providing warm socks to Detroiters in need, we&apos;ve always believed in showing up.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {showroomPhotos.map((photo, index) => (
              <div
                key={photo.src}
                className={`overflow-hidden border border-paper/12 bg-paper/5 shadow-2xl ${
                  index === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={620}
                  className={`h-full w-full object-cover transition duration-700 hover:scale-105 ${
                    index === 0 ? "aspect-[4/5] lg:aspect-auto" : "aspect-[4/3]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="top-social-moments" tone="cream" title="Top Social Moments">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.12em]">
          <span className="text-slate">Follow us</span>
          {site.socials.filter((social) => featuredSocialLabels.has(social.label)).map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/15 px-3 py-1.5 text-ink transition hover:border-gold hover:text-gold"
            >
              {social.label}
            </a>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredSocialPosts.map((post) => (
            <a
              key={post.platform}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex aspect-square flex-col justify-end overflow-hidden bg-ink p-5 text-paper shadow-sm"
            >
              <Image
                src={post.image}
                alt=""
                width={700}
                height={700}
                className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <span className="relative inline-flex w-fit items-center bg-gold px-2 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
                {post.platform}
              </span>
              <span className="relative mt-3 text-sm font-semibold leading-6">{post.caption}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section
        id="brands-we-carry"
        tone="paper"
        eyebrow="Designer labels"
        title="Brands We Carry"
        intro="Brand selection supports the showroom experience without replacing the main promise: fit help, tailoring, wedding coordination, custom work, and honest value."
      >
        <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {homepageBrandLogos.map((brand) => (
            <a
              key={brand}
              href={site.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Shop ${brand} at The Suit Depot`}
              className="flex min-h-24 items-center justify-center bg-paper px-6 py-5 text-center text-ink transition hover:bg-ink hover:text-gold"
            >
              <span className={brandLogoClass(brand)}>{brand}</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
