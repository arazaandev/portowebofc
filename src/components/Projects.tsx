"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, Eye, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { getProjectLinks, projects, type ProjectLinkType } from "@/lib/projects-data";

const linkIcons: Record<ProjectLinkType, ComponentType<{ className?: string }>> = {
  website: ExternalLink,
  dashboard: Eye,
  demo: ExternalLink,
  source: Terminal,
};

export function Projects() {
  return (
    <section id="work" className="w-full border-t border-panel-border/20 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">Case studies</p>
            <h2 className="text-5xl font-serif tracking-tight text-neutral-900 dark:text-white md:text-7xl">
              Selected analytical work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Systems, dashboards, and models built around measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const projectLinks = getProjectLinks(project);
            const preview = project.media?.[0];

            return (
              <motion.article
                key={project.slug}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className={`group relative h-full overflow-hidden rounded-3xl border border-panel-border bg-panel/60 ${project.glow}`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-panel-border/60 p-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                    <span className="h-px w-5 bg-panel-border" />
                    <span className="truncate text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase text-muted-foreground">{project.date}</span>
                </div>

                <Link href={`/projects/${project.slug}`} className="block" aria-label={`Open case study for ${project.cardTitle}`}>
                  <div className="relative overflow-hidden bg-background/60 p-3">
                    <div className="overflow-hidden rounded-2xl border border-panel-border bg-background shadow-sm">
                      <div className="flex h-9 items-center gap-2 border-b border-panel-border bg-background/85 px-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                        <span className="ml-3 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {project.visualization.label}
                        </span>
                      </div>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.visualization.caption}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                      <p className="max-w-[70%] rounded-full border border-panel-border bg-background/85 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
                        {preview?.caption ?? project.visualization.caption}
                      </p>
                      <span className="shrink-0 rounded-full border border-panel-border bg-background/85 p-2 text-foreground backdrop-blur transition-colors group-hover:bg-foreground group-hover:text-background">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6 md:p-8">
                  <div className="mb-5">
                    <div>
                      <Link href={`/projects/${project.slug}`} className="inline-block">
                        <h3 className="text-2xl font-serif tracking-tight text-foreground transition-colors hover:text-muted-foreground md:text-3xl">
                          {project.cardTitle}
                        </h3>
                      </Link>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                        {project.cardDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-2">
                    {project.impactMetrics.slice(0, 3).map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-panel-border bg-background/55 p-3">
                        <p className="text-lg font-serif text-foreground">{metric.value}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span key={tech} className="rounded-full border border-panel-border bg-background/55 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-panel-border/60 pt-5">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90">
                      <Eye className="h-3.5 w-3.5" />
                      Case Study
                    </Link>
                    {projectLinks.map((link) => {
                      const Icon = linkIcons[link.type];

                      return (
                        <a
                          key={`${project.slug}-${link.type}-${link.url}`}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-panel-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/projects" className="group inline-flex items-center gap-3 rounded-full border border-panel-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background">
            See all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
