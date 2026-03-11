const steps = [
    {
        id: "adv-visit",
        emoji: "🌐",
        color: "#16a37f",
        bg: "#e8f8f4",
        title: "Visit",
        subtitle: "Come to HariInsure",
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
    {
        id: "adv-know",
        emoji: "📚",
        color: "#f97316",
        bg: "#fff7ed",
        title: "Learn",
        subtitle: "Understand your needs",
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
    },
    {
        id: "adv-compare",
        emoji: "⚖️",
        color: "#2563eb",
        bg: "#eff6ff",
        title: "Compare",
        subtitle: "Find the best plan",
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="9" height="9" rx="1" />
                <rect x="12" y="3" width="9" height="9" rx="1" />
                <rect x="3" y="12" width="9" height="9" rx="1" />
                <rect x="12" y="12" width="9" height="9" rx="1" />
            </svg>
        ),
    },
    {
        id: "adv-buy",
        emoji: "✅",
        color: "#9333ea",
        bg: "#faf5ff",
        title: "Purchase",
        subtitle: "Insure in minutes",
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        id: "adv-support",
        emoji: "🤝",
        color: "#16a37f",
        bg: "#e8f8f4",
        title: "Support",
        subtitle: "We're always here",
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h8M8 14h5" />
            </svg>
        ),
    },
];

const ArrowIcon = ({ color }: { color: string }) => (
    <div className="hidden sm:flex items-center justify-center flex-shrink-0 self-start mt-[52px]">
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
            <path d="M0 8h24" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M20 3l5 5-5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

export default function HariAdvantage() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="advantage-heading">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-2">
                    <div className="flex items-center gap-2.5 mb-3">
                        <span className="block w-8 h-[2px] bg-brand-orange rounded-full" />
                        <span className="text-sm font-semibold text-brand-orange tracking-wide">Our Process</span>
                    </div>
                    <h2
                        id="advantage-heading"
                        className="text-[2rem] sm:text-[2.4rem] font-bold tracking-tight leading-tight font-[family-name:var(--font-nunito)]"
                        style={{ color: "#0d3d35" }}
                    >
                        The HariInsure Advantage
                    </h2>
                    <p className="mt-2 text-sm text-brand-muted max-w-xl leading-relaxed">
                        When you buy insurance from us, you get more than just financial safety — you get expert guidance, transparent pricing, and lifelong support at every step.
                    </p>
                    <div className="mt-2 w-12 h-[3px] rounded-full bg-brand-orange" />
                </div>

                {/* Flowchart row */}
                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-0">
                    {steps.map((step, idx) => (
                        <div key={step.id} className="flex sm:flex-row items-stretch flex-1 gap-3 sm:gap-0">
                            {/* Card */}
                            <div
                                className="group flex-1 flex flex-col items-center text-center gap-3 rounded-2xl border border-gray-100 px-4 py-5 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                            >
                                {/* Icon circle */}
                                <div
                                    className="w-[62px] h-[62px] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                                    style={{ backgroundColor: step.bg, color: step.color }}
                                >
                                    {step.icon}
                                </div>

                                {/* Step number pill */}
                                <span
                                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                                    style={{ background: step.bg, color: step.color }}
                                >
                                    Step {idx + 1}
                                </span>

                                {/* Title + subtitle */}
                                <div>
                                    <p className="text-[14px] font-bold text-brand-ink leading-tight">{step.title}</p>
                                    <p className="text-[11px] text-brand-muted mt-0.5 leading-snug">{step.subtitle}</p>
                                </div>
                            </div>

                            {/* Arrow between cards */}
                            {idx < steps.length - 1 && (
                                <ArrowIcon color={steps[idx + 1].color} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
