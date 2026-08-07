import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Chatbot } from "@/components/site/Chatbot";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SocialTopBar } from "@/components/site/SocialTopBar";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Suit Depot | Designer Menswear in Oak Park, MI",
    template: "%s | The Suit Depot",
  },
  description:
    "The Suit Depot is an Oak Park menswear showroom with designer suits, tailoring, custom shirts, tuxedo rental, and worldwide Shopify ordering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: site.name,
    logo: `https://thesuitdepot.com${site.logo}`,
    telephone: site.phone,
    email: site.email,
    url: site.shopUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postal,
      addressCountry: "US",
    },
    sameAs: site.socials.map((social) => social.href),
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SocialTopBar />
        <Header />
        <main>{children}</main>
        <Chatbot />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
