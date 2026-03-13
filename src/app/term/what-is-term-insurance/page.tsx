import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "What is Term Insurance? — HariInsurance India",
  description: "Plain-English explainer: what term insurance is, how it works, and why it is the purest form of life cover.",
};

export default function WhatIsTermInsurance() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="What is Term Insurance?"
          readTime="3 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "What is Term Insurance?", href: "/term/what-is-term-insurance" },
          ]}
          nextArticle={{ label: "Do I actually need it?", href: "/term/do-i-need-it" }}
        >
          <p>
            Term insurance is the purest form of life insurance. You pay a yearly premium. If you die during the policy term, your nominee receives the <strong>sum assured</strong> (the cover amount). If you survive, nothing is paid. There are no investments, no bonuses, no cash value.
          </p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">The &quot;financial replica&quot; concept</p>
            <p className="text-sm text-brand-muted">
              Think of term insurance as replacing your income-generating ability. If you earn ₹10 lakh/year and your family needs 20 more years of that income, you need approximately ₹2 crore in term cover. Your policy is a financial replica of you — it stands in for your earnings.
            </p>
          </div>

          <h2>How it works — a simple example</h2>
          <div className="example-box">
            <ul className="text-sm text-brand-muted space-y-1">
              <li>• <strong>Ravi, 30 years old</strong>, buys a ₹1 crore term plan for 30 years</li>
              <li>• <strong>Premium:</strong> ~₹8,000–12,000/year (non-smoker)</li>
              <li>• <strong>If Ravi dies at 45</strong> (during the policy): His family receives ₹1 crore, tax-free</li>
              <li>• <strong>If Ravi lives to 60</strong> (policy ends): Nothing paid. The premium was the cost of protection.</li>
            </ul>
          </div>

          <h2>Why is term insurance so cheap?</h2>
          <p>
            Because there is no investment component. 100% of the premium goes toward the pure cost of covering your death risk. Compare this to endowment or ULIP plans where 30–60% of your premium goes into investment charges and fees.
          </p>

          <h2>Key features of a good term plan</h2>
          <ul>
            <li><strong>High sum assured:</strong> At minimum 10–12× your annual income</li>
            <li><strong>Long term:</strong> Should run until at least age 65–70</li>
            <li><strong>Online purchase:</strong> Removes agent commissions, lowers premium</li>
            <li><strong>High Claim Settlement Ratio:</strong> Check IRDAI data — aim for 97%+</li>
          </ul>

          <h2>Term vs endowment vs ULIP</h2>
          <table>
            <thead><tr><th>Feature</th><th>Term</th><th>Endowment</th><th>ULIP</th></tr></thead>
            <tbody>
              <tr><td>Premium for ₹1Cr cover</td><td>₹8,000–15,000/yr</td><td>₹3–5 lakh/yr</td><td>₹1–2 lakh/yr</td></tr>
              <tr><td>Death benefit</td><td>Full sum assured</td><td>Sum assured + bonus</td><td>Higher of fund or SA</td></tr>
              <tr><td>Survival benefit</td><td>None</td><td>Maturity payout</td><td>Market-linked fund value</td></tr>
              <tr><td>Investment returns</td><td>None</td><td>4–6% (low)</td><td>Varies (market-linked)</td></tr>
              <tr><td>Ideal for</td><td>Pure protection</td><td>Not recommended</td><td>Not recommended</td></tr>
            </tbody>
          </table>

          <p>Read the full comparison: <a href="/term/vs-endowment-ulip">Why term beats endowment and ULIP →</a></p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
