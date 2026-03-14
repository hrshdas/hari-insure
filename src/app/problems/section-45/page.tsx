import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Section 45 of Insurance Act — The 3-Year Rule — Hari Insurance India",
  description: "How Section 45 protects life insurance policyholders from claim rejection after 3 years.",
};

export default function Section45() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Section 45 of Insurance Act — Why Insurers Cannot Reject Life Claims After 3 Years"
          readTime="4 min read"
          pillarColor="#ef4444"
          breadcrumbs={[
            { label: "Problems & Rights", href: "/problems" },
            { label: "Section 45", href: "/problems/section-45" },
          ]}
        >
          <p>
            Section 45 of the Insurance Act, 1938 is one of the most policyholder-friendly provisions in Indian insurance law. It places strict limitations on an insurer&apos;s ability to reject or contest a life insurance claim.
          </p>

          <h2>The simple version</h2>
          <ul>
            <li>Within <strong>3 years</strong> of policy issuance: insurer can contest the claim if there is evidence of fraud or misrepresentation</li>
            <li>After <strong>3 years</strong>: the insurer <strong>cannot</strong> repudiate (reject) a life insurance policy on ANY ground, including non-disclosure of information</li>
          </ul>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">What this means for you</p>
            <p className="text-sm text-brand-muted">Once your policy has been in force for 3 years, your nominee&apos;s claim is extremely well protected. Many insurers exploit the first-3-year window to reject claims — this is why early and accurate disclosure is critical.</p>
          </div>

          <h2>What &quot;misrepresentation&quot; means in law</h2>
          <p>For an insurer to contest a claim within the 3-year window, they must prove three things:</p>
          <ol>
            <li>A statement was made by the policyholder</li>
            <li>The statement was false or misleading</li>
            <li>The policyholder <strong>knew it was false</strong> at the time (i.e., fraud, not innocent error)</li>
          </ol>

          <h2>What to do if your claim is rejected citing non-disclosure</h2>
          <p>If the policy is over 3 years old, any rejection under non-disclosure grounds is illegal. You can challenge this at the Insurance Ombudsman and you will very likely win. Cite Section 45 explicitly in your complaint letter.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
