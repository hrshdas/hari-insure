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

          <div className="callout">
            <p className="text-xs text-brand-muted"><strong>Disclaimer:</strong> Features and premiums change frequently. Always verify with the insurer&apos;s current policy document. Last updated: March 2026.</p>
          </div>

          <h2>Feature comparison — Top health plans 2026</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ minWidth: "640px" }}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Plan A (Budget)</th>
                  <th>Plan B (Mid-range)</th>
                  <th>Plan C (Comprehensive)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Sum insured</strong></td><td>₹5L – ₹10L</td><td>₹10L – ₹25L</td><td>₹10L – ₹3Cr</td></tr>
                <tr><td><strong>Room rent limit</strong></td><td>1% of SI/day</td><td>Single AC room</td><td>No limit</td></tr>
                <tr><td><strong>Co-payment</strong></td><td>20% (age 61+)</td><td>None</td><td>None</td></tr>
                <tr><td><strong>Pre-existing waiting</strong></td><td>4 years</td><td>3 years</td><td>3 years (2 yr add-on)</td></tr>
                <tr><td><strong>Restoration</strong></td><td>Once/year</td><td>Unlimited</td><td>Unlimited, any illness</td></tr>
                <tr><td><strong>Day care procedures</strong></td><td>300+</td><td>500+</td><td>All day care</td></tr>
                <tr><td><strong>Disease sub-limits</strong></td><td>Yes (some)</td><td>None</td><td>None</td></tr>
                <tr><td><strong>NCB</strong></td><td>10%/year, max 50%</td><td>25%/year, max 100%</td><td>50%/year, no cap</td></tr>
                <tr><td><strong>Maternity</strong></td><td>Not available</td><td>Optional add-on</td><td>Included (3yr wait)</td></tr>
                <tr><td><strong>OPD</strong></td><td>No</td><td>Optional add-on</td><td>Included</td></tr>
                <tr><td><strong>Network hospitals</strong></td><td>7,000+</td><td>10,000+</td><td>12,000+</td></tr>
                <tr><td><strong>Indicative premium (₹10L)</strong></td><td>₹7,000 – ₹9,000</td><td>₹10,000 – ₹14,000</td><td>₹14,000 – ₹20,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2>How to read this table</h2>
          <p>
            The &apos;budget&apos; plan costs less but has meaningful restrictions at claim time (room rent cap, co-pay for seniors, sub-limits). The &apos;comprehensive&apos; plan costs 2× more but gives far better coverage when it matters. The &apos;mid-range&apos; plan is often the sweet spot for most people.
          </p>

          <h2>What about the actual plan names?</h2>
          <p>
            We deliberately avoid naming specific plans because features change with policy updates. Use our <a href="/health/buying-checklist">12-point checklist</a> to evaluate any specific plan against these benchmarks. Talk to our advisors for personalised recommendation.
          </p>

          <h2>Health insurance cost guide</h2>
          <p>Want to understand what health insurance typically costs across different ages and sum insured levels? See our <a href="/health/cost-guide">Health Insurance Cost Guide →</a></p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
