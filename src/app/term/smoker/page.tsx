import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Term Insurance for Smokers — HariInsurance India",
  description: "How being a smoker affects your term insurance premium and what you can do to manage costs.",
};

export default function TermSmoker() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="I Am a Smoker — How Does That Affect My Term Insurance?"
          readTime="3 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "For Smokers", href: "/term/smoker" },
          ]}
        >
          <p>Smokers pay significantly higher premiums — typically <strong>30–50% more</strong> than a non-smoker of the same age and health profile. This reflects the elevated mortality risk that actuaries assign to tobacco users.</p>

          <h2>What counts as a &quot;smoker&quot;?</h2>
          <p>Insurers define a smoker as anyone who has used tobacco products (cigarettes, bidis, cigars, hookah, chewing tobacco) in the last <strong>12 months</strong>. Some insurers extend this to 3 years. You must disclose your smoking status truthfully on the application form.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Never lie about smoking status</p>
            <p className="text-sm text-brand-muted">If you declare non-smoker status to save on premium and the insurer discovers evidence of smoking during a claim (medical records, nicotine tests), the claim can be rejected entirely under the misrepresentation clause.</p>
          </div>

          <h2>How much extra will you pay?</h2>
          <p>For a 35-year-old buying ₹1 crore cover for 30 years: non-smoker pays approx ₹12,000–15,000/yr. Smoker equivalent: ₹18,000–22,000/yr. Still affordable — and still far cheaper than endowment plans.</p>

          <h2>Can you get a premium revision after quitting?</h2>
          <p>Yes. If you have been tobacco-free for 12 months (verified via cotinine urine test), some insurers allow a premium review. Contact your insurer&apos;s underwriting team for the specific process.</p>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
