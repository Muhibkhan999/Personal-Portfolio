
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Licensee from "./pages/Licensee";
import Owners from "./pages/Owners";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LicenseDisclosure from "./pages/LicenseDisclosure";
import Accessibility from "./pages/Accessibility";
import CookiePolicy from "./pages/CookiePolicy";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import AI from "./pages/AI";

const queryClient = new QueryClient();

const App = () => {
  const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        const scrolled = window.scrollY;
        setVisible(scrolled > 200);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-24 sm:right-24 md:right-28 z-40 transition-opacity ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg flex items-center justify-center hover:brightness-110 transition">
          <ArrowUp className="h-4 w-4 text-black" strokeWidth={2} />
        </div>
      </button>
    );
  };
  useSmoothScroll();
  
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const headerOffset = 80;
    const scrollWithOffset = (hash?: string) => {
      const id = (hash || window.location.hash).replace('#', '');
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    // handle on initial load if URL has a hash
    if (window.location.hash) {
      setTimeout(() => scrollWithOffset(), 0);
    }
    const onHashChange = () => scrollWithOffset();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <BrowserRouter>
          <RouteContainer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const RouteContainer = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return (
    <div key={pathname} className="animate-fade-in">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/licensee" element={<Licensee />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/license-disclosure" element={<LicenseDisclosure />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/returns-policy" element={<ReturnsPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
