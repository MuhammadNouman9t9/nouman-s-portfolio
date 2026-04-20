import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Lendora — Fintech Dashboard",
    role: "Lead Full Stack",
    year: "2024",
    desc: "Real-time lending analytics platform serving 50k+ borrowers with sub-200ms p95 latency.",
    tags: ["Next.js", "Node", "PostgreSQL", "Redis"],
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    n: "02",
    title: "Northwind Commerce",
    role: "Senior Engineer",
    year: "2023",
    desc: "Headless commerce backend powering 12 storefronts with shared inventory and unified checkout.",
    tags: ["NestJS", "GraphQL", "Stripe", "AWS"],
    gradient: "from-fuchsia-500/25 via-primary/10 to-transparent",
  },
  {
    n: "03",
    title: "Atlas Health Portal",
    role: "Full Stack",
    year: "2022",
    desc: "HIPAA-compliant patient portal with secure messaging, scheduling, and document workflows.",
    tags: ["React", "Node", "MongoDB", "WebRTC"],
    gradient: "from-violet-500/25 via-primary/10 to-transparent",
  },
  {
    n: "04",
    title: "Forge CMS",
    role: "Founding Engineer",
    year: "2021",
    desc: "Block-based content platform with collaborative editing, used by 80+ content teams.",
    tags: ["TypeScript", "Yjs", "Postgres", "Docker"],
    gradient: "from-purple-500/25 via-primary/10 to-transparent",
  },
  {
    n: "05",
    title: "Pulse Analytics",
    role: "Senior Engineer",
    year: "2024",
    desc: "Real-time product analytics with custom funnels, cohorts, and 1B+ events ingested per month.",
    tags: ["Next.js", "ClickHouse", "Kafka", "TS"],
    gradient: "from-indigo-500/25 via-primary/10 to-transparent",
  },
  {
    n: "06",
    title: "Mosaic AI Studio",
    role: "Full Stack + AI",
    year: "2024",
    desc: "LLM-powered content workflow tool with RAG pipelines, agents, and team collaboration.",
    tags: ["Python", "LangChain", "React", "Postgres"],
    gradient: "from-pink-500/25 via-primary/10 to-transparent",
  },
  {
    n: "07",
    title: "Drift eCommerce",
    role: "Tech Lead",
    year: "2022",
    desc: "Shopify Plus migration for a fashion brand — 3x faster checkout and 40% lift in conversion.",
    tags: ["Shopify", "Hydrogen", "GraphQL", "Stripe"],
    gradient: "from-rose-500/25 via-primary/10 to-transparent",
  },
  {
    n: "08",
    title: "Ledger SaaS",
    role: "Backend Lead",
    year: "2021",
    desc: "Multi-tenant accounting platform with double-entry bookkeeping and role-based audit trails.",
    tags: ["NestJS", "PostgreSQL", "Docker", "AWS"],
    gradient: "from-emerald-500/25 via-primary/10 to-transparent",
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.n}
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-500 ease-smooth flex flex-col"
          >
            {/* Visual header */}
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden border-b border-border`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {p.n} / 04
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border border-border bg-background/40 backdrop-blur flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
                <ArrowUpRight size={14} strokeWidth={1.8} className="group-hover:rotate-12 transition-transform" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 font-display text-xl lg:text-2xl font-semibold tracking-tight leading-[1.1] text-foreground">
                {p.title.split(" — ")[0]}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                <span>{p.role}</span>
                <span>{p.year}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 group-hover:border-primary/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
