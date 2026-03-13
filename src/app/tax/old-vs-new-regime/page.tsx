import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Old vs New Tax Regime — Which is Better for Insurance? — HariInsurance India",
  description: "How the choice between the old and new income tax regimes in India affects your health and life insurance deductions.",
};

export default function OldVsNewRegime() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Old vs New Tax Regime: Impact on Insurance"
          readTime="4 min read"
          pillarColor="#8b5cf6"
          breadcrumbs={[
            { label: "Tax & Money", href: "/tax" },
            { label: "Old vs New Regime", href: "/tax/old-vs-new-regime" },
          ]}
        >
          <p>The introduction of the New Tax Regime has completely changed how Indians approach insurance for tax saving. Here is the blunt truth.</p>

          <h2>The fundamental difference</h2>
          <ul>
            <li><strong>Old Tax Regime:</strong> Allows you to claim deductions for insurance premiums (80C, 80D). Tax rates are slightly higher.</li>
            <li><strong>New Tax Regime:</strong> Offers lower tax rates, but <strong>removes almost all deductions</strong>, including 80C for life insurance and 80D for health insurance.</li>
          </ul>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Should you buy insurance to save tax?</p>
            <p className="text-sm text-brand-muted">
              Never buy an insurance policy *just* to save tax — especially under the new regime where the deduction doesn&apos;t even exist! Buy insurance for protection. If it saves tax (under the old regime), treat that as a bonus.
            </p>
          </div>

          <h2>How deductions work by regime</h2>
          <table>
            <thead><tr><th>Section / Item</th><th>Old Tax Regime</th><th>New Tax Regime</th></tr></thead>
            <tbody>
              <tr><td><strong>Sec 80D</strong> (Health premium)</td><td>Allowed (Up to ₹1L)</td><td><strong className="text-red-500">Not Allowed</strong></td></tr>
              <tr><td><strong>Sec 80C</strong> (Life term premium)</td><td>Allowed (Up to ₹1.5L)</td><td><strong className="text-red-500">Not Allowed</strong></td></tr>
              <tr><td><strong>Sec 10(10D)</strong> (Death benefit payout)</td><td>Fully Tax-Free</td><td>Fully Tax-Free</td></tr>
              <tr><td>Maturity payout (Endowment/ULIP)</td><td>Tax-Free (subject to limits)</td><td>Tax-Free (subject to limits)</td></tr>
            </tbody>
          </table>

          <h2>Which regime should you choose?</h2>
          <p>
            It depends entirely on your total deductions (HRA, Home Loan Interest, 80C limits, 80D limits).
          </p>
          <p>
            <strong>Rule of thumb for a salaried employee earning ₹15 Lakhs:</strong> If your total eligible deductions exceed <strong>₹3.75 Lakhs</strong>, the Old Regime usually saves you more tax. If your deductions are lower, the New Regime is generally better.
          </p>

          <h2>What does this mean for your insurance strategy?</h2>
          <ol>
            <li>If you are on the <strong>New Tax Regime</strong>, the &quot;tax saving&quot; pitch for endowment and ULIP plans is 100% false. Avoid them.</li>
            <li>Your <strong>need</strong> for health and term insurance does not change based on tax laws. You still need a ₹10L health cover and a ₹1Cr term plan to protect your family from bankruptcy.</li>
            <li>The death benefit from a term insurance plan remains completely tax-free under Section 10(10D) regardless of which regime you choose.</li>
          </ol>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
