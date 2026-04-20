import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Angular",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "PHP", "Laravel", "Python", "Flask"],
  },
  {
    title: "AI / ML & Data",
    items: ["Python", "Pandas", "LLMs", "Machine Learning", "AI Integration", "Data Pipelines"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQL", "NoSQL"],
  },
  {
    title: "APIs & Auth",
    items: ["REST APIs", "GraphQL", "JWT Auth", "OAuth", "API Integration"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda)", "Firebase", "Docker", "CI / CD"],
  },
  {
    title: "Architecture",
    items: ["Microservices", "System Design", "Scalable Backends"],
  },
  {
    title: "CMS & eCommerce",
    items: ["WordPress", "Elementor", "WooCommerce", "Shopify"],
  },
  {
    title: "Tools & Collaboration",
    items: ["Git", "GitHub", "Agile / Scrum", "Team Leadership", "Code Review"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            02 — Capabilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            A toolkit refined across 40+ shipped products.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-500"
          >
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-display text-2xl font-semibold">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-sm border border-border px-3 py-1.5 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
