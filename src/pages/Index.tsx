
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import DirectionSection from "@/components/DirectionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { useEffect, useState } from "react";

const Index = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main" className="scroll-mt-20">
        <HeroSection />
        <DirectionSection />
        <StorySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />

      {/* Removed legacy Top button; handled globally in App.tsx */}
    </div>
  );
};

export default Index;
