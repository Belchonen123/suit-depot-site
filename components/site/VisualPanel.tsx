import Image from "next/image";

type VisualPanelProps = {
  title: string;
  eyebrow?: string;
  text?: string;
  src?: string;
  align?: "left" | "right";
};

export function VisualPanel({
  title,
  eyebrow,
  text,
  src = "/media/showroom.svg",
  align = "right",
}: VisualPanelProps) {
  const image = (
    <div className="min-h-80 overflow-hidden bg-ink">
      <Image
        src={src}
        alt=""
        width={1200}
        height={900}
        className="h-full min-h-80 w-full object-cover"
      />
    </div>
  );
  const copy = (
    <div className="flex min-h-80 flex-col justify-center bg-ink p-8 text-paper md:p-10">
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      )}
      <h3 className="font-serif text-4xl font-semibold leading-tight">{title}</h3>
      {text && <p className="mt-5 text-lg leading-8 text-paper/72">{text}</p>}
    </div>
  );

  return (
    <div className="grid overflow-hidden md:grid-cols-2">
      {align === "left" ? image : copy}
      {align === "left" ? copy : image}
    </div>
  );
}
