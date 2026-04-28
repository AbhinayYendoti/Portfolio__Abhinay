import { motion } from "framer-motion";
import carbon from "@/assets/carbon.jpg";
import { Github } from "lucide-react";

const stats = [
  { v: "4", l: "Products Shipped" },
  { v: "Full-Stack", l: "Frontend to Backend" },
  { v: "AI-Native", l: "Agentic Development" },
  { v: "0→1", l: "Product Builder" },
];

// 53 weeks x 7 days
function generateContributions(): number[] {
  const seed = 42;
  let s = seed;
  return Array.from({ length: 53 * 7 }, () => {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    if (r < 0.35) return 0;
    if (r < 0.6) return 1;
    if (r < 0.82) return 2;
    if (r < 0.95) return 3;
    return 4;
  });
}

export function Proof() {
  const contributions = generateContributions();
  const intensities = [
    "bg-surface-card",
    "bg-m-blue-light/20",
    "bg-m-blue-light/45",
    "bg-m-blue-dark/75",
    "bg-m-red",
  ];

  return (
    <section className="relative overflow-hidden hairline-t hairline-b">
      <div className="absolute inset-0">
        <img src={carbon} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-canvas/70" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="m-stripe h-[3px] w-12" />
          <span className="label-uppercase text-body">Proof of Work // 05</span>
        </div>
        <h2 className="display-lg mb-12 max-w-3xl">
          Built. Shipped. <span className="text-body">Deployed.</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline hairline mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-canvas p-8 lg:p-10"
            >
              <div className="display-md text-on-dark">{s.v}</div>
              <div className="label-uppercase text-body mt-3">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-surface-soft hairline p-6 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <div className="label-uppercase text-body mb-2">/ Github Activity</div>
              <h3 className="display-sm text-on-dark">@AbhinayYendoti — last 12 months</h3>
            </div>
            <a
              href="https://github.com/AbhinayYendoti"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-on-dark text-on-dark px-5 h-11 label-uppercase hover:bg-on-dark hover:text-canvas transition-colors w-fit"
            >
              <Github size={14} /> View on GitHub
            </a>
          </div>

          <div className="overflow-x-auto">
            <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[760px]">
              {contributions.map((v, i) => (
                <div
                  key={i}
                  className={`w-[10px] h-[10px] ${intensities[v]}`}
                  title={`Day ${i}: ${v} contributions`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <span className="label-uppercase text-body text-[10px]">Less</span>
            {intensities.map((c, i) => (
              <div key={i} className={`w-[10px] h-[10px] ${c}`} />
            ))}
            <span className="label-uppercase text-body text-[10px]">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
