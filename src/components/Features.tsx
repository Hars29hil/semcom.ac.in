import { motion } from 'motion/react';
import { Award, Globe, Users, Laptop, Briefcase, Lightbulb } from 'lucide-react';

const features = [
  {
    title: 'Academic Excellence',
    description: 'Consistently high NAAC grades and top university rankings in Gujarat.',
    icon: Award,
    stat: 'A+ NAAC',
  },
  {
    title: 'Industry Integration',
    description: 'Strong ties with leading corporations for internships and global placements.',
    icon: Briefcase,
    stat: '200+ Partners',
  },
  {
    title: 'Global Exposure',
    description: 'International student exchange programs and cross-border seminars.',
    icon: Globe,
    stat: '15+ Countries',
  },
  {
    title: 'Modern Infrastructure',
    description: 'State-of-the-art computer labs and digitized lecture halls.',
    icon: Laptop,
    stat: 'Smart Labs',
  },
  {
    title: 'Holistic Development',
    description: 'Focus on personality development and strategic soft skills training.',
    icon: Lightbulb,
    stat: '50+ Activities',
  },
  {
    title: 'Expert Faculty',
    description: 'Highly qualified professors with decades of industry experience.',
    icon: Users,
    stat: '95% PhD',
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="section-label">Why Choose SEMCOM?</span>
            <h2>
              Building Futures with <span className="text-secondary">Purpose</span>
            </h2>
          </div>
          <p className="max-w-md text-muted text-sm leading-relaxed">
            We provide a world-class environment that fosters creativity, critical thinking, and global professional growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="card group"
            >
              {/* Icon & Stat */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <feature.icon size={22} />
                </div>
                <span className="px-3 py-1 bg-background rounded-lg text-[11px] font-semibold text-primary border border-border">
                  {feature.stat}
                </span>
              </div>

              {/* Content */}
              <h3 className="!text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
