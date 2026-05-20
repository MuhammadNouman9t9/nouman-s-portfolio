import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import mrSinghsPizza from "@/assets/project-mrsinghs-pizza.png";
import watiqai from "@/assets/project-watiqai.png";
import shawarmaStop from "@/assets/project-shawarma-stop.png";
import onlineLegal from "@/assets/project-online-legal.png";
import janJapan from "@/assets/project-jan-japan.png";
import exactflow from "@/assets/project-exactflow.png";
import contractorplus from "@/assets/project-contractorplus.png";
import fastapiTemplate from "@/assets/project-fastapi-template.png";

const projects = [
  {
    n: "01",
    title: "WatiQAI — AI-Powered KYC & Identity Verification",
    role: "AI / Full Stack (Exact Solution Electronics)",
    year: "2024",
    desc: "AI-driven identity verification & fraud detection platform for banks — OCR, computer vision, and biometric matching to automate KYC at scale.",
    tags: ["AI", "FastAPI", "Computer Vision", "OCR"],
    gradient: "from-amber-500/25 via-primary/10 to-transparent",
    url: "https://watiqai.app/",
    image: watiqai,
  },
  {
    n: "02",
    title: "Shawarma Stop — Restaurant Ordering Platform",
    role: "Full Stack (Sumato Solutions)",
    year: "2023",
    desc: "Multi-branch restaurant ordering & delivery platform for a Middle Eastern fast-casual chain — online menu, checkout, and branch operations.",
    tags: ["Full Stack", "React Native", "Node", "REST APIs"],
    gradient: "from-rose-500/25 via-primary/10 to-transparent",
    url: "https://www.shawarmastop.co/",
    image: shawarmaStop,
  },
  {
    n: "03",
    title: "Ormith — E-commerce Store",
    role: "Frontend / Full Stack (HexaClicks)",
    year: "2023",
    desc: "Modern, responsive e-commerce storefront for a technology-driven brand — product catalog, checkout, and scalable storefront experience.",
    tags: ["React", "Responsive Design", "E-commerce", "Node"],
    gradient: "from-fuchsia-500/25 via-primary/10 to-transparent",
  },
  {
    n: "04",
    title: "Mr. Singh's Pizza — Canadian Food Brand",
    role: "Full Stack (Comando Software SAS)",
    year: "2022",
    desc: "Online ordering & delivery platform for a fast-growing 100% vegetarian Canadian pizza chain — multi-location menu, checkout, and franchise flow.",
    tags: ["Full Stack", "REST APIs", "React", "Node"],
    gradient: "from-primary/30 via-primary/10 to-transparent",
    url: "https://mrsinghspizza.ca/",
    image: mrSinghsPizza,
  },
  {
    n: "05",
    title: "Online Legal Advice — Legal-Tech Platform",
    role: "Full Stack (HexaClicks)",
    year: "2023",
    desc: "Legal-tech platform connecting clients with verified lawyers — online consultations, Q&A, document workflows, and booking system.",
    tags: ["React", "Node", "REST APIs", "Postgres"],
    gradient: "from-yellow-500/25 via-primary/10 to-transparent",
    url: "https://www.onlinelegaladvise.com/",
    image: onlineLegal,
  },
  {
    n: "06",
    title: "Jan Japan — Global Automotive Export Platform",
    role: "AI / Full Stack (Jan Japan)",
    year: "2024",
    desc: "Global used-vehicle export platform connecting buyers with Japanese auctions — inventory, inspection, logistics, and AI-driven search.",
    tags: ["AI", "Python", "React", "Logistics"],
    gradient: "from-indigo-500/25 via-primary/10 to-transparent",
    url: "https://janjapan.com/",
    image: janJapan,
  },
  {
    n: "07",
    title: "ExactFlow — AI E-commerce Automation",
    role: "AI / Full Stack (Exact Solution Electronics)",
    year: "2024",
    desc: "AI-powered e-commerce ops platform that unifies Shopify, Amazon, eBay & more — agents for orders, inventory, support, finance, and procurement.",
    tags: ["AI Agents", "Chatbots", "Next.js", "Node"],
    gradient: "from-pink-500/25 via-primary/10 to-transparent",
    url: "https://www.exactflow.com/en",
    image: exactflow,
  },
  {
    n: "08",
    title: "Contractor+ — Field Service & Construction SaaS",
    role: "Full Stack (Comando Software SAS)",
    year: "2023",
    desc: "All-in-one SaaS for contractors — estimates, invoices, scheduling, CRM, GPS time-tracking, and team management across web & mobile.",
    tags: ["SaaS", "CRM", "React", "Node"],
    gradient: "from-emerald-500/25 via-primary/10 to-transparent",
    url: "https://contractorplus.app/",
    image: contractorplus,
  },
  {
    n: "09",
    title: "Full Stack FastAPI Template — JWT Auth & Dockerized Stack",
    role: "Open Source / Full Stack",
    year: "2024",
    desc: "Modern full-stack template with FastAPI, React, PostgreSQL, and Docker — JWT authentication, user management, and production-ready deployment.",
    tags: ["FastAPI", "React", "PostgreSQL", "Docker"],
    gradient: "from-teal-500/25 via-primary/10 to-transparent",
    url: "https://github.com/fastapi/full-stack-fastapi-template",
    image: fastapiTemplate,
  },
];

const INITIAL = 4;

export const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);
  const total = projects.length;

  return (
    <section id="work" className="py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          03 — Selected work
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          Products built with intent.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        <AnimatePresence initial={false}>
          {visible.map((p, i) => (
            <motion.a
              key={p.n}
              href={(p as any).url ?? "#contact"}
              target={(p as any).url ? "_blank" : undefined}
              rel={(p as any).url ? "noopener noreferrer" : undefined}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: i < INITIAL ? i * 0.06 : (i - INITIAL) * 0.06 }}
              className="group relative overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-500 ease-smooth flex flex-col"
            >
              {/* Visual header */}
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden border-b border-border`}>
                {(p as any).image && (
                  <img
                    src={(p as any).image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {p.n} / {String(total).padStart(2, "0")}
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border border-border bg-background/40 backdrop-blur flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
                  <ArrowUpRight size={14} strokeWidth={1.8} className="group-hover:rotate-12 transition-transform" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-display text-xl lg:text-2xl font-semibold tracking-tight leading-[1.1] text-foreground">
                  {p.title.split(" — ")[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  <span>{p.role}</span>
                  <span>{p.year}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 group-hover:border-primary/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > INITIAL && (
        <div className="mt-12 flex flex-col items-center gap-3">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex items-center gap-3 border border-border px-7 py-4 font-medium hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 ease-smooth"
          >
            <Plus
              size={16}
              strokeWidth={2}
              className={`transition-transform duration-500 ${showAll ? "rotate-45" : "rotate-0 group-hover:rotate-90"}`}
            />
            {showAll ? "Show less" : `Show more (${projects.length - INITIAL})`}
          </button>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Showing {visible.length} of {projects.length} projects
          </p>
        </div>
      )}
    </section>
  );
};
