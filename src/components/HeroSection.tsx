import { useState, useEffect } from "react";
import { ArrowRight, Play, MapPin, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setStatsCounter(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    setTimeout(() => clearInterval(interval), 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-transparent rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px] opacity-20" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 rounded-full border border-yellow-500/30 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-white">MERN Stack Developer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Hi, I'm
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Muhib Khan
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Full-stack web developer specializing in MongoDB, Express.js, React, and Node.js. Building scalable, modern web applications with clean code and exceptional user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold px-8 py-4 text-lg hover-scale group"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">20+</div>
                <div className="text-sm text-white/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">MERN</div>
                <div className="text-sm text-white/70">Stack Expert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo & Features */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Enhanced Logo Display */}
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-500/20 to-white/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm bg-white/5 p-8 hover-scale flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4">MK</div>
                  <div className="text-2xl text-yellow-400 font-semibold">Muhammad Muhib Khan</div>
                  <div className="text-lg text-white/70 mt-2">MERN Stack Developer</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-500/30 transition-colors hover-scale">
                <MapPin className="w-6 h-6 text-yellow-400 mb-2" />
                <div className="text-sm font-medium text-white">MongoDB</div>
                <div className="text-xs text-white/70">Database Expert</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-500/30 transition-colors hover-scale">
                <Users className="w-6 h-6 text-yellow-400 mb-2" />
                <div className="text-sm font-medium text-white">Express.js</div>
                <div className="text-xs text-white/70">Backend Development</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-500/30 transition-colors hover-scale">
                <TrendingUp className="w-6 h-6 text-yellow-400 mb-2" />
                <div className="text-sm font-medium text-white">React.js</div>
                <div className="text-xs text-white/70">Frontend Specialist</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-500/30 transition-colors hover-scale">
                <Star className="w-6 h-6 text-yellow-400 mb-2" />
                <div className="text-sm font-medium text-white">Node.js</div>
                <div className="text-xs text-white/70">Runtime Environment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;