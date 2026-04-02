import React from 'react';
import { motion } from 'motion/react';
import { Quote, GraduationCap, Globe, Users, Briefcase } from 'lucide-react';

export default function PrincipalMessage() {
  const highlights = [
    { icon: <Globe size={20} />, title: "Global Citizens", desc: "Preparing students for international challenges." },
    { icon: <Briefcase size={20} />, title: "Industry Linked", desc: "Curriculum designed in response to industry needs." },
    { icon: <Users size={20} />, title: "Holistic Growth", desc: "Focus on all-round personality development." },
    { icon: <GraduationCap size={20} />, title: "Experiential", desc: "Learning through industrial tours and workshops." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0b807b]/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1523050853051-f750004c21ad?auto=format&fit=crop&q=80&w=2000" 
          alt="Principal Message Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-[0.3em]"
          >
            Principal's Message
          </motion.h1>
          <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full opacity-50" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-12 -mt-12 relative z-20 font-sans">
        <div className="bg-white border-2 border-teal-600/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-gray-200/50">
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content Side */}
            <div className="lg:w-2/3 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-600/20">
                  <Quote size={24} />
                </div>
                <div>
                  <h2 className="text-[#1c2e5a] font-black text-xs uppercase tracking-[0.2em] mb-1">Institutional Leadership</h2>
                  <p className="text-[#0b807b] font-serif text-2xl font-bold">From Principal's Desk</p>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 border-l-4 border-teal-600 p-8 rounded-r-2xl"
              >
                <p className="text-xl font-serif font-black italic text-[#1c2e5a] leading-snug">
                  "We aim to create in our students a cutting edge which will bring success in the emerging competitive world. Integrated development of students will not only help them in generating knowledge, acquiring skills, developing attitude but also help them in becoming best of the human beings with meaningful living."
                </p>
              </motion.div>

              <div className="space-y-6 text-gray-600 font-medium leading-relaxed prose prose-teal max-w-none">
                <p>
                  After completing higher secondary education, students are in the most crucial phase of their lives and find themselves at the crossroads. Here they are on the threshold of making the most important decision of their lives – selecting a course according to their aptitude and the best college with multifaceted approach towards higher education that is complete, whole and sound for their career.
                </p>
                <p>
                  In this highly competitive world, SEMCOM stands as a beacon providing unbounded access to information that can be transformed into comprehensive and indispensable knowledge. At SEMCOM we emphasize on instilling confidence and independence promoting critical thinking that will help the students to act and react in real life situations.
                </p>
                <p>
                  To keep pace with the dynamically changing world we prepare students to be Global Citizens. Our programs are well designed to leverage the challenges posed by globalization, technology and changing values and attitudes. Our pedagogy is technology integrated to enhance the understanding of inter-linkage between theory and practice.
                </p>
                <p>
                  Our pivotal emphasis is on all-round personality development. This is achieved by providing contextualized study of curriculum which is given through diversified activities and competitions that make them expressive and adaptable. The college arranges guest talks, seminars and workshops to acquaint the students with the prevalent trends in industry and business.
                </p>
                <p className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100/50 italic text-[#1c2e5a]">
                  SEMCOM has collaborations with three foreign universities – Georgia SouthWestern State University, Myers University, Cleveland, Ohio and Vancouver Island University, British Columbia, Canada.
                </p>
                <p>
                  The college provides academic and personal counseling to each student on regular basis. The vital essence is to provide personal direction and developmental guidance. Counselling helps teachers to bond and develop better rapport with the students that helps them to cope with the problems of growing up, keep up with their studies and planning their careers.
                </p>
              </div>

              <div className="pt-10 border-t border-gray-100 flex flex-col items-start gap-1">
                <p className="text-[#1c2e5a] font-black uppercase text-lg">Principal</p>
                <p className="text-[#0b807b] font-black text-sm uppercase tracking-widest">SEMCOM</p>
              </div>
            </div>

            {/* Right Spotlight Side */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-[#1c2e5a] rounded-3xl p-8 text-white shadow-xl shadow-indigo-900/10">
                <h3 className="text-xl font-serif font-black mb-6 border-b border-white/10 pb-4">Visionary Focus</h3>
                <div className="space-y-8">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-400 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-indigo-200 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Campus Life" 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-white text-xs font-black uppercase tracking-widest mb-1 opacity-80">Global Exposure</p>
                  <p className="text-white font-serif font-bold text-lg leading-tight">Embarking on a journey of discovery.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
