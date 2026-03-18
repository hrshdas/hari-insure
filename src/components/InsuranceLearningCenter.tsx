"use client";

import { useState } from "react";

const learningContent = [
  {
    title: "What is Term Insurance",
    summary: "Term insurance pays a fixed sum to your nominee if you die during the policy period. You pay an annual premium; if you survive the full term, you receive nothing — this is intentional. Term insurance is income replacement, not investment.",
    details: (
      <div className="space-y-4">
        <p>Per IRDAI regulations, the minimum sum assured under an individual term plan is Rs.25 lakh. Tax benefit: premiums qualify for Section 80C deduction up to Rs.1.5 lakh per year. The payout to your nominee is 100% tax-free under Section 10(10D) of the Income Tax Act.</p>
        <p>The most important thing to disclose at purchase: your health conditions, smoking status, and all existing policies. Non-disclosure is the single largest cause of term insurance claim rejection.</p>
      </div>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "What is Health Insurance",
    summary: "Health insurance reimburses your hospitalisation expenses up to the sum insured. Three things changed for buyers under IRDAI (Insurance Products) Regulations 2024 (effective 1 April 2024):",
    details: (
      <div className="space-y-4">
        <div className="pl-4 space-y-2">
          <p>1. Pre-existing disease (PED) waiting period is now capped at 36 months maximum. Previously some plans imposed 48 months.</p>
          <p>2. Insurers cannot refuse health insurance based on age alone.</p>
          <p>3. AYUSH treatment (Ayurveda, Yoga, Unani, Siddha, Homeopathy) must be covered up to the full sum insured.</p>
        </div>
        <p>Tax benefit: Premiums qualify for Section 80D deduction — up to Rs.25,000 for self/spouse/children, and an additional Rs.50,000 if your parents are senior citizens (60+).</p>
      </div>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "How Motor Insurance Works",
    summary: "Under Section 146 of the Motor Vehicles Act, 1988, driving without valid third-party (TP) insurance is a criminal offence — fine of Rs.2,000 for first offence, Rs.4,000 for repeat.",
    details: (
      <div className="space-y-4">
        <p>TP premium is fixed annually by IRDAI and is identical across all insurers. Indicative rates: cars under 1000cc approximately Rs.2,000-2,500/year; 1000-1500cc approximately Rs.3,200-3,900/year. These are IRDAI-notified figures — verify current rates at irdai.gov.in.</p>
        <p>IDV (Insured Declared Value) is the current market value of your car and the maximum the insurer will pay on theft or total loss. A car is declared Constructive Total Loss when repair costs exceed 75% of IDV.</p>
      </div>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Claim Settlement Ratio",
    summary: "The Claim Settlement Ratio (CSR) is the percentage of claims an insurance company pays out compared to the number of claims it receives in a financial year.",
    details: "A higher CSR (above 95%) generally indicates a reliable insurer. However, you should also look at the 'Amount Settlement Ratio' and 'Incurred Claims Ratio' for a complete picture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "IRDAI Rules Explained",
    summary: "The Insurance Regulatory and Development Authority of India (IRDAI) is the regulatory body that protects the interests of insurance policyholders.",
    details: "IRDAI mandates standard definitions for critical illnesses, allows policy porting, ensures transparency in claim handling, and regulates agent commissions to protect consumers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function InsuranceLearningCenter() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="learning-center">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Insurance Learning Center
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Free insurance guides written in plain English, so you can understand your options and make the right decision for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningContent.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`group bg-brand-beige rounded-3xl p-8 transition-all duration-300 border-2 ${isExpanded ? "border-brand-green ring-1 ring-brand-green/20" : "border-transparent hover:border-brand-green/30"
                  } cursor-pointer shadow-sm hover:shadow-md`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-green shadow-xs">
                    {item.icon}
                  </div>
                  <div className={`p-1 rounded-full transition-all duration-300 ${isExpanded ? "rotate-180 bg-brand-green text-white" : "bg-white/50 text-brand-ink"}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>

                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-brand-ink/10">
                      <div className="text-brand-ink text-sm font-medium leading-relaxed">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
