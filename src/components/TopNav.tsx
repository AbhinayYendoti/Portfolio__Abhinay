import { useEffect, useState } from "react";
import { MStripe } from "./MStripe";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#labs", label: "Labs" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-colors ${
          scrolled ? "bg-canvas/85 backdrop-blur-md hairline-b" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="flex flex-col gap-[2px]">
              <div className="m-stripe h-[3px] w-8" />
            </div>
            <span className="label-uppercase-lg text-on-dark">Abhinay // Y</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label-uppercase text-body hover:text-on-dark transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="label-uppercase border border-on-dark px-5 py-3 text-on-dark hover:bg-on-dark hover:text-canvas transition-colors"
            >
              Hire Me →
            </a>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-on-dark p-2"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-canvas">
          <MStripe />
          <div className="flex items-center justify-between px-6 h-16 hairline-b">
            <span className="label-uppercase-lg">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="p-2">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display-md text-on-dark"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
