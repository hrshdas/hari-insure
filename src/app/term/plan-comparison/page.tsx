import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Top Term Plans Comparison 2026 — HariInsurance India",
  description: "Objective comparison of India's top term insurance plans in 2026 — CSR, features, and pricing.",
};

export default function TermPlanComparison() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Top Term Insurance Plans — Comparison 2026"
          readTime="5 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "Plan Comparison", href: "/term/plan-comparison" },
          ]}
        >
          <p>
            We have compared the most popular term insurance plans available in India in 2026, focusing on claim settlement ratio (CSR), solvency ratio, premium pricing, and key features.
          </p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">🔎 How we shortlisted these plans</p>
            <p className="text-sm text-brand-muted">Plans are selected based on CSR above 97%, good solvency ratio, and online availability. Premiums shown are indicative for a 30-year-old, non-smoker male buying ₹1 Cr cover for 30 years.</p>
          </div>

          <table>
            <thead>
              <tr><th>Plan</th><th>CSR (2023–24)</th><th>Approx Premium/yr</th><th>Standout Feature</th></tr>
            </thead>
            <tbody>
              <tr><td>LIC New Jeevan Amar</td><td>98.8%</td><td>₹18,000–22,000</td><td>Government backing, highest trust</td></tr>
              <tr><td>HDFC Life Click2Protect Super</td><td>99.2%</td><td>₹13,000–16,000</td><td>Return of premium, flexible payout</td></tr>
              <tr><td>ICICI Pru iProtect Smart</td><td>97.9%</td><td>₹12,000–15,000</td><td>Terminal illness cover, CI rider</td></tr>
              <tr><td>Max Life Smart Secure Plus</td><td>99.5%</td><td>₹11,000–14,000</td><td>Highest CSR, waiver of premium</td></tr>
              <tr><td>Tata AIA Sampoorna Raksha</td><td>99.0%</td><td>₹10,000–13,000</td><td>Competitive pricing, strong brand</td></tr>
            </tbody>
          </table>

          <h2>What to prioritise</h2>
          <ol>
            <li><strong>CSR above 97%</strong> — this is the non-negotiable starting filter</li>
            <li><strong>Online plan</strong> — lower premium vs branch or agent-bought</li>
            <li><strong>Cover until 65–70</strong> — do not buy a policy that ends at 60</li>
            <li><strong>Waiver of premium rider</strong> — premiums waived on critical illness or disability</li>
          </ol>

          <p className="text-sm text-brand-muted italic">All data is approximate and for educational purposes. Verify current premiums and CSR directly with the insurer before purchasing.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
