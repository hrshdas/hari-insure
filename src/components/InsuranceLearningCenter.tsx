"use client";

import { useState } from "react";

const learningContent = [
  {
    title: "What is Term Insurance",
    summary: "Term insurance is the simplest and most affordable form of life insurance. It provides coverage for a specific 'term' of years. If the insured person passes away during this period, the death benefit is paid to the nominees.",
    details: "Key benefits include high sum assured at low premiums, tax benefits under Section 80C, and financial security for your family's future liabilities like home loans or education.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "What is Health Insurance",
    summary: "Health insurance covers medical expenses arising from illnesses or injuries. It pays for hospitalization, day-care procedures, and sometimes pre and post-hospitalization costs.",
    details: "Essential for protecting your savings against rising medical costs. Includes benefits like cashless treatment, No Claim Bonus (NCB), and tax savings under Section 80D.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "How Motor Insurance Works",
    summary: "Motor insurance protects your vehicle against damages from accidents, theft, fire, and natural disasters. It also covers third-party liabilities as mandated by law.",
    details: "Third-party insurance is compulsory in India. Comprehensive insurance is recommended as it covers own-damage as well. Factors like IDV (Insured Declared Value) and NCB play a huge role in premiums.",
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
            Demystifying insurance concepts so you can make informed decisions for your family's security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningContent.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`group bg-brand-beige rounded-3xl p-8 transition-all duration-300 border-2 ${
                  isExpanded ? "border-brand-green ring-1 ring-brand-green/20" : "border-transparent hover:border-brand-green/30"
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
                      <p className="text-brand-ink text-sm font-medium leading-relaxed">
                        {item.details}
                      </p>
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
