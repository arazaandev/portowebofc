"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const checkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
          <span className="font-bold text-2xl tracking-tighter text-foreground">DA</span>
        </Link>

        <div className="hidden md:flex items-center justify-center">
          <div
            className="bg-white/70 dark:bg-black/70 px-2 py-2 rounded-full flex items-center gap-1 relative backdrop-blur-md"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navItems.map((item) => {
              const isActive = checkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative z-10",
                    isActive ? "text-neutral-800 dark:text-neutral-200" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-8 h-1 bg-foreground rounded-b-full z-20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <AnimatePresence>
                    {hoveredPath === item.href && (
                      <motion.div
                        layoutId="hover-nav-bg"
                        className="absolute inset-0 bg-foreground/10 rounded-full z-[-1]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                  {item.name}
                </Link>
              );
            })}

            <div className="w-[1px] h-6 bg-foreground/10 mx-2" />

            <Link
              href="mailto:daffaulayafaros@gmail.com"
              onMouseEnter={() => setHoveredPath("call")}
              className="px-5 py-2 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group"
            >
              <AnimatePresence>
                {hoveredPath === "call" && (
                  <motion.div
                    layoutId="hover-nav-bg"
                    className="absolute inset-0 bg-foreground/10 rounded-full z-[-1]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              Book a Call
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />
          <Link href="mailto:daffaulayafaros@gmail.com" className="hidden sm:flex p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email Daffa Arazaan">
            <Mail className="w-5 h-5" />
          </Link>
          <button
            type="button"
            className="md:hidden glass p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-4 rounded-2xl border border-panel-border bg-background/95 p-2 shadow-xl backdrop-blur"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  checkActive(item.href) ? "bg-foreground text-background" : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="mailto:daffaulayafaros@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              <Mail className="w-4 h-4" />
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
