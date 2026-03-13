import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Health Insurer Claim Settlement Ratios (2025-26) — HariInsurance India",
  description: "Latest retail health insurance claim settlement ratios extracted from IRDAI annual reports. Compare top insurers.",
};

export default function HealthCSR() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Health Insurer Claim Settlement Ratios (2025-26)"
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

          <h2>Retail / Individual Health CSR (Top Insurers)</h2>
          <p>
            <em>Data source: Compiled from IRDAI Annual Report (2025 releases) and public disclosures. We filter out Group (corporate) insurance data to show you the retail numbers that actually apply to your personal policy.</em>
          </p>

          <table>
            <thead><tr><th>Insurer</th><th>Retail CSR (%)</th><th>Claims Settled &lt;30 days</th></tr></thead>
            <tbody>
              <tr><td>HDFC Ergo</td><td>98.1%</td><td>99.2%</td></tr>
              <tr><td>Care Health</td><td>96.5%</td><td>97.8%</td></tr>
              <tr><td>Niva Bupa</td><td>95.8%</td><td>98.0%</td></tr>
              <tr><td>Star Health</td><td>94.7%</td><td>96.1%</td></tr>
              <tr><td>ICICI Lombard</td><td>94.2%</td><td>98.5%</td></tr>
              <tr><td>Aditya Birla</td><td>93.9%</td><td>96.8%</td></tr>
              <tr><td>New India Assurance (PSU)</td><td>89.4%</td><td>85.2%</td></tr>
            </tbody>
          </table>

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
