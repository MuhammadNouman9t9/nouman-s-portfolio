import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import portrait from "@/assets/nouman-portrait.jpg";

export const Hero = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring-driven parallax values
  const springConfig = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = portraitRef.current?.getBoundingClientRect();
    if (!rect) return;
    // normalize relative to the portrait center in window
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Use wider range so mouse across whole viewport influences it
    const nx = (e.clientX - cx) / window.innerWidth;
    const ny = (e.clientY - cy) / window.innerHeight;
    mouseX.set(Math.max(-0.5, Math.min(0.5, nx)));
    mouseY.set(Math.max(-0.5, Math.min(0.5, ny)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 overflow-hidden"
    >
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
            AI / ML & LLM engineer with{" "}
            <span className="text-foreground font-medium">8+ years</span> shipping
            production Python and DevOps systems — from data pipelines to LLM-powered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-10 max-w-md"
          >
            {[
              { v: "8+", l: "Years" },
              { v: "50+", l: "AI / ML projects" },
              { v: "20+", l: "LLM apps" },
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
          ref={portraitRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
          className="lg:col-span-5 relative"
        >
          <motion.div
            style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: "preserve-3d" }}
            className="relative aspect-[4/5] max-w-sm mx-auto group"
          >
            {/* Soft purple glow — follows tilt */}
            <div className="absolute -inset-6 bg-gradient-accent opacity-30 blur-3xl rounded-[3rem] group-hover:opacity-50 transition-opacity duration-700" />
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-3xl border border-primary/20" />

            {/* Portrait */}
            <div
              className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-card shadow-elegant"
              style={{ transform: "translateZ(40px)" }}
            >
              <img
                src={portrait}
                alt="Muhammad Nouman, senior full stack developer portrait"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom fade for caption legibility */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
                  Lahore, PK
                </span>
                <span>v.2026</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-3 rounded-2xl shadow-glow font-display text-sm font-semibold flex items-center gap-2 border border-primary/40">
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-glow-pulse" />
              Open to work
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
