import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  projectDetails: z.string().trim().min(1, "Project details are required").max(2000, "Project details must be less than 2000 characters"),
  quantity: z.string().trim().max(50, "Quantity must be less than 50 characters").optional(),
  timeline: z.string().trim().max(100, "Timeline must be less than 100 characters").optional(),
});

const RequestQuote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDetails: "",
    quantity: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = quoteSchema.parse(formData);
      
      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      toast.success("Quote request submitted successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectDetails: "",
        quantity: "",
        timeline: "",
      });
      
      // Redirect back to home after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Please fix the errors in the form");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-8 border-primary/60 text-primary hover:bg-primary/20"
        >
          ← Back to Home
        </Button>

        <div className="bg-gradient-to-br from-black/60 via-black/50 to-black/40 rounded-[24px] border border-primary/40 shadow-[0_0_40px_rgba(0,255,255,0.3)] backdrop-blur-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 gradient-text">
            Request a Quote
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 bg-background/50 border-primary/30 text-foreground ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-2 bg-background/50 border-primary/30 text-foreground ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-foreground">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 bg-background/50 border-primary/30 text-foreground"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 bg-background/50 border-primary/30 text-foreground"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="projectDetails" className="text-foreground">
                Project Details <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                className={`mt-2 bg-background/50 border-primary/30 text-foreground min-h-[150px] ${errors.projectDetails ? 'border-destructive' : ''}`}
                placeholder="Please describe your project requirements, materials, tolerances, and any special specifications..."
              />
              {errors.projectDetails && <p className="text-destructive text-sm mt-1">{errors.projectDetails}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="quantity" className="text-foreground">
                  Quantity Needed
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-2 bg-background/50 border-primary/30 text-foreground"
                  placeholder="e.g., 100 units"
                />
              </div>

              <div>
                <Label htmlFor="timeline" className="text-foreground">
                  Target Timeline
                </Label>
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="mt-2 bg-background/50 border-primary/30 text-foreground"
                  placeholder="e.g., 2-3 weeks"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-6 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
