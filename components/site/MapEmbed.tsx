import { site } from "@/content/site";

type MapEmbedProps = {
  title: string;
  className?: string;
  /** Place query for Google Maps. Defaults to the store address. */
  query?: string;
  /** Directions origin/destination for Google Maps. */
  origin?: string;
  destination?: string;
};

const storeAddress = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.postal}`;

/**
 * Always renders Google Maps. When GOOGLE_MAPS_EMBED_KEY is available, this
 * uses the official Embed API. Without a key, Google's `output=embed` route
 * provides the place or directions view instead of switching map providers.
 */
export function MapEmbed({
  title,
  className = "",
  query,
  origin,
  destination,
}: MapEmbedProps) {
  const key = process.env.GOOGLE_MAPS_EMBED_KEY;

  let src: string;
  if (key && origin && destination) {
    src = `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${encodeURIComponent(
      origin,
    )}&destination=${encodeURIComponent(destination)}&mode=driving`;
  } else if (key) {
    src = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${encodeURIComponent(
      query ?? storeAddress,
    )}&zoom=14`;
  } else if (origin && destination) {
    src = `https://www.google.com/maps?output=embed&saddr=${encodeURIComponent(
      origin,
    )}&daddr=${encodeURIComponent(destination)}`;
  } else {
    src = `https://www.google.com/maps?output=embed&q=${encodeURIComponent(
      query ?? storeAddress,
    )}`;
  }

  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={className}
    />
  );
}
