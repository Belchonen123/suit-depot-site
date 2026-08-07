import { showroomStats } from "@/content/pages";

export function StatsBand() {
  return (
    <div className="grid border-y border-ink/10 md:grid-cols-4">
      {showroomStats.map((stat) => (
        <div key={stat.label} className="border-ink/10 px-6 py-8 md:border-r md:last:border-r-0">
          <p className="font-serif text-4xl font-semibold text-ink">{stat.value}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-slate">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
