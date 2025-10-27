
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Lock, Sun, Moon, Book, Bot } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import OwnersOnlyDialog from "./OwnersOnlyDialog";

function Logo() {
  return (
    <div
      aria-label="MK Logo"
      role="img"
      className="h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-500 flex items-center justify-center select-none transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
    >
      <span className="text-black/90 font-light text-3xl tracking-wide leading-none">M</span>
    </div>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOwnersDialogOpen, setIsOwnersDialogOpen] = useState(false);
  const { pathname } = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark' | 'reading'>(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | 'reading' | null;
    if (saved && ['light', 'dark', 'reading'].includes(saved)) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'reading');
    if (theme === 'dark') root.classList.add('dark');
    else if (theme === 'reading') root.classList.add('reading');
    else root.classList.add('light'); // default for light
    localStorage.setItem('theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (meta) {
      if (theme === 'dark') meta.setAttribute('content', '#000000');
      else if (theme === 'reading') meta.setAttribute('content', '#f5f5dc');
      else meta.setAttribute('content', '#ffffff');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'reading';
      return 'light';
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.35)] glassmorphism">
      <button type="button" onClick={() => scrollToSection('main')} className="absolute left-2 top-2 z-[60] px-3 py-2 rounded bg-yellow-500 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 -translate-y-20 focus:translate-y-0 transition-transform">Skip to content</button>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="flex items-center space-x-3">
          {/* Updated logo - clickable to go home */}
          <Link to="/" className="group animate-glow">
            <Logo />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 animate-slide-in">
          <Link to="/" className={`font-medium transition-colors border-b-2 ${pathname === '/' ? 'dark:text-white text-black border-yellow-400' : 'dark:text-white/80 text-black/80 dark:hover:text-white hover:text-black border-transparent hover:border-yellow-400'} hover-scale`}>
            Home
          </Link>
          <Link to="/licensee" onMouseEnter={() => import('@/pages/Owners')} className={`font-medium transition-colors border-b-2 ${pathname === '/licensee' ? 'dark:text-white text-black border-yellow-400' : 'dark:text-white/80 text-black/80 dark:hover:text-white hover:text-black border-transparent hover:border-yellow-400'} hover-scale`}>
            Skills & Experience
          </Link>
          <Link to="/ai" className={`font-medium transition-colors border-b-2 ${pathname === '/ai' ? 'dark:text-white text-black border-yellow-400' : 'dark:text-white/80 text-black/80 dark:hover:text-white hover:text-black border-transparent hover:border-yellow-400'} hover-scale`}>
            <Bot size={16} className="inline mr-1" />
            AI Assistant
          </Link>
          <Link to="/shop" onMouseEnter={() => import('@/pages/Shop')} className={`font-medium transition-colors border-b-2 ${pathname === '/shop' ? 'dark:text-white text-black border-yellow-400' : 'dark:text-white/80 text-black/80 dark:hover:text-white hover:text-black border-transparent hover:border-yellow-400'} hover-scale`}>
            Projects
          </Link>
          
          <button
            onClick={() => setIsOwnersDialogOpen(true)}
            className="font-medium text-white/80 hover:text-white transition-colors flex items-center gap-2 hover-scale"
          >
            <Lock size={16} />
            Owners Only
          </button>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <button
            aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'reading' : 'light'} mode`}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full dark:bg-white/10 dark:text-white dark:hover:bg-white/20 bg-black/10 text-black hover:bg-black/20 flex items-center justify-center hover-scale"
          >
            {theme === 'light' ? <Sun size={18} /> : theme === 'dark' ? <Moon size={18} /> : <Book size={18} />}
          </button>
          <Button 
            className="bg-white text-black hover:bg-white/90 rounded-full px-6 hover-multicolor-bg hover-scale"
            onClick={() => scrollToSection('contact')}
          >
            Contact Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 dark:text-white text-black hover-scale"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 dark:bg-black/95 bg-white/95 backdrop-blur-lg w-full shadow-lg py-6 border-t border-white/10 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-2 px-4">
            <Link 
              to="/"
              className={`font-medium rounded-lg px-4 py-3 transition-colors text-lg block ${pathname === '/' ? 'dark:text-white text-black dark:bg-white/10 bg-black/5' : 'dark:text-white/90 text-black/90 dark:hover:text-white hover:text-black dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10'}`}
            >
              Home
            </Link>
            <Link 
              to="/licensee"
              className={`font-medium rounded-lg px-4 py-3 transition-colors text-lg block ${pathname === '/licensee' ? 'dark:text-white text-black dark:bg-white/10 bg-black/5' : 'dark:text-white/90 text-black/90 dark:hover:text-white hover:text-black dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10'}`}
            >
              Skills & Experience
            </Link>
            <Link 
              to="/ai"
              className={`font-medium rounded-lg px-4 py-3 transition-colors text-lg block ${pathname === '/ai' ? 'dark:text-white text-black dark:bg-white/10 bg-black/5' : 'dark:text-white/90 text-black/90 dark:hover:text-white hover:text-black dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10'}`}
            >
              <Bot size={20} className="inline mr-2" />
              AI Assistant
            </Link>
            <Link 
              to="/shop"
              className={`font-medium rounded-lg px-4 py-3 transition-colors text-lg block ${pathname === '/shop' ? 'dark:text-white text-black dark:bg-white/10 bg-black/5' : 'dark:text-white/90 text-black/90 dark:hover:text-white hover:text-black dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10'}`}
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
            <div className="flex items-center gap-3 mt-2">
              <button
                aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'reading' : 'light'} mode`}
                onClick={toggleTheme}
                className="flex-1 rounded-full bg-white/10 text-white hover:bg-white/20 px-4 py-3 flex items-center justify-center gap-2"
              >
                {theme === 'light' ? <Sun size={18} /> : theme === 'dark' ? <Moon size={18} /> : <Book size={18} />}
                <span>{theme === 'light' ? 'Light mode' : theme === 'dark' ? 'Dark mode' : 'Reading mode'}</span>
              </button>
              <Button 
                className="bg-white text-black hover:bg-white/90 rounded-full flex-1 py-4 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Now
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <OwnersOnlyDialog open={isOwnersDialogOpen} onOpenChange={setIsOwnersDialogOpen} />
    </header>
  );
};

export default Navbar;
