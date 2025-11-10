import CNCParts3D from "./CNCParts3D";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <main id="hero" className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 z-[1] animate-pulse" style={{
      backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--grid-color)) 0, hsl(var(--grid-color)) 1px, transparent 1px, transparent 30px),
                           repeating-linear-gradient(90deg, hsl(var(--grid-color)) 0, hsl(var(--grid-color)) 1px, transparent 1px, transparent 30px)`,
      backgroundSize: '30px 30px'
    }} />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Glowing orbs for ambiance */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-[1] animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/15 rounded-full blur-[120px] z-[1] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content Container */}
      <div className="relative z-[2] py-12 px-[70px] bg-gradient-to-br from-black/60 via-black/50 to-black/40 rounded-[24px] border border-primary/40 shadow-[0_0_40px_rgba(0,255,255,0.3),0_0_80px_rgba(0,255,255,0.1)] backdrop-blur-sm">
        <div className="flex justify-between items-center gap-16">
          {/* Text Block */}
          <div className="flex-[0_0_48%] max-w-[550px]">
            <div className="mb-8">
              <h1 className="text-[5rem] font-extrabold leading-[0.95] m-0 bg-gradient-to-r from-foreground via-primary/90 to-foreground bg-clip-text text-transparent animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default">
                Precision.
              </h1>
              <h1 className="text-[5rem] font-extrabold leading-[0.95] m-0 bg-gradient-to-r from-foreground via-accent/90 to-foreground bg-clip-text text-transparent animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default" style={{ animationDelay: '0.1s' }}>
                Performance.
              </h1>
              <h1 className="text-[5rem] font-extrabold leading-[0.95] m-0 bg-gradient-to-r from-foreground via-primary/90 to-foreground bg-clip-text text-transparent animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>
                Perfection.
              </h1>
            </div>
            
            <div className="mb-8 space-y-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl text-foreground/90 leading-relaxed font-medium">
                Dimensional X delivers end-to-end CNC manufacturing solutions — from concept to production.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience digital precision, refined project visibility, and industry-leading quality standards.
              </p>
            </div>
            
            <div className="flex gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                onClick={() => navigate("/request-quote")}
                className="px-8 py-6 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] transition-all duration-300 hover:scale-110 relative overflow-hidden group"
              >
                <span className="relative z-10">Request a Quote</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('machines')}
                className="px-8 py-6 text-base font-bold border-2 border-primary/60 bg-transparent text-primary hover:bg-primary/20 hover:border-primary hover:scale-110 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View Machines</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Button>
            </div>
          </div>

          {/* 3D Visualization with Labels */}
          <div className="flex-[0_0_48%] flex flex-col justify-center items-center relative animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-[550px] relative rounded-xl overflow-hidden border border-primary/30 bg-black/20 shadow-[inset_0_0_30px_rgba(0,255,255,0.1)] hover:border-primary/60 hover:shadow-[inset_0_0_50px_rgba(0,255,255,0.2)] transition-all duration-500 group">
              <CNCParts3D />
              
              {/* Overlay label */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/40 z-10 hover:bg-black/90 hover:border-primary/70 transition-all duration-300 group/label">
                <p className="text-xs text-muted-foreground mb-1 group-hover/label:text-primary transition-colors">Interactive 3D View</p>
                <p className="text-sm font-bold text-primary group-hover/label:scale-110 transition-transform inline-block">Click & Drag to Rotate</p>
              </div>
              
              {/* Part labels */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90 hover:bg-black/90 hover:border-primary/60 hover:scale-105 transition-all duration-300 cursor-default">
                  Precision Gears
                </div>
                <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90 hover:bg-black/90 hover:border-primary/60 hover:scale-105 transition-all duration-300 cursor-default">
                  CNC Shaft
                </div>
                <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90 hover:bg-black/90 hover:border-primary/60 hover:scale-105 transition-all duration-300 cursor-default">
                  Engine Block
                </div>
                <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90 hover:bg-black/90 hover:border-primary/60 hover:scale-105 transition-all duration-300 cursor-default">
                  Ball Bearings
                </div>
                <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90 hover:bg-black/90 hover:border-primary/60 hover:scale-105 transition-all duration-300 cursor-default">
                  Cutting Tools
                </div>
              </div>
            </div>
            
            {/* Tech specs below 3D view */}
            <div className="mt-4 w-full grid grid-cols-2 gap-3 text-center">
              <div className="bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group cursor-default">
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Precision</p>
                <p className="text-sm font-bold text-primary group-hover:scale-110 transition-transform inline-block">High-Tolerance</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group cursor-default">
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Production</p>
                <p className="text-sm font-bold text-primary group-hover:scale-110 transition-transform inline-block">Mission-Critical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>;
};
export default Hero;