import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/dimensionalx-logo-new.png";
import cube from "@/assets/cube-new.png";
import machineVideo from "@/assets/machine-animation.mp4";

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
      <div className="absolute inset-0 opacity-30 z-[1]" style={{
      backgroundImage: `repeating-linear-gradient(0deg, #00F6FF 0, #00F6FF 1px, transparent 1px, transparent 30px),
                           repeating-linear-gradient(90deg, #00F6FF 0, #00F6FF 1px, transparent 1px, transparent 30px)`,
      backgroundSize: '30px 30px',
      animation: 'pulse 4s ease-in-out infinite'
    }} />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#00A8CC]/10 via-transparent to-[#00F6FF]/10 pointer-events-none" />
      
      {/* Glowing orbs for ambiance */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#00F6FF]/20 rounded-full blur-[120px] z-[1] animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#00A8CC]/15 rounded-full blur-[140px] z-[1] animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Cyan particles effect */}
      <div className="absolute inset-0 z-[1] opacity-40 pointer-events-none" style={{
        background: 'radial-gradient(circle at 20% 30%, #00F6FF 0%, transparent 2%), radial-gradient(circle at 80% 70%, #00A8CC 0%, transparent 2%), radial-gradient(circle at 40% 80%, #00F6FF 0%, transparent 1.5%)',
        backgroundSize: '200px 200px, 150px 150px, 180px 180px',
        animation: 'float 20s ease-in-out infinite'
      }} />

      {/* Main Content Container */}
      <div className="relative z-[2] py-16 px-[70px] bg-gradient-to-br from-[#1A1C1F]/90 via-[#2A2D33]/85 to-[#1A1C1F]/90 rounded-[24px] border border-[#00F6FF]/50 shadow-[0_0_60px_rgba(0,246,255,0.4),0_0_100px_rgba(0,168,204,0.2)] backdrop-blur-md">
        <div className="flex justify-between items-start gap-20">
          {/* Text Block */}
          <div className="flex-[0_0_45%] max-w-[580px]">
            {/* Logo with spinning cube */}
            <div className="mb-12 animate-fade-in">
              <div className="flex items-center gap-6">
                <img 
                  src={cube} 
                  alt="Dimensional X Cube" 
                  className="w-[120px] h-auto animate-[spin_8s_linear_infinite] drop-shadow-[0_0_40px_rgba(0,246,255,0.6)]"
                />
                <img 
                  src={logo} 
                  alt="Dimensional X" 
                  className="w-[500px] h-auto drop-shadow-[0_0_40px_rgba(0,246,255,0.6)] hover:drop-shadow-[0_0_60px_rgba(0,246,255,0.9)] transition-all duration-500"
                />
              </div>
            </div>
            
            <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-[3.8rem] font-extrabold leading-[1.05] mb-6" style={{ color: '#F5F7FA' }}>
                High-Precision Parts. Fast Turnaround. Zero Compromise.
              </h1>
              <p className="text-[1.3rem] leading-relaxed mb-4" style={{ color: '#E3EAF0' }}>
                Dimensional X delivers CNC-manufactured components with tight tolerances, dependable lead times, and consistent quality — trusted by engineers, product teams, and manufacturers who need accuracy without delays or risk.
              </p>
            </div>
            
            <div className="flex gap-5 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                onClick={() => navigate("/request-quote")}
                className="px-12 py-8 text-[1.15rem] font-extrabold bg-[#00F6FF] text-[#1A1C1F] hover:bg-[#00A8CC] shadow-[0_0_40px_rgba(0,246,255,0.6),0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(0,246,255,0.9),0_6px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 relative overflow-hidden group border-2 border-[#00F6FF]/50"
              >
                <span className="relative z-10">Fast Quotation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('machines')}
                className="px-10 py-8 text-[1.15rem] font-bold border-2 border-[#00F6FF]/70 bg-[#2A2D33]/60 hover:bg-[#00F6FF]/20 hover:border-[#00F6FF] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,246,255,0.3)]"
                style={{ color: '#F5F7FA' }}
              >
                See Our Capabilities
              </Button>
            </div>
          </div>

          {/* Video Visual Block */}
          <div className="flex-[0_0_52%] relative">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F6FF]/40 to-[#00A8CC]/30 rounded-2xl blur-[100px] group-hover:blur-[120px] transition-all duration-700" />
              
              {/* Video Container */}
              <div className="relative bg-gradient-to-br from-[#1A1C1F]/80 to-[#2A2D33]/70 p-8 rounded-2xl border-2 border-[#00F6FF]/60 backdrop-blur-md shadow-[0_0_60px_rgba(0,246,255,0.4),0_0_100px_rgba(0,168,204,0.2)] group-hover:shadow-[0_0_90px_rgba(0,246,255,0.6),0_0_140px_rgba(0,168,204,0.3)] transition-all duration-500 h-[650px] animate-scale-in overflow-hidden" style={{ animationDelay: '0.3s' }}>
                <video 
                  src={machineVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* Overlay labels */}
                <div className="absolute top-6 left-6 bg-[#1A1C1F]/95 backdrop-blur-md px-6 py-4 rounded-xl border-2 border-[#00F6FF]/70 z-10 animate-fade-in shadow-[0_0_30px_rgba(0,246,255,0.4)]" style={{ animationDelay: '0.4s' }}>
                  <p className="text-xs mb-1 uppercase tracking-wider" style={{ color: '#A7AEB8' }}>Live Demonstration</p>
                  <p className="text-base font-bold" style={{ color: '#00F6FF' }}>Precision CNC Machining Center</p>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-[#1A1C1F]/90 backdrop-blur-md p-5 rounded-xl border-2 border-[#00F6FF]/50 z-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <p className="text-xs mb-3 uppercase tracking-wider" style={{ color: '#A7AEB8' }}>Watch the Process</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-[#00F6FF]/25 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#00F6FF]/50 text-sm font-semibold" style={{ color: '#F5F7FA' }}>
                      Real-Time Manufacturing Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Specifications */}
            <div className="mt-8 grid grid-cols-3 gap-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-[#2A2D33]/70 backdrop-blur-md p-6 rounded-xl border-2 border-[#00F6FF]/40 hover:border-[#00F6FF]/80 hover:bg-[#00F6FF]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(0,246,255,0.2)]">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: '#00F6FF' }}>±0.001"</div>
                <div className="text-sm font-medium" style={{ color: '#A7AEB8' }}>Tight Tolerance</div>
              </div>
              <div className="bg-[#2A2D33]/70 backdrop-blur-md p-6 rounded-xl border-2 border-[#00F6FF]/40 hover:border-[#00F6FF]/80 hover:bg-[#00F6FF]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(0,246,255,0.2)]">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: '#00F6FF' }}>5-Axis</div>
                <div className="text-sm font-medium" style={{ color: '#A7AEB8' }}>Advanced CNC</div>
              </div>
              <div className="bg-[#2A2D33]/70 backdrop-blur-md p-6 rounded-xl border-2 border-[#00F6FF]/40 hover:border-[#00F6FF]/80 hover:bg-[#00F6FF]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(0,246,255,0.2)]">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: '#00F6FF' }}>Fast</div>
                <div className="text-sm font-medium" style={{ color: '#A7AEB8' }}>Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>;
};

export default Hero;
