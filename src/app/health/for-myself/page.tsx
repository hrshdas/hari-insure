import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Buying Health Insurance for Myself — Hari Insurance India",
  description: "Complete guide to buying individual health insurance in India — what to look for, what to avoid, ideal sum insured.",
};

export default function ForMyself() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Buying Health Insurance: For Myself Only"
          readTime="5 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "For Myself", href: "/health/for-myself" },
          ]}
          nextArticle={{ label: "I'm buying for my family", href: "/health/for-family" }}
        >
          <p>
            Buying your first individual health insurance plan is one of the best financial decisions you can make. Here&apos;s exactly what to look for.
          </p>

          <h2>How much cover do you need?</h2>
          <p>
            The old thumb rule of ₹3–5 lakh is outdated. A single serious illness at a private hospital in a metro can easily cost ₹8–15 lakh. The recommended minimum:
          </p>
          <table>
            <thead><tr><th>City tier</th><th>Minimum sum insured</th><th>Ideal</th></tr></thead>
            <tbody>
              <tr><td>Metro (Mumbai, Delhi, Bengaluru)</td><td>₹10 lakh</td><td>₹15–25 lakh</td></tr>
              <tr><td>Tier 2 cities</td><td>₹5 lakh</td><td>₹10 lakh</td></tr>
              <tr><td>Tier 3 / small towns</td><td>₹3 lakh</td><td>₹5–10 lakh</td></tr>
            </tbody>
          </table>

          <h2>Non-negotiable features for an individual plan</h2>
          <ul>
            <li>✅ <strong>No room rent limit</strong> or single private AC room allowed</li>
            <li>✅ <strong>No co-payment</strong> (especially important if you&apos;re under 60)</li>
            <li>✅ <strong>No disease sub-limits</strong></li>
            <li>✅ <strong>Restoration benefit</strong> — at least once per year</li>
            <li>✅ <strong>Pre and post-hospitalisation</strong> — at least 60/90 days</li>
            <li>✅ <strong>Day care procedures</strong> — at least 300+ listed</li>
            <li>✅ <strong>Lifetime renewability</strong> — no age at which the policy can be cancelled</li>
            <li>✅ <strong>No Claim Bonus</strong> — at least 10% per year</li>
          </ul>

          <h2>Optional but valuable features</h2>
          <ul>
            <li>OPD coverage (doctor visits without hospitalisation)</li>
            <li>Mental health cover (IRDAI has mandated this, but check)</li>
            <li>Inflation protection / super top-up options</li>
            <li>Maternity cover (2–4 year waiting period, plan ahead)</li>
          </ul>

          <h2>What about the premium?</h2>
          <p>
            For a healthy 25–35 year old, a ₹10 lakh individual plan from a reputable insurer costs ₹7,000–14,000/year. Don&apos;t optimise for the cheapest premium — optimise for the best features at a reasonable price.
          </p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Key rule</p>
            <p className="text-sm text-brand-muted">
              A plan that charges ₹3,000 less per year but has a 20% co-pay will cost you ₹60,000 more on a ₹3 lakh claim. Always calculate the effective cost at claim time, not just the premium.
            </p>
          </div>

          <h2>Which insurer should I choose?</h2>
          <p>
            Check the <a href="/data/claim-settlement-ratio">Claim Settlement Ratio (CSR)</a> from IRDAI&apos;s annual report. Look for health insurers with CSR above 90% for retail policies. Also check the number of network hospitals in your city.
          </p>

          <h2>Next steps</h2>
          <ul>
            <li>Use our <a href="/health/buying-checklist">12-point buying checklist</a> before you purchase</li>
            <li>Compare top plans at <a href="/health/plan-comparison">our comparison table</a></li>
            <li>Understand your <a href="/health/80d-tax-benefit">Section 80D tax benefit</a></li>
          </ul>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
