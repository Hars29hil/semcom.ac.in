import React from 'react';
import { motion } from 'motion/react';

export default function AboutSemcom() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=2070" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-black text-white uppercase tracking-widest"
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-12">
        <div className="bg-white border-2 border-teal-600/30 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-teal-900/5">
          <h2 className="text-2xl md:text-3xl font-serif font-black text-[#1c2e5a] mb-10 border-b-2 border-teal-600/10 pb-4 inline-block">
            Welcome to SEMCOM (The Charutar Vidya Mandal (CVM) University)
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Image Section */}
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1986" 
                  alt="SEMCOM Building" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Text Content Section */}
            <div className="lg:w-2/3 space-y-6 text-gray-600 leading-relaxed font-medium">
              <p>
                SEMCOM, a college of <span className="text-[#1c2e5a] font-bold">The Charutar Vidya Mandal (CVM) University</span>, was established in the year 1997 by Charutar Vidya Mandal, with a vision of social engineering, innovation, and value inculcation through education.
              </p>
              
              <p>SEMCOM offers unique learning opportunities through its:</p>

              <div className="grid md:grid-cols-2 gap-8 mt-4">
                {/* UG Programs */}
                <div>
                  <h3 className="text-[#1c2e5a] font-black uppercase text-sm mb-3 tracking-wider">UG PROGRAMS</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>BBA (Information Technology Management) (Hons.)</li>
                    <li>BBA (Hons.)</li>
                    <li>BCA</li>
                    <li>BCom (Hons.)</li>
                  </ul>
                  
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-[#1c2e5a] font-black uppercase text-sm tracking-wider">NEW UG PROGRAMS</h3>
                      <span className="bg-red-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded leading-none">NEW</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm">
                      <li>BBA-Business Analytics</li>
                      <li>BBA-Digital Marketing</li>
                    </ul>
                  </div>
                </div>

                {/* PG & Doctoral Programs */}
                <div>
                  <h3 className="text-[#1c2e5a] font-black uppercase text-sm mb-3 tracking-wider">PG PROGRAM</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>MCom</li>
                  </ul>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-[#1c2e5a] font-black uppercase text-sm tracking-wider">NEW PG PROGRAMS</h3>
                      <span className="bg-red-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded leading-none">NEW</span>
                    </div>
                    <p className="text-xs font-bold text-gray-800 mb-2 italic">Master of Business Administration (Dual Specialization)</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm">
                      <li>Business Analytics and Data Science</li>
                      <li>FinTech and InsurTech</li>
                      <li>HR Analytics and Entrepreneurship & Startups</li>
                      <li>Operation Management and Logistics, Supply Chain Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-[#1c2e5a] font-black uppercase text-sm mb-3 tracking-wider">DOCTORAL STUDIES AND RESEARCH PROGRAM</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>Ph.D.</li>
                </ul>
              </div>

              <p className="text-sm mt-8 border-l-4 border-teal-600 pl-4 py-2 bg-teal-50/50 rounded-r-xl">
                Within a short span of two decades, SEMCOM has carved a niche in the hearts of thousands of young minds who have proudly spread the values and ethos of 'The Charutar' region of Gujarat across the world. SEMCOM, by sharpening business acumen and developing professional aptitude among students, aims at societal regeneration in particular and nation-building at large.
              </p>

              <p className="text-sm font-bold text-[#1c2e5a]">
                The college is accredited with ‘A’ grade by NAAC in two consecutive cycles (2009-2020) and has been the recipient of 3 Stars under Gujarat State Institutional Ranking Framework in the year 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
