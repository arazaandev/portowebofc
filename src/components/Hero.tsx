"use client";

import React from "react";
import { ArrowRight, Check, Copy, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LampContainer } from "./LampEffect";

const EMAIL = "daffaulayafaros@gmail.com";

export function Hero() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative w-full">
      <LampContainer className="min-h-[820px]">
        <div className="z-50 flex w-full max-w-5xl flex-col items-center pt-10 text-center md:pt-8 lg:pt-6">
          <Link
            href="/projects/fraud-detection"
            className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-sm font-medium text-neutral-700 backdrop-blur-md transition-colors hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
            <span className="truncate">Featured case study - Financial fraud detection system</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
          </Link>

          <h1 className="max-w-4xl text-5xl font-serif leading-[0.98] tracking-tight text-neutral-950 dark:text-white md:text-7xl lg:text-8xl">
            Data products with economic judgment.
          </h1>

          <p className="mt-8 max-w-2xl text-base font-light leading-8 text-neutral-600 dark:text-neutral-300 md:text-xl">
            I turn messy business data into explainable systems, dashboards, and strategic decisions.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-[2rem] border border-panel-border bg-background/70 p-3 shadow-[0_20px_80px_-50px_rgba(0,0,0,0.45)] backdrop-blur md:flex-row">
            <Image
              src="/avatar.jpg"
              alt="Daffa Arazaan"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border border-panel-border object-cover grayscale transition-all hover:grayscale-0"
              priority
            />
            <div className="px-2 text-center md:text-left">
              <p className="text-sm font-semibold text-foreground">Hello, I&apos;m Daffa Arazaan</p>
              <p className="text-xs text-muted-foreground">Economics student, data analyst, and full-stack analytics builder</p>
            </div>
          </div>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/projects"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:scale-[1.03] sm:w-auto"
            >
              View case studies
              <span className="rounded-full bg-background/15 p-1.5 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-panel-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground sm:w-auto"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              {copied ? "Email copied" : EMAIL}
            </button>
          </div>
        </div>
      </LampContainer>
    </section>
  );
}
