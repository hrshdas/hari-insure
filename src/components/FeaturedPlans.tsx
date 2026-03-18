"use client";

import Link from "next/link";

const plans = [
  {
    name: "LIC New Jeevan Amar",
    tag: "Life Insurance",
    color: "brand-orange",
    bgLight: "brand-orange-light",
    link: "https://licindia.in",
    content: (
      <div className="text-sm space-y-3 text-brand-muted leading-relaxed">
        <p className="font-bold text-brand-ink">Plan 955 | UIN: 512N350V02</p>
        <p className="italic">Source: Official LIC brochure, licindia.in</p>
        <ul className="list-disc pl-2 space-y-1">
          <li>Type: Non-linked, non-participating, individual, pure term plan.</li>
          <li>Entry age: 18 to 65 years. Maximum maturity age: 80 years.</li>
          <li>Minimum sum assured: Rs.25 lakh. Policy term: 10 to 40 years.</li>
          <li>Death benefit options: (1) Level Sum Assured — fixed throughout term. (2) Increasing Sum Assured — increases by 10% every 5 years from the 6th year, maximum 1.5x the base sum assured.</li>
          <li>Free look period: 30 days.</li>
        </ul>
      </div>
    ),
  },
  {
    name: "Care Supreme",
    tag: "Health Insurance",
    color: "brand-green",
    bgLight: "brand-green-light",
    link: "https://careinsurance.com",
    content: (
      <div className="text-sm space-y-3 text-brand-muted leading-relaxed">
        <p className="font-bold text-brand-ink">UIN: CHIHLIP23128V012223 | IRDAI Reg: 148</p>
        <p className="italic">Source: Official Care Supreme brochure, careinsurance.com</p>
        <ul className="list-disc pl-2 space-y-1">
          <li>Sum insured options: Rs.5L / Rs.7L / Rs.10L / Rs.15L.</li>
          <li>Entry age: 18 years to lifelong (adult), 91 days to 24 years (child).</li>
          <li>No room rent restriction. No co-payment. No disease-wise sub-limits.</li>
          <li>Pre-hospitalisation: 60 days. Post-hospitalisation: 180 days.</li>
          <li>Air ambulance: up to Rs.5 lakh. Cumulative bonus: 50% per claim-free year, max 100%.</li>
          <li>Unlimited auto-recharge of sum insured.</li>
          <li>Waiting periods: 30 days initial, 24 months named ailments.</li>
          <li>Zone 1 (Delhi NCR, Mumbai, Gujarat etc.) and Zone 2 (rest of India) pricing.</li>
        </ul>
      </div>
    ),
  },
  {
    name: "ICICI Lombard Health Elite",
    tag: "Premium Health",
    color: "blue-600",
    bgLight: "blue-50",
    link: "https://icicilombard.com",
    content: (
      <div className="text-sm space-y-3 text-brand-muted leading-relaxed">
        <p className="font-bold text-brand-ink">UIN: ICIHLIP22096V062122 | IRDAI Reg: 115</p>
        <p className="italic">Source: Key Information Sheet (KIS), icicilombard.com</p>
        <ul className="list-disc pl-2 space-y-1">
          <li>Sum insured tiers: Rs.3L/4L/5L | Rs.7L/10L | Rs.15L/20L/25L/50L.</li>
          <li>Hospital daily cash: Rs.1,000 to Rs.3,000 per day depending on tier.</li>
          <li>Maternity (3-year waiting period): Normal delivery Rs.15,000-25,000, C-section Rs.25,000-50,000.</li>
          <li>OPD benefit: Rs.5,000 to Rs.20,000 depending on tier.</li>
          <li>Cashless network: 6,500+ hospitals nationwide. Helpline: 1800 2666.</li>
          <li>Waiting periods: 30 days initial, 24 months PED, 90 days for hypertension/diabetes/cardiac conditions, 36 months maternity.</li>
        </ul>
      </div>
    ),
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
              className="group relative bg-white rounded-[2rem] p-8 border border-brand-border/50 hover:border-brand-green/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Decorative accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                style={{ backgroundColor: plan.color === "brand-orange" ? "#f97316" : plan.color === "brand-green" ? "#16a37f" : "#2563eb" }}
              />

              <div className="relative z-10 flex flex-col flex-grow">
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
                
                <div className="mb-8">
                  {plan.content}
                </div>

                <Link
                  href={plan.link}
                  className="block w-full text-center py-4 bg-brand-ink hover:bg-brand-green text-white font-bold rounded-2xl transition-all duration-300 shadow-md hover:shadow-brand-green/20 mt-auto"
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
