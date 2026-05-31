import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-40 pb-20 relative">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-b from-indigo-500/20 to-transparent blur-[80px] pointer-events-none rounded-full" />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif text-black dark:text-white mb-8 tracking-tight">About Daffa Arazaan</h1>

        <div className="prose dark:prose-invert prose-lg max-w-none text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
          <p className="mb-6">
            I am a Data-driven Economics student at Universitas Gadjah Mada with a passion for bridging the gap between quantitative analytics and technology solutions. My experience ranges from developing full-stack applications with FastAPI and Next.js to building complex financial models that optimize resource efficiency.
          </p>
          <p className="mb-6">
            With a strong foundation in Python, SQL, and strategic consulting, I focus on creating sustainable business solutions. Whether it&apos;s detecting real-time financial fraud or streamlining costs in the renewable energy sector, I strive to translate complex data into actionable insights.
          </p>
          <p className="text-black dark:text-white font-medium text-xl font-serif italic mb-10">
            Leveraging technology and data to build a more efficient and sustainable future.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          {[
            { name: "LinkedIn", href: "https://www.linkedin.com/in/daffa-arazaan" },
            { name: "Portfolio", href: "/projects" },
            { name: "Email", href: "mailto:daffaulayafaros@gmail.com" }
          ].map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="flex items-center gap-2 group px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{social.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors group-hover:-rotate-45" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
