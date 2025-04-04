
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-primary font-raleway font-bold text-2xl">ENG. KIPCHUMBA IAN</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50 text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['about', 'education', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-accent capitalize font-medium transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <nav className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          {['about', 'education', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-xl font-medium text-foreground hover:text-accent capitalize transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
