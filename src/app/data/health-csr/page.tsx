import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Life & Health Insurance Claim Data (FY 2023-24) — IRDAI Official — Hari Insurance India",
  description: "Latest retail health insurance claim settlement ratios extracted from IRDAI annual reports. Compare top insurers.",
};

export default function HealthCSR() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Life & Health Insurance Claim Data (FY 2023-24) — IRDAI Official"
          readTime="4 min read"
          pillarColor="#0d3d35"
          breadcrumbs={[
            { label: "Data & Comparisons", href: "/data" },
            { label: "Health CSR Data", href: "/data/health-csr" },
          ]}
        >
          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">Important note on CSR in Health Insurance</p>
            <p className="text-sm text-brand-muted">
              Unlike Life Insurance, Health Insurance CSR is calculated <strong>by volume of claims</strong> (number of claims), not by value (amount). A 90% CSR means out of 100 claims filed, 90 were paid. It does <em>not</em> mean 90% of the entire hospital bill was paid.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl mb-8 border border-green-100">
            <h3 className="font-bold mb-4">Data source</h3>
            <p className="mb-2">Source: IRDAI Handbook on Indian Insurance Statistics 2023-24, released March 2025.</p>
            <p className="mb-2">Source: IRDAI Annual Report 2023-24.</p>
            <p>Verify at: irdai.gov.in/web/irdai/annual-reports</p>
          </div>

          <h2>TABLE 1 — Life Insurance: Individual Death Claims CSR (FY 2023-24)</h2>
          <table>
            <thead>
              <tr>
                <th>Insurer</th>
                <th>Individual Death Claim CSR</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Bandhan Life Insurance</td><td>99.66%</td><td>Private</td></tr>
              <tr><td>Axis Max Life Insurance</td><td>99.65%</td><td>Private</td></tr>
              <tr><td>HDFC Life Insurance</td><td>99.50%</td><td>Private</td></tr>
              <tr><td>Tata AIA Life Insurance</td><td>99.13%</td><td>Private</td></tr>
              <tr><td>Life Insurance Corporation (LIC)</td><td>98.60%*</td><td>Public (Govt.)</td></tr>
              <tr><td>Private insurers combined</td><td>99.00%</td><td>All Private</td></tr>
              <tr><td>Overall industry (Life)</td><td>96.82%</td><td>Combined</td></tr>
            </tbody>
          </table>
          <p className="text-sm italic mb-8">*LIC figure includes group and individual claims combined. Source: IRDAI Annual Report 2023-24.</p>

          <h2>TABLE 2 — General/Health Insurance: Incurred Claims Ratio (ICR) FY 2023-24</h2>
          <table className="mb-8">
            <thead>
              <tr>
                <th>Segment</th>
                <th>ICR (%)</th>
                <th>What This Means</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Public sector general insurers</td><td>97.23%</td><td>Paying out most premiums as claims</td></tr>
              <tr><td>Private sector general insurers</td><td>76.49%</td><td>More balanced</td></tr>
              <tr><td>Standalone health insurers</td><td>63.63%</td><td>Lower — includes cost structure</td></tr>
              <tr><td>Industry overall (General)</td><td>82.52%</td><td>Combined average</td></tr>
            </tbody>
          </table>

          <div className="bg-blue-50 p-6 rounded-xl mb-12 border border-blue-100 text-brand-ink">
            <p className="mb-4">
              Why we do not show retail vs group health CSR separately: IRDAI does not publish health insurer CSR as a retail/group split in the format previously shown on this page. The previous table on this page contained figures not sourced from any IRDAI publication and has been replaced.
            </p>
            <p className="mb-4">
              Why the &quot;Claims Settled under 30 days&quot; column is gone: This metric is not published per-insurer by IRDAI. IRDAI mandates that all insurers must settle claims within 30 days of receiving complete documents — this is a regulatory requirement, not a published per-insurer metric.
            </p>
            <p>
              For the most current insurer-specific data, visit irdai.gov.in directly.
            </p>
          </div>

          <h2>The 3 Metrics You Must Actually Check</h2>
          <p>CSR is heavily manipulated in marketing. Check these three instead:</p>
          <ol>
            <li><strong>Retail CSR vs Group CSR:</strong> Many insurers boast a 99% overall CSR because massive corporate claims (which are heavily negotiated and rarely rejected) artificially inflate their numbers. The retail individual CSR is often 4-5% lower.</li>
            <li><strong>Claims Settled &lt; 30 Days:</strong> An insurer might eventually pay your claim after a 6-month fight and an ombudsman order. That still counts as a &quot;Settled Claim&quot; in the CSR metric. The <em>speed</em> of settlement is crucial.</li>
            <li><strong>Incurred Claim Ratio (ICR):</strong> This shows financial health. An ICR above 100% means they are paying out more in claims than they collect in premiums (bad, signifies steep premium hikes coming). An ICR below 50% means they are denying too many claims or charging too much (also bad). The sweet spot is 70% to 90%.</li>
          </ol>

          <p>Read more: <a href="/data/icr">Understanding the Incurred Claim Ratio (ICR) →</a></p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
