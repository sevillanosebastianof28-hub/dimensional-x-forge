import { CheckCircle, Ruler, Search, Package, Circle } from "lucide-react";

const QualityControl = () => {
  return (
    <section id="quality" className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 40px),
                         repeating-linear-gradient(90deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 40px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/8 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

      <div className="relative z-10 px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Quality Control</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Your Parts - Our Precision - Guaranteed
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <div className="max-w-4xl mx-auto space-y-3">
            <p className="text-xl text-foreground/90 leading-relaxed">
              At DimensionalX, we set the standard for excellence in machining metals and plastics.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our state-of-the-art facility leverages cutting-edge technology, advanced automation, and precision tools that meet the most stringent tolerances and demanding specifications.
            </p>
            <p className="text-lg font-semibold text-primary">
              We don't just meet specs — we verify them. Every part we machine undergoes rigorous, multi-stage inspection using world-class equipment and ISO-compliant procedures.
            </p>
          </div>
        </div>

        {/* QC Promise */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border-2 border-primary/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.2)]">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-extrabold text-primary mb-2">Our QC Promise</h3>
              <p className="text-sm font-bold text-foreground uppercase tracking-wider">Certified QC Protocols</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-black/40 p-4 rounded-lg border border-primary/30 hover:border-primary/50 transition-all hover:scale-105">
                <p className="text-sm text-foreground/90">✓ Every part is inspected before shipment</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-primary/30 hover:border-primary/50 transition-all hover:scale-105">
                <p className="text-sm text-foreground/90">✓ Incoming material verification and full traceability</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-primary/30 hover:border-primary/50 transition-all hover:scale-105">
                <p className="text-sm text-foreground/90">✓ Critical features checked multiple times</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-primary/30 hover:border-primary/50 transition-all hover:scale-105">
                <p className="text-sm text-foreground/90">✓ Reports delivered on request</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              We adhere to the ISO requirements for calibration of all quality measuring tools
            </p>
          </div>
        </div>

        {/* QC Capabilities */}
        <div className="mb-12">
          <h3 className="text-4xl font-extrabold text-center mb-12 text-foreground">QC Capabilities</h3>
          
          <div className="space-y-12">
            {/* CMM */}
            <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Circle className="text-primary" size={20} />
                    <h4 className="text-2xl font-bold text-primary">Coordinate Measuring Machine (CMM)</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">Fully automated 3-axis and 5-axis CMMs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">High-precision verification down to .0001+/-</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">Inspection reports include FAIR's, Bubble Drawings, and PPAP upon request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">Renishaw probing and programmable inspection routines</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-64 h-48 bg-black/40 rounded-xl border border-primary/20 flex items-center justify-center">
                  <Ruler className="text-primary" size={56} />
                </div>
              </div>
            </div>

            {/* Optical & Vision */}
            <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Circle className="text-primary" size={20} />
                    <h4 className="text-2xl font-bold text-primary">Optical & Vision Measurement Systems</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">Non-contact inspection of small, complex, or delicate parts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">Latest Keyence technology for precision 2D/3D measurement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">Profile edge detection and visual comparison</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-64 h-48 bg-black/40 rounded-xl border border-primary/20 flex items-center justify-center">
                  <Search className="text-primary" size={56} />
                </div>
              </div>
            </div>

            {/* Advanced Surface */}
            <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Circle className="text-primary" size={20} />
                <h4 className="text-2xl font-bold text-primary">Advanced Surface & Material Validation</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/40 p-5 rounded-xl border border-primary/20">
                  <h5 className="font-bold text-foreground mb-3 text-lg">Surface Roughness & Finish Analysis</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Profilometers to measure Ra, Rz, Rq values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Validates both cosmetic and functional surface specs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/40 p-5 rounded-xl border border-primary/20">
                  <h5 className="font-bold text-foreground mb-3 text-lg">Hardness Testing</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Rockwell and Brinell hardness testers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Verifies material hardness before and after heat treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Essential for firearms, aerospace, and defense components</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Digital Height Gauges */}
            <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Circle className="text-primary" size={20} />
                <h4 className="text-2xl font-bold text-primary">Digital Height Gauges & Micrometers</h4>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-black/40 p-4 rounded-xl border border-primary/20">
                  <h5 className="font-bold text-foreground mb-2">Height Gauges</h5>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Digital height gauges with granite surface plates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Accurate Z-axis measurements</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-primary/20">
                  <h5 className="font-bold text-foreground mb-2">Micrometers & Calipers</h5>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Digital and analog micrometers (OD, ID, Depth)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Calipers ranging from 0-24 inches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Regularly calibrated and certified</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-primary/20">
                  <h5 className="font-bold text-foreground mb-2">Pin & Thread Gauges</h5>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Complete sets for go/no-go inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-foreground/85">Thread verification plugs and rings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Remaining QC Sections in Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Incoming Material */}
              <div className="bg-gradient-to-br from-black/50 to-black/30 p-6 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Circle className="text-primary" size={20} />
                  <h4 className="text-xl font-bold text-primary">Incoming Material Inspection</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Raw material certificates reviewed for compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Verification of critical dimensions on incoming stock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Visual inspection for surface defects or damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Material traceability initiated and logged</span>
                  </li>
                </ul>
              </div>

              {/* Final Inspection */}
              <div className="bg-gradient-to-br from-black/50 to-black/30 p-6 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Circle className="text-primary" size={20} />
                  <h4 className="text-xl font-bold text-primary">Final Inspection & Documentation</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Final visual and dimensional checks prior to shipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Verification against customer drawings and tolerances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Photo documentation available on request</span>
                  </li>
                </ul>
              </div>

              {/* Packaging */}
              <div className="bg-gradient-to-br from-black/50 to-black/30 p-6 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Circle className="text-primary" size={20} />
                  <h4 className="text-xl font-bold text-primary">Packaging & Labeling</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Package className="text-primary mt-0.5" size={16} />
                    <span className="text-foreground/90">Finished parts carefully packaged to prevent damage during transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">📦</span>
                    <span className="text-foreground/90">Customer's PO includes quantity, part number, and description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">📦</span>
                    <span className="text-foreground/90">Packaging conforms to customer-specific standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">📦</span>
                    <span className="text-foreground/90">Photos of packaged goods available upon request</span>
                  </li>
                </ul>
              </div>

              {/* Customer Documentation */}
              <div className="bg-gradient-to-br from-black/50 to-black/30 p-6 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🔹</span>
                  <h4 className="text-xl font-bold text-primary">Customer Documentation Access</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">🔐</span>
                    <span className="text-foreground/90">Customers provided with unique login credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">🔐</span>
                    <span className="text-foreground/90">Access to past purchase orders and part history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">🔐</span>
                    <span className="text-foreground/90">Downloadable inspection reports and shipping records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">🔐</span>
                    <span className="text-foreground/90">Quote request and reorder forms available online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">🔐</span>
                    <span className="text-foreground/90">Secure, encrypted file upload portal hosted on private Synology NAS — ideal for ITAR/EAR-regulated and NDA-sensitive projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
