import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            01 — About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Engineer who treats craft as a discipline.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a senior full stack developer with{" "}
            <span className="text-foreground">over 7 years</span> shipping production
            systems for startups, agencies, and scale-ups. My focus is on writing
            software that's maintainable on day 1000, not just day 1.
          </p>
          <p>
            I architect end-to-end — from database schemas and API contracts to
            interface design and deployment pipelines. I care about{" "}
            <span className="text-foreground">DX, performance, and accessibility</span>{" "}
            in equal measure.
          </p>
          <p>
            When I'm not building, I mentor junior engineers, review pull requests
            with care, and write about the trade-offs that shape good systems.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6">
            {[
              { k: "Based", v: "Karachi, PK" },
              { k: "Focus", v: "Web platforms" },
              { k: "Stack", v: "TS · React · Node" },
              { k: "Open to", v: "Senior / Lead roles" },
            ].map((row) => (
              <div key={row.k} className="border-t border-border pt-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {row.k}
                </div>
                <div className="text-foreground mt-1">{row.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
