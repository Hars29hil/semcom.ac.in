import React from 'react';
import { motion } from 'motion/react';
import { FileText, Award, Download, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">AICTE Section</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            AICTE <span className="text-accent">Section</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            All India Council for Technical Education compliance, approvals, and quality assurance framework records for SEMCOM.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Main Content Side */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-secondary uppercase tracking-wider">
                <Building2 size={16} />
                <span>Institutional Approval</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">Council Approval Records</h2>
              <p className="text-sm text-muted leading-relaxed font-medium">
                SEMCOM maintains strict adherence to the standards and guidelines set by the All India Council for Technical Education (AICTE). Below are the official Letters of Approval (LOA) and compliance reports.
              </p>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
               {reports.map((report, i) => (
                  <motion.div
                    key={report.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  >
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shadow-sm shrink-0">
                          <FileText size={22} />
                       </div>
                       <div>
                          <h3 className="text-sm sm:text-base font-bold text-primary">{report.name}</h3>
                          <div className="flex items-center gap-3 mt-1 text-[10px] font-bold text-muted uppercase tracking-wider">
                             <span className="text-secondary bg-secondary/10 px-2 py-0.5 rounded">Official Document</span>
                             <span>{report.size} • {report.type}</span>
                          </div>
                       </div>
                    </div>
                    
                    <a 
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto !py-2.5 !px-6 !text-xs shrink-0"
                    >
                       <Download size={14} />
                       <span>Download</span>
                    </a>
                  </motion.div>
               ))}
            </div>
          </div>

          {/* Quality Assurance Sidebar */}
          <div className="card !p-8 bg-surface border border-border">
             <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm">
                <Award size={20} />
             </div>
             <h3 className="text-lg font-bold text-primary mb-4 pb-3 border-b border-border/80">Quality Assurance</h3>
             <p className="text-muted text-xs leading-relaxed font-semibold mb-6">
               Our commitment to maintaining AICTE standards ensures the highest level of technical education.
             </p>
             <ul className="space-y-3.5">
                {standards.map((s) => (
                   <li key={s} className="flex items-center gap-3 text-xs font-semibold text-primary">
                      <CheckCircle2 size={15} className="text-secondary shrink-0" />
                      <span>{s}</span>
                   </li>
                ))}
             </ul>
          </div>

        </div>
      </div>

      {/* Footer Branding Area */}
      <div className="bg-surface border-t border-border py-10">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
           <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-accent shadow-sm">
                 <ShieldCheck size={20} />
              </div>
              <div>
                 <p className="text-sm font-bold text-primary">AICTE Approved</p>
                 <p className="text-[9px] font-bold text-secondary uppercase tracking-widest">Technically Accredited Institution</p>
              </div>
           </div>
           <p className="text-[9px] font-bold text-muted uppercase tracking-wider">Institutional Transparency • Regulatory Alignment</p>
        </div>
      </div>
    </div>
  );
}
