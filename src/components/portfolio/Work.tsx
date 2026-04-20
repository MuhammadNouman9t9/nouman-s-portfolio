import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "Lendora — Fintech Dashboard",
    role: "Lead Full Stack",
    year: "2024",
    desc: "Real-time lending analytics platform serving 50k+ borrowers with sub-200ms p95 latency.",
    tags: ["Next.js", "Node", "PostgreSQL", "Redis"],
  },
  {
    n: "02",
    title: "Northwind Commerce",
    role: "Senior Engineer",
    year: "2023",
    desc: "Headless commerce backend powering 12 storefronts with shared inventory and unified checkout.",
    tags: ["NestJS", "GraphQL", "Stripe", "AWS"],
  },
  {
    n: "03",
    title: "Atlas Health Portal",
    role: "Full Stack",
    year: "2022",
    desc: "HIPAA-compliant patient portal with secure messaging, scheduling, and document workflows.",
    tags: ["React", "Node", "MongoDB", "WebRTC"],
  },
  {
    n: "04",
    title: "Forge CMS",
    role: "Founding Engineer",
    year: "2021",
    desc: "Block-based content platform with collaborative editing, used by 80+ content teams.",
    tags: ["TypeScript", "Yjs", "Postgres", "Docker"],
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          03 — Selected work
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          Products built with intent.
        </h2>
      </div>

      <div className="border-t border-border">
        {projects.map((p, i) => (
          <motion.a
            key={p.n}
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group block border-b border-border py-8 lg:py-10 hover:bg-card/40 transition-colors duration-500 px-2 lg:px-4"
          >
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-1 font-mono text-xs text-muted-foreground pt-2">
                {p.n}
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 font-mono">
                  {p.role} · {p.year}
                </p>
              </div>
              <div className="lg:col-span-4 text-muted-foreground">{p.desc}</div>
              <div className="lg:col-span-2 flex flex-wrap gap-1.5 lg:justify-end">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              View case study <span>→</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
