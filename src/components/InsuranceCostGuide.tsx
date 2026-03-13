"use client";

const costs = [
  {
    category: "Term Insurance",
    description: "Annual premium for ₹1 Crore sum assured (Age 30, non-smoker)",
    data: [
      { label: "Standard Term Plan", range: "₹8,000 - ₹12,000" },
      { label: "Whole Life Plan", range: "₹18,000 - ₹25,000" },
      { label: "Critical Illness Add-on", range: "+ ₹2,000 - ₹5,000" },
    ],
    bg: "bg-brand-orange/5",
    color: "text-brand-orange",
  },
  {
    category: "Health Insurance",
    description: "Annual premium for ₹10 Lakh coverage (Family of 4, eldest age 35)",
    data: [
      { label: "Basic Mediclaim", range: "₹12,000 - ₹18,000" },
      { label: "Comprehensive Plan", range: "₹22,000 - ₹35,000" },
      { label: "Top-up Cover", range: "₹3,000 - ₹6,000" },
    ],
    bg: "bg-brand-green/5",
    color: "text-brand-green",
  },
  {
    category: "Motor Insurance",
    description: "Annual premium for a mid-size SUV (IDV ₹10 Lakhs)",
    data: [
      { label: "Third Party Only", range: "₹7,890 (Mandated)" },
      { label: "Comprehensive Cover", range: "₹15,000 - ₹22,000" },
      { label: "Zero Depreciation Add-on", range: "+ ₹2,500 - ₹4,000" },
    ],
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
];

export default function InsuranceCostGuide() {
  return (
    <section className="py-20 bg-white" id="cost-guide">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Insurance Cost Guide
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Get an idea of expected annual premiums for various insurance types. Plan your budget effectively for your family's protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {costs.map((section, idx) => (
            <div key={idx} className={`rounded-3xl p-8 ${section.bg} border-2 border-transparent hover:border-brand-border transition-all duration-300`}>
              <h3 className={`text-2xl font-bold ${section.color} mb-2`}>
                {section.category}
              </h3>
              <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                {section.description}
              </p>

              <div className="space-y-4">
                {section.data.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 border-b border-brand-ink/5 last:border-0">
                    <span className="text-brand-ink font-semibold">{item.label}</span>
                    <span className={`text-lg font-bold ${section.color}`}>{item.range}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-brand-beige rounded-2xl border border-brand-border/50 text-center">
          <p className="text-sm text-brand-muted italic">
            <span className="font-bold not-italic text-brand-orange mr-2">Disclaimer:</span>
            Premium ranges are approximate estimates and actual premiums depend on underwriting factors such as age, health status, vehicle model, and coverage chosen.
          </p>
        </div>
      </div>
    </section>
  );
}
