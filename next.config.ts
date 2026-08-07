import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Google review author profile photos (live reviews widget).
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/oak-park", permanent: true },
      { source: "/contact", destination: "/oak-park#contact-us", permanent: true },
      { source: "/custom", destination: "/custom-suits", permanent: true },
      { source: "/tuxedo-rental", destination: "/tuxedo-rentals", permanent: true },
    ];
  },
};

export default nextConfig;
