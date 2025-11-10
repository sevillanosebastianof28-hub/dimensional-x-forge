import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 px-0 overflow-hidden max-w-[1360px] mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 50px),
                         repeating-linear-gradient(90deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 50px)`,
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ready to discuss your next project? Our engineering team is here to help transform your concepts into precision-manufactured reality.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    Fairview, TN<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <a href="tel:+16155551234" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +1 (615) 555-1234
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <a href="mailto:info@dimensionalx.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    info@dimensionalx.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
              <h4 className="font-bold text-foreground mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-foreground">8:00 AM - 5:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-black/60 to-black/40 border border-primary/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-background/50 border-primary/30 focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-background/50 border-primary/30 focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-background/50 border-primary/30 focus:border-primary ${errors.phone ? 'border-destructive' : ''}`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-background/50 border-primary/30 focus:border-primary min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
