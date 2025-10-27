import { Mail, MapPin, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const [emailColor, setEmailColor] = useState('green-500');
  const [instaColor, setInstaColor] = useState('green-500');
  const colors = ['green-500', 'emerald-500', 'lime-500', 'teal-500'];

  const cycleColor = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(prev => {
      const index = colors.indexOf(prev);
      return colors[(index + 1) % colors.length];
    });
  };
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
    <section ref={sectionRef} className={`py-20 bg-white dark:bg-black scroll-mt-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-4 py-2 bg-green-500/10 text-green-500 rounded-full font-medium mb-4 border border-green-500/20 backdrop-blur-sm">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white tracking-tight">
              Let's Work Together!
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl">
              Whether you're interested in collaborating on a project or have questions about 
              my work, I'm here to help. Let's build something amazing together!
            </p>
            
            <div className="space-y-8">

              {/* Location */}
              <div className="flex items-start p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={24} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Available for remote work<br />
                    and local projects
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={24} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">Email</h3>
                  <a 
                    href="mailto:muhibkhan2410@gmail.com"
                    className={`text-${emailColor} hover:text-${emailColor} transition-colors`}
                    onMouseEnter={() => cycleColor(setEmailColor)}
                  >
                    muhibkhan2410@gmail.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Instagram size={24} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">Follow</h3>
                  <a 
                    href="https://instagram.com/muhibkhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${instaColor} hover:text-${instaColor} transition-colors`}
                    onMouseEnter={() => cycleColor(setInstaColor)}
                  >
                    @muhibkhan (Instagram)
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-black dark:text-white">Send a Message</h3>
            <div className="rounded-2xl shadow-2xl p-4 md:p-6 overflow-auto bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-md">
              <iframe
                id="JotFormIFrame-251135682357156"
                title="Contact Form"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/251135682357156"
                frameBorder={0}
                style={{ 
                  width: '100%', 
                  maxWidth: '640px', 
                  height: '600px', 
                  border: 'none',
                  margin: '0 auto',
                  display: 'block',
                  backgroundColor: 'transparent'
                }}
                loading="lazy"
                scrolling="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
