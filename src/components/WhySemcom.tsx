import { motion } from 'motion/react';
import { CheckCircle2, Award, Zap, Target, Sparkles, ArrowRight } from 'lucide-react';

const reasons = [
  {
    title: 'A+ NAAC Accreditation',
    description: 'Consistently recognized for excellence in academic, research, and administrative performance.',
    icon: Award,
  },
  {
    title: 'Industry Ready Graduates',
    description: 'A curriculum meticulously designed to meet the evolving demands of the global corporate landscape.',
    icon: Zap,
  },
  {
    title: 'Focus on Holistic Growth',
    description: 'We prioritize personality development, ethical values, and strategic leadership skills.',
    icon: Target,
  },
];

export default function WhySemcom() {
  return (
    <section className="section-padding bg-brand-primary relative overflow-hidden">
      {/* Dynamic Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-l border-b border-brand-secondary/30 rounded-bl-[20rem]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary"
              >
                The SEMCOM Advantage
              </motion.div>
              <h2 className="text-[44px] md:text-[64px] font-heading font-black text-white leading-[1.1] italic tracking-tighter">
                Why Should You <br />
                <span className="text-brand-secondary">Join</span> SEMCOM?
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-lg font-medium italic">
                We go beyond conventional teaching to inspire a mindset of leadership and continuous innovation.
              </p>
            </div>
            
            <div className="grid gap-6">
              {['State-of-the-Art Digital Campus', 'Global Institutional Mentorship', 'Direct Corporate Placement Access', 'Vibrant Alumni Networking Node'].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-secondary flex items-center justify-center text-white shadow-lg shadow-brand-secondary/20 group-hover:rotate-12 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-bold text-white/90 uppercase tracking-widest text-[12px] group-hover:text-brand-secondary transition-colors italic">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Decorative Icon */}
                <div className="absolute top-[-20%] right-[-10%] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                   <reason.icon size={120} className="text-white" />
                </div>

                <div className="flex gap-10 items-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-secondary flex items-center justify-center text-white shadow-xl shadow-brand-secondary/20 group-hover:scale-110 transition-transform duration-500">
                    <reason.icon size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-black text-white italic">{reason.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm font-medium">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-brand-secondary p-8 rounded-[3rem] shadow-2xl flex items-center justify-between group cursor-pointer"
            >
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-secondary">
                     <Sparkles size={28} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-80">Strategic Journey</p>
                     <p className="text-xl font-heading font-black text-brand-primary italic">Apply For 2026 Batch</p>
                  </div>
               </div>
               <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-secondary transition-all">
                  <ArrowRight size={24} />
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
