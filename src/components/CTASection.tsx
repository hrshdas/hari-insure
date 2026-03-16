import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden noise-overlay"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient -z-10" />
      {/* Mesh glow */}
      <div className="absolute inset-0 bg-mesh-dark opacity-60 -z-10" />
      {/* Top-right decorative circle */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-3xl -z-10" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">

          {/* Pill badge */}


          {/* Headline */}
          <h2
            id="cta-heading"
            className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1]"
          >
            Protect what{" "}
            <span className="relative inline-block">
              matters most
              <span className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-brand-orange/70 rounded-full" />
            </span>
            {" "}today.
          </h2>

          <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            Join 500+ families who trust <span className="font-bold text-black">Hari </span><span className="font-bold text-brand-green">Insurance</span> for clear, honest insurance guidance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center mt-10">
            <Link
              href="/talk-to-advisor"
              id="cta-primary-btn"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-9 py-4 rounded-full text-base shadow-orange-glow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-spring"
            >
              Talk to a Licensed Advisor
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a
              href="tel:18001234567"
              id="cta-call-btn"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-9 py-4 rounded-full text-base backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200 ease-spring"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call 1800-123-4567
            </a>
          </div>

          {/* Trust micro-copy */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-white/45 text-xs font-medium">
            {["100% Free Education", "Unbiased Guidance"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
