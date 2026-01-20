export default function Chip({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300">
      {text}
    </span>
  );
}
