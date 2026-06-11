"use client";

import React from "react";
import { ArrowUpRight, BarChart3, BrainCircuit, ClipboardCheck, Database, LineChart } from "lucide-react";
import { useTheme } from "next-themes";
import { Globe } from "./ui/cobe-globe";

const stack = ["Python", "SQL", "FastAPI", "Next.js", "Tableau", "Pandas", "XGBoost", "Excel"];

export function BentoGrid() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-[0.3em]">Operating system</p>
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 dark:text-white tracking-tight">How I turn data into decisions</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          Strategy, engineering, and communication working together so the output survives the meeting.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="bento-card min-h-[360px] p-8 md:col-span-2">
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Decision-ready analysis</p>
                <h3 className="max-w-xl text-3xl font-serif tracking-tight text-foreground md:text-4xl">
                  Economic framing before the dashboard.
                </h3>
              </div>
              <div className="rounded-full border border-panel-border bg-foreground/5 p-3">
                <LineChart className="h-6 w-6 text-blue-500" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Problem", "Define the business decision before touching the model."],
                ["Signal", "Find the metric that explains what changed and why."],
                ["Action", "Translate results into next steps stakeholders can use."],
              ].map(([label, body]) => (
                <div key={label} className="rounded-2xl border border-panel-border bg-background/55 p-4">
                  <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                  <p className="text-sm leading-6 text-secondary-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="bento-card min-h-[360px] p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Technical delivery</p>
              <h3 className="text-2xl font-serif text-foreground">The stack behind the analysis</h3>
            </div>
            <Database className="h-6 w-6 text-emerald-500" />
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span key={tech} className="rounded-full border border-panel-border bg-foreground/5 px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-muted-foreground">
            From SQL cleanup to FastAPI services and Next.js interfaces, the goal is always the same: useful analysis that ships.
          </p>
        </article>

        <article className="bento-card min-h-[340px] p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Explainable systems</p>
              <h3 className="text-2xl font-serif text-foreground">Models people can trust</h3>
            </div>
            <BrainCircuit className="h-6 w-6 text-purple-500" />
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            Fraud scores, churn signals, and forecasts are packaged with plain-language context so auditors, managers, and founders can act on them.
          </p>
          <div className="mt-8 rounded-2xl border border-panel-border bg-background/60 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
              <ClipboardCheck className="h-4 w-4 text-emerald-500" />
              Narrative output
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              Flagged pattern, business implication, confidence, and recommended next review step.
            </p>
          </div>
        </article>

        <article className="bento-card min-h-[340px] p-8 md:col-span-1">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Indonesia to global</p>
            <h3 className="text-2xl font-serif text-foreground">Based in Jakarta, built for distributed work</h3>
          </div>
          <div className="relative mt-6 flex h-56 items-center justify-center overflow-hidden">
            <div className="absolute -bottom-16 h-[300px] w-[300px]">
              <Globe
                markers={[
                  { id: "jkt", location: [-6.2088, 106.8456], label: "Jakarta" },
                  { id: "nyc", location: [40.7128, -74.006], label: "New York" },
                  { id: "london", location: [51.5074, -0.1278], label: "London" },
                ]}
                arcs={[
                  { id: "jkt-nyc", from: [-6.2088, 106.8456], to: [40.7128, -74.006] },
                  { id: "jkt-london", from: [-6.2088, 106.8456], to: [51.5074, -0.1278] },
                ]}
                markerColor={isDark ? [0, 0.8, 1] : [0.1, 0.4, 0.9]}
                baseColor={isDark ? [0.05, 0.05, 0.1] : [1, 1, 1]}
                glowColor={isDark ? [0.1, 0.1, 0.3] : [0.9, 0.9, 1]}
                dark={isDark ? 1 : 0}
                mapBrightness={isDark ? 6 : 10}
                speed={0.002}
              />
            </div>
          </div>
        </article>

        <article className="bento-card min-h-[340px] p-8 md:col-span-1">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Operating style</p>
              <h3 className="text-2xl font-serif text-foreground">Fast iterations, clear proof</h3>
            </div>
            <BarChart3 className="h-6 w-6 text-orange-500" />
          </div>
          <div className="space-y-4">
            {["Async updates with visible progress", "Dashboards tied to real decisions", "Readable handoff notes and next steps"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-panel-border bg-background/55 p-4 text-sm text-secondary-foreground">
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
