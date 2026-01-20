export default function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-wider text-zinc-400">
          {kicker}
        </div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm text-zinc-300">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
