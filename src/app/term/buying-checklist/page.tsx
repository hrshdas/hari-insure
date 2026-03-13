import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleLayout from "@/components/ArticleLayout";
import AdvisorCTA from "@/components/AdvisorCTA";

export const metadata = {
  title: "Term Insurance Buying Checklist — 10 Items — HariInsurance India",
  description: "10-point checklist to evaluate any term insurance plan — sum assured, claim settlement ratio, riders, and more.",
};

export default function TermBuyingChecklist() {
  const checks = [
    { num: "01", title: "Sum assured is 10–15× annual income minimum", detail: "Use the FD method for a more precise number. Add outstanding loans." },
    { num: "02", title: "Policy runs until at least age 65", detail: "For a 30-year-old, this means a 35-year term. Don't underestimate longevity." },
    { num: "03", title: "Claim Settlement Ratio above 97%", detail: "Check IRDAI's annual report for individual death claim settlement ratio." },
    { num: "04", title: "Online/direct purchase (no agent)", detail: "Removes commission overhead. Same policy, lower premium from insurer's website." },
    { num: "05", title: "Waiver of Premium rider included", detail: "If you become disabled and can't earn, premiums are waived. Essential." },
    { num: "06", title: "Disclose everything honestly", detail: "All health conditions, smoking status, occupation. Non-disclosure is the #1 rejection cause." },
    { num: "07", title: "Nominee details are updated and correct", detail: "Add a contingent nominee (backup). Update after marriage, birth of children." },
    { num: "08", title: "Regular term, not ROP or endowment", detail: "Return of Premium plans cost 2-3× more for the same cover — rarely worth it." },
    { num: "09", title: "Premium payment: single vs regular vs limited", detail: "Regular pay is usually best. Limited pay (10-12 years) gives flexibility later." },
    { num: "10", title: "Leave instructions for your nominee", detail: "Policy document location, insurer contact, sum assured — in a sealed letter or will." },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ArticleLayout
          title="Term Insurance Buying Checklist (10 Items)"
          readTime="4 min read"
          pillarColor="#3b82f6"
          breadcrumbs={[
            { label: "Term Insurance", href: "/term" },
            { label: "Buying Checklist", href: "/term/buying-checklist" },
          ]}
        >
          <p>Before signing any term insurance policy, go through these 10 checks. Getting these right at purchase time is the difference between a claim that gets paid instantly and one that gets contested.</p>

          <div className="space-y-3 mt-6">
            {checks.map((c) => (
              <div key={c.num} className="example-box flex items-start gap-4">
                <span className="text-2xl font-bold opacity-30 flex-shrink-0 leading-none" style={{ color: "#3b82f6" }}>{c.num}</span>
                <div>
                  <p className="font-semibold text-brand-ink text-sm">{c.title}</p>
                  <p className="text-xs text-brand-muted mt-0.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </ArticleLayout>
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
