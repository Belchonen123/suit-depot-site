import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "light";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: Props) {
  const styles = {
    primary: "border-[#f4c86a] bg-[#f4c86a] text-ink hover:bg-gold hover:text-ink",
    dark: "border-ink bg-ink text-paper hover:bg-charcoal",
    outline:
      "border-transparent bg-transparent text-current hover:text-gold",
    light: "border-paper bg-paper text-ink hover:border-gold hover:bg-gold",
  };
  const classes = `inline-flex min-h-12 items-center justify-center border px-8 py-3 text-sm font-extrabold uppercase tracking-[0.03em] transition ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
