import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, ClipboardList, ExternalLink, Phone, UserRound, Globe2 } from 'lucide-react';

const committeeMembers = [
  { sr: 1, designation: 'Chairperson', name: 'Dr. Vijay Makwana', details: 'Professor, Electrical Department, GCET', mobile: '9825783644' },
  { sr: 2, designation: 'Senior Professor', name: 'Dr. Shveta Joshi', details: 'Head of Chemical Science Department, NVPAS', mobile: '9898120706' },
  { sr: 3, designation: 'In-charge of Internal Complaint Committee', name: 'Dr. Harshaben Patel', details: 'Principal, IICP', mobile: '9099063123' },
  { sr: 4, designation: 'Coordinator/Director of IQAC', name: 'Dr. Mukesh Bulsara', details: 'IQAC Coordinator, CVMU', mobile: '9925520330' },
  { sr: 5, designation: 'SC/ST Representative (Male)', name: 'Dr. Bhagirath Prajapati', details: 'Associate Professor and I/C Head, Computer Department, ADIT', mobile: '9824337174' },
  { sr: 6, designation: 'SC/ST Representative (Female)', name: 'Prof. Manisha Makwana', details: 'Assistant Professor, Mechanical Department, ADIT', mobile: '9904237847' },
  { sr: 7, designation: 'OBC Representative', name: 'Dr. Pravin Prajapati', details: 'Head of EC Department, ADIT', mobile: '9429367045' },
  { sr: 8, designation: 'Assistant Registrar/ Administrative Officer', name: 'Shri Bansi Barot', details: 'OSD, CVMU', mobile: '7567944333' },
  { sr: 9, designation: 'Male Student Representative (SC)', name: 'Sutariya Sujal Balvantbhai', details: 'Enrollment No.: 12302080501055 (IT)', mobile: '9898117352' },
  { sr: 10, designation: 'Female Student Representative (SEBC)', name: 'Dodiya Shreya Nileshbhai', details: 'Enrollment No.: 12302110501047 (IOT)', mobile: '9824363456' },
];

export default function SEDGCell() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc]">
      {/* Hero Banner */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1c2e5a]">
        <div className="absolute inset-0 bg-[#1c2e5a]/85 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070" 
          alt="Inclusivity" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-teal-500/20 backdrop-blur-md rounded-full border border-teal-500/30 text-teal-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8"
          >
            <ShieldCheck size={16} />
            Equal Opportunity • Inclusive Campus
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-black text-white uppercase tracking-tight"
          >
            SEDGs <span className="text-teal-400">Cell</span>
          </motion.h1>
          <p className="text-indigo-200/60 font-medium tracking-[0.2em] mt-6 text-sm uppercase">Socio-Economically Disadvantaged Groups Cell</p>
          <div className="w-32 h-1 bg-teal-500 mx-auto mt-10 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32 w-full">
        {/* About & Mission */}
        <section className="grid lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-[10px]">
                  <Globe2 size={16} />
                  <span>Establishment Focus</span>
               </div>
               <h2 className="text-4xl font-serif font-black text-[#1c2e5a] uppercase leading-tight">SEDG Cell Launch <br/><span className="text-gray-400">Mission</span></h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
              <p>The Charutar Vidya Mandal University (CVMU) has constituted SEDGs (Socio-Economically Disadvantaged Groups) Cell to ensure that students belonging to various diverse backgrounds of community, religion, region, gender or ability are not deprived of their basic opportunities.</p>
              <p>This cell aims to organize seminars, workshops, guest lectures, activities, and awareness programmes to promote inclusive policies and practices for all and to look into the grievances to ensure equality and equal opportunities to the disadvantaged group on campus.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-teal-100 shadow-xl shadow-teal-900/5 space-y-6 border-l-8 border-l-teal-500">
               <h3 className="text-lg font-serif font-black text-[#1c2e5a] uppercase tracking-tight">Grievance Redressal</h3>
               <p className="text-sm text-gray-500 font-bold uppercase tracking-widest leading-loose">Submit complaints related to discrimination via the official Google Form link below.</p>
               <a 
                 href="https://forms.gle/L6zqzXcM6pAFSQcp6" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 px-8 py-4 bg-[#1c2e5a] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-teal-600 transition-all shadow-lg hover:-translate-y-1"
               >
                 Complaint Form
                 <ExternalLink size={14} />
               </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 space-y-8"
          >
            <div className="space-y-2">
               <h3 className="text-2xl font-serif font-black text-[#1c2e5a] uppercase tracking-tighter">SEDGs સેલ, CVMU</h3>
               <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Gujarati Translation</p>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed font-medium text-sm">
               <p>ચારુતર વિદ્યા મંડળ યુનિવર્સિટી (CVMU) એ SEDGs (સામાજિક-આર્થિક રીતે વંચિત જૂથો) સેલની રચના કરી છે તે સુનિશ્ચિત કરવા માટે કે સમુદાય, ધર્મ, પ્રદેશ, લિંગ અથવા ક્ષમતાના વિવિધ પૃષ્ઠભૂમિ સાથે જોડાયેલા વિદ્યાર્થીઓ તેમની મૂળભૂત તકોથી વંચિત ન રહે.</p>
               <p>આ સેલનો હેતુ બધા માટે સમાવેશી નીતિઓ અને પ્રથાઓને પ્રોત્સાહન આપવા અને નીતિઓના યોગ્ય અમલીકરણ દ્વારા કેમ્પસમાં વંચિત જૂથને સમાનતા અને સમાન તકો સુનિશ્ચિત કરવા ફરિયાદો પર ધ્યાન આપવા માટે સેમિનાર, વર્કશોપનું આયોજન કરવાનો છે.</p>
               <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Note: The scope of the SEDGs Cell and the complaint form is confined to the SEDGs students at the Charutar Vidya Mandal University only.</p>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Committee Section */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 pb-10">
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-[10px]">
                  <Users size={20} />
                  <span>Leadership & Oversight</span>
               </div>
               <h2 className="text-4xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">Committee Members</h2>
            </div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">CVMU SEDGs Cell Panel</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, i) => (
              <motion.div
                key={member.sr}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-500/20 transition-all group"
              >
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1c2e5a] group-hover:bg-[#1c2e5a] group-hover:text-white transition-all">
                       <UserRound size={24} />
                    </div>
                    <span className="text-[10px] font-black text-gray-300 group-hover:text-teal-500 transition-colors">#{member.sr}</span>
                 </div>
                 <div className="space-y-1 mb-6">
                    <h3 className="text-lg font-serif font-black text-[#1c2e5a] uppercase leading-tight">{member.name}</h3>
                    <p className="text-[9px] font-black text-teal-600 uppercase tracking-[0.2em]">{member.designation}</p>
                 </div>
                 <div className="pt-6 border-t border-gray-50 space-y-4">
                    <div className="flex gap-3">
                       <ClipboardList size={14} className="text-gray-300 shrink-0" />
                       <p className="text-[11px] font-medium text-gray-500 italic leading-snug">{member.details}</p>
                    </div>
                    <div className="flex items-center gap-3">
                       <Phone size={14} className="text-teal-500 shrink-0" />
                       <p className="text-[11px] font-black text-[#1c2e5a] tracking-widest">{member.mobile}</p>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Branding */}
      <div className="bg-[#1c2e5a] py-12 px-6 text-center">
         <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-serif font-black text-white uppercase tracking-tight">Dedicated to Inclusivity</h3>
            <p className="text-indigo-200/60 text-[10px] font-black uppercase tracking-[0.3em]">SEDGs Cell • CVM University • Excellence through Diversity</p>
         </div>
      </div>
    </div>
  );
}
