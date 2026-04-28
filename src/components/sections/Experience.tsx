import { motion } from "framer-motion";

const items = [
  {
    period: "Jan 2025 — Present",
    role: "Backend Developer Intern",
    company: "Hewlett Packard Enterprise",
    location: "Hyderabad, IN · Remote",
    bullets: [
      "Built RESTful web services with Spring Boot for managing employee data with secure CRUD operations.",
      "Implemented file upload pipelines and a modular service-layer architecture.",
      "Hardened reliability with JUnit testing and security best-practices.",
    ],
    stack: ["Java", "Spring Boot", "REST API", "Postman", "JUnit", "MySQL"],
  },
  {
    period: "Nov 2024 — Dec 2024",
    role: "Java Programming Intern",
    company: "Codebegun",
    location: "Hyderabad, IN · Remote",
    bullets: [
      "Built backend modules and REST APIs in production-oriented agile cycles.",
      "Contributed to debugging, integration, and scalable service-layer design.",
    ],
    stack: ["Java", "Spring Boot", "API Development"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-surface-soft py-24 lg:py-32 hairline-t hairline-b">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="m-stripe h-[3px] w-12" />
          <span className="label-uppercase text-body">Experience // 03</span>
        </div>
        <h2 className="display-lg mb-16 max-w-3xl">
          Trained at scale. <span className="text-body">Shipped at speed.</span>
        </h2>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/4 top-0 bottom-0 w-px bg-hairline" />
          <div className="space-y-16">
            {items.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative pl-8 lg:pl-0"
              >
                <div className="absolute left-[-5px] lg:left-[calc(25%-5px)] top-2 w-2.5 h-2.5 bg-on-dark" />
                <div>
                  <div className="label-uppercase text-m-blue-light">{it.period}</div>
                </div>
                <div className="lg:col-span-3 lg:pl-12">
                  <h3 className="display-sm text-on-dark">{it.role}</h3>
                  <div className="label-uppercase-lg text-body mt-2">{it.company}</div>
                  <div className="label-uppercase text-body mt-1">{it.location}</div>
                  <ul className="mt-6 space-y-3">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-3 body-light">
                        <span className="text-m-red mt-2.5 w-1 h-1 bg-m-red shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {it.stack.map((s) => (
                      <span key={s} className="label-uppercase text-body border border-hairline px-3 py-1.5 text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
