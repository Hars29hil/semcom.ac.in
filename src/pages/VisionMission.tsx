import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, Trophy, Activity, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';

export default function VisionMission() {
  const goals = [
    { text: "To focus on integral development of students.", icon: <Users size={18} /> },
    { text: "To offer courses and programs in tune with changing trends in the society as a whole.", icon: <TrendingUp size={18} /> },
    { text: "To update the curriculum as per the need of the business and industry.", icon: <Activity size={18} /> },
    { text: "To create unique identity in the educational world at the national as well as international level.", icon: <Target size={18} /> },
    { text: "To institutionalize quality in imparting education.", icon: <Award size={18} /> },
    { text: "To incorporate innovations on a continuous basis in the entire process of education at institutional level.", icon: <Lightbulb size={18} /> },
    { text: "To create platform for the students for exhibiting their talent and for development of their potentials.", icon: <Trophy size={18} /> },
    { text: "To generate stimulating learning environment for students as well as teachers.", icon: <Rocket size={18} /> },
    { text: "To build cutting edge amongst the students to withstand and grow in the competitive environment at the global level.", icon: <Activity size={18} /> },
  ];

  const valueMetrics = [
    "LIFE SKILLS", "RICH EXPERIENCE", "COMMITTED FACULTY", 
    "PERSONAL COUNSELING", "INNOVATIVE LEARNING", "COMPETITIVE EDGE"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Banner Section */}
      <div className="relative h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1c2e5a]/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2073" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-serif font-black text-white uppercase tracking-[0.3em] drop-shadow-lg"
          >
            Dream, Vision, Mission, Goals
          </motion.h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 lg:px-12 -mt-10 relative z-20">
        <div className="bg-white border-2 border-teal-600/20 rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-[#1c2e5a]/5">
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-black text-[#0b807b] mb-12 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center text-lg">★</span>
              Institutional Hallmarks
            </h2>

            <div className="grid gap-8">
              {/* Our Dream */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="group border-l-4 border-teal-500 pl-8 py-4 bg-teal-50/30 rounded-r-2xl transition-all"
              >
                <div className="flex items-center gap-2 mb-2 text-[#1c2e5a] font-black uppercase text-xs tracking-widest opacity-60">
                   <Eye size={14} />
                   Our Dream
                </div>
                <p className="text-xl md:text-2xl font-serif font-bold text-[#1c2e5a] leading-tight">
                  "To establish a unique identity in the emerging Global Village."
                </p>
              </motion.div>

              {/* Our Vision */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="group border-l-4 border-indigo-500 pl-8 py-4 bg-indigo-50/30 rounded-r-2xl transition-all"
              >
                <div className="flex items-center gap-2 mb-2 text-[#1c2e5a] font-black uppercase text-xs tracking-widest opacity-60">
                   <Target size={14} />
                   Our Vision
                </div>
                <p className="text-xl md:text-2xl font-serif font-bold text-[#1c2e5a] leading-tight">
                  "To contribute to the societal enrichment through quality education, innovation and value augmentation."
                </p>
              </motion.div>

              {/* Our Mission */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="group border-l-4 border-purple-500 pl-8 py-4 bg-purple-50/30 rounded-r-2xl transition-all"
              >
                <div className="flex items-center gap-2 mb-2 text-[#1c2e5a] font-black uppercase text-xs tracking-widest opacity-60">
                   <Rocket size={14} />
                   Our Mission
                </div>
                <p className="text-xl md:text-2xl font-serif font-bold text-[#1c2e5a] leading-tight">
                  "To build up a competitive edge amongst the students by fostering a stimulating learning environment."
                </p>
              </motion.div>
            </div>
          </div>

          {/* Our Goals */}
          <div className="mt-16 bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100">
            <h3 className="text-xl font-black text-[#1c2e5a] uppercase tracking-widest mb-8 border-b-2 border-gray-200 pb-4 inline-block">
              Our Goals
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {goals.map((goal, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-teal-100 flex items-center justify-center text-teal-600 shadow-sm group-hover:bg-[#1c2e5a] group-hover:text-white transition-colors">
                    {goal.icon}
                  </div>
                  <p className="text-gray-600 text-sm font-semibold leading-relaxed group-hover:text-gray-900 transition-colors">
                    {goal.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Value Metrics */}
          <div className="mt-16">
            <h3 className="text-xl font-black text-[#1c2e5a] uppercase tracking-widest mb-10 flex items-center gap-3">
              Our Value Metrics
              <div className="flex-grow h-[2px] bg-gradient-to-r from-teal-600/20 to-transparent" />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {valueMetrics.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-white border-2 border-teal-600/10 rounded-2xl py-6 px-4 text-center hover:border-teal-600/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all group"
                >
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#0b807b] group-hover:scale-110 block transition-transform">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
