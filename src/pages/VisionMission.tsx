import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, Trophy, Activity, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VisionMission() {
  const goals = [
    { text: "To focus on integral development of students.", icon: <Users size={16} /> },
    { text: "To offer courses and programs in tune with changing trends in society as a whole.", icon: <TrendingUp size={16} /> },
    { text: "To update the curriculum as per the need of business and industry.", icon: <Activity size={16} /> },
    { text: "To create a unique identity in the educational world at national and international levels.", icon: <Target size={16} /> },
    { text: "To institutionalize quality in imparting education.", icon: <Award size={16} /> },
    { text: "To incorporate innovations on a continuous basis in the entire process of education at institutional level.", icon: <Lightbulb size={16} /> },
    { text: "To create a platform for students to exhibit talent and develop their potentials.", icon: <Trophy size={16} /> },
    { text: "To generate a stimulating learning environment for students as well as teachers.", icon: <Rocket size={16} /> },
    { text: "To build a cutting edge among students to withstand and grow in global competitive environments.", icon: <Activity size={16} /> },
  ];

  const valueMetrics = [
    "LIFE SKILLS", "RICH EXPERIENCE", "COMMITTED FACULTY", 
    "PERSONAL COUNSELING", "INNOVATIVE LEARNING", "COMPETITIVE EDGE"
  ];

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
            <span className="text-white/60">Our Vision & Mission</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Vision & <span className="text-accent">Mission</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Understanding the core academic hallmarks, visionary dreams, and strategic pillars that guide the scholastic ecosystem of SEMCOM.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Hallmarks Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
              Institutional Hallmarks
            </h2>

            <div className="space-y-6">
              {/* Our Dream */}
              <motion.div 
                whileHover={{ x: 2 }}
                className="border-l-4 border-accent pl-6 py-4 bg-surface rounded-r-xl border border-border border-l-0 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-secondary font-bold uppercase text-[10px] tracking-wider">
                   <Eye size={14} />
                   <span>Our Dream</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-primary leading-relaxed">
                  "To establish a unique identity in the emerging Global Village."
                </p>
              </motion.div>

              {/* Our Vision */}
              <motion.div 
                whileHover={{ x: 2 }}
                className="border-l-4 border-secondary pl-6 py-4 bg-surface rounded-r-xl border border-border border-l-0 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-secondary font-bold uppercase text-[10px] tracking-wider">
                   <Target size={14} />
                   <span>Our Vision</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-primary leading-relaxed">
                  "To contribute to societal enrichment through quality education, innovation, and value augmentation."
                </p>
              </motion.div>

              {/* Our Mission */}
              <motion.div 
                whileHover={{ x: 2 }}
                className="border-l-4 border-[#1E3A8A] pl-6 py-4 bg-surface rounded-r-xl border border-border border-l-0 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-secondary font-bold uppercase text-[10px] tracking-wider">
                   <Rocket size={14} />
                   <span>Our Mission</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-primary leading-relaxed">
                  "To build up a competitive edge among students by fostering a stimulating, tech-integrated learning environment."
                </p>
              </motion.div>
            </div>
          </div>

          {/* Value Metrics Right Column */}
          <div className="card !p-8 bg-surface border border-border">
            <h3 className="text-lg font-bold text-primary mb-6 pb-3 border-b border-border/80">
              Value Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {valueMetrics.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-background border border-border rounded-xl p-4 text-center hover:border-secondary/20 transition-all"
                >
                  <span className="text-[9px] font-bold tracking-wider text-primary block truncate">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Strategic Goals Panel */}
        <div className="card !p-8 sm:!p-12 bg-surface border border-border mt-10 sm:mt-16">
          <h3 className="text-lg font-bold text-primary mb-8 pb-3 border-b border-border/80 inline-block">
            Our Strategic Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, i) => (
              <div key={i} className="flex gap-3.5 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {goal.icon}
                </div>
                <p className="text-xs text-muted font-semibold leading-relaxed group-hover:text-primary transition-colors">
                  {goal.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
