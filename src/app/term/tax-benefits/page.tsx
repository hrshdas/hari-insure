import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Term Insurance Tax Benefits — Section 80C and 10(10D) — Hari Insurance India",
  description: "How to save tax on term insurance premiums under Section 80C and receive tax-free death benefit under Section 10(10D).",
};

export default function TermTaxBenefits() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Term Insurance Tax Benefits — Section 80C and 10(10D)"
          readTime="3 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "Tax Benefits", href: "/term/tax-benefits" },
          ]}
        >
          <p>Term insurance premiums qualify for tax deductions, and death benefits are tax-free — making term insurance one of the most tax-efficient financial products available to Indian taxpayers.</p>

          <h2>Section 80C — Premium deduction</h2>
          <p>Premiums paid for a life insurance policy (including term insurance) are deductible under <strong>Section 80C</strong> of the Income Tax Act, up to a maximum of <strong>₹1.5 lakh per year</strong>. This is under the old tax regime.</p>

          <table>
            <thead><tr><th>Condition</th><th>Deduction Limit</th></tr></thead>
            <tbody>
              <tr><td>Policy issued after April 2012</td><td>Premium up to 10% of sum assured is deductible</td></tr>
              <tr><td>Policy for disabled person (Sec 80U)</td><td>Premium up to 15% of sum assured</td></tr>
              <tr><td>Overall 80C limit</td><td>₹1.5 lakh (combined with PF, ELSS, etc.)</td></tr>
            </tbody>
          </table>

          <h2>Section 10(10D) — Tax-free death benefit</h2>
          <p>The death benefit (sum assured) received by your nominee is <strong>completely tax-free</strong> under Section 10(10D). There is no upper limit on this tax exemption for death claims.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">New Tax Regime Note</p>
            <p className="text-sm text-brand-muted">Under the New Tax Regime (applicable from FY 2023–24 onwards as default), Section 80C deductions are NOT available. However, the death benefit under 10(10D) remains tax-free regardless of which regime you choose.</p>
          </div>

          <h2>GST on term insurance premiums</h2>
          <p>Term insurance premiums attract <strong>18% GST</strong>. This is added to your premium and is not deductible under 80C.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
