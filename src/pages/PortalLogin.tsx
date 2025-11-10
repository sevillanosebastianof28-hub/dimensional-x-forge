import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PortalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - In production, this would connect to your authentication system
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login Successful",
          description: "Welcome to DimensionalX Customer Portal",
        });
        navigate("/portal/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 30px),
                         repeating-linear-gradient(90deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 30px)`,
        backgroundSize: '30px 30px'
      }} />
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />

      <Card className="w-full max-w-md relative z-10 bg-gradient-to-br from-black/80 to-black/60 border-primary/30 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.3)]">
        <CardHeader className="text-center space-y-3">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center border-2 border-primary/40 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <Lock className="text-primary" size={40} />
            </div>
          </div>
          <CardTitle className="text-3xl font-extrabold text-foreground">DimX Customer Portal</CardTitle>
          <CardDescription className="text-base text-foreground/70">
            Secure access to your manufacturing projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-black/40 border-primary/30 focus:border-primary/60 text-foreground"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground/90">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-black/40 border-primary/30 focus:border-primary/60 text-foreground"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 space-y-3">
            <div className="text-center">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot your password?
              </a>
            </div>
            
            <div className="pt-4 border-t border-primary/20">
              <p className="text-xs text-center text-muted-foreground">
                Don't have an account? Contact your DimensionalX representative to request portal access.
              </p>
            </div>

            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/30">
              <Lock className="text-primary flex-shrink-0" size={16} />
              <p className="text-xs text-foreground/80">
                All portal access is ITAR-compliant and NDA-protected
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortalLogin;
