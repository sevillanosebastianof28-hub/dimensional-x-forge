import cncParts from "@/assets/cnc-parts-3d.png";
const Hero = () => {
  return <main className="flex-grow flex items-center justify-center py-20 px-20 relative z-[1] max-w-[1400px] mx-auto">
      {/* Content Box with Neon Glow */}
      <div className="bg-black/40 rounded-[20px] py-16 px-20 flex justify-between items-center gap-20 w-full border border-primary shadow-[0_0_25px_rgba(0,255,255,0.5),0_0_50px_rgba(0,255,255,0.2)] relative">
        {/* Text Block */}
        <div className="flex-[0_0_50%] max-w-[550px] relative z-[3]">
          <h1 className="text-[4.8rem] font-extrabold leading-[1.1] m-0 text-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Precision.
          </h1>
          <h1 className="text-[4.8rem] font-extrabold leading-[1.1] m-0 text-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Performance.
          </h1>
          <h1 className="text-[4.8rem] font-extrabold leading-[1.1] m-0 text-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Perfection.
          </h1>
          <p className="text-lg text-muted-foreground my-6 mb-10 leading-relaxed max-w-[480px]">
            Dimensional X delivers end-to-end CNC manufacturing solutions — from concept to production — with digital precision and refined project visibility.
          </p>
          <a href="#" className="inline-block px-9 py-4 text-primary bg-transparent border-2 border-primary font-bold rounded-md transition-all shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:bg-primary hover:text-background hover:shadow-[0_0_25px_rgba(0,255,255,1)] no-underline relative z-[3]">
            Request a Quote
          </a>
        </div>

        {/* Image Block */}
        <div className="flex-[0_0_50%] flex justify-center items-center relative min-h-[350px]">
          {/* Background Light Trails */}
          <img src="https://i.imgur.com/8Q9jN57.png" alt="Abstract light trails background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] opacity-70 z-[1]" style={{
          filter: 'blur(0.5px) brightness(1.2)'
        }} />

          {/* 3D CNC Parts */}
          
        </div>

        {/* Cursor Icon */}
        <div className="absolute right-10 bottom-10 w-5 h-5 border-l-[3px] border-b-[3px] border-[#ccc] rotate-[-45deg] opacity-50 z-[12]" />
      </div>
    </main>;
};
export default Hero;