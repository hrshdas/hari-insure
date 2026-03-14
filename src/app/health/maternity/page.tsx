import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Maternity Health Insurance Guide — Hari Insurance India",
  description: "Planning a baby? Guide to maternity coverage in health insurance — waiting periods, what's covered, newborn cover.",
};

export default function Maternity() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Health Insurance When Planning to Have a Baby"
          readTime="5 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Maternity Cover Guide", href: "/health/maternity" },
          ]}
        >
          <p>Maternity is one of the most commonly misunderstood aspects of health insurance. The key insight: <strong>buy early, because the waiting period is long.</strong></p>

          <h2>The maternity waiting period — plan ahead</h2>
          <p>Most health insurance plans have a <strong>2–4 year waiting period</strong> for maternity coverage. This means if you plan to start a family in 2 years, you need to buy the right plan <em>today</em>.</p>

          <h2>What maternity insurance typically covers</h2>
          <ul>
            <li>Normal delivery expenses (hospitalisation, delivery charges)</li>
            <li>Caesarean section (usually capped higher than normal delivery)</li>
            <li>Pre and post-natal consultations (in some plans)</li>
            <li>Newborn baby cover from day 1 (in most modern plans)</li>
            <li>Vaccination costs for the newborn (in some plans)</li>
          </ul>

          <h2>What it typically does NOT cover</h2>
          <ul>
            <li>Infertility treatments (IVF, IUI)</li>
            <li>Complications arising from medically advised abortion</li>
            <li>Delivery at home</li>
          </ul>

          <h2>Limits to watch for</h2>
          <table>
            <thead><tr><th>Type of delivery</th><th>Typical cover (varies by plan)</th></tr></thead>
            <tbody>
              <tr><td>Normal delivery</td><td>₹15,000 – ₹50,000</td></tr>
              <tr><td>Caesarean</td><td>₹25,000 – ₹1,00,000</td></tr>
              <tr><td>Newborn cover</td><td>Usually up to 90 days post-birth</td></tr>
            </tbody>
          </table>

          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">⚠️ These limits may not cover actual costs</p>
            <p className="text-sm text-brand-muted">A normal delivery at a good private hospital in a metro costs ₹60,000–1,50,000. Many insurance limits fall short. Budget accordingly and factor in out-of-pocket costs.</p>
          </div>

          <h2>After the baby is born</h2>
          <p>Ensure you add the newborn to your health policy within <strong>90 days</strong> of birth to get coverage continuation. Many plans cover the newborn from day 1 as part of the maternity benefit — check your policy document.</p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
