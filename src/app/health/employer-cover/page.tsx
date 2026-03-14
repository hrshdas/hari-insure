import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Employer Health Insurance — Do You Need Your Own Policy? — Hari Insurance India",
  description: "My employer covers me — do I still need personal health insurance? Honest answer with the risks of relying only on group cover.",
};

export default function EmployerCover() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="My Employer Covers Me — Do I Need My Own Policy?"
          readTime="4 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Employer Cover", href: "/health/employer-cover" },
          ]}
        >
          <p>Short answer: <strong>Yes, you do.</strong> Here&apos;s why relying only on employer-provided health insurance is a significant risk.</p>

          <h2>What employer group health insurance gives you</h2>
          <ul>
            <li>Free or subsidised coverage (employer pays premium)</li>
            <li>Usually no waiting period for pre-existing diseases</li>
            <li>Often covers family members at a nominal additional cost</li>
            <li>Typically ₹2–5 lakh sum insured (sometimes more at larger companies)</li>
          </ul>

          <h2>The 5 critical problems with relying only on group cover</h2>
          <table>
            <thead><tr><th>Risk</th><th>Why it matters</th></tr></thead>
            <tbody>
              <tr><td><strong>Job loss / change</strong></td><td>Cover disappears the day you leave. No company = no insurance</td></tr>
              <tr><td><strong>Low sum insured</strong></td><td>₹3–5 lakh is insufficient for a serious illness in a metro hospital</td></tr>
              <tr><td><strong>No accumulated NCB</strong></td><td>Group cover doesn&apos;t build No Claim Bonus</td></tr>
              <tr><td><strong>No portability credit</strong></td><td>Group cover years don&apos;t count toward personal policy waiting periods</td></tr>
              <tr><td><strong>Employer can change terms</strong></td><td>Your employer can reduce coverage or change insurers anytime</td></tr>
            </tbody>
          </table>

          <h2>The right strategy: Layer your coverage</h2>
          <ol>
            <li><strong>Keep your employer cover</strong> as the first layer — it&apos;s free money you should use</li>
            <li><strong>Buy a personal policy</strong> with a higher deductible (super top-up) to cover claims above a threshold at lower premium cost</li>
            <li>Or buy a standalone personal policy from day one to start accruing NCB and serving waiting periods</li>
          </ol>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">The smart approach</p>
            <p className="text-sm text-brand-muted">Use your employer cover + personal policy together. Claims are serviced from group cover first; your personal policy handles the overflow and continues even if you change jobs.</p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
