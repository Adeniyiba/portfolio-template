import Section from "./Section";
import Card from "./ui/Card";
import Chip from "./ui/Chip";
import { skillCards, skillChips } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      kicker="Expertise"
      title="Core Skills"
      subtitle="A focused set of skills that support my writing, analysis, and project work"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCards.map((s) => (
          <Card key={s.title}>
            <div className="text-base font-semibold">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {s.description}
            </p>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <div className="text-sm font-medium">Technical and Soft Skills</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skillChips.map((c) => (
            <Chip key={c} text={c} />
          ))}
        </div>
      </Card>
    </Section>
  );
}
