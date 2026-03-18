import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Health Insurance Plan Comparison 2026 — Hari Insurance India",
  description: "Feature-by-feature comparison of top health insurance plans in India 2026 — educational and unbiased.",
};

export default function PlanComparison() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Health Insurance Feature Comparison: Top Plans 2026"
          readTime="6 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Plan Comparison 2026", href: "/health/plan-comparison" },
          ]}
        >
          <p>
            This is an <strong>educational comparison</strong> — not a sales ranking. We compare key features that matter at claim time. Prices are indicative for a healthy 35-year-old individual.
          </p>

          <div className="callout mb-6">
            <p className="text-sm text-brand-muted">
              <em>Source for all data below: Published policy documents and Key Information Sheets. Last reviewed: March 2026. Always verify with the insurer before purchasing.</em>
            </p>
          </div>

          <h2>Feature comparison — Top health plans 2026</h2>
          <div className="overflow-x-auto mb-6 rounded-xl border border-gray-200">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-brand-ink text-white">
                  <th className="p-3 border-r border-white/20">Feature</th>
                  <th className="p-3 border-r border-white/20">HDFC ERGO Optima<br/>Secure</th>
                  <th className="p-3 border-r border-white/20">Care Supreme<br/>(Reg:148)</th>
                  <th className="p-3 border-r border-white/20">Niva Bupa Reassure<br/>2.0</th>
                  <th className="p-3">ICICI Lombard Health<br/>Elite (Reg:115)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b"><td className="p-3 font-semibold border-r">Room Rent</td><td className="p-3 border-r">No restriction</td><td className="p-3 border-r">No restriction</td><td className="p-3 border-r">No restriction</td><td className="p-3">Tier-based</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-3 font-semibold border-r">Co-Payment</td><td className="p-3 border-r">None</td><td className="p-3 border-r">None (zone applies)</td><td className="p-3 border-r">None</td><td className="p-3">None</td></tr>
                <tr className="border-b"><td className="p-3 font-semibold border-r">PED Waiting</td><td className="p-3 border-r">36 months</td><td className="p-3 border-r">48 months (verify)</td><td className="p-3 border-r">36 months</td><td className="p-3">24 months</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-3 font-semibold border-r">Disease Sub-Limits</td><td className="p-3 border-r">None</td><td className="p-3 border-r">None</td><td className="p-3 border-r">None</td><td className="p-3">None</td></tr>
                <tr className="border-b"><td className="p-3 font-semibold border-r">Restoration</td><td className="p-3 border-r">Unlimited</td><td className="p-3 border-r">Unlimited auto-recharge</td><td className="p-3 border-r">Unlimited</td><td className="p-3">Unlimited reset</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-3 font-semibold border-r">NCB</td><td className="p-3 border-r">50%/yr max 100%</td><td className="p-3 border-r">50%/yr max 100%</td><td className="p-3 border-r">Up to 200%</td><td className="p-3">Up to 200%</td></tr>
                <tr className="border-b"><td className="p-3 font-semibold border-r">AYUSH</td><td className="p-3 border-r">Full sum insured</td><td className="p-3 border-r">Full sum insured</td><td className="p-3 border-r">Full sum insured</td><td className="p-3">Full sum insured</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-3 font-semibold border-r">Pre-hospitalisation</td><td className="p-3 border-r">60 days</td><td className="p-3 border-r">60 days</td><td className="p-3 border-r">60 days</td><td className="p-3">60 days</td></tr>
                <tr className="border-b"><td className="p-3 font-semibold border-r">Post-hospitalisation</td><td className="p-3 border-r">180 days</td><td className="p-3 border-r">180 days</td><td className="p-3 border-r">180 days</td><td className="p-3">90 days</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-3 font-semibold border-r">Air Ambulance</td><td className="p-3 border-r">Yes</td><td className="p-3 border-r">Up to Rs.5 lakh</td><td className="p-3 border-r">Yes</td><td className="p-3">Yes</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 text-brand-ink text-sm">
            <strong>Disclaimer:</strong> This is a feature-level educational comparison based on publicly available policy documents. Hari Insurance does not sell any of these plans and is not affiliated with any of these insurers. Features and premiums change. Always verify with the insurer&apos;s current policy document or a licensed advisor before purchasing.
          </div>

          <h2>Health insurance cost guide</h2>
          <p>Want to understand what health insurance typically costs across different ages and sum insured levels? See our <a href="/health/cost-guide">Health Insurance Cost Guide →</a></p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
