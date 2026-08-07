import Image from "next/image";

const pressLogos = [
  {
    name: "Forbes",
    src: "/logos/press/forbes.svg",
    href: "https://www.forbes.com/sites/marciaturner/2017/03/31/ebay-entrepreneur-sells-millions-in-mens-suits-online-and-off/",
  },
  {
    name: "Detroit Free Press",
    src: "/logos/press/detroit-free-press.svg",
    href: "https://freep.secondstreetapp.com/2021-Best-of-the-Best-for-Detroit/",
  },
  {
    name: "Hour Detroit",
    src: "/logos/press/hour-detroit.svg",
    href: "https://www.hourdetroit.com/detroit-bests/hour-detroit-readers-on-this-years-best-of-detroit-winners/",
  },
  {
    name: "The Jewish News",
    src: "/logos/press/the-jewish-news.svg",
    href: "https://www.facebook.com/DetroitJewishNews/posts/3908397512508863/",
  },
  {
    name: "WXYZ",
    src: "/logos/press/wxyz.svg",
    href: "https://www.wxyz.com/news/positively-detroit/it-takes-everyone-community-groups-help-detroit-twins-prepare-for-prom",
  },
  {
    name: "FOX 2",
    src: "/logos/press/fox-2.svg",
    href: "https://www.fox2detroit.com/mornings/suit-depot-opens-retail-store-in-oak-park",
  },
];

export function PressBanner({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-gold">
        As seen on or featured in
      </p>
      <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
        {pressLogos.map((logo) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${logo.name} feature about The Suit Depot`}
            className="flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-4 focus:ring-offset-paper"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={220}
              height={60}
              className="h-12 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
