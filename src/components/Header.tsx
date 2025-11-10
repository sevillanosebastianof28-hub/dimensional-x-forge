import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
          <div className="relative w-10 h-10" style={{ perspective: '400px' }}>
            <div 
              className="absolute w-full h-full animate-spin3d"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front - Red */}
              <div className="absolute w-full h-full bg-gradient-to-br from-red-500/50 to-red-700/30 border border-red-400/60 backdrop-blur-sm shadow-[0_0_15px_rgba(255,0,0,0.4)]" style={{ transform: 'translateZ(20px)' }} />
              {/* Back - Cyan */}
              <div className="absolute w-full h-full bg-gradient-to-br from-primary/40 to-primary/20 border border-primary/50 backdrop-blur-sm" style={{ transform: 'translateZ(-20px) rotateY(180deg)' }} />
              {/* Right - Blue */}
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/50 to-blue-700/30 border border-blue-400/60 backdrop-blur-sm shadow-[0_0_15px_rgba(0,100,255,0.4)]" style={{ transform: 'rotateY(90deg) translateZ(20px)' }} />
              {/* Left - Cyan */}
              <div className="absolute w-full h-full bg-gradient-to-br from-primary/35 to-primary/15 border border-primary/50 backdrop-blur-sm" style={{ transform: 'rotateY(-90deg) translateZ(20px)' }} />
              {/* Top - Green */}
              <div className="absolute w-full h-full bg-gradient-to-br from-green-500/50 to-green-700/30 border border-green-400/60 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,0,0.4)]" style={{ transform: 'rotateX(90deg) translateZ(20px)' }} />
              {/* Bottom - Cyan */}
              <div className="absolute w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 backdrop-blur-sm" style={{ transform: 'rotateX(-90deg) translateZ(20px)' }} />
            </div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-foreground">DimensionalX</div>
            <div className="text-[10px] text-primary font-space-grotesk font-light tracking-[0.2em] uppercase">your prototype partner</div>
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
