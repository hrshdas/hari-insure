import PillarLanding from "@/components/PillarLanding";
import AdvisorCTA from "@/components/AdvisorCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Term & Life Insurance Guide — Hari Insurance India",
  description: "Complete plain-English guide to term insurance in India — how much cover, which riders, what causes rejection, and how to compare plans.",
};

const termIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
  </svg>
);

export default function TermPillarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLanding
          pillar="Term Insurance"
          tagline="Pure life cover — maximum protection, lowest cost"
          description="Term insurance is the simplest, cheapest way to ensure your family is financially secure if you die. This guide covers everything — from understanding it to buying it right."
          color="#3b82f6"
          bg="#eff6ff"
          icon={termIcon}
          sections={[
            {
              level: "start",
              items: [
                { label: "What is term insurance?", href: "/term/what-is-term-insurance", desc: "The financial replica concept, simply explained" },
                { label: "Do I actually need it?", href: "/term/do-i-need-it", desc: "Who needs it, who doesn't" },
                { label: "Why term beats endowment and ULIP", href: "/term/vs-endowment-ulip", desc: "The honest comparison" },
              ],
            },
            {
              level: "learn",
              items: [
                { label: "How much cover do I need?", href: "/term/concepts#cover-amount", desc: "With the FD method calculator" },
                { label: "How long should my policy run?", href: "/term/concepts#policy-term" },
                { label: "Riders explained — critical illness, waiver", href: "/term/concepts#riders" },
                { label: "Return of premium — is it worth it?", href: "/term/concepts#rop" },
                { label: "What causes claim rejection?", href: "/term/concepts#claim-rejection" },
                { label: "How does the claim process work for nominees?", href: "/term/concepts#claim-process" },
              ],
            },
            {
              level: "decide",
              items: [
                { label: "I'm salaried", href: "/term/salaried" },
                { label: "I'm self-employed", href: "/term/self-employed", desc: "HLV, income proof, keyman" },
                { label: "I'm a smoker", href: "/term/smoker" },
                { label: "I'm an NRI", href: "/term/nri" },
                { label: "I'm a woman / housewife", href: "/term/woman" },
                { label: "Term insurance buying checklist", href: "/term/buying-checklist", desc: "10 items" },
                { label: "Plan comparison: top term plans 2026", href: "/term/plan-comparison" },
                { label: "Section 80C and 10(10D) — tax benefits", href: "/term/tax-benefits" },
              ],
            },
            {
              level: "problem",
              items: [
                { label: "My nominee doesn't know how to claim", href: "/term/nominee-guide" },
                { label: "The insurer is delaying my claim", href: "/term/claim-delay" },
                { label: "Grievance and Ombudsman guide", href: "/problems/ombudsman" },
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
