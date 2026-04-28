import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Download } from "lucide-react";
import { MStripe } from "../MStripe";

const roles = ["Backend Engineer", "Product Builder", "AI Automation Developer", "AI-Native Full-Stack Dev"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[i];
    const article = /^[aeiou]/i.test(role) ? "an" : "a";
    const word = `${article} ${role}`;
    const speed = deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((n) => (n + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="inline-flex items-center text-body-strong">
      {text}
      <span className="caret ml-1 inline-block w-[3px] h-[1em] translate-y-[3px] bg-on-dark" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-canvas">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-canvas/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-transparent to-canvas/40" />
      </div>

      <div className="relative max-w-[1440px] mx-auto w-full px-6 lg:px-12 pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="m-stripe h-[3px] w-12" />
          <span className="label-uppercase text-body">Abhinay Yendoti // Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl text-on-dark max-w-5xl"
        >
          Building AI-Native Products
          <br />& Scalable Systems.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex items-baseline gap-3 text-xl md:text-2xl font-light"
        >
          <span className="text-body">I'm</span>
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="body-light mt-6 max-w-2xl text-base md:text-lg"
        >
          Full-stack engineer working at the intersection of FastAPI, React, and agent-driven
          development. 4 live products shipped independently — from CRM automation to ML-powered
          climate tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-on-dark text-canvas px-7 h-12 label-uppercase-lg hover:bg-body-strong transition-colors"
          >
            View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/AbhinayYendoti"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-on-dark text-on-dark px-7 h-12 label-uppercase-lg hover:bg-on-dark hover:text-canvas transition-colors"
          >
            <Download size={16} /> Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-on-dark px-2 h-12 label-uppercase-lg hover:text-body transition-colors"
          >
            Contact Me →
          </a>
        </motion.div>
      </div>

      <MStripe />
    </section>
  );
}
