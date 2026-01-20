import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <Badge text={profile.availability} />

          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            {profile.brand}
          </h1>

          <p className="mt-2 text-xl text-zinc-300">{profile.headline}</p>

          <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-300">
            {profile.bio}
          </p>

          <div className="mt-7 flex gap-3">
            <Button href="#portfolio" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>

          <div className="mt-10 text-xs text-zinc-500">scroll</div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex h-72 w-72 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950/40 text-sm text-zinc-400 md:h-80 md:w-80">
            Add avatar later
          </div>
        </div>
      </div>
    </section>
  );
}
