import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "How to Read Your Policy's Exclusions Section — Hari Insurance India",
  description: "A plain-English guide to understanding the exclusions in your health or life insurance policy.",
};

export default function ReadingExclusions() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="How to Read Your Policy's Exclusions Section"
          readTime="5 min read"
          pillarColor="#ef4444"
          breadcrumbs={[
            { label: "Problems & Rights", href: "/problems" },
            { label: "Reading Exclusions", href: "/problems/reading-exclusions" },
          ]}
        >
          <p>The exclusions section is the most important and most ignored part of any insurance policy. Most claim rejections happen because the treatment, cause of death, or event falls under an exclusion the policyholder never read.</p>

          <h2>Types of exclusions</h2>

          <h3>1. Absolute (permanent) exclusions</h3>
          <p>These are never covered, regardless of circumstances — e.g., war, nuclear disaster, self-inflicted harm, participation in criminal acts.</p>

          <h3>2. Waiting period exclusions</h3>
          <p>These are temporarily excluded: e.g., pre-existing diseases (typically 2–4 year waiting period), maternity (typically 9–24 months), specific diseases like hernia or cataract (typically 1–2 years).</p>

          <h3>3. Sub-limits and caps</h3>
          <p>Some expenses are covered but only up to a certain limit — e.g., room rent capped at 1% of sum assured, or cataract surgery capped at ₹40,000 per eye. These are not full exclusions but can leave you with large out-of-pocket costs.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Key phrases to look for</p>
            <p className="text-sm text-brand-muted">&quot;Not covered&quot;, &quot;excluded&quot;, &quot;not payable&quot;, &quot;sub-limit&quot;, &quot;waiting period&quot;, &quot;co-payment&quot; — search for these words in your policy PDF. Every instance is a potential blind spot.</p>
          </div>

          <h2>How to challenge an unfair exclusion</h2>
          <p>If you believe a claim has been rejected using an exclusion that was not disclosed to you at the time of purchase, or that the exclusion does not apply to your situation, raise a formal complaint. IRDAI has ruled against insurers who use exclusions unfairly or ambiguously.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
