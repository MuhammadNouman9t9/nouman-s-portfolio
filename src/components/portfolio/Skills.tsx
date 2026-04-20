import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Brain,
  Database,
  Cloud,
  Workflow,
  ShoppingBag,
  GitBranch,
  Plug,
} from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    summary: "React · Next · Vue · Angular · TS · Tailwind",
  },
  {
    icon: Server,
    title: "Backend",
    summary: "Node · NestJS · Laravel · Flask",
  },
  {
    icon: Brain,
    title: "AI / ML",
    summary: "Python · LLMs · Pandas · ML",
  },
  {
    icon: Database,
    title: "Databases",
    summary: "MySQL · MongoDB · SQL · NoSQL",
  },
  {
    icon: Plug,
    title: "APIs & Auth",
    summary: "REST · GraphQL · JWT · OAuth",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    summary: "AWS · Firebase · Docker · CI/CD",
  },
  {
    icon: Workflow,
    title: "Architecture",
    summary: "Microservices · System Design",
  },
  {
    icon: ShoppingBag,
    title: "CMS & eCommerce",
    summary: "WordPress · WooCommerce · Shopify",
  },
  {
    icon: GitBranch,
    title: "Tools",
    summary: "Git · GitHub · Agile · Code Review",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          02 — Capabilities
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          What I work with.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background p-6 lg:p-7 group hover:bg-card transition-colors duration-300 flex items-start gap-4"
            >
              <div className="shrink-0 w-11 h-11 border border-border flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                <Icon size={20} strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {g.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {g.summary}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
