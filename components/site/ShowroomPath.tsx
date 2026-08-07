import { showroomPath } from "@/content/pages";

export function ShowroomPath() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {showroomPath.map((step, index) => (
        <div key={step.title} className="border border-ink/10 bg-paper p-7">
          <p className="font-serif text-5xl text-gold">0{index + 1}</p>
          <h3 className="mt-5 font-serif text-3xl font-semibold">{step.title}</h3>
          <p className="mt-4 leading-7 text-slate">{step.text}</p>
        </div>
      ))}
    </div>
  );
}
