import { ButtonLink } from "./ButtonLink";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  image?: string;
  video?: boolean;
  videoSrc?: string;
  primary?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
};

export function PageHero({ eyebrow, title, text, image, video, videoSrc = "/media/suit-depot-hero.mp4", primary, secondary }: Props) {
  const poster = image ?? "/media/hero-poster.svg";

  return (
    <section className="relative isolate flex min-h-[740px] items-center overflow-hidden bg-ink px-5 pb-40 pt-36 text-paper sm:min-h-[700px] sm:pt-28 md:min-h-[760px] md:px-8 md:pb-48 md:pt-32">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${poster})`,
        }}
      />
      {video && (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.58)_35%,rgba(0,0,0,0.18)_70%),linear-gradient(0deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.32)_100%)]" />
      <div className="mx-auto w-full max-w-[1500px]">
        {eyebrow && (
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[0.95] md:text-[68px] lg:text-[76px]">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-paper/82">{text}</p>}
        {(primary || secondary) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primary && (
              <ButtonLink href={primary.href} external={primary.external}>
                {primary.label}
              </ButtonLink>
            )}
            {secondary && (
              <ButtonLink href={secondary.href} external={secondary.external} variant="outline">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
