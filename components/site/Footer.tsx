import Image from "next/image";
import Link from "next/link";
import { navLinks, shopLinks, site, socialPosts, utilityLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-paper md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex" aria-label="The Suit Depot home">
            <Image
              src="/logos/tsd-wordmark-white-transparent.png"
              alt="The Suit Depot"
              width={310}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-paper/70">{site.boutiqueLine}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-paper/70">
            {site.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {social.label}
              </a>
            ))}
          </div>
          <div className="mt-7 grid grid-cols-3 gap-2">
            {socialPosts.slice(0, 3).map((post) => (
              <a
                key={post.platform}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-charcoal"
                aria-label={`Recent ${post.platform} post: ${post.caption}`}
              >
                <Image
                  src={post.image}
                  alt=""
                  width={160}
                  height={160}
                  className="h-full w-full object-cover opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute bottom-1 left-1 bg-ink/80 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-paper">
                  {post.platform}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-gold">Shop</p>
          <ul className="grid gap-3 text-sm text-paper/70">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-gold">The Suit Depot</p>
          <ul className="grid gap-3 text-sm text-paper/70">
            {navLinks.map((link) => (
              <li key={`nav-${link.label}-${link.href}`}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:text-paper">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            {utilityLinks.map((link) => (
              <li key={`utility-${link.label}-${link.href}`}>
                <Link href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-gold">Visit</p>
          <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="block text-sm leading-6 text-paper/70 hover:text-paper">
            {site.address.line1}
            <br />
            {site.address.city}, {site.address.state} {site.address.postal}
          </a>
          <a href={`tel:${site.phone}`} className="mt-4 block text-sm text-paper/70 hover:text-paper">
            {site.phone}
          </a>
          <dl className="mt-5 grid gap-2 text-sm text-paper/70">
            {site.hours.map(([day, time]) => (
              <div key={day} className="flex justify-between gap-4">
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6 text-xs text-paper/55">
        <p>&copy; 2026 The Suit Depot</p>
        <Link href="/privacy-policy" className="hover:text-paper">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
