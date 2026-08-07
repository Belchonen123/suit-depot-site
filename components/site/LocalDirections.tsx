import { MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";

export function LocalDirections() {
  return (
    <div className="grid gap-6 bg-cream p-7 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Greenfield Road showroom
        </p>
        <h3 className="mt-3 font-serif text-3xl font-semibold">Plan the visit before the fitting.</h3>
        <div className="mt-4 grid gap-2 text-sm text-slate">
          <p className="flex items-center gap-2">
            <MapPin size={16} aria-hidden />
            {site.address.line1}, {site.address.city}, {site.address.state} {site.address.postal}
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} aria-hidden />
            {site.phone}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={site.mapsLink} external variant="dark">
          Directions
        </ButtonLink>
        <ButtonLink href={`tel:${site.phone}`} variant="outline">
          Call Store
        </ButtonLink>
      </div>
    </div>
  );
}
