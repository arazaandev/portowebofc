import Link from "next/link";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    readTime: "8 min read",
    title: "How I Explain Fraud Models to Auditors",
    summary: "A practical structure for turning model scores into review-ready narratives.",
  },
  {
    readTime: "6 min read",
    title: "Turning HR Churn Data into Retention Strategy",
    summary: "What management actually needs from attrition dashboards and workforce analysis.",
  },
  {
    readTime: "7 min read",
    title: "Portfolio Optimization Without Hiding the Assumptions",
    summary: "Risk, return, and the questions every quantitative finance model should answer.",
  },
];

export function Insights() {
  return (
    <section className="w-full border-t border-panel-border/20 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">Insights</p>
            <h2 className="text-4xl font-serif tracking-tight text-neutral-900 dark:text-white md:text-6xl">
              Notes from the analysis desk
            </h2>
          </div>
          <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Read more posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {insights.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              className="group rounded-3xl border border-panel-border bg-panel p-6 transition-all hover:-translate-y-1 hover:border-panel-border-hover"
            >
              <p className="mb-8 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">{post.readTime}</p>
              <h3 className="text-2xl font-serif tracking-tight text-foreground">{post.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{post.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Read blog post
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
