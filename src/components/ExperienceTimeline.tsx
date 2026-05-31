import React from "react";

const experiences = [
  {
    title: "Financial Fraud Detection & Interpretation System",
    desc: "Analyzed 2.7M+ transactions using Python (XGBoost) and engineered batch processing for 481MB of data in under 60 seconds. Built a FastAPI and Next.js dashboard to translate complex AI outputs into clear banking narratives for audit compliance."
  },
  {
    title: "HR Data Analytics & Workforce Optimization",
    desc: "Conducted end-to-end performance analysis for Hasna Medika Group, identifying drivers behind 16.65% turnover. Built interactive Tableau dashboards to visualize workforce KPIs, enabling leadership to make data-driven recruitment decisions."
  },
  {
    title: "Tech Stock Risk & Portfolio Optimization",
    desc: "Implemented Markowitz portfolio optimization on 12 years of market data, achieving an 11% higher CAGR than industry benchmarks. Developed Tableau dashboards that improved data interpretability for stakeholders by 10%."
  },
  {
    title: "Strategic Energy & Financial Consulting",
    desc: "At Harbour Energy and 180 Degrees Consulting, developed financial forecasting models for drilling projects and renewable energy pilot expansions, identifying 5% cost streamlining and reducing operational inefficiencies by 10%."
  }
];

export function ExperienceTimeline() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 dark:text-foreground mb-16 tracking-tight">Key Projects & Impact</h2>

      <div className="relative border-l border-panel-border pl-8 ml-4 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border border-panel-border bg-background flex items-center justify-center shadow-sm group-hover:bg-blue-500/20 group-hover:border-blue-400 transition-colors duration-300">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground group-hover:bg-blue-400 transition-colors duration-300" />
            </span>
            
            <h3 className="text-xl font-medium text-neutral-900 dark:text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors tracking-tight">
              {exp.title}
            </h3>
            <p className="text-neutral-600 dark:text-muted-foreground text-sm leading-relaxed max-w-2xl">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
