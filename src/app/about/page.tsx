import type { Metadata } from "next";
import { AboutHero } from "@/components/AboutHero";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { OpenSourceStats } from "@/components/OpenSourceStats";
import { AboutBento } from "@/components/AboutBento";
import { FooterCTA } from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "About | Journey, Skills & Experience - Daffa Arazaan",
  description:
    "Learn about Daffa Arazaan, a data-driven economics and analytics professional with finance, consulting, and dashboard experience.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden">
      <AboutHero />
      <ExperienceTimeline />
      <OpenSourceStats />
      <AboutBento />
      <FooterCTA />
    </main>
  );
}
