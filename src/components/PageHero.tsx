export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-light text-foreground sm:text-5xl">{title}</h1>
        <div className="rule-brand mt-5" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
        {children}
      </div>
    </section>
  );
}
