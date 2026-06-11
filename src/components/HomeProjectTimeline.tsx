import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectExperiences } from "@/lib/career-data";

export function HomeProjectTimeline() {
  return (
    <section className="w-full border-t border-panel-border/20 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">Key Projects & Impact</p>
            <h2 className="text-4xl font-serif tracking-tight text-neutral-900 dark:text-white md:text-6xl">
              The work, in quick proof points
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            A short CV-backed timeline before the deeper case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {projectExperiences.map((project) => {
            const content = (
              <>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{project.period}</p>
                  <span className="rounded-full border border-panel-border bg-background/70 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                    {project.metric}
                  </span>
                </div>
                <h3 className="text-2xl font-serif tracking-tight text-foreground">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  View case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            );

            if (!project.href) {
              return (
                <article key={project.title} className="rounded-3xl border border-panel-border bg-panel/60 p-6">
                  {content}
                </article>
              );
            }

            return (
              <Link
                key={project.title}
                href={project.href}
                className="group rounded-3xl border border-panel-border bg-panel/60 p-6 transition-all hover:-translate-y-1 hover:border-panel-border-hover"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
