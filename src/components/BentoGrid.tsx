"use client";

import React from "react";
import { Copy, Star } from "lucide-react";
import Image from "next/image";
import { Globe } from "./ui/cobe-globe";
import { useTheme } from "next-themes";

export function BentoGrid() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {/* Card 1: Let's Build Together (Span 2) */}
        <div className="bento-card md:col-span-2 flex flex-col justify-end p-8 min-h-[400px] relative group">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
            <div className="flex space-x-[-40px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-48 h-48 rounded-full border-[1px] border-panel-border flex items-center justify-center">
                  {i === 2 && (
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-panel-border z-10 bg-panel flex items-center justify-center text-foreground font-bold text-sm shadow-[0_0_30px_rgba(var(--foreground),0.2)] relative">
                      <Image 
                        src="/avatar.jpg" 
                        alt="Daffa Arazaan" 
                        fill 
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 128px"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 text-center mt-auto">
            <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-[0.2em]">Let&apos;s build together</p>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">Clear communication, fast iterations, no surprises</h3>
          </div>
        </div>

        {/* Card 2: Tech Stack (Span 1) */}
        <div className="bento-card col-span-1 p-8 min-h-[400px] flex flex-col">
          <div className="text-center mb-8">
            <p className="text-xs font-mono tracking-widest text-muted-foreground mb-3 uppercase tracking-[0.2em]">Tech Stack</p>
            <h3 className="text-xl font-serif text-foreground">The stack behind everything I ship</h3>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            {/* Tech badges grid */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['Python', 'SQL', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'Pandas', 'Tableau', 'GitHub'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-md bg-foreground/5 border border-panel-border text-xs text-secondary-foreground font-medium flex items-center gap-2 transition hover:bg-foreground/10 hover:border-foreground/20">
                  <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-neutral-400 to-neutral-600 border border-panel-border"></span>
                  {tech}
                </span>
              ))}
            </div>
            {/* Magnifying glass decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-foreground/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-foreground/10 transition-colors duration-500"></div>
          </div>
        </div>

        {/* Card 3: What you get (Span 1) */}
        <div className="bento-card col-span-1 p-8 min-h-[350px] flex flex-col relative overflow-hidden">
          <div className="relative z-10 mb-8">
            <p className="text-xs font-mono tracking-widest text-muted-foreground mb-3 uppercase tracking-[0.2em]">What you get</p>
            <h3 className="text-xl font-serif text-foreground">Clean code, pixel-perfect UI, deployed & scaling</h3>
          </div>
          
          <div className="flex-1 relative w-full h-full flex flex-col items-center justify-end mt-4">
             {/* Box Mockup */}
             <div className="w-48 h-24 border border-panel-border bg-gradient-to-t from-foreground/5 to-transparent flex items-end justify-center rounded-sm relative shadow-inner">
                <div className="absolute -top-6 bg-panel border border-panel-border rounded-full px-4 py-2 flex items-center gap-2 shadow-xl whitespace-nowrap">
                  <span className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center">
                    <Copy className="w-3 h-3 text-foreground" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">Clear Updates</span>
                    <span className="text-[10px] text-muted-foreground">Async demos, no status meeting...</span>
                  </div>
                </div>
             </div>
             {/* Glow below box */}
             <div className="w-40 h-[1px] shadow-[0_0_20px_10px_rgba(var(--foreground),0.1)] mb-2 mt-4"></div>
          </div>
        </div>

        {/* Card 4: Flexible with timezones (Span 1) */}
        <div className="bento-card col-span-1 p-8 min-h-[350px] flex flex-col relative">
          <div className="relative z-10">
            <p className="text-xs font-mono tracking-widest text-muted-foreground mb-3 uppercase tracking-[0.2em]">Flexible with timezones</p>
            <h3 className="text-xl font-serif text-foreground">Based in Indonesia, available globally</h3>
          </div>
          
          <div className="flex-1 mt-8 relative flex items-center justify-center overflow-hidden">
             <div className="w-[255px] h-[255px] md:w-[300px] md:h-[300px] absolute -bottom-12">
                <Globe 
                  markers={[
                    { id: "jkt", location: [-6.2088, 106.8456], label: "Jakarta" },
                    { id: "nyc", location: [40.7128, -74.006], label: "New York" },
                    { id: "london", location: [51.5074, -0.1278], label: "London" },
                  ]}
                  arcs={[
                    { id: "jkt-nyc", from: [-6.2088, 106.8456], to: [40.7128, -74.006] },
                    { id: "jkt-london", from: [-6.2088, 106.8456], to: [51.5074, -0.1278] },
                  ]}
                  markerColor={isDark ? [0, 0.8, 1] : [0.1, 0.4, 0.9]}
                  baseColor={isDark ? [0.05, 0.05, 0.1] : [1, 1, 1]}
                  glowColor={isDark ? [0.1, 0.1, 0.3] : [0.9, 0.9, 1]}
                  dark={isDark ? 1 : 0}
                  mapBrightness={isDark ? 6 : 10}
                  speed={0.002}
                />
             </div>
          </div>
        </div>

        {/* Card 5: Uses (Span 1) */}
        <div className="bento-card col-span-1 p-8 min-h-[350px] flex flex-col justify-end text-center relative group">
          <div className="flex-1 flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="w-16 h-16 rounded-2xl bg-panel border border-panel-border flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300" style={{ transitionDelay: `${item * 50}ms` }}>
                  {item === 1 && <Star className="text-orange-400 w-8 h-8 fill-current" />}
                  {item === 2 && <div className="w-8 h-8 bg-blue-500 rounded-md"></div>}
                  {item === 3 && <div className="w-8 h-8 bg-pink-500 rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-mono tracking-widest text-muted-foreground mb-3 uppercase tracking-[0.2em]">Uses</p>
            <h3 className="text-xl font-serif text-foreground">Check out my favorite tools</h3>
          </div>
        </div>

      </div>
    </div>
  );
}
