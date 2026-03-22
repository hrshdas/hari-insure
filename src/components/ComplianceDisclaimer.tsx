"use client";

export default function ComplianceDisclaimer() {
  return (
    <section className="py-12 bg-white border-t border-brand-border/50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-brand-beige/50 rounded-3xl border border-brand-border/30 border-l-4" style={{ borderLeftColor: "#16a37f" }}>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-brand-ink mb-2">Compliance & Educational Disclaimer</h4>
              <p className="text-sm text-brand-muted leading-relaxed">
                <span className="font-semibold text-brand-ink">Hari</span><span className="font-semibold text-brand-green">Insurance</span> is an educational platform designed to provide structured information about insurance products and regulations in India.
                <strong> Please note that this website does not directly sell insurance policies nor does it act as an insurance brokerage.</strong> 
                The content provided is for informational purposes only and should not be construed as professional financial advice. 
                Always compare plans and read policy documents carefully before making a purchase. 
                Insurance is a subject matter of solicitation.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-brand-muted/70">
              &copy; {new Date().getFullYear()} <strong>Hari</strong><span className="text-brand-green font-bold">Insurance</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
