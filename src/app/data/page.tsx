import PillarLanding from "@/components/PillarLanding";
import AdvisorCTA from "@/components/AdvisorCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Data & Comparisons — HariInsurance India",
  description: "Claim settlement ratios, premium inflation data, and objective plan comparisons built from IRDAI data.",
};

const dataIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M18 20V10M12 20V4M6 20v-6"/>
  </svg>
);

export default function DataPillarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLanding
          pillar="Data & Comparisons"
          tagline="Objective data straight from IRDAI reports"
          description="We do not sell data. We extract the hard numbers from dense regulatory reports and present them clearly so you can choose the right insurer."
          color="#0d3d35"
          bg="#f5f0e8"
          icon={dataIcon}
          sections={[
            {
              level: "start",
              items: [
                { label: "Claim Settlement Ratio (CSR) Explained", href: "/data/csr-explained", desc: "Why high CSR isn't always good" },
                { label: "Health Insurer CSR Data (2025-26)", href: "/data/health-csr" },
                { label: "Life Insurer CSR Data (2025-26)", href: "/data/life-csr" },
              ],
            },
            {
              level: "learn",
              items: [
                { label: "Incurred Claim Ratio (ICR) vs CSR", href: "/data/icr" },
                { label: "Grievance Ratio — The real metric for service", href: "/data/grievance-ratio" },
                { label: "Medical inflation rate in India (Historical data)", href: "/data/medical-inflation" },
              ],
            },
            {
              level: "decide",
              items: [
                { label: "Top Health Plans Comparison 2026", href: "/health/plan-comparison" },
                { label: "Top Term Plans Comparison 2026", href: "/term/plan-comparison" },
                { label: "Is a PSU (Govt) insurer better than a private one?", href: "/data/psu-vs-private" },
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
