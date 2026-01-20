import Link from "next/link";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-sm font-semibold">{profile.brand}</div>
          <div className="mt-1 text-sm text-zinc-300">{profile.headline}</div>
          <div className="mt-1 text-sm text-zinc-400">
            Building and sharing insights
          </div>
        </div>

        <div className="text-sm text-zinc-300">
          <div className="font-medium">Quick Links</div>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="#about" className="hover:underline">
              About Me
            </Link>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
            <Link href="#experience" className="hover:underline">
              Experience
            </Link>
            <Link href="#portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        <div className="text-sm text-zinc-300">
          <div className="font-medium">Connect</div>
          <div className="mt-3 text-zinc-400">Based in {profile.location}</div>
          <div className="mt-4 text-xs text-zinc-500">
            © {new Date().getFullYear()} {profile.brand}. Built with Next.js.
          </div>
        </div>
      </div>
    </footer>
  );
}
