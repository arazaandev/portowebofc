import React from "react";
import Link from "next/link";
import { Users, GitFork, Star } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function OpenSourceStats() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16 border-t border-white/5 relative">
      <div className="absolute top-0 right-1/4 w-[600px] h-64 bg-gradient-to-b from-white/5 to-transparent blur-[80px] pointer-events-none rounded-full" />
      
      <div className="mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-mono tracking-widest text-neutral-400 mb-3 uppercase">Open Source</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">Code &amp; Contributions</h2>
        </div>
        <Link 
          href="https://github.com/" 
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          @DaffaArazaan
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bento-card p-6 flex flex-col justify-center border border-white/5">
          <div className="flex items-center gap-3 mb-2 text-neutral-400">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Followers</span>
          </div>
          <span className="text-3xl font-serif text-white">330</span>
        </div>
        
        <div className="bento-card p-6 flex flex-col justify-center border border-white/5">
          <div className="flex items-center gap-3 mb-2 text-neutral-400">
            <GitFork className="w-4 h-4" />
            <span className="text-sm font-medium">Forks</span>
          </div>
          <span className="text-3xl font-serif text-white">76</span>
        </div>

        <div className="bento-card p-6 flex flex-col justify-center border border-white/5">
          <div className="flex items-center gap-3 mb-2 text-neutral-400">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">GitHub Stars</span>
          </div>
          <span className="text-3xl font-serif text-white">549</span>
        </div>
      </div>
    </section>
  );
}
