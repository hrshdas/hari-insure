
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Insurer Delaying My Claim — HariInsurance India",
  description: "Step-by-step guide on what to do when a life insurance insurer delays your claim, including regulatory timelines and escalation steps.",
};

export default function ClaimDelay() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="The Insurer Is Delaying My Claim — What To Do"
          readTime="4 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "Claim Delay Help", href: "/term/claim-delay" },
          ]}
          prevArticle={{ label: "Nominee guide", href: "/term/nominee-guide" }}
        >
          <p>
            IRDAI regulations require insurers to settle or reject a life insurance claim within <strong>30 days</strong> from the date of receiving all documents. If they require an investigation, the limit extends to <strong>90 days</strong>. Anything beyond this makes the insurer liable to pay interest.
          </p>

          <h2>Step 1 — Confirm you have submitted all required documents</h2>
          <p>Before escalating, verify you have provided: the original policy bond, death certificate (registered), claimant statement, ID/address proof of nominee, medical records (if applicable), FIR/inquest report (for accidental death).</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">📋 Ask for a written acknowledgement</p>
            <p className="text-sm text-brand-muted">Every document you submit should be acknowledged in writing or via email with a date. This timestamp matters if you escalate.</p>
          </div>

          <h2>Step 2 — Get the reason in writing</h2>
          <p>Call or email the insurer and ask for a written update on the status. If they cite a &quot;pending investigation,&quot; ask for the specific reason and expected timeline in writing.</p>

          <h2>Step 3 — Escalate to the Grievance Redressal Officer (GRO)</h2>
          <p>Every insurer has a GRO. Write a formal complaint referencing the claim number, date of submission, and the delay. The GRO must respond within 15 days.</p>

          <h2>Step 4 — File on IGMS (Bima Bharosa)</h2>
          <p>If the GRO does not resolve your complaint within 15 days, file on <strong>Bima Bharosa (IGMS)</strong> — the IRDAI complaint portal at bimabharosa.irdai.gov.in. IRDAI will act on your behalf.</p>

          <h2>Step 5 — Approach the Insurance Ombudsman</h2>
          <p>For claims up to ₹50 lakh, the Insurance Ombudsman is free, fast, and binding on the insurer. File at cioins.co.in. The ombudsman typically resolves cases within 3 months.</p>

          <h2>Interest on delayed claims</h2>
          <p>Under IRDAI regulations, if the insurer fails to settle a valid claim within the prescribed period, they must pay an interest of <strong>2% above the bank rate</strong> on the delayed amount from the due date.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}

