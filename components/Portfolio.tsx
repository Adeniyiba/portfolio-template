"use client";

import { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./ui/Card";
import Chip from "./ui/Chip";
import { categories, items, type Category } from "../data/portfolio";
import Link from "next/link";

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((i) => i.category === active);
  }, [active]);

  return (
    <Section
      id="portfolio"
      kicker="Thought Leadership"
      title="Threads and Articles"
      subtitle="A selection of my published work and analysis"
    >
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "rounded-full px-3 py-1 text-xs transition " +
                (on
                  ? "bg-zinc-100 text-zinc-950"
                  : "border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:bg-zinc-900")
              }
              type="button"
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-zinc-400">
        Showing {filtered.length} items
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {filtered.map((p) => (
          <Card key={`${p.title}-${p.date}`}>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="uppercase">{p.type}</span>
              <span>{p.category}</span>
            </div>

            <Link
              href={p.url}
              target="_blank"
              className="mt-3 block text-lg font-semibold hover:underline"
            >
              {p.title}
            </Link>

            <div className="mt-1 text-xs text-zinc-400">{p.date}</div>

            <p className="mt-4 text-sm leading-6 text-zinc-300">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Chip key={t} text={t} />
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={profileFallbackX()}
          target="_blank"
          className="inline-flex rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
        >
          Follow for More Insights
        </Link>
      </div>
    </Section>
  );
}

function profileFallbackX() {
  return "https://x.com";
}
