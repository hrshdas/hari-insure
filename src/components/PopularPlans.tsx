import Link from "next/link";
import { Activity, Heart, Car, Bike } from "lucide-react";

const plans = [
  {
    id: "health-plan",
    icon: Activity,
    iconCls: "text-brand-green",
    iconBg: "bg-brand-green-light",
    category: "Health",
    title: "Health Insurance",
    description: "Comprehensive medical cover for your entire family. Cashless at 10,000+ network hospitals.",
    price: "₹6,500",
    period: "/yr",
    highlight: "Covers OPD + ICU",
    badge: "Best Seller",
    badgeCls: "bg-brand-green-light text-brand-green",
    border: "border-brand-green/20",
    ctaCls: "bg-brand-green hover:bg-brand-green-dark text-white",
    barCls: "bg-brand-green-light",
  },
  {
    id: "term-plan",
    icon: Heart,
    iconCls: "text-brand-orange",
    iconBg: "bg-orange-50",
    category: "Life",
    title: "Term Life Plan",
    description: "Pure life cover ensuring your family's financial security. Guaranteed payout.",
    price: "₹490",
    period: "/mo",
    highlight: "₹1 Cr cover",
    badge: "Top Rated",
    badgeCls: "bg-orange-50 text-brand-orange",
    border: "border-orange-200/60",
    ctaCls: "bg-brand-orange hover:bg-brand-orange-dark text-white",
    barCls: "bg-orange-50",
  },
  {
    id: "car-plan",
    icon: Car,
    iconCls: "text-blue-600",
    iconBg: "bg-blue-50",
    category: "Motor",
    title: "Car Insurance",
    description: "Full protection from accidents, theft, and third-party liabilities. Hassle-free claims.",
    price: "₹2,072",
    period: "/yr",
    highlight: "Zero depreciation",
    badge: "Quick Renew",
    badgeCls: "bg-blue-50 text-blue-600",
    border: "border-blue-200/60",
    ctaCls: "bg-blue-600 hover:bg-blue-700 text-white",
    barCls: "bg-blue-50",
  },
  {
    id: "bike-plan",
    icon: Bike,
    iconCls: "text-purple-600",
    iconBg: "bg-purple-50",
    category: "Motor",
    title: "Bike Insurance",
    description: "Stay road-legal and fully protected. 1-min online purchase, instant policy.",
    price: "₹714",
    period: "/yr",
    highlight: "Instant policy",
    badge: "Lowest Price",
    badgeCls: "bg-purple-50 text-purple-600",
    border: "border-purple-200/60",
    ctaCls: "bg-purple-600 hover:bg-purple-700 text-white",
    barCls: "bg-purple-50",
  },
];

export default function PopularPlans() {
  return (
    <section className="section-wrap bg-brand-beige" id="plans" aria-labelledby="plans-heading">
      <div className="container-max">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Our Plans</span>
          <h2 id="plans-heading" className="heading-lg text-center">
            Popular plans{" "}
            <span className="text-gradient-green">curated for you</span>
          </h2>
          <p className="body-lg text-center">
            Hand-picked plans with the best coverage at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.id}
                className={`group relative flex flex-col bg-white rounded-2xl border ${plan.border} shadow-card hover:shadow-card-lifted hover:-translate-y-2 transition-all duration-300 ease-spring overflow-hidden`}
              >
                {/* Coloured top bar */}
                <div className={`h-1.5 w-full ${plan.barCls} border-b border-black/[0.03]`} />

                <div className="flex flex-col gap-5 p-5 flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between">
                    <div className={`w-11 h-11 rounded-xl ${plan.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} className={plan.iconCls} strokeWidth={2} />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${plan.badgeCls}`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-brand-muted mb-1">{plan.category}</p>
                    <h3 className="font-bold text-brand-ink text-base leading-snug">{plan.title}</h3>
                    <p className="text-sm text-brand-muted mt-2 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price block */}
                  <div className="flex items-end gap-1 pt-3 border-t border-brand-border">
                    <p className="text-xs text-brand-muted mb-1">From</p>
                    <div className="flex items-baseline gap-0.5 ml-auto">
                      <span className="text-2xl font-bold text-brand-ink leading-none">{plan.price}</span>
                      <span className="text-xs text-brand-muted">{plan.period}</span>
                    </div>
                  </div>

                  {/* Highlight chip */}
                  <p className="text-xs font-medium text-brand-green -mt-2 flex items-center gap-1">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {plan.highlight}
                  </p>

                  {/* CTA */}
                  <Link
                    href="#cta"
                    id={`${plan.id}-view-btn`}
                    className={`w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 ${plan.ctaCls}`}
                  >
                    View Plans
                  </Link>
                </div>
              </article>
            );
          })}
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
