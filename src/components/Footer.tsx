import Link from "next/link";

const footerCols: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Insurance",
    links: [
      { label: "Health Insurance", href: "#plans" },
      { label: "Life Insurance", href: "#plans" },
      { label: "Car Insurance", href: "#plans" },
      { label: "Bike Insurance", href: "#plans" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "File a Claim", href: "#" },
      { label: "Track Application", href: "#" },
      { label: "Find a Partner", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "IRDAI Disclosure", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-ink border-t border-white/[0.06]" role="contentinfo">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 py-14 border-b border-white/[0.07]">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5" aria-label="Hari Insure">
              <div className="w-8 h-8 rounded-xl bg-green-gradient flex items-center justify-center shadow-green-glow/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.95"/>
                </svg>
              </div>
              <span className="text-[17px] font-bold text-white tracking-tight">
                Hari<span className="text-brand-green-mid">Insure</span>
              </span>
            </Link>
            <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-[15rem]">
              India&apos;s most trusted insurance comparison platform — helping families find the right cover since 2020.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@hariinsure.com" className="flex items-center gap-2.5 text-xs text-white/40 hover:text-white/80 transition-colors group">
                <span className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                hello@hariinsure.com
              </a>
              <a href="tel:18001234567" className="flex items-center gap-2.5 text-xs text-white/40 hover:text-white/80 transition-colors group">
                <span className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                1800-123-4567 (Toll Free)
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/35 hover:text-white/80 transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-[11px] text-white/25 text-center sm:text-left">
            © 2025 Hari Insure Pvt. Ltd. · IRDAI Reg. No. 000 · CIN: U66010MH2020PTC123456
          </p>
          <div className="flex items-center gap-1.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/35 hover:bg-brand-green hover:text-white transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
