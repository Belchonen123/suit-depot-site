import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { areas } from "@/content/pages";

const baseUrl = "https://thesuitdepot.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/oak-park",
    "/custom-suits",
    "/tailoring",
    "/tuxedo-rentals",
    "/wedding-suits",
    "/brands",
    "/blog",
    "/visit-prep",
    "/service-areas",
    "/privacy-policy",
  ];

  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...areas.map((area) => ({
      url: `${baseUrl}/service-areas/${area.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
