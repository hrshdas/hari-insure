import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Family Floater vs Individual Plans — Health Insurance for Families — Hari Insurance India",
  description: "Should you buy a family floater or individual plans? Complete guide with examples and recommendations for Indian families.",
};

export default function ForFamily() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Health Insurance for My Family: Floater vs Individual"
          readTime="6 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "For My Family", href: "/health/for-family" },
          ]}
          prevArticle={{ label: "For myself only", href: "/health/for-myself" }}
          nextArticle={{ label: "For my parents", href: "/health/for-parents" }}
        >
          <p>
            The single biggest question when buying health insurance for a family: <strong>should you buy one family floater plan, or individual plans for each person?</strong>
          </p>

          <h2>What is a Family Floater?</h2>
          <p>
            A family floater gives the <strong>entire family one shared pool</strong> of sum insured. If you have a ₹15 lakh floater for 4 people, any one or combination of family members can use up to ₹15 lakh in a year.
          </p>

          <h2>Family Floater vs Individual — honest comparison</h2>
          <table>
            <thead><tr><th>Factor</th><th>Family Floater</th><th>Individual Plans</th></tr></thead>
            <tbody>
              <tr><td>Premium</td><td>Lower (single premium)</td><td>Higher (separate for each)</td></tr>
              <tr><td>Risk</td><td>Two members ill same year = problem</td><td>Each person has full cover</td></tr>
              <tr><td>For parents</td><td>Not ideal (different age = higher premium)</td><td>Better — separate senior policy</td></tr>
              <tr><td>Flexibility</td><td>Sum insured shared</td><td>Each person has own SI</td></tr>
              <tr><td>NCB</td><td>One NCB for the family</td><td>Each builds their own NCB</td></tr>
            </tbody>
          </table>

          <h2>The recommended approach</h2>
          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Best strategy for most families</p>
            <ul className="text-sm text-brand-muted space-y-1 mt-2">
              <li>• <strong>You + spouse + children under 25:</strong> Family floater with high sum insured (₹15–25 lakh)</li>
              <li>• <strong>Parents:</strong> Separate senior citizen policy (do NOT add them to your floater — it dramatically increases your premium)</li>
            </ul>
          </div>

          <h2>How much sum insured for a family floater?</h2>
          <p>
            For a family of 4 (couple + 2 kids) in a metro, a minimum of ₹15 lakh is recommended. ₹25 lakh is ideal. The incremental premium difference between ₹15L and ₹25L is often just ₹2,000–3,000/year — worth it.
          </p>

          <h2>Should you add parents to your floater?</h2>
          <p>
            Almost always NO. Adding parents (especially if aged 55+) to your floater makes the entire premium jump dramatically because the premium is calculated based on the oldest member. A 58-year-old parent can triple your premium. Get them a separate senior citizen policy.
          </p>

          <h2>What about children?</h2>
          <p>
            Children are best covered under a family floater until they start earning. Then get them their own individual policy early — while premiums are low.
          </p>

          <p>Next, read about <a href="/health/for-parents">buying health insurance specifically for your parents →</a></p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
