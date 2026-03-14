import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Health Insurance for Parents (Senior Citizens) — Hari Insurance India",
  description: "Complete guide to buying health insurance for parents in India — what to look for, which plans work, and how to deal with pre-existing conditions.",
};

export default function ForParents() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Health Insurance for My Parents (Senior Citizen Guide)"
          readTime="6 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "For My Parents", href: "/health/for-parents" },
          ]}
          prevArticle={{ label: "For my family", href: "/health/for-family" }}
          nextArticle={{ label: "Maternity cover guide", href: "/health/maternity" }}
        >
          <p>
            Buying health insurance for parents is genuinely difficult. High premiums, pre-existing conditions, co-payment clauses, waiting periods — there are many traps. This guide helps you navigate them.
          </p>

          <h2>The core challenge</h2>
          <p>
            For parents aged 60+, health insurance is expensive and comes with important caveats. But the cost of NOT having it is far higher — a single cardiac event or joint replacement surgery can cost ₹5–15 lakh at a good hospital.
          </p>

          <h2>Should you add parents to your family floater?</h2>
          <p>
            <strong>No.</strong> Adding a parent above 55–60 to your floater will dramatically increase your premium — often 2–3× — because premium is calculated on the oldest member. Worse, their pre-existing conditions affect the whole family&apos;s policy.
          </p>
          <p>Buy a <strong>separate senior citizen policy</strong> for your parents.</p>

          <h2>What to look for in a senior citizen plan</h2>
          <ul>
            <li>✅ <strong>Accepts entry age up to 65–70</strong> (some plans accept up to 80)</li>
            <li>✅ <strong>Lifetime renewability</strong> — critical for seniors</li>
            <li>✅ <strong>Pre-existing disease coverage</strong> — check waiting period (aim for 1–2 years, not 4)</li>
            <li>✅ <strong>Co-payment clause</strong> — most senior plans have 20–30% co-pay; look for lower</li>
            <li>✅ <strong>Large hospital network</strong> in your parents&apos; city</li>
            <li>✅ <strong>Domiciliary hospitalisation</strong> — important for seniors who may be home-bound</li>
            <li>✅ <strong>No medical test required</strong> for entry (or minimal tests)</li>
          </ul>

          <h2>How to deal with pre-existing conditions</h2>
          <p>
            Almost all seniors have at least one pre-existing condition (diabetes, hypertension, heart disease). You <strong>must disclose all pre-existing conditions</strong> honestly at the time of application. Not disclosing is the single biggest reason for claim rejection.
          </p>
          <p>
            Pre-existing conditions will typically have a 2–4 year waiting period before coverage kicks in. Some plans offer to waive or reduce this waiting period if you pay a higher premium.
          </p>

          <h2>What sum insured is right for parents?</h2>
          <table>
            <thead><tr><th>Parent&apos;s age</th><th>Minimum sum insured</th><th>Recommended</th></tr></thead>
            <tbody>
              <tr><td>60–65 years</td><td>₹5 lakh</td><td>₹10–15 lakh</td></tr>
              <tr><td>65–70 years</td><td>₹5 lakh</td><td>₹10 lakh</td></tr>
              <tr><td>70+ years</td><td>₹3–5 lakh</td><td>₹5–10 lakh + top-up</td></tr>
            </tbody>
          </table>

          <h2>Tax benefit for buying parents&apos; insurance</h2>
          <p>
            Under <a href="/health/80d-tax-benefit">Section 80D</a>, you can claim an additional <strong>₹50,000 deduction</strong> on premiums paid for parents who are senior citizens (60+). This is over and above your own ₹25,000 deduction.
          </p>

          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">⚠️ Don&apos;t wait until they have a serious diagnosis</p>
            <p className="text-sm text-brand-muted">
              Buy when they are relatively healthy. Once a serious condition like cancer or a major cardiac issue is diagnosed, getting coverage becomes extremely difficult or impossible.
            </p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
