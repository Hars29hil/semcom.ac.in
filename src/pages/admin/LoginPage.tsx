import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Lock, Mail, Loader2, Sparkles, ArrowLeft, ShieldCheck } from "lucide-react";
import { setAuthUser, setToken } from "@/lib/auth";
import type { Role } from "@/lib/auth";
import { authApi } from "@/lib/api";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const data = await authApi.login({ email: email.trim(), password });

      if (data.success && data.token) {
        setToken(data.token);
        setAuthUser({
          username: data.user.email,
          role: data.user.role as Role,
          name: data.user.name,
        });

        toast.success(`Welcome back, ${data.user.name}`);

        const role = data.user.role;
        if (role === 'admin') {
          navigate("/admin");
        } else if (role === 'librarian') {
          navigate("/admin/announcements");
        } else if (role === 'vp' || role === 'Vice Principal') {
          navigate("/admin/faculty");
        } else {
          navigate("/admin/counsellor");
        }
      } else {
        toast.error(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full font-sans bg-background">
      
      {/* Left Column — Branding / Hero Match */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary relative overflow-hidden flex-col justify-between p-12 lg:p-16">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575861501-7bc06a177dc2?q=80&w=2070"
            alt="Campus"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center text-slate-900/70 hover:text-slate-900 transition-colors text-sm font-medium mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Main Website
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border-white text-slate-900 font-medium mb-6">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Secure Institutional Access
              </span>
            </Badge>

            <h1 className="text-slate-900 text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
              SEMCOM <br/>
              <span className="text-accent italic tracking-tighter">Administrative Hub</span>
            </h1>
            
            <p className="mt-6 text-slate-900/70 text-lg leading-relaxed max-w-md">
              Access the central administrative portal to manage faculty profiles, student data, campus announcements, and academic resources securely.
            </p>
          </motion.div>
        </div>

        {/* Footer info in Left Column */}
        <div className="relative z-10 flex items-center justify-between text-slate-500 text-xs font-medium border-t border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] pt-8 mt-12">
          <p>&copy; {new Date().getFullYear()} CVM University</p>
          <p>Strictly for authorized personnel</p>
        </div>
      </div>

      {/* Right Column — Login Form */}
      <div className="flex-1 flex items-center justify-center relative p-6 sm:p-12 overflow-hidden">
        {/* Mobile Background (Hidden on Desktop) */}
        <div className="absolute inset-0 z-0 lg:hidden bg-gradient-to-br from-primary via-[#1E3A8A] to-primary">
          <img
            src="https://images.unsplash.com/photo-1540575861501-7bc06a177dc2?q=80&w=2070"
            alt="Campus"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Mobile Back Link */}
        <Link to="/" className="absolute top-6 left-6 lg:hidden z-20 inline-flex items-center text-slate-900/70 hover:text-slate-900 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Home
        </Link>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[420px] relative z-10"
        >
          <div className="bg-white/95 lg:bg-white backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] lg:shadow-none lg:border-none border border-white p-8 sm:p-10">
            <div className="text-center mb-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-primary mb-6">
                    <GraduationCap className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-primary">Welcome Back</h2>
                <p className="text-muted-foreground text-sm font-medium mt-2">Enter your credentials to securely log in</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    type="email"
                    placeholder="name@cvmu.edu.in"
                    className="pl-11 h-12 rounded-xl border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-medium"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="pl-11 h-12 rounded-xl border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-medium"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full h-12 rounded-xl font-bold bg-white hover:bg-white/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" 
                  disabled={loading}
                >
                  {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">Sign In <Sparkles className="h-4 w-4 opacity-70" /></span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
