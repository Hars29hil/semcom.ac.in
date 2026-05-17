import { motion } from 'motion/react';
import { 
  Users, 
  Trophy, 
  MapPin, 
  Briefcase, 
  MessageSquare, 
  Plane, 
  ChevronRight,
  Handshake,
  Star,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const contributions = [
  {
    title: "Placement Support",
    desc: "Our alumni hold prominent leadership positions globally and actively mentor students while facilitating job placements.",
    icon: Briefcase
  },
  {
    title: "Global Guidance",
    desc: "A vast network providing mentorship and guidance for students pursuing domestic and international educational tours.",
    icon: Plane
  },
  {
    title: "Campus Evolution",
    desc: "Continuous engagement through constructive feedback and active participation in college sports and administrative activities.",
    icon: MessageSquare
  }
];

export default function Alumni() {
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
            <span className="text-white/60">Alumni Association</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Alumni <span className="text-accent">Association</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Fostering lifelong connections and empowering the next generation of business and technology leaders through our vibrant global alumni network.
          </p>
        </div>
      </div>

      {/* About The Association */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-between">
          
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card !p-0 overflow-hidden relative border border-border shadow-soft aspect-[16/9] group">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
                alt="Community event"
              />
            </div>
            
            {/* Visual Stats Badge */}
            <div className="absolute -bottom-6 -right-6 card !p-6 max-w-[180px] border border-border shadow-soft hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-secondary" size={24} />
                <div className="text-xl font-bold text-primary leading-none">5000+</div>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-muted">Global Members</div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">Lifelong Welfare & Betterment</h2>
            <p className="text-sm text-muted leading-relaxed font-medium">
              SEMCOM prides itself on maintaining constant touch with its students even after graduation. We play a pivotal role in their welfare, paving the way for success across professional dimensions.
            </p>
            <div className="p-5 bg-surface rounded-xl border border-border italic text-primary text-xs font-semibold relative">
              <Quote size={24} className="text-secondary/15 absolute top-3 right-3" />
              "The Alumni Association was started with the singular aim of ensuring that our relationship with our graduates doesn't end at graduation, but rather evolves into a powerful lifelong partnership."
            </div>
          </div>

        </div>
      </div>

      {/* Global Impact Grid */}
      <div className="bg-surface py-12 sm:py-16 border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">How Our Alumni Contribute</h2>
            <p className="text-muted text-xs font-medium">Active engagement areas helping our students secure their futures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contributions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm">
                  <item.icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Events Card Box */}
      <div className="section-container py-12 sm:py-16">
        <div className="bg-gradient-to-br from-primary via-[#1E3A8A] to-primary rounded-2xl overflow-hidden relative shadow-soft text-white">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 p-8 sm:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-accent shrink-0 shadow-sm">
              <Handshake size={32} />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Annual Alumni Meet</h2>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-medium">
                Every year, we host our signature Alumni Meet at the SEMCOM campus. It's a day of nostalgia, networking, and celebration, where members from different batches return to share their success stories and reconnect with faculty.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="https://admissions.cvmu.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-white hover:text-primary transition-all shadow"
                >
                  <span>Register for Next Meet</span>
                  <ChevronRight size={13} />
                </a>
                <button className="bg-white/10 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-white/20 transition-all border border-white/10">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Areas list */}
      <div className="section-container pb-12 sm:pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Sports Advocacy", desc: "Active participation in college sports festivals and athletic events.", icon: Trophy },
          { title: "Global Guidance", desc: "Mentor students for international educational tours (Domestic & Global).", icon: MapPin },
          { title: "Skill Mentorship", desc: "Technical workshops and professional skill-sharing sessions.", icon: Handshake }
        ].map((area, i) => (
          <div key={i} className="card !p-6 flex gap-4 items-start border border-border shadow-sm hover:border-secondary/20 transition-all">
            <div className="w-9 h-9 bg-background border border-border rounded-xl flex items-center justify-center text-secondary shrink-0 shadow-sm">
              <area.icon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary mb-1">{area.title}</h4>
              <p className="text-xs text-muted leading-relaxed font-medium">{area.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
