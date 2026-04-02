import { motion } from 'motion/react';
import { 
  Briefcase, 
  Target, 
  Users, 
  GraduationCap, 
  ChevronRight, 
  Building2, 
  FileText, 
  MessageSquare,
  Sparkles,
  BarChart3,
  Award,
  Globe
} from 'lucide-react';

const pillars = [
  {
    title: "Competency Mapping",
    description: "Personalized career counseling to help students identify their core strengths and select interest-based career paths.",
    icon: Target,
    color: "bg-blue-500"
  },
  {
    title: "Industry Networking",
    description: "Bridging the gap between academia and industry through seminars, workshops, and high-impact internship programs.",
    icon: Building2,
    color: "bg-emerald-500"
  },
  {
    title: "Global Outreach",
    description: "Maintaining strong connections with prospective employers, legacy recruiters, and our global alumni network.",
    icon: Globe,
    color: "bg-purple-500"
  }
];

const lifecycle = [
  { step: "01", title: "Skill Assessment", desc: "Identifying individual student potential through rigorous mapping." },
  { step: "02", title: "Intensive Training", desc: "Expert workshops on resume building, interview techniques, and industry readiness." },
  { step: "03", title: "Corporate Engagement", desc: "Connecting with past and prospective recruiters across India and abroad." },
  { step: "04", title: "Placement Drive", desc: "Streamlined on-campus placement sessions optimized for both students and recruiters." }
];

export default function InternshipPlacement() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974" 
            className="w-full h-full object-cover" 
            alt="Corporate background"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md mb-8 border border-white/20">
              <Sparkles size={18} className="text-secondary" />
              <span className="text-white font-black text-xs uppercase tracking-[0.4em]">Career Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-8 italic leading-tight">
              Internship <span className="text-secondary">&</span> Placement
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto border-t border-white/10 pt-8 leading-relaxed">
              Empowering students with industry-ready skills and connecting them with global career opportunities through a systematic, methodology-driven placement cell.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-12 rounded-[4rem] group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`${pillar.color} w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-3xl font-serif font-black text-primary mb-6 italic">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Placement Lifecycle */}
      <section className="py-32 bg-gray-900 text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-secondary font-black uppercase tracking-[0.5em] text-xs mb-4 block">Proven Methodology</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black italic mb-8">Guided Path to <span className="text-secondary">Success</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                We conduct intensive workshops to mould students into industry-ready professionals, focusing on resume building, interview simulations, and job market analysis.
              </p>
            </div>
            <div className="flex items-center gap-6 pb-4">
              <div className="text-right">
                <div className="text-3xl font-black text-white">95%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Placement Rate</div>
              </div>
              <BarChart3 size={48} className="text-secondary" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifecycle.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all border-b-4 border-b-secondary"
              >
                <span className="text-5xl font-black text-white/10 absolute top-8 right-8 font-serif">{item.step}</span>
                <h4 className="text-xl font-black mb-4 uppercase tracking-widest text-secondary">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Partnership */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-serif font-black text-primary italic leading-tight mb-8">Bridging the Gap Between <span className="text-secondary underline decoration-4 underline-offset-8">Aspiration</span> & Opportunity</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Our team continuously interacts with top employers to get feedback on student performance and future industry trends, ensuring our curriculum and training remain ahead of the curve.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Development & dissemination of placement brochures",
                "Inviting experts for summer training & industry vivas",
                "Strategic outreach to alumni in India and abroad",
                "Analyzing job opportunities and mapping matching skills"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-gray-700 font-bold group">
                  <div className="bg-secondary/20 p-2 rounded-full text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                    <ChevronRight size={18} />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap gap-6">
              <button className="bg-primary text-white pl-8 pr-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-primary/90 transition-all shadow-xl">
                <FileText size={18} className="text-secondary" /> Download Brochure
              </button>
              <button className="bg-gray-50 text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-gray-100 transition-all border border-gray-100">
                <MessageSquare size={18} className="text-secondary" /> Contact Cell
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-8 border-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=2070" 
                className="w-full h-full object-cover" 
                alt="Students networking"
              />
            </div>
            {/* Achievement Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[3.5rem] shadow-2xl flex flex-col items-center border border-gray-100"
            >
              <Award size={64} className="text-secondary mb-4" />
              <div className="text-3xl font-black text-primary">Ranked #1</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Placement Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
