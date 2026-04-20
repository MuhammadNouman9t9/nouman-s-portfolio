import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          05 — Contact
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] max-w-5xl"
        >
          Have a project worth
          <br />
          building <span className="text-gradient-accent">properly?</span>
        </motion.h2>

        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <a
              href="mailto:nouman@example.com"
              className="group inline-flex items-center gap-4 font-display text-2xl md:text-4xl font-semibold tracking-tight border-b border-border pb-3 hover:border-primary transition-colors duration-300"
            >
              nouman@example.com
              <span className="text-primary group-hover:translate-x-2 transition-transform duration-500">
                →
              </span>
            </a>
            <p className="text-muted-foreground mt-6 max-w-md">
              I reply within 24 hours. Tell me about your team, your stack, and the
              problem you're trying to solve.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-4">
            {[
              { l: "GitHub", h: "#" },
              { l: "LinkedIn", h: "#" },
              { l: "Twitter / X", h: "#" },
              { l: "Read.cv", h: "#" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                className="border border-border p-5 hover:border-primary/50 hover:bg-card transition-all duration-300 group"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Find me on
                </div>
                <div className="font-display text-lg font-semibold flex items-center justify-between">
                  {s.l}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>© 2026 Muhammad Nouman. Crafted with intent.</span>
          <span>Karachi, PK · UTC+5</span>
        </footer>
      </div>
    </section>
  );
};
