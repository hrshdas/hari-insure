import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white py-16 border-t border-brand-green/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-b border-white/[0.07] pb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 pb-1" aria-label="Hari Insurance India">
              <span className="text-2xl font-bold font-outfit tracking-tight">
                <span className="text-white">Hari</span><span className="text-brand-green">Insurance</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              India&apos;s most unbiased insurance education platform. We don&apos;t spam, we don&apos;t push junk policies, and we believe protecting your family should be simple.
            </p>
          </div>

          <div>
            <h4 className="text-white/60 font-semibold mb-5 font-outfit uppercase tracking-wider text-xs">Pillars</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/40 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/health" className="text-white/40 hover:text-white transition-colors text-sm">Health Insurance</Link></li>
              <li><Link href="/term" className="text-white/40 hover:text-white transition-colors text-sm">Term & Life</Link></li>
              <li><Link href="/motor" className="text-white/40 hover:text-white transition-colors text-sm">Motor Insurance</Link></li>
              <li><Link href="/tax" className="text-white/40 hover:text-white transition-colors text-sm">Tax & Money</Link></li>
              <li><Link href="/problems" className="text-white/40 hover:text-white transition-colors text-sm">Help</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-semibold mb-5 font-outfit uppercase tracking-wider text-xs">Tools & Data</h4>
            <ul className="space-y-3">
              <li><Link href="/data" className="text-white/40 hover:text-white transition-colors text-sm">Data Dashboard</Link></li>
              <li><Link href="/data/health-csr" className="text-white/40 hover:text-white transition-colors text-sm">Compare CSR</Link></li>
              <li><Link href="/glossary" className="text-white/40 hover:text-white transition-colors text-sm">Insurance Glossary</Link></li>
              <li><Link href="/health/buying-checklist" className="text-white/40 hover:text-white transition-colors text-sm">7-Point Checklist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-semibold mb-5 font-outfit uppercase tracking-wider text-xs">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/40 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/talk-to-advisor" className="text-brand-green hover:text-white transition-colors font-medium text-sm">Talk to a Licensed Advisor</Link></li>
              <li><span className="text-white/40 text-sm block mt-2">hello@hariinsurance.in</span></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} <span className="text-white/50">Hari</span><span className="text-brand-green/60">Insurance</span> India. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Insurance is the subject matter of solicitation. Please read policy documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}
