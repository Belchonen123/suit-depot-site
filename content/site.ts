type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const site = {
  name: "The Suit Depot",
  logo: "/logos/tsd-wordmark-black.png",
  tagline: "Largest selection of designer menswear in Michigan",
  boutiqueLine:
    "Priced like a discount store, with the inventory of a department store and the service of a boutique.",
  address: {
    line1: "26150 Greenfield Rd",
    city: "Oak Park",
    state: "MI",
    postal: "48237",
  },
  geo: { lat: 42.4826, lon: -83.2019 },
  phone: "(248) 982-2101",
  alternatePhone: "(248) 200-7484",
  email: "hello@thesuitdepot.com",
  shopUrl: "https://thesuitdepot.com",
  collections: {
    suits: "https://thesuitdepot.com",
    sportcoats: "https://thesuitdepot.com",
    shirts: "https://thesuitdepot.com",
    shoes: "https://thesuitdepot.com",
    sale: "https://thesuitdepot.com",
    tuxedos: "https://thesuitdepot.com",
  },
  mapUrl:
    "https://maps.google.com/maps?q=26150%20Greenfield%20Rd%20Oak%20Park%20MI%2048237&t=m&z=14&output=embed",
  mapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=26150%20Greenfield%20Rd%2C%20Oak%20Park%2C%20MI%2048237&travelmode=driving",
  hours: [
    ["Monday", "9:00 AM-7:00 PM"],
    ["Tuesday", "9:00 AM-7:00 PM"],
    ["Wednesday", "9:00 AM-7:00 PM"],
    ["Thursday", "11:00 AM-8:00 PM"],
    ["Friday", "9:00 AM-6:00 PM"],
    ["Saturday", "Closed"],
    ["Sunday", "12:00 PM-6:00 PM"],
  ],
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@TheSuitDepotOfficial" },
    { label: "Facebook", href: "https://www.facebook.com/TheSuitDepotOakPark" },
    { label: "Instagram", href: "https://www.instagram.com/thesuitdepot_oakpark?igsh=NHVlYzQyOXp6c3h3" },
    { label: "TikTok", href: "https://www.tiktok.com/@thesuitdepot" },
  ],
};

const socialHref = (label: string) =>
  site.socials.find((social) => social.label === label)?.href ?? site.shopUrl;

// Hard-coded previews of recent social posts, spread across the platforms.
export const socialPosts = [
  {
    platform: "Instagram",
    href: socialHref("Instagram"),
    caption: "Fresh fall suiting just hit the floor — designer cuts at closeout pricing.",
    image: "/media/photos/suit-on-hanger.jpg",
  },
  {
    platform: "Facebook",
    href: socialHref("Facebook"),
    caption: "Wedding party fittings all weekend. Book the groom and groomsmen together.",
    image: "/media/photos/wedding-party-suits.jpg",
  },
  {
    platform: "TikTok",
    href: socialHref("TikTok"),
    caption: "Roman breaks down what a clean same-day hem actually takes.",
    image: "/media/photos/master-tailor-sewing.jpg",
  },
  {
    platform: "YouTube",
    href: socialHref("YouTube"),
    caption: "Showroom tour: over 10,000 suits, on-site tailoring, one stop.",
    image: "/media/photos/suit-aisle-racks.jpg",
  },
];

export const featuredSocialPosts = [
  {
    platform: "Instagram",
    href: socialHref("Instagram"),
    caption: "Showroom arrivals, designer suit drops, and Oak Park styling from the floor.",
    image: "/media/photos/suit-on-hanger.jpg",
  },
  {
    platform: "Facebook",
    href: socialHref("Facebook"),
    caption: "Brand-new suit drops, showroom updates, and community highlights from Facebook.",
    image: "/media/photos/team-showroom.jpg",
  },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/channel/UClqMKayKHoiS-ZeHUPjYW_w/videos",
    caption: "Showroom tours, menswear features, and Suit Depot video highlights.",
    image: "/media/photos/showroom-overview.jpg",
  },
];

export const navLinks: SiteLink[] = [
  { label: "Buy In Store", href: "/oak-park#contact-us" },
  { label: "Weddings", href: "/wedding-suits" },
  { label: "Custom Suits", href: "/custom-suits" },
  { label: "Tailoring", href: "/tailoring" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About Us", href: "/oak-park#about-us" },
  { label: "Contact Us", href: "/oak-park#contact-us" },
];

export const utilityLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Visit Prep", href: "/visit-prep" },
  { label: "Areas We Serve", href: "/service-areas" },
];

export const shopLinks = [
  { label: "Suits", href: site.collections.suits },
  { label: "Sportcoats", href: site.collections.sportcoats },
  { label: "Shirts", href: site.collections.shirts },
  { label: "Shoes", href: site.collections.shoes },
  { label: "Sale", href: site.collections.sale },
];
