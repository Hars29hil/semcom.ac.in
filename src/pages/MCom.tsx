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

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Visionary Leadership',
    description: 'Sound theoretical foundation helps in identification business problems and provide innovative solutions, molding students into future visionaries and management leaders.'
  },
  {
    id: 'PO-2',
    title: 'Research Orientation',
    description: 'Developing research mindset for analyzing problems and formulating strategies to cope with emerging business opportunities.'
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-0274b27f28a0?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate strategy meeting"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6 border border-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
              <Compass className="text-secondary" size={18} />
              <span className="text-white font-bold text-xs uppercase tracking-[0.3em]">Post Graduate Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight uppercase">
              M.Com <br />
              <span className="text-secondary italic lowercase font-medium">Master of Commerce</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-sans max-w-2xl border-l-4 border-secondary pl-6">
              A pragmatic two-year journey affiliated with CVM University, designed to mold future corporate leaders through research and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-8 leading-tight">
                Pragmatic Learning for <br />Practicing Managers
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Classroom learning is enriched by high-engagement activities including case studies, management games, and intensive group discussions. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We bridge the gap between academia and industry through regular interactions with practicing managers and e-commerce professionals, ensuring our graduates are market-ready from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gray-50 px-8 py-5 rounded-[2rem] border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="text-primary" size={20} />
                  </div>
                  <span className="font-black text-primary">40 Seats Intake</span>
                </div>
                <div className="flex items-center gap-3 bg-primary text-white px-8 py-5 rounded-[2rem] shadow-xl">
                  <Trophy className="text-secondary" size={20} />
                  <span className="font-bold">Affiliated with CVM University</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team discussion" />
                </div>
                <div className="bg-secondary p-8 rounded-[2.5rem] text-primary">
                  <Presentation size={40} className="mb-4" />
                  <h4 className="font-black text-xl leading-tight">Seminar Presentations</h4>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 p-8 rounded-[2.5rem] text-primary">
                  <Search size={40} className="mb-4" />
                  <h4 className="font-black text-xl leading-tight">Case Study Focused</h4>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Business analysis" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-24 bg-gray-50 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4 block underline decoration-secondary decoration-4 underline-offset-8">Outcomes</span>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-primary">Program Outcomes</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {programOutcomes.map((po, index) => (
            <motion.div
              key={po.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 flex gap-8 items-start hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl font-serif font-black text-gray-200 group-hover:text-secondary transition-colors italic">{po.id}</div>
              <div>
                <h3 className="font-black text-2xl text-primary mb-4">{po.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{po.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Avenues & Eligibility */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-black text-primary mb-10">Classroom Enrichment</h2>
              <div className="space-y-4">
                {learningAvenues.map((ave, i) => (
                  <div key={i} className="flex items-center gap-6 p-7 bg-white rounded-3xl border border-gray-100 shadow-sm hover:translate-x-3 transition-transform">
                    <div className="w-14 h-14 bg-gray-50 flex items-center justify-center text-primary rounded-2xl group">
                      <ave.icon size={24} className="group-hover:text-secondary" />
                    </div>
                    <span className="font-black text-xl text-gray-800">{ave.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="bg-[#1c2e5a] text-white p-12 rounded-[4rem] flex flex-col h-full shadow-2xl relative overflow-hidden">
                <GraduationCap size={64} className="text-secondary mb-10" />
                <h2 className="text-4xl font-serif font-black mb-8 leading-tight italic">Eligibility</h2>
                <div className="space-y-6 mb-12">
                  <p className="text-2xl font-bold leading-relaxed text-gray-200">
                    Admission is open to candidates who have passed:
                  </p>
                  <p className="text-3xl font-black text-white border-l-8 border-secondary pl-8">
                    Bachelor's degree in Commerce / Management / Equivalent under 10+2+3
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button className="flex items-center gap-4 bg-secondary text-primary px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-colors">
                    Begin Application <ArrowRight size={22} />
                  </button>
                </div>
                
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              </div>

              <div className="bg-white p-12 rounded-[4rem] border-4 border-[#1c2e5a] flex flex-col items-center justify-center text-center">
                <span className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Post Graduate Document</span>
                <h4 className="text-3xl font-serif font-black text-primary mb-8 italic">M.Com. (2024-25)</h4>
                <button className="bg-[#1c2e5a] text-white px-10 py-5 rounded-3xl font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                  <BookOpen size={20} />
                  Programme Structure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
