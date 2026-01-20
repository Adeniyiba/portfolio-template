import Section from "./Section";
import Card from "./ui/Card";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      kicker="Career Journey"
      title="Experience"
      subtitle="A quick view of roles, focus areas, and key contributions"
    >
      <div className="space-y-5">
        {experiences.map((e) => (
          <Card key={`${e.role}-${e.period}`}>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
              <span>{e.period}</span>
              <span>{e.location}</span>
            </div>

            <div className="mt-2 text-lg font-semibold">{e.role}</div>
            <div className="mt-1 text-sm text-zinc-300">{e.org}</div>

            <p className="mt-4 text-sm leading-6 text-zinc-300">{e.summary}</p>

            <div className="mt-5 text-sm font-medium">Key Contributions</div>

            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-zinc-500">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
