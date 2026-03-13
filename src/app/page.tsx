import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsuranceLearningCenter from "@/components/InsuranceLearningCenter";
import FeaturedPlans from "@/components/FeaturedPlans";
import InsuranceCostGuide from "@/components/InsuranceCostGuide";
import RegulatoryTrust from "@/components/RegulatoryTrust";
import ComplianceDisclaimer from "@/components/ComplianceDisclaimer";

import PopularPlans from "@/components/PopularPlans";
import HariAdvantage from "@/components/HariAdvantage";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <InsuranceLearningCenter />
        <FeaturedPlans />
        <InsuranceCostGuide />
        <RegulatoryTrust />
        <ComplianceDisclaimer />

        <PopularPlans />
        <HariAdvantage />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
