import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function HomeIntroCollage() {
  return (
    <section className="relative bg-paper px-5 pb-20 text-ink md:px-8 md:pb-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative grid gap-6 pt-14 md:grid-cols-[0.31fr_0.69fr] md:gap-10 lg:-mt-32 lg:pt-0">
          <div className="order-2 min-h-[540px] self-end overflow-hidden bg-paper md:order-1">
            <Image
              src="/media/photos/showroom-tuxedo-group.jpg"
              alt=""
              width={700}
              height={1000}
              className="h-full min-h-[540px] w-full object-cover object-bottom"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="h-80 overflow-hidden bg-ink shadow-2xl">
                <Image
                  src="/media/photos/tailor-hem-fitting.jpg"
                  alt=""
                  width={900}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-80 overflow-hidden bg-ink shadow-2xl">
                <Image
                  src="/media/photos/suit-aisle-racks.jpg"
                  alt=""
                  width={900}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mx-auto max-w-4xl px-0 pt-16 text-center md:pt-24">
              <h2 className="font-serif text-5xl font-bold leading-tight md:text-6xl">
                Your Local Bespoke Tailor for Men&apos;s Clothing
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate">
                The Suit Depot is built for men who want deep inventory, approachable pricing, and hands-on fit guidance. Shop designer suits, coordinate wedding-party looks, plan custom work, or dial in alterations with a menswear-focused team.
              </p>
              <div className="mt-8">
                <ButtonLink href="/oak-park#about-us" variant="dark">
                  About The Suit Depot
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
