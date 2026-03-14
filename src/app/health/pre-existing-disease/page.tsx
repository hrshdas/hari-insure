import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Health Insurance with Pre-Existing Disease — Hari Insurance India",
  description: "What happens to your pre-existing disease (PED) in health insurance? Waiting periods, disclosure rules, and what to expect.",
};

export default function PreExistingDisease() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="I Have a Pre-Existing Disease — What Happens?"
          readTime="5 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Pre-Existing Disease", href: "/health/pre-existing-disease" },
          ]}
        >
          <p>A pre-existing disease (PED) is any condition, ailment, injury, or related condition for which you had signs, symptoms, or received medical treatment in the 48 months before buying the policy. Common examples: diabetes, hypertension, asthma, thyroid disorders.</p>

          <h2>The golden rule: Always disclose honestly</h2>
          <p>
            <strong>Never hide a pre-existing condition.</strong> This is the #1 cause of claim rejection. IRDAI regulations and court rulings consistently uphold rejection of claims where the policyholder suppressed material information. The short-term premium savings are never worth the risk.
          </p>

          <h2>What happens after you disclose?</h2>
          <p>The insurer can do one of the following:</p>
          <ol>
            <li><strong>Accept with standard premium</strong> — If the condition is minor and well-controlled</li>
            <li><strong>Accept with loading</strong> — Higher premium due to higher risk</li>
            <li><strong>Accept with exclusion</strong> — Cover everything except that specific condition</li>
            <li><strong>Decline</strong> — Rare, usually only for very serious uncontrolled conditions</li>
          </ol>

          <h2>PED waiting period explained</h2>
          <table>
            <thead><tr><th>Standard waiting period</th><th>What it means</th></tr></thead>
            <tbody>
              <tr><td>2–4 years (industry standard)</td><td>PED is not covered for this period; all other conditions ARE covered</td></tr>
              <tr><td>1 year (some plans)</td><td>Can be achieved with a PED waiver rider (costs extra)</td></tr>
              <tr><td>0 days (group policies)</td><td>Employer group insurance often has no PED waiting period</td></tr>
            </tbody>
          </table>

          <h2>After the waiting period</h2>
          <p>Once the PED waiting period is over, your condition is fully covered like any other illness — subject to the policy terms and sum insured.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Portability saves your waiting period credit</p>
            <p className="text-sm text-brand-muted">If you switch insurers, your accumulated waiting period credit transfers with you (as per IRDAI portability rules). 2 years served with insurer A counts as 2 years when porting to insurer B.</p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
