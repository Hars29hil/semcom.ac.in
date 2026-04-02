import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MessageSquare,
  Clock,
  UserCheck,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
  BookOpen
} from 'lucide-react';

const importantContacts = [
  {
    role: "Educational Verification / Transcript",
    email: "studentssupport.semcom@cvmu.edu.in",
    icon: UserCheck
  },
  {
    role: "Admissions",
    person: "Dr. Ronil Thomas",
    phone: "9898255575",
    email: "ronil.thomas@cvmu.edu.in",
    icon: GraduationCap
  },
  {
    role: "Placement",
    email: "ronil.thomas@cvmu.edu.in",
    icon: Briefcase
  },
  {
    role: "Accommodation (Boys Hostel)",
    email: "chetanbhai.patel@cvmu.edu.in",
    icon: HomeIcon
  },
  {
    role: "Accommodation (Girls Hostel)",
    email: "nirali.patel@cvmu.edu.in",
    icon: HomeIcon
  },
  {
    role: "SMTR (A UGC CARE Listed Journal)",
    email: "publication.smtr@cvmu.edu.in",
    icon: BookOpen
  }
];

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-gray-50/50">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-sans font-black uppercase tracking-[0.5em] text-secondary mb-4"
          >
            Connect With Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-black text-primary leading-tight tracking-tighter mb-8"
          >
            Always <span className="italic text-secondary underline decoration-4 underline-offset-8">Available</span> <br />
            For You.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-light max-w-2xl mx-auto border-t border-gray-200 pt-8"
          >
            Whether you're a prospective student, alumni, or corporate partner, we are here to provide the support and information you need.
          </motion.p>
        </div>
      </section>

      {/* Primary Info & Form */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          {/* Main Contact Detail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-12"
          >
            <div>
              <h2 className="text-4xl font-serif font-black text-primary italic mb-10 leading-tight">Institutional <br/><span className="text-secondary underline decoration-4">Nodes</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-[2rem] bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">Our Campus</h4>
                    <p className="text-gray-600 font-medium italic leading-relaxed">
                      Opp. Shastri Ground,<br />
                      Vallabh Vidyanagar - 388 120,<br />
                      GUJARAT, INDIA.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-[2rem] bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">Phone Lines</h4>
                    <p className="text-gray-600 font-black italic text-xl">
                      (+91) 2692 235622
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-[2rem] bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">Official Email</h4>
                    <p className="text-gray-600 font-medium italic hover:text-primary transition-colors">
                      principal.semcom@cvmu.edu.in
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group border-t border-gray-100 pt-8">
                  <div className="w-16 h-16 rounded-[2rem] bg-white shadow-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Office Hours</h4>
                    <p className="text-gray-600 font-medium italic">
                      Mon - Sat <br/>
                      9:00 AM to 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Digital Footprint</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-2 transition-all shadow-sm"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white p-16 rounded-[4rem] shadow-2xl shadow-primary/5 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            
            <div className="flex items-center gap-6 mb-12 relative z-10">
              <div className="w-16 h-16 bg-primary rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-primary/20">
                <MessageSquare size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-black text-primary italic leading-none">Instant Inquiry</h2>
                <p className="text-gray-400 font-medium mt-2">Expect a response within 24 business hours.</p>
              </div>
            </div>

            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Full Identity</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white transition-all outline-none font-medium text-primary shadow-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Digital Address</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white transition-all outline-none font-medium text-primary shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Departmental Node</label>
                <select className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white transition-all outline-none appearance-none font-medium text-primary shadow-sm cursor-pointer">
                  <option>General Support Desk</option>
                  <option>Admissions Portal</option>
                  <option>Academic Documentation</option>
                  <option>Career & Placement</option>
                  <option>Hostel Accommodation</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Message Payload</label>
                <textarea
                  rows={5}
                  placeholder="How may we assist you today?"
                  className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white transition-all outline-none resize-none font-medium text-primary shadow-sm"
                />
              </div>

              <button className="w-full bg-primary text-white py-6 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 group">
                Transmit Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Important Contacts Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block underline decoration-4 underline-offset-8">Critical Channels</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary italic leading-tight">Emergency <br/>& Specific <span className="text-secondary">Contacts</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importantContacts.map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group border border-gray-100 flex flex-col"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-8 transition-colors">
                  <contact.icon size={24} />
                </div>
                <h3 className="text-xl font-serif font-black text-primary italic mb-2 group-hover:text-secondary transition-colors">{contact.role}</h3>
                {contact.person && (
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-4">{contact.person}</p>
                )}
                
                <div className="mt-auto pt-6 border-t border-gray-50 space-y-3">
                  {contact.phone && (
                    <div className="flex items-center gap-3 text-primary font-black italic">
                      <Phone size={14} />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-gray-500 font-medium italic break-all text-sm group-hover:text-primary transition-colors">
                    <Mail size={14} />
                    <span>{contact.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-7xl mx-auto h-[600px] rounded-[5rem] overflow-hidden shadow-2xl relative border-8 border-white group">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066"
            alt="Campus Location"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-700" />
          
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/95 backdrop-blur-xl p-16 rounded-[4rem] text-center max-w-lg shadow-2xl border border-white/20"
            >
              <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                <MapPin size={40} />
              </div>
              <h3 className="text-3xl font-serif font-black text-primary italic mb-4">On-Campus <br/>Visit</h3>
              <p className="text-gray-500 font-medium italic mb-10 leading-relaxed">
                Experience the heritage of SEMCOM in person. Located at the heart of the educational hub, Vallabh Vidyanagar.
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="inline-flex items-center gap-4 bg-secondary text-primary px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-white transition-all shadow-xl"
              >
                Launch Navigation <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowUpRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
