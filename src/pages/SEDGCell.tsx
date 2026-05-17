import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, ClipboardList, ExternalLink, Phone, UserRound, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">SEDG Cell</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            SEDGs <span className="text-accent">Cell</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Socio-Economically Disadvantaged Groups Cell — Dedicated to establishing an inclusive, equal opportunity academic ecosystem.
          </p>
        </div>
      </div>

      {/* About & Translation section */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Globe2 size={14} />
              <span>Establishment Focus</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
              SEDG Cell Mission
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-medium">
              <p>The Charutar Vidya Mandal University (CVMU) has constituted the SEDGs (Socio-Economically Disadvantaged Groups) Cell to ensure that students belonging to various diverse backgrounds of community, religion, region, gender, or ability are not deprived of basic opportunities.</p>
              <p>This cell aims to organize seminars, workshops, guest lectures, activities, and awareness programs to promote inclusive policies and practices for all and to resolve grievances to ensure equality and equal opportunities to disadvantaged groups on campus.</p>
            </div>

            {/* Grievance Link Card */}
            <div className="card !p-6 border-l-4 border-l-secondary bg-surface shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-primary">Grievance Redressal</h3>
              <p className="text-xs text-muted leading-relaxed font-semibold">
                Submit complaints related to academic discrimination via the official grievance portal below.
              </p>
              <div className="pt-2">
                <a 
                  href="https://forms.gle/L6zqzXcM6pAFSQcp6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 !py-2.5 !px-5 !text-[10px]"
                >
                  <span>Complaint Form</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card !p-8 border border-border shadow-soft space-y-6 bg-surface"
          >
            <div>
              <h3 className="font-bold text-base text-primary">SEDGs સેલ, CVMU</h3>
              <p className="text-[9px] font-bold text-secondary uppercase tracking-wider mt-1">Gujarati Translation</p>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-medium">
              <p>ચારુતર વિદ્યા મંડળ યુનિવર્સિટી (CVMU) એ SEDGs (સામાજિક-આર્થિક રીતે વંચિત જૂથો) સેલની રચના કરી છે તે સુનિશ્ચિત કરવા માટે કે સમુદાય, ધર્મ, પ્રદેશ, લિંગ અથવા ક્ષમતાના વિવિધ પૃષ્ઠભૂમિ સાથે જોડાયેલા વિદ્યાર્થીઓ તેમની મૂળભૂત તકોથી વંચિત ન રહે.</p>
              <p>આ સેલનો હેતુ બધા માટે સમાવેશી નીતિઓ અને પ્રથાઓને પ્રોત્સાહન આપવા અને નીતિઓના યોગ્ય અમલીકરણ દ્વારા કેમ્પસમાં વંચિત જૂથને સમાનતા અને સમાન તકો સુનિશ્ચિત કરવા ફરિયાદો પર ધ્યાન આપવા માટે સેમિનાર, વર્કશોપનું આયોજન કરવાનો છે.</p>
              <div className="p-3.5 bg-background rounded-xl border border-dashed border-border mt-4">
                <p className="text-[10px] font-semibold text-muted leading-relaxed">
                  Note: The scope of the SEDGs Cell and the complaint form is confined to the SEDGs students at the Charutar Vidya Mandal University only.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Committee Section */}
      <div className="bg-surface py-12 sm:py-16 border-t border-border">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-6 border-b border-border mb-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
                <Users size={16} />
                <span>Leadership & Oversight</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Committee Members</h2>
            </div>
            <p className="text-[10px] font-bold text-muted uppercase tracking-wider">CVMU SEDGs Cell Panel</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, i) => (
              <motion.div
                key={member.sr}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="card border border-border shadow-sm bg-background flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-secondary border border-border">
                      <UserRound size={20} />
                    </div>
                    <span className="text-[9px] font-bold text-muted">#{member.sr}</span>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    <h3 className="font-bold text-sm text-primary leading-tight">{member.name}</h3>
                    <p className="text-[9px] font-bold text-secondary uppercase tracking-wider">{member.designation}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex gap-2">
                    <ClipboardList size={13} className="text-muted shrink-0 mt-0.5" />
                    <p className="text-[10px] font-semibold text-muted leading-snug">{member.details}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-secondary shrink-0" />
                    <p className="text-[10px] font-bold text-primary tracking-wider">{member.mobile}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
