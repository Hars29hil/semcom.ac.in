import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Star, CheckCircle2, FileText, ExternalLink, Shield } from 'lucide-react';

const rankingData = {
  NIRF: [
    { name: 'NIRF Ranking 2025', status: 'Submitted / Published', url: 'https://semcom.ac.in/pdf/2025/NIRF/nirf25.pdf' },
    { name: 'NIRF Ranking 2024', status: 'Submitted / Published', url: 'https://semcom.ac.in/pdf/2025/NIRF/nirf24.pdf' },
  ],
  GSIRF: [
    { name: 'GSIRF 5-Star Rating', status: 'Awarded: 2nd Dec 2024', url: '#' },
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden bg-[#1c2e5a]">
        <div className="absolute inset-0 bg-[#1c2e5a]/85 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1523240755646-9dac372338de?auto=format&fit=crop&q=80&w=2070" 
          alt="Excellence" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-teal-500/20 backdrop-blur-md rounded-full border border-teal-500/30 text-teal-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8"
          >
            <Shield size={16} />
            Institutional Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-black text-white uppercase tracking-tight leading-none"
          >
            Accreditations <br/><span className="text-teal-400">&</span> Rankings
          </motion.h1>
          <div className="w-32 h-1 bg-teal-500 mx-auto mt-10 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
        </div>
      </div>

      {/* Stats Counter Section */}
      <section className="relative z-30 -mt-20 max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: 'NAAC GRADE', value: 'A', icon: <Award className="text-teal-400" /> },
             { label: 'GSIRF RATING', value: '5 STAR', icon: <Star className="text-teal-400" /> },
             { label: 'INSTITUTION AGE', value: '25+ YRS', icon: <Trophy className="text-teal-400" /> },
           ].map((stat, i) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-center justify-between group"
             >
                <div className="space-y-1">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                   <p className="text-3xl font-serif font-black text-[#1c2e5a] uppercase">{stat.value}</p>
                </div>
                <div className="w-14 h-14 bg-[#1c2e5a] rounded-2xl flex items-center justify-center text-white group-hover:bg-teal-600 transition-colors">
                   {stat.icon}
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
         <div className="flex flex-col items-center gap-16">
            {/* Tab Controllers */}
            <div className="inline-flex p-2 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-inner">
               {Object.keys(rankingData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-12 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab ? 'bg-[#1c2e5a] text-white shadow-xl' : 'text-gray-400 hover:text-[#1c2e5a]'}`}
                  >
                    {tab}
                  </button>
               ))}
            </div>

            {/* Content Area */}
            <div className="w-full min-h-[400px]">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {rankingData[activeTab as keyof typeof rankingData].map((item, i) => (
                      <div 
                        key={item.name}
                        className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-teal-500 transition-all hover:bg-teal-50/10"
                      >
                         <div className="flex items-start justify-between gap-6">
                            <div className="space-y-4">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 size={18} className="text-teal-600" />
                                  <h3 className="text-xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">{item.name}</h3>
                               </div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-[#0b807b] bg-teal-50 px-3 py-1 rounded-full w-fit">
                                  Status: {item.status}
                               </p>
                            </div>
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-[#1c2e5a] group-hover:text-white transition-all shadow-sm">
                               <FileText size={24} />
                            </div>
                         </div>
                         <div className="mt-8 pt-8 border-t border-gray-50 flex justify-between items-center">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Official Institutional Data</span>
                            <a 
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-[10px] font-black text-teal-600 uppercase tracking-widest hover:translate-x-1 transition-transform"
                            >
                               View Document
                               <ExternalLink size={12} />
                            </a>
                         </div>
                      </div>
                    ))}
                  </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* Accreditation Badges */}
      <section className="bg-gray-50 py-24 px-6">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center">
               <h2 className="text-3xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">Accreditation <span className="text-teal-600">&</span> Partnerships</h2>
               <div className="w-20 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
               {/* Placeholders for accreditation logos */}
               {['NAAC', 'NIRF', 'GSIRF', 'ISO', 'UGC', 'CVM'].map((logo) => (
                 <div key={logo} className="text-2xl font-black text-[#1c2e5a] uppercase tracking-[0.3em] font-serif">{logo}</div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Branding */}
      <div className="bg-[#1c2e5a] py-8 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-500/50">Quality Benchmark • SEMCOM • Rankings Section</p>
      </div>
    </div>
  );
}
