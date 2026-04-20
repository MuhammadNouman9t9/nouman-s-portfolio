import { motion } from "framer-motion";
import portrait from "@/assets/nouman-portrait.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            Available for senior roles · Q2 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] font-semibold tracking-tighter"
          >
            Muhammad
            <br />
            <span className="text-gradient-accent">Nouman</span>
            <span className="text-primary blink">_</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Senior full stack developer with{" "}
            <span className="text-foreground font-medium">7+ years</span> shipping
            scalable web platforms — from architecture to pixel-perfect interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-medium hover:shadow-glow transition-all duration-500 ease-smooth"
            >
              View selected work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-border px-7 py-4 font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-10 max-w-md"
          >
            {[
              { v: "7+", l: "Years" },
              { v: "40+", l: "Projects" },
              { v: "12", l: "Industries" },
            ].map((s) => (
              <div key={s.l} className="border-l border-border pl-4">
                <div className="font-display text-3xl font-semibold">{s.v}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden border border-border bg-card grain">
              <img
                src={portrait}
                alt="Muhammad Nouman, senior full stack developer portrait"
                width={1024}
                height={1280}
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>// karachi, pk</span>
                <span>v.2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
