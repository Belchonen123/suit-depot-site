import { faqs } from "@/content/pages";

type FaqsProps = {
  items?: typeof faqs;
};

export function Faqs({ items = faqs }: FaqsProps) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl font-semibold">
            {item.question}
            <span className="text-gold transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl leading-7 text-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
