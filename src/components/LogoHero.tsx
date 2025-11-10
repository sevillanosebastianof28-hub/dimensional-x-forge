import logo from "@/assets/dimensionalx-new-logo.png";

const LogoHero = () => {
  return (
    <div className="relative py-16 max-w-[1360px] mx-auto flex justify-center items-center">
      <div className="flex items-center gap-6">
        {/* Rotating 3D Cube */}
        <div className="relative w-20 h-20" style={{ perspective: '500px' }}>
          <div 
            className="w-full h-full relative animate-[spin_8s_linear_infinite]"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front face - Green */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 border border-green-300/30"
              style={{
                transform: 'translateZ(40px)',
              }}
            />
            {/* Back face - Green */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 border border-green-300/30"
              style={{
                transform: 'translateZ(-40px) rotateY(180deg)',
              }}
            />
            {/* Left face - Blue */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 border border-blue-300/30"
              style={{
                transform: 'rotateY(-90deg) translateZ(40px)',
              }}
            />
            {/* Right face - Blue */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 border border-blue-300/30"
              style={{
                transform: 'rotateY(90deg) translateZ(40px)',
              }}
            />
            {/* Top face - Red */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 border border-red-300/30"
              style={{
                transform: 'rotateX(90deg) translateZ(40px)',
              }}
            />
            {/* Bottom face - Red */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 border border-red-300/30"
              style={{
                transform: 'rotateX(-90deg) translateZ(40px)',
              }}
            />
          </div>
        </div>

        {/* DimensionalX Text */}
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold text-foreground tracking-tight">
            DimensionalX
          </h1>
          <p className="text-sm text-muted-foreground tracking-wide mt-1">
            Your Prototype Partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoHero;
