const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border bg-background/95 backdrop-blur-md">
      <div className="max-w-[1360px] mx-auto">
        {/* Logo Section with Rotating Cube */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center gap-6">
            {/* Rotating 3D Cube */}
            <div className="relative w-20 h-20" style={{ perspective: '500px' }}>
              <div 
                className="w-full h-full relative animate-[spin_8s_linear_infinite]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(-20deg) rotateY(-25deg)',
                }}
              >
                {/* Front face - Green */}
                <div 
                  className="absolute w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 border border-green-300/50 shadow-lg"
                  style={{
                    transform: 'translateZ(40px)',
                  }}
                />
                {/* Back face - Green darker */}
                <div 
                  className="absolute w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 border border-green-400/30"
                  style={{
                    transform: 'translateZ(-40px) rotateY(180deg)',
                  }}
                />
                {/* Right face - Blue */}
                <div 
                  className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 border border-blue-300/50 shadow-lg"
                  style={{
                    transform: 'rotateY(90deg) translateZ(40px)',
                  }}
                />
                {/* Left face - Blue darker */}
                <div 
                  className="absolute w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400/30"
                  style={{
                    transform: 'rotateY(-90deg) translateZ(40px)',
                  }}
                />
                {/* Top face - Red */}
                <div 
                  className="absolute w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 border border-red-300/50 shadow-lg"
                  style={{
                    transform: 'rotateX(90deg) translateZ(40px)',
                  }}
                />
                {/* Bottom face - Red darker */}
                <div 
                  className="absolute w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 border border-red-400/30"
                  style={{
                    transform: 'rotateX(-90deg) translateZ(40px)',
                  }}
                />
              </div>
            </div>

            {/* DimensionalX Text */}
            <div className="flex flex-col">
              <h2 className="text-5xl font-extrabold text-foreground tracking-tight">
                DimensionalX
              </h2>
              <p className="text-sm text-muted-foreground tracking-wide mt-1">
                Your Prototype Partner
              </p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Process
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('machines')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  CNC Machining
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('quality')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Quality Control
                </button>
              </li>
              <li className="text-muted-foreground">Prototype Development</li>
              <li className="text-muted-foreground">Production Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Get in Touch
                </button>
              </li>
              <li className="text-muted-foreground">Request a Quote</li>
              <li className="text-muted-foreground">View Portfolio</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DimensionalX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
