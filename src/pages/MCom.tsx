import { motion } from 'motion/react';
import { 
  BookOpen, 
  Target, 
  Trophy, 
  Briefcase, 
  ArrowRight,
  GraduationCap,
  Users,
  Search,
  Globe,
  Presentation,
  Compass,
  Layout
} from 'lucide-react';
import { Link } from 'react-router-dom';

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Visionary Leadership',
    description: 'Sound theoretical foundation helps in identification of business problems and provides innovative solutions, molding students into future visionaries and management leaders.'
  },
  {
    id: 'PO-2',
    title: 'Research Orientation',
    description: 'Developing a research mindset for analyzing problems and formulating strategies to cope with emerging business opportunities.'
  },
  {
    id: 'PO-3',
    title: 'Global Competency',
    description: 'Equipping students with the necessary competencies to be employable in the global market with a competitive edge.'
  },
  {
    id: 'PO-4',
    title: 'Effective Decision Making',
    description: 'Building conceptual and analytical abilities required for effective and ethical decision making in complex business scenarios.'
  }
];

const learningAvenues = [
  { name: 'Case Studies', icon: Search },
  { name: 'Management Games', icon: Layout },
  { name: 'Seminar Presentations', icon: Presentation },
  { name: 'Industry Interaction', icon: Users },
  { name: 'E-commerce Training', icon: Globe }
];

export default function MCom() {
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
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white/60">M.Com</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            M.Com <span className="text-accent">(Master of Commerce)</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            A pragmatic two-year postgraduate journey affiliated with CVM University, designed to mold future corporate leaders through research and innovation.
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
              Pragmatic Learning for Practicing Managers
            </h2>
            <p className="text-sm text-muted leading-relaxed font-medium">
              Classroom learning is enriched by high-engagement activities including case studies, management games, and intensive group discussions. 
            </p>
            <p className="text-sm text-muted leading-relaxed font-medium">
              We bridge the gap between academia and industry through regular interactions with practicing managers and e-commerce professionals, ensuring our graduates are market-ready from day one.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 bg-surface px-5 py-3 rounded-xl border border-border">
                <Users className="text-secondary" size={18} />
                <span className="font-bold text-xs text-primary">40 Seats Intake</span>
              </div>
              <div className="flex items-center gap-3 bg-primary px-5 py-3 rounded-xl border border-transparent text-white">
                <Trophy className="text-accent" size={18} />
                <span className="font-bold text-xs">Affiliated with CVM University</span>
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team discussion" />
              </div>
              <div className="card !p-6 bg-secondary/15 text-primary">
                <Presentation size={24} className="mb-2 text-secondary animate-pulse" />
                <h4 className="font-bold text-xs leading-tight">Seminar Presentations</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card !p-6 bg-surface border border-border text-primary">
                <Search size={24} className="mb-2 text-secondary" />
                <h4 className="font-bold text-xs leading-tight">Case Study Focused</h4>
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft h-48 border border-border">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Business analysis" />
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
            <p className="text-muted text-sm font-medium">Core proficiencies our graduates achieve throughout the program.</p>
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
          
          {/* Learning Avenues */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">Classroom Enrichment</h2>
            <div className="space-y-3.5">
              {learningAvenues.map((ave, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <ave.icon size={18} />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-primary">{ave.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Curriculum */}
          <div className="flex flex-col gap-6">
            
            {/* Eligibility Box */}
            <div className="card !p-8 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white space-y-6 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              
              <div className="relative z-10 space-y-4">
                <GraduationCap size={32} className="text-accent mb-4" />
                <h3 className="text-lg font-bold text-white">Eligibility Criteria</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-semibold">
                  Bachelor's degree in Commerce / Management / Equivalent under 10+2+3 from a recognized university.
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

            {/* Curriculum Box */}
            <div className="card !p-6 flex flex-col items-center justify-center text-center border border-border shadow-sm bg-surface">
              <h3 className="text-muted font-bold uppercase tracking-wider text-[9px] mb-2">Program Structure</h3>
              <h4 className="text-sm font-bold text-primary mb-5">M.Com Curriculum</h4>
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
