import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  BookOpen, 
  Briefcase,
  Send,
  ArrowLeft,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { inquiriesApi } from '@/lib/api';

export default function AlumniRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passoutYear: '',
    program: '',
    currentStatus: '',
    organization: '',
    linkedin: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (formData.phone.length !== 10) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await inquiriesApi.submit({
        type: "Alumni_Registration",
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        city: formData.currentStatus, // reusing city for current status
        message: `Passout Year: ${formData.passoutYear} | Org: ${formData.organization} | Msg: ${formData.message}`
      });
      if (response.success) {
        alert('Thank you for registering! We will review your details.');
        setFormData({
          fullName: '', email: '', phone: '', passoutYear: '',
          program: '', currentStatus: '', organization: '', linkedin: '', message: ''
        });
      }
    } catch(err) {
      console.error(err);
      alert('Failed to register. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, '');
      if (numbersOnly.length <= 10) {
        setFormData({ ...formData, [name]: numbersOnly });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-6 tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            <GraduationCap size={14} className="text-accent" />
            <span>Alumni Network</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Join the <span className="text-accent">Legacy</span>
          </h1>
          <p className="text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
            Reconnect with your alma mater and be part of our growing global community of achievers.
          </p>
        </div>
      </div>

      {/* Registration Form Card */}
      <section className="section-container py-12 sm:py-16 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="card !p-8 md:!p-12 border border-border shadow-soft bg-surface"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-secondary text-xs font-bold shadow-sm">
                    01
                  </div>
                  <h3 className="text-base font-bold text-primary">Personal Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors" size={16} />
                    <input
                      required
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors" size={16} />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative group md:col-span-2">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors" size={16} />
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="10-digit Mobile Number"
                      className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Academic & Professional */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-secondary text-xs font-bold shadow-sm">
                    02
                  </div>
                  <h3 className="text-base font-bold text-primary">Academic & Career</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors" size={16} />
                      <input
                        required
                        type="date"
                        name="passoutYear"
                        className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm"
                        onChange={handleChange}
                        value={formData.passoutYear}
                        title="Passout Date"
                      />
                    </div>
                    <div className="relative group">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors" size={16} />
                      <select
                        required
                        name="program"
                        className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm appearance-none"
                        onChange={handleChange}
                      >
                        <option value="">Select Course</option>
                        <option value="BBA">BBA (Hons)</option>
                        <option value="BBA-ITM">BBA-ITM (Hons)</option>
                        <option value="BCom">B.Com (Hons)</option>
                        <option value="BCA">BCA (Hons)</option>
                        <option value="MBA">MBA</option>
                        <option value="PHD">Ph.D</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors" size={16} />
                      <input
                        type="text"
                        name="organization"
                        placeholder="Current Organization"
                        className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        name="currentStatus"
                        placeholder="Current Designation / Role"
                        className="w-full bg-background border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message / Additional Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-secondary text-xs font-bold shadow-sm">
                    03
                  </div>
                  <h3 className="text-base font-bold text-primary">Further Details</h3>
                </div>
                
                <textarea
                  name="message"
                  placeholder="Tell us about your journey or leave a message for the juniors..."
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-sm font-semibold text-primary shadow-sm resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-border">
                <Link to="/alumni" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary transition-colors group">
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                  <span>Back to Alumni</span>
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#FACC15] hover:bg-[#EAB308] text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 py-3 px-6 text-sm shadow-xl transition-colors group"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Registration'}</span>
                  {!isSubmitting && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="section-container pb-16 pt-4 text-center">
        <p className="text-sm font-medium text-muted max-w-2xl mx-auto">
          "Join 5000+ graduates across 20 countries. Your information is safe with our secure Alumni Records department."
        </p>
      </section>
    </div>
  );
}
