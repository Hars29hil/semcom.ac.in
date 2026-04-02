import { motion } from 'motion/react';
import { Target, Users, Trophy, BookOpen, Building2, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Academic Excellence', value: '25+', icon: Sparkles, detail: 'Years of Legacy' },
  { label: 'NAAC Accredited', value: 'A+', icon: Trophy, detail: 'University Rating' },
  { label: 'Placement Rate', value: '94%', icon: Target, detail: 'Top Global Brands' },
  { label: 'Active Alumni', value: '12K+', icon: Users, detail: 'Global Network' },
  { label: 'Research Papers', value: '500+', icon: BookOpen, detail: 'Innovation Drive' },
  { label: 'Campus Growth', value: '10+', icon: Building2, detail: 'Modern Nodes' },
];

export default function Statistics() {
  return (
    <section className="bg-brand-bg py-32 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-secondary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="subheading"
              >
                Institutional Impact
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-heading font-black text-brand-primary leading-[0.95] tracking-tight italic"
              >
                Excellence <br/> Defined By <br/> <span className="text-gradient">Real Results.</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-brand-subtext font-medium text-xl leading-relaxed max-w-md">
                Our trajectory into becoming a premier institution is rooted in data-driven success and academic rigor.
              </p>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="Student" />
                     </div>
                   ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-primary font-black text-lg leading-none italic">#1 in Gujarat</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-subtext mt-1">Commerce Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 relative">
             {/* Decorative Background Blob */}
             <div className="absolute inset-0 bg-brand-primary/5 blur-[100px] rounded-[3rem] -z-10" />
             
             {stats.map((stat, i) => (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="card-modern group hover:border-brand-secondary/30"
               >
                 <div className="flex items-start justify-between mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm border border-brand-border">
                      <stat.icon size={28} />
                   </div>

                 </div>
                 
                 <div className="space-y-2">
                    <div className="text-5xl font-heading font-black text-brand-text tracking-tighter group-hover:text-brand-primary transition-colors">
                       {stat.value}
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-black uppercase tracking-widest text-brand-primary">
                         {stat.label}
                      </div>
                      <div className="text-[10px] font-bold text-brand-subtext opacity-60">
                        {stat.detail}
                      </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
