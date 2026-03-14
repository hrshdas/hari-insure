import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Why Do I Need Health Insurance If I'm Healthy? — Hari Insurance India",
  description: "The top objection answered. Why young, healthy people in India still need health insurance — with real numbers.",
};

export default function WhyDoINeedIt() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Why Do I Need Health Insurance If I'm Healthy?"
          readTime="3 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Why do I need it?", href: "/health/why-do-i-need-it" },
          ]}
          prevArticle={{ label: "What is health insurance?", href: "/health/what-is-health-insurance" }}
          nextArticle={{ label: "How does the claim process work?", href: "/health/how-claims-work" }}
        >
          <p>
            This is the most common objection we hear: <em>&quot;I&apos;m 27, fit, never hospitalised. Why would I spend money on health insurance?&quot;</em>
          </p>
          <p>
            It&apos;s a completely logical question. Here are the real reasons why the answer is still <strong>yes, you need it.</strong>
          </p>

          <h2>1. Medical costs in India are rising at 14% per year</h2>
          <p>
            A surgery that cost ₹2 lakh in 2015 costs ₹4 lakh today. A 5-day ICU stay at a good private hospital in a metro can easily run ₹3–8 lakh. These are not rare events — they happen to young, healthy people after accidents, infections, or sudden illness.
          </p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Real example</p>
            <p className="text-sm text-brand-muted">
              Typhoid requiring 5-day hospitalisation: ₹1.2–2.5 lakh at a private hospital. Appendix surgery: ₹1.5–3.5 lakh. Dengue with complications: ₹2–5 lakh. These are &apos;minor&apos; by hospital billing standards.
            </p>
          </div>

          <h2>2. The waiting period trap</h2>
          <p>
            This is the most important reason to buy early. Health insurance has <strong>waiting periods</strong> — time you must wait before certain conditions are covered:
          </p>
          <ul>
            <li><strong>Initial waiting period:</strong> 30 days from policy start (no claims at all, except accidents)</li>
            <li><strong>Pre-existing disease waiting period:</strong> 2–4 years</li>
            <li><strong>Named ailment waiting period:</strong> 1–2 years (joint replacement, hernia, cataract etc.)</li>
          </ul>
          <p>
            If you wait until you get diagnosed with diabetes or hypertension or a joint problem, you will face a 3–4 year waiting period before your policy covers those conditions. If you buy now, while healthy, the clock starts ticking immediately.
          </p>

          <h2>3. Premiums are lowest when you&apos;re young</h2>
          <p>
            A 25-year-old pays roughly ₹7,000–10,000/year for a ₹10 lakh individual plan. The same person at 40 pays ₹15,000–22,000. At 55, premiums cross ₹40,000–60,000/year for a basic plan. Every year you delay, you lock in a higher premium for the rest of your life.
          </p>

          <table>
            <thead>
              <tr><th>Age at purchase</th><th>Approx. annual premium (₹10L individual)</th></tr>
            </thead>
            <tbody>
              <tr><td>25 years</td><td>₹7,000 – ₹10,000</td></tr>
              <tr><td>35 years</td><td>₹11,000 – ₹16,000</td></tr>
              <tr><td>45 years</td><td>₹20,000 – ₹30,000</td></tr>
              <tr><td>55 years</td><td>₹40,000 – ₹65,000</td></tr>
            </tbody>
          </table>

          <h2>4. Accidents don&apos;t care about your fitness level</h2>
          <p>
            Road accidents, sports injuries, sudden infections — these don&apos;t discriminate. India has 150,000+ road accident deaths per year. A serious accident can generate ₹10–30 lakh in hospital bills within a week.
          </p>

          <h2>5. Tax savings under Section 80D</h2>
          <p>
            If you&apos;re in the old tax regime, you can claim up to <strong>₹25,000 per year</strong> in tax deductions on health insurance premiums. For a 30% tax bracket, buying a ₹10,000 premium policy effectively costs you only ₹7,000 after tax savings.
          </p>

          <h2>6. Don&apos;t count on your employer&apos;s cover</h2>
          <p>
            Group health insurance from your employer has three problems: it disappears when you change jobs or get laid off, the coverage limits are often too low, and pre-existing condition coverage doesn&apos;t count towards personal policy waiting periods.
          </p>

          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">The bottom line</p>
            <p className="text-sm text-brand-muted">
              Buy health insurance as early as possible. Not because you expect to get sick — but because by the time you expect it, it will be far more expensive or leave you under-covered.
            </p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
