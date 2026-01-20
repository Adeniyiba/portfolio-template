import Section from "./Section";
import Card from "./ui/Card";
import Progress from "./ui/Progress";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" kicker="Who I Am" title="About Me">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <p className="text-sm leading-6 text-zinc-300">{profile.bio}</p>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 text-sm text-zinc-200">
              {profile.quote}
            </div>

            <div className="mt-8">
              <div className="text-sm font-medium">By the Numbers</div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {profile.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
                  >
                    <div className="text-2xl font-semibold">{s.value}</div>
                    <div className="mt-1 text-xs text-zinc-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="text-sm font-medium">Core Expertise</div>

            <div className="mt-4 space-y-4">
              {profile.coreExpertise.map((e) => (
                <div key={e.label}>
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span>{e.label}</span>
                    <span className="text-zinc-400">{e.value}%</span>
                  </div>
                  <Progress value={e.value} />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="text-sm font-medium">Quick Facts</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {profile.quickFacts.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-zinc-500">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
