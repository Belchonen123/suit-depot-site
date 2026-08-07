import { Check } from "lucide-react";
import { fitSignals, visitPrep } from "@/content/pages";

export function PrepChecklist() {
  return (
    <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-4">
        {visitPrep.map((item) => (
          <div key={item.title} className="border border-ink/10 bg-paper p-6">
            <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-ink p-7 text-paper">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Fit signals
        </p>
        <h3 className="mt-3 font-serif text-3xl font-semibold">What the team is looking for</h3>
        <ul className="mt-6 grid gap-4">
          {fitSignals.map((signal) => (
            <li key={signal} className="flex gap-3 leading-7 text-paper/75">
              <Check className="mt-1 shrink-0 text-gold" size={18} aria-hidden />
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
