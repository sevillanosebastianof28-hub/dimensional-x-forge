import { Button } from "@/components/ui/button";
import cncParts from "@/assets/cnc-parts-3d.png";

const Hero = () => {
  return (
    <main className="relative px-10 py-16 overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 z-[1]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--grid-color)) 0, hsl(var(--grid-color)) 1px, transparent 1px, transparent 30px),
                           repeating-linear-gradient(90deg, hsl(var(--grid-color)) 0, hsl(var(--grid-color)) 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Glowing Content Box */}
      <div className="relative z-[2] p-16 bg-black/40 rounded-[20px] border border-primary shadow-[0_0_25px_rgba(0,255,255,0.5),0_0_50px_rgba(0,255,255,0.2)]">
        <div className="flex justify-between items-center gap-12">
          {/* Text Block */}
          <div className="flex-1 max-w-[500px]">
            <h1 className="text-[4.5rem] font-extrabold leading-[1.1] mb-0 text-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Precision.
            </h1>
            <h1 className="text-[4.5rem] font-extrabold leading-[1.1] mb-0 text-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Performance.
            </h1>
            <h1 className="text-[4.5rem] font-extrabold leading-[1.1] mb-0 text-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Perfection.
            </h1>
            <p className="text-lg text-muted-foreground mt-6 mb-10 leading-relaxed max-w-[450px]">
              Dimensional X delivers end-to-end CNC manufacturing solutions — from concept to production — with digital precision and refined project visibility.
            </p>
            <a 
              href="#" 
              className="inline-block px-9 py-4 text-primary bg-transparent border-2 border-primary font-bold rounded-md transition-all shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:bg-primary hover:text-background hover:shadow-[0_0_25px_rgba(0,255,255,1)]"
            >
              Request a Quote
            </a>
          </div>

          {/* Image Block */}
          <div className="flex-1 flex justify-center items-center">
            <img 
              src={cncParts} 
              alt="3D rendered CNC machine parts" 
              className="max-w-full"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(0, 255, 255, 0.6))'
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
