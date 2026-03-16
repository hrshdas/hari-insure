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
import LeadForm from "@/components/LeadForm";

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

        <section className="bg-brand-green-light/30 py-16 border-t border-brand-green/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-3 font-outfit">
                Need Help Choosing?
              </h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                Our licensed advisors can help you navigate policies and find the best coverage for your family.
              </p>
            </div>
            <LeadForm variant="large" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
