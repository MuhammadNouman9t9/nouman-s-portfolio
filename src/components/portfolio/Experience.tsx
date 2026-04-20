import { motion } from "framer-motion";

const roles = [
  {
    period: "2023 — Present",
    role: "Senior Full Stack Developer",
    company: "Independent / Contract",
    desc: "Leading end-to-end builds for fintech and SaaS clients. Architecture, hiring, mentorship.",
  },
  {
    period: "2021 — 2023",
    role: "Lead Engineer",
    company: "Nimbus Studio",
    desc: "Owned platform team of 5. Migrated monolith to service-oriented architecture, cut deploy time 70%.",
  },
  {
    period: "2019 — 2021",
    role: "Full Stack Engineer",
    company: "Devhouse Labs",
    desc: "Shipped 18 client products across React, Node, and AWS. Introduced design system and CI pipelines.",
  },
  {
    period: "2017 — 2019",
    role: "Web Developer",
    company: "Freelance",
    desc: "Built custom WordPress and React sites for SMBs. First taste of production responsibility.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          04 — Experience
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          Seven years, one obsession: shipping well.
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12 space-y-px">
          {roles.map((r, i) => (
            <motion.div
              key={r.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid lg:grid-cols-12 gap-4 lg:gap-8 border-t border-border py-8 group"
            >
              <div className="lg:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {r.period}
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {r.role}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{r.company}</p>
              </div>
              <div className="lg:col-span-5 text-muted-foreground">{r.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
