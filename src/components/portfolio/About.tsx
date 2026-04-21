import { motion } from "framer-motion";
import {
  Award,
  FolderOpen,
  Code2,
  Globe,
  Lightbulb,
  Send,
  Code,
  Server,
  Brain,
  Database,
  Plug,
  Cloud,
  Network,
  ShoppingBag,
  GitBranch,
} from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const techStack = [
  { name: "JavaScript", color: "#F7DF1E", letter: "JS" },
  { name: "TypeScript", color: "#3178C6", letter: "TS" },
  { name: "React.js", color: "#61DAFB", letter: "⚛" },
  { name: "Next.js", color: "#FFFFFF", letter: "N" },
  { name: "Vue.js", color: "#42B883", letter: "V" },
  { name: "Node.js", color: "#8CC84B", letter: "⬢" },
  { name: "Express.js", color: "#FFFFFF", letter: "ex" },
  { name: "NestJS", color: "#E0234E", letter: "N" },
  { name: "Python", color: "#3776AB", letter: "🐍" },
  { name: "Flask", color: "#FFFFFF", letter: "F" },
  { name: "FastAPI", color: "#009688", letter: "≡" },
  { name: "MongoDB", color: "#47A248", letter: "M" },
  { name: "MySQL", color: "#4479A1", letter: "S" },
  { name: "GraphQL", color: "#E10098", letter: "◈" },
  { name: "REST API", color: "#0096FF", letter: "API" },
  { name: "Pandas", color: "#150458", letter: "🐼" },
  { name: "Databricks", color: "#FF3621", letter: "⬢" },
  { name: "Docker", color: "#2496ED", letter: "🐳" },
  { name: "Firebase", color: "#FFCA28", letter: "🔥" },
  { name: "WordPress", color: "#21759B", letter: "W" },
  { name: "Shopify", color: "#95BF47", letter: "S" },
  { name: "Git", color: "#F05032", letter: "G" },
  { name: "Linux", color: "#FCC624", letter: "🐧" },
  { name: "AWS", color: "#FF9900", letter: "aws" },
];

const expertise = [
  {
    icon: Code,
    title: "Frontend",
    items: ["React", "Next", "Vue", "Angular", "TS", "Tailwind"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node", "NestJS", "Laravel", "Flask"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: ["Python", "LLMs", "Pandas", "ML"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQL", "NoSQL"],
  },
  {
    icon: Plug,
    title: "APIs & Auth",
    items: ["REST", "GraphQL", "JWT", "OAuth"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS", "Firebase", "Docker", "CI/CD"],
  },
  {
    icon: Network,
    title: "Architecture",
    items: ["Microservices", "System Design"],
  },
  {
    icon: ShoppingBag,
    title: "CMS & eCommerce",
    items: ["WordPress", "WooCommerce", "Shopify"],
  },
  {
    icon: GitBranch,
    title: "Tools",
    items: ["Git", "GitHub", "Agile", "Code Review"],
  },
];

const stats = [
  { icon: Award, value: "8+", label: "Years of Experience" },
  { icon: FolderOpen, value: "50+", label: "Projects Completed" },
  { icon: Code2, value: "AI & Full Stack", label: "Specialized" },
  { icon: Globe, value: "Remote", label: "Work Preference" },
  { icon: Lightbulb, value: "Problem Solver", label: "Lifelong Learner" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 max-w-7xl mx-auto px-6 lg:px-10"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          About Me
        </span>
      </motion.div>

      {/* Top grid: bio + profile card */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Senior Full Stack Developer
            <br />
            <span className="text-gradient-accent">& AI Solutions Builder</span>
          </h2>

          <div className="mt-8 space-y-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I'm a Senior Full Stack Developer with{" "}
              <span className="text-foreground font-medium">8+ years</span> of
              experience building scalable, high-performance web applications and
              AI-powered solutions. I enjoy turning complex problems into simple,
              efficient, and beautiful digital experiences.
            </p>
            <p>
              I specialize in modern web technologies, backend systems, APIs,
              databases, and cloud deployment. I also have strong hands-on
              experience in Artificial Intelligence, Machine Learning, and
              LLM-based applications — including chatbot development, RAG,
              embeddings, and automation workflows.
            </p>
            <p>
              I'm passionate about clean code, system design, and leveraging
              emerging technologies to build intelligent solutions that create
              real impact.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-gradient-accent text-primary-foreground font-medium text-sm shadow-glow transition-all"
          >
            <Send size={16} />
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Right: Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative bg-card border border-border rounded-2xl p-8 shadow-card overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-primary/40 shadow-glow">
              <img
                src={avatar}
                alt="Muhammad Nouman avatar"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative mt-8 space-y-5">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Icon size={18} className="text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold text-foreground leading-tight">
                      {s.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {"</>"} Tech Stack
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{
                  background: `${tech.color}20`,
                  color: tech.color,
                  border: `1px solid ${tech.color}40`,
                }}
              >
                {tech.letter}
              </div>
              <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Expertise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            ✦ Expertise
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {expertise.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative bg-card border border-border hover:border-primary/40 rounded-xl p-5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} className="text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-sm font-semibold tracking-tight text-foreground mb-2">
                  {e.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {e.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
