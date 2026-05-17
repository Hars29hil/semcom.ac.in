import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutSemcom() {
  const [images, setImages] = useState({
    banner: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=2070",
    building: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1986"
  });

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        setImages(prev => ({
          banner: data.about_banner_image || prev.banner,
          building: data.about_building_image || prev.building
        }));
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
            <span className="text-white/60">About Us</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            About <span className="text-accent">SEMCOM</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Nurturing global competence, societal transformation, and academic leadership since 1997.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="section-container py-12 sm:py-16">
        <div className="card !p-8 sm:!p-12 border border-border shadow-soft bg-surface space-y-10">
          
          <h2 className="text-lg sm:text-xl font-bold text-primary pb-3 border-b border-border">
            Welcome to SEMCOM (The Charutar Vidya Mandal (CVM) University)
          </h2>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left Image Section */}
            <div className="lg:col-span-1">
              <div className="card !p-0 overflow-hidden relative border border-border shadow-sm aspect-[1.3] group">
                <img 
                  src={images.building} 
                  alt="SEMCOM Building" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Text Content Section */}
            <div className="lg:col-span-2 space-y-6 text-xs sm:text-sm text-muted leading-relaxed font-semibold">
              <p>
                SEMCOM, a constituent college of <span className="text-primary font-bold">The Charutar Vidya Mandal (CVM) University</span>, was established in the year 1997 by Charutar Vidya Mandal, with a vision of social engineering, innovation, and value inculcation through education.
              </p>
              
              <p className="text-primary font-bold">SEMCOM offers unique learning opportunities through its academic pathways:</p>

              <div className="grid sm:grid-cols-2 gap-8 pt-2">
                {/* UG Programs */}
                <div className="space-y-4">
                  <h3 className="text-primary font-bold uppercase tracking-wider text-[11px] pb-1 border-b border-border">UG PROGRAMS</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted">
                    <li>BBA (Information Technology Management) (Hons.)</li>
                    <li>BBA (Hons.)</li>
                    <li>BCA</li>
                    <li>BCom (Hons.)</li>
                  </ul>
                  
                  <div className="pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-primary font-bold uppercase tracking-wider text-[11px]">NEW UG PROGRAMS</h3>
                      <span className="bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">NEW</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted">
                      <li>BBA-Business Analytics</li>
                      <li>BBA-Digital Marketing</li>
                    </ul>
                  </div>
                </div>

                {/* PG & Doctoral Programs */}
                <div className="space-y-4">
                  <h3 className="text-primary font-bold uppercase tracking-wider text-[11px] pb-1 border-b border-border">PG PROGRAM</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted">
                    <li>MCom</li>
                  </ul>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-primary font-bold uppercase tracking-wider text-[11px]">NEW PG PROGRAMS</h3>
                      <span className="bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">NEW</span>
                    </div>
                    <p className="text-[10px] font-bold text-primary mb-2 italic">Master of Business Administration (Dual Specialization)</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted">
                      <li>Business Analytics and Data Science</li>
                      <li>FinTech and InsurTech</li>
                      <li>HR Analytics and Entrepreneurship & Startups</li>
                      <li>Operation Management and Logistics, Supply Chain Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-primary font-bold uppercase tracking-wider text-[11px] pb-1 border-b border-border/80 mb-2">DOCTORAL STUDIES AND RESEARCH PROGRAM</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted">
                  <li>Ph.D.</li>
                </ul>
              </div>

              <p className="text-xs border-l-4 border-secondary pl-4 py-2 bg-surface rounded-r-xl">
                Within a short span of two decades, SEMCOM has carved a niche in the hearts of thousands of young minds who have proudly spread the values and ethos of 'The Charutar' region of Gujarat across the world. SEMCOM, by sharpening business acumen and developing professional aptitude among students, aims at societal regeneration in particular and nation-building at large.
              </p>

              <p className="text-xs font-bold text-primary">
                The college is accredited with ‘A’ grade by NAAC in two consecutive cycles (2009-2020) and has been the recipient of 3 Stars under Gujarat State Institutional Ranking Framework in the year 2020.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
