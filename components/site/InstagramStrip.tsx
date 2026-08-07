import { site } from "@/content/site";

export function InstagramStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {["New arrivals", "Wedding fits", "Italian fabrics", "Showroom style"].map((label, index) => (
        <a
          key={label}
          href={site.socials.find((social) => social.label === "Instagram")?.href ?? site.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex aspect-square items-end bg-ink p-4 text-paper"
          style={{
            background:
              index % 2 === 0
                ? "linear-gradient(135deg, #0E0E0E, #4A4A4A)"
                : "linear-gradient(135deg, #1A1A1A, #B8965A)",
          }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.14em] group-hover:text-gold">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
