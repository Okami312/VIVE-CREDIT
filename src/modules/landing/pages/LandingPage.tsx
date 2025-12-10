import HeroSection from "../components/HeroSection";
import BrandStorySection from "../components/BrandStorySection";
import BenefitsSection from "../components/BenefitsSection";
import ProductsSection from "../components/ProductsSection";
import CostsDAESection from "../components/CostsDAESection";
import StepsSection from "../components/StepsSection";
import SecurityGDPRSection from "../components/SecurityGDPRSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import SEO from "@/components/SEO";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition">
      <SEO
        title="VIVE CREDIT – Soluții de creditare rapide și sigure"
        description="Aplică online pentru un credit rapid și transparent. Proces 100% digital, decizie rapidă și costuri clare. VIVE CREDIT – IFN digital modern."
      />

      <HeroSection />
      <BrandStorySection />
      <BenefitsSection />
      <ProductsSection />
      <CostsDAESection />
      <StepsSection />
      <SecurityGDPRSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
