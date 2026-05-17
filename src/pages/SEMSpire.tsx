import { motion } from 'motion/react';
import { 
  Newspaper, 
  History, 
  Users, 
  Trophy, 
  Calendar, 
  ArrowRight,
  Download,
  Flame,
  Search,
  BookOpenCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const archiveData = [
  { year: 2024, issues: ['May-June'] },
  { year: 2023, issues: ['Jan-Feb', 'Mar-April-May', 'June'] },
  { year: 2022, issues: ['Jan-Oct', 'Nov-Dec'] },
  { year: 2021, issues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
  { year: 2020, issues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }
];

export default function SEMSpire() {
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
            <span className="text-white/60">SEMSpire Newsletter</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            SEMSpire <span className="text-accent">E-Newsletter</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            The official digital chronicle of Sardar Gunj Mercantile English Medium College of Commerce and Management.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              From "DRIVE" to SEMSpire
            </h2>
            <p className="text-sm text-muted leading-relaxed font-medium">
              Since 2007-08, the college has been publishing a monthly E-newsletter named "DRIVE". Now rejuvenated as **SEMSpire**, it continues to be the primary platform for activating the literary and creative skills of both students and faculty.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card !p-4 border border-border shadow-sm flex items-center gap-3">
                <BookOpenCheck className="text-secondary shrink-0" size={18} />
                <h4 className="font-bold text-primary text-xs">Faculty Corner</h4>
              </div>
              <div className="card !p-4 border border-border shadow-sm flex items-center gap-3">
                <Users className="text-secondary shrink-0" size={18} />
                <h4 className="font-bold text-primary text-xs">Alumni Corner</h4>
              </div>
              <div className="card !p-4 border border-border shadow-sm flex items-center gap-3">
                <Trophy className="text-secondary shrink-0" size={18} />
                <h4 className="font-bold text-primary text-xs">Achievements</h4>
              </div>
              <div className="card !p-4 border border-border shadow-sm flex items-center gap-3">
                <History className="text-secondary shrink-0" size={18} />
                <h4 className="font-bold text-primary text-xs">Student Corner</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="card !p-8 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white space-y-6 relative overflow-hidden max-w-md mx-auto shadow-soft">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4">
                <span className="px-2.5 py-1 bg-accent/90 text-primary text-[8px] font-bold uppercase rounded tracking-wider shadow">
                  Current Issue
                </span>
                <h3 className="text-2xl font-bold">November - December</h3>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Session 2025-26</p>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary py-3 px-6 rounded-xl text-xs font-bold hover:bg-accent transition-colors shadow">
                <span>Download Latest Issue</span>
                <Download size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Archive Table Section */}
      <div className="bg-surface py-12 sm:py-16 border-t border-border">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-4 border-b border-border/80">
            <div>
              <span className="text-secondary font-bold uppercase tracking-wider text-xs mb-2 block">Literary Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-primary">The Archive</h2>
            </div>
            
            {/* Search */}
            <div className="relative w-full sm:w-64 shrink-0">
              <input 
                type="text" 
                placeholder="Search by year..."
                className="w-full bg-background border border-border px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/15 transition-all text-xs font-semibold text-primary"
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" size={14} />
            </div>
          </div>

          <div className="overflow-x-auto border border-border rounded-xl bg-background shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface text-primary border-b border-border">
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-32">Year</th>
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Month(s) of Issue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {archiveData.map((row, idx) => (
                  <motion.tr 
                    key={row.year}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.02 }}
                    className="hover:bg-surface/40 transition-colors"
                  >
                    <td className="px-6 py-5 font-bold text-base text-primary">{row.year}</td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-2.5">
                        {row.issues.map((issue, i) => (
                          <button key={i} className="px-3.5 py-1.5 bg-background border border-border rounded-lg text-xs font-bold text-primary hover:border-secondary hover:text-secondary transition-all flex items-center gap-1.5 shadow-sm">
                            <span>{issue}</span>
                            <ArrowRight size={12} />
                          </button>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
                
                {/* Historical records */}
                <tr className="bg-surface/30">
                  <td colSpan={2} className="px-6 py-8 text-center">
                    <button className="text-secondary font-bold text-xs flex items-center gap-2 mx-auto hover:underline">
                      <span>View Historical Records (2008 - 2019)</span>
                      <Calendar size={14} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
