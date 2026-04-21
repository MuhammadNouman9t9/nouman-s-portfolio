import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Sparkles, Rocket, Code2 } from "lucide-react";

const roles = [
  {
    period: "2023 — Present",
    role: "Senior Full Stack Developer",
    company: "Independent / Contract",
    desc: "Leading end-to-end builds for fintech and SaaS clients. Architecture, hiring, mentorship.",
    icon: Sparkles,
    metrics: [
      { v: "12+", l: "Clients shipped" },
      { v: "99.9%", l: "Uptime delivered" },
    ],
  },
  {
    period: "2021 — 2023",
    role: "Lead Engineer",
    company: "Nimbus Studio",
    desc: "Owned platform team of 5. Migrated monolith to service-oriented architecture, cut deploy time 70%.",
    icon: Rocket,
    metrics: [
      { v: "5", l: "Engineers led" },
      { v: "70%", l: "Faster deploys" },
    ],
  },
  {
    period: "2019 — 2021",
    role: "Full Stack Engineer",
    company: "Devhouse Labs",
    desc: "Shipped 18 client products across React, Node, and AWS. Introduced design system and CI pipelines.",
    icon: Briefcase,
    metrics: [
      { v: "18", l: "Products shipped" },
      { v: "1", l: "Design system built" },
    ],
  },
  {
    period: "2017 — 2019",
    role: "Web Developer",
    company: "Freelance",
    desc: "Built custom WordPress and React sites for SMBs. First taste of production responsibility.",
    icon: Code2,
    metrics: [],
  },
];

const RoleCard = ({
  r,
  align,
}: {
  r: (typeof roles)[number];
  align: "left" | "right";
}) => {
  const right = align === "right";
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative w-full max-w-md"
    >
      <div className="relative bg-card border border-border p-5 lg:p-6 hover:border-primary/40 transition-colors duration-500 overflow-hidden">
        {/* Pointer notch */}
        <div
          className={`hidden lg:block absolute top-8 w-3 h-3 bg-card border-border rotate-45 ${
            right
              ? "-right-1.5 border-r border-t group-hover:border-primary/40"
              : "-left-1.5 border-l border-b group-hover:border-primary/40"
          } transition-colors duration-500`}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className={`relative ${right ? "lg:text-right" : ""}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
            {r.period}
          </div>
          <h3 className="font-display text-xl lg:text-2xl font-semibold tracking-tight">
            {r.role}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{r.company}</p>
          <p className="text-sm text-muted-foreground/90 mt-4 leading-relaxed">
            {r.desc}
          </p>

          {r.metrics.length > 0 && (
          <div className={`flex gap-6 mt-5 pt-4 border-t border-border ${right ? "lg:justify-end" : ""}`}>
            {r.metrics.map((m) => (
              <div key={m.l}>
                <div className="font-display text-lg font-semibold text-primary">
                  {m.v}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto px-6 lg:px-10 relative">

      <div className="mb-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          04 — Experience
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          Seven years, one obsession: shipping well.
        </h2>
          </div>
          )}

      <div ref={ref} className="relative">
        {/* Timeline track */}
        <div className="absolute left-7 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        {/* Animated progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-7 lg:left-1/2 lg:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary to-transparent shadow-[0_0_20px_hsl(var(--primary))]"
        />

        <div className="space-y-12 lg:space-y-20 relative">
          {roles.map((r, i) => {
            const Icon = r.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={r.period}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex lg:grid lg:grid-cols-2 lg:gap-16 items-start"
              >
                {/* Center icon node */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className="absolute left-7 lg:left-1/2 -translate-x-1/2 z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-card border border-primary/40 flex items-center justify-center shadow-glow"
                >
                  <Icon size={22} strokeWidth={1.6} className="text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-mono font-bold flex items-center justify-center">
                    {String(roles.length - i).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Card — mobile: always right of node. Desktop: alternating. */}
                <div
                  className={`pl-20 lg:pl-0 w-full ${
                    isLeft
                      ? "lg:col-start-1 lg:flex lg:justify-end"
                      : "lg:col-start-2 lg:flex lg:justify-start"
                  }`}
                >
                  <RoleCard r={r} align={isLeft ? "right" : "left"} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center gap-4 mt-16 pl-20 lg:pl-0 lg:justify-center"
        >
          <div className="absolute left-7 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow animate-glow-pulse" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary lg:mt-8">
            The journey continues →
          </p>
        </motion.div>
      </div>
    </section>
  );
};
