import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const bentoItems = [
  {
    title: "Guestbook",
    subtitle: "Let me know you were here",
    href: "mailto:daffaulayafaros@gmail.com",
    gradient: "from-purple-500/10 to-indigo-500/0",
  },
  {
    title: "Collaboration",
    subtitle: "Open communication, async updates, zero surprises",
    href: "mailto:daffaulayafaros@gmail.com",
    gradient: "from-cyan-500/10 to-blue-500/0",
  },
  {
    title: "Uses",
    subtitle: "Check out my favorite tools",
    href: "/about",
    gradient: "from-emerald-500/10 to-teal-500/0",
  },
];

export function AboutBento() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16 border-t border-white/5">
      <p className="text-xs font-mono tracking-widest text-neutral-500 dark:text-neutral-400 mb-3 uppercase">My Site</p>
      <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 dark:text-white mb-10 tracking-tight">Explore, experiment &amp;&amp; say hello</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bentoItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`group bento-card border border-white/5 p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-100 transition-colors">{item.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-500 leading-relaxed">{item.subtitle}</p>
            </div>
            <div className="relative z-10 mt-4 flex justify-end">
              <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
