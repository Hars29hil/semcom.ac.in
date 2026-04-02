import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Trophy, Users, Sparkles, Star, GraduationCap, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [photos]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-brand-bg select-none"
    >
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ y: y2 }}
          className="space-y-10 relative"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-brand-border text-brand-primary"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Student" />
                </div>
              ))}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider">Join 1500+ global scholars</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-[48px] md:text-[68px] lg:text-[76px] font-heading font-black leading-[0.95] tracking-[-0.04em] text-brand-text">
              Crafting <span className="text-gradient">Visionaries</span> <br />
              For The <span className="relative inline-block">
                Future.
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 w-full"
                  height="12" viewBox="0 0 300 12" fill="none"
                >
                  <path d="M2 10C80 2 220 2 298 10" stroke="var(--color-brand-secondary)" strokeWidth="4" strokeLinecap="round" />
                </motion.svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-subtext font-medium max-w-xl leading-relaxed">
              Discover a legacy of academic excellence at SEMCOM. We provide a transformative environment for future leaders in commerce, management, and technology.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Link to="/admission" className="btn-primary flex items-center gap-3 group px-10 h-16 text-base">
              Apply For 2026-27
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <button className="flex items-center gap-5 group py-2">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-brand-primary/5 flex items-center justify-center border border-brand-border group-hover:border-brand-primary/20 transition-all">
                <Play size={20} className="text-brand-primary fill-brand-primary ml-1" />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-brand-subtext text-[10px] uppercase font-black tracking-widest mb-0.5">Campus Experience</span>
                <span className="text-brand-primary font-black uppercase text-xs tracking-wider group-hover:text-brand-secondary transition-colors">Watch Tour Video</span>
              </div>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="pt-10 grid grid-cols-3 gap-8 md:gap-12 opacity-80">
            {[
              { label: 'Academic Years', value: '25+', icon: Sparkles },
              { label: 'NAAC Ranking', value: 'A+', icon: Star },
              { label: 'Placement Rate', value: '92%', icon: Trophy },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-secondary">
                  <stat.icon size={14} />
                  <span className="text-2xl font-black text-brand-primary tracking-tighter">{stat.value}</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-subtext leading-none">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[750px] flex items-center justify-center p-4"
        >
          <div className="relative z-10 w-full max-w-[500px] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] ring-8 ring-white group cursor-default">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                src={photos[currentPhoto]}
                alt="Modern SEMCOM Campus"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/20 to-transparent opacity-80 transition-opacity duration-700" />

            <div className="absolute bottom-12 left-10 right-10 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-brand-secondary" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-secondary animate-pulse">Recent Gallery Highlights</span>
                </div>
                <h3 className="text-3xl font-heading font-black leading-[1.1] tracking-tight italic">Campus Events & <br />Research Activities</h3>
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute top-12 right-10 flex gap-1.5">
               {photos.map((_, i) => (
                 <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentPhoto ? 'w-6 bg-brand-secondary' : 'w-2 bg-white/40'}`} />
               ))}
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-md p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-brand-border flex flex-col items-center gap-3 w-40"
          >
            <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary">
              <GraduationCap size={32} />
            </div>
            <div className="text-center">
              <div className="text-xl font-black text-brand-primary leading-tight">CVM</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-brand-subtext">University Node</div>
            </div>
          </motion.div>

          {/* GSIRF 5-Star Achievement Box */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-10 -left-10 z-20 w-[120px] group"
          >
            <div className="relative overflow-hidden group-hover:scale-105 transition-transform duration-700 [clip-path:polygon(50%_0%,_95%_25%,_95%_75%,_50%_100%,_5%_75%,_5%_25%)]">
              <img
                src="/images/gsirf_badge_v2.png"
                alt="GSIRF 5-Star Rating"
                className="w-full h-auto block drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Slogan Pill */}
          <div className="absolute top-1/2 -right-16 translate-y-[-50%] bg-white py-4 px-1 rounded-full border border-brand-border shadow-xl hidden xl:block">
            <div className="flex flex-col items-center gap-12 py-4">
              <span className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[0.5em] text-brand-subtext opacity-40">Since 1997</span>
              <div className="w-1 h-32 bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full opacity-20" />
              <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center text-white animate-bounce pointer-events-none">
                <Sparkles size={16} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
