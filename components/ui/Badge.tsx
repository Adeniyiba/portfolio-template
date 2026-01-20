export default function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {text}
    </div>
  );
}
