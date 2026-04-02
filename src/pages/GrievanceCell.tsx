import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Scale, FileText, ExternalLink, Info, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function GrievanceCell() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Institutional Hero */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1c2e5a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c2e5a]/90 to-[#1c2e5a] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070" 
          alt="Justice & Equality" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
        />
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-8"
          >
            <Scale size={16} className="text-teal-400" />
            Social Justice • Institutional Integrity
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-black text-white uppercase tracking-tighter"
          >
            SC / ST / OBC <br/><span className="text-teal-400">Grievance Cell</span>
          </motion.h1>
          <div className="w-48 h-1 bg-teal-500 mx-auto mt-10 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
         <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
               <section className="space-y-10">
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-[10px]">
                        <ShieldAlert size={18} />
                        <span>Cell Mandate</span>
                     </div>
                     <h2 className="text-4xl font-serif font-black text-[#1c2e5a] uppercase leading-tight tracking-tight">Eradicating <br/>Discrimination</h2>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium border-l-4 border-teal-500 pl-8">
                     <p>The Charutar Vidya Mandal University has constituted a grievance cell to eradicate any kind of caste-based discrimination pertaining to the students, teachers and non-teaching staff belonging to Scheduled Castes, Scheduled Tribes, and Other Backward Class.</p>
                     <p>The cell addresses academic and non-academic issues related to complaints received from the students/teachers or non-teaching staff in reserved categories.</p>
                  </div>

                  {/* Submit CTA */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-10 bg-[#1c2e5a] rounded-3xl text-white shadow-2xl relative overflow-hidden group"
                  >
                     <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-teal-500/20 transition-all" />
                     <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 text-center md:text-left">
                           <h3 className="text-2xl font-serif font-black uppercase tracking-tight">Formal Resolution Process</h3>
                           <p className="text-indigo-200/60 text-xs font-bold uppercase tracking-widest">Submit your grievance via official Google Form</p>
                        </div>
                        <a 
                          href="#" 
                          className="px-10 py-4 bg-teal-500 text-[#1c2e5a] rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl whitespace-nowrap"
                        >
                           Click Here To Submit Complaint
                        </a>
                     </div>
                  </motion.div>
               </section>

               {/* Gujarati Section */}
               <section className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-1 bg-teal-600 rounded-full" />
                     <h3 className="text-2xl font-serif font-black text-[#1c2e5a] uppercase">SC/ST/OBC ફરિયાદ સેલ, CVMU</h3>
                  </div>
                  <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                     <p>ચારુતર વિદ્યા મંડળ યુનિવર્સિટીએ અનુસૂચિત જાતિ, અનુસૂચિત જનજાતિ અને અન્ય પછાત વર્ગના વિદ્યાર્થીઓ, શિક્ષકો અને બિન-શૈક્ષણિક કર્મચારીઓને લગતા કોઈપણ પ્રકારના જાતિ-આધારિત ભેદભાવને નાબૂદ કરવા માટે ફરિયાદ સેલની રચના કરી છે.</p>
                     <p>આ સેલ અનામત વર્ગોમાં વિદ્યાર્થીઓ/શિક્ષકો અથવા બિન-શિક્ષણ કર્મચારીઓ તરફથી મળેલી ફરિયાદો સંબંધિત શૈક્ષણિક અને બિન-શૈક્ષણિક મુદ્દાઓને સંબોધે છે.</p>
                  </div>
                  <button className="text-xs font-black text-teal-600 uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                     ફરિયાદ કરવા માટે અહીંયા કલીક કરો
                     <ExternalLink size={14} />
                  </button>
               </section>
            </div>

            {/* Sidebar Guidelines */}
            <div className="lg:col-span-4 space-y-8">
               <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 space-y-8">
                  <div className="space-y-2">
                     <h4 className="text-lg font-serif font-black text-[#1c2e5a] uppercase tracking-tight">Process Highlights</h4>
                     <p className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em]">Validated Resolution</p>
                  </div>
                  <ul className="space-y-6">
                     {[
                       'Validation of all the facts by the cell',
                       'Resolution communicated directly to the plaintiff',
                       'Strict confidentiality of the identity',
                       'Time-bound grievance redressal'
                     ].map((step) => (
                       <li key={step} className="flex items-start gap-3 group">
                          <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-gray-500 uppercase leading-loose tracking-wide">{step}</span>
                       </li>
                     ))}
                  </ul>
               </div>

               <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100 space-y-4">
                  <div className="flex items-center gap-3 text-[#1c2e5a]">
                     <Info size={20} />
                     <h4 className="font-serif font-black uppercase text-sm tracking-tight">Jurisdiction Note</h4>
                  </div>
                  <p className="text-[11px] font-bold text-teal-900/60 leading-relaxed uppercase tracking-wider">
                     Please note that the scope of the SC/ST/OBC Grievance Cell and the complaint form is confined to caste-based discrimination of the students, teachers and non-teaching staff at the Charutar Vidya Mandal University only.
                  </p>
               </div>

               <div className="p-8 border-2 border-dashed border-gray-100 rounded-3xl flex items-center gap-4 text-gray-400 group">
                  <HeartHandshake size={32} className="group-hover:text-teal-500 transition-colors" />
                  <p className="text-[10px] font-black uppercase tracking-[0.1em]">Commitment to a Harassment-Free Campus</p>
               </div>
            </div>
         </div>
      </div>

      {/* Official Footing */}
      <div className="bg-[#1c2e5a] py-12 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-[#1c2e5a]">
                  <Scale size={20} />
               </div>
               <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">CVM University • Institutional Ethics</p>
            </div>
            <p className="text-[10px] font-medium text-indigo-200/40 uppercase tracking-[0.2em]">Institutional Transparency • Regulatory Compliance • Social Equity</p>
         </div>
      </div>
    </div>
  );
}
