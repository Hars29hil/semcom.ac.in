import { motion } from 'motion/react';
import { 
  BookOpen, 
  Target, 
  Trophy, 
  Coins, 
  Briefcase, 
  Database,
  ArrowRight,
  PieChart,
  Hammer,
  GraduationCap,
  ShieldCheck,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Commerce Mastery',
    description: 'Skills Set to apply the knowledge in various spheres of Commerce.'
  },
  {
    id: 'PO-2',
    title: 'Analytical Precision',
    description: 'Analytical and problem-solving skills within various disciplines of management, business, accounting, finance, costing and law with the help of IT applications.'
  },
  {
    id: 'PO-3',
    title: 'Strong Foundation',
    description: 'In-depth learning experiences in the various fields of business and also to provide a strong foundation for students to prepare for professional courses.'
  },
  {
    id: 'PO-4',
    title: 'Practical Relevancy',
    description: 'Learning experiences to demonstrate the relevancy of theoretical knowledge of their course to gain career-related experience.'
  }
];

const specializations = [
  { name: 'AccTech (Accounting Technology)', icon: Database },
  { name: 'CostTech (Costing Technology)', icon: Hammer },
  { name: 'FinTech (Financial Technology)', icon: Coins },
  { name: 'TaxTech (Taxation Technology)', icon: PieChart }
];

export default function BCom_Hons() {
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
            <span className="text-white/60">B.Com (Hons.)</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            B.Com <span className="text-accent">(Hons.)</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Bachelor of Commerce (Hons.) - Bridging tradition with technology through unique specializations in FinTech, AccTech, and more.
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
              <span>Program Overview</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
              The Tech-Driven Commerce Future
            </h2>
            <p className="text-sm text-muted leading-relaxed font-medium">
              The BCom (Hons.) program at SEMCOM stands out with its unique "Tech" specializations: AccTech, CostTech, FinTech, and TaxTech. These tracks integrate cutting-edge technology with fundamental commerce fields.
            </p>
            <p className="text-sm text-muted leading-relaxed font-medium">
              Designed for ambitious students aiming for professional excellence, this program provides a powerful launchpad for careers in Chartered Accountancy, Cost Accountancy, and Financial Analytics.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 bg-surface px-5 py-3 rounded-xl border border-border">
                <Laptop className="text-secondary" size={18} />
                <span className="font-bold text-xs text-primary">40 Seats Intake</span>
              </div>
              <div className="flex items-center gap-3 bg-surface px-5 py-3 rounded-xl border border-border">
                <ShieldCheck className="text-secondary" size={18} />
                <span className="font-bold text-xs text-primary">Professional Focus</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card !p-0 overflow-hidden relative border border-border shadow-soft aspect-[1.4] group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Financial charts and data"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 card !p-6 max-w-[200px] border border-border shadow-soft hidden sm:block">
              <Trophy className="text-secondary w-9 h-9 mb-4" />
              <h4 className="font-bold text-xs text-primary mb-1">Innovation Leader</h4>
              <p className="text-[9px] font-semibold text-muted leading-relaxed">First in the region to offer technology-integrated commerce degrees.</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programOutcomes.map((po, index) => (
              <motion.div
                key={po.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="card flex flex-col justify-between"
              >
                <div>
                  <span className="text-secondary font-bold text-lg block mb-4">{po.id}</span>
                  <h3 className="font-bold text-sm text-primary mb-3">{po.title}</h3>
                  <p className="text-muted text-xs leading-relaxed font-medium">{po.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialization & Eligibility */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Specializations */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">AccTech / FinTech Specialties</h2>
            <div className="space-y-3.5">
              {specializations.map((spec, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <spec.icon size={18} />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-primary">{spec.name}</span>
                  <ArrowRight size={16} className="ml-auto text-muted shrink-0" />
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
                <h3 className="text-lg font-bold">Eligibility Criteria</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-semibold">
                  Candidates who have completed <span className="text-accent font-bold">12th / HSC / Equivalent</span> from a recognized board.
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
              <h4 className="text-sm font-bold text-primary mb-5">B.Com (Hons.) Curriculum</h4>
              <button className="btn-primary !py-2.5 !px-6 !text-xs">
                <BookOpen size={14} />
                <span>Download Curriculum</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
