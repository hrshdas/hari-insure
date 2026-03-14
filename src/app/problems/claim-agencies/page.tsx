import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Should I Hire a Claim Settlement Agency? — Hari Insurance India",
  description: "An honest look at insurance claim settlement agencies — when they help, when they don't, and free alternatives.",
};

export default function ClaimAgencies() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Should I Hire a Claim Settlement Agency?"
          readTime="3 min read"
          pillarColor="#ef4444"
          breadcrumbs={[
            { label: "Problems & Rights", href: "/problems" },
            { label: "Claim Settlement Agencies", href: "/problems/claim-agencies" },
          ]}
        >
          <p>When an insurance claim is rejected or delayed, some people turn to third-party claim settlement agencies or &quot;insurance attorneys.&quot; Here is the honest picture.</p>

          <h2>What do they do?</h2>
          <p>These agencies help compile documentation, write legal-style complaint letters, and represent you before the Grievance Redressal Officer (GRO), IRDAI, and the Ombudsman. Some are legitimate, many are not.</p>

          <h2>When they can help</h2>
          <ul>
            <li>You are elderly or not familiar with online complaint systems</li>
            <li>The claim involves a large amount and complex documentation</li>
            <li>You have already been rejected and need a professional second opinion</li>
          </ul>

          <h2>The risks</h2>
          <ul>
            <li>Many charge high upfront fees or take 10–30% of the claim settlement as commission</li>
            <li>Some are outright fraudulent — they take your money and do nothing</li>
            <li>The Ombudsman process is <strong>completely free</strong> and you can do it yourself</li>
          </ul>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Our recommendation</p>
            <p className="text-sm text-brand-muted">Try the free route first: GRO → IGMS (Bima Bharosa) → Insurance Ombudsman. All three are free, regulated, and effective. Only consider a paid agency if you have an extremely complex case and have exhausted free channels.</p>
          </div>

          <h2>If you must hire one</h2>
          <ul>
            <li>Get all fees in writing before engaging</li>
            <li>Never pay a percentage of the claim as commission upfront</li>
            <li>Verify the agency has a registered business and GST number</li>
            <li>Check reviews and ask for references from past clients</li>
          </ul>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
