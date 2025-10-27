import { ArrowRight, Award, Users, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const StorySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className={`py-12 md:py-20 lg:py-24 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full font-medium text-lg">
                About Me
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Building the Future of
                <span className="block bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Web Development
                </span>
              </h2>
              <p className="text-2xl text-white/80 leading-relaxed">
                I'm Muhammad Muhib Khan, a passionate full-stack developer specializing in the MERN stack. 
                I create scalable, efficient, and user-friendly web applications that solve real-world problems 
                and deliver exceptional digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-white/70 leading-relaxed">
                My expertise spans across <strong className="text-white">MongoDB</strong> for robust database solutions, 
                <strong className="text-white"> Express.js</strong> for powerful backend APIs, 
                <strong className="text-white"> React</strong> for dynamic and responsive user interfaces, and 
                <strong className="text-white"> Node.js</strong> for high-performance server-side applications.
              </p>
              <p className="text-xl text-white/70 leading-relaxed">
                With a focus on clean code, best practices, and modern development workflows, I transform 
                ideas into fully functional applications. From concept to deployment, I handle the entire 
                development lifecycle with precision and attention to detail.
              </p>
              <blockquote className="text-2xl font-medium text-white italic border-l-4 border-white/20 pl-6">
                "Code is poetry written in logic."
              </blockquote>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center hover-scale">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full text-lg flex items-center gap-3 w-full sm:w-auto hover-multicolor-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60">
                  Let's Work Together
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
            <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-zinc-900 to-black p-12">
              <div className="text-center space-y-8">
                <div className="text-8xl font-bold text-yellow-400">{ }</div>
                <h3 className="text-3xl font-bold text-white">MERN Stack</h3>
                <div className="grid grid-cols-2 gap-6 text-left">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-yellow-400 font-bold text-xl mb-2">M</div>
                    <div className="text-white font-semibold">MongoDB</div>
                    <div className="text-white/60 text-sm">NoSQL Database</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-yellow-400 font-bold text-xl mb-2">E</div>
                    <div className="text-white font-semibold">Express.js</div>
                    <div className="text-white/60 text-sm">Backend Framework</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-yellow-400 font-bold text-xl mb-2">R</div>
                    <div className="text-white font-semibold">React</div>
                    <div className="text-white/60 text-sm">Frontend Library</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-yellow-400 font-bold text-xl mb-2">N</div>
                    <div className="text-white font-semibold">Node.js</div>
                    <div className="text-white/60 text-sm">Runtime Environment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const stats = [
  {
    icon: Globe,
    number: "20+",
    label: "Projects"
  },
  {
    icon: Users,
    number: "3+",
    label: "Years Experience"
  },
  {
    icon: Award,
    number: "100%",
    label: "Satisfaction"
  },
  {
    icon: Star,
    number: "MERN",
    label: "Specialist"
  }
];

export default StorySection;