import { Clock, Heart, Medal, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight animate-fade-in">
            Building the Web, One Line at a Time
          </h2>
          <p className="text-xl text-white/80 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Passionate MERN stack developer crafting scalable, modern web applications 
            with cutting-edge technologies and clean architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 p-8 rounded-2xl backdrop-blur-md text-center transform hover:-translate-y-2 transition-all duration-300 hover:border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Our Story
            </h3>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                As a full-stack MERN developer, I believe that great applications start with solid 
                architecture and clean code. My approach combines modern technologies with best 
                practices to create scalable, maintainable solutions.
              </p>
              <p>
                I specialize in MongoDB for flexible data modeling, Express.js for robust APIs, 
                React for dynamic user interfaces, and Node.js for efficient server-side logic—
                bringing together the full MERN stack into seamless, high-performance applications.
              </p>
              <p>
                Every project I work on is built with attention to detail, optimized for performance, 
                and designed with the end user in mind. From concept to deployment, I ensure quality 
                at every step of the development process.
              </p>
              <p className="font-medium text-white italic">
                Let's build something amazing together.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img 
                alt="Muhammad Muhib Khan Logo" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700" 
                src="/lovable-uploads/muhib-khan-logo-m.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [{
  icon: Medal,
  title: "Premium Code",
  description: "Industry-leading development practices and protocols backed by best practices."
}, {
  icon: Users,
  title: "Expert Guidance",
  description: "Dedicated team of development professionals to guide your projects."
}, {
  icon: Heart,
  title: "Full-Stack Approach",
  description: "Comprehensive development solutions addressing frontend and backend."
}, {
  icon: Clock,
  title: "Efficient Solutions",
  description: "Accelerate development and optimize performance in less time."
}];

export default AboutSection;
