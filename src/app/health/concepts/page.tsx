import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Health Insurance Concepts Explained — HariInsurance India",
  description: "Co-payment, room rent limits, sub-limits, waiting periods, restoration benefit, NCB — all key health insurance concepts explained simply.",
};

export default function HealthConcepts() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Health Insurance Concepts Explained"
          readTime="12 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Learn the Concepts", href: "/health/concepts" },
          ]}
        >
          <p>
            These are the concepts that separate a good health insurance plan from a bad one. Most people never read this — and end up shocked at claim time. This guide covers every important term you need to know.
          </p>

          <h2 id="copayment">Co-payment — what it is and why to avoid it</h2>
          <p>
            A <strong>co-payment (co-pay)</strong> means you pay a fixed percentage of every claim from your own pocket. The insurer pays the rest.
          </p>
          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-1">Example</p>
            <p className="text-sm text-brand-muted">Your plan has a 20% co-pay. You have a ₹3 lakh surgery. You pay ₹60,000. The insurer pays ₹2,40,000. Every single claim — small or large — has this deduction.</p>
          </div>
          <p>
            Co-pays are common in senior citizen plans and plans with lower premiums. <strong>Avoid co-pay plans if you can</strong> — the premium savings are rarely worth what you pay at claim time.
          </p>

          <h2 id="room-rent">Room Rent Limits — the hidden multiplier</h2>
          <p>
            Many plans cap the room rent they will reimburse — for example, 1% of sum insured per day, or ₹3,000/day. This sounds minor. It isn&apos;t.
          </p>
          <p>
            The hidden danger: if you take a room above your limit, the insurer applies a <strong>proportional deduction</strong> on the <em>entire bill</em> — not just the room rent. Surgeons fees, ICU charges, medicines — everything gets cut proportionally.
          </p>
          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-1">Example</p>
            <p className="text-sm text-brand-muted">Limit: ₹3,000/day. Actual room: ₹6,000/day (2× limit). Hospital bill: ₹5 lakh total. Insurer pays only 50% of everything = ₹2.5 lakh. You pay ₹2.5 lakh out of pocket.</p>
          </div>
          <p><strong>Best plans have no room rent limit</strong> or allow single private AC rooms.</p>

          <h2 id="sub-limits">Disease Sub-Limits — the trap in cheap plans</h2>
          <p>
            Some plans cap what they pay for specific conditions, regardless of your sum insured. For example: cataract surgery limited to ₹25,000 (actual cost: ₹50,000+), knee replacement limited to ₹1 lakh (actual: ₹3–5 lakh).
          </p>
          <p>Look for plans with <strong>no disease sub-limits</strong>. Modern plans have largely eliminated these, but budget plans still carry them.</p>

          <h2 id="waiting-periods">Waiting Periods — explained completely</h2>
          <p>There are three types:</p>
          <table>
            <thead><tr><th>Type</th><th>Duration</th><th>What it covers</th></tr></thead>
            <tbody>
              <tr><td><strong>Initial waiting period</strong></td><td>30 days</td><td>No claims at all (except accidents)</td></tr>
              <tr><td><strong>Pre-existing disease (PED)</strong></td><td>2–4 years</td><td>Any condition diagnosed before policy start</td></tr>
              <tr><td><strong>Named ailment</strong></td><td>1–2 years</td><td>Specific conditions: hernia, cataract, knee replacement, joint disorders</td></tr>
            </tbody>
          </table>
          <p>Best plans now offer PED waiting period reduction to 1 year as a rider — worth paying for if you have pre-existing conditions.</p>

          <h2 id="restoration">Restoration Benefit — explained with examples</h2>
          <p>
            If you exhaust your sum insured in one year, restoration automatically refills it — once or multiple times, depending on the plan. Some plans only restore for unrelated illnesses; better plans restore for all illnesses.
          </p>
          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-1">Example</p>
            <p className="text-sm text-brand-muted">Sum insured: ₹5 lakh. You have a surgery costing ₹4.5 lakh in February. Restoration kicks in: another ₹5 lakh is now available. In August, your spouse needs hospitalisation — the restored ₹5 lakh covers it.</p>
          </div>

          <h2 id="ncb">No Claim Bonus (NCB) — how it builds over years</h2>
          <p>
            For every claim-free year, your sum insured increases by 10–50% (varies by insurer) without any extra premium. After 5 claim-free years, a ₹5 lakh plan can become ₹7.5–10 lakh effectively free.
          </p>
          <p>However, if you make a claim, the NCB resets — check if your plan has an NCB protector add-on (allows one claim per year without losing the bonus).</p>

          <h2 id="ayush">AYUSH Coverage</h2>
          <p>
            IRDAI now mandates that all health insurance plans cover AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, Homeopathy) for inpatient hospitalisation. However, the quality of coverage varies — check if your plan covers the full sum insured for AYUSH or has a sub-limit.
          </p>

          <h2 id="daycare">Day Care Treatments</h2>
          <p>
            Procedures lasting less than 24 hours that used to require overnight admission. Modern medicine has made many surgeries same-day procedures — cataract, dialysis, chemotherapy, certain orthopaedic procedures. Good plans cover 500+ day care procedures with no 24-hour requirement.
          </p>

          <h2 id="critical-illness">Critical Illness vs Health Insurance — the key difference</h2>
          <table>
            <thead><tr><th>Feature</th><th>Health Insurance</th><th>Critical Illness Cover</th></tr></thead>
            <tbody>
              <tr><td>Pays for</td><td>Actual hospital bills</td><td>Lump sum on diagnosis</td></tr>
              <tr><td>Use of money</td><td>Only for medical bills</td><td>Any use (income replacement, EMIs)</td></tr>
              <tr><td>Covers</td><td>All illness/hospitalization</td><td>Specific listed illnesses (cancer, stroke etc.)</td></tr>
              <tr><td>Best for</td><td>All hospitalisation needs</td><td>Supplementing income during recovery</td></tr>
            </tbody>
          </table>
          <p>They are <strong>not substitutes</strong> — they serve different purposes. Most people with dependants should ideally have both.</p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
