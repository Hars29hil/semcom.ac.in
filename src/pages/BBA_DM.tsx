import { motion } from 'motion/react';
import { 
  BookOpen, 
  Trophy, 
  Briefcase, 
  ArrowRight,
  GraduationCap,
  Users,
  Layout,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Digital Strategy',
    description: 'Craft effective online campaigns and digital marketing strategies to boost brand awareness and ROI.'
  },
  {
    id: 'PO-2',
    title: 'AI Integration',
    description: 'Leverage artificial intelligence and machine learning tools for marketing automation and predictive targeting.'
  },
  {
    id: 'PO-3',
    title: 'Analytics & Optimization',
    description: 'Measure campaign success metrics precisely, utilizing tools to refine and optimize marketing spend.'
  },
  {
    id: 'PO-4',
    title: 'Innovative Creativity',
    description: 'Combine tech-savvy AI prompting with creative vision to generate engaging content at scale.'
  }
];

const keyFeatures = [
  'Four-Year Full-Time Program',
  'Focus on SEO, SEM, and AI-Driven Marketing',
  'Live Campaigns and Real-World Projects',
  'Industry Expert Faculties',
  'Experiential and Hands-On Learning Approach',
  'Placement Support in Leading Digital Agencies',
  'Soft Skills and Creative Development',
  'No Entrance Exam - Admission on Merit Basis',
  'Scholarships for Meritorious Students'
];

const specializations = [
  'Search Engine Optimization & Marketing',
  'Social Media Marketing and Community Management',
  'Artificial Intelligence for Marketers',
  'Content Strategy & Email Marketing'
];

export default function BBA_DM() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white/60">BBA-DM & AI</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4 uppercase">
            BBA-DM & AI <span className="text-accent">(Bachelor of Business Administration in Digital Marketing & Artificial Intelligence)</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed uppercase tracking-widest font-bold text-emerald-400">
            Bridging Creativity, Technology, and Marketing
          </p>
        </div>
      </div>

      {/* Program Overview */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              <span>Our Approach</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
              Pragmatic Learning for Digital Marketers
            </h2>
            <div className="space-y-3">
              {keyFeatures.slice(0, 5).map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <p className="text-sm text-muted font-medium">{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 bg-surface px-5 py-3 rounded-xl border border-border">
                <Users className="text-secondary" size={18} />
                <span className="font-bold text-xs text-primary">Admission on Merit Basis</span>
              </div>
              <div className="flex items-center gap-3 bg-primary px-5 py-3 rounded-xl border border-transparent text-white">
                <Trophy className="text-accent" size={18} />
                <span className="font-bold text-xs">CVM University</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden shadow-soft h-48 border border-border">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Digital Marketing Team" />
              </div>
              <div className="card !p-6 bg-secondary/15 text-primary">
                <Briefcase size={24} className="mb-2 text-secondary animate-pulse" />
                <h4 className="font-bold text-xs leading-tight">Agency Placements</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card !p-6 bg-surface border border-border text-primary">
                <Layout size={24} className="mb-2 text-secondary" />
                <h4 className="font-bold text-xs leading-tight">Live Campaigns</h4>
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft h-48 border border-border">
                <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover" alt="Marketing Strategy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Program Outcomes */}
      <div className="bg-surface py-12 sm:py-16 border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Program Outcomes</h2>
            <p className="text-muted text-sm font-medium">Core advantages of joining the BBA-DM & AI program at SEMCOM.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programOutcomes.map((po, index) => (
              <motion.div
                key={po.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="card flex gap-6 items-start"
              >
                <div className="text-xl font-bold text-secondary shrink-0">{po.id}</div>
                <div>
                  <h3 className="font-bold text-sm text-primary mb-2">{po.title}</h3>
                  <p className="text-muted text-xs leading-relaxed font-medium">{po.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Avenues & Eligibility */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">Core Focus Areas</h2>
            <div className="space-y-3.5">
              {specializations.map((spec, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Star size={18} className="fill-accent" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-primary">{spec}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-bold text-primary mt-8 pt-6 pb-3 border-b border-border">More Key Features</h3>
            <div className="space-y-3">
              {keyFeatures.slice(5).map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <p className="text-sm text-muted font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card !p-8 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white space-y-6 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              
              <div className="relative z-10 space-y-4">
                <GraduationCap size={32} className="text-accent mb-4" />
                <h3 className="text-lg font-bold text-white">Admissions Open 2026-27</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-semibold">
                  No Entrance Exam - Admission on Merit Basis. Scholarships for Meritorious Students are available.
                </p>
              </div>

              <div className="pt-4 relative z-10">
                <a 
                  href="https://admissions.cvmu.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

            <div className="card !p-6 flex flex-col items-center justify-center text-center border border-border shadow-sm bg-surface">
              <h3 className="text-muted font-bold uppercase tracking-wider text-[9px] mb-2">Program Structure</h3>
              <h4 className="text-sm font-bold text-primary mb-5">BBA-DM & AI Curriculum</h4>
              <button className="btn-primary !py-2.5 !px-6 !text-xs">
                <BookOpen size={14} />
                <span>Programme Structure</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
