import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

const experiments = [
  { tag: "Agent", title: "Multi-agent code review", note: "Claude + Cursor pipeline that scopes diffs and runs review heuristics across PRs." },
  { tag: "Automation", title: "WhatsApp lead-router", note: "Priority scoring + multi-channel dispatch built from LeadFlow primitives." },
  { tag: "ML", title: "Carbon model v2", note: "Feature engineering experiments to push Carbon Footprint AI past 90%." },
  { tag: "Tooling", title: "Prompt-driven dev workflow", note: "Internal playbook for shipping production code with coding agents." },
];

export function Labs() {
  return (
    <section id="labs" className="bg-canvas py-24 lg:py-32 hairline-t">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <FlaskConical size={16} className="text-m-red" />
          <div className="m-stripe h-[3px] w-8" />
          <span className="label-uppercase text-body">Labs // Hidden Track</span>
        </div>
        <h2 className="display-lg mb-4 max-w-3xl">
          Experiments in <span className="text-body">agentic engineering.</span>
        </h2>
        <p className="body-light max-w-2xl mb-14">
          Active R&D — what I'm prototyping when no one's asked me to. Some ship as products, some
          ship as essays, some die as branches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline hairline">
          {experiments.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-surface-soft p-8 lg:p-10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="label-uppercase text-m-blue-light">/ {e.tag}</span>
                <span className="label-uppercase text-body font-mono">EXP.0{i + 1}</span>
              </div>
              <h3 className="display-sm text-on-dark mb-3">{e.title}</h3>
              <p className="body-light">{e.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
