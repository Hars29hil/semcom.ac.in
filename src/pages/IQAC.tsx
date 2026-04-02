import React from 'react';
import { motion } from 'motion/react';
import { Target, Settings, ShieldCheck, FileText, Users, Award, ExternalLink } from 'lucide-react';

const objectives = [
  'To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.',
  'To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.',
];

const functions = [
  'Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution;',
  'Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process;',
  'Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes;',
  'Dissemination of information on various quality parameters of higher education;',
  'Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles;',
  'Documentation of the various programmes/activities leading to quality improvement;',
  'Acting as a nodal agency of the institution for coordinating quality-related activities, including adoption and dissemination of best practices;',
  'Development and maintenance of institutional database through MIS for the purpose of maintaining /enhancing the institutional quality;',
  'Development of Quality Culture in the institution;',
  'Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC.',
];

const benefits = [
  'Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement;',
  'Ensure internalization of the quality culture;',
  'Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices;',
  'Provide a sound basis for decision-mking to improve institutional functioning;',
  'Act as a dynamic system for quality changes in HEIs;',
  'Build an organized methodology of documentation and internal communication.',
];

const teamData = [
  {
    category: 'IQAC Team',
    years: ['2022-23', '2021-22', '2020-21', '2019-20', '2018-19', '2017-18', '2016-17', '2015-16', '2014-15']
  },
  {
    category: 'NAAC Team',
    years: ['2022-23', '2021-22', '2020-21', '2019-20', '2018-19', '2017-18', '2016-17', '2014-15']
  },
  {
    category: 'AQAR',
    years: ['2017-18', '2016-17', '2015-16', '2013-14', '2012-13', '2011-12', '2010-11']
  }
];

export default function IQAC() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1c2e5a]/85 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
          alt="IQAC Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-teal-500/20 backdrop-blur-md rounded-full border border-teal-500/30 text-teal-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            Excellence & Quality Control
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-tight leading-tight"
          >
            Internal Quality Assurance Cell <span className="text-teal-400 font-serif">(IQAC)</span>
          </motion.h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-8 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* Objective Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-xs">
              <Target size={20} />
              <span>Core Mandate</span>
            </div>
            <h2 className="text-4xl font-serif font-black text-[#1c2e5a] uppercase leading-tight">
              Primary Aim <br/><span className="text-gray-400">of IQAC</span>
            </h2>
            <div className="space-y-6">
              {objectives.map((obj, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-1.5 h-auto bg-teal-500/20 group-hover:bg-teal-500 transition-colors rounded-full shrink-0" />
                  <p className="text-gray-600 font-medium leading-relaxed italic">{obj}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-teal-600/5 rounded-[2rem] blur-2xl" />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
              alt="Strategy" 
              className="relative rounded-3xl shadow-2xl border border-white"
            />
          </motion.div>
        </section>

        {/* Functions Section */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
             <div className="inline-flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-xs">
                <Settings size={20} className="animate-spin-slow" />
                <span>Operational Framework</span>
             </div>
             <h2 className="text-4xl font-serif font-black text-[#1c2e5a] uppercase">Key Functions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {functions.map((func, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-100 transition-all flex gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 font-black text-xs shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">{func}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#1c2e5a] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1 space-y-6">
                 <ShieldCheck size={48} className="text-teal-400" />
                 <h2 className="text-4xl font-serif font-black uppercase tracking-tight">Institutional <br/>Benefits</h2>
                 <p className="text-indigo-200/80 font-medium">Internalizing a culture of quality contributes significantly to the long-term success of every stakeholder.</p>
              </div>
              
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="space-y-3 group">
                     <div className="w-10 h-1 bg-teal-400/30 group-hover:w-full transition-all duration-500" />
                     <p className="text-sm font-medium leading-relaxed text-indigo-100">{benefit}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Records & Documents Section */}
        <section className="space-y-16 pb-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 pb-8">
              <div className="space-y-4">
                 <div className="inline-flex items-center gap-3 text-teal-600 font-black uppercase tracking-[0.2em] text-xs">
                    <FileText size={20} />
                    <span>Archives & Documentation</span>
                 </div>
                 <h2 className="text-4xl font-serif font-black text-[#1c2e5a] uppercase">Reports & Teams</h2>
              </div>
              <p className="max-w-md text-sm text-gray-500 font-medium">Access historical data of IQAC activities, NAAC preparations, and Annual Quality Assurance Reports.</p>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {teamData.map((section) => (
                <div key={section.category} className="space-y-6">
                   <div className="flex items-center gap-3">
                      {section.category.includes('Team') ? <Users className="text-teal-600" size={20} /> : <Award className="text-indigo-600" size={20} />}
                      <h3 className="font-serif font-black text-xl text-[#1c2e5a] uppercase tracking-wider">{section.category}</h3>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      {section.years.map((year) => (
                        <button 
                          key={year}
                          className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 text-[11px] font-black text-gray-400 uppercase tracking-widest hover:border-teal-500 hover:text-teal-600 hover:shadow-lg transition-all"
                        >
                          {section.category === 'AQAR' ? `AQAR ${year}` : `${section.category} ${year}`}
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100" />
                        </button>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>

      {/* Footer Branding */}
      <div className="bg-[#1c2e5a] py-8 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-500/50">Internal Quality Assurance Cell • SEMCOM</p>
      </div>
    </div>
  );
}
