"use client";

import { useState } from "react";

const faqs = [
    {
        q: "What types of insurance does Hari Insurance offer?",
        a: "Hari Insurance offers a comprehensive range of policies including Health Insurance, Life Insurance, Term Plans, Motor Insurance, Family Floater Plans, and Investment-linked plans — all from India's top insurers.",
    },
    {
        q: "How do I choose the right insurance plan for my family?",
        a: "Our digital advisor helps you compare plans side-by-side based on your age, income, health history, and coverage needs. You can also speak to one of our experts for personalised guidance at zero cost.",
    },
    {
        q: "Is my personal data safe with Hari Insurance?",
        a: "Absolutely. We use industry-standard encryption and never sell your data to third parties. Your information is used solely to match you with the most suitable insurance options.",
    },
    {
        q: "Can I modify or port my existing insurance policy?",
        a: "Yes. Hari Insurance supports policy porting, top-up additions, and mid-term modifications for most insurers. Our team guides you through every step to ensure seamless transitions without coverage gaps.",
    },
    {
        q: "How does the claim assistance process work?",
        a: "We provide end-to-end claim support — from filing the first intimation to follow-ups with the insurer. Our dedicated claims team ensures your claim is settled quickly and fairly.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section
            id="faq"
            className="relative overflow-hidden"
            style={{ background: "#f5f0e8" }}
            aria-labelledby="faq-heading"
        >
            {/* Decorative top divider */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #0d3d3540, transparent)" }} />

            <div className="container-max px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

                    {/* Left — sticky heading */}
                    <div className="lg:sticky lg:top-28">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2.5 mb-5">
                            <span className="block w-8 h-[2px] bg-brand-orange rounded-full" />
                            <span className="text-sm font-semibold text-brand-orange tracking-wide">Got Questions?</span>
                        </div>

                        <h2
                            id="faq-heading"
                            className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.1] tracking-tight font-[family-name:var(--font-nunito)]"
                            style={{ color: "#0d3d35" }}
                        >
                            Frequently<br />
                            Asked<br />
                            Questions
                        </h2>

                        <p className="mt-5 text-base text-brand-muted leading-relaxed max-w-xs">
                            Can&apos;t find what you&apos;re looking for? Our team is just a message away.
                        </p>

                        <a
                            href="#cta"
                            className="inline-flex items-center gap-2 mt-7 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                            style={{ background: "#0d3d35", color: "#fff" }}
                        >
                            Talk to an Expert
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Right — accordion */}
                    <div className="flex flex-col divide-y" style={{ borderColor: "#0d3d3520" }}>
                        {faqs.map((faq, i) => {
                            const isOpen = open === i;
                            return (
                                <div key={i} className="group">
                                    <button
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 py-6 text-left transition-all duration-200"
                                        aria-expanded={isOpen}
                                    >
                                        <span
                                            className="text-base sm:text-lg font-semibold leading-snug pr-2 transition-colors duration-200"
                                            style={{ color: isOpen ? "#0d3d35" : "#1a2b28" }}
                                        >
                                            {faq.q}
                                        </span>

                                        {/* Animated chevron */}
                                        <span
                                            className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
                                            style={{
                                                width: 34, height: 34,
                                                background: isOpen ? "#0d3d35" : "rgba(13,61,53,0.08)",
                                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                            }}
                                        >
                                            <svg
                                                width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                style={{ color: isOpen ? "#fff" : "#0d3d35" }}
                                            >
                                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* Answer — smooth slide */}
                                    <div
                                        className="overflow-hidden transition-all duration-300 ease-in-out"
                                        style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0 }}
                                    >
                                        <p className="pb-6 text-sm sm:text-base text-brand-muted leading-relaxed max-w-xl">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Decorative bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #0d3d3540, transparent)" }} />
        </section>
    );
}
