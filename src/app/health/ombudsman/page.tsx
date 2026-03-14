import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "How to Use the Insurance Ombudsman — Free, No Lawyer Needed — Hari Insurance India",
  description: "Step-by-step guide to approaching the Insurance Ombudsman in India — free, fast, binding on insurers.",
};

export default function Ombudsman() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="How to Use the Insurance Ombudsman — Free, No Lawyer Needed"
          readTime="5 min read"
          pillarColor="#ef4444"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Insurance Ombudsman", href: "/health/ombudsman" },
          ]}
          prevArticle={{ label: "Porting guide", href: "/health/porting-guide" }}
        >
          <p>
            The Insurance Ombudsman is one of the most effective and underused consumer protection mechanisms in India. It&apos;s <strong>completely free</strong>, requires no lawyer, and the decision is <strong>binding on the insurer</strong> (not on you — you can still go to court if unsatisfied).
          </p>

          <h2>Who can approach the Ombudsman?</h2>
          <ul>
            <li>Any policyholder (individual, not corporate)</li>
            <li>A nominee or legal heir in case of the policyholder&apos;s death</li>
            <li>Claim value must be ₹50 lakh or below (for disputes beyond, go to Court)</li>
          </ul>

          <h2>When can you approach the Ombudsman?</h2>
          <ol>
            <li>Your insurer <strong>rejected your complaint or claim</strong></li>
            <li>Your insurer <strong>did not respond within 30 days</strong> of your complaint</li>
            <li>You are <strong>not satisfied</strong> with the insurer&apos;s resolution</li>
          </ol>

          <h2>How to file a complaint</h2>
          <div className="example-box">
            <ol className="text-sm text-brand-muted space-y-2">
              <li><strong>1. Identify your Ombudsman</strong> — Based on the insurer&apos;s registered office location. Find the list at <strong>ecoi.co.in</strong></li>
              <li><strong>2. Write your complaint</strong> — Include: policy number, nature of complaint, amount involved, what resolution you want</li>
              <li><strong>3. Attach all documents</strong> — Rejection letter, hospital bills, all correspondence with insurer</li>
              <li><strong>4. Submit</strong> — By post to the Ombudsman office, or online at <strong>bimabharosa.irdai.gov.in</strong></li>
              <li><strong>5. Hearing</strong> — Ombudsman conducts a hearing (virtually or in person) with both parties</li>
              <li><strong>6. Award</strong> — Decision issued within 3 months, binding on the insurer</li>
            </ol>
          </div>

          <h2>IRDAI consumer helpline</h2>
          <div className="callout-green">
            <p className="text-sm font-bold text-brand-ink mb-1">Contact details</p>
            <ul className="text-sm text-brand-muted space-y-1">
              <li>📞 <strong>IRDAI Helpline: 155255</strong> (toll free)</li>
              <li>🌐 <strong>Bima Bharosa portal:</strong> bimabharosa.irdai.gov.in</li>
              <li>🌐 <strong>Ombudsman offices:</strong> ecoi.co.in</li>
              <li>📧 <strong>IRDAI email:</strong> complaints@irdai.gov.in</li>
            </ul>
          </div>

          <h2>Success rate</h2>
          <p>
            The Ombudsman resolves a significant proportion of complaints in favour of policyholders — particularly for claim rejection cases involving disputed interpretations of policy terms. This is not a rubber stamp process; insurers take Ombudsman proceedings seriously.
          </p>

          <p>Also see the general <a href="/problems/ombudsman">Ombudsman guide covering both health and life insurance</a>.</p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
