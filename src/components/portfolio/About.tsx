import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles, Server } from "lucide-react";

const focus = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Designing, training, and deploying production ML models — from classical algorithms to deep learning pipelines.",
  },
  {
    icon: Sparkles,
    title: "LLM Engineering",
    desc: "Building RAG systems, agentic workflows, fine-tuned models, and LLM-powered products with OpenAI, Anthropic, and open-source stacks.",
  },
  {
    icon: Cpu,
    title: "Python at Scale",
    desc: "FastAPI, async services, data pipelines (Pandas, Polars, Airflow), and high-throughput backends powering ML systems.",
  },
  {
    icon: Server,
    title: "DevOps & MLOps",
    desc: "Docker, Kubernetes, CI/CD, AWS/GCP, observability, and end-to-end MLOps pipelines for reliable, scalable deployments.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 max-w-6xl mx-auto px-6 lg:px-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-10"
      >
        01 — About me
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.25] text-foreground max-w-5xl"
      >
        I'm{" "}
        <span className="text-gradient-accent font-semibold">Muhammad Nouman</span>
        , a{" "}
        <span className="text-foreground">Senior Full Stack Developer</span> with{" "}
        <span className="text-foreground">8+ years</span> of experience building scalable, high-performance web applications and intelligent AI-driven solutions.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl"
      >
        <p>
          I specialize in modern frontend technologies like React.js, Angular, Next.js, and Vue.js, 
          combined with powerful backend development using Node.js, NestJS, Flask, FastAPI, and Laravel.
        </p>
        <p>
          My expertise extends beyond traditional development into Artificial Intelligence and Machine Learning, 
          where I design and build LLM-powered applications, chatbots, and automation systems using techniques 
          like RAG, embeddings, and model integration.
        </p>
        <p>
          I have hands-on experience working with data processing tools such as Pandas and building efficient 
          RESTful and GraphQL APIs for complex, data-driven systems. I'm also experienced in working with both 
          SQL and NoSQL databases, architecting microservices, and deploying applications using modern DevOps 
          practices with Docker and cloud platforms like Firebase.
        </p>
        <p>
          I focus on writing clean, scalable code and delivering end-to-end solutions — from concept to deployment. 
          I'm passionate about solving real-world problems using technology and continuously exploring new 
          advancements in AI and software development.
        </p>
      </motion.div>

      {/* Focus areas */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="grid sm:grid-cols-2 gap-5 mt-16"
      >
        {focus.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="group relative bg-card border border-border hover:border-primary/40 p-6 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} strokeWidth={1.6} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-border"
      >
        {[
          { v: "8+", l: "Years" },
          { v: "50+", l: "AI / ML projects" },
          { v: "20+", l: "LLM apps shipped" },
          { v: "30+", l: "Clients" },
        ].map((s) => (
          <div key={s.l}>
            <div className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
              {s.v}
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
