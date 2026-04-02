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

const programOutcomes = [
  {
    id: 'PO-1',
    title: 'Commerce Mastery',
    description: 'Skills Set to apply the knowledge in various spheres of Commerce.'
  },
  {
    id: 'PO-2',
    title: 'Analytical Precision',
    description: 'Analytical and problem-solving skills within various disciplines of management, business, accounting, finance, costing and law with help of IT applications.'
  },
  {
    id: 'PO-3',
    title: 'Strong Foundation',
    description: 'In-depth learning experience in the various fields of business and also to provide a strong foundation for students to prepare for various professional courses.'
  },
  {
    id: 'PO-4',
    title: 'Practical Relevancy',
    description: 'Learning experience to demonstrate relevancy of theoretical knowledge of their course to gain career related experience.'
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" 
            alt="Financial analysis on a screen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] to-[#0f172a]/70 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight text-glow">
              BCOM <br />
              <span className="text-secondary italic">(HONS.)</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-sans max-w-2xl">
              Bachelor of Commerce (Hons.) - Bridging tradition with technology through unique specializations in FinTech, AccTech, and more.
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
                The Tech-Driven <br />Commerce Future
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The BCom (Hons.) program at SEMCOM stands out with its unique "Tech" specializations: AccTech, CostTech, FinTech, and TaxTech. These tracks integrate cutting-edge technology with fundamental commerce fields.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Designed for ambitious students aiming for professional excellence, this program provides a powerful launchpad for careers in Chartered Accountancy, Cost Accountancy, and Financial Analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <Laptop className="text-secondary" />
                  <span className="font-bold text-primary">40 Seats Intake</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <ShieldCheck className="text-secondary" />
                  <span className="font-bold text-primary">Professional Focus</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl skew-x-2 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Financial charts and data"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#1c2e5a] text-white p-8 rounded-3xl shadow-xl max-w-xs">
                <Trophy className="text-secondary w-12 h-12 mb-4" />
                <h4 className="font-black text-xl mb-2 italic">Innovation Leader</h4>
                <p className="text-sm text-gray-300">First in the region to offer technology-integrated commerce degrees.</p>
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
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {po.id}
              </div>
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
              <h2 className="text-4xl font-serif font-black text-primary mb-10">Electronic Specializations</h2>
              <div className="grid gap-4">
                {specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-secondary flex items-center justify-center text-primary rounded-2xl group-hover:rotate-12 transition-transform">
                      <spec.icon size={28} />
                    </div>
                    <span className="font-bold text-xl text-gray-800">{spec.name}</span>
                    <ArrowRight size={24} className="ml-auto text-gray-300 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
                  </div>
                ))}
              </div>
              <p className="mt-8 text-primary font-black text-lg">
                * Prepare for <span className="text-secondary italic">CA, CS, and Cost Accountancy</span> certificates.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              <div className="bg-primary text-white p-12 rounded-[3.5rem] relative overflow-hidden h-full shadow-2xl">
                <div className="relative z-10 flex flex-col h-full">
                  <GraduationCap size={48} className="text-secondary mb-8" />
                  <h2 className="text-4xl font-serif font-black mb-6 italic">Eligibility Criteria</h2>
                  <p className="text-2xl font-bold leading-relaxed mb-10 text-gray-200">
                    Candidate who has completed <span className="text-white underline decoration-secondary decoration-4">12th / HSC / Equivalent</span> from a recognized board.
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-3 bg-secondary text-primary px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-secondary/20">
                      Apply For Admission <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              </div>

              <div className="border-[6px] border-primary/10 bg-white p-10 rounded-[3.5rem] flex flex-col items-center justify-center text-center">
                <h3 className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Course Structure</h3>
                <h4 className="text-2xl font-serif font-black text-primary mb-6 italic">BCom (Hons.) (2024-25)</h4>
                <div className="flex gap-4">
                  <button className="bg-primary text-white p-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-secondary hover:text-primary transition-colors group">
                    <BookOpen size={20} />
                    Download PDF
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
