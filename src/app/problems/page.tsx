import PillarLanding from "@/components/PillarLanding";
import AdvisorCTA from "@/components/AdvisorCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Problems, Rejections & Rights — Hari Insurance India",
  description: "What to do when your claim is rejected, how to escalate to the GRO, IGMS, and the Insurance Ombudsman.",
};

const problemIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4M12 16h.01"/>
  </svg>
);

export default function ProblemsPillarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLanding
          pillar="Problems & Rights"
          tagline="Know your rights, fight unfair rejections"
          description="Insurers sometimes reject valid claims. If that happens, you have powerful regulatory tools at your disposal. Learn how to escalate complaints and win."
          color="#ef4444"
          bg="#fef2f2"
          icon={problemIcon}
          sections={[
            {
              level: "start",
              items: [
                { label: "My health claim was rejected — step-by-step guide", href: "/health/claim-rejected" },
                { label: "My life insurance claim is delayed", href: "/term/claim-delay" },
                { label: "How to use the Bima Bharosa (IGMS) portal", href: "/problems/igms" },
              ],
            },
            {
              level: "learn",
              items: [
                { label: "Insurance Ombudsman — Free, powerful, binding on insurers", href: "/health/ombudsman", desc: "The ultimate weapon for policyholders" },
                { label: "Section 45 of Insurance Act — the 3-year rule", href: "/problems/section-45", desc: "Why insurers can't reject life claims after 3 years" },
                { label: "How to read your policy's 'Exclusions' section", href: "/problems/reading-exclusions" },
              ],
            },
            {
              level: "decide",
              items: [
                { label: "Porting your health insurance to a better company", href: "/health/porting-guide" },
                { label: "Should I hire a claim settlement agency?", href: "/problems/claim-agencies" },
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
