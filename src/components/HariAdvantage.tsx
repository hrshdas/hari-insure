import Image from "next/image";

const steps = [
    {
        id: "adv-visit",
        emoji: "🌐",
        color: "#16a37f",
        bg: "transparent",
        iconSize: 100,
        title: "Visit",
        subtitle: "Come to HariInsurance",
        icon: (
            <Image src="/visit-icon.png" alt="Visit HariInsurance" width={100} height={100} className="object-contain" />
        ),
    },
    {
        id: "adv-know",
        emoji: "📚",
        color: "#f97316",
        bg: "transparent",
        iconSize: 100,
        title: "Learn",
        subtitle: "Understand your needs",
        icon: (
            <Image src="/learn-icon.png" alt="Learn about insurance" width={100} height={100} className="object-contain" />
        ),
    },
    {
        id: "adv-compare",
        emoji: "⚖️",
        color: "#2563eb",
        bg: "transparent",
        iconSize: 100,
        title: "Compare",
        subtitle: "Find the best plan",
        icon: (
            <Image src="/compare-icon.png" alt="Compare insurance plans" width={100} height={100} className="object-contain" />
        ),
    },
    {
        id: "adv-buy",
        emoji: "✅",
        color: "#9333ea",
        bg: "transparent",
        iconSize: 100,
        title: "Purchase",
        subtitle: "Insure in minutes",
        icon: (
            <Image src="/purchase-icon.png" alt="Purchase insurance" width={100} height={100} className="object-contain" />
        ),
    },
    {
        id: "adv-support",
        emoji: "🤝",
        color: "#16a37f",
        bg: "transparent",
        iconSize: 100,
        title: "Support",
        subtitle: "We're always here",
        icon: (
            <Image src="/support-icon.png" alt="Customer Support" width={100} height={100} className="object-contain" />
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
                        The HariInsurance Advantage
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
                                    className="rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                                    style={{ backgroundColor: step.bg, color: step.color, width: step.iconSize, height: step.iconSize }}
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
