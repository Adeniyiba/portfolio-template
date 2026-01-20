import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self";
};

export default function Button({
  href,
  children,
  variant = "primary",
  target = "_self",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-zinc-500/50";
  const styles =
    variant === "primary"
      ? "bg-zinc-100 text-zinc-950 hover:bg-white"
      : "border border-zinc-700 text-zinc-100 hover:bg-zinc-900";

  return (
    <Link className={`${base} ${styles}`} href={href} target={target}>
      {children}
    </Link>
  );
}
