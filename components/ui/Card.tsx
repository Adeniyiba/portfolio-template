import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 shadow-sm " +
        className
      }
    >
      {children}
    </div>
  );
}
