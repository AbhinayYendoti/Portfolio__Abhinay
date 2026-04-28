import { motion } from "framer-motion";

const stats = [
  { v: "4", l: "Products Shipped" },
  { v: "Full-Stack", l: "Frontend to Backend" },
  { v: "AI-Native", l: "Agentic Development" },
  { v: "0→1", l: "Product Builder" },
];

export function About() {
  return (
    <section id="about" className="bg-canvas py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="m-stripe h-[3px] w-12" />
          <span className="label-uppercase text-body">About // 01</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h2 className="display-lg text-on-dark mb-8">
              Engineered for shipping.<br />
              <span className="text-body">Built to scale.</span>
            </h2>
            <div className="space-y-5 body-light text-lg max-w-2xl">
              <p>
                I'm a final-year B.Tech (AI/ML) student at Vel Tech University with a builder's
                obsession — I've shipped four production-grade products independently, each from
                whiteboard to deployed URL.
              </p>
              <p>
                My stack is intentionally modern: <span className="text-on-dark font-normal">React, FastAPI, Spring Boot, MongoDB, Supabase</span> —
                paired with agentic development workflows powered by Claude Code and Cursor. AI
                isn't a feature; it's a first-class citizen in how I architect, debug and deliver.
              </p>
              <p>
                Top 1% builder mindset: scope it, ship it, iterate. I optimize for engineering
                velocity without compromising architecture.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-2 gap-px bg-hairline hairline self-start"
          >
            {stats.map((s) => (
              <div key={s.l} className="bg-surface-soft p-8">
                <div className="display-md text-on-dark">{s.v}</div>
                <div className="label-uppercase text-body mt-3">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
