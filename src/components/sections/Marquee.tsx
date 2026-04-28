const items = [
  "AI-NATIVE", "•", "FASTAPI", "•", "REACT", "•", "SPRING BOOT", "•", "MONGODB",
  "•", "CLAUDE CODE", "•", "AGENT WORKFLOWS", "•", "NODE.JS", "•", "SUPABASE",
  "•", "PYTHON", "•", "TYPESCRIPT", "•", "SHIPPED 4 PRODUCTS", "•",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="bg-surface-soft hairline-b hairline-t overflow-hidden py-5">
      <div className="flex gap-8 marquee-track whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className={`label-uppercase-lg ${t === "•" ? "text-m-red" : "text-body"}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
