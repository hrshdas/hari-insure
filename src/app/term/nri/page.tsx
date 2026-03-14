import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Term Insurance for NRIs — Hari Insurance India",
  description: "Can NRIs buy term insurance in India? Eligibility, documentation, FEMA rules, and key considerations.",
};

export default function TermNRI() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Term Insurance for NRIs"
          readTime="4 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "For NRIs", href: "/term/nri" },
          ]}
        >
          <p>Yes, NRIs (Non-Resident Indians) can buy term insurance from Indian insurers. Many NRIs prefer Indian policies because premiums are significantly lower than equivalent covers in countries like the US or UK.</p>

          <h2>Eligibility</h2>
          <ul>
            <li>Must be an Indian citizen (PIOs and OCIs may have restrictions with specific insurers)</li>
            <li>Must have dependants or financial ties in India</li>
            <li>Age limits: typically 18–65 years</li>
          </ul>

          <h2>How to apply</h2>
          <p>Most major insurers now accept NRI applications online. Some require a medical examination at an approved clinic in your country of residence.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">FEMA compliance</p>
            <p className="text-sm text-brand-muted">Premium payments and claim payouts are governed by FEMA. Premiums can be paid from NRE/NRO accounts. Claim amounts can be repatriated to foreign accounts, subject to applicable limits.</p>
          </div>

          <h2>Key documents required</h2>
          <ul>
            <li>Indian passport (valid)</li>
            <li>Visa and work permit copies</li>
            <li>Proof of overseas address</li>
            <li>Income proof (foreign salary slips or ITR if income is declared in India)</li>
            <li>NRE/NRO bank account details</li>
          </ul>

          <h2>Country of residence restrictions</h2>
          <p>Some insurers restrict cover for NRIs in high-risk countries. Always declare your country of residence accurately — travelling to a restricted country without informing the insurer can void cover.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
