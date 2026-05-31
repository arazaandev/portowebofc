"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    React.useCallback((onStoreChange) => {
      const frame = window.requestAnimationFrame(onStoreChange);
      return () => window.cancelAnimationFrame(frame);
    }, []),
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Sun className="w-5 h-5 text-yellow-400 fill-current" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Moon className="w-5 h-5 text-indigo-600 fill-current" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative background glow that changes based on theme */}
      <div className={`absolute inset-0 opacity-20 blur-lg group-hover:opacity-40 transition-opacity ${theme === "dark" ? "bg-yellow-400" : "bg-indigo-600"}`}></div>
    </button>
  );
}
