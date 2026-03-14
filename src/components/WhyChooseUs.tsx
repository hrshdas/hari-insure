const features = [
  {
    id: "compare",
    label: "Instant Plan\nComparison",
    iconColor: "#16a37f",
    iconBg: "#e8f8f4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    id: "partners",
    label: "Trusted\nPartners",
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "claims",
    label: "Quick Claim\nAssistance",
    iconColor: "#9333ea",
    iconBg: "#faf5ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "digital",
    label: "100% Digital\nProcess",
    iconColor: "#f97316",
    iconBg: "#fff7ed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: "irdai",
    label: "IRDAI\nRegulated",
    iconColor: "#16a37f",
    iconBg: "#e8f8f4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "secure",
    label: "256-bit\nEncryption",
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-beige" id="about" aria-labelledby="why-heading">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <span className="eyebrow">Why Hari Insurance?</span>
          <h2 id="why-heading" className="heading-lg text-center">
            Insurance made{" "}
            <span className="text-gradient-green">simple and smart</span>
          </h2>
          <p className="body-lg text-center max-w-md">
            Honest advice, transparent pricing, zero hidden charges.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-5">
          {features.map((f) => (
            <div
              key={f.id}
              className="group flex flex-col items-center gap-2.5 bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: f.iconBg, color: f.iconColor }}
              >
                {f.icon}
              </div>
              <p className="text-center text-[13px] font-medium leading-snug text-brand-muted whitespace-pre-line">
                {f.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-sm font-medium text-brand-muted">
          {["IRDAI Regulated", "4.9 / 5 Rating", "2+ Lakh Customers", "Best InsureTech 2024"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a37f" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
