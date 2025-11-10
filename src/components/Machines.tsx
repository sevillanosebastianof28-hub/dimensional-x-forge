import millStandard from "@/assets/mill-standard.png";
import sodickMill from "@/assets/sodick-mill.png";
import edmMachine from "@/assets/edm-machine.png";
import latheMachine from "@/assets/lathe-machine.png";
import grinderMachine from "@/assets/grinder-machine.png";

const Machines = () => {
  return (
    <section className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 2px, transparent 2px, transparent 50px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/8 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />

      <div className="relative z-10 px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Equipment</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            CNC Milling Machines
          </h2>
          <p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Precision 3-axis and 5-axis vertical milling machines engineered for speed, scale, and tight-tolerance results on complex parts and prototypes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>

        {/* Machine Fleet */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-black/40 p-6 rounded-xl border border-primary/20">
                    <img 
                      src={millStandard} 
                      alt="CNC Milling Machine" 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Machine List Table */}
              <div className="lg:w-2/3">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-primary/30">
                        <th className="py-3 px-4 text-primary font-bold">Model</th>
                        <th className="py-3 px-4 text-primary font-bold">Size</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/20">
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(6) Litz CV1000</td>
                        <td className="py-3 px-4 text-foreground/80">X=40" Y=20" Z=23"</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(5) Litz CV1600</td>
                        <td className="py-3 px-4 text-foreground/80">X=60" Y=36" Z=36"</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(4) Litz CV800</td>
                        <td className="py-3 px-4 text-foreground/80">X=30" Y=20" Z=20"</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90 font-semibold">(6) Haas VF-2 <span className="text-primary text-sm">(5 Axis)</span></td>
                        <td className="py-3 px-4 text-foreground/80">X=28" Y=18" Z=20"</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90 font-semibold">(6) OKK VM5 <span className="text-primary text-sm">(5 Axis)</span></td>
                        <td className="py-3 px-4 text-foreground/80">X=40" Y=20" Z=36"</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(3) Fadal VMC</td>
                        <td className="py-3 px-4 text-foreground/80">X=30" Y=16" Z=20"</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(2) Yama Seiki BM1600</td>
                        <td className="py-3 px-4 text-foreground/80">X=60" Y=36" Z=36"</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors bg-primary/10">
                        <td className="py-3 px-4 text-primary font-bold">(10) Sodick LN2X High Speed</td>
                        <td className="py-3 px-4 text-primary font-semibold">X=24" Y=20" Z=10"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sodick High Speed Mills Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <h3 className="text-4xl font-extrabold text-primary mb-3">Sodick High Speed Mills</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          <div className="bg-gradient-to-br from-black/60 to-black/40 p-10 rounded-2xl border-2 border-primary/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.2)]">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Content */}
              <div className="lg:w-3/5 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  At <span className="font-bold text-primary">DimensionalX</span>, we take pride in our expertise in complex machining across a diverse range of materials. To enhance our capabilities, we have invested in <span className="font-bold text-foreground">ten state-of-the-art Sodick vertical machining centers</span>. These machines stand out in the industry, enabling us to process materials that many competitors shy away from.
                </p>

                <p className="text-lg text-foreground/85 leading-relaxed">
                  Sodick's <span className="font-semibold text-primary">flat rigid linear motors and linear scales</span> with <span className="font-semibold text-foreground">five-place decimal input and feedback</span>. This combination yields unsurpassed speed and accuracy with virtually zero backlash. This results in a machine tool that can handle the most complex, three-dimensional contours more effectively than any other machine in its class.
                </p>

                <p className="text-lg text-foreground/85 leading-relaxed">
                  What sets our machining apart is the innovative use of flat, rigid linear motors and linear scales, which provide five-place decimal input and feedback. This cutting-edge technology ensures <span className="font-bold text-primary">unparalleled speed and accuracy</span> with almost zero backlash, resulting in a machine tool capable of tackling the most intricate three-dimensional contours with unmatched efficiency.
                </p>

                <div className="bg-gradient-to-r from-primary/20 to-transparent p-5 rounded-xl border-l-4 border-primary">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    The Sodick HSM represents a significant leap forward in high precision milling, boasting an impressive <span className="font-bold text-primary">acceleration rate of 1G</span> and superior stability. With the ability to achieve <span className="font-bold text-foreground">precision down to the nanometer level</span>, these machines redefine what is possible in machining.
                  </p>
                </div>

                <p className="text-lg text-foreground/85 leading-relaxed">
                  In contrast to traditional milling methods, which require separate processes for rough and fine milling, our <span className="font-semibold text-primary">Sodick HSM technology combines both operations into a single mode</span>. This innovative approach utilizes a rapidly rotating and traversing small tool diameter, allowing for extremely fine cuts at minimal depths.
                </p>

                <div className="pt-4">
                  <p className="text-lg text-primary/90 leading-relaxed italic">
                    Experience the future of precision machining with DimensionalX, where speed, accuracy, and cutting-edge technology converge to deliver exceptional results for even the most complex projects.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-2/5">
                <div className="relative group sticky top-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative bg-black/50 p-6 rounded-2xl border-2 border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                    <img 
                      src={sodickMill} 
                      alt="Sodick High Speed Mill" 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                    <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-primary/50">
                      <p className="text-xs text-muted-foreground">Advanced Technology</p>
                      <p className="text-sm font-bold text-primary">Sodick LN2X HSM</p>
                    </div>
                  </div>
                </div>

                {/* Key Specs */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-primary/10 to-transparent p-4 rounded-lg border border-primary/30 text-center hover:scale-105 transition-transform">
                    <p className="text-2xl font-bold text-primary">1G</p>
                    <p className="text-xs text-muted-foreground">Acceleration</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-transparent p-4 rounded-lg border border-primary/30 text-center hover:scale-105 transition-transform">
                    <p className="text-2xl font-bold text-primary">nm</p>
                    <p className="text-xs text-muted-foreground">Precision Level</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-transparent p-4 rounded-lg border border-primary/30 text-center hover:scale-105 transition-transform">
                    <p className="text-2xl font-bold text-primary">10</p>
                    <p className="text-xs text-muted-foreground">Units</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-transparent p-4 rounded-lg border border-primary/30 text-center hover:scale-105 transition-transform">
                    <p className="text-2xl font-bold text-primary">0</p>
                    <p className="text-xs text-muted-foreground">Backlash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CNC EDM Machines */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-8">
            <h3 className="text-4xl font-extrabold text-primary mb-3">CNC EDM Machines</h3>
            <p className="text-lg text-foreground/85 max-w-3xl mx-auto">
              Precision EDM (Electrical Discharge Machining) capabilities for intricate geometries, ultra-tight tolerances, and hardened materials.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-3" />
          </div>

          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-black/40 p-6 rounded-xl border border-primary/20">
                    <img 
                      src={edmMachine} 
                      alt="CNC EDM Machine" 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-primary/30">
                        <th className="py-3 px-4 text-primary font-bold">Model</th>
                        <th className="py-3 px-4 text-primary font-bold">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/20">
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(5) Sodick AQ300L</td>
                        <td className="py-3 px-4 text-foreground/80">Wire EDM</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(5) Sodick AG40L</td>
                        <td className="py-3 px-4 text-foreground/80">Sinker EDM</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">Mitsubishi V55FS</td>
                        <td className="py-3 px-4 text-foreground/80">Sinker EDM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Lathe & Milling Equipment */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8">
            <h3 className="text-4xl font-extrabold text-primary mb-3">Manual Lathe & Milling Equipment</h3>
            <p className="text-lg text-foreground/85 max-w-3xl mx-auto">
              CNC and manual equipment for turning, threading, milling, jig fabrication, and support tooling.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-3" />
          </div>

          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-black/40 p-6 rounded-xl border border-primary/20">
                    <img 
                      src={latheMachine} 
                      alt="Lathe Machine" 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-primary/30">
                        <th className="py-3 px-4 text-primary font-bold">Model</th>
                        <th className="py-3 px-4 text-primary font-bold">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/20">
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(6) Takamatsu EM-2A</td>
                        <td className="py-3 px-4 text-foreground/80">CNC Lathe</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(6) Takisawa TC-20</td>
                        <td className="py-3 px-4 text-foreground/80">CNC Lathe</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">Okuma Cadet</td>
                        <td className="py-3 px-4 text-foreground/80">CNC Lathe</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(2) Bridgeport</td>
                        <td className="py-3 px-4 text-foreground/80">Manual Mill</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(3) Mori Seiki MS850G</td>
                        <td className="py-3 px-4 text-foreground/80">Manual Lathe</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">Webb GX60</td>
                        <td className="py-3 px-4 text-foreground/80">Manual Lathe</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grinding Equipment */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-8">
            <h3 className="text-4xl font-extrabold text-primary mb-3">Grinding Equipment</h3>
            <p className="text-lg text-foreground/85 max-w-3xl mx-auto">
              Dedicated stations for OD grinding, surface grinding, and tool sharpening to ensure high-tolerance finishing and edge preparation.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-3" />
          </div>

          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-black/40 p-6 rounded-xl border border-primary/20">
                    <img 
                      src={grinderMachine} 
                      alt="Grinding Machine" 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-primary/30">
                        <th className="py-3 px-4 text-primary font-bold">Model</th>
                        <th className="py-3 px-4 text-primary font-bold">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/20">
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">Yuasa</td>
                        <td className="py-3 px-4 text-foreground/80">Tool Grinder</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">Gorton</td>
                        <td className="py-3 px-4 text-foreground/80">Tool Grinder</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">Cutter Master</td>
                        <td className="py-3 px-4 text-foreground/80">Tool Grinder</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(2) MHT</td>
                        <td className="py-3 px-4 text-foreground/80">Surface Grinder</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">(3) Kent</td>
                        <td className="py-3 px-4 text-foreground/80">Surface Grinder</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-foreground/90">Myford OD Grinder</td>
                        <td className="py-3 px-4 text-foreground/80">OD Grinder</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machines;
