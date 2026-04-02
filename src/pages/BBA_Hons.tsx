import { motion } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  Target, 
  Trophy, 
  BarChart3, 
  Briefcase, 
  Globe,
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Management Science',
    description: 'Knowledge of management science to solve complex corporate problems using limited resources.'
  },
  {
    id: 'PO-2',
    title: 'Analytical Abilities',
    description: 'Analytical abilities towards human capital productivity data associated with business development, growth and sustainability.'
  },
  {
    id: 'PO-3',
    title: 'Sustainable Practices',
    description: 'Sustainable Business Practices Demonstrating sensitivity to social, ethical and sustainability issues.'
  },
  {
    id: 'PO-4',
    title: 'Professional Reasoning',
    description: 'Reasoning informed by the contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to management practice.'
  }
];

const specializations = [
  { name: 'Accounting & Finance', icon: Briefcase },
  { name: 'Marketing Management', icon: Target },
  { name: 'Human Resource Management', icon: Users },
  { name: 'Business Analytics', icon: BarChart3 },
  { name: 'Sustainable Business', icon: Globe }
];

export default function BBA_Hons() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240715630-979bb0701d43?q=80&w=2070&auto=format&fit=crop" 
            alt="Students in a modern campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight text-glow">
              BBA <br />
              <span className="text-secondary italic">(HONS.)</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-sans max-w-2xl">
              Bachelor of Business Administration (Hons.) - Developing versatile business professionals with deep analytical and leadership skills.
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
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4 block underline decoration-secondary decoration-4 underline-offset-8">Program Overview</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-8 leading-tight">
                Foundations of Modern Management
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The BBA (Hons.) program offers specialized tracks in Accounting, Finance, Marketing, Human Resource Management, and Business Analytics, preparing students for diverse roles in the corporate world.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Practical exposure is woven into the curriculum through industrial visits and hands-on training. We focus heavily on enhancing presentation skills, managerial expertise, and ethical leadership to ensure full professional readiness.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <TrendingUp className="text-secondary" />
                  <span className="font-bold text-primary">120 Students Intake</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <ShieldCheck className="text-secondary" />
                  <span className="font-bold text-primary">Industry Validated</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business meeting simulation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                <Trophy className="text-secondary w-12 h-12 mb-4" />
                <h4 className="font-black text-xl text-primary mb-2">Top Ranked</h4>
                <p className="text-sm text-gray-500">Recognized globally for academic rigor and excellence.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-24 bg-gray-900 text-white px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4 block underline decoration-secondary decoration-4 underline-offset-8">Outcomes</span>
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-4">What You'll Achieve</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Graduates of the BBA (Hons.) program are equipped with these key competencies.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {programOutcomes.map((po, index) => (
            <motion.div
              key={po.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-secondary transition-colors group"
            >
              <span className="text-secondary font-black text-2xl block mb-4 group-hover:scale-110 transition-transform">{po.id}</span>
              <h3 className="font-bold text-xl mb-4 group-hover:text-secondary transition-colors">{po.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{po.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Specialization & Eligibility */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-black text-primary mb-10">Specialization Wings</h2>
              <div className="space-y-4">
                {specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:translate-x-2 transition-transform cursor-default">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-xl">
                      <spec.icon size={24} />
                    </div>
                    <span className="font-bold text-lg text-gray-800">{spec.name}</span>
                    <CheckCircle2 size={24} className="ml-auto text-secondary" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="bg-secondary text-primary p-12 rounded-[3.5rem] relative overflow-hidden h-full shadow-2xl shadow-secondary/20">
                <div className="relative z-10 flex flex-col h-full">
                  <GraduationCap size={48} className="mb-8" />
                  <h2 className="text-4xl font-serif font-black mb-6 italic">Eligibility</h2>
                  <p className="text-xl font-bold leading-relaxed mb-10">
                    Admission is open to candidates who have successfully completed <span className="underline decoration-primary decoration-4 underline-offset-4">12th / HSC / Equivalent</span> in any stream.
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
                      Enroll Today <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-10 rounded-[3.5rem] flex flex-col items-center justify-center text-center shadow-2xl shadow-primary/20">
                <h3 className="text-secondary font-black uppercase tracking-widest text-xs mb-4">Structure</h3>
                <h4 className="text-3xl font-serif font-bold mb-6 italic">BBA (Hons.) (2024-25)</h4>
                <div className="flex flex-col gap-4 w-full">
                  <button className="bg-white text-primary px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                    <BookOpen size={20} />
                    View Course Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
