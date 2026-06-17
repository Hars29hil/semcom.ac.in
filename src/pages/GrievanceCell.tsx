import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Scale, FileText, ExternalLink, Info, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GrievanceCell() {
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
            <span className="text-white/60">Grievance Cell</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            SC / ST / OBC <span className="text-accent">Grievance Cell</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Committed to guaranteeing social justice, institutional integrity, and a harassment-free academic campus.
          </p>
        </div>
      </div>

      {/* Main content grid */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
                <ShieldAlert size={14} />
                <span>Cell Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
                Eradicating Caste-Based Discrimination
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-semibold">
                <p>The Charutar Vidya Mandal University has constituted a grievance cell to eradicate any kind of caste-based discrimination pertaining to students, teachers, and non-teaching staff belonging to Scheduled Castes, Scheduled Tribes, and Other Backward Classes.</p>
                <p>The cell proactively addresses academic and non-academic issues related to formal complaints received from students/teachers or non-teaching staff in reserved categories.</p>
              </div>

              {/* Action Box */}
              <div className="card !p-8 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white space-y-6 relative overflow-hidden shadow-soft">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white">Formal Resolution Process</h3>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Submit your grievance via official Google Form</p>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow shrink-0"
                  >
                    <span>Submit Complaint</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Gujarati Section */}
            <div className="card !p-8 border border-border shadow-sm bg-surface space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1 bg-secondary h-6 rounded-full shrink-0" />
                <h3 className="font-bold text-sm text-primary">SC/ST/OBC ફરિયાદ સેલ, CVMU</h3>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-medium">
                <p>ચારુતર વિદ્યા મંડળ યુનિવર્સિટીએ અનુસૂચિત જાતિ, અનુસૂચિત જનજાતિ અને અન્ય પછાત વર્ગના વિદ્યાર્થીઓ, શિક્ષકો અને બિન-શૈક્ષણિક કર્મચારીઓને લગતા કોઈપણ પ્રકારના જાતિ-આધારિત ભેદભાવને નાબૂદ કરવા માટે ફરિયાદ સેલની રચના કરી છે.</p>
                <p>આ સેલ અનામત વર્ગોમાં વિદ્યાર્થીઓ/શિક્ષકો અથવા બિન-શિક્ષણ કર્મચારીઓ તરફથી મળેલી ફરિયાદો સંબંધિત શૈક્ષણિક અને બિન-શૈક્ષણિક મુદ્દાઓને સંબોધે છે.</p>
              </div>
              <div className="pt-2">
                <button className="text-secondary font-bold text-xs flex items-center gap-1.5 hover:text-primary transition-colors">
                  <span>ફરિયાદ કરવા માટે અહીંયા કલીક કરો</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>

          </div>

          {/* Sidebar Guidelines */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="card !p-6 border border-border shadow-sm bg-surface space-y-6">
              <div>
                <h4 className="font-bold text-xs text-primary uppercase tracking-wider">Process Highlights</h4>
                <p className="text-[9px] font-bold text-secondary uppercase tracking-wider mt-0.5">Validated Resolution</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Validation of all details by the cell',
                  'Resolution communicated directly to the plaintiff',
                  'Strict confidentiality of the identity',
                  'Time-bound grievance redressal'
                ].map((step) => (
                  <li key={step} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                    <span className="text-[11px] font-semibold text-muted leading-tight">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card !p-6 bg-secondary/10 border border-secondary/20 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Info size={16} />
                <h4 className="font-bold text-xs uppercase tracking-wider">Jurisdiction Note</h4>
              </div>
              <p className="text-[10px] font-semibold text-muted leading-relaxed">
                Please note that the scope of the SC/ST/OBC Grievance Cell and the complaint form is confined to caste-based discrimination of the students, teachers, and non-teaching staff at the Charutar Vidya Mandal University only.
              </p>
            </div>

            <div className="card !p-5 border border-border border-dashed flex items-center gap-3 text-muted">
              <HeartHandshake size={24} className="text-secondary shrink-0" />
              <p className="text-[9px] font-bold uppercase tracking-wider">Commitment to a Harassment-Free Campus</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
