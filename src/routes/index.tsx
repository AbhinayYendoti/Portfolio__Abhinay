import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Proof } from "@/components/sections/Proof";
import { Labs } from "@/components/sections/Labs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhinay Portfolio" },
      {
        name: "description",
        content:
          "Abhinay Yendoti — AI-Native Full-Stack Developer. Building intelligent, scalable systems with FastAPI, React, and agent-driven workflows. 4 live products shipped.",
      },
      { property: "og:title", content: "Abhinay Yendoti — AI-Native Full-Stack Engineer" },
      {
        property: "og:description",
        content:
          "Backend Engineer · Product Builder · AI Automation Developer. 4 live products shipped solo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-canvas text-on-dark min-h-screen">
      <TopNav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Proof />
      <Labs />
      <Contact />
      <Footer />
    </main>
  );
}
