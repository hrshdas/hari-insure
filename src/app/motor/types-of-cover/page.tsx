import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Third-Party vs Own Damage vs Comprehensive Motor Insurance — Hari Insurance India",
  description: "The definitive guide to the three types of motor insurance in India — what each covers, when you need which, and which is right for you.",
};

export default function TypesOfCover() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Third-Party vs Own Damage vs Comprehensive Motor Insurance"
          readTime="5 min read"
          pillarColor="#f97316"
          breadcrumbs={[
            { label: "Motor Insurance", href: "/motor" },
            { label: "Types of Cover", href: "/motor/types-of-cover" },
          ]}
          nextArticle={{ label: "Motor Insurance Concepts", href: "/motor/concepts" }}
        >
          <p>Every vehicle owner in India must have at least <strong>third-party insurance</strong> by law. But is that all you need? Here&apos;s how the three types compare.</p>

          <h2>The three types of motor insurance</h2>
          <table>
            <thead><tr><th>Type</th><th>What it covers</th><th>What it doesn&apos;t cover</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Third-Party (TP)</strong></td>
                <td>Damage/injury you cause to others (their car, property, injuries)</td>
                <td>Your own car; your own injuries</td>
              </tr>
              <tr>
                <td><strong>Own Damage (OD)</strong></td>
                <td>Damage to your own car (cannot be bought standalone)</td>
                <td>Third-party liability</td>
              </tr>
              <tr>
                <td><strong>Comprehensive</strong></td>
                <td>Both TP + OD — full protection</td>
                <td>Excludes: drunk driving, no license, wear & tear, consumables (unless add-on)</td>
              </tr>
            </tbody>
          </table>

          <h2 id="tp-only">Is third-party-only ever enough?</h2>
          <p>
            Third-party is legally mandatory. But it offers you <strong>zero protection for your own vehicle</strong> damage. Consider these scenarios:
          </p>
          <ul>
            <li>Your car is flooded in monsoon — TP covers nothing</li>
            <li>Your car is stolen — TP covers nothing</li>
            <li>You hit a wall — TP covers nothing</li>
            <li>You cause an accident and injure someone — TP covers you ✅</li>
          </ul>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">When TP-only makes sense</p>
            <p className="text-sm text-brand-muted">
              If your car is very old (10+ years) and its market value is under ₹2–3 lakh, the cost of comprehensive insurance may not be worth it. For newer cars, always go comprehensive.
            </p>
          </div>

          <h2>Who should buy comprehensive?</h2>
          <ul>
            <li>✅ All cars newer than 5–7 years</li>
            <li>✅ Cars with significant market value</li>
            <li>✅ Cars in flood-prone areas</li>
            <li>✅ Vehicles parked on the street (higher theft risk)</li>
          </ul>

          <h2>The third-party premium is fixed by IRDAI</h2>
          <p>
            IRDAI (Insurance Regulatory and Development Authority of India) fixes third-party premium rates — so they are the same across all insurers. The competition is entirely on the Own Damage component and the add-ons offered. See the <a href="/motor/concepts#tp-rates">current TP rates table</a>.
          </p>

          <h2>Personal Accident (PA) Cover</h2>
          <p>
            A mandatory ₹15 lakh PA cover for the owner-driver is now bundled (₹750 premium). This pays in case of death or disability from a vehicle accident. It&apos;s separate from the vehicle insurance.
          </p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
