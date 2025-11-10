import MissionParts3D from "./MissionParts3D";

const Mission = () => {
  return (
    <section id="mission" className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 2px, transparent 2px, transparent 40px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Mission</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Engineering Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Main Content */}
        <div className="flex gap-12 items-center">
          {/* Image Side */}
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 p-6 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all duration-500 h-[500px]">
                <MissionParts3D />
                
                {/* Overlay labels */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-primary/50 z-10">
                  <p className="text-xs text-muted-foreground mb-1">Complex Assembly</p>
                  <p className="text-sm font-bold text-primary">Mission-Critical Parts</p>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                  <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90">
                    Precision Valve
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90">
                    Turbine Wheel
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90">
                    Hydraulic Cylinder
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/30 text-xs text-foreground/90">
                    Connector Plate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 space-y-6">
            <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-foreground/90 leading-relaxed">
                At <span className="font-bold text-primary">DimensionalX</span>, we specialize in <span className="font-semibold text-foreground">high-tolerance CNC machining</span> and the integration of <span className="font-semibold text-foreground">complex mechanical assemblies</span> engineered for mission-critical applications.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Leveraging advanced manufacturing technologies and precision workflows, our team optimizes for <span className="text-primary font-medium">throughput</span>, <span className="text-primary font-medium">repeatability</span>, and <span className="text-primary font-medium">dimensional accuracy</span> at every phase—from prototyping to full-scale production.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                We collaborate closely with design engineers, product developers, and OEMs to convert cutting-edge concepts into manufacturable, scalable systems—delivering rapid lead times, stringent quality assurance, and end-to-end technical support throughout the product lifecycle.
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="grid grid-cols-2 gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="group bg-gradient-to-br from-primary/5 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Advanced CNC</h3>
                <p className="text-sm text-muted-foreground">Multi-axis machining with micron-level precision</p>
              </div>

              <div className="group bg-gradient-to-br from-primary/5 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Complex Assemblies</h3>
                <p className="text-sm text-muted-foreground">Integration of mission-critical components</p>
              </div>

              <div className="group bg-gradient-to-br from-primary/5 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Rapid Prototyping</h3>
                <p className="text-sm text-muted-foreground">Fast iteration from concept to production</p>
              </div>

              <div className="group bg-gradient-to-br from-primary/5 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">QA & Support</h3>
                <p className="text-sm text-muted-foreground">End-to-end lifecycle management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
