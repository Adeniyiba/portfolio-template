import Section from "./Section";
import Card from "./ui/Card";
import { profile } from "../data/profile";
import Link from "next/link";

export default function Contact() {
  return (
    <Section
      id="contact"
      kicker="Get In Touch"
      title="Contact Me"
      subtitle="Send a message or connect directly"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="text-sm font-medium">Direct Contact</div>

          <div className="mt-4 space-y-3 text-sm text-zinc-300">
            <div>
              <div className="text-xs text-zinc-400">X</div>
              <Link
                href={profile.xUrl}
                target="_blank"
                className="hover:underline"
              >
                {profile.xHandle}
              </Link>
            </div>

            <div>
              <div className="text-xs text-zinc-400">Email</div>
              <a className="hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>

            <div>
              <div className="text-xs text-zinc-400">Location</div>
              <div>{profile.location}</div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 text-sm text-zinc-200">
            Always open to collaborations, opportunities, and interesting
            conversations.
          </div>
        </Card>

        <Card>
          <div className="text-sm font-medium">Send a Message</div>

          <form
            className="mt-4 space-y-3"
            method="POST"
            action="https://formspree.io/f/YOUR_FORM_ID"
          >
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-500/40"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-500/40"
            />

            <input
              name="subject"
              required
              placeholder="Subject"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-500/40"
            />

            <textarea
              name="message"
              required
              placeholder="Message"
              rows={5}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-500/40"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
            >
              Send Message
            </button>
          </form>

          <p className="mt-4 text-xs text-zinc-500">
            Replace YOUR_FORM_ID with your Formspree form ID to enable form
            submissions.
          </p>
        </Card>
      </div>
    </Section>
  );
}
