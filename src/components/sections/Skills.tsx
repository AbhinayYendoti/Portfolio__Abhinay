import { motion } from "framer-motion";

const groups = [
  {
    label: "Backend",
    items: ["FastAPI", "Spring Boot", "Node.js", "Express", "REST APIs"],
  },
  {
    label: "AI / ML",
    items: ["Scikit-learn", "ML Pipelines", "Prompt Engineering", "TensorFlow"],
  },
  {
    label: "Full-Stack",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Agent Workflows",
    items: ["Claude Code", "Cursor", "Agent Orchestration", "Prompt-Driven Dev"],
  },
  {
    label: "Data",
    items: ["MongoDB", "MySQL", "Supabase", "Firebase", "SQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vercel", "Postman", "Maven"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-canvas py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="m-stripe h-[3px] w-12" />
          <span className="label-uppercase text-body">Stack // 04</span>
        </div>
        <h2 className="display-lg mb-16 max-w-3xl">
          The toolkit. <span className="text-body">Engineered, not collected.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline hairline">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-surface-soft p-8 group hover:bg-surface-card transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="label-uppercase text-body">/ 0{i + 1}</span>
                <div className="m-stripe h-[3px] w-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="display-sm text-on-dark mb-6">{g.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="label-uppercase text-body-strong border border-hairline px-3 py-2 text-[11px]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
