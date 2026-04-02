import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Lock, Mail, Loader2, Sparkles } from "lucide-react";
import { setAuthUser } from "@/lib/auth";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock auth logic as requested
    setTimeout(() => {
      if (email === "admin@semcom.in" && password === "Semcom@3690") {
        setAuthUser({ username: email, role: 'admin', name: 'SEMCOM Admin' });
        toast.success("Welcome, Administrator");
        navigate("/");
      } else if (email === "dhruv.patel@cvmu.edu.in" && password === "Dhruv@semcom") {
        setAuthUser({ username: email, role: 'counsellor', name: 'Dhruv Patel' });
        toast.success("Welcome, Counsellor");
        navigate("/counsellor");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px] animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 relative z-10"
      >
        <div className="text-center mb-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary shadow-2xl shadow-primary/30 mb-6 group hover:scale-110 transition-transform duration-500">
                <GraduationCap className="h-8 w-8 text-primary-foreground group-hover:rotate-12 transition-transform" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground mb-2 italic">SEMCOM <span className="text-primary not-italic">PORTAL</span></h1>
            <p className="text-muted-foreground text-sm font-medium">Access your institutional workspace</p>
        </div>

        <Card className="border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden bg-white/70 backdrop-blur-xl">
          <CardHeader className="pt-10 pb-4 text-center">
            <CardTitle className="text-xl font-bold">Sign In</CardTitle>
            <CardDescription>Enter your credentials to continue</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="pl-11 h-12 rounded-2xl border-none bg-accent/50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-medium"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-11 h-12 rounded-2xl border-none bg-accent/50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-medium"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 rounded-2xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px] active:scale-[0.98]" 
                disabled={loading}
              >
                {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                   <span className="flex items-center gap-2">Secure Login <Sparkles className="h-4 w-4" /></span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-xs text-muted-foreground font-medium">
          Protected by institution-level security. <br/>
          &copy; {new Date().getFullYear()} SEMCOM Administrative Hub
        </p>
      </motion.div>
    </div>
  );
}
