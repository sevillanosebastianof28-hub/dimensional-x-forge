import MachineAssembly3D from "./MachineAssembly3D";
import SpinningCube3D from "./SpinningCube3D";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/dimensionalx-logo.png";

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
            {/* Logo - Large and Prominent with Orbiting Cube */}
            <div className="mb-10 animate-fade-in flex items-start gap-6">
              <div className="w-[100px] h-[100px] flex-shrink-0">
                <SpinningCube3D />
              </div>
              <img 
                src={logo} 
                alt="Dimensional X" 
                className="w-[480px] h-auto mt-2 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:drop-shadow-[0_0_50px_rgba(0,255,255,0.7)] transition-all duration-500"
              />
            </div>
            
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-[3.5rem] font-extrabold leading-[1.1] mb-4 text-foreground">
                High-Precision Parts. Fast Turnaround. Reliable Every Time.
              </h1>
              <p className="text-xl text-secondary-foreground leading-relaxed mb-3">
                Dimensional X delivers CNC-manufactured components with precision tolerances, consistent quality, and dependable lead times — built for engineers, designers, and global manufacturing teams.
              </p>
            </div>
            
            <div className="flex gap-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                onClick={() => navigate("/request-quote")}
                className="px-10 py-7 text-lg font-extrabold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:shadow-[0_0_60px_rgba(0,255,255,0.9)] transition-all duration-300 hover:scale-110 relative overflow-hidden group"
              >
                <span className="relative z-10">Upload Your Drawing for a Fast Quote</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('machines')}
                className="px-8 py-7 text-lg font-bold border-2 border-primary/60 bg-background/40 text-foreground hover:bg-primary/15 hover:border-primary hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                See Our Capabilities
              </Button>
            </div>
          </div>

          {/* 3D Visual Block */}
          <div className="flex-[0_0_48%] relative">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-3xl group-hover:blur-[80px] transition-all duration-700" />
              
              {/* 3D Canvas Container */}
              <div className="relative bg-gradient-to-br from-black/70 to-black/50 p-6 rounded-2xl border border-primary/40 backdrop-blur-sm shadow-[0_0_50px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_80px_rgba(0,255,255,0.5)] transition-all duration-500 h-[600px] animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <MachineAssembly3D />
                
                {/* Overlay labels */}
                <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-5 py-3 rounded-lg border border-primary/60 z-10 animate-fade-in shadow-[0_0_20px_rgba(0,255,255,0.3)]" style={{ animationDelay: '0.4s' }}>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Realistic 3D Assembly</p>
                  <p className="text-sm font-bold text-primary">Precision CNC Manufacturing</p>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-4 rounded-lg border border-primary/40 z-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Featured Components</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/40 text-xs text-foreground font-medium">
                      Raw Materials → Sub-Assemblies → Final Machine
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Specifications */}
            <div className="mt-6 grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group">
                <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">±0.001"</div>
                <div className="text-xs text-secondary-foreground">Tolerance</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group">
                <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">5-Axis</div>
                <div className="text-xs text-secondary-foreground">Machining</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group">
                <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-xs text-secondary-foreground">Production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>;
};

export default Hero;
