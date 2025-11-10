import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import Scene3D from "@/components/Scene3D";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050607]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#0a0d12_1px,transparent_1px),linear-gradient(90deg,#0a0d12_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      {/* Neon Frame */}
      <div className="absolute inset-8 border border-primary/70 rounded-[2rem] shadow-[0_0_35px_rgba(0,255,255,0.4)]"></div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 55 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Precision.<br />
          Performance.<br />
          <span className="text-primary">Perfection.</span>
        </h1>
        <p className="text-gray-300 text-lg mt-6 mb-8 max-w-md">
          Dimensional X delivers end-to-end CNC manufacturing solutions — from concept to production — with digital precision and refined project visibility.
        </p>
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition-all"
        >
          Request a Quote
        </Button>
      </div>
    </section>
  );
};

export default Hero;
