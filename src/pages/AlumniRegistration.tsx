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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
    alert('Thank you for registering! We will review your details.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-secondary/10 px-6 py-2 rounded-full border border-secondary/20 mb-8 backdrop-blur-md">
              <GraduationCap size={16} className="text-secondary" />
              <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Alumni Network</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white italic mb-8 leading-tight">
              Join the <span className="text-secondary underline decoration-4 underline-offset-8">Legacy</span>
            </h1>
            <p className="text-gray-300 text-lg font-light max-w-xl mx-auto italic">
              Reconnect with your alma mater and be part of our growing global community of achievers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form Card */}
      <section className="py-24 px-6 relative -mt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-primary italic flex items-center gap-3 mb-8">
                    <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">01</span>
                    Personal Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" size={18} />
                      <input
                        required
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" size={18} />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" size={18} />
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Academic & Professional */}
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-primary italic flex items-center gap-3 mb-8">
                    <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">02</span>
                    Academic & Career
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" size={18} />
                        <input
                          required
                          type="text"
                          name="passoutYear"
                          placeholder="Passout Year"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="relative group">
                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" size={18} />
                        <select
                          required
                          name="program"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium appearance-none"
                          onChange={handleChange}
                        >
                          <option value="">Select Course</option>
                          <option value="BBA">BBA (Hons)</option>
                          <option value="BBA-ITM">BBA-ITM (Hons)</option>
                          <option value="BCom">B.Com (Hons)</option>
                          <option value="BCA">BCA (Hons)</option>
                          <option value="MCom">M.Com</option>
                          <option value="PHD">Ph.D</option>
                        </select>
                      </div>
                    </div>

                    <div className="relative group">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" size={18} />
                      <input
                        type="text"
                        name="organization"
                        placeholder="Current Organization / Company"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        name="currentStatus"
                        placeholder="Current Designation / Role"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message / Additional Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-primary italic flex items-center gap-3 mb-8">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">03</span>
                  Further Details
                </h3>
                <textarea
                  name="message"
                  placeholder="Tell us about your journey or leave a message for the juniors..."
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-100 rounded-[2rem] p-8 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                <Link to="/alumni" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-primary transition-colors group">
                  <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Alumni
                </Link>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                >
                  Submit Registration <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-50 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center italic text-gray-400 font-light text-lg">
          "Join 5000+ graduates across 20 countries. Your information is safe with our secure Alumni Records department."
        </div>
      </section>
    </div>
  );
}

