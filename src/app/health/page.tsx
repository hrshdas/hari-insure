import PillarLanding from "@/components/PillarLanding";
import AdvisorCTA from "@/components/AdvisorCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Health Insurance Guide — HariInsurance India",
  description: "Understand health insurance in plain English. Co-payments, room rent limits, claim process, plan comparison — everything you need to make a smart decision.",
};

const healthIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

export default function HealthPillarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLanding
          pillar="Health Insurance"
          tagline="India's most comprehensive free guide"
          description="From understanding what health insurance actually covers, to choosing the right plan for your family, to fighting a rejected claim — this is your complete guide, in plain English."
          color="#16a37f"
          bg="#e8f8f4"
          icon={healthIcon}
          sections={[
            {
              level: "start",
              items: [
                { label: "What is health insurance?", href: "/health/what-is-health-insurance", desc: "2-min read — pure basics, no jargon" },
                { label: "Why do I need it if I'm healthy?", href: "/health/why-do-i-need-it", desc: "Addresses the #1 objection" },
                { label: "How does the claim process work?", href: "/health/how-claims-work", desc: "Builds trust in the product" },
              ],
            },
            {
              level: "learn",
              items: [
                { label: "Co-payment — what it is and why to avoid it", href: "/health/concepts#copayment" },
                { label: "Room rent limits — the hidden multiplier", href: "/health/concepts#room-rent" },
                { label: "Disease sub-limits — the trap in cheap plans", href: "/health/concepts#sub-limits" },
                { label: "Waiting periods explained", href: "/health/concepts#waiting-periods" },
                { label: "Restoration benefit with examples", href: "/health/concepts#restoration" },
                { label: "No Claim Bonus — how it builds", href: "/health/concepts#ncb" },
                { label: "AYUSH coverage", href: "/health/concepts#ayush" },
                { label: "Day care & domiciliary coverage", href: "/health/concepts#daycare" },
                { label: "Critical illness vs health insurance", href: "/health/concepts#critical-illness" },
              ],
            },
            {
              level: "decide",
              items: [
                { label: "I'm buying for myself only", href: "/health/for-myself" },
                { label: "I'm buying for my family", href: "/health/for-family", desc: "Floater vs individual guide" },
                { label: "I'm buying for my parents", href: "/health/for-parents", desc: "Senior citizen guide" },
                { label: "I'm planning to have a baby", href: "/health/maternity", desc: "Maternity guide" },
                { label: "I have a pre-existing disease", href: "/health/pre-existing-disease" },
                { label: "My employer covers me — do I need my own?", href: "/health/employer-cover" },
                { label: "Health insurance buying checklist", href: "/health/buying-checklist", desc: "12 items" },
                { label: "Feature comparison: top plans 2026", href: "/health/plan-comparison" },
                { label: "Section 80D — save tax on premiums", href: "/health/80d-tax-benefit" },
              ],
            },
            {
              level: "problem",
              items: [
                { label: "My claim was rejected — what do I do?", href: "/health/claim-rejected" },
                { label: "How to port to a better insurer", href: "/health/porting-guide" },
                { label: "How to use the Insurance Ombudsman", href: "/health/ombudsman" },
              ],
            },
          ]}
        />
        <AdvisorCTA />
      </main>
      <Footer />
    </>
  );
}
