import { Award, CheckCircle, Clock, Target, Shield, TrendingUp } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    {
      icon: CheckCircle,
      value: "98%",
      label: "On-Time Delivery Rate",
      description: "Reliable scheduling you can count on"
    },
    {
      icon: Target,
      value: "±0.005mm",
      label: "Tolerance Accuracy",
      description: "Precision engineering at every level"
    },
    {
      icon: TrendingUp,
      value: "120+",
      label: "Projects Annually",
      description: "Proven experience across industries"
    },
    {
      icon: Clock,
      value: "24-72hr",
      label: "Typical Quote Response",
      description: "Fast turnaround on estimates"
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "ITAR Compliant",
      status: "Active",
      description: "Secure facility for defense & aerospace"
    },
    {
      icon: Award,
      title: "ISO Standards",
      status: "In Progress",
      description: "Quality assurance protocols in place"
    }
  ];

  return (
    <section id="social-proof" className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 40px),
                         repeating-linear-gradient(90deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 40px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/8 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />

      <div className="relative z-10 px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Proven Performance</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Trusted by Engineering Teams Worldwide
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Delivering precision parts for product development, aerospace components, and industrial manufacturing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </div>

        {/* Metrics Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 p-6 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] hover:border-primary/50 transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 border border-primary/30 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <metric.icon className="text-primary" size={28} />
                </div>
                <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </div>
                <div className="text-lg font-bold text-foreground mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-foreground/70">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 animate-fade-in">
            Certifications & Compliance
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <cert.icon className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-2xl font-bold text-foreground">{cert.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        cert.status === 'Active' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-foreground/20 text-foreground/70 border border-foreground/30'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <div className="max-w-5xl mx-auto mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border border-primary/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Serving Key Industries</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Product Development', 'Aerospace Components', 'Industrial Manufacturing', 'Robotics', 'Medical Devices', 'Defense Systems'].map((industry, index) => (
                <div 
                  key={index}
                  className="px-5 py-2.5 bg-black/40 backdrop-blur-sm rounded-lg border border-primary/30 text-foreground/90 font-medium hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
