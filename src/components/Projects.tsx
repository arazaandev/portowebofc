"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects-data";

export function Projects() {
  return (
    <section id="work" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-panel-border/20">
      <div className="mb-20">
        <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-[0.3em]">Precision in Practice</p>
        <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 dark:text-white tracking-tighter mb-4">Work</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col group">
            {/* Header info */}
            <div className="flex justify-between items-end mb-4 px-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground">{project.number}</span>
                <div className="h-[1px] w-4 bg-panel-border" />
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{project.category}</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">{project.date}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 dark:text-white mb-6 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
              {project.cardTitle}
            </h3>

            {/* Main Card */}
            <Link href={`/projects/${project.slug}`} className="block relative">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-panel-border/40 glass bg-panel/30 flex flex-col ${project.glow}`}
              >
                {/* Image Wrap */}
                <div className="relative w-full h-[70%] group-hover:scale-105 transition-transform duration-700">
                  <Image 
                    src={project.image} 
                    alt={project.cardTitle} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                </div>

                {/* Description within card */}
                <div className="relative flex-1 p-6 flex flex-col justify-between items-start bg-background/5 backdrop-blur-md">
                   <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-[90%]">
                     {project.cardDescription}
                   </p>
                   <div className="absolute top-6 right-6 p-2 rounded-full border border-panel-border group-hover:bg-foreground group-hover:text-background transition-all transform group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
              </motion.div>
            </Link>

            {/* Tech Badges outside the card */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-panel/50 border border-neutral-200 dark:border-panel-border/30 text-[10px] font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-foreground hover:bg-neutral-200 dark:hover:bg-panel transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
