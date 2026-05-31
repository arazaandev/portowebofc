"use client";
import React from "react";
import { LampContainer } from "./LampEffect";
import { Copy, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative w-full mb-10 pt-20">
      <LampContainer>
        <div className="flex flex-col items-center text-center justify-center z-50">

          {/* Status Badge referencing your recent/upcoming RevoU program */}
          <div className="mb-8 flex items-center justify-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Project</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">Fraud Detection System live now</span>
            <ChevronRight className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-tight mb-4 tracking-tighter text-neutral-900 dark:text-white">
            <span className="text-neutral-950 dark:text-white">
              Data that tells stories.
            </span>
            <br />
            <span className="italic text-neutral-700 dark:text-neutral-300 font-medium">
              Economics that drives impact.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8 mb-12">
            <div className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-light flex items-center gap-3">
              Hello, I&apos;m Daffa Arazaan
              <Image 
                src="/avatar.jpg" 
                alt="Daffa Arazaan" 
                width={40} 
                height={40} 
                className="rounded-full border border-neutral-200 dark:border-white/20 object-cover ml-2"
              />
              <span className="ml-2">an Economics & Data Professional</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <Link href="/projects" className="group relative flex items-center justify-center space-x-2 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/20 dark:to-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 text-neutral-900 dark:text-white rounded-full px-6 py-3 font-medium transition-all hover:scale-105 hover:bg-black/5 dark:hover:bg-white/10 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:!shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <span>View Portfolio</span>
              <div className="bg-neutral-900 text-white dark:bg-white dark:text-black p-1.5 rounded-full ml-2 group-hover:bg-neutral-700 dark:group-hover:bg-neutral-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <div
              className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer text-sm"
              onClick={() => navigator.clipboard.writeText('daffaulayafaros@gmail.com')}
            >
              <Copy className="w-4 h-4" />
              <span>daffaulayafaros@gmail.com</span>
            </div>
          </div>
        </div>
      </LampContainer>
    </div>
  );
}
