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

const archiveData = [
  { year: 2024, issues: ['May-June'] },
  { year: 2023, issues: ['Jan-Feb', 'Mar-April-May', 'June'] },
  { year: 2022, issues: ['Jan-Oct', 'Nov-Dec'] },
  { year: 2021, issues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
  { year: 2020, issues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }
];

export default function SEMSpire() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-[#0c2461]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" 
            alt="Newsletter background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex items-center gap-2 mb-6 bg-secondary/20 w-fit px-6 py-2 rounded-full backdrop-blur-md mx-auto border border-secondary/30">
              <Flame size={18} className="text-secondary animate-pulse" />
              <span className="text-secondary font-black text-xs uppercase tracking-[0.4em]">Inspiring Literary Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-6 tracking-tighter italic">
              SEMSpire
            </h1>
            <p className="text-2xl text-gray-300 font-light tracking-widest uppercase">The Official E-Newsletter of SEMCOM</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-8 leading-tight">
                From "DRIVE" to <span className="text-secondary italic">SEMSpire</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 2007-08, the college has been publishing a monthly E-newsletter named "DRIVE". Now rejuvenated as **SEMSpire**, it continues to be the primary platform for activating the literary and creative skills of both students and faculty.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <BookOpenCheck className="text-secondary mb-4" />
                  <h4 className="font-bold text-primary">Faculty Corner</h4>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <Users className="text-secondary mb-4" />
                  <h4 className="font-bold text-primary">Alumni Corner</h4>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <Trophy className="text-secondary mb-4" />
                  <h4 className="font-bold text-primary">Achievements</h4>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <History className="text-secondary mb-4" />
                  <h4 className="font-bold text-primary">Student Corner</h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#1c2e5a] text-white p-12 rounded-[4rem] relative z-10 shadow-2xl">
                <div className="bg-secondary text-primary w-fit px-4 py-1 rounded-full text-xs font-black uppercase mb-6">Current Issue</div>
                <h3 className="text-4xl font-serif font-black mb-4 italic">NOV - DEC</h3>
                <p className="text-gray-400 mb-8 uppercase tracking-widest text-sm">Under Session 2022-23</p>
                <button className="flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-secondary transition-colors w-full justify-center group">
                  Download Latest Issue <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-gray-200 rounded-full -z-0 animate-[spin_60s_linear_infinite]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Archive Table Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4 block underline decoration-secondary decoration-4 underline-offset-8">Literary Legacy</span>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-primary italic">The Archive</h2>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by year..."
                className="bg-gray-50 border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:border-secondary pr-12 w-64"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-8 py-6 text-left font-serif text-xl italic w-32 rounded-tl-[2rem]">Year</th>
                  <th className="px-8 py-6 text-left font-serif text-xl italic rounded-tr-[2rem]">Month(s) of Issue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {archiveData.map((row, idx) => (
                  <motion.tr 
                    key={row.year}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-8 py-8 font-black text-2xl text-primary">{row.year}</td>
                    <td className="px-8 py-8">
                      <div className="flex flex-wrap gap-3">
                        {row.issues.map((issue, i) => (
                          <button key={i} className="px-5 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:border-secondary hover:text-secondary group-hover:shadow-sm transition-all flex items-center gap-2">
                            {issue}
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
                {/* Visual placeholder for older records */}
                <tr className="bg-gray-50/50">
                  <td colSpan={2} className="px-8 py-10 text-center">
                    <button className="text-primary font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
                      View Historical Records (2008 - 2019) <Calendar size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
