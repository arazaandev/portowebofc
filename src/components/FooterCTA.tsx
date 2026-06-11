"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy } from "lucide-react";

const EMAIL = "daffaulayafaros@gmail.com";

export function FooterCTA() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer className="w-full relative mt-8 overflow-hidden border-t border-panel-border bg-background">
      <div className="absolute inset-x-0 top-0 mx-auto h-96 max-w-5xl bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10 text-center flex flex-col items-center">
        <div className="mb-8 flex items-center space-x-2 bg-foreground/5 border border-panel-border rounded-full px-4 py-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-xs tracking-widest text-muted-foreground uppercase font-mono">Open To Work</span>
        </div>

        <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">From analysis to action</p>
        <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6 tracking-tight">Start with the decision.</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-8">
          Available for data, strategy, and full-stack analytics work.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href={`mailto:${EMAIL}`} className="group relative flex items-center justify-center gap-3 bg-foreground text-background rounded-full px-8 py-4 font-medium transition-all hover:scale-[1.03] hover:opacity-90 shadow-lg">
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            type="button"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border border-panel-border px-5 py-3 rounded-full"
            onClick={copyEmail}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />}
            <span>{copied ? "Email copied" : EMAIL}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-panel-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono relative z-10">
        <p>&copy; 2026 Daffa Arazaan. All rights reserved</p>
        <div className="flex items-center gap-6">
          <Link href={`mailto:${EMAIL}`} className="hover:text-cyan-500 transition-colors">Email</Link>
          <Link href="https://github.com/" className="hover:text-cyan-500 transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/in/daffa-arazaan" className="hover:text-cyan-500 transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
