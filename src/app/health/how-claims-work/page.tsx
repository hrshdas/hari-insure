import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "How Does the Health Insurance Claim Process Work? — HariInsurance India",
  description: "Step-by-step guide to the health insurance claim process in India — cashless and reimbursement claims explained.",
};

export default function HowClaimsWork() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="How Does the Health Insurance Claim Process Work?"
          readTime="4 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "How claims work", href: "/health/how-claims-work" },
          ]}
          prevArticle={{ label: "Why do I need it?", href: "/health/why-do-i-need-it" }}
          nextArticle={{ label: "Learn the concepts", href: "/health/concepts" }}
        >
          <p>
            Understanding how claims work <em>before</em> you need to file one is the difference between a smooth experience and a nightmare. There are two types of claims: <strong>cashless</strong> and <strong>reimbursement</strong>.
          </p>

          <h2>Type 1: Cashless Claims (the preferred route)</h2>
          <p>This only works at hospitals in your insurer&apos;s network. Call the number on your policy card to find network hospitals near you.</p>

          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-2">Step-by-step: Cashless claim</p>
            <ol className="text-sm text-brand-muted space-y-2">
              <li><strong>1. Go to a network hospital</strong> — With your health card and photo ID.</li>
              <li><strong>2. Inform the insurance desk</strong> — Every large hospital has one. Show your policy card.</li>
              <li><strong>3. Hospital sends pre-authorisation request</strong> — To your insurer&apos;s TPA (Third Party Administrator).</li>
              <li><strong>4. TPA approves (usually 2–4 hours)</strong> — They approve a certain amount. Sometimes they ask for more documents.</li>
              <li><strong>5. Treatment proceeds</strong> — The hospital treats you without payment upfront.</li>
              <li><strong>6. Discharge</strong> — Insurer pays the hospital directly. You pay only deductibles, co-payments, or amounts exceeding the sum insured.</li>
            </ol>
          </div>

          <h2>Type 2: Reimbursement Claims</h2>
          <p>Used when you go to a non-network hospital, or when cashless is denied.</p>

          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-2">Step-by-step: Reimbursement claim</p>
            <ol className="text-sm text-brand-muted space-y-2">
              <li><strong>1. Get hospitalised and pay the bill</strong></li>
              <li><strong>2. Collect ALL documents</strong> — Discharge summary, all bills (itemised), investigation reports, prescription slips, pharmacy bills, doctor&apos;s notes</li>
              <li><strong>3. Intimate the insurer within 24–48 hours</strong> of admission (most policies require this)</li>
              <li><strong>4. Submit claim within 15–30 days</strong> of discharge (check your policy)</li>
              <li><strong>5. Insurer reviews</strong> — They may ask for additional documents (this is normal)</li>
              <li><strong>6. Settlement</strong> — Amount credited to your bank account, usually within 30 days of complete documentation</li>
            </ol>
          </div>

          <h2>What is a TPA?</h2>
          <p>
            A <strong>Third Party Administrator (TPA)</strong> is a company that manages claims on behalf of the insurer. They verify documents, approve cashless requests, and process reimbursements. Some insurers handle claims in-house without a TPA — this is often faster.
          </p>

          <h2>Common reasons claims get delayed or rejected</h2>
          <ul>
            <li><strong>Missing documents</strong> — Always collect the full discharge summary and itemised bill</li>
            <li><strong>Late intimation</strong> — You must inform the insurer within 24–48 hours of admission</li>
            <li><strong>Treatment during waiting period</strong> — Pre-existing or named ailment treated before waiting period ends</li>
            <li><strong>Non-disclosure</strong> — If you didn&apos;t disclose a pre-existing condition at time of buying</li>
            <li><strong>Room rent upgrade</strong> — If you took a higher-category room than your policy allows, the insurer applies a proportional deduction on the <em>entire</em> bill</li>
          </ul>

          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">💡 Pro tip: Always intimate first, then arrange documents</p>
            <p className="text-sm text-brand-muted">
              Calling your insurer within 24 hours of admission is the single most important step. Missing this alone can result in claim rejection even if the hospitalization is completely covered.
            </p>
          </div>

          <h2>If your claim is rejected</h2>
          <p>
            Don&apos;t accept the first rejection. You have multiple escalation options — internal grievance, IRDAI IGMS portal, and the Insurance Ombudsman (free, no lawyer needed). See our <a href="/health/claim-rejected">step-by-step guide to dealing with rejected claims</a>.
          </p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
