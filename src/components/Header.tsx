import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/dimensionalx-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`flex justify-between items-center py-5 px-4 border-b border-border sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-background/98 shadow-[0_0_30px_rgba(0,255,255,0.2)]' : 'bg-background/95'}`}>
      <div className="flex items-center gap-4 max-w-[1360px] mx-auto w-full">
        <div className="flex items-center gap-4 flex-1">
          {/* Custom 3D Rotating Cube matching logo colors */}
          <div className="relative w-16 h-16 flex-shrink-0" style={{ perspective: '500px' }}>
            <div 
              className="absolute w-full h-full animate-spin3d"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front - Green */}
              <div className="absolute w-full h-full bg-gradient-to-br from-green-400 to-green-600" style={{ transform: 'translateZ(32px)' }} />
              {/* Back - Red */}
              <div className="absolute w-full h-full bg-gradient-to-br from-red-500 to-red-700" style={{ transform: 'translateZ(-32px) rotateY(180deg)' }} />
              {/* Right - Blue */}
              <div className="absolute w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500" style={{ transform: 'rotateY(90deg) translateZ(32px)' }} />
              {/* Left - Red */}
              <div className="absolute w-full h-full bg-gradient-to-br from-red-500 to-red-700" style={{ transform: 'rotateY(-90deg) translateZ(32px)' }} />
              {/* Top - Blue */}
              <div className="absolute w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500" style={{ transform: 'rotateX(90deg) translateZ(32px)' }} />
              {/* Bottom - Green */}
              <div className="absolute w-full h-full bg-gradient-to-br from-green-400 to-green-600" style={{ transform: 'rotateX(-90deg) translateZ(32px)' }} />
            </div>
          </div>
          
          {/* Static Text */}
          <div>
            <div className="text-3xl font-extrabold">
              <span className="text-foreground">Dimensional</span>
              <span className="text-red-500">X</span>
            </div>
            <div className="text-[10px] text-cyan-400 font-space-grotesk font-light tracking-[0.2em] uppercase">
              your prototype partner
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-2.5">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-foreground px-3.5 py-2.5 font-semibold text-sm transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer relative group"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button 
            onClick={() => scrollToSection('mission')} 
            className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer relative group"
          >
            <span className="relative z-10">Mission</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer relative group"
          >
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button 
            onClick={() => scrollToSection('process')} 
            className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer relative group"
          >
            <span className="relative z-10">Process</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button 
            onClick={() => scrollToSection('machines')} 
            className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer relative group"
          >
            <span className="relative z-10">Machines</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button 
            onClick={() => scrollToSection('quality')} 
            className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer relative group"
          >
            <span className="relative z-10">Quality Control</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer relative group"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <Button
            onClick={() => window.location.href = '/portal'} 
            className="ml-2 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-110"
          >
            <span className="relative z-10">Portal</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
