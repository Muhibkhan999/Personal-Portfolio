import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2,
  Database,
  Server,
  Globe,
  ShoppingCart,
  Star,
  ArrowLeft,
  ExternalLink,
  Github,
  Layers,
  Smartphone,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    category: "Full-Stack",
    description: "Complete MERN stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "Redux"],
    image: "/lovable-uploads/487d5543-6459-44e0-b756-380783bb7919.png",
    icon: <ShoppingCart className="w-5 h-5 text-yellow-400" />,
    features: ["Payment Gateway", "Admin Dashboard", "Real-time Updates", "User Authentication"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    name: "Social Media Dashboard",
    category: "Full-Stack",
    description: "Real-time social media analytics dashboard with data visualization, user engagement metrics, and content scheduling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Chart.js"],
    image: "/lovable-uploads/d3cce626-a17d-47cc-a505-0425d50285bc.png",
    icon: <TrendingUp className="w-5 h-5 text-yellow-400" />,
    features: ["Real-time Analytics", "Data Visualization", "Content Scheduler", "Multi-platform Support"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    name: "Task Management System",
    category: "Full-Stack",
    description: "Collaborative task management application with team workspace, drag-and-drop interface, and project tracking.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Material-UI"],
    image: "/lovable-uploads/906a762b-b63c-43d9-877c-e01a42f5a54b.png",
    icon: <Layers className="w-5 h-5 text-yellow-400" />,
    features: ["Drag & Drop", "Team Collaboration", "Project Timelines", "File Attachments"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    name: "Real Estate Listing Platform",
    category: "Full-Stack",
    description: "Property listing and search platform with advanced filters, virtual tours, and agent management system.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Mapbox", "Cloudinary"],
    image: "/lovable-uploads/70978ae6-f448-446a-ad43-4474707e9838.png",
    icon: <Globe className="w-5 h-5 text-yellow-400" />,
    features: ["Property Search", "Map Integration", "Virtual Tours", "Agent Portal"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    name: "Healthcare Appointment System",
    category: "Full-Stack",
    description: "Medical appointment scheduling system with patient records, doctor availability, and telemedicine integration.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Twilio", "WebRTC"],
    image: "/lovable-uploads/65662061-08b1-4586-b67e-c421063d351b.png",
    icon: <Users className="w-5 h-5 text-yellow-400" />,
    features: ["Appointment Booking", "Video Consultations", "Patient Records", "SMS Notifications"],
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    name: "Online Learning Platform",
    category: "Full-Stack",
    description: "Educational platform with course management, video streaming, quizzes, and progress tracking for students.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "AWS S3", "Stripe"],
    image: "/lovable-uploads/53a979fd-0494-4fb3-9569-612c85f5d66f.png",
    icon: <Code2 className="w-5 h-5 text-yellow-400" />,
    features: ["Video Streaming", "Course Management", "Quiz System", "Progress Tracking"],
    github: "#",
    demo: "#"
  },
  {
    id: 7,
    name: "Restaurant Management System",
    category: "Full-Stack",
    description: "Complete restaurant management solution with online ordering, table reservations, and kitchen display system.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "QR Code"],
    image: "/lovable-uploads/0f6a99e4-41f1-41d8-9dbc-8acc1411e82d.png",
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    features: ["Online Ordering", "Table Reservations", "Kitchen Display", "QR Menu"],
    github: "#",
    demo: "#"
  },
  {
    id: 8,
    name: "Fitness Tracking App",
    category: "Full-Stack",
    description: "Fitness and workout tracking application with exercise library, progress charts, and nutrition planning.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js", "PWA"],
    image: "/lovable-uploads/2316cae8-0672-4529-962b-5d4ba13e7e29.png",
    icon: <Smartphone className="w-5 h-5 text-yellow-400" />,
    features: ["Workout Tracking", "Progress Analytics", "Nutrition Planning", "Social Features"],
    github: "#",
    demo: "#"
  },
  {
    id: 9,
    name: "Blog & CMS Platform",
    category: "Full-Stack",
    description: "Content management system with rich text editor, SEO optimization, and multi-author support.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "TinyMCE", "Helmet"],
    image: "/lovable-uploads/0abc4ff9-5b18-464e-ba6d-9e0c91fbb14c.png",
    icon: <Database className="w-5 h-5 text-yellow-400" />,
    features: ["Rich Text Editor", "SEO Tools", "Multi-author", "Comment System"],
    github: "#",
    demo: "#"
  }
];

const ProjectCard = ({ project }: { project: any }) => (
  <Card className="bg-black/40 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4">
        <Badge className="bg-yellow-500 text-black font-semibold">
          {project.category}
        </Badge>
      </div>
    </div>
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <CardTitle className="text-white text-lg group-hover:text-yellow-400 transition-colors">
          {project.name}
        </CardTitle>
        <div className="flex items-center">
          {project.icon}
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <CardDescription className="text-white/80 mb-4 h-20 overflow-hidden">
        {project.description}
      </CardDescription>
      
      <div className="mb-4">
        <p className="text-white/60 text-xs font-semibold mb-2">TECH STACK:</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string, idx: number) => (
            <span key={idx} className="text-xs px-2 py-1 bg-white/10 text-yellow-400 rounded-full border border-yellow-500/30">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
        <p className="text-white/60 text-xs font-semibold mb-2">KEY FEATURES:</p>
        <ul className="space-y-1">
          {project.features.slice(0, 3).map((feature: string, idx: number) => (
            <li key={idx} className="text-white/70 text-xs flex items-center">
              <Star className="w-3 h-3 text-yellow-400 mr-1 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" size="sm">
          <ExternalLink className="w-4 h-4 mr-2" />
          Demo
        </Button>
        <Button variant="outline" className="flex-1 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black" size="sm">
          <Github className="w-4 h-4 mr-2" />
          Code
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Full-Stack", "Frontend", "Backend"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My Portfolio
              <span className="block text-yellow-400">Projects</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Explore my collection of MERN stack projects showcasing full-stack development, 
              modern UI/UX design, and scalable architecture.
            </p>
            <div className="flex items-center justify-center gap-4 text-white/70">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Clean Code</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Scalable Architecture</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Optimized Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-black/50 sticky top-20 z-40 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium rounded-xl border-2 transition-all ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-white/20 text-white border-yellow-500/50 hover:bg-yellow-500 hover:text-black hover:border-yellow-500"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Let's collaborate on your next project. I'm available for freelance work, 
              consulting, and full-time opportunities.
            </p>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-full"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Work Together
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Shop;