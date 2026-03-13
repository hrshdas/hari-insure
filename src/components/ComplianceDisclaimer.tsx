"use client";

export default function ComplianceDisclaimer() {
  return (
    <section className="py-12 bg-white border-t border-brand-border/50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-brand-beige/50 rounded-3xl border border-brand-border/30">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-brand-orange shadow-sm border border-brand-orange/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-brand-ink mb-2">Compliance & Educational Disclaimer</h4>
              <p className="text-sm text-brand-muted leading-relaxed">
                Hari Insure is an educational platform designed to provide structured information about insurance products and regulations in India. 
                <strong> Please note that this website does not directly sell insurance policies nor does it act as an insurance brokerage.</strong> 
                The content provided is for informational purposes only and should not be construed as professional financial advice. 
                Always compare plans and read policy documents carefully before making a purchase. 
                Insurance is a subject matter of solicitation.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-brand-muted/70">
              &copy; {new Date().getFullYear()} Hari Insure. All rights reserved. | Licensed Information Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
