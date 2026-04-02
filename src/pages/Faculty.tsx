import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, GraduationCap, Award, BookOpen, Briefcase, MapPin, Loader2, X, History, User2, Users } from 'lucide-react';

interface Achievement {
  id: number;
  achievement_type: string;
  title: string;
  details: string;
  achievement_year: string;
}

export default function Faculty() {
   const [facultyMembers, setFacultyMembers] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
   const [selectedFaculty, setSelectedFaculty] = useState<any | null>(null);
   const [experience, setExperience] = useState<any[]>([]);
   const [achievements, setAchievements] = useState<Achievement[]>([]);
   const [loadingExp, setLoadingExp] = useState(false);

  useEffect(() => {
    fetch('/api/faculty')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFacultyMembers(data.data.map((f: any) => ({
             ...f,
             image: f.image_url || `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400`,
             type: f.staff_type
          })));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleOpenDetails = async (member: any) => {
    setSelectedFaculty(member);
    setLoadingExp(true);
    try {
      const expRes = await fetch(`/api/faculty/${member.email}/experience`);
      const expData = await expRes.json();
      setExperience(expData || []);

      const achRes = await fetch(`/api/faculty/${member.email}/achievements`);
      const achData = await achRes.json();
      setAchievements(achData || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingExp(false);
    }
  };

  const staffTypes = [
    { id: 'Teaching', label: 'Teaching Faculty', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'Technical', label: 'Technical Staff', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'Admin', label: 'Administrative Staff', icon: <Award className="w-5 h-5" /> },
    { id: 'Support', label: 'Supportive Staff', icon: <Users size={20} className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1c2e5a]/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-[0.2em]"
          >
            OUR TEAM
          </motion.h1>
          <p className="text-teal-400 font-bold tracking-widest mt-4 uppercase text-sm">Dedication • Expertise • Excellence</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
        </div>
      </div>

      {loading ? (
        <div className="flex-grow flex flex-col items-center justify-center py-20 space-y-4">
           <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
           <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Loading Faculty Database...</p>
        </div>
      ) : staffTypes.map((type) => (
        <section key={type.id} className="py-16 px-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
            <div className="p-3 bg-teal-600 rounded-2xl text-white shadow-lg shadow-teal-600/20">
              {type.icon}
            </div>
            <h2 className="text-3xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">
              {type.label}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers
              .filter((m) => m.type === type.id)
              .map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  onClick={() => handleOpenDetails(member)}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="text-center pb-4 border-b border-gray-100">
                      <h3 className="text-lg font-serif font-black text-[#1c2e5a] uppercase tracking-tight truncate">
                        {member.name}
                      </h3>
                      <p className="text-[#0b807b] font-black text-[10px] uppercase tracking-widest mt-1">
                        {member.designation}
                      </p>
                    </div>

                    {member.type === 'Teaching' && (
                      <div className="space-y-3">
                        {member.qualification && (
                          <div className="flex gap-3">
                            <GraduationCap size={16} className="text-teal-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Qualification</p>
                              <p className="text-xs font-semibold text-gray-700 leading-tight">{member.qualification}</p>
                            </div>
                          </div>
                        )}
                        {member.area && (
                          <div className="flex gap-3">
                            <MapPin size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Area</p>
                              <p className="text-xs font-semibold text-gray-700 leading-tight">{member.area}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      ))}

      {/* Faculty Details Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0a1a3b]/95 backdrop-blur-3xl" onClick={() => setSelectedFaculty(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Photo & Info */}
              <div className="w-full md:w-[35%] bg-accent/30 p-10 flex flex-col items-center border-r border-gray-100">
                <div className="relative group/photo mb-8">
                  <div className="absolute inset-0 bg-teal-500/20 rounded-[2.5rem] blur-2xl" />
                  <img 
                    src={selectedFaculty.image} 
                    alt={selectedFaculty.name} 
                    className="relative w-48 h-60 object-cover rounded-[2.5rem] shadow-2xl border-8 border-white"
                  />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
                    <History size={24} />
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-serif font-black text-[#1c2e5a] uppercase italic">{selectedFaculty.name}</h2>
                  <p className="text-teal-600 font-black text-[10px] uppercase tracking-widest">{selectedFaculty.designation}</p>
                </div>

                <div className="w-full mt-10 space-y-5">
                   <div className="p-4 bg-white/50 rounded-2xl border border-gray-100">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Qualification</p>
                      <p className="text-xs font-bold text-[#1c2e5a]">{selectedFaculty.qualification}</p>
                   </div>
                   <div className="p-4 bg-white/50 rounded-2xl border border-gray-100">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Focus Area</p>
                      <p className="text-xs font-bold text-[#1c2e5a]">{selectedFaculty.area}</p>
                   </div>
                </div>

                <div className="mt-auto pt-6">
                  <a href={`mailto:${selectedFaculty.email}`} className="flex items-center gap-3 text-[#1c2e5a] font-black text-[10px] uppercase tracking-widest group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <Mail size={16} />
                    </div>
                    Reach Faculty
                  </a>
                </div>
              </div>

              {/* Right Side: Trajectory & Achievements */}
              <div className="w-full md:w-[65%] p-10 md:p-16 flex flex-col relative">
                <button onClick={() => setSelectedFaculty(null)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl hover:bg-gray-100"><X/></button>

                <div className="flex-grow overflow-y-auto pr-4 space-y-12">
                   {loadingExp ? (
                     <div className="h-full flex flex-col items-center justify-center gap-4">
                        <Loader2 className="animate-spin text-teal-600"/>
                        <p className="text-[10px] font-black uppercase text-gray-400">Loading Portfolio...</p>
                     </div>
                   ) : (
                     <>
                        <div className="space-y-8">
                           <h3 className="text-3xl font-serif font-black text-[#1c2e5a] italic tracking-tight">Professional <span className="text-teal-600">Trajectory</span>.</h3>
                           {experience.length === 0 ? (
                             <p className="text-sm text-gray-400 italic">No trajectory data recorded.</p>
                           ) : (
                             <div className="relative pl-8 space-y-8 border-l-2 border-teal-600/10">
                                {experience.map((exp, i) => (
                                  <div key={i} className="relative">
                                     <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-teal-600 shadow-lg"/>
                                     <div className="text-[9px] font-black text-teal-600 uppercase mb-1">{exp.years}</div>
                                     <h4 className="text-lg font-black text-[#1c2e5a]">{exp.role}</h4>
                                     <p className="text-xs uppercase font-black text-gray-400 mb-2">{exp.company}</p>
                                     <p className="text-sm text-gray-600 leading-relaxed font-medium">{exp.description}</p>
                                  </div>
                                ))}
                             </div>
                           )}
                        </div>

                        {achievements.length > 0 && (
                          <div className="space-y-8 pt-8 border-t border-gray-50">
                             <h4 className="text-xl font-serif font-black text-[#1c2e5a] italic tracking-tight"><span className="text-indigo-600">Academic</span> Portfolio.</h4>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {achievements.map((ach) => (
                                   <div key={ach.id} className="p-5 bg-accent/20 rounded-3xl border border-white hover:border-indigo-100 transition-all">
                                      <div className="text-[8px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-1">{ach.achievement_type}</div>
                                      <h5 className="font-bold text-[#1c2e5a] leading-tight mb-2">{ach.title}</h5>
                                      <div className="text-[10px] text-gray-400">{ach.details} • {ach.achievement_year}</div>
                                   </div>
                                ))}
                             </div>
                          </div>
                        )}
                     </>
                   )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
