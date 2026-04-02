import { motion } from 'motion/react';
import { Target, Eye, Award, History, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-bg relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-20 right-[-10%] rotate-12 opacity-[0.02] pointer-events-none select-none">
         <h1 className="text-[250px] font-heading font-black text-brand-primary">ESTD 1997</h1>
      </div>

      <div className="pt-40 pb-20">
        {/* Header Section */}
        <section className="section-padding relative z-10">
          <div className="max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary"
            >
              Institutional Legacy
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[44px] md:text-[64px] font-heading font-black text-brand-text leading-[1.1] tracking-tighter italic"
            >
              Crafting Leaders <br />
              <span className="text-brand-primary">Since 1997.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-brand-subtext font-medium leading-relaxed italic border-l-4 border-brand-secondary/20 pl-8"
            >
              SEMCOM was established under Charutar Vidya Mandal (CVM) with a vision to revolutionize education in commerce, management, and technology. 
              Over two decades, we have evolved into a global node of academic excellence.
            </motion.p>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="bg-white py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-premium group"
            >
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                <Eye size={32} />
              </div>
              <h2 className="text-4xl font-heading font-black text-brand-text mb-6 italic transition-transform group-hover:-translate-y-1">Our Vision</h2>
              <p className="text-brand-subtext font-medium text-lg leading-relaxed">
                To be a premier global institution providing excellence in applied education, fostering future leaders with a strategic perspective and core ethical values.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-premium group"
            >
              <div className="w-16 h-16 bg-brand-secondary/5 rounded-2xl flex items-center justify-center text-brand-secondary mb-10 group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-sm">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-heading font-black text-brand-text mb-6 italic transition-transform group-hover:-translate-y-1">Our Mission</h2>
              <p className="text-brand-subtext font-medium text-lg leading-relaxed">
                To create a dynamic ecosystem that fosters innovation and professional growth. We empower students with high-yield skills globally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Legacy Section */}
        <section className="section-padding bg-brand-bg overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white skew-y-1 hover:skew-y-0 transition-transform duration-700 mx-1">
                  <img
                    src="https://images.unsplash.com/photo-1541339906194-e1620a96f5b9?q=80&w=2072&auto=format&fit=crop"
                    alt="Institutional Excellence"
                    className="w-full h-full object-cover grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-all" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl max-w-xs border border-white/50">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-secondary flex items-center justify-center text-white">
                         <Award size={20} />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-subtext leading-none">NAAC Accredited</p>
                   </div>
                   <p className="text-lg font-heading font-black text-brand-primary italic">Consistently Rated A+ for Decades</p>
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="space-y-6">
                   <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary">
                      Strategic Pillars
                   </div>
                   <h2 className="text-[44px] font-heading font-black text-brand-text leading-[1.1] italic tracking-tighter">Educational <br/> <span className="text-brand-primary">Architects</span>.</h2>
                </div>
                <div className="space-y-8 text-brand-subtext font-medium text-lg leading-relaxed italic">
                  <p>
                    SEMCOM is built on the philosophy of holistic development. We don't just deliver lectures; we cultivate mindsets that are ready to tackle the challenges of the volatility, uncertainty, complexity, and ambiguity (VUCA) of the modern world.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                     <div className="space-y-2">
                        <div className="text-2xl font-heading font-black text-brand-primary italic">85k+</div>
                        <p className="text-[9px] font-black uppercase tracking-widest leading-none">Learning Hours</p>
                     </div>
                     <div className="space-y-2">
                        <div className="text-2xl font-heading font-black text-brand-primary italic">100%</div>
                        <p className="text-[9px] font-black uppercase tracking-widest leading-none">Digital Delivery</p>
                     </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </section>

        {/* Milestones Horizontal */}
        <section className="bg-brand-primary py-32 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
             <Sparkles className="absolute top-10 right-10 w-96 h-96' text-white" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24 space-y-4">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary">Success Timeline</p>
               <h2 className="text-4xl md:text-5xl font-heading font-black italic tracking-tighter">Strategic <span className="text-brand-secondary underline decoration-8 decoration-white/10 underline-offset-8">Milestones</span>.</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { year: '1997', event: 'Foundation by CVM' },
                { year: '2005', event: 'Global Hub Recognition' },
                { year: '2015', points: 'Awarded A+ Grade by NAAC' },
                { year: '2026', points: 'Digital Transformation Hub' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-8 group"
                >
                  <div className="text-5xl font-heading font-black text-brand-secondary italic group-hover:scale-110 transition-transform">{item.year}</div>
                  <div className="h-1 bg-white/10 w-full relative rounded-full overflow-hidden">
                    <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "100%" }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, delay: i * 0.2 }}
                       className="absolute inset-y-0 left-0 bg-brand-secondary"
                    />
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest text-white/70 italic leading-snug">{item.event || item.points}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
