import React, { useState, useEffect } from 'react';
import { API_BASE } from '@/lib/api';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChairmanMessage() {
  const [chairmanImage, setChairmanImage] = useState('/images/chairman.png');

  useEffect(() => {
    fetch(`${API_BASE}/config`)
      .then(res => res.json())
      .then(data => {
        if (data.chairman_image) {
          setChairmanImage(data.chairman_image);
        }
      })
      .catch(err => console.error('Error fetching config:', err));
  }, []);

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
            <span className="text-white/60">Chairman's Message</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Chairman's <span className="text-accent">Message</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Message from the Chairman of Charutar Vidya Mandal (CVM) — Er. Bhikhubhai B. Patel.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="section-container py-12 sm:py-16">
        <div className="card !p-8 sm:!p-12 border border-border shadow-soft bg-surface space-y-10">
          
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Chairman Portrait */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                className="card !p-0 overflow-hidden relative border border-border shadow-sm aspect-[4/5] group"
              >
                <img 
                  src={chairmanImage} 
                  alt="Er. Bhikhubhai B. Patel" 
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                />
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-surface/90 backdrop-blur-md px-4 py-3 rounded-xl shadow border border-border">
                    <h3 className="text-primary font-bold text-xs">Er. Bhikhubhai B. Patel</h3>
                    <p className="text-secondary font-bold text-[8px] uppercase tracking-wider mt-0.5">Chairman, CVM</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Message Header & Welcome Quote */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full text-[9px] font-bold text-secondary uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Message from Chairman's Desk
              </div>
              
              <div className="relative pl-6 border-l-2 border-secondary/40">
                <p className="text-sm sm:text-base font-bold italic text-primary leading-relaxed">
                  "Our guiding principle is constant change, motivation and upgradation, creating state-of-the-art knowledge infrastructure for our students, instilling in them the ability to learn so that they can face any challenge anywhere in the world."
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-sm font-bold text-secondary uppercase tracking-wider">Welcome</h2>
                <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-semibold">
                  <p>
                    Education is the harmonious development of physical, mental, spiritual, and social faculties. It is the process of awakening the thirst for knowledge and kindling the inquisitive spirit that leads to the overall development of students. We, at Vallabh Vidyanagar, have inherited the great spirit of our pioneers to carry their legacy forward, the legacy of imparting education that prepares students intellectually for a mature life.
                  </p>
                  <p>
                    An effective educational system should have a holistic approach that prepares students for the workforce and takes optimum advantage of the rich opportunities offered by the business community. To keep pace with the ever-evolving challenges and trends in the world, our curriculum is designed in response to the needs of the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Content Sections */}
          <div className="grid lg:grid-cols-2 gap-10 pt-8 border-t border-border/80 text-xs sm:text-sm text-muted font-semibold leading-relaxed">
            <div className="space-y-4 p-6 bg-background rounded-xl border border-border">
              <p>
                Today, when government is heavily burdened with the task of funding higher education, self-financed institutions serve as a great antidote. The demand for professional education has risen steeply in the last few years. This cannot be met fully by state-funded or state-aided institutions alone. This is why a new category of private, self-financing institutions has registered a phenomenal growth. 
              </p>
              <p>
                The responsibility of imparting quality education has been imbibed from great visionaries like <span className="text-primary font-bold">Shri Bhaikaka, Shri Bhikhabhai, and Shri H. M. Patel</span>, the founders of Vallabh Vidyanagar. The present Vallabh Vidyanagar owes its transformation and vogue to these great visionaries who strived hard to bring about a sea change in the life of the rural people.
              </p>
            </div>

            <div className="space-y-4 p-6">
              <p>
                SEMCOM is one of the colleges in Gujarat to have the embellishment of ISO 9001:2008 Certificate. It has received the prestigious national award <span className="text-primary font-bold">"Best College for Entrepreneurship Education"</span> for the academic year 2008-2009. The greatest triumph is being <span className="text-primary font-bold">Re-Accredited Grade 'A' by NAAC</span>.
              </p>
              <p>
                From the coming year, SEMCOM is offering Advanced Diploma in Global Business to all students pursuing their courses. The focal point of SEMCOM is to impart quality education in the fields of Commerce, Management, Information Technology, and E-Business.
              </p>
              <p className="pt-4 italic border-t border-border text-primary font-bold">
                The serene and stirring environment of Vallabh Vidyanagar is very much conducive to scholastic and erudite pursuits. I heartily welcome you to this center of academic brilliance.
              </p>
            </div>
          </div>

          {/* Signature Area */}
          <div className="pt-8 border-t border-border flex flex-col items-end">
            <div className="text-right">
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider">Er. Bhikhubhai B. Patel</h4>
              <p className="text-muted font-bold text-[9px] uppercase tracking-wider mt-0.5">Chairman</p>
              <p className="text-secondary font-bold text-[9px] uppercase tracking-wider">Charutar Vidya Mandal</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
