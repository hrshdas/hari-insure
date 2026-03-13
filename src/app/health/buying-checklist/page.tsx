import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Health Insurance Buying Checklist — 12 Items — HariInsurance India",
  description: "A 12-point checklist to evaluate any health insurance plan before you buy. Never miss a feature that matters.",
};

export default function BuyingChecklist() {
  const checks = [
    { num: "01", title: "No room rent limit", detail: "Or at minimum, single private AC room allowed. Avoid % of sum insured caps." },
    { num: "02", title: "Zero co-payment", detail: "For under-60 buyers, there is no reason to accept a co-pay clause." },
    { num: "03", title: "No disease sub-limits", detail: "Cataract, joint replacement, hernia should be covered up to full sum insured." },
    { num: "04", title: "High sum insured", detail: "Minimum ₹10 lakh in metros. ₹15–25 lakh is increasingly the realistic standard." },
    { num: "05", title: "Restoration benefit", detail: "At least once per year. Ideally 'unlimited' or for any illness (not just unrelated)." },
    { num: "06", title: "Pre & post hospitalisation", detail: "At least 60 days pre, 90 days post. Some plans offer 90/180." },
    { num: "07", title: "Day care procedures covered", detail: "Verify at least 300+ day care procedures are listed." },
    { num: "08", title: "Lifetime renewability", detail: "Non-negotiable. Policy should not be cancellable due to age or claims." },
    { num: "09", title: "No Claim Bonus structure", detail: "At least 10-20% bonus per claim-free year. Check if it accumulates reasonably." },
    { num: "10", title: "Large network hospital list", detail: "Check hospitals in YOUR city specifically — not just total network size." },
    { num: "11", title: "Claim settlement ratio", detail: "Check IRDAI's annual report. Look for retail individual CSR above 90%." },
    { num: "12", title: "Check the exclusions list", detail: "Read Schedule II of the policy document. This is where the real risk hides." },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Health Insurance Buying Checklist (12 Items)"
          readTime="4 min read"
          pillarColor="#16a37f"
          breadcrumbs={[
            { label: "Health Insurance", href: "/health" },
            { label: "Buying Checklist", href: "/health/buying-checklist" },
          ]}
        >
          <p>Before buying or renewing any health insurance plan, verify these 12 items. This checklist covers 90% of what differentiates a good plan from a bad one.</p>

          <div className="space-y-3 mt-6">
            {checks.map((c) => (
              <div key={c.num} className="example-box flex items-start gap-4">
                <span className="text-2xl font-bold text-brand-green/30 flex-shrink-0 leading-none">{c.num}</span>
                <div>
                  <p className="font-semibold text-brand-ink text-sm">{c.title}</p>
                  <p className="text-xs text-brand-muted mt-0.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-8">How to verify each item</h2>
          <p>
            The policy wordings document (available for download on the insurer&apos;s website before purchase) is the ground truth. Marketing brochures can be misleading — always cross-check the actual policy document. Key sections to read: Schedule of Benefits, Exclusions (Schedule II), and Definitions.
          </p>

          <div className="callout-green">
            <p className="text-sm font-semibold text-brand-ink mb-1">Next step: Compare top plans</p>
            <p className="text-sm text-brand-muted">
              See how top 2026 plans score on these 12 parameters → <a href="/health/plan-comparison">Health plan comparison table</a>
            </p>
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
