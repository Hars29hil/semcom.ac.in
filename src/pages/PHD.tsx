import { motion } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Users, 
  ArrowRight,
  Globe,
  Milestone,
  Library,
  Scale,
  Award,
  Wallet,
  Building2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const researchAreas = [
  { 
    title: 'Commerce', 
    icon: Scale, 
    description: 'Advanced studies in financial markets, international trade, and commercial ethics.' 
  },
  { 
    title: 'Management', 
    icon: Milestone, 
    description: 'Deep research into organizational behavior, strategic leadership, and innovative business models.' 
  },
  { 
    title: 'Multi-disciplinary', 
    icon: Globe, 
    description: 'Cross-functional research bridging technology, ethics, and modern business practices.' 
  }
];

export default function PHD() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Ph.D.</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Doctor of <span className="text-accent">Philosophy</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
            The Ph.D. program at SEMCOM allows scholars to push the boundaries of knowledge alongside world-class faculty and facilities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 border border-white/20 bg-white/5 rounded-xl text-white text-[11px] font-bold tracking-widest uppercase shadow-sm">Commerce</span>
            <span className="px-4 py-2 border border-white/20 bg-white/5 rounded-xl text-white text-[11px] font-bold tracking-widest uppercase shadow-sm">Management</span>
            <span className="px-4 py-2 border border-white/20 bg-white/5 rounded-xl text-white text-[11px] font-bold tracking-widest uppercase shadow-sm">Multi-disciplinary</span>
          </div>
        </div>
      </div>

      {/* Research Environment */}
      <section className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Award size={14} />
              <span>Academic Distinction</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
              An Intellectual Rich Research Ecosystem
            </h2>
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm shrink-0">
                  <Building2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary mb-1">World Class Facilities</h4>
                  <p className="text-xs text-muted leading-relaxed font-medium">Access to elite research labs, extensive digital libraries, and dedicated scholar workrooms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary mb-1">Senior Faculty Mentorship</h4>
                  <p className="text-xs text-muted leading-relaxed font-medium">Work directly with recognized authorities in Commerce and Management disciplines.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card !p-8 bg-surface border border-border space-y-6 shadow-sm">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <Wallet size={24} />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-primary mb-1">SHODH Scheme</h3>
                   <p className="text-xs text-muted font-medium">Grant of ₹15K offered by GOG for full-time Ph.D. scholars (2 years).</p>
                 </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-bold text-primary mb-2">International Scholars</h3>
                <p className="text-xs text-muted font-medium leading-relaxed mb-6">
                  SEMCOM welcomes research applications from international and foreign students, fostering a diverse global research perspective.
                </p>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Contact Admissions</span>
                  <span className="text-sm font-bold text-primary">02692 238001 | 63588 19009</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialization Areas */}
      <section className="bg-surface py-12 sm:py-16 border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Library size={14} />
              <span>Focused Research Disciplines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Specializations</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card !p-8 border border-border shadow-sm group hover:border-secondary transition-colors"
              >
                <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <area.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{area.title}</h3>
                <p className="text-muted text-xs leading-relaxed font-medium">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisors & Eligibility */}
      <section className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Rules Banner */}
          <div className="card !p-8 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent mb-2">
                <BookOpen size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Eligibility & Rules</h2>
              <div className="flex gap-3">
                 <div className="w-1 bg-accent rounded-full shrink-0" />
                 <p className="text-white/80 text-sm leading-relaxed font-semibold">
                   Admissions are governed by the CVM University Ph.D. Rules & Regulations 2020.
                 </p>
              </div>
            </div>
            
            <div className="relative z-10 pt-6">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow"
              >
                <span>View Regulations</span>
                <ChevronRight size={13} />
              </a>
            </div>
          </div>
          
          <div className="space-y-8 flex flex-col h-full">
            {/* Research Supervisors */}
            <div className="card !p-8 bg-surface border border-border shadow-sm flex-grow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
                    <Search size={14} />
                    <span>Expert Mentorship</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">Research Supervisors</h3>
                  <p className="text-xs text-muted font-medium max-w-sm">Browse our directory of recognized Ph.D. Research Supervisors and their areas of specialization.</p>
                </div>
                <button className="btn-outline shrink-0 whitespace-nowrap !py-2 !px-4">
                  Directory List
                </button>
              </div>
            </div>
            
            {/* Admissions Callout */}
            <div className="card !p-6 bg-secondary/10 border border-secondary/20 shadow-sm flex items-center justify-between group cursor-pointer hover:bg-secondary hover:text-white transition-colors">
              <div>
                <h4 className="text-sm font-bold text-primary group-hover:text-white transition-colors mb-1">Ready to begin your journey?</h4>
                <p className="text-[10px] font-bold uppercase tracking-wider text-secondary group-hover:text-white/80 transition-colors">Admission is currently open for eligible candidates</p>
              </div>
              <div className="w-10 h-10 bg-surface group-hover:bg-white/10 rounded-full flex items-center justify-center text-secondary group-hover:text-white transition-colors shrink-0">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
