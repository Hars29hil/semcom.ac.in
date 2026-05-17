import React from 'react';
import { motion } from 'motion/react';
import { Quote, GraduationCap, Globe, Users, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrincipalMessage() {
  const highlights = [
    { icon: <Globe size={18} />, title: "Global Citizens", desc: "Preparing students for international challenges." },
    { icon: <Briefcase size={18} />, title: "Industry Linked", desc: "Curriculum designed in response to industry needs." },
    { icon: <Users size={18} />, title: "Holistic Growth", desc: "Focus on all-round personality development." },
    { icon: <GraduationCap size={18} />, title: "Experiential Learning", desc: "Learning through industrial tours and workshops." },
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
            <span className="text-white/60">Principal's Message</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Principal's <span className="text-accent">Message</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Welcome to SEMCOM. Learn about our vision, our academic excellence, and how we foster global citizens under CVM University.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Content Side */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Header Block */}
            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                <Quote size={20} />
              </div>
              <div>
                <h2 className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Institutional Leadership</h2>
                <p className="text-primary text-2xl font-bold">From the Principal's Desk</p>
              </div>
            </div>

            {/* Feature Message Block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface border-l-4 border-secondary p-8 rounded-r-2xl shadow-sm"
            >
              <p className="text-lg font-semibold text-primary leading-relaxed italic">
                "We aim to create in our students a cutting edge which will bring success in the emerging competitive world. Integrated development of students will not only help them in generating knowledge, acquiring skills, developing attitude but also help them in becoming the best of human beings with meaningful living."
              </p>
            </motion.div>

            {/* Letter Content */}
            <div className="space-y-6 text-sm sm:text-base text-muted leading-relaxed font-medium">
              <p>
                After completing higher secondary education, students are in the most crucial phase of their lives and find themselves at the crossroads. Here they are on the threshold of making the most important decision of their lives – selecting a course according to their aptitude and the best college with a multifaceted approach towards higher education that is complete, whole and sound for their career.
              </p>
              <p>
                In this highly competitive world, SEMCOM stands as a beacon providing unbounded access to information that can be transformed into comprehensive and indispensable knowledge. At SEMCOM we emphasize on instilling confidence and independence promoting critical thinking that will help the students to act and react in real-life situations.
              </p>
              <p>
                To keep pace with the dynamically changing world we prepare students to be Global Citizens. Our programs are well designed to leverage the challenges posed by globalization, technology and changing values and attitudes. Our pedagogy is technology integrated to enhance the understanding of inter-linkage between theory and practice.
              </p>
              <p>
                Our pivotal emphasis is on all-round personality development. This is achieved by providing contextualized study of curriculum which is given through diversified activities and competitions that make them expressive and adaptable. The college arranges guest talks, seminars and workshops to acquaint the students with the prevalent trends in industry and business.
              </p>
              
              {/* Institutional Collaboration Accent Panel */}
              <div className="bg-surface p-6 rounded-2xl border border-border italic text-primary flex items-start gap-4 shadow-sm">
                <ChevronRight className="text-secondary mt-1 shrink-0" size={16} />
                <p className="text-sm font-semibold">
                  SEMCOM maintains active collaborations with prestigious foreign institutions, including Georgia SouthWestern State University, Myers University (Cleveland, Ohio), and Vancouver Island University (British Columbia, Canada).
                </p>
              </div>

              <p>
                The college provides academic and personal counseling to each student on a regular basis. The vital essence is to provide personal direction and developmental guidance. Counselling helps teachers to bond and develop better rapport with the students that helps them to cope with the problems of growing up, keep up with their studies and planning their careers.
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-border flex flex-col items-start gap-1.5">
              <p className="text-primary font-bold text-lg leading-none">Principal</p>
              <p className="text-secondary font-semibold text-xs uppercase tracking-widest">SEMCOM college</p>
            </div>
          </div>

          {/* Right Sidebar Spotlight */}
          <div className="space-y-8">
            
            {/* Highlights Sidebar Box */}
            <div className="card !p-8 bg-surface border border-border">
              <h3 className="text-lg font-bold text-primary mb-6 pb-4 border-b border-border/80">
                Visionary Pillars
              </h3>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-background flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Block Card */}
            <div className="card !p-0 overflow-hidden relative group border border-border shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                alt="Campus Life" 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-accent text-[9px] font-bold uppercase tracking-wider mb-1">Global Exposure</p>
                <p className="text-white font-bold text-base leading-tight">Embarking on a journey of discovery.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
