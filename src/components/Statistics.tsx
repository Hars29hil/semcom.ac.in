import { motion } from 'motion/react';
import { Target, Users, Trophy, BookOpen, Building2, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Years of Legacy', value: '25+', icon: Sparkles },
  { label: 'NAAC Accredited', value: 'A+', icon: Trophy },
  { label: 'Placement Rate', value: '94%', icon: Target },
  { label: 'Active Alumni', value: '12K+', icon: Users },
  { label: 'Research Papers', value: '500+', icon: BookOpen },
  { label: 'Campus Facilities', value: '10+', icon: Building2 },
];

export default function Statistics() {
  return (
    <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#1E3A8A]/30 to-primary" />

      <div className="section-container relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 inline-block">
            Institutional Impact
          </span>
          <h2 className="!text-white !text-3xl sm:!text-4xl">
            Excellence Defined by Real Results
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                <stat.icon size={22} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/50 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
