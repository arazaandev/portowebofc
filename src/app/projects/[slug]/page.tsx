import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, projectsData } from "@/lib/projects-data";
import { ExternalLink, Terminal, BarChart, Target } from "lucide-react";
import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

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

              {(project.githubLink || project.liveLink) && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-panel-border rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-all">
                      <GithubIcon className="w-4 h-4" />
                      Source
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
            
            {/* Project Quick Overview Card */}
            <div className="w-full md:w-80 bento-card p-6 border-panel-border/40">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Focus Areas</h3>
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
                {project.media?.[0] ? (
                  <figure className="relative aspect-video w-full overflow-hidden rounded-2xl border border-panel-border bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={project.media[0].url}
                      alt={project.media[0].caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-panel-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                      {project.media[0].caption}
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
                {/* Dashboard Embed Placeholder */}
                <div className="aspect-[4/3] w-full rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-panel-border overflow-hidden flex flex-col relative group">
                  <div className="h-10 border-b border-panel-border bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50"></div>
                    <div className="ml-4 h-4 w-40 bg-neutral-200 dark:bg-neutral-800 rounded-sm"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center p-8">
                       <BarChart className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                       <p className="text-sm font-medium text-neutral-500">Interactive Visualization Stack</p>
                       <p className="text-xs text-neutral-400 mt-1 italic">Typically embedded Tableau or custom D3.js metrics</p>
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
