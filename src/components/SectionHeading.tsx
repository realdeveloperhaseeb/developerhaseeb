import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
