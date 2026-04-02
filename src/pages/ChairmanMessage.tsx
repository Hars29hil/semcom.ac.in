import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function ChairmanMessage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=2070" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover shadow-inner"
        />
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-[0.2em] drop-shadow-2xl"
          >
            Chairman's Message
          </motion.h1>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto mt-6 rounded-full shadow-lg shadow-teal-500/50" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-12 -mt-12 relative z-20">
        <div className="bg-white border-2 border-teal-600/10 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-teal-900/5">
          
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
            {/* Chairman Portrait */}
            <div className="lg:w-1/3 w-full shrink-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative group p-1 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 rounded-[2.5rem] shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src="/images/chairman.png" 
                  alt="Er. Bhikhubhai B. Patel" 
                  className="w-full aspect-[4/5] object-cover object-top rounded-[2.2rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-teal-500/20">
                    <h3 className="text-[#1c2e5a] font-black text-sm uppercase tracking-wider mb-1">Er. Bhikhubhai B. Patel</h3>
                    <p className="text-[#0b807b] font-black text-[10px] uppercase tracking-widest">Chairman, CVM</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Message Header & Welcome Quote */}
            <div className="lg:w-2/3 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal-50 text-[#0b807b] rounded-full text-[10px] font-black uppercase tracking-widest border border-teal-100 mb-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                Message from Chairman's Desk
              </div>
              
              <div className="relative">
                <Quote size={60} className="absolute -top-6 -left-8 text-teal-600/10 -scale-x-100" />
                <p className="text-xl md:text-2xl font-serif font-black italic text-[#1c2e5a] leading-tight relative z-10">
                  "Our guiding principle is constant change, Motivation and upgradation, creating state-of-the-art knowledge infrastructure for our students, instilling in them the ability to learn so that they can face any challenge anywhere in the world."
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-serif font-black text-[#0b807b]">Welcome</h2>
                <div className="space-y-4 text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                  <p>
                    Education is the harmonious development of the physical, mental, spiritual and social faculties. It is the process of awakening the thirst for knowledge and kindling the inquisitive spirit that lead to the overall development of students. We, at Vallabh Vidyanagar, have inherited the great spirits of our pioneers to carry their legacy forward, the legacy of imparting education that prepares the students intellectually for mature life.
                  </p>
                  <p>
                    An effective educational system should have a holistic approach that prepares the students for the workforce and to take optimum advantage of the rich opportunities offered by the business community. To keep pace with the ever-evolving challenges and trends in the world our curriculum is designed in response to the needs of the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Content Sections */}
          <div className="grid lg:grid-cols-2 gap-12 mt-12 pt-12 border-t border-gray-100 text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            <div className="space-y-6 bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100">
              <p>
                Today when Government is heavily burdened with the task of funding higher education, self-financed institutions serve as a great antidote. The demand for professional education has risen steeply in the last few years. This cannot be met fully by state-funded or state-aided institutions alone. This is why a new category of private, self-financing institutions have registered a phenomenal growth. 
              </p>
              <p>
                The responsibility of imparting quality education has been imbibed from the great visionaries like <span className="text-[#1c2e5a] font-bold">Shri Bhaikaka, Shri Bhikhabhai and Shri H. M. Patel</span>, the founders of Vallabh Vidyanagar. The present Vallabh Vidyanagar owes its transformation and vogue to these great visionaries who strived hard to bring about a sea change in the life of the rural people.
              </p>
            </div>

            <div className="space-y-6 p-8">
              <p>
                SEMCOM is one of the colleges in Gujarat to have the embellishment of ISO 9001:2008 Certificate. It has received the prestigious national award <span className="text-[#0b807b] font-bold">"Best College for Entrepreneurship Education"</span> for the academic year 2008-2009. The greatest triumph is being <span className="text-indigo-600 font-bold">Re-Accredited Grade 'A' by NAAC</span>.
              </p>
              <p>
                From the coming year, SEMCOM is offering Advanced Diploma in Global Business to all the students who are pursuing their courses. The focal point of SEMCOM is to impart quality education in the fields of Commerce, Management, Information Technology and E-Business.
              </p>
              <p className="pt-4 italic border-t border-gray-100 text-[#1c2e5a]">
                The serene and stirring environment of Vallabh Vidyanagar is very much conducive to scholastic and erudite pursuits. I heartily welcome you to this center of academic brilliance.
              </p>
            </div>
          </div>

          {/* Signature Area */}
          <div className="mt-16 pt-10 border-t-2 border-teal-600/10 flex flex-col items-end">
            <div className="text-right">
              <h4 className="text-[#1c2e5a] font-black uppercase tracking-widest text-lg mb-1">Er. Bhikhubhai B. Patel</h4>
              <p className="text-gray-500 font-black text-xs uppercase tracking-[0.2em] mb-1">Chairman</p>
              <p className="text-[#0b807b] font-black text-xs uppercase tracking-[0.15em]">Charutar Vidya Mandal</p>
            </div>
            {/* Digital Sig Seal Placeholder */}
            <div className="w-16 h-16 mt-4 opacity-10 grayscale">
               <img src="/logo.svg" alt="seal" className="w-full h-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
