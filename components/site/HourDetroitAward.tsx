import Image from "next/image";

export function HourDetroitAward() {
  return (
    <aside
      aria-label="Best of Hour Detroit recognition"
      className="relative isolate flex h-full min-h-[260px] w-full overflow-hidden bg-ink text-paper"
    >
      <span
        aria-hidden
        className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-gold/20 blur-3xl"
      />
      <div className="relative grid w-full grid-cols-[minmax(118px,0.42fr)_minmax(0,0.58fr)] items-stretch">
        <div className="flex items-center justify-center bg-paper p-4 sm:p-6">
          <Image
            src="/logos/hour-detroit-award.svg"
            alt="Best of Hour Detroit multi-year winner"
            width={640}
            height={440}
            className="h-auto w-full max-w-[250px]"
          />
        </div>
        <div className="flex flex-col justify-center border-l border-paper/15 p-5 sm:p-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold">
            Local recognition
          </p>
          <p className="mt-3 font-serif text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08]">
            Best of Hour Detroit 3 years in a row
          </p>
        </div>
      </div>
    </aside>
  );
}
