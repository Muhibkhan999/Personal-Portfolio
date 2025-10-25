
import { Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-4 py-2 bg-rest-blue/10 text-rest-blue rounded-full font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-rest-darkblue mb-6">
              Let's Work Together!
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Whether you're interested in collaborating on a project or have questions about 
              my work, I'm here to help. Let's build something amazing together!
            </p>
            
            <div className="space-y-8">

              {/* Location */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-rest-blue/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={24} className="text-rest-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">
                    Available for remote work<br />
                    and local projects
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-rest-blue/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={24} className="text-rest-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:muhibkhan2410@gmail.com"
                    className="text-gray-600 hover:text-rest-blue transition-colors"
                  >
                    muhibkhan2410@gmail.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-rest-blue/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Instagram size={24} className="text-rest-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Follow</h3>
                  <a 
                    href="https://instagram.com/muhibkhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rest-blue transition-colors"
                  >
                    @muhibkhan (Instagram)
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-rest-darkblue">Send a Message</h3>
            <div className="bg-white rounded-lg shadow-lg p-4 overflow-auto">
              <iframe
                id="JotFormIFrame-251135682357156"
                title="Contact Form"
                onLoad={() => window.parent.scrollTo(0,0)}
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/251135682357156"
                frameBorder={0}
                style={{ 
                  width: '100%', 
                  maxWidth: '640px', 
                  height: '600px', 
                  border: 'none',
                  margin: '0 auto',
                  display: 'block'
                }}
                scrolling="yes"
              />
              <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
              <script dangerouslySetInnerHTML={{
                __html: `
                  window.jotformEmbedHandler("iframe[id='JotFormIFrame-251135682357156']", "https://form.jotform.com/")
                `
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
