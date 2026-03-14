import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    id: "step-1",
    step: "Step 1",
    title: "Enter Your Details",
    desc: "Fill a quick form with your age, health needs, and budget. Takes under 2 minutes.",
    cta: "Start Now",
    ctaHref: "#cta",
    img: "/individual-health-icon.png",
    gradient: "linear-gradient(135deg, #0d5c50 0%, #16a37f 100%)",
    ripple: "rgba(255,255,255,0.06)",
  },
  {
    id: "step-2",
    step: "Step 2",
    title: "Compare Policies",
    desc: "Our engine fetches and ranks the best plans tailored to your profile — sorted by value.",
    cta: "View Plans",
    ctaHref: "#plans",
    img: "/investment-icon.png",
    gradient: "linear-gradient(135deg, #0a8c6a 0%, #34d399 100%)",
    ripple: "rgba(255,255,255,0.07)",
  },
  {
    id: "step-3",
    step: "Step 3",
    title: "Get Guidance",
    desc: "Connect with a licensed advisor who explains your options clearly — no pressure, no jargon.",
    cta: "Talk to Advisor",
    ctaHref: "#cta",
    img: "/term-icon.png",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%)",
    ripple: "rgba(255,255,255,0.07)",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-10">
          <span className="eyebrow">Simple Process</span>
          <h2 id="how-heading" className="heading-lg text-center">
            Your insurance journey,{" "}
            <span className="text-gradient-green">simplified</span>
          </h2>
          <p className="body-lg text-center max-w-md">
            From understanding your needs to getting expert guidance — we make it clear and stress-free.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-2xl overflow-hidden flex flex-col justify-between"
              style={{
                background: step.gradient,
                minHeight: 220,
                padding: "24px 22px 22px 22px",
              }}
            >
              {/* Ripple circle decoration */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: step.ripple,
                  transform: "translate(30%, -30%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-28 h-28 rounded-full pointer-events-none"
                style={{
                  background: step.ripple,
                  transform: "translate(-30%, 30%)",
                }}
              />

              {/* Top row: step pill + illustration */}
              <div className="flex items-start justify-between relative z-10">
                <span
                  className="text-[11px] font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  {step.step}
                </span>

                {/* Floating illustration */}
                <div className="flex-shrink-0 -mt-2 -mr-1">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={90}
                    height={90}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="relative z-10 mt-3 flex flex-col gap-1.5 flex-1">
                <h3 className="text-white font-bold text-[18px] leading-snug">
                  {step.title}
                </h3>
                <p className="text-white/75 text-[12px] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* CTA button */}
              <div className="relative z-10 mt-5">
                <Link
                  href={step.ctaHref}
                  id={`${step.id}-cta`}
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    color: "#0d3d35",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  }}
                >
                  {step.cta}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
