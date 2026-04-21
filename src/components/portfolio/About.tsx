import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import portrait from "@/assets/nouman-portrait.jpg";

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const portraitY = useTransform(smooth, [0, 1], [60, -60]);
  const portraitScale = useTransform(smooth, [0, 0.5, 1], [0.95, 1.02, 0.98]);
  const glowScale = useTransform(smooth, [0, 0.5, 1], [0.9, 1.15, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 max-w-7xl mx-auto px-6 lg:px-10 overflow-hidden"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left — Portrait */}
        <motion.div
          style={{ y: portraitY, scale: portraitScale }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 group">
            {/* Animated glow blob */}
            <motion.div
              style={{ scale: glowScale }}
              className="absolute -inset-10 bg-gradient-accent opacity-40 blur-3xl rounded-full"
            />
            {/* Floating purple dot like reference */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 left-6 w-6 h-6 rounded-full bg-primary shadow-glow z-10"
            />
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-3xl border border-primary/20" />
            {/* Portrait */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <img
                src={portrait}
                alt="Muhammad Nouman portrait"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Corner accent */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-primary/50 rounded-br-3xl" />
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            01 — About me
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-[1.2] text-foreground">
            I am{" "}
            <span className="text-gradient-accent font-semibold">Muhammad Nouman</span>
            , a senior full stack developer focused on building{" "}
            <span className="text-foreground/90">scalable, secure, and maintainable</span>{" "}
            web platforms. I architect end-to-end systems — from databases and APIs to
            pixel-perfect interfaces and deployment pipelines.
          </h2>

          <div className="grid grid-cols-2 gap-6 pt-6 max-w-md">
            <div className="border-l-2 border-primary/60 pl-4">
              <div className="font-display text-2xl font-semibold">7+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                Years
              </div>
            </div>
            <div className="border-l-2 border-primary/60 pl-4">
              <div className="font-display text-2xl font-semibold">200+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                Projects
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
