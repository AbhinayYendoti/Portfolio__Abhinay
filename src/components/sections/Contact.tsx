import ctaBg from "@/assets/cta-band.jpg";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { MStripe } from "../MStripe";

const links = [
  { icon: Mail, label: "Email", value: "abhinayyendoti@gmail.com", href: "mailto:abhinayyendoti@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "abhinay-yendoti", href: "https://www.linkedin.com/in/abhinay-yendoti-196029305" },
  { icon: Github, label: "GitHub", value: "AbhinayYendoti", href: "https://github.com/AbhinayYendoti" },
  { icon: Phone, label: "Phone", value: "+91 6305741028", href: "tel:+916305741028" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden hairline-t">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover opacity-50" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/70 via-canvas/80 to-canvas" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="flex items-center gap-3 mb-8">
          <div className="m-stripe h-[3px] w-12" />
          <span className="label-uppercase text-body">Contact // 06</span>
        </div>

        <h2 className="display-xl text-on-dark mb-8 max-w-5xl">
          Let's build something<br />worth shipping.
        </h2>
        <p className="body-light text-lg max-w-2xl mb-12">
          Open to startup roles, founding-engineer positions and product collaborations.
          Currently based in Hyderabad — available globally, remote-first.
        </p>

        <div className="flex items-center gap-3 mb-12">
          <MapPin size={14} className="text-m-blue-light" />
          <span className="label-uppercase text-body">Hyderabad, Telangana, India</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline hairline mb-16">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-surface-soft p-8 flex items-center justify-between hover:bg-surface-card transition-colors"
            >
              <div className="flex items-center gap-5">
                <Icon size={20} className="text-on-dark" />
                <div>
                  <div className="label-uppercase text-body">{label}</div>
                  <div className="text-on-dark text-lg font-light mt-1 break-all">{value}</div>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-body group-hover:text-on-dark group-hover:rotate-45 transition-all shrink-0" />
            </a>
          ))}
        </div>

        <a
          href="mailto:abhinayyendoti@gmail.com"
          className="inline-flex items-center gap-3 bg-on-dark text-canvas px-8 h-14 label-uppercase-lg hover:bg-body-strong transition-colors"
        >
          Start a Conversation <ArrowUpRight size={16} />
        </a>
      </div>

      <MStripe />
    </section>
  );
}
