
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-white/5 text-white rounded-full font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-lg text-white/80">
            Hear from clients and collaborators I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/30 border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFFFFF" color="#FFFFFF" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.role}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.role}</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "Working with Muhib was amazing! His MERN stack expertise brought our vision to life with clean, scalable code.",
    role: "Client, E-commerce Platform",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256"
  },
  {
    quote: "At just 15, Muhib has more skill than developers twice his age. His React applications are fast, beautiful, and maintainable.",
    role: "Tech Lead, Startup",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256"
  },
  {
    quote: "The full-stack solution Muhib delivered exceeded expectations. Professional, efficient, and creative—highly recommended!",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256"
  }
];

export default TestimonialsSection;
