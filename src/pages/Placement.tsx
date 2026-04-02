import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const placementStats = [
  { label: 'Highest Package', value: '₹12 LPA' },
  { label: 'Average Package', value: '₹4.5 LPA' },
  { label: 'Recruiters', value: '150+' },
  { label: 'Placement Rate', value: '95%' },
];

const recruiters = [
  'https://picsum.photos/seed/tcs/200/100',
  'https://picsum.photos/seed/infosys/200/100',
  'https://picsum.photos/seed/wipro/200/100',
  'https://picsum.photos/seed/hdfc/200/100',
  'https://picsum.photos/seed/icici/200/100',
  'https://picsum.photos/seed/reliance/200/100',
];

export default function Placement() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-sans font-bold uppercase tracking-widest text-secondary mb-4"
          >
            Career Opportunities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary leading-[0.9] tracking-tighter mb-8"
          >
            Your Path to a <br />
            <span className="italic text-secondary">Successful</span> Career.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            The SEMCOM Placement Cell works tirelessly to bridge the gap between academia and industry, 
            ensuring our students are well-prepared for the professional world.
          </motion.p>
        </div>
      </section>

      {/* Stats Section with Vibrant Colors */}
      <section className="bg-gradient-to-br from-primary via-accent to-vibrant-purple py-24 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {placementStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="text-5xl font-serif font-bold mb-2">{stat.value}</div>
              <p className="text-xs font-sans font-bold uppercase tracking-widest text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-primary mb-8 leading-tight">Our <span className="italic text-secondary">Recruitment</span> Process.</h2>
            <div className="space-y-8">
              {[
                { title: 'Skill Development', desc: 'Pre-placement training sessions including soft skills and aptitude training.' },
                { title: 'Mock Interviews', desc: 'Regular mock interviews conducted by industry experts.' },
                { title: 'Campus Interviews', desc: 'Direct recruitment drives from top companies on campus.' },
                { title: 'Final Placement', desc: 'Successful transition from student to professional.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <span className="text-xl font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/placement/800/800"
                alt="Placement Cell"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 glass p-10 rounded-[3rem] shadow-2xl max-w-xs border-2 border-primary/10">
              <div className="w-16 h-16 bg-vibrant-teal/10 rounded-2xl flex items-center justify-center text-vibrant-teal mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Top Placement Cell</h3>
              <p className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400">Recognized for Excellence in Gujarat</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recruiters Marquee */}
      <section className="bg-gray-50 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary">Our Top <span className="italic text-secondary">Recruiters</span></h2>
        </div>
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...recruiters, ...recruiters].map((logo, i) => (
            <div key={i} className="px-12 py-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center min-w-[200px]">
              <img src={logo} alt="Recruiter" className="h-12 object-contain grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-primary mb-16 text-center">Alumni <span className="italic text-secondary">Success</span> Stories.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'Sameer Shah', company: 'Google', role: 'Product Manager', text: 'SEMCOM gave me the foundation I needed to succeed at a global level.' },
              { name: 'Neha Patel', company: 'TCS', role: 'Software Engineer', text: 'The technical skills and industry exposure at SEMCOM were invaluable.' },
            ].map((alumni, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-primary/5 relative group"
              >
                <div className="absolute top-12 right-12 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <TrendingUp size={64} />
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary text-3xl font-serif font-bold">
                    {alumni.name[0]}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-primary">{alumni.name}</h4>
                    <p className="text-sm font-sans font-bold uppercase tracking-widest text-secondary">{alumni.role} @ {alumni.company}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed italic">"{alumni.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
