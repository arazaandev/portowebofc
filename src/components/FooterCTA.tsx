"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";

export function FooterCTA() {
  return (
    <footer className="w-full relative mt-24 overflow-hidden border-t border-panel-border bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none blur-3xl opacity-20 dark:opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10 text-center flex flex-col items-center">
        <div className="mb-8 flex items-center space-x-2 bg-foreground/5 border border-panel-border rounded-full px-4 py-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-xs tracking-widest text-muted-foreground uppercase font-mono">Open To Work</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Let&apos;s make it happen!</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          I&apos;m available for full-time roles & freelance projects. I thrive on crafting dynamic web applications, and delivering seamless user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="mailto:daffaulayafaros@gmail.com" className="group relative flex items-center justify-center space-x-2 bg-foreground text-background rounded-full px-8 py-4 font-medium transition-all hover:scale-105 hover:opacity-90 shadow-lg">
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            type="button"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-transparent hover:border-panel-border px-4 py-2 rounded-full"
            onClick={() => navigator.clipboard.writeText("daffaulayafaros@gmail.com")}
          >
            <Copy className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span>daffaulayafaros@gmail.com</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-panel-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono relative z-10">
        <p>&copy; 2026 Daffa Arazaan. All rights reserved</p>
        <div className="flex items-center gap-6">
          <Link href="mailto:daffaulayafaros@gmail.com" className="hover:text-cyan-500 transition-colors">Email</Link>
          <Link href="https://github.com/" className="hover:text-cyan-500 transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/in/daffa-arazaan" className="hover:text-cyan-500 transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
