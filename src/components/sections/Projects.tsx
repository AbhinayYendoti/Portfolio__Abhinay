import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  highlights: string[];
  metrics: { v: string; l: string }[];
  stack: string[];
  category: "AI" | "Full-Stack" | "Automation" | "Privacy";
  live: string;
  github: string;
};

const projects: Project[] = [
  {
    id: "leadflow",
    index: "001",
    title: "LeadFlow",
    tagline: "Intelligent CRM Workflow Automation",
    description:
      "End-to-end CRM automation system that captures leads, enriches them in MongoDB, and triggers automated WhatsApp + email notification pipelines.",
    problem: "Sales teams losing leads to slow manual follow-ups and fragmented channels.",
    highlights: [
      "Multi-channel notification orchestration (WhatsApp + Email)",
      "Priority-based lead routing engine",
      "Built end-to-end with Claude Code as a force multiplier",
    ],
    metrics: [
      { v: "Multi-Channel", l: "Notification Engine" },
      { v: "Real-time", l: "Lead Capture" },
    ],
    stack: ["Node.js", "Express", "MongoDB", "WhatsApp API", "Nodemailer"],
    category: "Automation",
    live: "https://lead-automation-generator.vercel.app/",
    github: "https://github.com/AbhinayYendoti/Lead-Automation-Generator",
  },
  {
    id: "introvert",
    index: "002",
    title: "Introvert Chatter",
    tagline: "Room-Based Social Conversation Platform",
    description:
      "A conversational platform for community-driven, room-based interaction — focused on intentional connection over noise.",
    problem: "Mainstream social is loud, performative and bad for introverts.",
    highlights: [
      "Supabase auth + room management",
      "Real-time conversation workflows",
      "Modern React + TypeScript frontend",
    ],
    metrics: [
      { v: "Live", l: "Production" },
      { v: "Realtime", l: "Conversations" },
    ],
    stack: ["React", "TypeScript", "Supabase", "Vite", "Tailwind"],
    category: "Full-Stack",
    live: "https://introvertchatter.vercel.app/",
    github: "https://github.com/AbhinayYendoti/IntrovertChatter",
  },
  {
    id: "carbon",
    index: "003",
    title: "Carbon Footprint AI",
    tagline: "ML-Powered Climate Impact Estimator",
    description:
      "An ML pipeline that predicts a user's carbon footprint with 85% accuracy, exposed as a deployed React + REST product.",
    problem: "Carbon estimation is opaque and rarely actionable for everyday users.",
    highlights: [
      "Scikit-learn pipeline with feature engineering",
      "REST API serving live predictions",
      "Full ML→Product pipeline shipped solo",
    ],
    metrics: [
      { v: "85%", l: "Model Accuracy" },
      { v: "ML→Prod", l: "Pipeline" },
    ],
    stack: ["Python", "Scikit-learn", "React", "REST", "MongoDB"],
    category: "AI",
    live: "https://ai-powered-carbon-footprint-calcula-brown.vercel.app/",
    github: "https://github.com/AbhinayYendoti/AI-Powered-Carbon-Footprint-Calculator",
  },
  {
    id: "image",
    index: "004",
    title: "Secure Image Compressor",
    tagline: "Privacy-First Browser-Side Compression",
    description:
      "A privacy-first image compression platform that processes everything client-side — your images never leave the browser.",
    problem: "Most image tools upload your files. Privacy-conscious users have no good option.",
    highlights: [
      "100% client-side processing via Canvas",
      "Batch compression + format conversion",
      "Mobile-first, performance-optimized UX",
    ],
    metrics: [
      { v: "0", l: "Bytes Uploaded" },
      { v: "Batch", l: "Multi-Format" },
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Canvas API", "JSZip"],
    category: "Privacy",
    live: "https://image-compressor-jade.vercel.app/",
    github: "https://github.com/AbhinayYendoti/Image-compressor",
  },
];

const filters = ["All", "AI", "Full-Stack", "Automation", "Privacy"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="bg-canvas py-24 lg:py-32 hairline-t">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="m-stripe h-[3px] w-12" />
          <span className="label-uppercase text-body">Selected Work // 02</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <h2 className="display-lg text-on-dark max-w-3xl">
            Four products. Shipped solo. <span className="text-body">Live in production.</span>
          </h2>
          <div className="flex flex-wrap gap-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`label-uppercase px-4 py-3 border-b-2 transition-colors ${
                  filter === f
                    ? "text-on-dark border-on-dark"
                    : "text-body border-transparent hover:text-on-dark"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-hairline hairline">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-surface-soft p-8 lg:p-10 flex flex-col"
    >
      {/* mock browser preview */}
      <div className="bg-canvas hairline aspect-[16/9] mb-8 relative overflow-hidden">
        <div className="hairline-b flex items-center gap-1.5 px-4 h-8 bg-surface-card">
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="ml-4 text-[10px] text-body font-mono truncate">
            {project.live.replace("https://", "")}
          </span>
        </div>
        <div className="absolute inset-0 top-8 flex items-center justify-center">
          <div className="text-center">
            <div className="display-md text-on-dark/90 font-mono">{project.index}</div>
            <div className="label-uppercase text-body mt-3">{project.category}</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 m-stripe h-[3px] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="display-sm text-on-dark">{project.title}</h3>
        <span className="label-uppercase text-body font-mono">{project.index}</span>
      </div>
      <p className="label-uppercase text-m-blue-light mb-5">{project.tagline}</p>

      <p className="body-light mb-6">{project.description}</p>

      <div className="space-y-2 mb-6">
        {project.highlights.map((h) => (
          <div key={h} className="flex gap-3 text-sm">
            <span className="text-m-red mt-1.5 w-1 h-1 bg-m-red shrink-0" />
            <span className="text-body-strong font-light">{h}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-px bg-hairline hairline mb-6">
        {project.metrics.map((m) => (
          <div key={m.l} className="bg-canvas p-4">
            <div className="display-sm text-on-dark text-lg">{m.v}</div>
            <div className="label-uppercase text-body mt-1 text-[10px]">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((s) => (
          <span key={s} className="label-uppercase text-body border border-hairline px-3 py-1.5 text-[10px]">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-on-dark text-canvas px-5 h-11 label-uppercase hover:bg-body-strong transition-colors"
        >
          Live Demo <ArrowUpRight size={14} />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-on-dark text-on-dark px-5 h-11 label-uppercase hover:bg-on-dark hover:text-canvas transition-colors"
        >
          <Github size={14} /> Source
        </a>
      </div>
    </motion.article>
  );
}
