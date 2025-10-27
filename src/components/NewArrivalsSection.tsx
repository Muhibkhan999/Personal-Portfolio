import { ArrowRight, Snowflake, Thermometer, Bath, Cylinder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewArrivalsSection = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full font-medium mb-6 border border-yellow-500/30 backdrop-blur-sm">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Recent Work
            <span className="block bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            A snapshot of recent client projects and product builds with a focus on clean UX, performance, and maintainable MERN architecture. 
            Explore the case studies below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newArrivals.map((product, index) => (
            <div key={index} className={index === 0 ? 'lg:col-span-2' : ''}>
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button className="bg-white text-black hover:bg-white/90 px-12 py-6 rounded-full text-xl font-semibold flex items-center gap-4 mx-auto">
              Explore All Products
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <div 
      className="group bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transform hover:-translate-y-4 transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`overflow-hidden relative ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img 
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20">
            New
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
            {product.icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
          {product.description}
        </p>
        
        <Link to="/shop">
          <Button className="bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black w-full py-3 rounded-xl transition-all duration-300">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

const newArrivals = [
  {
    name: "E‑commerce Dashboard (MERN)",
    description: "A scalable admin dashboard with role-based access, charts, and lightning-fast product/catalog management. Shipped with React Query caching and optimistic updates.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    icon: <Thermometer className="w-5 h-5 text-white" />
  },
  {
    name: "SaaS Analytics Platform",
    description: "Multi-tenant analytics with team workspaces, usage-based billing, and shareable dashboards. Built for performance and clarity.",
    image: "https://images.unsplash.com/photo-1551281044-8d8d0a6c5f57?q=80&w=1600&auto=format&fit=crop",
    icon: <Cylinder className="w-5 h-5 text-white" />
  },
  {
    name: "Portfolio CMS + Blog",
    description: "A fast MDX/Headless CMS blog with full-text search, tag filters, and SEO-friendly routes. Built to be easily maintainable.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    icon: <Bath className="w-5 h-5 text-white" />
  }
];

export default NewArrivalsSection;