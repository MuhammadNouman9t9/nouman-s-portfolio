const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "Tailwind",
  "Microservices",
  "System Design",
];

export const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-border bg-card/30 overflow-hidden">
      <div className="flex whitespace-nowrap marquee py-6">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl font-semibold tracking-tight px-8 flex items-center gap-8"
          >
            {item}
            <span className="text-primary text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
