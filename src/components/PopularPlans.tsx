import Link from "next/link";

const plans = [
  {
    id: "health-plan",
    label: "Health\nInsurance",
    iconColor: "#16a37f",
    iconBg: "#e8f8f4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <line x1="12" y1="9" x2="12" y2="15" /><line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
  {
    id: "term-plan",
    label: "Term\nInsurance",
    iconColor: "#f97316",
    iconBg: "#fff7ed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="11" rx="5" ry="7" />
        <path d="M5 6C3.5 7.5 3 9 3 11c0 5 4 9 9 9s9-4 9-9c0-2-.5-3.5-2-5" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: "life-plan",
    label: "Life\nInsurance",
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "family-plan",
    label: "Family\nHealth",
    iconColor: "#9333ea",
    iconBg: "#faf5ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "individual-plan",
    label: "Individual\nHealth",
    iconColor: "#16a37f",
    iconBg: "#e8f8f4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M8 14v1a4 4 0 0 0 8 0v-1" />
        <line x1="12" y1="5" x2="12" y2="3" />
        <line x1="12" y1="13" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    id: "investment-plan",
    label: "Investment\nPlans",
    iconColor: "#f97316",
    iconBg: "#fff7ed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    id: "senior-plan",
    label: "Senior\nCitizen",
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="7" r="3" />
        <path d="M6 21v-2a3 3 0 0 1 3-3h0" />
        <path d="M14 10l3 3-3 3" />
        <line x1="17" y1="13" x2="21" y2="13" />
        <line x1="9" y1="14" x2="9" y2="21" />
      </svg>
    ),
  },
  {
    id: "critical-plan",
    label: "Critical\nIllness",
    iconColor: "#9333ea",
    iconBg: "#faf5ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 13s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
        <path d="M5 12h2M17 12h2" />
      </svg>
    ),
  },
  {
    id: "topup-plan",
    label: "Health Top\nUp",
    iconColor: "#16a37f",
    iconBg: "#e8f8f4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        <path d="M18 20.84a5.5 5.5 0 0 1-7.78 0l-1.06-1.06" />
      </svg>
    ),
  },
  {
    id: "car-plan",
    label: "Car\nInsurance",
    iconColor: "#f97316",
    iconBg: "#fff7ed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2H5z" />
        <circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" />
      </svg>
    ),
  },
  {
    id: "bike-plan",
    label: "Bike\nInsurance",
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v1L5.5 17.5M9 6l2 11" />
      </svg>
    ),
  },
  {
    id: "maternity-plan",
    label: "Maternity\nHealth",
    iconColor: "#9333ea",
    iconBg: "#faf5ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a4 4 0 0 1 4 4c0 2-1.5 3.5-3 4.5V14a1 1 0 0 1-2 0v-3.5C9.5 9.5 8 8 8 6a4 4 0 0 1 4-4z" />
        <path d="M9 14h6l1 6H8l1-6z" />
      </svg>
    ),
  },
];

export default function PopularPlans() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" id="plans" aria-labelledby="plans-heading">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <span className="eyebrow">Our Services</span>
          <h2 id="plans-heading" className="heading-lg text-center">
            Comprehensive Insurance{" "}
            <span className="text-gradient-green">Services</span>
          </h2>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-5">
          {plans.map((plan) => (
            <Link
              key={plan.id}
              href="#cta"
              id={`${plan.id}-btn`}
              className="group flex flex-col items-center gap-2.5 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: plan.iconBg, color: plan.iconColor }}
              >
                {plan.icon}
              </div>
              <p className="text-center text-[13px] font-medium leading-snug text-brand-muted whitespace-pre-line">
                {plan.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom link */}
        <p className="text-center mt-8 text-sm text-brand-muted">
          Not sure which plan?{" "}
          <a href="#cta" className="text-brand-green font-semibold hover:underline underline-offset-2">
            Talk to an advisor
          </a>
        </p>
      </div>
    </section>
  );
}
