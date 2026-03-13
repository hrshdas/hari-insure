import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Term Insurance for Salaried Employees — HariInsurance India",
  description: "How to choose the right term plan as a salaried employee — cover amount, EPF consideration, and employer insurance gaps.",
};

export default function TermSalaried() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Buying Term Insurance as a Salaried Employee"
          readTime="4 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "For Salaried", href: "/term/salaried" },
          ]}
          nextArticle={{ label: "For self-employed", href: "/term/self-employed" }}
        >
          <p>Most salaried employees assume their employer-provided group life cover is sufficient. It almost never is.</p>

          <h2>The problem with employer group life cover</h2>
          <ul>
            <li>Typically only <strong>3–5× annual salary</strong> — far below the recommended 10–15×</li>
            <li>Cover ends the day you leave the job — no continuity</li>
            <li>Cannot be converted to individual cover without medical underwriting</li>
          </ul>

          <h2>How much cover do you need?</h2>
          <p>Calculate your Human Life Value (HLV): <strong>Annual income × years to retirement × 10–12</strong>. Also add any outstanding loans. The total is your minimum cover requirement.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Consider your EPF</p>
            <p className="text-sm text-brand-muted">Your EPF corpus provides some base financial security. You may deduct the current EPF balance from your total cover requirement, but do not over-rely on it.</p>
          </div>

          <h2>Best time to buy</h2>
          <p>As early as possible. Premiums are cheapest in your 20s and 30s. A 25-year-old pays roughly 40% less premium than a 35-year-old for the same cover. Lock in low premiums while you are healthy.</p>

          <h2>Key features to look for</h2>
          <ul>
            <li>Cover until at least age 65 (retirement age)</li>
            <li>Claim Settlement Ratio above 97%</li>
            <li>Online purchase (lower premium vs agent-sold)</li>
            <li>Critical illness rider (optional but useful)</li>
          </ul>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
