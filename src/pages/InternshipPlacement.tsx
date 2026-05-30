import { motion } from 'motion/react';
import { 
  Target, 
  Building2, 
  Globe,
  ChevronRight, 
  FileText, 
  MessageSquare,
  Sparkles,
  BarChart3,
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    title: "Competency Mapping",
    description: "Personalized career counseling to help students identify their core strengths and select interest-based career paths.",
    icon: Target,
  },
  {
    title: "Industry Networking",
    description: "Bridging the gap between academia and industry through seminars, workshops, and high-impact internship programs.",
    icon: Building2,
  },
  {
    title: "Global Outreach",
    description: "Maintaining strong connections with prospective employers, legacy recruiters, and our global alumni network.",
    icon: Globe,
  }
];

const lifecycle = [
  { step: "01", title: "Skill Assessment", desc: "Identifying individual student potential through rigorous mapping." },
  { step: "02", title: "Intensive Training", desc: "Expert workshops on resume building, interview techniques, and readiness." },
  { step: "03", title: "Corporate Engagement", desc: "Connecting with past and prospective recruiters across India and abroad." },
  { step: "04", title: "Placement Drive", desc: "Streamlined on-campus placement sessions optimized for success." }
];

export default function InternshipPlacement() {
  return (
    <div className="bg-background min-h-screen">
      {/* Premium Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/placement" className="hover:text-white transition-colors">Placement</Link>
              <span>/</span>
              <span className="text-white/60">Internship</span>
            </div>

            <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
              Internship <span className="text-accent">& Placement</span>
            </h1>
            <p className="text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
              Empowering students with industry-ready skills and connecting them with global career opportunities through a systematic, methodology-driven placement cell.
            </p>
          </div>
          
          <div className="hidden lg:flex w-24 h-24 bg-white/5 border border-white/10 rounded-full items-center justify-center p-6 text-accent shrink-0">
            <Sparkles size={48} className="animate-pulse" />
          </div>
        </div>
      </div>

      {/* Strategic Pillars */}
      <section className="section-container py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Strategic Pillars</h2>
          <p className="text-muted text-xs font-medium">The core foundations of our career development process.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card !p-8 border border-border shadow-sm group hover:border-secondary transition-colors"
            >
              <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <pillar.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{pillar.title}</h3>
              <p className="text-muted text-xs leading-relaxed font-medium">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Placement Lifecycle */}
      <section className="bg-gradient-to-br from-primary via-[#1E3A8A] to-primary py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-accent font-bold uppercase tracking-wider text-[10px]">Proven Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Guided Path to <span className="text-accent">Success</span></h2>
              <p className="text-white/70 text-sm leading-relaxed font-semibold">
                We conduct intensive workshops to mould students into industry-ready professionals, focusing on resume building, interview simulations, and job market analysis.
              </p>
            </div>
            
            <div className="flex items-center gap-5 shrink-0 bg-white/5 p-5 rounded-2xl border border-white/10">
              <div className="text-right">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-accent mt-0.5">Placement Rate</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <BarChart3 size={24} />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycle.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden hover:bg-background/20 transition-colors"
              >
                <div className="absolute top-4 right-4 text-white/5 font-bold text-5xl pointer-events-none select-none">
                  {item.step}
                </div>
                <h4 className="text-sm font-bold mb-3 text-accent relative z-10">{item.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed font-medium relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Partnership */}
      <section className="section-container py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
                Bridging the Gap Between <span className="text-secondary">Aspiration</span> & Opportunity
              </h2>
              <p className="text-sm text-muted leading-relaxed font-medium">
                Our team continuously interacts with top employers to get feedback on student performance and future industry trends, ensuring our curriculum and training remain ahead of the curve.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Development & dissemination of placement brochures",
                "Inviting experts for summer training & industry vivas",
                "Strategic outreach to alumni in India and abroad",
                "Analyzing job opportunities and mapping matching skills"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all shrink-0 mt-0.5 shadow-sm">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-sm font-semibold text-primary">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                <FileText size={16} />
                <span>Download Brochure</span>
              </button>
              <button className="btn-outline flex items-center gap-2 group border-border text-primary hover:border-secondary hover:text-secondary">
                <MessageSquare size={16} />
                <span>Contact Cell</span>
              </button>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto">
            <div className="card !p-2 bg-surface border border-border h-full w-full shadow-sm rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=2070" 
                className="w-full h-full object-cover rounded-xl" 
                alt="Students networking"
              />
            </div>
            
            {/* Achievement Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 card !p-5 border border-border shadow-soft bg-background flex items-center gap-4 hidden sm:flex max-w-[240px]"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                <Award size={24} />
              </div>
              <div>
                <div className="text-lg font-bold text-primary leading-none mb-1">Ranked #1</div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-muted">Placement Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
