import { motion } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  Target, 
  Trophy, 
  Cpu, 
  Briefcase, 
  Compass,
  ArrowRight
} from 'lucide-react';

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Global Leadership',
    description: 'Ability to apply knowledge, skills and right attitude necessary to provide effective leadership in a global environment.'
  },
  {
    id: 'PO-2',
    title: 'Strategic Thinking',
    description: 'Proactive thinking so as to perform effectively in the dynamic socio-economic and business ecosystem.'
  },
  {
    id: 'PO-3',
    title: 'Ethical Decision Making',
    description: 'Analytical and critical thinking abilities for business decision making by promoting ethical and value based leadership.'
  },
  {
    id: 'PO-4',
    title: 'Continuous Growth',
    description: 'Encourage students on their professional development plans by reflecting on their learning and experiences.'
  }
];

const specializations = [
  { name: 'Human Resource Management', icon: Users },
  { name: 'Marketing Management', icon: Target },
  { name: 'Financial Management', icon: Briefcase },
  { name: 'International Business', icon: Compass },
  { name: 'Information Technology', icon: Cpu }
];

export default function BBA_ITM_Hons() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e5a] to-[#1c2e5a]/60 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight">
              BBA (ITM) <br />
              <span className="text-secondary italic">(HONS.)</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-sans max-w-2xl">
              Bachelor of Business Administration (Information Technology Management)(Hons.) - Preparing the next generation of business leaders for the digital age.
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
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Program Overview</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-8 leading-tight">
                Empowering Leaders with a Dual Edge
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The BBA IT Management (Hons.) program offers dual specialization in Human Resource Management, Marketing Management, Financial Management, & International Business.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This program also offers practical exposure in terms of Industrial Visits and training as a part of course curriculum. In addition, the focus is on enhancing presentation skills and other managerial skills, ensuring our graduates are ready for the professional world.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <Users className="text-secondary" />
                  <span className="font-bold text-primary">180 Students Intake</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <BookOpen className="text-secondary" />
                  <span className="font-bold text-primary">3 Years Program</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                  alt="Student learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs">
                <Trophy className="text-secondary w-12 h-12 mb-4" />
                <h4 className="font-black text-xl text-primary mb-2">Academic Excellence</h4>
                <p className="text-sm text-gray-500">Ranked consistently among top management programs.</p>
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

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programOutcomes.map((po, index) => (
            <motion.div
              key={po.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-secondary transition-colors"
            >
              <span className="text-secondary font-black text-2xl block mb-4">{po.id}</span>
              <h3 className="font-bold text-xl text-primary mb-4">{po.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{po.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialization & Eligibility */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-black text-primary mb-10">Specialization</h2>
              <div className="space-y-4">
                {specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                      <spec.icon size={24} />
                    </div>
                    <span className="font-bold text-lg text-gray-800">{spec.name}</span>
                    <CheckCircle2 size={24} className="ml-auto text-secondary" />
                  </div>
                ))}
              </div>
              <p className="mt-8 text-secondary font-black italic">
                * Dual Specialization in Management and Information Technology
              </p>
            </div>

            <div className="flex flex-col gap-12">
              <div className="bg-[#1c2e5a] text-white p-12 rounded-[3.5rem] relative overflow-hidden h-full">
                <div className="relative z-10 flex flex-col h-full">
                  <GraduationCap size={48} className="text-secondary mb-8" />
                  <h2 className="text-4xl font-serif font-bold mb-6 italic">Eligibility</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-10">
                    Candidate who has completed <span className="text-secondary font-bold">12th / HSC / Equivalent</span> in any stream with recognized board.
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-3 text-secondary font-black uppercase tracking-widest text-sm group hover:gap-5 transition-all">
                      Apply Now <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-3xl" />
              </div>

              <div className="border-4 border-dashed border-gray-200 p-10 rounded-[3.5rem] flex flex-col items-center justify-center text-center">
                <h3 className="text-gray-400 font-black uppercase tracking-widest text-sm mb-4">Program Structure</h3>
                <h4 className="text-2xl font-serif font-bold text-primary mb-6">BBA ITM (Hons.) (2024-25)</h4>
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                  <BookOpen size={20} />
                  Download Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
