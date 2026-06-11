import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { HomeProjectTimeline } from "@/components/HomeProjectTimeline";
import { Projects } from "@/components/Projects";
import { Insights } from "@/components/Insights";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden">
      <Hero />
      <BentoGrid />
      <HomeProjectTimeline />
      <Projects />
      <Insights />
      <FooterCTA />
    </main>
  );
}
