import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-0 bg-background border-b border-border relative z-20 max-w-[1360px] mx-auto">
      <div className="flex items-center gap-4">
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
        <div className="text-2xl font-extrabold text-foreground">DimensionalX</div>
      </div>
      <nav className="hidden md:flex items-center gap-2.5">
        <a href="#" className="text-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground/80">
          Home
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          About Us
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Services & Capabilities
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Machine List
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Gallery
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          RFQ
        </a>
        <a href="#" className="text-muted-foreground px-3.5 py-2.5 font-semibold text-sm transition hover:text-foreground">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
