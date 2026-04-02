import { motion } from 'motion/react';
import { 
  Users, 
  Heart, 
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

const contributions = [
  {
    title: "Placement Support",
    desc: "Our alumni hold prominent leadership positions globally and actively mentor students while facilitating job placements.",
    icon: Briefcase
  },
  {
    title: "Global Networking",
    desc: "A vast network providing mentorship and guidance for students pursuing domestic and international educational tours.",
    icon: Plane
  },
  {
    title: "Campus Evolution",
    desc: "Continuous engagement through constructive feedback and participation in college sports and administrative activities.",
    icon: MessageSquare
  }
];

export default function Alumni() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523240715632-d984cfb1d121?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Alumni gathering"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-secondary/20 px-6 py-2 rounded-full backdrop-blur-md mb-8 border border-secondary/30">
              <Star size={16} className="text-secondary" />
              <span className="text-white font-black text-xs uppercase tracking-[0.4em]">Legacy of Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white italic mb-8 leading-tight">
              SEMCOM <br /><span className="text-secondary underline decoration-secondary decoration-4 underline-offset-8">Alumni</span> Association
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Fostering lifelong connections and empowering the next generation of leaders through our vibrant global alumni network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About The Association */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-gray-50 flex aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070" 
                className="w-full h-full object-cover" 
                alt="Community event"
              />
            </div>
            {/* Visual Stats */}
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-secondary" size={32} />
                <div className="text-3xl font-black text-primary italic leading-none">5000+</div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Global Members</div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-serif font-black text-primary mb-8 italic">Lifelong <span className="text-secondary">Welfare</span> & Betterment</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                SEMCOM prides itself on maintaining constant touch with its students even after graduation. We play a pivotal role in their welfare and betterment, paving the way for success in all possible dimensions.
              </p>
              <div className="p-8 bg-gray-50 rounded-[3rem] border-l-8 border-secondary italic text-gray-500 font-medium relative">
                <Quote size={48} className="absolute -top-6 -left-6 text-secondary/20" />
                "The Alumni Association was started with the singular aim of ensuring that our relationship with our students doesn't end at graduation, but rather evolves into a powerful professional partnership."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Grid */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Alumni Impact</span>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-primary italic mb-8 underline decoration-secondary/30 decoration-offset-8 underline-offset-8">How Our Alumni <span className="text-secondary">Contribute</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contributions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[4rem] group hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col items-center text-center"
              >
                <div className="bg-primary/5 p-6 rounded-3xl text-primary group-hover:bg-white/10 group-hover:text-secondary mb-8 transition-colors">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-black text-primary italic mb-6 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Events */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[5rem] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
            <div className="bg-white/10 p-12 rounded-full border border-white/20 text-secondary shrink-0">
              <Handshake size={80} />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic">Annual <span className="text-secondary">Alumni Meet</span></h2>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Every year, we host our signature Alumni Meet at the SEMCOM campus. It's a day of nostalgia, networking, and celebration, where members from different batches return to share their success stories and reconnect with faculty and students.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button className="bg-secondary text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform flex items-center gap-3">
                  Register for Next Meet <ChevronRight size={14} />
                </button>
                <button className="bg-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all border border-white/10">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Areas */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Sports Advocacy", desc: "Active participation in college sports festivals and atheletic events.", icon: Trophy },
            { title: "Global Guidance", desc: "Mentor students for international educational tours (Domestic & Global).", icon: MapPin },
            { title: "Skill Mentorship", desc: "Technical workshops and professional skill-sharing sessions.", icon: Handshake }
          ].map((area, i) => (
            <div key={i} className="flex gap-6 items-start p-8 rounded-[3rem] border border-gray-100 hover:border-secondary transition-colors group">
              <div className="bg-gray-50 p-4 rounded-2xl text-primary group-hover:bg-secondary group-hover:text-primary transition-all">
                <area.icon size={24} />
              </div>
              <div>
                <h4 className="font-black text-primary mb-2 italic uppercase tracking-wider">{area.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
