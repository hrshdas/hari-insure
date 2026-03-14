"use client";

const trustItems = [
  {
    title: "IRDAI Regulated",
    description: "Hari Insurance operates under strict guidelines set by the Insurance Regulatory and Development Authority of India (IRDAI), ensuring your interests are always protected.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "CSR Importance",
    description: "We help you choose insurers with high Claim Settlement Ratios, ensuring that the promise of a claim payout is honored when you need it most.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8l-4 4-4-4" />
        <path d="M12 12v8" />
      </svg>
    ),
  },
  {
    title: "Consumer Protection",
    description: "Our platform provides ombudsman support and grievance redressal guidance, standing by you through the entire lifecycle of your policy.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function RegulatoryTrust() {
  return (
    <section className="py-16 bg-brand-ink text-white overflow-hidden relative" id="trust">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Trust is Our Anchor</h2>
          <p className="text-white/70 text-lg">
            We operate with complete transparency and adhere to the highest regulatory standards in the Indian insurance industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-green/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
