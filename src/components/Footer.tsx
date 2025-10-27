import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import OwnersOnlyDialog from "./OwnersOnlyDialog";

const Footer = () => {
  const [isOwnersDialogOpen, setIsOwnersDialogOpen] = useState(false);
  
  return (
    <footer className="bg-white dark:bg-black border-t dark:border-white/10 border-black/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="backdrop-blur-sm border rounded-xl p-6 transition-colors dark:bg-white/5 dark:border-white/10 bg-black/5 border-black/10 hover:border-yellow-500/30">
            <h3 className="text-xl font-bold mb-6 dark:text-white text-black tracking-tight">MUHIB KHAN</h3>
            <p className="dark:text-white/70 text-black/70 mb-6">
              Full-stack MERN developer passionate about building scalable web applications. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 hover:text-yellow-500 transition-colors" aria-label="GitHub">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-6 dark:text-white text-black tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setIsOwnersDialogOpen(true)}
                  className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity flex items-center gap-2"
                >
                  <Lock size={16} />
                  Owners Only
                </button>
              </li>
              <li><Link to="/" className="dark:text-white/70 text-black/70 hover:text-yellow-500 transition-opacity">Home</Link></li>
              <li><Link to="/licensee" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Skills & Experience</Link></li>
              <li><Link to="/shop" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Projects</Link></li>
              <li><button onClick={() => {
                const el = document.getElementById('contact');
                if (!el) return;
                const headerOffset = 80;
                const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }} className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Contact</button></li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-6 dark:text-white text-black tracking-tight">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Privacy Policy</a></li>
              <li><a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Terms of Service</a></li>
              <li><a href="/license-disclosure" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">License Disclosure</a></li>
              <li><a href="/returns-policy" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Return Policy</a></li>
              <li><a href="/accessibility" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Accessibility</a></li>
              <li><a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-opacity">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-6 dark:text-white text-black tracking-tight">Subscribe</h3>
            <p className="dark:text-white/70 text-black/70 mb-4">
              Get the latest news and special offers.
            </p>
            <form className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                className="dark:bg-white/5 dark:border-white/10 dark:placeholder:text-white/50 dark:text-white bg-black/5 border-black/10 placeholder:text-black/50 text-black"
              />
              <Button variant="secondary" className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t dark:border-white/10 border-black/10 mt-12 pt-8 text-center">
          <p className="dark:text-white/70 text-black/70">
            &copy; {new Date().getFullYear()} Muhammad Muhib Khan. All rights reserved.
          </p>
        </div>
      </div>
      
      <OwnersOnlyDialog open={isOwnersDialogOpen} onOpenChange={setIsOwnersDialogOpen} />
    </footer>
  );
};

export default Footer;
