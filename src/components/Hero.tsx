import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, GraduationCap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Hero() {
  const [photos, setPhotos] = useState<string[]>([
    '/artifacts/semcom_hero_modern_campus_1775033791340.png',
    'https://images.unsplash.com/photo-1540575861501-7bc06a177dc2?q=80&w=2070',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070'
  ]);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    fetch('/api/gallery/highlights')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) setPhotos(data.map((p: any) => p.url));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [photos]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-[#1E3A8A] to-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPhoto}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            src={photos[currentPhoto]}
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 sm:py-28">
        {/* Left — Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white/30 bg-white/20 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="Student" />
                </div>
              ))}
            </div>
            <span className="text-xs font-medium text-white/80">
              Trusted by <span className="text-accent font-semibold">25,000+</span> Alumni
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white !text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !font-bold !leading-[1.1]"
          >
            Excellence in <br />
            Commerce & <br />
            <span className="text-accent">Management</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-lg mx-auto lg:mx-0 text-white/70 text-base sm:text-lg leading-relaxed"
          >
            Welcome to SEMCOM — where academic rigor meets industry innovation. A premier CVM University institution cultivating the next generation of global professionals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://admissions.cvmu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent group w-full sm:w-auto justify-center !py-3.5 !px-8 !text-sm"
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
              <Play size={16} className="fill-white" />
              Explore Campus
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-white/10"
          >
            {[
              { label: 'Years of Legacy', value: '25+' },
              { label: 'NAAC Rating', value: 'A+' },
              { label: 'Placement Rate', value: '94%' },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-[11px] sm:text-xs text-white/50 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={photos[currentPhoto]}
                alt="Campus Life"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

            {/* Bottom overlay content */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">Highlight</span>
                <h3 className="text-xl font-bold text-white leading-tight mt-1">Global Learning<br />Environment</h3>
              </div>
              <div className="flex gap-1.5">
                {photos.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-300',
                      i === currentPhoto ? 'w-6 bg-accent' : 'w-1.5 bg-white/40'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CVM Badge */}
          <div className="absolute -top-4 -right-4 z-20 bg-surface p-4 rounded-xl shadow-soft border border-border flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
              <GraduationCap size={22} />
            </div>
            <div className="text-sm font-bold text-primary">CVM</div>
            <div className="text-[9px] text-muted font-medium">University</div>
          </div>

          {/* Rating Badge */}
          <div className="absolute -bottom-4 -left-4 z-20 w-24 aspect-square bg-secondary rounded-xl p-4 flex flex-col items-center justify-center text-white shadow-lg">
            <Star size={24} className="fill-white mb-1" />
            <div className="text-sm font-bold leading-none">5 STAR</div>
            <div className="text-[8px] font-medium opacity-80 mt-0.5">GSIRF Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
