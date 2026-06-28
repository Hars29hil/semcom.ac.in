import React from 'react';
import { motion } from 'motion/react';
import { Target, Settings, ShieldCheck, FileText, Users, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  'Provide a sound basis for decision-making to improve institutional functioning;',
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
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">IQAC</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Internal Quality Assurance Cell <span className="text-accent">(IQAC)</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Consistently evaluating, planning, and enhancing academic standards to drive structural excellence.
          </p>
        </div>
      </div>

      {/* Objective Section */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Target size={14} />
              <span>Core Mandate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">
              Primary Aim of IQAC
            </h2>
            <div className="space-y-4">
              {objectives.map((obj, i) => (
                <div key={i} className="flex gap-3 items-stretch">
                  <div className="w-1 bg-secondary rounded-full shrink-0" />
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-medium italic">{obj}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card !p-0 overflow-hidden relative border border-border shadow-soft aspect-[1.4]">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
                alt="Strategy" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Functions Section */}
      <div className="bg-surface py-12 sm:py-16 border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Settings size={14} className="animate-spin-slow" />
              <span>Operational Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Key Functions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {functions.map((func, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="p-4 bg-background border border-border rounded-xl flex gap-3 shadow-sm hover:border-secondary transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center text-secondary font-bold text-xs shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-xs font-semibold text-primary leading-relaxed">{func}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="section-container py-12 sm:py-16">
        <div className="card !p-8 sm:!p-12 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white relative overflow-hidden shadow-soft">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-4">
              <ShieldCheck size={36} className="text-accent" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Institutional Benefits</h2>
              <p className="text-white/70 text-xs sm:text-sm font-semibold leading-relaxed">
                Internalizing a culture of quality contributes significantly to the long-term success of every stakeholder.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="w-8 h-0.5 bg-accent/30 group-hover:w-full transition-all duration-500" />
                  <p className="text-xs text-white/80 font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Records & Documents Section */}
      <div className="bg-surface py-12 sm:py-16 border-t border-border">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-6 border-b border-border mb-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider">
                <FileText size={16} />
                <span>Archives & Documentation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Reports & Teams</h2>
            </div>
            <p className="max-w-xs text-[10px] font-bold text-muted uppercase tracking-wider leading-relaxed">Access historical data of IQAC activities, NAAC preparations, and AQAR papers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((section) => (
              <div key={section.category} className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  {section.category.includes('Team') ? <Users className="text-secondary" size={16} /> : <Award className="text-secondary" size={16} />}
                  <h3 className="font-bold text-xs text-primary uppercase tracking-wider">{section.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {section.years.map((year) => (
                    <button 
                      key={year}
                      className="flex items-center justify-between p-2.5 bg-background border border-border rounded-lg text-[9px] font-bold text-muted uppercase tracking-wider hover:border-secondary hover:text-secondary transition-all shadow-sm"
                    >
                      <span>{section.category === 'AQAR' ? `AQAR ${year}` : `${section.category} ${year}`}</span>
                      <ExternalLink size={10} className="shrink-0 ml-1.5" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
