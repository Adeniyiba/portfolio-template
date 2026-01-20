import Link from "next/link";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold">
          {profile.brand}
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-300 hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href={profile.xUrl}
            className="text-sm text-zinc-300 hover:text-white"
            target="_blank"
          >
            Follow on X
          </Link>
        </div>
      </div>
    </div>
  );
}
