import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { educationEntries, projectExperiences, workExperiences, type CareerEntry } from "@/lib/career-data";

function TimelineGroup({
  eyebrow,
  title,
  description,
  entries,
}: {
  eyebrow: string;
  title: string;
  description: string;
  entries: CareerEntry[];
}) {
  return (
    <section className="w-full border-t border-panel-border/20 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
            <h2 className="text-3xl font-serif tracking-tight text-neutral-900 dark:text-white md:text-5xl">{title}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:justify-self-end">{description}</p>
        </div>

        <div className="relative ml-4 space-y-8 border-l border-panel-border pl-8">
          {entries.map((entry) => (
            <article key={`${entry.title}-${entry.period}`} className="group relative rounded-3xl border border-panel-border bg-panel/60 p-6 transition-colors hover:border-panel-border-hover md:p-8">
              <span className="absolute -left-[41px] top-8 flex h-5 w-5 items-center justify-center rounded-full border border-panel-border bg-background shadow-sm transition-colors group-hover:border-blue-400 group-hover:bg-blue-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground transition-colors group-hover:bg-blue-400" />
              </span>

              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{entry.period}</p>
                  <h3 className="text-2xl font-serif tracking-tight text-foreground">{entry.title}</h3>
                  {entry.organization && <p className="mt-1 text-sm font-medium text-secondary-foreground">{entry.organization}</p>}
                </div>
                <span className="w-fit rounded-full border border-panel-border bg-background/70 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                  {entry.metric}
                </span>
              </div>

              <p className="mb-5 text-sm leading-6 text-muted-foreground">{entry.summary}</p>
              <ul className="space-y-3">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-secondary-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {entry.href && (
                <Link href={entry.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-100">
                  View case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceTimeline() {
  return (
    <>
      <TimelineGroup
        eyebrow="Project experience"
        title="Projects with measurable business impact"
        description="Analytics work from the CV, separated from formal work experience so each project has room for its metrics, tools, and business result."
        entries={projectExperiences}
      />

      <TimelineGroup
        eyebrow="Work experience"
        title="Finance and consulting foundations"
        description="Professional roles that shaped the financial modeling, strategic research, and stakeholder communication behind the portfolio."
        entries={workExperiences}
      />

      <section className="w-full border-t border-panel-border/20 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">Education & Certification</p>
            <h2 className="text-3xl font-serif tracking-tight text-neutral-900 dark:text-white md:text-5xl">Training behind the work</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {educationEntries.map((entry) => (
              <article key={entry.institution} className="rounded-3xl border border-panel-border bg-panel/60 p-6 md:p-8">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{entry.period}</p>
                <h3 className="text-2xl font-serif text-foreground">{entry.institution}</h3>
                <p className="mt-2 text-sm font-medium text-secondary-foreground">{entry.program}</p>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{entry.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
