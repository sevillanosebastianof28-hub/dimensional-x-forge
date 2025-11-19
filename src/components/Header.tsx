import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/cube_logo-2.png";
import cube from "@/assets/cube-new.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`flex justify-between items-center py-5 px-4 border-b border-border sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-background/98 shadow-[0_0_30px_rgba(0,255,255,0.2)]' : 'bg-background/95'}`}>
      <div className="flex items-center justify-between gap-4 max-w-[1360px] mx-auto w-full">
        <div className="flex items-center gap-3 md:gap-4">
          <img 
            src={cube} 
            alt="Dimensional X Cube" 
            className="h-10 md:h-14 w-auto animate-[spin_8s_linear_infinite] hover:scale-110 transition-transform duration-500"
          />
          <img 
            src={logo} 
            alt="DimensionalX - Your Prototype Partner" 
            className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
        
        {/* Desktop Navigation */}
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

      {/* Mobile Navigation Menu */}
      <div className={`absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-4 space-y-2 animate-fade-in">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-foreground px-4 py-3 font-semibold text-base transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('mission')} 
            className="text-muted-foreground px-4 py-3 font-semibold text-base transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg text-left"
          >
            Mission
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-muted-foreground px-4 py-3 font-semibold text-base transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('process')} 
            className="text-muted-foreground px-4 py-3 font-semibold text-base transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg text-left"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection('machines')} 
            className="text-muted-foreground px-4 py-3 font-semibold text-base transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg text-left"
          >
            Machines
          </button>
          <button 
            onClick={() => scrollToSection('quality')} 
            className="text-muted-foreground px-4 py-3 font-semibold text-base transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg text-left"
          >
            Quality Control
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground px-4 py-3 font-semibold text-base transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg text-left"
          >
            Contact
          </button>
          <Button
            onClick={() => window.location.href = '/portal'} 
            className="w-full px-4 py-3 text-base font-bold relative overflow-hidden group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300"
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
