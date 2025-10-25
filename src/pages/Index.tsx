
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import DirectionSection from "@/components/DirectionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <DirectionSection />
        <StorySection />
        <NewArrivalsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
