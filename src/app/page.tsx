import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularPlans from "@/components/PopularPlans";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <PopularPlans />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
