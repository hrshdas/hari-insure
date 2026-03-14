import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Motor Insurance Cost Guide — Hari Insurance India",
  description: "Understand motor insurance costs, how to lower them, and when to switch insurers versus renewing with your dealer.",
};

export default function MotorCostGuide() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Motor Insurance Cost & Renewal Guide"
          readTime="4 min read"
          pillarColor="#f97316"
          breadcrumbs={[
            { label: "Motor Insurance", href: "/motor" },
            { label: "Cost Guide", href: "/motor/cost-guide" },
          ]}
          prevArticle={{ label: "Add-Ons Guide", href: "/motor/addons" }}
        >
          <p>
            Unlike health and life insurance, motor insurance pricing is heavily commoditised and discounted online. Here is how premium pricing works and how to avoid overpaying.
          </p>

          <h2>The Components of Your Premium</h2>
          <p>Your total comprehensive motor premium consists of three parts (plus 18% GST):</p>
          <ol>
            <li><strong>Third-Party Liability Premium:</strong> Fixed by IRDAI based on engine cc. Non-negotiable.</li>
            <li><strong>Own Damage (OD) Premium:</strong> Calculated based on IDV, age of car, make/model, and your NCB. <em>Highly negotiable.</em></li>
            <li><strong>Add-On Covers:</strong> Extra cost for Zero Dep, Engine Protect, RTI, etc.</li>
          </ol>

          <h2>Why is the car dealer&apos;s insurance quote so high?</h2>
          <p>
            When buying a new car, the dealer&apos;s insurance quote is often 30–50% higher than the exact same policy bought directly online. Why? <strong>Because dealer payouts/commissions are secretly built into that premium.</strong>
          </p>
          <p>
            <strong>Your right:</strong> You are legally allowed to buy insurance independently from outside. Tell the dealer you will arrange your own insurance. Then buy the same policy online, save ₹10,000 to ₹25,000, and show the dealer the digitally generated policy PDF for registration.
          </p>

          <h2 id="renewal">When to Renew vs When to Switch</h2>
          <p>Loyalty does not pay in motor insurance. To get the best deal, follow this rule:</p>

          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-2">The 3-Year Switch Strategy</p>
            <ul className="text-sm text-brand-muted space-y-2">
              <li>• <strong>Year 1:</strong> Buy outside the dealership for massive savings on the new car.</li>
              <li>• <strong>Year 2 & 3:</strong> Renew with the same insurer if claims service was fine, as introductory discounts usually carry over.</li>
              <li>• <strong>Year 4:</strong> Shop around online. Older cars often see sharper price drops from competitor insurers trying to win your accumulated NCB portfolio.</li>
            </ul>
          </div>

          <h2>How to lower your premium legally</h2>
          <ul>
            <li><strong>Install an ARAI-approved anti-theft device:</strong> Gets you a small ~2.5% discount on the OD premium.</li>
            <li><strong>Voluntary Deductible:</strong> Agreeing to pay the first ₹2,500 to ₹5,000 of any claim out-of-pocket can shave up to 20-25% off your OD premium. Smart if you are a safe driver who rarely claims.</li>
            <li><strong>Transfer NCB from your old car:</strong> If you sell your old car to buy a new one, retain the insurance ownership certificate, ask for an NCB retention letter, and apply that massive 50% discount to your new car&apos;s OD premium!</li>
          </ul>

          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">A common mistake at renewal</p>
            <p className="text-sm text-brand-muted">
              Never let your policy lapse. If it expires even by one day, your car requires a physical or video inspection by the insurer before renewal. If it lapses by 90 days, you lose your entire No Claim Bonus permanently.
            </p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
