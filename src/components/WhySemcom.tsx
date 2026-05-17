import { motion } from 'motion/react';
import { CheckCircle2, Award, Zap, Target, ArrowRight, TrendingUp, Shield, Globe, Users } from 'lucide-react';
import { cn } from '@/src/lib/utils';

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
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <span className="section-label">The SEMCOM Advantage</span>
              <h2>
                Why Choose <span className="text-secondary">SEMCOM?</span>
              </h2>
              <p className="max-w-lg mt-4 text-sm text-muted leading-relaxed">
                We bridge the gap between academic theory and real-world application, empowering students with a mindset of leadership and innovation.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { text: 'Digital Learning Ecosystem', icon: Shield },
                { text: 'Global Mentorship Network', icon: Globe },
                { text: 'Industry Placement Access', icon: TrendingUp },
                { text: 'Vibrant Alumni Network', icon: Users },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/8 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                    <item.icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-text/80 group-hover:text-secondary transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card group !p-6"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                    <reason.icon size={22} />
                  </div>
                  <div>
                    <h3 className="!text-lg font-semibold text-primary mb-1.5">{reason.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.a
              href="https://admissions.cvmu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block p-6 rounded-2xl bg-primary group hover:bg-primary-light transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-white/50 uppercase tracking-wider mb-0.5">Admission Open</p>
                    <p className="text-lg font-semibold text-white">Apply For 2026 Batch</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
