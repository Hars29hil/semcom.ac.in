import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Star, CheckCircle2, FileText, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const rankingData = {
  NIRF: [
    { name: 'NIRF Ranking 2025', status: 'Submitted / Published', url: 'https://semcom.ac.in/pdf/2025/NIRF/nirf25.pdf' },
    { name: 'NIRF Ranking 2024', status: 'Submitted / Published', url: 'https://semcom.ac.in/pdf/2025/NIRF/nirf24.pdf' },
  ],
  GSIRF: [
    { name: 'GSIRF 5-Star Rating', status: 'Awarded: 2nd Dec 2024', url: '/SEMCOM_GSIRF_2024.jpg' },
    { name: 'GSIRF Rating 2023', status: 'Published', url: '#' },
  ],
  Other: [
    { name: 'NAAC Accreditation', status: 'A Grade', url: '#' },
    { name: 'ISO Certification', status: 'Certified', url: '#' },
  ]
};

export default function Rankings() {
  const [activeTab, setActiveTab] = useState('NIRF');

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Rankings</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Accreditations <span className="text-accent">& Rankings</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Celebrating institutional excellence, academic rigor, and globally recognized quality benchmarks.
          </p>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="relative z-30 -mt-8 max-w-6xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'NAAC GRADE', value: 'A Grade', icon: <Award className="text-secondary" /> },
            { label: 'GSIRF RATING', value: '5 Star', icon: <Star className="text-secondary" /> },
            { label: 'INSTITUTION AGE', value: '25+ Years', icon: <Trophy className="text-secondary" /> },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="card border border-border shadow-soft flex items-center justify-between bg-surface"
            >
              <div className="space-y-1.5">
                <p className="text-[9px] font-bold text-muted uppercase tracking-wider">{stat.label}</p>
                <p className="text-xl font-bold text-primary">{stat.value}</p>
              </div>
              <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="section-container py-12 sm:py-16">
        <div className="flex flex-col items-center gap-10">
          
          {/* Tab Controllers */}
          <div className="inline-flex p-1.5 bg-surface rounded-xl border border-border">
            {Object.keys(rankingData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab ? 'bg-primary text-white shadow-sm' : 'text-muted hover:text-primary'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {rankingData[activeTab as keyof typeof rankingData].map((item) => (
                  <div 
                    key={item.name}
                    className="card border border-border bg-surface hover:border-secondary transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-secondary" />
                            <h3 className="font-bold text-sm text-primary">{item.name}</h3>
                          </div>
                          <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-secondary bg-secondary/15 px-3 py-1 rounded-md">
                            Status: {item.status}
                          </span>
                        </div>
                        <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-muted">
                          <FileText size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-[10px]">
                      <span className="font-bold text-muted uppercase tracking-wider">Official Data</span>
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-secondary font-bold hover:text-primary transition-colors"
                      >
                        <span>View Document</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Accreditation Badges */}
      <div className="bg-surface py-12 sm:py-16 border-t border-border">
        <div className="section-container space-y-10">
          <div className="text-center">
            <h2 className="text-lg font-bold text-primary">Accreditations & Partnerships</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16">
            {['NAAC', 'NIRF', 'GSIRF', 'ISO', 'UGC', 'CVM'].map((logo) => (
              <div key={logo} className="text-lg sm:text-xl font-black text-muted/60 uppercase tracking-widest">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
