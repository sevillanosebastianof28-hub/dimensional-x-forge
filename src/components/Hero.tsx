import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import Scene3D from "@/components/Scene3D";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#050607] overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#0a0d12_1px,transparent_1px),linear-gradient(90deg,#0a0d12_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* Neon Frame */}
      <div className="absolute inset-4 md:inset-10 border border-primary/60 rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.5)]"></div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl px-8 md:px-16 text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Precision.<br />
          Performance.<br />
          <span className="text-primary">Perfection.</span>
        </h1>
        <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
          Dimensional X delivers end-to-end CNC manufacturing solutions — from concept to production — with digital precision and refined project visibility.
        </p>
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground px-8 py-3 font-semibold shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:shadow-[0_0_35px_rgba(0,255,255,0.9)] transition-all"
        >
          Request a Quote
        </Button>
      </div>
    </section>
  );
};

export default Hero;
