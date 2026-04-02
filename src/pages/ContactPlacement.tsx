import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  User, 
  Briefcase, 
  Clock, 
  MessageSquare, 
  ChevronRight,
  Send,
  Building2,
  Sparkles
} from 'lucide-react';

export default function ContactPlacement() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Premium Hero Section */}
      <section className="bg-primary py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/20 mb-8 backdrop-blur-md">
              <Sparkles size={16} className="text-secondary" />
              <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Establish Connection</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white italic mb-8 leading-tight">
              Get in <span className="text-secondary underline decoration-4 underline-offset-8">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Have questions about campus recruitment, internships, or corporate partnerships? Our placement office is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 px-6 relative -mt-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Official Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-gray-100 relative group"
          >
            <div className="absolute top-12 right-12 opacity-5 scale-150 rotate-12 group-hover:scale-175 transition-transform duration-700">
              <Building2 size={200} />
            </div>

            <div className="relative z-10">
              <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Placement Head</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary italic mb-12">Dr. Renil <span className="text-secondary">Thomas</span></h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-8 group/item">
                  <div className="bg-primary/5 p-5 rounded-3xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <Phone size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Direct Helpline</div>
                    <a href="tel:9824203575" className="text-2xl font-black text-primary hover:text-secondary transition-colors">
                      +91 98242 03575
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-8 group/item">
                  <div className="bg-primary/5 p-5 rounded-3xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <Mail size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Main Correspondence</div>
                    <a href="mailto:renil.thomas@cvmu.edu.in" className="text-xl font-bold text-gray-700 hover:text-primary transition-colors block">
                      renil.thomas@cvmu.edu.in
                    </a>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Internship Inquiries</div>
                      <a href="mailto:internships@semcom.ac.in" className="text-lg font-bold text-secondary hover:text-primary transition-colors">
                        internships@semcom.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-8 group/item">
                  <div className="bg-primary/5 p-5 rounded-3xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <Clock size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Office Hours</div>
                    <div className="text-xl font-bold text-gray-700">Mon - Sat: 10:00 AM - 5:00 PM</div>
                    <p className="text-gray-400 text-sm mt-1">Closed on Sundays and Public Holidays</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 space-y-12">
              <div>
                <h2 className="text-4xl font-serif font-black text-white italic mb-4">Quick <span className="text-secondary">Inquiry</span></h2>
                <p className="text-gray-400">Send us a message and we'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Purpose</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer">
                    <option className="bg-primary">Recruitment Partnering</option>
                    <option className="bg-primary">Student Internship Query</option>
                    <option className="bg-primary">Alumni Relations</option>
                    <option className="bg-primary">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Your Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-8 text-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button className="w-full bg-secondary text-primary py-6 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 group transition-all hover:scale-105 active:scale-95 shadow-xl shadow-secondary/10">
                  Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-5xl font-serif font-black text-primary italic leading-tight">Visit Our <br /><span className="text-secondary">Placement Hub</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-secondary shrink-0"><ChevronRight /></div>
                <p className="text-gray-600 font-medium italic">Located in the Administrative Wing, Ground Floor, SEMCOM Campus.</p>
              </div>
              <p className="text-gray-500 leading-relaxed">
                We encourage corporate partners to visit our campus and explore our state-of-the-art facilities firsthand. Our office is equipped with dedicated cabins for personal interviews and group discussions.
              </p>
            </div>
            <button className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs group">
              View on Google Maps <div className="p-3 bg-secondary rounded-full group-hover:bg-primary group-hover:text-white transition-all"><MessageSquare size={16} /></div>
            </button>
          </div>
          <div className="md:w-1/2 w-full h-[400px] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" 
              className="w-full h-full object-cover" 
              alt="Office space"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
