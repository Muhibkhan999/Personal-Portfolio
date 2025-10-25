
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import OwnersOnlyDialog from "./OwnersOnlyDialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOwnersDialogOpen, setIsOwnersDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } catch (error) {
      console.error(`Error scrolling to ${sectionId}:`, error);
      // Fallback for cross-origin issues
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: yOffset, behavior: 'smooth'});
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="flex items-center space-x-3">
          {/* Updated logo - clickable to go home */}
          <Link to="/" className="group">
            <img 
              src="/lovable-uploads/muhib-khan-logo-m.png" 
              alt="MK Logo" 
              className="h-16 w-16 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/licensee" className="font-medium text-white/80 hover:text-white transition-colors">
            Skills & Experience
          </Link>
          <Link to="/shop" className="font-medium text-white/80 hover:text-white transition-colors">
            Projects
          </Link>
          
          <button
            onClick={() => setIsOwnersDialogOpen(true)}
            className="font-medium text-white/80 hover:text-white transition-colors flex items-center gap-2"
          >
            <Lock size={16} />
            Owners Only
          </button>
          
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-white text-black hover:bg-white/90 rounded-full px-6"
            onClick={() => scrollToSection('contact')}
          >
            Contact Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg w-full shadow-lg py-6 border-t border-white/10 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-2 px-4">
            <Link 
              to="/"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Home
            </Link>
            <Link 
              to="/licensee"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Skills & Experience
            </Link>
            <Link 
              to="/shop"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Projects
            </Link>
            <button
              onClick={() => setIsOwnersDialogOpen(true)}
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg flex items-center gap-2 w-full"
            >
              <Lock size={20} />
              Owners Only
            </button>
            <Button 
              className="bg-white text-black hover:bg-white/90 rounded-full w-full mt-2 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Now
            </Button>
          </div>
        </div>
      )}
      
      <OwnersOnlyDialog open={isOwnersDialogOpen} onOpenChange={setIsOwnersDialogOpen} />
    </header>
  );
};

export default Navbar;
