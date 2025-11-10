import { ArrowRight, FileText, Search, ShoppingCart, Settings, TrendingUp, Activity, Lock, Upload, Database } from "lucide-react";
import processFlowchart from "@/assets/process-flowchart.jpg";

const Process = () => {
  return (
    <section className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 45px),
                         repeating-linear-gradient(90deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 45px)`,
        backgroundSize: '45px 45px'
      }} />
      
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/8 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />

      <div className="relative z-10 px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            From Prototype to Complex Assemblies
          </h2>
          <p className="text-2xl text-primary font-semibold mb-2">Without the Friction</p>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-4">
            Our Process is Built for Precision and Accountability
          </p>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
            A modern workflow built for transparency, traceability, and speed.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </div>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-3xl font-bold text-foreground mb-4">Our Digitally Driven Manufacturing Flow</h3>
          <p className="text-lg text-foreground/85 leading-relaxed">
            We've built our production process around <span className="font-semibold text-primary">traceability, automation, and transparency</span> — from RFQ to shipment. Here's how DimensionalX gets it done.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto space-y-12 mb-20">
          {/* Customer Portal */}
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border-2 border-primary/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.25)] hover:shadow-[0_0_60px_rgba(0,255,255,0.35)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/30 rounded-xl flex items-center justify-center border border-primary/50 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <Lock className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-3xl font-bold text-primary mb-4">DimX Customer Portal</h4>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  Access your personalized <span className="font-bold text-primary">DimensionalX Customer Portal</span> — a secure, encrypted platform designed for seamless collaboration on your manufacturing projects. Submit RFQs, upload CAD files, track orders, and review inspection reports all in one centralized location.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Upload className="text-primary" size={20} />
                  </div>
                  <h5 className="font-bold text-foreground">Secure File Upload</h5>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Upload 2D drawings, 3D models, and technical specifications through our encrypted portal. ITAR/EAR compliant file sharing hosted on our private Synology NAS.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Database className="text-primary" size={20} />
                  </div>
                  <h5 className="font-bold text-foreground">Order History & Tracking</h5>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  View past purchase orders, part history, and real-time production status. Download inspection reports, certifications, and shipping documentation anytime.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <FileText className="text-primary" size={20} />
                  </div>
                  <h5 className="font-bold text-foreground">RFQ & Quote Management</h5>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Submit quote requests with material and tolerance specifications. Receive detailed quotes within 24-48 hours including DFM feedback and lead times.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg border-l-4 border-primary">
              <p className="text-sm text-foreground/90 italic">
                <span className="font-bold text-primary">✓ NDA Protected</span> • All users handling sensitive data execute strict non-disclosure agreements prior to portal access.
              </p>
            </div>
          </div>

          {/* Quotation & Design Review */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/40">
                <Search className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-primary mb-3">Quotation & Design Review</h4>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Within <span className="font-semibold text-foreground">24–48 hours</span>, we provide a detailed quote, including lead time, pricing, material sourcing, and any <span className="font-semibold text-primary">DFM (Design for Manufacturability)</span> feedback. We work with you to clarify tolerances, finishes, and part functionality to ensure mutual understanding before we start.
                </p>
              </div>
            </div>
          </div>

          {/* Purchase Order & Scheduling */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/40">
                <ShoppingCart className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-primary mb-3">Purchase Order & Scheduling</h4>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Once your PO is received, your project is entered into our scheduling system. Materials are ordered, job travelers are created, and setup sheets are generated for our machinists.
                </p>
              </div>
            </div>
          </div>

          {/* CNC Machining */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/40">
                <Settings className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-primary mb-3">CNC Machining</h4>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  From stainless steels, all steels, all aluminum, in fact, the only metals we don't machine are Iron and Magnesium. We machine most plastics and can hold close tolerances because of our high-speed spindle mills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Batch Production Management */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-10 rounded-2xl border-2 border-primary/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.2)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center border border-primary/50">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-3xl font-extrabold text-primary">Batch Production Management</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Our custom software provides <span className="font-semibold text-primary">real-time visibility</span> into equipment statuses, batch progress, and production metrics for proactive decision-making. The software integrates seamlessly with our equipment, devices, and systems to provide real-time production data on any machine.
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed">
                This was customer-built to support <span className="font-semibold text-foreground">operational transparency, quality control, and compliance management</span> — ensuring seamless data sharing across apps and teams.
              </p>
            </div>
          </div>
        </div>

        {/* Flowchart */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="text-center mb-8">
            <h3 className="text-4xl font-extrabold text-primary mb-3">Our Process</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 p-6 rounded-2xl border-2 border-primary/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.2)]">
              <img 
                src={processFlowchart} 
                alt="DimensionalX Manufacturing Process Flowchart" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Production Tracking & Real-Time Decision Making */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Production Tracking */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/40">
                <Activity className="text-primary" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-primary">Production Tracking</h4>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              At DimensionalX, we track production and gain <span className="font-semibold text-primary">real-time visibility</span> with software that collects data from machines, operators, and quality managers throughout the production process.
            </p>
            <p className="text-foreground/85 leading-relaxed mt-4">
              We visualize the data on dashboards and send alerts to inform decision-making — giving supervisors <span className="font-semibold text-foreground">actionable insights</span> without slowing the line.
            </p>
          </div>

          {/* Real-Time Decision Making */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/40">
                <ArrowRight className="text-primary" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-primary">Real-Time Decision Making</h4>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              Our software enables operators to flag issues and down equipment in real time, and sends alerts to the right individuals.
            </p>
            <p className="text-foreground/85 leading-relaxed mt-4">
              We track <span className="font-semibold text-primary">cycle time, yield rate, and pass/fail metrics</span> to calculate productivity and identify improvement points — helping you move faster, with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
