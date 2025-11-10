import { Button } from "@/components/ui/button";
import cncPart from "@/assets/cnc-part.jpg";

const Hero = () => {
  return (
    <div className="relative flex-1 flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--grid-color))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--grid-color))_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 w-full max-w-7xl gap-10">
        {/* Content Box */}
        <div className="relative border border-primary/70 rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.3)] p-8 md:p-16 backdrop-blur-sm bg-background/80 md:w-[55%] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-shadow duration-300">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Precision.<br />
            Performance.<br />
            <span className="text-primary">Perfection.</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mt-5 mb-8 leading-relaxed">
            Dimensional X delivers end-to-end CNC manufacturing solutions — from concept to production — with digital precision and refined project visibility.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground px-8 py-3 font-semibold shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all"
          >
            Request a Quote
          </Button>
        </div>

        {/* Floating 3D Part */}
        <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
          <img 
            src={cncPart}
            alt="CNC Precision Part" 
            className="w-full h-full object-contain animate-spin3d opacity-90 drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
