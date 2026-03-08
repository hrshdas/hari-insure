const steps = [
  {
    id: "step-1",
    num: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: "Enter Your Details",
    description: "Fill a quick, simple form with your age, health needs, and budget. Takes under 2 minutes.",
    accent: "bg-brand-green-light text-brand-green",
    numCls: "text-brand-green",
  },
  {
    id: "step-2",
    num: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="9" height="9" rx="1"/><rect x="12" y="3" width="9" height="9" rx="1"/>
        <rect x="3" y="12" width="9" height="9" rx="1"/><rect x="12" y="12" width="9" height="9" rx="1"/>
      </svg>
    ),
    title: "Compare Policies",
    description: "Our engine fetches and ranks the best plans tailored to your profile — sorted by value.",
    accent: "bg-orange-50 text-brand-orange",
    numCls: "text-brand-orange",
  },
  {
    id: "step-3",
    num: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Get Insured",
    description: "Pay securely online and receive your policy document instantly. Zero paperwork, ever.",
    accent: "bg-blue-50 text-blue-600",
    numCls: "text-blue-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-wrap bg-brand-beige" aria-labelledby="how-heading">
      <div className="container-max">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Simple Process</span>
          <h2 id="how-heading" className="heading-lg text-center">
            Insured in{" "}
            <span className="text-gradient-green">3 easy steps</span>
          </h2>
          <p className="body-lg text-center">
            No confusing paperwork. Get covered in the time it takes to make a cup of chai.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">

          {/* Connector line (desktop only, decorative) */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-px"
            style={{ background: "linear-gradient(90deg, #16a37f33, #f9731633, #2563eb33)" }}
            aria-hidden="true"
          />

          {steps.map((step, idx) => (
            <div key={step.id} className="group relative flex flex-col items-center text-center">

              {/* Icon + number badge */}
              <div className="relative mb-7">
                <div className={`w-[5.5rem] h-[5.5rem] rounded-2xl ${step.accent} flex items-center justify-center shadow-card transition-all duration-300 ease-spring group-hover:shadow-card-hover group-hover:scale-105`}>
                  {step.icon}
                </div>
                <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-current ${step.numCls} flex items-center justify-center text-[10px] font-bold shadow-xs`}>
                  {idx + 1}
                </span>
              </div>

              <h3 className="font-bold text-brand-ink text-[17px] mb-2.5">{step.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed max-w-[22rem]">{step.description}</p>

              {/* Mobile arrow */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden mt-5 text-brand-muted/40">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <p className="text-sm text-brand-muted">Ready to get started?</p>
          <a
            href="#cta"
            id="how-it-works-cta"
            className="btn-primary-lg"
          >
            Start Now — It&apos;s Free
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
