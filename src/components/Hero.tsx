
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-32 relative">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/65e83e35-6507-48c0-b2b8-36e53e26fdd4.png")',
          filter: 'blur(8px)',
          transform: 'scale(1.1)', // Scale slightly to avoid blur edges
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-secondary/90 to-white/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary slide-in">
            ENG. KIPCHUMBA IAN
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 slide-in delay-100">
            Engineering Solutions, Building Tomorrow
          </p>
          <div className="slide-in delay-200">
            <Button 
              onClick={scrollToAbout} 
              className="group bg-primary hover:bg-accent text-white rounded-full px-8 py-6 flex items-center space-x-2 mx-auto"
            >
              <span>Discover More</span>
              <ArrowDown className="transition-transform group-hover:translate-y-1" size={18} />
            </Button>
          </div>
          <div className="mt-16 slide-in delay-300 hidden md:block">
            <div className="w-0.5 h-20 bg-gray-400 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
