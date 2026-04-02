import React from 'react';
import { motion } from 'motion/react';
import { FileText, Award, Download, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AICTE() {
  const reports = [
    { name: 'LOA Report 2024-25', size: '2.4 MB', type: 'PDF', url: 'https://semcom.ac.in/download/2025/AICTE/LOA_Report2024-25.pdf' },
  ];

  const standards = [
    'Technical Education Quality Standards',
    'Faculty-Student Ratio Compliance',
    'Infrastructure Safety Certification',
    'Academic Regulation Alignment',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Official Header */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1c2e5a]">
        <div className="absolute inset-0 bg-[#1c2e5a]/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=2070" 
          alt="Technical Education" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-8"
          >
            <ShieldCheck size={14} className="text-teal-400" />
            Regulatory Compliance
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-black text-white uppercase tracking-tighter"
          >
            AICTE <span className="text-teal-400">Section</span>
          </motion.h1>
          <p className="text-indigo-200/60 font-medium tracking-[0.2em] mt-6 text-sm uppercase">All India Council for Technical Education</p>
          <div className="w-32 h-1 bg-teal-500 mx-auto mt-10 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content Side */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <div className="inline-flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-xs">
                <Building2 size={20} />
                <span>Institutional Approval</span>
              </div>
              <h2 className="text-4xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">Council Approval Records</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                SEMCOM maintains strict adherence to the guidelines and standards set by the All India Council for Technical Education (AICTE). Below are the official Letters of Approval (LOA) and compliance reports.
              </p>
            </section>

            {/* Reports List */}
            <div className="space-y-4">
               {reports.map((report, i) => (
                  <motion.div
                    key={report.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-teal-500/30 hover:bg-white hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-[#1c2e5a] text-white flex items-center justify-center shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                          <FileText size={28} />
                       </div>
                       <div>
                          <h3 className="text-xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">{report.name}</h3>
                          <div className="flex items-center gap-4 mt-2">
                             <span className="text-[10px] font-black uppercase tracking-widest text-[#0b807b] px-2 py-0.5 bg-teal-50 rounded-full">Official Document</span>
                             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{report.size} • {report.type}</span>
                          </div>
                       </div>
                    </div>
                    <a 
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 sm:mt-0 px-8 py-3 bg-[#1c2e5a] text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-teal-600 transition-colors shadow-lg shadow-[#1c2e5a]/10"
                    >
                       <Download size={14} />
                       Download
                    </a>
                  </motion.div>
               ))}
            </div>
          </div>

          {/* Sidebar / Quality Assurance */}
          <div className="lg:col-span-1">
             <div className="bg-[#1c2e5a] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
                <Award size={40} className="text-teal-400 mb-8" />
                <h3 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">Quality Assurance</h3>
                <p className="text-indigo-200/80 text-sm font-medium mb-10 leading-relaxed uppercase tracking-wider">
                  Our commitment to maintaining AICTE standards ensures the highest level of technical education.
                </p>
                <ul className="space-y-4">
                   {standards.map((s) => (
                      <li key={s} className="flex items-center gap-3 text-xs font-bold tracking-wide group">
                         <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                         <span className="group-hover:translate-x-1 transition-transform">{s}</span>
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="bg-gray-50 border-t border-gray-100 py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1c2e5a] rounded-xl flex items-center justify-center text-white">
               <Award size={24} />
            </div>
            <div>
               <p className="text-[14px] font-serif font-black text-[#1c2e5a] uppercase">AICTE Approved</p>
               <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Technically Accredited Institution</p>
            </div>
         </div>
         <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">Institutional Transparency • Regulatory Alignment</p>
      </div>
    </div>
  );
}
