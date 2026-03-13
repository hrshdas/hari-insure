import Link from "next/link";

interface PillarSection {
  level: "start" | "learn" | "decide" | "problem";
  items: { label: string; href: string; desc?: string }[];
}

interface PillarLandingProps {
  pillar: string;
  tagline: string;
  description: string;
  color: string;
  bg: string;
  icon: React.ReactNode;
  sections: PillarSection[];
}

const LEVEL_META = {
  start: {
    label: "Start Here",
    sublabel: "New to this topic? Begin here.",
    indicator: "1",
    borderColor: "#16a37f",
    bgColor: "#e8f8f4",
    textColor: "#16a37f",
  },
  learn: {
    label: "Learn the Concepts",
    sublabel: "Go deeper — one concept at a time.",
    indicator: "2",
    borderColor: "#3b82f6",
    bgColor: "#eff6ff",
    textColor: "#3b82f6",
  },
  decide: {
    label: "Make a Decision",
    sublabel: "Ready to compare, buy, or act?",
    indicator: "3",
    borderColor: "#8b5cf6",
    bgColor: "#f5f3ff",
    textColor: "#8b5cf6",
  },
  problem: {
    label: "I Have a Problem",
    sublabel: "Rejected claim? Rights? Get help here.",
    indicator: "!",
    borderColor: "#ef4444",
    bgColor: "#fef2f2",
    textColor: "#ef4444",
  },
};

export default function PillarLanding({
  pillar,
  tagline,
  description,
  color,
  bg,
  icon,
  sections,
}: PillarLandingProps) {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      {/* Pillar hero */}
      <div
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "white", borderBottom: "1px solid #e2e8f0" }}
      >
        <div className="container-max">
          <nav aria-label="Breadcrumb" className="text-xs text-brand-muted mb-4">
            <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
            <span className="mx-1.5 opacity-40">›</span>
            <span className="text-brand-ink font-medium">{pillar}</span>
          </nav>

          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: bg, color }}
            >
              {icon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-brand-ink leading-tight">{pillar}</h1>
              <p className="text-brand-muted mt-1">{tagline}</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-brand-muted max-w-2xl leading-relaxed">{description}</p>

          {/* Progress cards */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
            {(["start", "learn", "decide"] as const).filter(level =>
              sections.some(s => s.level === level)
            ).map((level, i, arr) => {
              const meta = LEVEL_META[level];
              return (
                <div key={level} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: meta.bgColor, color: meta.textColor }}
                  >
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ backgroundColor: meta.textColor, color: "white" }}>
                      {meta.indicator}
                    </span>
                    {meta.label}
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {sections.map((section) => {
          const meta = LEVEL_META[section.level];
          return (
            <div key={section.level}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: meta.bgColor, color: meta.textColor }}
                >
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ backgroundColor: meta.textColor, color: "white" }}
                  >
                    {meta.indicator}
                  </span>
                  {meta.label}
                </div>
                <span className="text-xs text-brand-muted">{meta.sublabel}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="w-1 h-full min-h-[2rem] rounded-full flex-shrink-0"
                      style={{ backgroundColor: meta.borderColor }}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-brand-ink group-hover:text-brand-green transition-colors leading-snug">
                        {item.label}
                      </p>
                      {item.desc && (
                        <p className="text-xs text-brand-muted mt-0.5">{item.desc}</p>
                      )}
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" className="flex-shrink-0 self-center" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
