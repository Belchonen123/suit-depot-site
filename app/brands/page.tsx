import { BrandLogoGrid } from "@/components/site/BrandLogoGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";

export const metadata = {
  title: "Brands We Carry",
  description: "Designer menswear brands and wardrobe categories at The Suit Depot.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        image="/media/photos/showroom-overview.jpg"
        title="Brands We Carry"
        text="A designer-forward showroom with suits, formalwear, shirts, shoes, and wardrobe staples. The full brand list should be confirmed before launch."
      />
      <Section className="pb-0" eyebrow="Showroom detail" title="Labels, staples, and finishing pieces in one place.">
        <VisualPanel
          eyebrow="Accessories"
          title="Complete the wardrobe beyond the suit."
          text="Shirts, ties, pocket squares, shoes, and seasonal pieces help pull the full look together for work, weddings, and special events."
          src="/media/photos/tie-wall-display.jpg"
        />
      </Section>
      <Section eyebrow="Designer names">
        <BrandLogoGrid />
      </Section>
      <CtaBand />
    </>
  );
}
