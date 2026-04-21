import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export const FloatingCV = () => {
  return (
    <motion.a
      href="/muhammad-nouman-cv.pdf"
      download
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border hover:border-primary/60 text-foreground px-4 py-3 rounded-full shadow-elegant hover:shadow-glow transition-all duration-500"
      aria-label="Download Resume"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] hidden sm:inline">
        Resume
      </span>
      <div className="relative w-9 h-9 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center overflow-hidden">
        <FileText
          size={16}
          strokeWidth={1.8}
          className="text-primary transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0"
        />
        <Download
          size={16}
          strokeWidth={1.8}
          className="absolute text-primary translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
    </motion.a>
  );
};
