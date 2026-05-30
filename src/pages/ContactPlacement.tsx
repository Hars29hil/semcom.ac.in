import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ChevronRight,
  Send,
  Building2,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPlacement() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/placement" className="hover:text-white transition-colors">Placement</Link>
            <span>/</span>
            <span className="text-white/60">Contact</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Have questions about campus recruitment, internships, or corporate partnerships? Our placement office is ready to assist you.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Official Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card !p-8 md:!p-10 border border-border shadow-soft relative overflow-hidden group"
          >
            <div className="absolute top-10 right-10 opacity-5 scale-150 rotate-12 group-hover:scale-110 transition-transform duration-700">
              <Building2 size={120} />
            </div>

            <div className="relative z-10">
              <span className="text-secondary font-bold uppercase tracking-wider text-[10px] mb-2 block">Placement Head</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 pb-4 border-b border-border">Dr. Renil <span className="text-secondary">Thomas</span></h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-muted mb-1">Direct Helpline</div>
                    <a href="tel:9824203575" className="text-base font-bold text-primary hover:text-secondary transition-colors">
                      +91 98242 03575
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-muted mb-1">Main Correspondence</div>
                    <a href="mailto:renil.thomas@cvmu.edu.in" className="text-sm font-semibold text-primary hover:text-secondary transition-colors block">
                      renil.thomas@cvmu.edu.in
                    </a>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-muted mb-1">Internship Inquiries</div>
                      <a href="mailto:internships@semcom.ac.in" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
                        internships@semcom.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all shrink-0 shadow-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-muted mb-1">Office Hours</div>
                    <div className="text-sm font-semibold text-primary">Mon - Sat: 10:00 AM - 5:00 PM</div>
                    <p className="text-muted text-[10px] mt-1 font-medium">Closed on Sundays and Public Holidays</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card !p-8 md:!p-10 bg-primary text-white relative overflow-hidden shadow-soft flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Quick Inquiry</h2>
                <p className="text-white/70 text-xs font-semibold leading-relaxed">Send us a message and we'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-white/50 pl-1">Full Name</label>
                    <input type="text" className="w-full bg-background border-none rounded-xl py-3 px-4 text-primary font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-inner" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-white/50 pl-1">Email Address</label>
                    <input type="email" className="w-full bg-background border-none rounded-xl py-3 px-4 text-primary font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-inner" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/50 pl-1">Purpose</label>
                  <select className="w-full bg-background border-none rounded-xl py-3 px-4 text-primary font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all appearance-none cursor-pointer shadow-inner">
                    <option value="">Select an option</option>
                    <option value="recruitment">Recruitment Partnering</option>
                    <option value="internship">Student Internship Query</option>
                    <option value="alumni">Alumni Relations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/50 pl-1">Your Message</label>
                  <textarea rows={4} className="w-full bg-background border-none rounded-xl py-3 px-4 text-primary font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none shadow-inner" placeholder="How can we help you today?"></textarea>
                </div>
              </div>

              <button className="btn-primary w-full !py-3 bg-secondary hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2 group shadow">
                <span>Send Message</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-surface py-12 sm:py-16 border-t border-border">
        <div className="section-container">
          <div className="card !p-0 border border-border shadow-sm flex flex-col md:flex-row overflow-hidden group">
            <div className="md:w-1/2 p-8 md:p-12 space-y-6 flex flex-col justify-center bg-background">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Visit Our <span className="text-secondary">Placement Hub</span>
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <ChevronRight size={18} className="text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-primary">Located in the Administrative Wing, Ground Floor, SEMCOM Campus.</p>
                </div>
                <p className="text-xs text-muted leading-relaxed font-medium">
                  We encourage corporate partners to visit our campus and explore our state-of-the-art facilities firsthand. Our office is equipped with dedicated cabins for personal interviews and group discussions.
                </p>
              </div>
              <div className="pt-2">
                <button className="text-secondary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-primary transition-colors">
                  <span>View on Google Maps</span>
                  <MessageSquare size={14} />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 w-full aspect-video md:aspect-auto h-64 md:h-auto overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                alt="Office space"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
