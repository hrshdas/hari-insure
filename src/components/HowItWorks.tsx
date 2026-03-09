const steps = [
  {
    id: "step-1",
    label: "Enter Your\nDetails",
    iconColor: "#16a37f",
    iconBg: "#e8f8f4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    numColor: "#16a37f",
    description: "Fill a quick form with your age, health needs, and budget. Takes under 2 minutes.",
  },
  {
    id: "step-2",
    label: "Compare\nPolicies",
    iconColor: "#f97316",
    iconBg: "#fff7ed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="9" height="9" rx="1" /><rect x="12" y="3" width="9" height="9" rx="1" />
        <rect x="3" y="12" width="9" height="9" rx="1" /><rect x="12" y="12" width="9" height="9" rx="1" />
      </svg>
    ),
    numColor: "#f97316",
    description: "Our engine fetches and ranks the best plans tailored to your profile — sorted by value.",
  },
  {
    id: "step-3",
    label: "Get\nInsured",
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    numColor: "#2563eb",
    description: "Pay securely online and receive your policy document instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <span className="eyebrow">Simple Process</span>
          <h2 id="how-heading" className="heading-lg text-center">
            Insured in{" "}
            <span className="text-gradient-green">3 easy steps</span>
          </h2>
          <p className="body-lg text-center max-w-md">
            No confusing paperwork. Get covered in the time it takes to make a cup of chai.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="group flex flex-col items-center gap-2.5 bg-white rounded-2xl border border-gray-100 p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
            >
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
                  style={{ backgroundColor: step.iconBg, color: step.iconColor }}
                >
                  {step.icon}
                </div>
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center text-[10px] font-bold"
                  style={{ borderColor: step.numColor, color: step.numColor }}
                >
                  {idx + 1}
                </span>
              </div>
              <p className="text-[14px] font-semibold text-brand-ink whitespace-pre-line leading-snug">
                {step.label}
              </p>
              <p className="text-[13px] text-brand-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm text-brand-muted">Ready to get started?</p>
          <a
            href="#cta"
            id="how-it-works-cta"
            className="btn-primary-lg"
          >
            Start Now — It&apos;s Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
