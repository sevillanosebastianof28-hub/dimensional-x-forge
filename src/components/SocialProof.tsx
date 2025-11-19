import { Award, CheckCircle, Clock, Target, Shield, TrendingUp, Package, Wrench, FileCheck } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    {
      icon: CheckCircle,
      value: "98%",
      label: "On-Time Delivery",
      description: "Across 500+ projects delivered since 2019"
    },
    {
      icon: Target,
      value: "±0.005mm",
      label: "Tolerance Capability",
      description: "Verified across aerospace & defense programs"
    },
    {
      icon: TrendingUp,
      value: "500+",
      label: "Projects Completed",
      description: "For Fortune 500s, defense contractors, and startups"
    },
    {
      icon: Clock,
      value: "24-48hr",
      label: "Quote Response",
      description: "Technical review included in every quote"
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "ITAR Registered",
      status: "Active Since 2020",
      description: "Secure facility for defense & aerospace programs",
      details: "Full compliance with export control regulations"
    },
    {
      icon: Award,
      title: "ISO 9001 Processes",
      status: "Implemented",
      description: "Quality management system following ISO standards",
      details: "Documented inspection procedures for critical parts"
    },
    {
      icon: FileCheck,
      title: "First Article Inspection",
      status: "Standard Practice",
      description: "AS9102 compliant documentation available",
      details: "Complete dimensional reports for program qualification"
    }
  ];

  const caseStudies = [
    {
      icon: Package,
      industry: "Aerospace",
      challenge: "Complex 5-axis titanium bracket",
      result: "Delivered under 10-day deadline with full AS9102 FAI documentation",
      metric: "Zero rejections across 50-piece production run"
    },
    {
      icon: Wrench,
      industry: "Defense",
      challenge: "ITAR-controlled aluminum assembly",
      result: "Maintained ±0.003mm tolerance on critical mating features",
      metric: "Passed customer inspection without rework"
    },
    {
      icon: Target,
      industry: "Product Development",
      challenge: "Prototype housing with tight cosmetic requirements",
      result: "3-day turnaround from CAD to finished parts",
      metric: "Enabled on-time trade show demo for Series A startup"
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
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Proven Track Record</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4" style={{ color: 'hsl(var(--foreground-headline))' }}>
            Trusted When It Matters Most
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--foreground))' }}>
            Real numbers, verified results, and documented compliance—because your decision deserves more than promises
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
                <div className="text-lg font-bold mb-2" style={{ color: 'hsl(var(--foreground-headline))' }}>
                  {metric.label}
                </div>
                <p className="text-sm" style={{ color: 'hsl(var(--foreground))' }}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(var(--foreground-headline))' }}>
            Certifications & Standards
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/50 to-black/30 p-6 rounded-2xl border border-accent/30 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] hover:border-accent/50 transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 border border-accent/30 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <cert.icon className="text-accent" size={28} />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold" style={{ color: 'hsl(var(--foreground-headline))' }}>{cert.title}</h4>
                </div>
                <span className="inline-block text-xs font-semibold px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30 mb-3">
                  {cert.status}
                </span>
                <p className="text-sm mb-2" style={{ color: 'hsl(var(--foreground))' }}>
                  {cert.description}
                </p>
                <p className="text-xs" style={{ color: 'hsl(var(--foreground))', opacity: 0.7 }}>
                  {cert.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4" style={{ color: 'hsl(var(--foreground-headline))' }}>
            Real Results, Real Programs
          </h3>
          <p className="text-center mb-12 text-lg" style={{ color: 'hsl(var(--foreground))' }}>
            Anonymized examples from aerospace, defense, and product development customers
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 p-6 rounded-2xl border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
                  <study.icon className="text-primary" size={24} />
                </div>
                <div className="inline-block mb-3 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{study.industry}</span>
                </div>
                <h4 className="text-base font-bold mb-2" style={{ color: 'hsl(var(--foreground-headline))' }}>
                  {study.challenge}
                </h4>
                <p className="text-sm mb-3" style={{ color: 'hsl(var(--foreground))' }}>
                  {study.result}
                </p>
                <div className="pt-3 border-t border-primary/20">
                  <p className="text-xs font-semibold text-primary">
                    {study.metric}
                  </p>
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
