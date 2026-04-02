import { motion } from 'motion/react';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  Network,
  ArrowRight,
  GraduationCap,
  Trophy,
  Rocket,
  Wrench,
  Monitor
} from 'lucide-react';

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Systems Engineering',
    description: 'Understand, Analyze, Design solutions and Develop computer programs in areas related to structured and object-oriented programming, data algorithms, website designing and networking.'
  },
  {
    id: 'PO-2',
    title: 'Professional Roles',
    description: 'Develop the potential to work as system engineer, software tester, Junior programmer, web developer, system administrator, software developer, database designer, etc.'
  },
  {
    id: 'PO-3',
    title: 'Software Practices',
    description: 'Apply standard software engineering practices and strategies in software project development using open source programming environment to deliver quality output.'
  },
  {
    id: 'PO-4',
    title: 'Global Employability',
    description: 'Meet the requirements of industrial standards and become potentially rich and employable in Indian & global software market.'
  },
  {
    id: 'PO-5',
    title: 'Higher Studies Path',
    description: 'Create opportunity and equip students for higher studies in the areas of computer science, computer applications, information systems, etc.'
  }
];

const skills = [
  { name: 'Software Development', icon: Code2 },
  { name: 'Cloud Computing', icon: Globe },
  { name: 'Data Structures', icon: Database },
  { name: 'Network Admin', icon: Network },
  { name: 'System Analysis', icon: Cpu }
];

export default function BCA_Hons() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
            alt="Coding on a laptop"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6 bg-secondary/20 p-2 rounded-full w-fit backdrop-blur-md border border-secondary/30">
              <Terminal className="text-secondary" size={20} />
              <span className="text-secondary font-black text-xs uppercase tracking-widest px-2">Tech Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight">
              BCA <br />
              <span className="text-secondary italic">(HONS.)</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-sans max-w-2xl">
              Bachelor of Computer Applications (Hons.) - Crafting elite software engineers and technology visionaries for the global digital ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden border-[16px] border-gray-50 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Server room with blue lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 hidden md:block max-w-[280px]">
                <Rocket className="text-secondary w-14 h-14 mb-6 animate-bounce" />
                <h4 className="font-black text-2xl text-primary mb-3">Live Projects</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Unique exposure through Summer Training for System Study and Business Process Study.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Core Innovation</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-8 leading-tight">
                Highly Specialized <br />Tech Curriculum
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The BCA (Hons.) program at SEMCOM delivers deep expertise in Software Engineering, Information Technology, and Systems Analysis. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With extensive laboratory training, we empower students to master Software Development, Networking, and Website Design in a live business environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col gap-2">
                  <Monitor className="text-primary" />
                  <span className="text-2xl font-black text-primary">120+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Students Intake</span>
                </div>
                <div className="p-6 bg-primary text-white rounded-3xl flex flex-col gap-2">
                  <Wrench className="text-secondary" />
                  <span className="text-2xl font-black italic">100%</span>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Practical Focus</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-24 bg-[#1c2e5a] text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">Program Outcomes</h2>
          <div className="w-24 h-2 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programOutcomes.map((po, index) => (
            <motion.div
              key={po.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-secondary/10 hover:border-secondary transition-all group"
            >
              <div className="text-3xl font-black text-secondary mb-6 group-hover:scale-110 transition-transform origin-left">{po.id}</div>
              <h3 className="font-bold text-2xl mb-4 text-white">{po.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{po.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack & Eligibility */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100">
              <h2 className="text-4xl font-serif font-black text-primary mb-12">Industry Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                      <skill.icon size={26} />
                    </div>
                    <span className="font-bold text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary text-primary p-12 rounded-[4rem] flex flex-col h-full shadow-2xl shadow-secondary/20 relative overflow-hidden group">
                <GraduationCap size={56} className="mb-10 group-hover:rotate-12 transition-transform duration-500" />
                <h2 className="text-4xl font-serif font-black mb-6 italic leading-none">Eligibility</h2>
                <p className="text-2xl font-bold leading-tight mb-12">
                  Open for candidates who have completed <span className="bg-primary text-white px-2 py-0.5 rounded-lg">12th / HSC / Equivalent</span> in any stream.
                </p>
                <div className="mt-auto">
                  <button className="flex items-center gap-3 bg-primary text-white overflow-hidden px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm relative group/btn">
                    <span className="relative z-10 flex items-center gap-3">Apply Now <ArrowRight size={20} /></span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              </div>

              <div className="bg-white border-4 border-dashed border-gray-200 p-10 rounded-[4rem] flex flex-col items-center justify-center text-center">
                <span className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Academic Catalog</span>
                <h4 className="text-3xl font-serif font-black text-primary mb-8 italic">BCA (Hons.) (2024-25)</h4>
                <div className="w-full h-px bg-gray-100 mb-8" />
                <button className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                  Get Full Structure <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
