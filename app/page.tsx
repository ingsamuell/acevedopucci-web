import HeroSection from "@/components/HeroSection";
// Los demás componentes los iremos importando a medida que los creemos:
// import WhyChooseUs from "@/components/WhyChooseUs";
// import ServicesGrid from "@/components/ServicesGrid";
// import IndustryFocus from "@/components/IndustryFocus";
// import Testimonials from "@/components/Testimonials";
// import FAQSection from "@/components/FAQSection";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-main overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. ¿Por qué elegirnos? */}
      {/* <WhyChooseUs /> */}

      {/* 3. Soluciones Contables */}
      {/* <ServicesGrid /> */}

      {/* 4. Especialización Industrial */}
      {/* <IndustryFocus /> */}

      {/* 5. Testimonios */}
      {/* <Testimonials /> */}

      {/* 6. FAQs */}
      {/* <FAQSection /> */}

      {/* 7. Footer de Cierre */}
      {/* <Footer /> */}
    </main>
  );
}