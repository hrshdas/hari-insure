import Link from "next/link";

export default function AdvisorCTA({ variant = "banner" }: { variant?: "banner" | "sidebar" | "inline" }) {
  if (variant === "sidebar") {
    return (
      <div className="rounded-2xl border border-brand-green/20 bg-brand-green-light p-5 sticky top-24">
        <div className="w-10 h-10 rounded-xl bg-green-gradient flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <h3 className="text-sm font-bold text-brand-ink mb-1">Still confused?</h3>
        <p className="text-xs text-brand-muted leading-relaxed mb-4">
          Connect with an IRDAI-licensed advisor. Free. No pressure. No selling.
        </p>
        <Link
          href="/advisor"
          className="btn-primary w-full text-xs"
          id="advisor-cta-sidebar"
        >
          Talk to an Advisor
        </Link>
        <p className="text-[10px] text-brand-muted text-center mt-2">
          IRDAI-licensed · 100% free · No commissions
        </p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex items-start gap-4 rounded-2xl bg-brand-green-light border border-brand-green/20 p-4 my-8">
        <div className="w-9 h-9 rounded-xl bg-green-gradient flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-brand-ink">Still confused? Talk to a licensed advisor — free.</p>
          <p className="text-xs text-brand-muted mt-0.5">IRDAI-licensed. No selling. No pressure.</p>
        </div>
        <Link href="/advisor" className="btn-primary text-xs flex-shrink-0" id="advisor-cta-inline">
          Talk Free
        </Link>
      </div>
    );
  }

  // Default: banner
  return (
    <section className="bg-brand-ink py-14 px-4 sm:px-6 lg:px-8" aria-label="Talk to advisor">
      <div className="container-max text-center">
        <div className="inline-flex w-12 h-12 rounded-2xl bg-brand-green/20 items-center justify-center mb-4">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a37f" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Still confused?</h2>
        <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto">
          Connect with an IRDAI-licensed advisor. Get personalised guidance — completely free, no pressure, no commissions.
        </p>
        <Link href="/advisor" className="btn-primary" id="advisor-cta-banner">
          Talk to a Licensed Advisor — Free
        </Link>
        <p className="text-white/30 text-xs mt-3">IRDAI-licensed advisors · 100% free · No commissions</p>
      </div>
    </section>
  );
}
