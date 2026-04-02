import { motion } from 'motion/react';
import { Award, Globe, Users, Laptop, Briefcase, Lightbulb, ArrowUpRight, GraduationCap } from 'lucide-react';

const features = [
  {
    title: 'Academic Excellence',
    description: 'Consistently high NAAC grades and top university rankings in Gujarat.',
    icon: Award,
    color: 'text-brand-primary',
  },
  {
    title: 'Industry Integration',
    description: 'Strong ties with leading corporations for internships and global placements.',
    icon: Briefcase,
    color: 'text-brand-secondary',
  },
  {
    title: 'Global Exposure',
    description: 'International student exchange programs and cross-border seminars.',
    icon: Globe,
    color: 'text-brand-accent',
  },
  {
    title: 'Modern Infrastructure',
    description: 'State-of-the-art computer labs and digitized lecture halls.',
    icon: Laptop,
    color: 'text-brand-primary',
  },
  {
    title: 'Holistic Development',
    description: 'Focus on personality development and strategic soft skills training.',
    icon: Lightbulb,
    color: 'text-brand-secondary',
  },
  {
    title: 'Expert Faculty',
    description: 'Highly qualified professors with decades of industry experience.',
    icon: Users,
    color: 'text-brand-accent',
  },
];

export default function Features() {
  return (
    <section id="about" className="section-padding bg-brand-bg relative overflow-hidden py-32">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-28">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="subheading"
            >
              Why Choose SEMCOM?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-brand-text leading-[0.95] tracking-tight italic"
            >
              Higher <span className="text-gradient">Vision</span> <br/> 
              Higher <span className="relative inline-block">
                Action.
                <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-brand-secondary/20 rounded-full" />
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-subtext font-medium max-w-sm border-l-4 border-brand-secondary/30 pl-8 leading-relaxed italic"
          >
            We provide a world-class environment that fosters creativity, critical thinking, and global professional growth.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-modern group hover:border-brand-primary/20"
            >
              <div className="flex items-start justify-between mb-10">
                 <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary border border-brand-border group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <feature.icon size={28} />
                 </div>
                 <motion.div 
                   whileHover={{ scale: 1.1, rotate: 45 }}
                   className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-subtext group-hover:bg-brand-secondary group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm"
                 >
                    <ArrowUpRight size={18} />
                 </motion.div>
              </div>
              
              <h3 className="text-2xl font-heading font-black text-brand-text mb-4 transition-colors group-hover:text-brand-primary leading-tight">
                {feature.title}
              </h3>
              <p className="text-brand-subtext font-medium leading-relaxed mb-8 group-hover:text-brand-text/80 transition-colors">
                {feature.description}
              </p>
              
              <div className="flex items-center gap-2 pt-6 border-t border-brand-border transition-colors group-hover:border-brand-primary/10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-subtext/60 group-hover:text-brand-secondary transition-colors">Faculty of Excellence</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
