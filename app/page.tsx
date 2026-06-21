import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesGrid from "@/components/ServicesGrid";
import IndustryFocus from "@/components/IndustryFocus";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer"; // 1. IMPORTAR

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-main overflow-x-hidden">
      <HeroSection />
      <WhyChooseUs />
      <ServicesGrid />
      <IndustryFocus />
      <Testimonials />
      <FAQSection />
      
      {/* 7. Footer de Cierre */}
      <Footer /> {/* 2. RENDERIZAR */}
    </main>
  );
}