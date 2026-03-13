import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Section 80D — Tax Benefit on Health Insurance — HariInsurance India",
  description: "How Section 80D works in India: limits, examples, senior parent rules, and how to maximise your health insurance tax deduction.",
};

export default function TaxBenefit80D() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Section 80D — Save Tax on Health Insurance Premiums"
          readTime="4 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Section 80D Tax Benefit", href: "/health/80d-tax-benefit" },
          ]}
        >
          <p>
            Section 80D allows you to <strong>deduct health insurance premiums from your taxable income</strong> — reducing your tax liability. It applies under the <strong>old tax regime</strong> (not available if you opt for the new tax regime).
          </p>

          <h2>80D deduction limits</h2>
          <table>
            <thead><tr><th>Who you&apos;re covering</th><th>Deduction limit</th></tr></thead>
            <tbody>
              <tr><td>Self, spouse, children (all below 60)</td><td>Up to ₹25,000/year</td></tr>
              <tr><td>Self, spouse, children (you or spouse is 60+)</td><td>Up to ₹50,000/year</td></tr>
              <tr><td>Parents (below 60 years)</td><td>Additional ₹25,000/year</td></tr>
              <tr><td>Parents (60 years or above)</td><td>Additional ₹50,000/year</td></tr>
              <tr><td><strong>Maximum total deduction possible</strong></td><td><strong>₹1,00,000/year</strong></td></tr>
            </tbody>
          </table>

          <h2>Real example</h2>
          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-2">Scenario: Rohit, 34 years old, old tax regime</p>
            <ul className="text-sm text-brand-muted space-y-1">
              <li>• Premium for self + spouse + child: ₹18,000/year → Deduction: ₹18,000</li>
              <li>• Premium for parents (both 65 years): ₹42,000/year → Deduction: ₹42,000</li>
              <li>• <strong>Total deduction: ₹60,000</strong></li>
              <li>• Tax saved at 30% slab: <strong>₹18,000/year</strong></li>
            </ul>
          </div>

          <h2>Preventive health check-up</h2>
          <p>
            Within the overall 80D limit, up to <strong>₹5,000</strong> per year spent on preventive health check-ups (for self, spouse, children, or parents) can be claimed as deduction. Payment can be in cash (unlike premiums, which must be non-cash).
          </p>

          <h2>Key rules</h2>
          <ul>
            <li>Premium must be paid by non-cash methods (cheque, UPI, net banking, card)</li>
            <li>Only available under the <strong>old tax regime</strong></li>
            <li>Premium paid for parents can be claimed even if they file their own tax returns</li>
            <li>Group health insurance premium paid by employer — you cannot claim deduction on this</li>
          </ul>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Old vs new tax regime?</p>
            <p className="text-sm text-brand-muted">
              Read our detailed comparison: <a href="/tax/old-vs-new-regime">Old regime vs new regime — which lets you claim insurance deductions?</a>
            </p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
