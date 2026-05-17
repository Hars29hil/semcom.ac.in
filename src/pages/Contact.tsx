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
import { Link } from 'react-router-dom';

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
    role: "Placement Support",
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
    role: "SMTR (UGC CARE CARE Listed Journal)",
    email: "publication.smtr@cvmu.edu.in",
    icon: BookOpen
  }
];

export default function Contact() {
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
            <span className="text-white/60">Contact Us</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Connect With <span className="text-accent">Us</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Whether you're a prospective student, alumnus, or corporate partner, we are always here to provide the support and guidance you need.
          </p>
        </div>
      </div>

      {/* Primary Info & Form */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Contact Detail */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-6 pb-3 border-b border-border">Contact Channels</h2>
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-secondary shrink-0 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Our Campus</h4>
                    <p className="text-primary text-xs sm:text-sm leading-relaxed font-semibold">
                      Opp. Shastri Ground,<br />
                      Vallabh Vidyanagar - 388 120,<br />
                      Gujarat, India.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-secondary shrink-0 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Phone Lines</h4>
                    <p className="text-primary text-xs sm:text-sm font-bold">
                      (+91) 2692 235622
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-secondary shrink-0 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Official Email</h4>
                    <p className="text-primary text-xs sm:text-sm font-bold hover:text-secondary transition-colors">
                      principal.semcom@cvmu.edu.in
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-secondary shrink-0 shadow-sm">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Office Hours</h4>
                    <p className="text-primary text-xs sm:text-sm leading-relaxed font-semibold">
                      Mon - Sat <br/>
                      9:00 AM to 5:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Footprint */}
            <div className="pt-6 border-t border-border/80">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted mb-4">Digital Footprint</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:bg-secondary hover:text-white hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 card !p-8 sm:!p-12 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shadow-sm">
                <MessageSquare size={22} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-primary">Instant Inquiry</h2>
                <p className="text-muted text-xs font-semibold">Expect a response within 24 business hours.</p>
              </div>
            </div>

            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-muted ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all font-semibold text-xs text-primary shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-muted ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all font-semibold text-xs text-primary shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-wider text-muted ml-1">Department Desk</label>
                <select className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all font-semibold text-xs text-primary shadow-sm cursor-pointer">
                  <option>General Support Desk</option>
                  <option>Admissions Portal</option>
                  <option>Academic Documentation</option>
                  <option>Career & Placement</option>
                  <option>Hostel Accommodation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-wider text-muted ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="How may we assist you today?"
                  className="w-full px-4 py-4 rounded-xl bg-surface border border-border focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all font-semibold text-xs text-primary shadow-sm resize-none"
                />
              </div>

              <button className="btn-primary w-full !py-3 !text-xs">
                <span>Transmit Message</span>
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Emergency & Specific Contacts Section */}
      <div className="bg-surface py-12 sm:py-16 border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Critical Contact Channels</h2>
            <p className="text-muted text-sm font-medium">Direct departments to answer specialized queries.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantContacts.map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm">
                    <contact.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-1.5">{contact.role}</h3>
                  {contact.person && (
                    <p className="text-muted text-[10px] font-bold uppercase tracking-wider mb-4">{contact.person}</p>
                  )}
                </div>
                
                <div className="pt-4 border-t border-border/80 space-y-2">
                  {contact.phone && (
                    <div className="flex items-center gap-2.5 text-primary text-xs font-bold">
                      <Phone size={13} className="text-secondary" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5 text-muted text-xs font-semibold break-all hover:text-secondary transition-colors">
                    <Mail size={13} className="text-secondary shrink-0" />
                    <span>{contact.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Map Visual Card */}
      <div className="section-container py-12 sm:py-16">
        <div className="card !p-0 overflow-hidden relative border border-border shadow-soft h-[350px] group">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066"
            alt="Campus Location"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-700" />
          
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl text-center max-w-md shadow-2xl border border-white"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-5 shadow-sm">
                <MapPin size={22} />
              </div>
              <h3 className="text-base font-bold text-primary mb-2">On-Campus Visit</h3>
              <p className="text-muted text-xs font-medium leading-relaxed mb-6">
                Experience the heritage of SEMCOM in person. Located at the heart of the educational hub, Vallabh Vidyanagar.
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex !py-2.5 !px-6 !text-xs mx-auto shadow-md"
              >
                <span>Launch Navigation</span>
                <ArrowUpRight size={12} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
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
