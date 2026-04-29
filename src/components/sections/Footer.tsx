const cols = [
  {
    title: "Work",
    items: [
      { l: "LeadFlow", h: "https://lead-automation-generator.vercel.app/" },
      { l: "Introvert Chatter", h: "https://introvertchatter.vercel.app/" },
      { l: "Carbon Footprint AI", h: "https://ai-powered-carbon-footprint-calcula-brown.vercel.app/" },
      { l: "Image Compressor", h: "https://image-compressor-jade.vercel.app/" },
    ],
  },
  {
    title: "Connect",
    items: [
      { l: "GitHub", h: "https://github.com/AbhinayYendoti" },
      { l: "LinkedIn", h: "https://www.linkedin.com/in/abhinay-yendoti-196029305" },
      { l: "Email", h: "mailto:abhinayyendoti@gmail.com" },
    ],
  },
  {
    title: "Navigate",
    items: [
      { l: "About", h: "#about" },
      { l: "Experience", h: "#experience" },
      { l: "Skills", h: "#skills" },
      { l: "Labs", h: "#labs" },
    ],
  },
  {
    title: "Resources",
    items: [
      { l: "Resume", h: "/Abhinay_Yendoti_AI_FullStack_Resume.pdf" },
      { l: "Certifications", h: "#about" },
      { l: "Contact", h: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas hairline-t">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="m-stripe h-[3px] w-10 mb-4" />
            <div className="display-sm text-on-dark">Abhinay // M</div>
            <p className="body-light text-sm mt-3">
              Engineered for shipping. Built to scale.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="label-uppercase text-body mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.items.map((it) => (
                  <li key={it.l}>
                    <a
                      href={it.h}
                      target={it.h.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-body-strong font-light hover:text-on-dark transition-colors"
                    >
                      {it.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline-t pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="label-uppercase text-body text-[10px]">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Abhinay Yendoti — All systems engineered with intent.
          </div>
          <div className="label-uppercase text-body text-[10px]">
            Designed in tribute to BMW M // Built with React + TanStack
          </div>
        </div>
      </div>
    </footer>
  );
}
