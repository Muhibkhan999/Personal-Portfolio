import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, MapPin, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState(0);
  const fullSubtitle = "Full-stack web developer specializing in MongoDB, Express.js, React, and Node.js. Building scalable, modern web applications with clean code and exceptional user experiences.";
  const [subtitle, setSubtitle] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.2 }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCounter(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    setTimeout(() => clearInterval(interval), 5000);

    // Typewriter effect for subtitle
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullSubtitle.length) {
        setSubtitle(fullSubtitle.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 15);

    return () => {
      clearInterval(interval);
      clearInterval(typeInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black transition-all duration-700"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse animate-float" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full blur-3xl animate-pulse bg-black/5 dark:bg-white/5 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-transparent rounded-full blur-3xl animate-spin-slow animate-glow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px] opacity-20" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in animate-slide-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 rounded-full border border-yellow-500/30 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mr-2" />
              <span className="text-sm font-medium dark:text-white text-black">MERN Stack Developer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold dark:text-white text-black leading-tight tracking-tight">
                Hi, I'm
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Muhib Khan
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl dark:text-white/80 text-black/70 max-w-2xl leading-relaxed">
                {subtitle}
                <span className="inline-block w-3 h-6 align-middle ml-1 bg-black/50 dark:bg-white/60 animate-pulse" />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold px-8 py-4 text-lg hover-scale group hover-multicolor-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t dark:border-white/10 border-black/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">20+</div>
                <div className="text-sm dark:text-white/70 text-black/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">MERN</div>
                <div className="text-sm dark:text-white/70 text-black/70">Stack Expert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">100%</div>
                <div className="text-sm dark:text-white/70 text-black/70">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo & Features */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Enhanced Logo Display */}
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-500/20 to-black/10 dark:to-white/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative rounded-3xl overflow-hidden border backdrop-blur-sm p-8 hover-scale flex items-center justify-center border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5">
                <div className="text-center">
                  <div className="text-6xl font-bold dark:text-white text-black mb-4">MK</div>
                  <div className="text-2xl text-yellow-500 dark:text-yellow-400 font-semibold">Muhammad Muhib Khan</div>
                  <div className="text-lg dark:text-white/70 text-black/70 mt-2">MERN Stack Developer</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm rounded-xl p-4 border transition-colors hover:border-yellow-500/30 hover-scale bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
                <MapPin className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mb-2" />
                <div className="text-sm font-medium dark:text-white text-black">MongoDB</div>
                <div className="text-xs dark:text-white/70 text-black/70">Database Expert</div>
              </div>
              <div className="backdrop-blur-sm rounded-xl p-4 border transition-colors hover:border-yellow-500/30 hover-scale bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
                <Users className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mb-2" />
                <div className="text-sm font-medium dark:text-white text-black">Express.js</div>
                <div className="text-xs dark:text-white/70 text-black/70">Backend Development</div>
              </div>
              <div className="backdrop-blur-sm rounded-xl p-4 border transition-colors hover:border-yellow-500/30 hover-scale bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
                <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mb-2" />
                <div className="text-sm font-medium dark:text-white text-black">React.js</div>
                <div className="text-xs dark:text-white/70 text-black/70">Frontend Specialist</div>
              </div>
              <div className="backdrop-blur-sm rounded-xl p-4 border transition-colors hover:border-yellow-500/30 hover-scale bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
                <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mb-2" />
                <div className="text-sm font-medium dark:text-white text-black">Node.js</div>
                <div className="text-xs dark:text-white/70 text-black/70">Runtime Environment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border rounded-full flex justify-center border-white/60">
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;