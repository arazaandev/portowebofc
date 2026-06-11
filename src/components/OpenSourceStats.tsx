import { BarChart3, BrainCircuit, Database, LineChart } from "lucide-react";
import { coreCapabilities, selectedMetrics } from "@/lib/career-data";

const capabilityIcons = [LineChart, Database, BarChart3, BrainCircuit];

export function OpenSourceStats() {
  return (
    <section className="relative w-full border-t border-panel-border/20 px-6 py-20 md:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 max-w-5xl rounded-full bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">Selected metrics</p>
            <h2 className="text-3xl font-serif tracking-tight text-neutral-900 dark:text-white md:text-5xl">Proof points from the CV</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            A quick scan of the measurable outcomes behind the project and work timelines.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {selectedMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-panel-border bg-panel/60 p-5">
              <p className="text-3xl font-serif text-foreground">{metric.value}</p>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">Core capabilities</p>
            <h3 className="text-3xl font-serif tracking-tight text-neutral-900 dark:text-white md:text-4xl">Where finance meets analytics delivery</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {coreCapabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? LineChart;

              return (
                <article key={capability.title} className="rounded-3xl border border-panel-border bg-panel/60 p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-serif text-foreground">{capability.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{capability.description}</p>
                    </div>
                    <span className="rounded-full border border-panel-border bg-background/70 p-3">
                      <Icon className="h-5 w-5 text-cyan-500" />
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {capability.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-panel-border bg-background/70 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
