import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Sparkles } from 'lucide-react';

export default function About() {
  const [legacyImage, setLegacyImage] = useState("https://images.unsplash.com/photo-1541339906194-e1620a96f5b9?q=80&w=2072&auto=format&fit=crop");

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data.institutional_excellence_image) {
          setLegacyImage(data.institutional_excellence_image);
        }
      })
      .catch(err => console.error('Error fetching config:', err));
  }, []);

  return (
    <div className="bg-background pt-20">
      
      {/* Hero Section */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest"
          >
            Institutional Legacy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary leading-tight"
          >
            Crafting Leaders <br />
            <span className="text-secondary">Since 1997.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted font-medium leading-relaxed max-w-3xl mx-auto"
          >
            SEMCOM was established under Charutar Vidya Mandal (CVM) with a vision to revolutionize education in commerce, management, and technology. Over two decades, we have evolved into a global node of academic excellence.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section-padding bg-background">
        <div className="section-container grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card group border-t-4 border-t-primary"
          >
            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4 transition-transform group-hover:-translate-y-1">Our Vision</h2>
            <p className="text-muted leading-relaxed">
              To be a premier global institution providing excellence in applied education, fostering future leaders with a strategic perspective and core ethical values.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card group border-t-4 border-t-secondary"
          >
            <div className="w-14 h-14 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4 transition-transform group-hover:-translate-y-1">Our Mission</h2>
            <p className="text-muted leading-relaxed">
              To create a dynamic ecosystem that fosters innovation and professional growth. We empower students with high-yield skills globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Legacy Section */}
      <section className="section-padding bg-surface border-y border-border">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-8 border-white bg-white">
                <img
                  src={legacyImage}
                  alt="Institutional Excellence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-soft border border-border max-w-xs z-10 hidden sm:block">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                       <Award size={20} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">NAAC Accredited</p>
                 </div>
                 <p className="text-sm font-bold text-primary">Consistently Rated A+ for Decades</p>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                 <div className="section-label">Strategic Pillars</div>
                 <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                   Educational <span className="text-secondary">Architects</span>
                 </h2>
              </div>
              <div className="space-y-8 text-muted leading-relaxed">
                <p>
                  SEMCOM is built on the philosophy of holistic development. We don't just deliver lectures; we cultivate mindsets that are ready to tackle the challenges of the volatility, uncertainty, complexity, and ambiguity (VUCA) of the modern world.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                   <div className="space-y-1">
                      <div className="text-3xl font-bold text-secondary">85k+</div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">Learning Hours</p>
                   </div>
                   <div className="space-y-1">
                      <div className="text-3xl font-bold text-secondary">100%</div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">Digital Delivery</p>
                   </div>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Milestones Horizontal */}
      <section className="bg-primary py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <Sparkles className="absolute top-10 right-10 w-96 h-96 text-white" />
        </div>
        <div className="section-container relative z-10">
          <div className="text-center mb-16 space-y-4">
             <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Success Timeline</p>
             <h2 className="text-3xl md:text-5xl font-bold text-white">Strategic Milestones</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { year: '1997', event: 'Foundation by CVM' },
              { year: '2005', event: 'Global Hub Recognition' },
              { year: '2015', event: 'Awarded A+ Grade by NAAC' },
              { year: '2026', event: 'Digital Transformation Hub' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary transition-transform group-hover:-translate-y-1">{item.year}</div>
                <div className="h-1.5 bg-white/10 w-full relative rounded-full overflow-hidden">
                  <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "100%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: i * 0.2 }}
                     className="absolute inset-y-0 left-0 bg-secondary"
                  />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-white/80 leading-relaxed">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
