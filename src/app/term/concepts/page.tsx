import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Term Insurance Concepts — How Much Cover, Riders, Claim Process — HariInsurance India",
  description: "Term insurance deep dive: how much cover you need, how long to run, riders explained, ROP, and the claim process for nominees.",
};

export default function TermConcepts() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Term Insurance — Learn the Concepts"
          readTime="10 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "Learn the Concepts", href: "/term/concepts" },
          ]}
        >
          <h2 id="cover-amount">How much cover do I need?</h2>
          <p>
            The most common method is the <strong>income replacement method</strong>: cover should be 10–15× your annual income. A better method is:
          </p>

          <div className="example-box">
            <p className="text-sm font-bold text-brand-ink mb-2">The FD Method (Human Life Value approach)</p>
            <ol className="text-sm text-brand-muted space-y-1">
              <li>1. Calculate how many years your family needs income support (e.g. until youngest child earns = 25 years)</li>
              <li>2. Calculate monthly household expenses (e.g. ₹60,000/month = ₹7.2L/year)</li>
              <li>3. Cover = Amount that, if put in FD at 6% returns, generates that annual income forever</li>
              <li>4. ₹7.2L ÷ 0.06 = <strong>₹1.2 crore</strong> cover needed</li>
              <li>5. Add outstanding loans (home loan, car loan) to this amount</li>
            </ol>
          </div>

          <table>
            <thead><tr><th>Annual income</th><th>Rule of thumb cover</th><th>FD method (25yr need)</th></tr></thead>
            <tbody>
              <tr><td>₹5 lakh</td><td>₹50–75 lakh</td><td>₹70 lakh</td></tr>
              <tr><td>₹10 lakh</td><td>₹1–1.5 crore</td><td>₹1.4 crore</td></tr>
              <tr><td>₹20 lakh</td><td>₹2–3 crore</td><td>₹2.5 crore</td></tr>
            </tbody>
          </table>

          <h2 id="policy-term">How long should my policy run?</h2>
          <p>
            Your policy should run until your financial dependants become self-sufficient and your major liabilities (home loan) are paid off. Minimum recommendation: <strong>until age 65</strong>. If you are 30 now, buy a 35-year term.
          </p>

          <h2 id="riders">Riders Explained</h2>
          <ul>
            <li><strong>Critical Illness Rider:</strong> Pays a lump sum on diagnosis of cancer, heart attack, stroke etc. — even if you survive. Useful supplement to the base cover.</li>
            <li><strong>Waiver of Premium (WoP):</strong> If you become permanently disabled and can&apos;t earn, future premiums are waived but coverage continues. Very valuable — always add this.</li>
            <li><strong>Terminal Illness Rider:</strong> Pays part of sum assured immediately while alive if diagnosed with terminal illness. Allows using the money while you are still alive.</li>
            <li><strong>Accidental Death Benefit:</strong> Extra payout if death is due to accident. Less important if your base cover is already adequate.</li>
          </ul>

          <h2 id="rop">Return of Premium — Is It Worth It?</h2>
          <p>
            Return of Premium (ROP) plans give back all premiums paid if you survive the policy term. Sounds great — but the premium is 2–3× higher than a regular term plan.
          </p>
          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">Why ROP usually isn&apos;t worth it</p>
            <p className="text-sm text-brand-muted">
              If you buy a regular plan and invest the premium difference in an index fund at 12% CAGR, you&apos;ll have significantly more than the return of premiums at maturity. The &quot;free return&quot; is really just a forced savings scheme with mediocre returns built in.
            </p>
          </div>

          <h2 id="claim-rejection">What Causes Claim Rejection?</h2>
          <ol>
            <li><strong>Non-disclosure / mis-statement:</strong> Not disclosing a health condition, smoking habit, or dangerous occupation. This is the #1 reason.</li>
            <li><strong>Suicide within 1 year:</strong> Most policies don&apos;t cover suicidal death in the first 12 months</li>
            <li><strong>Policy lapse:</strong> Premium not paid → policy lapses → no claim</li>
            <li><strong>Nominee not updated:</strong> Nominee as per records is deceased; claim goes into legal dispute</li>
          </ol>

          <h2 id="claim-process">How Does the Claim Process Work for Nominees?</h2>
          <ol>
            <li>Nominee intimates the insurer immediately after the policyholder&apos;s death</li>
            <li>Submit: Death certificate, original policy document, nominee ID proof, claim form</li>
            <li>Insurer verifies cause of death and policy terms</li>
            <li>Settlement within <strong>30 days</strong> of receiving complete documents (IRDAI mandate)</li>
            <li>Amount paid directly to nominee&apos;s bank account — <strong>100% tax-free under Section 10(10D)</strong></li>
          </ol>

          <p>Ensure your nominee knows the <strong>policy number, insurer name, and sum assured</strong>. Consider leaving instructions in a sealed envelope or using a will.</p>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
