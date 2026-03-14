import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Nominee Guide — How to Claim Life Insurance — Hari Insurance India",
  description: "A plain-English guide for nominees on how to file a term insurance claim, what documents are needed, and what timelines to expect.",
};

export default function NomineeGuide() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="My Nominee Does Not Know How To Claim — A Complete Guide For Nominees"
          readTime="5 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "Nominee Guide", href: "/term/nominee-guide" },
          ]}
          nextArticle={{ label: "Claim being delayed?", href: "/term/claim-delay" }}
        >
          <p>
            One of the most overlooked aspects of buying term insurance is making sure your nominee actually knows how to claim. A ₹1 crore policy is worthless if your family cannot navigate the claim process during an already devastating time.
          </p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">💡 Do this today</p>
            <p className="text-sm text-brand-muted">Share the policy bond, insurer contact number, and this guide with your nominee. Store a copy in a shared Google Drive folder.</p>
          </div>

          <h2>Documents the nominee will need</h2>
          <ul>
            <li><strong>Original policy bond</strong> (or letter of indemnity if lost)</li>
            <li><strong>Death certificate</strong> — issued by municipal authority, registered</li>
            <li><strong>Claimant statement / claim form</strong> — from the insurer website</li>
            <li><strong>Nominee KYC</strong> — Aadhaar + PAN + bank account details</li>
            <li><strong>Medical records</strong> — for illness-related deaths</li>
            <li><strong>FIR + post-mortem report</strong> — for accidental deaths</li>
            <li><strong>Employer certificate</strong> — if death occurred at work</li>
          </ul>

          <h2>Step-by-step claim process</h2>
          <ol>
            <li><strong>Intimate the insurer</strong> — call the claims helpline or visit any branch within 30 days of death. Get a claim reference number.</li>
            <li><strong>Submit documents</strong> — courier all documents with acknowledgement. Keep photocopies.</li>
            <li><strong>Track via the portal</strong> — most insurers have an online claim status tracker.</li>
            <li><strong>Receive payout</strong> — valid claims must be settled within 30 days. Payout is direct to bank account.</li>
          </ol>

          <h2>What if the claim is rejected?</h2>
          <p>The insurer must give a written reason. If you believe the rejection is unfair, escalate to the GRO, then IGMS, and finally the Insurance Ombudsman. Read our full guide: <a href="/health/ombudsman">How to use the Ombudsman →</a></p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
