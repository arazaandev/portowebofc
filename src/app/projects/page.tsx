import React from "react";
import { Projects } from "@/components/Projects";
import { FooterCTA } from "@/components/FooterCTA";

export const metadata = {
  title: "Projects | Daffa Arazaan",
  description: "Explore the analytical impact and full-stack solutions developed by Daffa Arazaan.",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden pt-20">
      <Projects />
      <FooterCTA />
    </main>
  );
}
