import { Shield, Lock, Star, Trophy } from "lucide-react";

const features = [
  {
    id: "compare",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Instant Policy Comparison",
    description: "Compare 50+ plans side-by-side in real time. Filter by price, coverage, and claims ratio.",
    accent: "text-brand-green bg-brand-green-light",
    border: "hover:border-brand-green/30",
    glow: "hover:shadow-green-glow/30",
  },
  {
    id: "partners",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Trusted Partners",
    description: "50+ IRDAI-approved insurers. Every partner is vetted for transparency and claims speed.",
    accent: "text-blue-600 bg-blue-50",
    border: "hover:border-blue-200",
    glow: "hover:shadow-[0_4px_24px_rgba(37,99,235,0.12)]",
  },
  {
    id: "claims",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Quick Claim Assistance",
    description: "Dedicated experts guide you 24/7 — from filing to settlement. Average 3-day resolution.",
    accent: "text-purple-600 bg-purple-50",
    border: "hover:border-purple-200",
    glow: "hover:shadow-[0_4px_24px_rgba(147,51,234,0.12)]",
  },
  {
    id: "digital",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
    title: "100% Digital Process",
    description: "No paperwork, no queues. Buy, manage, and renew policies entirely online in minutes.",
    accent: "text-brand-orange bg-orange-50",
    border: "hover:border-orange-200",
    glow: "hover:shadow-orange-glow/30",
  },
];

const trustBadges = [
  { icon: Shield, cls: "text-brand-green", text: "IRDAI Regulated" },
  { icon: Lock,   cls: "text-blue-600",   text: "256-bit Encryption" },
  { icon: Star,   cls: "text-brand-orange", text: "4.9/5 Satisfaction" },
  { icon: Trophy, cls: "text-purple-600", text: "Best InsureTech 2024" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-wrap bg-brand-beige" id="about" aria-labelledby="why-heading">
      <div className="container-max">

        {/* Section header */}
        <div className="section-header">
          <span className="eyebrow">Why Hari Insure?</span>
          <h2 id="why-heading" className="text-[1.9rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-brand-ink text-center tracking-tight leading-tight whitespace-nowrap">
            Insurance made{" "}
            <span className="text-gradient-green">simple and smart</span>
          </h2>
          <p className="body-lg text-center max-w-xl">
            We removed the complexity from buying insurance. Honest advice, transparent pricing, zero hidden charges.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.id}
              className={`group relative card-flat p-6 transition-all duration-300 ease-spring ${f.border} ${f.glow} hover:-translate-y-1 hover:shadow-card-hover cursor-default`}
            >
              {/* Top-right shine on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-br-2xl bg-gradient-to-br from-transparent via-transparent to-white/60 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className={`w-10 h-10 rounded-xl ${f.accent} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-brand-ink text-[15px] mb-2 leading-snug">{f.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-5 px-6 bg-brand-beige rounded-2xl border border-brand-border">
          {trustBadges.map(({ icon: Icon, cls, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm font-medium text-brand-muted">
              <Icon size={15} className={cls} strokeWidth={2} aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
