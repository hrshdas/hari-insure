import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "How to Port Health Insurance Without Losing Waiting Period Credit — HariInsurance India",
  description: "Complete guide to porting health insurance in India — IRDAI rules, how to keep waiting period credit, and when to port.",
};

export default function PortingGuide() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="How to Port Your Health Insurance (Without Losing Waiting Period Credit)"
          readTime="5 min read"
          pillarColor="#ef4444"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Porting Guide", href: "/health/porting-guide" },
          ]}
          prevArticle={{ label: "Claim rejected?", href: "/health/claim-rejected" }}
          nextArticle={{ label: "Insurance Ombudsman", href: "/health/ombudsman" }}
        >
          <p>
            If your current health insurer is giving you trouble, is expensive, or offers poor service, you can switch — without losing the waiting period credit you&apos;ve accumulated. This is called <strong>portability</strong>.
          </p>

          <h2>What portability preserves</h2>
          <ul>
            <li>✅ <strong>Waiting period credit</strong> — Years already served transfer to the new insurer</li>
            <li>✅ <strong>Continuity of coverage</strong> — No gap in insurance during the transition</li>
            <li>✅ <strong>Sum insured continuity</strong> — You can port at the same or higher sum insured</li>
          </ul>

          <h2>When should you port?</h2>
          <ul>
            <li>Claim was rejected unfairly by your current insurer</li>
            <li>Premium increased significantly at renewal</li>
            <li>New insurer offers better features (no room rent limit, better NCB etc.)</li>
            <li>Your insurer has poor network hospitals in your city</li>
          </ul>

          <h2>IRDAI portability rules</h2>
          <table>
            <thead><tr><th>Rule</th><th>Detail</th></tr></thead>
            <tbody>
              <tr><td>Apply <strong>before</strong></td><td>At least 45 days before your renewal date</td></tr>
              <tr><td>New insurer&apos;s obligation</td><td>Must consider your application; can only reject on underwriting grounds</td></tr>
              <tr><td>Waiting period credit</td><td>Years served with old insurer count toward new insurer&apos;s waiting periods</td></tr>
              <tr><td>Sum insured</td><td>Can port at same or higher; excess over current SI has fresh waiting period</td></tr>
            </tbody>
          </table>

          <h2>Step-by-step porting process</h2>
          <ol>
            <li>Identify the new insurer and plan you want to port to</li>
            <li>Apply to the new insurer at least <strong>45 days before your renewal date</strong></li>
            <li>Fill the portability form with your existing policy details</li>
            <li>New insurer submits request to IRDAI&apos;s PVSD portal</li>
            <li>Current insurer must share your policy data within 7 days</li>
            <li>New insurer reviews and accepts (usually within 15 days of receiving data)</li>
            <li>New policy starts from your renewal date — no gap in coverage</li>
          </ol>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Important timing note</p>
            <p className="text-sm text-brand-muted">If you miss the 45-day window, you&apos;ll have to renew with your current insurer for another year before porting. Mark your renewal date and start the process 60 days early.</p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
