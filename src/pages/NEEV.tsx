import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Rocket, Users, Target, Zap, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NEEV() {
  const pillars = [
    { title: 'Innovation', icon: <Lightbulb size={20} />, desc: 'Cultivating a mindset of creative problem solving.' },
    { title: 'Entrepreneurship', icon: <Rocket size={20} />, desc: 'Empowering future business leaders and founders.' },
    { title: 'Growth', icon: <Target size={20} />, desc: 'Strategic personal and professional development.' },
    { title: 'Community', icon: <Users size={20} />, desc: 'Building a network of support and collaboration.' },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">NEEV Cell</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            NEEV <span className="text-accent">Cell</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Empower Your Journey — Unleashing student potential, entrepreneurial vision, and creative innovation.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-between">
          
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Zap size={14} />
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
              Building the Foundations of Tomorrow
            </h2>
            <p className="text-sm text-muted leading-relaxed font-medium italic">
              "NEEV is more than a cell; it is an ecosystem designed to ignite the entrepreneurial spirit and foster innovation within the institution. We provide the mentorship, resources, and platform needed to transform ideas into impact."
            </p>
            
            <div className="flex gap-4 items-center pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border border-surface bg-surface flex items-center justify-center overflow-hidden shadow-sm shrink-0">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Member" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center text-[10px]">
                <p className="font-bold text-primary leading-none">500+ Active Members</p>
                <p className="font-bold text-secondary uppercase tracking-wider mt-0.5">Growing Ecosystem</p>
              </div>
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="card !p-6 border border-border bg-surface text-center space-y-3 shadow-sm hover:border-secondary transition-colors group"
              >
                <div className="w-10 h-10 bg-background border border-border group-hover:bg-secondary group-hover:text-white rounded-xl flex items-center justify-center mx-auto text-secondary transition-all shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-xs text-primary uppercase tracking-wider">{pillar.title}</h3>
                <p className="text-[9px] font-semibold text-muted leading-relaxed uppercase">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA / Vision Section */}
      <div className="bg-surface py-12 sm:py-16 border-t border-border">
        <div className="section-container">
          <div className="card !p-8 sm:!p-12 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white text-center space-y-6 relative overflow-hidden max-w-4xl mx-auto shadow-soft">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <Sparkles className="text-accent mx-auto w-8 h-8" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Ready to Start Your Journey?</h2>
            <p className="text-white/70 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-semibold">
              Join NEEV and become part of a community that values curiosity, persistence, and excellence. Together, we build the foundations of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 relative z-10">
              <button className="btn-primary !py-2.5 !px-6 !text-xs">Join The Cell</button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 py-2.5 px-6 rounded-xl text-xs font-bold transition-all shadow">Upcoming Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
