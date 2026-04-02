import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Rocket, Users, Target, Zap, Globe, Sparkles } from 'lucide-react';

export default function NEEV() {
  const pillars = [
    { title: 'Innovation', icon: <Lightbulb />, desc: 'Cultivating a mindset of creative problem solving.' },
    { title: 'Entrepreneurship', icon: <Rocket />, desc: 'Empowering future business leaders and founders.' },
    { title: 'Growth', icon: <Target />, desc: 'Strategic personal and professional development.' },
    { title: 'Community', icon: <Users />, desc: 'Building a network of support and collaboration.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Hero */}
      <div className="relative h-[550px] flex items-center justify-center overflow-hidden bg-[#1c2e5a]">
        <div className="absolute inset-0 bg-[#1c2e5a]/80 z-10" />
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
             className="w-full h-full object-cover opacity-40 scale-110 blur-[2px]"
             alt="NEEV Background"
           />
        </div>
        
        {/* Floating Particles/Shapes */}
        <div className="absolute inset-0 z-10 pointer-events-none">
           <div className="absolute top-20 left-1/4 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <div className="inline-block p-4 bg-white rounded-[2.5rem] shadow-2xl relative">
               <img src="/images/neev-logo.png" alt="NEEV Logo" className="w-40 h-40 object-contain" />
               <div className="absolute -inset-2 border-2 border-teal-500/30 rounded-[3rem] animate-spin-slow pointer-events-none" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-black text-white uppercase tracking-tighter leading-none"
          >
            NEEV <span className="text-teal-400">Cell</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-indigo-100/60 font-black tracking-[0.4em] mt-8 text-xs uppercase"
          >
            Empower Your Journey • Innovation • Leadership
          </motion.p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-12 rounded-full" />
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 w-full">
         <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-10"
            >
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-[10px]">
                     <Zap size={18} />
                     <span>Core Philosophy</span>
                  </div>
                  <h2 className="text-5xl font-serif font-black text-[#1c2e5a] uppercase leading-tight tracking-tighter">Building The <br/><span className="text-gray-300">Foundation</span> of Future</h2>
               </div>
               <p className="text-gray-600 text-lg font-medium leading-relaxed italic">
                 "NEEV is more than a cell; it is an ecosystem designed to ignite the entrepreneurial spirit and foster innovation within the institution. We provide the mentorship, resources, and platform needed to transform ideas into impact."
               </p>
               <div className="flex gap-4">
                  <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                           <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Member" className="w-full h-full object-cover" />
                        </div>
                     ))}
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-sm font-black text-[#1c2e5a] leading-none">500+ Active Members</p>
                     <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mt-1">Growing Ecosystem</p>
                  </div>
               </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
               {pillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 text-center space-y-4 group hover:bg-[#1c2e5a] hover:text-white transition-all duration-500"
                  >
                     <div className="w-14 h-14 bg-white/10 group-hover:bg-teal-500 rounded-2xl flex items-center justify-center mx-auto text-[#1c2e5a] group-hover:text-white transition-all shadow-xl shadow-[#1c2e5a]/5 group-hover:shadow-teal-500/20">
                        {pillar.icon}
                     </div>
                     <h3 className="text-lg font-serif font-black uppercase tracking-tight">{pillar.title}</h3>
                     <p className="text-[10px] font-bold opacity-60 leading-relaxed uppercase tracking-wider">{pillar.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA / Vision Section */}
      <section className="bg-[#1c2e5a] py-32 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -mr-48 -mt-48" />
         <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
            <Sparkles className="text-teal-400 mx-auto w-12 h-12" />
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-tighter">Ready to Start <br/>Your Journey?</h2>
            <p className="text-indigo-200/60 leading-relaxed text-lg font-medium opacity-80">
              Join NEEV and become part of a community that values curiosity, persistence, and excellence. Together, we build the foundations of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <button className="px-12 py-5 bg-teal-500 text-[#1c2e5a] rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all">Join The Cell</button>
               <button className="px-12 py-5 border-2 border-white/20 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all">Upcoming Events</button>
            </div>
         </div>
      </section>

      {/* Institutional Branding */}
      <div className="bg-white py-12 border-t border-gray-50">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-4">
               <Globe className="text-gray-300" />
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Standards • Institutional Excellence • Innovation First</p>
            </div>
            <p className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.5em]">Powered By SEMCOM • CVM University</p>
         </div>
      </div>
    </div>
  );
}
