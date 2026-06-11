import type { Metadata } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectLinks, projects, projectsData, type ProjectLinkType } from "@/lib/projects-data";
import { ExternalLink, Terminal, BarChart, Target, Eye } from "lucide-react";
import Link from "next/link";

const linkIcons: Record<ProjectLinkType, ComponentType<{ className?: string }>> = {
  website: ExternalLink,
  dashboard: Eye,
  demo: ExternalLink,
  source: Terminal,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return {
      title: "Project Not Found | Daffa Arazaan",
    };
  }

  return {
    title: `${project.cardTitle} | Daffa Arazaan`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const projectLinks = getProjectLinks(project);
  const primaryMedia = project.media?.[0];
  const visualizationLink = projectLinks.find((link) => link.type === 'dashboard' || link.type === 'demo' || link.type === 'website');

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-panel-border relative overflow-hidden">
        {/* Animated Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -mr-20 -mt-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full -ml-20 -mb-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-serif text-black dark:text-white mb-6 leading-tight tracking-tighter">
                {project.title}
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                {project.shortDescription}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-foreground/5 border border-panel-border text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>

              {projectLinks.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {projectLinks.map((link, index) => {
                    const Icon = linkIcons[link.type];

                    return (
                      <a
                        key={`${link.type}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                          index === 0
                            ? 'bg-foreground text-background hover:opacity-90'
                            : 'border border-panel-border hover:bg-foreground hover:text-background'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                        {link.type !== 'source' && <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
            
            {/* Project Quick Overview Card */}
            <div className="w-full md:w-80 bento-card p-6 border-panel-border/40">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Visualization</h3>
              <div className="overflow-hidden rounded-2xl border border-panel-border bg-background/70">
                {primaryMedia?.type === 'image' ? (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={primaryMedia.url}
                      alt={primaryMedia.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-foreground/5">
                    <BarChart className="w-10 h-10 text-muted-foreground" />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm font-medium text-black dark:text-white">{project.visualization.label}</p>
                  <p className="mt-2 text-xs leading-5 text-neutral-500">{project.visualization.insight}</p>
                  {visualizationLink && (
                    <a
                      href={visualizationLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-panel-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      Open Visualization
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-4 mt-6 text-sm font-mono text-muted-foreground uppercase tracking-widest">Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-blue-500/10 rounded-md">
                    <Target className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Strategy</p>
                    <p className="text-xs text-neutral-500">Optimizing long-term outcomes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
                    <BarChart className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Analysis</p>
                    <p className="text-xs text-neutral-500">Quantitative trend discovery</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-500/10 rounded-md">
                    <Terminal className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Development</p>
                    <p className="text-xs text-neutral-500">Full-stack technical execution</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-6 md:px-12 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em] mb-12 text-center">Quantifiable Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.impactMetrics.map((metric, idx) => (
              <div key={idx} className="bento-card p-8 border-panel-border/20 hover:border-panel-border transition-colors">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">{metric.label}</p>
                <p className="text-5xl md:text-6xl font-serif text-black dark:text-white mb-2 tracking-tighter">{metric.value}</p>
                <p className="text-sm text-neutral-500 leading-snug">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-24">
            {/* Overview */}
            <article>
              <h2 className="text-3xl font-serif text-black dark:text-white mb-8">Project Overview</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {project.longDescription}
              </p>
            </article>

            {/* The Challenge */}
            <article className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 border-t border-panel-border pt-16">
              <div>
                <h2 className="text-xl font-sans font-bold text-black dark:text-white uppercase tracking-tighter sticky top-32">The Challenge</h2>
              </div>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {project.challenge}
              </p>
            </article>

            {/* My Solution */}
            <article className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 border-t border-panel-border pt-16">
              <div>
                <h2 className="text-xl font-sans font-bold text-black dark:text-white uppercase tracking-tighter sticky top-32">The Solution</h2>
              </div>
              <div className="space-y-12">
                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {project.solution}
                </p>
                {primaryMedia?.type === 'image' ? (
                  <figure className="relative aspect-video w-full overflow-hidden rounded-2xl border border-panel-border bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={primaryMedia.url}
                      alt={primaryMedia.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-panel-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                      {primaryMedia.caption}
                    </figcaption>
                  </figure>
                ) : (
                  <div className="aspect-video w-full rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-panel-border overflow-hidden flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-full bg-foreground/5 mx-auto mb-4 flex items-center justify-center">
                        <Terminal className="w-8 h-8 text-neutral-400" />
                      </div>
                      <p className="text-sm font-mono text-neutral-400 tracking-wider">PROJECT_VISUAL_01.EXE</p>
                      <p className="text-xs text-neutral-500 mt-2">Technical schematic or dashboard view goes here</p>
                    </div>
                  </div>
                )}
              </div>
            </article>

            {/* Key Results */}
            <article className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 border-t border-panel-border pt-16">
              <div>
                <h2 className="text-xl font-sans font-bold text-black dark:text-white uppercase tracking-tighter sticky top-32">Key Results</h2>
              </div>
              <div className="space-y-12">
                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {project.results}
                </p>
                <div className="w-full overflow-hidden rounded-2xl border border-panel-border bg-neutral-100 dark:bg-neutral-900">
                  <div className="flex h-10 items-center gap-1.5 border-b border-panel-border bg-white/50 px-4 backdrop-blur-sm dark:bg-black/50">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
                    <div className="ml-4 min-w-0 flex-1">
                      <p className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {project.visualization.label}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
                    <div className="relative aspect-video min-h-[260px] bg-background">
                      {primaryMedia?.type === 'image' ? (
                        <Image
                          src={primaryMedia.url}
                          alt={primaryMedia.caption}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 560px"
                        />
                      ) : primaryMedia?.type === 'embed' ? (
                        <iframe
                          src={primaryMedia.url}
                          title={primaryMedia.caption}
                          className="h-full w-full"
                          loading="lazy"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <BarChart className="w-12 h-12 text-neutral-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-between gap-8 border-t border-panel-border bg-background/80 p-6 lg:border-l lg:border-t-0">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Visualization Preview</p>
                        <h3 className="mt-4 text-2xl font-serif text-black dark:text-white">{project.visualization.label}</h3>
                        <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                          {project.visualization.insight}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {project.impactMetrics.slice(0, 2).map((metric) => (
                          <div key={metric.label} className="rounded-2xl border border-panel-border bg-foreground/[0.03] p-4">
                            <p className="text-2xl font-serif text-black dark:text-white">{metric.value}</p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                      {visualizationLink && (
                        <a
                          href={visualizationLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                        >
                          Open Visualization
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer CTA-like section */}
      <section className="py-32 px-6 md:px-12 border-t border-panel-border bg-foreground/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-white mb-8">Interested in the methodology?</h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link href="mailto:daffaulayafaros@gmail.com" className="px-8 py-3 bg-foreground text-background rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
                Discuss this Project
              </Link>
              <Link href="/projects" className="px-8 py-3 border border-panel-border text-foreground rounded-full font-medium transition-all hover:bg-foreground hover:text-background active:scale-95">
                Explore more Cases
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
}
