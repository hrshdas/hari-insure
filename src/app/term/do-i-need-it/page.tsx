import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Do I Actually Need Term Insurance? — Hari Insurance India",
  description: "Is term insurance necessary for everyone? A clear breakdown of who needs it, who doesn't, and what happens if you skip it.",
};

export default function DoINeedIt() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Do I Actually Need Term Insurance?"
          readTime="3 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "Do I Need It?", href: "/term/do-i-need-it" },
          ]}
          prevArticle={{ label: "What is term insurance?", href: "/term/what-is-term-insurance" }}
          nextArticle={{ label: "Why term beats endowment & ULIP", href: "/term/vs-endowment-ulip" }}
        >
          <p>
            The honest answer: <strong>not everyone needs term insurance</strong>. But if anyone depends on your income — a spouse, children, aging parents, or someone you support — you almost certainly do.
          </p>

          <h2>You need term insurance if…</h2>
          <ul>
            <li>You have dependants who rely on your income</li>
            <li>You have outstanding loans (home loan, car loan, education loan)</li>
            <li>Your family could not maintain their current lifestyle without your salary</li>
            <li>You are the only earning member of the household</li>
          </ul>

          <h2>You may not need it if…</h2>
          <ul>
            <li>You have no dependants and no liabilities</li>
            <li>You have already built enough wealth to replace your income permanently</li>
            <li>Your spouse earns equally and can sustain the family independently</li>
          </ul>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">The ₹10,000/year question</p>
            <p className="text-sm text-brand-muted">A ₹1 crore term plan costs roughly ₹8,000–12,000 per year for a 30-year-old non-smoker. That is about ₹800/month — less than most broadband bills. For most working Indians with a family, it is the highest-ROI financial product available.</p>
          </div>

          <h2>What happens if you skip it?</h2>
          <p>If you die without adequate life cover, your family may be forced to sell assets, pull children out of school, or take on debt to survive. A home loan without term insurance is a particular risk — the bank will recover the property.</p>

          <h2>How much cover do you actually need?</h2>
          <p>A common rule: <strong>10–15× your annual gross income</strong>. Adjust upward if you have large outstanding loans or young children with long education horizons.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
