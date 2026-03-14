import PillarLanding from "@/components/PillarLanding";
import AdvisorCTA from "@/components/AdvisorCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tax & Money Guide — Hari Insurance India",
  description: "How to use health and life insurance to save tax under sections 80C, 80D, and 10(10D). Old vs new tax regime explained.",
};

const taxIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

export default function TaxPillarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLanding
          pillar="Tax & Money"
          tagline="Maximise deductions, understand the new regime"
          description="Insurance is primarily for protection, but it's also one of the best ways to legally reduce your taxable income. Understand sections 80C, 80D, and how the new tax regime changes everything."
          color="#8b5cf6"
          bg="#f5f3ff"
          icon={taxIcon}
          sections={[
            {
              level: "start",
              items: [
                { label: "Section 80D: Health insurance deductions", href: "/health/80d-tax-benefit", desc: "Up to ₹1,00,000/year" },
                { label: "Section 80C & 10(10D): Life insurance benefits", href: "/term/tax-benefits", desc: "For term plans" },
              ],
            },
            {
              level: "learn",
              items: [
                { label: "Old vs New Tax Regime: Which is better for insurance?", href: "/tax/old-vs-new-regime" },
                { label: "Preventive health check-up deduction", href: "/tax/preventive-checkup", desc: "The ₹5,000 cash allowance" },
                { label: "Tax on ULIPs and Endowment maturity", href: "/tax/maturity-taxability" },
              ],
            },
            {
              level: "decide",
              items: [
                { label: "Can I claim premium paid for my in-laws?", href: "/tax/dependants" },
                { label: "NRI taxation on Indian policy payouts", href: "/tax/nri-taxation" },
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
