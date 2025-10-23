import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code2, Database, Server, Layers, Award, Star, ArrowLeft, Briefcase, GraduationCap, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const technicalSkills = [{
  icon: Database,
  title: "MongoDB",
  description: "Expert in NoSQL database design, aggregation pipelines, indexing strategies, and performance optimization for scalable applications."
}, {
  icon: Server,
  title: "Express.js",
  description: "Proficient in building RESTful APIs, middleware implementation, authentication systems, and server-side architecture."
}, {
  icon: Code2,
  title: "React.js",
  description: "Advanced skills in component architecture, state management (Redux, Context), hooks, performance optimization, and modern React patterns."
}, {
  icon: Terminal,
  title: "Node.js",
  description: "Experienced in building scalable backend services, event-driven architecture, asynchronous programming, and npm package management."
}, {
  icon: Layers,
  title: "Full-Stack Integration",
  description: "Seamless integration of frontend and backend, API design, real-time features with WebSockets, and deployment strategies."
}, {
  icon: Award,
  title: "Best Practices",
  description: "Code quality, testing (Jest, Mocha), version control (Git), CI/CD, security best practices, and clean code principles."
}];

const additionalSkills = [
  "TypeScript & JavaScript (ES6+)",
  "RESTful API Design & GraphQL",
  "Authentication & Authorization (JWT, OAuth)",
  "State Management (Redux, MobX, Context API)",
  "Responsive Web Design & Tailwind CSS",
  "Git Version Control & GitHub",
  "Agile/Scrum Methodologies",
  "Testing (Unit, Integration, E2E)",
  "Docker & Containerization",
  "AWS & Cloud Deployment",
  "Performance Optimization",
  "Database Design & Modeling"
];

const experienceHighlights = [
  {
    role: "Full-Stack MERN Developer",
    company: "Freelance",
    period: "2022 - Present",
    achievement: "20+ Successful Projects",
    description: "Developed full-stack web applications for diverse clients, specializing in MERN stack solutions with focus on performance and user experience."
  },
  {
    role: "Backend Developer",
    company: "Previous Role",
    period: "2021 - 2022", 
    achievement: "API Optimization Expert",
    description: "Built and optimized RESTful APIs, implemented authentication systems, and improved database query performance by 300%."
  },
  {
    role: "Frontend Developer",
    company: "Early Career",
    period: "2020 - 2021",
    achievement: "React Specialist",
    description: "Created responsive, user-friendly interfaces with React, focusing on component reusability and state management best practices."
  }
]; 

const stats = [
  {
    icon: Code2,
    number: "3+",
    label: "Years Experience"
  },
  {
    icon: Briefcase,
    number: "20+",
    label: "Projects Completed"
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Client Satisfaction"
  },
  {
    icon: Star,
    number: "MERN",
    label: "Stack Expert"
  }
];

const Licensee = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="inline-block px-6 py-3 bg-yellow-500/10 text-yellow-400 rounded-full font-medium mb-6 border border-yellow-500/30">
              Skills & Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My Technical
              <span className="block text-yellow-400">Expertise</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Full-stack MERN developer with expertise in building scalable web applications. 
              Passionate about clean code, modern technologies, and delivering exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-full"
                onClick={scrollToContact}
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-4 text-lg rounded-full"
                onClick={() => document.getElementById('technical-skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Skills
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black via-yellow-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-lg">PORTFOLIO STATS</span>
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Track Record
              <span className="block text-yellow-400 mt-2">In MERN Development</span>
            </h2>
            <p className="text-xl text-white/70">
              Numbers that showcase my commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all">
                <stat.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="technical-skills" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Core MERN Stack Skills
            </h2>
            <p className="text-lg text-white/70">
              Deep expertise in the MongoDB, Express.js, React, and Node.js ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-black/40 border border-yellow-500/20 p-8 rounded-2xl backdrop-blur-md hover:border-yellow-400/40 transition-all group">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <skill.icon size={28} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
                <p className="text-white/70">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-white">Additional Technical Skills</h3>
                <ul className="space-y-4 mb-8">
                  {additionalSkills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-yellow-400" size={20} />
                      <span className="text-white/80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                  <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
                    <GraduationCap className="mr-3 text-yellow-400" size={24} />
                    Development Philosophy
                  </h4>
                  <div className="space-y-4 text-white/80">
                    <p>
                      I believe in writing clean, maintainable code that follows industry best practices 
                      and design patterns. My approach focuses on:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>• Scalable and modular architecture</li>
                      <li>• Performance optimization</li>
                      <li>• Security-first development</li>
                      <li>• Comprehensive testing</li>
                      <li>• Clear documentation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                  <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
                    <Briefcase className="mr-3 text-yellow-400" size={24} />
                    Available for Projects
                  </h4>
                  <p className="text-white/70 mb-6 text-lg">
                    Open to freelance work, consulting, and full-time opportunities. 
                    Let's build something amazing together!
                  </p>
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-full"
                    onClick={scrollToContact}
                  >
                    Discuss Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Experience
            </h2>
            <p className="text-lg text-white/70">
              Journey through my career in MERN stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceHighlights.map((experience, index) => (
              <div key={index} className="bg-black/40 border border-yellow-500/20 p-8 rounded-2xl backdrop-blur-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-yellow-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                    <p className="text-white/60 text-sm">{experience.company}</p>
                  </div>
                </div>
                <p className="text-yellow-400 text-sm font-semibold mb-4">{experience.period}</p>
                <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs font-medium mb-4">
                  {experience.achievement}
                </div>
                <p className="text-white/70">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Licensee;