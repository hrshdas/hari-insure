import Link from "next/link";
import Image from "next/image";

const plans = [
  {
    id: "health-plan",
    label: "Health\nInsurance",
    iconColor: "#16a37f",
    iconBg: "transparent",
    href: "/health",
    icon: (
      <Image src="/health-icon.png" alt="Health Insurance" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "term-plan",
    label: "Term\nInsurance",
    iconColor: "#f97316",
    iconBg: "transparent",
    href: "/term",
    icon: (
      <Image src="/term-icon.png" alt="Term Insurance" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "life-plan",
    label: "Life\nInsurance",
    iconColor: "#2563eb",
    iconBg: "transparent",
    href: "/term",
    icon: (
      <Image src="/life-icon.png" alt="Life Insurance" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "family-plan",
    label: "Family\nHealth",
    iconColor: "#9333ea",
    iconBg: "transparent",
    href: "/health/for-family",
    icon: (
      <Image src="/family-health-icon.png" alt="Family Health" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "individual-plan",
    label: "Individual\nHealth",
    iconColor: "#16a37f",
    iconBg: "transparent",
    href: "/health/for-myself",
    icon: (
      <Image src="/individual-health-icon.png" alt="Individual Health" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "investment-plan",
    label: "Investment\nPlans",
    iconColor: "#f97316",
    iconBg: "transparent",
    href: "/term/vs-endowment-ulip",
    icon: (
      <Image src="/investment-icon.png" alt="Investment Plans" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "senior-plan",
    label: "Senior\nCitizen",
    iconColor: "#2563eb",
    iconBg: "transparent",
    href: "/health/for-parents",
    icon: (
      <Image src="/senior-icon.png" alt="Senior Citizen" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "critical-plan",
    label: "Critical\nIllness",
    iconColor: "#9333ea",
    iconBg: "transparent",
    href: "/health/concepts#critical-illness",
    icon: (
      <Image src="/critical-icon.png" alt="Critical Illness" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "topup-plan",
    label: "Health Top\nUp",
    iconColor: "#16a37f",
    iconBg: "transparent",
    href: "/health/concepts#restoration",
    icon: (
      <Image src="/topup-icon.png" alt="Health Top Up" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "car-plan",
    label: "Car\nInsurance",
    iconColor: "#f97316",
    iconBg: "transparent",
    href: "/motor",
    icon: (
      <Image src="/car-icon.png" alt="Car Insurance" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "bike-plan",
    label: "Bike\nInsurance",
    iconColor: "#2563eb",
    iconBg: "transparent",
    href: "/motor",
    icon: (
      <Image src="/bike-icon.png" alt="Bike Insurance" width={100} height={100} className="object-contain" />
    ),
  },
  {
    id: "maternity-plan",
    label: "Maternity\nHealth",
    iconColor: "#9333ea",
    iconBg: "transparent",
    href: "/health/maternity",
    icon: (
      <Image src="/maternity-icon.png" alt="Maternity Health" width={100} height={100} className="object-contain" />
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
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {plans.map((plan) => (
            <Link
              key={plan.id}
              href={plan.href}
              id={`${plan.id}-btn`}
              className="group flex flex-col items-center justify-center gap-2 bg-white rounded-2xl border border-gray-100 p-3 aspect-square hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
            >
              <div
                className={`${plan.iconBg === "transparent" ? "" : "w-10 h-10"} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                style={{ backgroundColor: plan.iconBg, color: plan.iconColor }}
              >
                {plan.icon}
              </div>
              <p className="text-center text-[10px] sm:text-[11px] font-medium leading-tight text-brand-muted whitespace-pre-line">
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
