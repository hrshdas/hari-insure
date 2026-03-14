import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Motor Insurance Concepts — IDV, NCB, Depreciation — Hari Insurance India",
  description: "Learn motor insurance concepts: IDV (Insured Declared Value), No Claim Bonus (NCB), depreciation rules, and what is covered and excluded.",
};

export default function MotorConcepts() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Motor Insurance Concepts Explained"
          readTime="7 min read"
          pillarColor="#f97316"
          breadcrumbs={[
            { label: "Motor Insurance", href: "/motor" },
            { label: "Learn the Concepts", href: "/motor/concepts" },
          ]}
        >
          <h2 id="idv">IDV — What it is and why it matters at claim time</h2>
          <p>
            <strong>IDV (Insured Declared Value)</strong> is the maximum amount your insurer will pay if your car is stolen or completely destroyed (total loss). It represents the current market value of your vehicle.
          </p>
          <p>
            Many people make the mistake of lowering their IDV to get a cheaper premium. <strong>Never under-declare your IDV.</strong> If your ₹10 lakh car is stolen, but you set the IDV at ₹7 lakh to save ₹2,000 on premium, the insurer will only pay ₹7 lakh.
          </p>
          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-1">Standard IDV Depreciation Schedule</p>
            <ul className="text-sm text-brand-muted space-y-1">
              <li>• Up to 6 months: 5% depreciation from showroom price</li>
              <li>• 6 months to 1 year: 15%</li>
              <li>• 1 to 2 years: 20%</li>
              <li>• 2 to 3 years: 30%</li>
              <li>• 3 to 4 years: 40%</li>
              <li>• 4 to 5 years: 50%</li>
            </ul>
          </div>

          <h2 id="ncb">No Claim Bonus (NCB) — How it builds</h2>
          <p>
            NCB is a discount on your <strong>Own Damage (OD) premium</strong> (not the third-party portion) for every claim-free year. It belongs to YOU, not the car. If you sell your car, you can transfer the accumulated NCB to your new car.
          </p>
          <table>
            <thead><tr><th>Claim-free years</th><th>NCB Discount on OD Premium</th></tr></thead>
            <tbody>
              <tr><td>1 year</td><td>20%</td></tr>
              <tr><td>2 years</td><td>25%</td></tr>
              <tr><td>3 years</td><td>35%</td></tr>
              <tr><td>4 years</td><td>45%</td></tr>
              <tr><td>5 straight years</td><td>50% (Maximum)</td></tr>
            </tbody>
          </table>
          <p>
            <strong>The NCB Trap:</strong> Even a tiny claim of ₹2,000 for a scratched bumper drops your NCB to 0% the next year. You might lose ₹8,000 in discounts to claim ₹2,000. For minor damages, pay out of pocket if the cost is less than your expected NCB savings.
          </p>

          <h2 id="depreciation">How depreciation reduces your claim payout</h2>
          <p>
            Even with comprehensive insurance, you won&apos;t get 100% of the repair bill. Standard policies deduct depreciation on replacement parts:
          </p>
          <ul>
            <li><strong>Rubber, nylon, plastic parts, batteries:</strong> 50% depreciation</li>
            <li><strong>Fibre glass components:</strong> 30% depreciation</li>
            <li><strong>Glass parts:</strong> Nil depreciation</li>
            <li><strong>Metal parts:</strong> Varies by car age (5% to 50%)</li>
          </ul>
          <p>
            Because modern cars have so much plastic (bumpers, headlamp assemblies), standard claims often require you to pay 30-40% of the bill from your pocket. The solution? A <strong>Zero Depreciation add-on</strong>.
          </p>

          <h2 id="covers-excludes">What motor insurance covers and excludes</h2>
          <div className="grid sm:grid-cols-2 gap-6 my-6">
            <div className="p-4 rounded-xl border border-green-200 bg-green-50">
              <h3 className="text-brand-green font-semibold mt-0 mb-3 text-sm">✅ Covered</h3>
              <ul className="text-sm text-brand-muted space-y-1.5 pl-0 list-none">
                <li>• Accidents & collisions</li>
                <li>• Theft & burglary</li>
                <li>• Fire & explosions</li>
                <li>• Natural disasters (floods, cyclones)</li>
                <li>• Damage during transit</li>
                <li>• Third-party liability</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-red-200 bg-red-50">
              <h3 className="text-red-500 font-semibold mt-0 mb-3 text-sm">❌ Excluded</h3>
              <ul className="text-sm text-brand-muted space-y-1.5 pl-0 list-none">
                <li>• Driving under alcohol/drugs</li>
                <li>• Driving without valid license</li>
                <li>• Normal wear & tear</li>
                <li>• Mechanical/electrical breakdown</li>
                <li>• Damage outside India</li>
                <li>• Using private car as taxi</li>
              </ul>
            </div>
          </div>

          <h2 id="tp-rates">IRDAI-fixed third-party premium rates</h2>
          <p>These rates are fixed by the regulator and change occasionally. Here are the 2026 indicative rates for private cars:</p>
          <table>
            <thead><tr><th>Engine Capacity (CC)</th><th>TP Premium (Approx)</th></tr></thead>
            <tbody>
              <tr><td>Up to 1000cc</td><td>₹2,094</td></tr>
              <tr><td>1000cc to 1500cc</td><td>₹3,416</td></tr>
              <tr><td>Above 1500cc</td><td>₹7,897</td></tr>
            </tbody>
          </table>
          <p><em>Note: Add 18% GST to the above figures. Do not trust brokers offering &quot;discounts&quot; on TP premiums—it&apos;s illegal and usually a scam.</em></p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
