import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiFlask,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiPandas,
  SiDatabricks,
  SiDocker,
  SiFirebase,
  SiWordpress,
  SiShopify,
  SiGit,
  SiLinux,
  SiAmazon,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
};

const techs: Tech[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Flask", Icon: SiFlask, color: "#FFFFFF" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "REST API", Icon: TbApi, color: "#3B82F6" },
  { name: "Pandas", Icon: SiPandas, color: "#150458" },
  { name: "Databricks", Icon: SiDatabricks, color: "#FF3621" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "AWS", Icon: SiAmazon, color: "#FF9900" },
];

const TechCard = ({ name, Icon, color }: Tech) => (
  <div className="shrink-0 w-32 h-32 mx-2 bg-card border border-border rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
    <Icon size={36} className="transition-transform duration-300" style={{ color } as React.CSSProperties} />
    <span className="font-mono text-xs text-foreground/90">{name}</span>
  </div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 lg:px-10 overflow-hidden">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          02 — Tech Stack
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          What I work with.
        </h2>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee-rtl">
          {[...techs, ...techs].map((t, i) => (
            <TechCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};
