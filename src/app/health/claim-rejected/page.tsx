import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "My Health Insurance Claim Was Rejected — What Now? — HariInsurance India",
  description: "Step-by-step guide to fighting a rejected health insurance claim in India — internal escalation, IRDAI IGMS, and Insurance Ombudsman.",
};

export default function ClaimRejected() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="My Health Insurance Claim Was Rejected — What Do I Do?"
          readTime="6 min read"
          pillarColor="#ef4444"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Claim Rejected", href: "/health/claim-rejected" },
          ]}
          nextArticle={{ label: "Insurance Ombudsman guide", href: "/health/ombudsman" }}
        >
          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">Don&apos;t accept the first rejection</p>
            <p className="text-sm text-brand-muted">A rejection letter is not the end. You have at least 3 levels of escalation — and they work. IRDAI data shows many rejected claims are reversed at the ombudsman stage.</p>
          </div>

          <h2>Step 1: Understand why your claim was rejected</h2>
          <p>The rejection letter must state a reason. Common reasons:</p>
          <ul>
            <li>Non-disclosure of pre-existing disease</li>
            <li>Treatment during waiting period</li>
            <li>Missing documents</li>
            <li>Policy not active / lapsed</li>
            <li>Treatment not covered under policy terms</li>
            <li>Late intimation of hospitalisation</li>
          </ul>
          <p>If the reason is documents — simply supply the missing documents and resubmit. If the reason is a policy interpretation dispute — escalate.</p>

          <h2>Step 2: Escalate within the insurer</h2>
          <p>
            Write a formal complaint to the insurer&apos;s <strong>Grievance Redressal Officer (GRO)</strong>. Every insurer is required by IRDAI to have one. Send by email (for a paper trail). The insurer must respond within <strong>15 days</strong>.
          </p>
          <p>Find the GRO contact on the insurer&apos;s website (look for &quot;Grievance&quot; or &quot;Complaints&quot; section).</p>

          <h2>Step 3: File a complaint on IRDAI&apos;s IGMS portal</h2>
          <p>
            If the insurer hasn&apos;t resolved your issue within 15 days, file on the <strong>Integrated Grievance Management System (IGMS)</strong>:
          </p>
          <div className="example-box">
            <p className="text-sm text-brand-muted">Website: <strong>igms.irda.gov.in</strong> or call IRDAI Helpline: <strong>155255 (toll free)</strong></p>
            <p className="text-sm text-brand-muted mt-1">You can also use the Bima Bharosa portal at <strong>bimabharosa.irdai.gov.in</strong></p>
          </div>

          <h2>Step 4: Insurance Ombudsman (free, powerful, effective)</h2>
          <p>
            If the insurer rejects your grievance or doesn&apos;t respond within 30 days, approach the <strong>Insurance Ombudsman</strong>. This is completely free. You don&apos;t need a lawyer. The ombudsman&apos;s decision is binding on the insurer.
          </p>
          <p>Read our full guide: <a href="/health/ombudsman">How to use the Insurance Ombudsman →</a></p>

          <h2>Step 5: Consumer Forum / Court (last resort)</h2>
          <p>If all else fails, you can approach the Consumer Disputes Redressal Commission. For claims up to ₹50 lakh, file in the District Commission. This is slower but carries full legal force.</p>

          <h2>Document everything</h2>
          <p>At every stage, get written communication. Save all emails, letters, and reference numbers. This paper trail is your most valuable asset in any dispute.</p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
