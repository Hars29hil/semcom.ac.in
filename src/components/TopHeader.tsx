import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function TopHeader() {
  return (
    <div className="flex flex-col relative z-[110]">
      {/* Utility Bar */}
      <div className="bg-brand-primary text-white/90 py-2.5 px-6 md:px-12 flex items-center justify-between text-[10px] font-bold tracking-[0.15em] border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-brand-secondary" />
            <span className="uppercase">Vallabh Vidyanagar, Gujarat</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Globe size={12} className="text-brand-secondary" />
            <span className="uppercase whitespace-nowrap">CVM University Institution</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-5 mr-1">
             <a href="#" className="hover:text-white transition-colors">NIRF</a>
             <a href="#" className="hover:text-white transition-colors">IQAC</a>
             <a href="#" className="hover:text-white transition-colors">Alumni</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/SEMCOMIndia/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Facebook size={13} strokeWidth={2.5} /></a>
            <a href="https://www.instagram.com/semcomindia/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Instagram size={13} strokeWidth={2.5} /></a>
            <a href="#" className="hover:text-brand-secondary transition-colors"><Twitter size={13} strokeWidth={2.5} /></a>
            <a href="#" className="hover:text-brand-secondary transition-colors"><Youtube size={13} strokeWidth={2.5} /></a>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="bg-white py-6 px-6 md:px-12 flex flex-wrap items-center justify-between gap-10 border-b border-brand-border h-auto lg:h-[110px]">
        {/* Logo and Institution Name */}
        <div className="flex items-center gap-6 group">
          <Link to="/" className="relative">
            <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center shadow-[0_15px_35px_rgba(30,58,138,0.25)] group-hover:scale-105 transition-transform duration-500 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
               <span className="text-white font-heading font-black text-3xl italic relative z-10">S</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-brand-secondary rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
              <GraduationCap size={14} className="text-white" />
            </div>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-3xl font-heading font-black tracking-[-0.04em] text-brand-primary leading-none mb-2 italic">
              SEMCOM
            </h1>
            <p className="text-[9px] font-black text-brand-subtext/60 uppercase tracking-[0.25em] leading-tight max-w-[280px]">
              S.G.M. English Medium College of Commerce and Management
            </p>
          </div>
        </div>

        {/* Dynamic Info Blocks */}
        <div className="flex items-center gap-8 lg:gap-14 ml-auto">
          {/* Contact Details */}
          <div className="hidden xl:flex flex-col items-end gap-1.5 translate-y-1">
            <div className="flex items-center gap-2.5 text-brand-subtext font-bold text-[10px] tracking-widest group">
              <Mail size={14} className="text-brand-secondary group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-brand-primary transition-colors cursor-pointer border-b border-brand-border/0 hover:border-brand-secondary">principal.semcom@cvmu.edu.in</span>
            </div>
            <div className="flex items-center gap-2 text-brand-primary font-black text-sm tracking-tighter italic">
              <div className="w-5 h-5 rounded-full bg-brand-primary/5 flex items-center justify-center">
                <Phone size={11} fill="currentColor" stroke="none" className="text-brand-primary" />
              </div>
              <span>(+91) 6352135360</span>
            </div>
          </div>

          {/* Institutional Partner Nodes */}
          <div className="flex items-center gap-8 pl-8 border-l border-brand-border h-14">
            <div className="flex items-center gap-4 group">
               <div className="flex flex-col items-end leading-tight">
                 <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] group-hover:text-brand-secondary transition-colors">CVM University</span>
                 <span className="text-[8px] font-bold text-brand-subtext/50 uppercase tracking-[0.1em]">Parent Body</span>
               </div>
               <a 
                 href="https://cvmu.ac.in" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-14 h-14 rounded-2xl bg-slate-50 border border-brand-border p-2 group-hover:border-brand-primary/20 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all flex items-center justify-center overflow-hidden"
               >
                 <img src="/images/cvm-logo.png" alt="CVM University" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
               </a>
            </div>

            <Link to="/student/neev" className="flex items-center gap-4 group">
               <div className="flex flex-col items-end leading-tight">
                 <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] group-hover:text-brand-primary transition-colors">NEEV Cell</span>
                 <span className="text-[8px] font-bold text-brand-subtext/50 uppercase tracking-[0.1em]">Innovation Hub</span>
               </div>
               <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-brand-border p-2 group-hover:border-brand-secondary/20 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all flex items-center justify-center overflow-hidden">
                 <img src="/images/neev-logo.png" alt="NEEV Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
               </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icons for the header
function GraduationCap({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
