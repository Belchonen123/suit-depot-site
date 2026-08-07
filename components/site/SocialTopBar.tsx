import { site } from "@/content/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.2V6.4c0-.8.5-1 1-1h1.8V2.2L14.6 2c-3 0-4.5 1.8-4.5 4.8v1.4H7.2v3.6h2.9V22h3.7V11.8h3.1l.5-3.6h-3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.3">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="currentColor">
      <path d="M15.3 2c.3 2.4 1.7 4 4.1 4.4v3.5c-1.5 0-2.8-.5-4-1.3v6.8c0 4-2.6 6.6-6.3 6.6-3.3 0-5.7-2.2-5.7-5.3 0-3.4 2.6-5.5 6.2-5.5.4 0 .8 0 1.1.1V15c-.3-.1-.7-.2-1.1-.2-1.5 0-2.5.8-2.5 2 0 1.1.9 1.9 2.1 1.9 1.4 0 2.4-.8 2.4-2.8V2h3.7Z" />
    </svg>
  );
}

const socialIcons = [
  {
    label: "Facebook",
    href: site.socials.find((social) => social.label === "Facebook")?.href ?? "#",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: site.socials.find((social) => social.label === "Instagram")?.href ?? "#",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: site.socials.find((social) => social.label === "TikTok")?.href ?? "#",
    icon: TikTokIcon,
  },
];

export function SocialIconLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {socialIcons.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href === "#" ? undefined : "_blank"}
            rel={item.href === "#" ? undefined : "noopener noreferrer"}
            aria-label={item.label}
            className="flex h-10 w-10 items-center justify-center rounded bg-[#3d3d3d] text-paper shadow-sm transition hover:bg-gold hover:text-ink sm:w-12"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export function SocialTopBar() {
  return null;
}
