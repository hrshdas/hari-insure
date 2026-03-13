"use client";

import Link from "next/link";

const plans = [
  {
    name: "LIC New Jeevan Amar",
    tag: "Life Insurance",
    description: "A non-linked, non-participating, individual, pure risk premium life insurance plan that provides financial protection to the insured's family.",
    features: [
      "Pure term insurance plan",
      "Entry age: 18–65 years",
      "Policy term: up to 40 years",
    ],
    color: "brand-orange",
    bgLight: "brand-orange-light",
    link: "#",
  },
  {
    name: "Care Supreme Health",
    tag: "Health Insurance",
    description: "A comprehensive health insurance plan designed to provide extensive coverage with modern benefits like unlimited recharge.",
    features: [
      "Coverage up to ₹15 lakh+",
      "60-day pre-hospitalisation",
      "180-day post-hospitalisation",
      "Unlimited recharge benefit",
    ],
    color: "brand-green",
    bgLight: "brand-green-light",
    link: "#",
  },
  {
    name: "ICICI Lombard Health Elite",
    tag: "Premium Health",
    description: "A premium health insurance offering that goes beyond standard care, including maternity and critical illness benefits.",
    features: [
      "Hospitalization cover",
      "Maternity benefits included",
      "Critical illness add-on available",
      "Global emergency assistance",
    ],
    color: "blue-600",
    bgLight: "blue-50",
    link: "#",
  },
];

export default function FeaturedPlans() {
  return (
    <section className="py-20 bg-brand-beige/30" id="featured-plans">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
              Featured Insurance Plans
            </h2>
            <p className="text-brand-muted">
              Handpicked plans from top-rated insurers in India, chosen for their comprehensive coverage and excellent claim settlement history.
            </p>
          </div>
          <Link
            href="#plans"
            className="inline-flex items-center text-brand-green font-bold hover:underline gap-1 transition-all"
          >
            View All Plans
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2rem] p-8 border border-brand-border/50 hover:border-brand-green/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                style={{ backgroundColor: plan.color === "brand-orange" ? "#f97316" : plan.color === "brand-green" ? "#16a37f" : "#2563eb" }}
              />

              <div className="relative z-10">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6`}
                  style={{
                    backgroundColor: plan.color === "brand-orange" ? "#fff4ed" : plan.color === "brand-green" ? "#e8f8f4" : "#eff6ff",
                    color: plan.color === "brand-orange" ? "#f97316" : plan.color === "brand-green" ? "#16a37f" : "#2563eb",
                  }}
                >
                  {plan.tag}
                </span>

                <h3 className="text-2xl font-bold text-brand-ink mb-4 group-hover:text-brand-green transition-colors">
                  {plan.name}
                </h3>
                
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-ink/80">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.link}
                  className="block w-full text-center py-4 bg-brand-ink hover:bg-brand-green text-white font-bold rounded-2xl transition-all duration-300 shadow-md hover:shadow-brand-green/20"
                >
                  Check Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
