import { site } from "./site";

export const brandGroups = [
  {
    name: "Designer Suits",
    brands: ["Theory", "Vince.", "Jack Victor", "Ted Baker London", "Robert Barakett", "Canali", "Hugo Boss", "Ralph Lauren", "DKNY", "Bartorelli Napoli"],
  },
  {
    name: "Wardrobe Staples",
    brands: ["Dress Shirts", "Sportcoats", "Trousers", "Outerwear", "Shoes"],
  },
  {
    name: "Formalwear",
    brands: ["Tuxedos", "Vests", "Bow Ties", "Wedding Accessories", "Formal Shirts"],
  },
].map((group) => ({
  ...group,
  brands: group.brands.map((name) => ({ name, href: site.shopUrl })),
}));

export const featuredBrands = brandGroups.flatMap((group) => group.brands).slice(0, 14);
