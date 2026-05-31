import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Projects } from "@/components/Projects";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden">
      <Hero />
      <BentoGrid />
      <Projects />
      <FooterCTA />
    </main>
  );
}
