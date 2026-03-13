import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Motor Insurance Add-Ons: Are They Worth It? — HariInsurance India",
  description: "Zero dep, engine protection, NCB protect, RTI — which motor insurance add-ons do you actually need in India?",
};

export default function MotorAddons() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Motor Insurance Add-Ons: Are They Worth It?"
          readTime="6 min read"
          pillarColor="#f97316"
          breadcrumbs={[
            { label: "Motor Insurance", href: "/motor" },
            { label: "Add-Ons Guide", href: "/motor/addons" },
          ]}
          prevArticle={{ label: "Motor concepts", href: "/motor/concepts" }}
          nextArticle={{ label: "Motor cost guide", href: "/motor/cost-guide" }}
        >
          <p>
            Standard comprehensive motor insurance leaves massive gaps in coverage (especially for plastic parts and engine damage). Add-ons plug these gaps. But insurers push all of them. Which ones actually matter?
          </p>

          <h2 id="zero-dep">1. Zero Depreciation (Bumper-to-Bumper)</h2>
          <p><strong>Verdict: Essential for cars under 5 years old.</strong></p>
          <p>Standard policies deduct 50% for replacing plastic, rubber, and glass parts. The &apos;Zero Dep&apos; add-on ignores age-related depreciation. Instead of paying 40% of the repair bill out of pocket, you pay almost nothing.</p>
          <p><em>Cost:</em> ~15-20% of the base Own Damage premium.<br/><em>Note:</em> Most insurers only offer this until the car is 5-7 years old.</p>

          <h2 id="engine-protection">2. Engine Protection Cover</h2>
          <p><strong>Verdict: Highly recommended, especially in flood-prone cities (Mumbai, Chennai, Bangalore) or for low-slung sedans.</strong></p>
          <p>Standard insurance covers accident damage to the engine, but <strong>excludes</strong> hydrostatic lock (engine seizes because you drove through a flooded street) or damage from oil leakage after hitting a pothole. Replacing an engine block costs ₹1–5 lakh depending on the car. This add-on covers it.</p>
          <p><em>Cost:</em> Very cheap compared to the risk.</p>

          <h2 id="ncb-protect">3. NCB Protect</h2>
          <p><strong>Verdict: Worth it if your accumulated NCB is 35% or 50%.</strong></p>
          <p>Normally, a single claim (even for a ₹3,000 mirror) drops your No Claim Bonus to 0% at next renewal. NCB Protect allows you to make 1 or 2 claims in a year while preserving your hard-earned discount.</p>
          <p><em>Cost:</em> Generally affordable, but do the math. Does the cost of the add-on exceed your expected NCB savings?</p>

          <h2 id="rti">4. Return to Invoice (RTI)</h2>
          <p><strong>Verdict: Essential ONLY for brand new cars (1-3 years old).</strong></p>
          <p>If your car is totaled or stolen, standard insurance only pays the IDV (depreciated market value). RTI bridges the gap — it pays the original ex-showroom price (or current on-road price) plus road tax and registration charges. It guarantees you can buy the exact same new car again.</p>
          <p><em>Cost:</em> Expensive, but the payout difference in a total loss is massive.</p>

          <h2 id="roadside">5. Roadside Assistance (RSA)</h2>
          <p><strong>Verdict: Low cost, high value value but check if your manufacturer already provides it.</strong></p>
          <p>Towing, flat tire change, battery jumpstart, fuel delivery, or lost key assistance. Costs barely ₹300-500/year. <em>However</em>, almost all new cars come with 3-5 years of free manufacturer RSA anyway. Don&apos;t double-pay.</p>

          <h2 id="consumables">6. Consumables Cover</h2>
          <p><strong>Verdict: Good to have but not strictly essential.</strong></p>
          <p>During a major accident repair, hospitals bill for engine oil, coolant, nuts, bolts, washers, and AC gas. Standard plans reject these &quot;consumable&quot; charges. This add-on pays for them.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">The &apos;Must-Have&apos; Bundle for a New Car</p>
            <p className="text-sm text-brand-muted">
              For a new everyday commuter car, taking <strong>Zero Dep + Engine Protect + Return to Invoice</strong> for the first 3 years provides absolute peace of mind against the biggest financial shocks.
            </p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
