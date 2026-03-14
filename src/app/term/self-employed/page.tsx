import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Term Insurance for Self-Employed — Hari Insurance India",
  description: "Guide to term insurance for business owners and freelancers — HLV calculation, income proof, and keyman insurance.",
};

export default function TermSelfEmployed() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Term Insurance for Self-Employed and Business Owners"
          readTime="4 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "For Self-Employed", href: "/term/self-employed" },
          ]}
          prevArticle={{ label: "For salaried", href: "/term/salaried" }}
        >
          <p>Self-employed individuals and business owners face unique challenges when buying term insurance — irregular income, complex business structures, and higher risk perception from insurers.</p>

          <h2>Income proof challenges</h2>
          <p>Insurers require 2–3 years of ITR (Income Tax Returns) as proof of income. If your declared income is low, your eligible cover will be proportionally limited. Filing accurate ITRs is thus important for financial protection planning.</p>

          <h2>Keyman Insurance</h2>
          <p>If your business depends heavily on one person (yourself or a key partner), consider <strong>Keyman Insurance</strong> — a policy taken by the company on a key person&apos;s life with the company as beneficiary. Premiums are tax-deductible as a business expense.</p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Partnership firms: buy policies cross-ways</p>
            <p className="text-sm text-brand-muted">In a 2-partner business, Partner A insures Partner B and vice versa. If either dies, the surviving partner has funds to buy out the deceased partner&apos;s share from their family.</p>
          </div>

          <h2>How much cover to buy</h2>
          <p>For self-employed: cover should protect (a) your family&apos;s living expenses for 15–20 years and (b) any business liabilities or loans. Total cover = personal HLV + outstanding business loans.</p>

          <h2>Tips for getting approved</h2>
          <ul>
            <li>File accurate ITRs showing consistent income</li>
            <li>Disclose all existing policies</li>
            <li>Maintain a clean health record</li>
            <li>Buy online — direct underwriting, no agent bias</li>
          </ul>
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
