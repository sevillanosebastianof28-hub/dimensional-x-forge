const About = () => {
  return (
    <section id="about" className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 50px),
                         repeating-linear-gradient(90deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 50px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Security-themed gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/8 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />

      <div className="relative z-10 px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Proprietary Rapid Prototyping
          </h2>
          <p className="text-xl text-primary font-semibold">ITAR-Compliant and Secure Facility</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Location & Technology */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                <span className="text-3xl">📍</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Strategic Location & Proprietary Technology</h3>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  Located in <span className="font-semibold text-primary">Fairview, Tennessee</span> — safely outside the Nashville metropolitan area — our facility is home to a <span className="font-bold text-foreground">proprietary rapid prototyping system</span> developed and perfected by our founding engineers.
                </p>
                <p className="text-lg text-foreground/85 leading-relaxed">
                  This capital-intensive, highly specialized process is <span className="text-primary font-medium">exclusive to our operation</span> and designed to meet the rigorous standards of industries including <span className="font-semibold text-foreground">defense, aerospace, robotics, and advanced manufacturing</span>.
                </p>
              </div>
            </div>
          </div>

          {/* R&D Investment */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Next-Generation Manufacturing</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Our state-of-the-art methodology, the result of <span className="font-semibold text-primary">extensive research and development</span>, represents a significant investment in next-generation CNC technology. It is <span className="font-bold text-foreground">unlike anything else available in the market</span> and remains entirely <span className="text-primary font-medium">confidential and internal</span> to our organization.
                </p>
              </div>
            </div>
          </div>

          {/* ITAR Compliance */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-2xl border-2 border-primary/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:shadow-[0_0_60px_rgba(0,255,255,0.3)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/50 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <span className="text-3xl">🔒</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">ITAR Compliance & Data Security</h3>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  We are <span className="font-bold text-foreground">fully registered with and compliant</span> under the <span className="font-semibold text-primary">International Traffic in Arms Regulations (ITAR)</span>. All projects involving controlled technical data are conducted within <span className="font-semibold text-foreground">secure, encrypted file-sharing environments</span>.
                </p>
                <p className="text-lg text-foreground/85 leading-relaxed">
                  Every employee, contractor, vendor, and customer handling sensitive data is required to execute a strict <span className="font-bold text-primary">non-disclosure agreement (NDA)</span> prior to engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Security Clearance */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-2xl border-2 border-primary/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:shadow-[0_0_60px_rgba(0,255,255,0.3)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/50 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <span className="text-3xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Security Clearance Requirements</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  For on-site collaboration involving <span className="font-semibold text-foreground">classified or restricted data</span>, a valid <span className="font-bold text-primary">military-grade security clearance is mandatory</span>. This requirement supports our contractual obligations and ensures the <span className="font-semibold text-foreground">security and integrity</span> of all sensitive projects under our care.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="group bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/30 hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] text-center">
              <div className="text-4xl mb-2">✈️</div>
              <p className="text-sm font-bold text-foreground">Aerospace</p>
            </div>
            
            <div className="group bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/30 hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] text-center">
              <div className="text-4xl mb-2">🎖️</div>
              <p className="text-sm font-bold text-foreground">Defense</p>
            </div>
            
            <div className="group bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/30 hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] text-center">
              <div className="text-4xl mb-2">🤖</div>
              <p className="text-sm font-bold text-foreground">Robotics</p>
            </div>
            
            <div className="group bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/30 hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] text-center">
              <div className="text-4xl mb-2">⚙️</div>
              <p className="text-sm font-bold text-foreground">Advanced Mfg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
