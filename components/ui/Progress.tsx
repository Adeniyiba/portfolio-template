export default function Progress({ value }: { value: number }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="mt-2 h-2 w-full rounded-full bg-zinc-900">
      <div
        className="h-2 rounded-full bg-zinc-100"
        style={{ width: `${v}%` }}
        aria-label={`Progress ${v}%`}
      />
    </div>
  );
}
