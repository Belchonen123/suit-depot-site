"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/content/site";
import { SocialIconLinks } from "./SocialTopBar";

function NavItem({
  link,
  onClick,
}: {
  link: { label: string; href: string; external?: boolean };
  onClick?: () => void;
}) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className="hover:text-gold">
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} onClick={onClick} className="hover:text-gold">
      {link.label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const leftNavLinks = navLinks.slice(0, 4);
  const rightNavLinks = navLinks.slice(4);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const headerClass = scrolled || open ? "bg-ink/95 shadow-xl" : "bg-ink/38 backdrop-blur-[2px]";

  return (
    <header className={`fixed inset-x-0 top-0 font-sans text-paper transition ${open ? "z-[80]" : "z-50"} ${headerClass}`}>
      <div className="mx-auto grid h-16 w-full max-w-[1920px] grid-cols-[minmax(0,1.08fr)_auto_minmax(0,0.92fr)] items-center gap-5 px-4 md:h-[80px] md:px-8 xl:gap-8 xl:px-8 2xl:h-[88px] 2xl:gap-10 2xl:px-14">
        <nav className="hidden min-w-0 items-center justify-between whitespace-nowrap text-[13px] font-extrabold uppercase tracking-[0.045em] xl:flex 2xl:text-[15px]">
          {leftNavLinks.map((link) => <NavItem key={`${link.label}-${link.href}`} link={link} />)}
        </nav>
        <Link href="/" className="flex min-w-0 shrink-0 items-center justify-center" aria-label="The Suit Depot home">
          <Image
            src="/logos/tsd-wordmark-white-transparent.png"
            alt="The Suit Depot"
            width={360}
            height={56}
            className="h-10 w-auto max-w-[256px] object-contain brightness-150 contrast-200 drop-shadow-[0_2px_3px_rgba(255,255,255,0.42)] min-[480px]:h-12 min-[480px]:max-w-[330px] sm:h-10 sm:max-w-[256px] md:h-12 md:max-w-[330px] xl:h-16 xl:max-w-[430px] 2xl:h-20 2xl:max-w-[560px]"
          />
        </Link>
        <div className="flex min-w-0 items-center justify-end gap-3">
          <nav className="hidden w-full min-w-0 items-center justify-between whitespace-nowrap text-[13px] font-extrabold uppercase tracking-[0.045em] xl:flex 2xl:text-[15px]">
            {rightNavLinks.map((link) => <NavItem key={`${link.label}-${link.href}`} link={link} />)}
          </nav>
          <SocialIconLinks className="hidden justify-start sm:flex xl:hidden" />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="shrink-0 p-2 xl:hidden"
          >
            <Menu aria-hidden size={28} />
          </button>
        </div>
      </div>
      <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-center px-4 sm:hidden">
        <SocialIconLinks />
      </div>

      {open && (
        <div className="fixed inset-0 z-[90] bg-ink px-5 py-6 text-paper">
          <div className="mb-10 flex items-center justify-between pr-16">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center" aria-label="The Suit Depot home">
              <Image
                src="/logos/tsd-wordmark-white-transparent.png"
                alt="The Suit Depot"
                width={260}
                height={44}
                className="h-10 w-auto max-w-[250px] object-contain sm:max-w-[320px]"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center bg-paper text-ink shadow-lg transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            >
              <X aria-hidden size={30} />
            </button>
          </div>
          <nav className="grid gap-5 text-3xl font-semibold">
            {navLinks.map((link) => (
              <NavItem key={`${link.label}-${link.href}`} link={link} onClick={() => setOpen(false)} />
            ))}
          </nav>
          <div className="mt-10 grid gap-4">
            <a href={`tel:${site.phone}`} className="text-lg text-paper/75">
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
