import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 max-w-5xl mx-auto px-6 lg:px-10"
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
        className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.25] text-foreground max-w-4xl"
      >
        I'm{" "}
        <span className="text-gradient-accent font-semibold">Muhammad Nouman</span>
        , a senior full stack developer with{" "}
        <span className="text-foreground">7+ years</span> shipping production
        systems for startups, agencies, and scale-ups.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl"
      >
        <p>
          I architect end-to-end — from database schemas and API contracts to
          interface design and deployment pipelines. My focus is on writing
          software that's maintainable on day 1000, not just day 1.
        </p>
        <p>
          I care about{" "}
          <span className="text-foreground">DX, performance, and accessibility</span>{" "}
          in equal measure, and I treat craft as a discipline.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-border"
      >
        {[
          { v: "7+", l: "Years" },
          { v: "200+", l: "Projects" },
          { v: "12", l: "Industries" },
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
