import PillarLanding from "@/components/PillarLanding";
import AdvisorCTA from "@/components/AdvisorCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Motor Insurance Guide — HariInsurance India",
  description: "Third-party vs comprehensive, IDV, NCB, add-ons — everything about motor insurance in India explained simply.",
};

const motorIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

export default function MotorPillarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLanding
          pillar="Motor Insurance"
          tagline="Third-party, comprehensive, IDV, add-ons — demystified"
          description="Motor insurance is mandatory in India — but most people don't understand what they're buying. This guide helps you choose smart, avoid the IDV trap, and pick add-ons that actually matter."
          color="#f97316"
          bg="#fff7ed"
          icon={motorIcon}
          sections={[
            {
              level: "start",
              items: [
                { label: "Third-party vs own damage vs comprehensive", href: "/motor/types-of-cover", desc: "What's the difference?" },
                { label: "Is third-party-only ever enough?", href: "/motor/types-of-cover#tp-only" },
              ],
            },
            {
              level: "learn",
              items: [
                { label: "IDV — what it is and why it matters at claim time", href: "/motor/concepts#idv" },
                { label: "No Claim Bonus — how it builds and how to protect it", href: "/motor/concepts#ncb" },
                { label: "How depreciation reduces your claim payout", href: "/motor/concepts#depreciation" },
                { label: "What motor insurance covers and excludes", href: "/motor/concepts#covers-excludes" },
                { label: "IRDAI-fixed third-party premium rates", href: "/motor/concepts#tp-rates" },
                { label: "Zero depreciation add-on — when to buy", href: "/motor/addons#zero-dep" },
                { label: "Engine protection — who needs it", href: "/motor/addons#engine-protection" },
                { label: "NCB protect add-on", href: "/motor/addons#ncb-protect" },
                { label: "Return to invoice — first 3 years only", href: "/motor/addons#rti" },
              ],
            },
            {
              level: "decide",
              items: [
                { label: "What does motor insurance typically cost?", href: "/motor/cost-guide" },
                { label: "When to renew vs switch insurers", href: "/motor/cost-guide#renewal" },
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
