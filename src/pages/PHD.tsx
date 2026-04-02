import { motion } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Users, 
  GraduationCap, 
  ArrowRight,
  Globe,
  Milestone,
  Library,
  Scale,
  Award,
  Wallet,
  Building2
} from 'lucide-react';

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop" 
            alt="Old library and research"
            className="w-full h-full object-cover opacity-40 shadow-inner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-2 bg-secondary mx-auto mb-10 rounded-full" />
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-8 tracking-tighter uppercase italic">
              Ph.D.
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-serif font-medium mb-10 tracking-widest uppercase">
              Doctor of Philosophy
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="px-6 py-2 border border-white/20 rounded-full text-white/60 text-sm font-bold tracking-widest uppercase">Commerce</span>
              <span className="px-6 py-2 border border-white/20 rounded-full text-white/60 text-sm font-bold tracking-widest uppercase">Management</span>
              <span className="px-6 py-2 border border-white/20 rounded-full text-white/60 text-sm font-bold tracking-widest uppercase">Multi-disciplinary</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Environment */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-6 block">Academic Distinction</span>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-primary mb-8 leading-tight">
                An Intellectual Rich <br />Research Ecosystem
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light italic">
                "The Ph.D. program at SEMCOM allows scholars to push the boundaries of knowledge alongside world-class faculty and facilities."
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary p-2 rounded-lg text-primary">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-primary">World Class Facilities</h4>
                    <p className="text-gray-500">Access to elite research labs, extensive digital libraries, and dedicated scholar workrooms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary p-2 rounded-lg text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-primary">Senior Faculty Mentorship</h4>
                    <p className="text-gray-500">Work directly with recognized authorities in Commerce and Management disciplines.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100 shadow-sm relative"
            >
              <div className="absolute -top-10 -left-10 bg-primary text-white p-10 rounded-[3rem] shadow-2xl max-w-xs">
                <Wallet className="text-secondary w-14 h-14 mb-4" />
                <h3 className="font-black text-2xl mb-2">SHODH Scheme</h3>
                <p className="text-gray-300">Grant of ₹15K offered by GOG for full-time Ph.D. scholars (2 years).</p>
              </div>
              <div className="pt-24 space-y-8">
                <h3 className="text-3xl font-serif font-black text-primary italic">International Scholars</h3>
                <p className="text-gray-600 leading-relaxed">
                  SEMCOM welcomes research applications from international and foreign students, fostering a diverse global research perspective.
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Admissions</p>
                  <p className="text-primary font-black text-xl">02692 238001 | 63588 19009</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialization Areas */}
      <section className="py-24 bg-[#0a192f] text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-serif font-black mb-6 italic tracking-tighter uppercase">Specializations</h2>
          <p className="text-secondary font-black tracking-widest uppercase">Focused Research Disciplines</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-12 rounded-[3.5rem] border border-white/10 hover:border-secondary transition-all hover:bg-white/[0.02]"
            >
              <area.icon size={48} className="text-secondary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-serif font-black mb-6">{area.title}</h3>
              <p className="text-gray-400 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Supervisors & Eligibility */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col">
              <div className="bg-primary text-white p-12 rounded-[3.5rem] flex-1 shadow-2xl relative overflow-hidden group">
                <Library size={56} className="text-secondary mb-10" />
                <h2 className="text-4xl font-serif font-black mb-6">Eligibility & Rules</h2>
                <div className="space-y-6 mb-12">
                  <p className="text-xl font-medium text-gray-200 leading-relaxed border-l-4 border-secondary pl-8">
                    Admissions are governed by the CVM University Ph.D. Rules & Regulations 2020.
                  </p>
                </div>
                <div className="mt-auto">
                  <button className="flex items-center gap-4 bg-secondary text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                    View Regulations <ArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="bg-white border-2 border-primary/10 p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-shadow group">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center text-primary rounded-3xl">
                    <Search size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-black text-primary">Research Supervisors</h3>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Expert Mentorship</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  Browse our directory of recognized Ph.D. Research Supervisors and their areas of specialization.
                </p>
                <button className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:gap-5 transition-all">
                  Directory List <ArrowRight size={20} />
                </button>
              </div>

              <div className="bg-secondary p-12 rounded-[3.5rem] text-primary flex items-center justify-between group overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="text-2xl font-serif font-black mb-2 italic tracking-tight">Ready to begin your journey?</h4>
                  <p className="font-bold uppercase tracking-widest text-xs opacity-60">Admission is currently open for eligible candidates</p>
                </div>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform relative z-10">
                  <ArrowRight size={32} />
                </div>
                <Award className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
