import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "What is Health Insurance? — Hari Insurance India",
  description: "A plain-English, 2-minute explainer on what health insurance is, how it works, and why you need it in India.",
};

export default function WhatIsHealthInsurance() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="What is Health Insurance?"
          readTime="2 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "What is Health Insurance?", href: "/health/what-is-health-insurance" },
          ]}
          nextArticle={{ label: "Why do I need it if I'm healthy?", href: "/health/why-do-i-need-it" }}
        >
          <p>
            Health insurance is a contract between you and an insurance company. You pay a yearly amount called a <strong>premium</strong>. In return, if you get hospitalised, the insurer pays your hospital bills — up to a limit called the <strong>sum insured</strong>.
          </p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">The simple way to think about it</p>
            <p className="text-sm text-brand-muted">
              Instead of saving ₹5–10 lakh for a medical emergency (which most people can&apos;t do), you pay ₹8,000–15,000 per year. The insurer bears the risk.
            </p>
          </div>

          <h2>How does it actually work?</h2>
          <p>There are two ways to use your health insurance when you are hospitalised:</p>
          <ol>
            <li>
              <strong>Cashless hospitalisation</strong> — You go to a hospital in your insurer&apos;s network. The insurer pays the hospital directly. You pay little or nothing at discharge.
            </li>
            <li>
              <strong>Reimbursement</strong> — You pay the hospital, save all bills, and then submit a claim to the insurer. They pay you back (minus deductions like co-payment or sub-limits).
            </li>
          </ol>

          <h2>What does health insurance cover?</h2>
          <ul>
            <li>In-patient hospitalisation (admitted for more than 24 hours)</li>
            <li>Day care procedures (surgeries that don&apos;t need 24-hour admission — cataract, dialysis)</li>
            <li>Pre and post-hospitalisation expenses (usually 30–60 days before/after)</li>
            <li>Ambulance charges</li>
            <li>AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, Homeopathy) — in many modern plans</li>
            <li>Domiciliary hospitalisation (home treatment if hospital admission is not possible)</li>
          </ul>

          <h2>What does it NOT cover?</h2>
          <ul>
            <li>OPD visits, unless you have a specific OPD add-on</li>
            <li>Cosmetic surgery</li>
            <li>Self-inflicted injuries</li>
            <li>Pre-existing diseases during the <strong>waiting period</strong> (usually 2–4 years)</li>
            <li>Dental and vision (unless specifically added)</li>
          </ul>

          <h2>Key terms at a glance</h2>
          <table>
            <thead>
              <tr><th>Term</th><th>What it means</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Sum Insured</strong></td><td>Maximum the insurer pays in a year (e.g. ₹10 lakh)</td></tr>
              <tr><td><strong>Premium</strong></td><td>What you pay annually to keep the policy active</td></tr>
              <tr><td><strong>Deductible</strong></td><td>Amount you pay out-of-pocket before insurance kicks in</td></tr>
              <tr><td><strong>Network Hospital</strong></td><td>Hospitals where cashless treatment is available</td></tr>
              <tr><td><strong>Waiting Period</strong></td><td>Time you must wait before certain conditions are covered</td></tr>
            </tbody>
          </table>

          <h2>Individual vs Family Floater</h2>
          <p>
            An <strong>individual plan</strong> gives each person their own separate sum insured. A <strong>family floater</strong> gives the whole family one shared pool — usually cheaper, but risky if two members face major illness in the same year.
          </p>

          <div className="callout">
            <p className="text-sm font-semibold text-brand-ink mb-1">⚠️ Don&apos;t rely only on employer cover</p>
            <p className="text-sm text-brand-muted">
              If you change jobs or get laid off, your employer group cover disappears immediately. Always have your own personal policy.
            </p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
