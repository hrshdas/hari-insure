import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "How to Use Bima Bharosa (IGMS) — HariInsurance India",
  description: "Step-by-step guide to filing an insurance complaint on the IRDAI's Bima Bharosa (IGMS) portal.",
};

export default function IGMS() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="How to Use Bima Bharosa (IGMS) — File an Insurance Complaint Online"
          readTime="4 min read"
          pillarColor="#ef4444"
          breadcrumbs={[
            { label: "Problems & Rights", href: "/problems" },
            { label: "IGMS Guide", href: "/problems/igms" },
          ]}
          nextArticle={{ label: "Insurance Ombudsman guide", href: "/health/ombudsman" }}
        >
          <p>
            Bima Bharosa (formerly IGMS — Integrated Grievance Management System) is IRDAI&apos;s official portal for filing complaints against insurance companies. It is free, and insurers are legally obligated to respond.
          </p>

          <h2>When to use IGMS</h2>
          <ul>
            <li>You have already complained to the insurer&apos;s GRO and have not received a response in 15 days</li>
            <li>You are unsatisfied with the insurer&apos;s resolution</li>
            <li>Your claim has been delayed beyond IRDAI timelines</li>
          </ul>

          <h2>How to file a complaint</h2>
          <ol>
            <li>Go to <strong>bimabharosa.irdai.gov.in</strong></li>
            <li>Register with your mobile number (OTP verification)</li>
            <li>Select the insurer and policy type</li>
            <li>Describe your complaint clearly and attach supporting documents</li>
            <li>Submit — you will receive a complaint reference number</li>
          </ol>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">What happens next?</p>
            <p className="text-sm text-brand-muted">IRDAI forwards the complaint to the insurer, who must respond within <strong>15 days</strong>. You can track status on the portal. If unresolved, you can escalate further to the Insurance Ombudsman.</p>
          </div>

          <h2>Documents to attach</h2>
          <ul>
            <li>Copy of your policy document</li>
            <li>Claim/complaint reference numbers from the insurer</li>
            <li>GRO complaint acknowledgement</li>
            <li>Any rejection letters from the insurer</li>
          </ul>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
