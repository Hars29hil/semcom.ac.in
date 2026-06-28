import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, GraduationCap, Award, BookOpen, Briefcase, MapPin, Loader2, X, History, Users, Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { API_BASE } from '@/lib/api';

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
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetch(`${API_BASE}/faculty`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFacultyMembers(data.data.map((f: any) => ({
            ...f,
            image: f.image_url || `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400`,
            type: f.staff_type || 'Teaching'
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
      const expRes = await fetch(`${API_BASE}/faculty/${member.email}/experience`);
      const expData = await expRes.json();
      setExperience(expData || []);

      const achRes = await fetch(`${API_BASE}/faculty/${member.email}/achievements`);
      const achData = await achRes.json();
      setAchievements(achData || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingExp(false);
    }
  };

  const staffTypes = [
    { id: 'all', label: 'All Directory', icon: <Users size={16} /> },
    { id: 'Teaching', label: 'Teaching Faculty', icon: <BookOpen size={16} /> },
    { id: 'Technical', label: 'Technical Staff', icon: <Briefcase size={16} /> },
    { id: 'Admin', label: 'Administrative Staff', icon: <Award size={16} /> },
    { id: 'Support', label: 'Supportive Staff', icon: <Users size={16} /> },
  ];

  // Filtering Logic
  const filteredMembers = facultyMembers.filter(member => {
    const matchesCategory = activeCategory === 'all' || member.type === activeCategory;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (member.qualification && member.qualification.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Banner Section — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Faculty Directory</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Our Faculty <span className="text-accent">Team</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Meet the academic collective of SEMCOM. Driven by research, expertise, and a commitment to nurturing future business and technology leaders.
          </p>
        </div>
      </div>

      {/* Directory Interface */}
      <div className="section-container py-12 sm:py-16">
        
        {/* Search and Category Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 pb-8 border-b border-border">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {staffTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveCategory(type.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === type.id
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-surface text-muted border border-border hover:border-secondary/20 hover:text-primary'
                }`}
              >
                {type.icon}
                {type.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input
              type="text"
              placeholder="Search faculty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-xl text-xs text-text focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all"
            />
          </div>
        </div>

        {/* Directory Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-secondary animate-spin" />
            <p className="text-muted text-xs font-semibold uppercase tracking-wider">Loading Directory database...</p>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="text-center py-20 text-muted italic text-sm">
            No faculty members found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.05, duration: 0.4 }}
                onClick={() => handleOpenDetails(member)}
                className="card group cursor-pointer flex flex-col overflow-hidden !p-0"
              >
                <div className="relative w-full aspect-[4/5] bg-surface overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1.5 bg-secondary text-white rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {member.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col items-center text-center bg-surface">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-4">
                    {member.name}
                  </h3>

                  <div className="space-y-1.5 mt-auto w-full">
                    {member.qualification && (
                      <p className="text-sm text-muted font-medium"><span className="text-primary font-semibold">Qualification:</span> {member.qualification}</p>
                    )}
                    {member.designation && member.designation.toLowerCase() !== 'admin' && (
                      <p className="text-sm text-muted font-medium"><span className="text-primary font-semibold">Designation:</span> {member.designation}</p>
                    )}
                    {member.area && (
                      <p className="text-sm text-muted font-medium"><span className="text-primary font-semibold">Area:</span> {member.area}</p>
                    )}
                  </div>

                  <div className="mt-6 pt-5 w-full border-t border-border/60 flex justify-center">
                    <div className="flex items-center gap-2 text-xs font-bold text-secondary group-hover:text-secondary-hover transition-colors">
                      <span>View Academic Profile</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modern Details Modal Overlay */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setSelectedFaculty(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl h-full max-h-[85vh] bg-surface rounded-2xl shadow-soft overflow-hidden flex flex-col md:flex-row border border-border"
            >
              {/* Left Column: Profile Card */}
              <div className="w-full md:w-[35%] bg-background p-8 flex flex-col items-center border-r border-border overflow-y-auto">
                <div className="relative group mb-6 shrink-0">
                  <img 
                    src={selectedFaculty.image} 
                    alt={selectedFaculty.name} 
                    className="w-36 h-44 object-cover rounded-xl shadow-card border-4 border-surface"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center shadow">
                    <ShieldCheck size={16} />
                  </div>
                </div>
                
                <div className="text-center space-y-1">
                  <h2 className="text-lg font-bold text-primary">{selectedFaculty.name}</h2>
                  <p className="text-secondary font-semibold text-[10px] uppercase tracking-wider">{selectedFaculty.designation}</p>
                </div>

                <div className="w-full mt-8 space-y-4">
                  <div className="p-3.5 bg-surface rounded-xl border border-border">
                    <span className="text-[9px] font-bold text-muted uppercase tracking-wider block mb-1">Qualification</span>
                    <span className="text-xs font-semibold text-primary">{selectedFaculty.qualification}</span>
                  </div>
                  <div className="p-3.5 bg-surface rounded-xl border border-border">
                    <span className="text-[9px] font-bold text-muted uppercase tracking-wider block mb-1">Focus Area</span>
                    <span className="text-xs font-semibold text-primary">{selectedFaculty.area}</span>
                  </div>
                </div>

                <div className="mt-8 w-full">
                  <a 
                    href={`mailto:${selectedFaculty.email}`} 
                    className="btn-primary w-full !py-2.5 !text-xs"
                  >
                    <Mail size={14} />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Experience and Achievements */}
              <div className="w-full md:w-[65%] p-8 sm:p-12 flex flex-col relative overflow-hidden">
                {/* Close button */}
                <button 
                  onClick={() => setSelectedFaculty(null)} 
                  className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center bg-background border border-border rounded-lg text-muted hover:text-primary transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="flex-grow overflow-y-auto pr-2 space-y-10 custom-scrollbar">
                  {loadingExp ? (
                    <div className="h-full flex flex-col items-center justify-center gap-3 py-20">
                      <Loader2 className="animate-spin text-secondary" size={24} />
                      <p className="text-[10px] font-semibold uppercase text-muted tracking-wider">Loading Portfolio...</p>
                    </div>
                  ) : (
                    <>
                      {/* Experience Timeline */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-primary border-b border-border/80 pb-3">
                          Professional Experience
                        </h3>
                        {experience.length === 0 ? (
                          <p className="text-xs text-muted italic">No trajectory data recorded.</p>
                        ) : (
                          <div className="relative pl-6 space-y-6 border-l-2 border-border/60 ml-2">
                            {experience.map((exp, i) => (
                              <div key={i} className="relative">
                                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-secondary" />
                                <div className="text-[10px] font-semibold text-secondary mb-1">{exp.years}</div>
                                <h4 className="text-sm font-bold text-primary">{exp.role}</h4>
                                <p className="text-[10px] uppercase font-bold text-muted mb-2">{exp.company}</p>
                                <p className="text-xs text-muted leading-relaxed font-medium">{exp.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Academic Achievements */}
                      {achievements.length > 0 && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-semibold text-primary border-b border-border/80 pb-3">
                            Academic Portfolio & Achievements
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {achievements.map((ach) => (
                              <div key={ach.id} className="p-4 bg-background rounded-xl border border-border hover:border-secondary/20 transition-all">
                                <div className="text-[8px] font-black text-secondary uppercase tracking-widest mb-1">{ach.achievement_type}</div>
                                <h4 className="font-semibold text-primary text-xs leading-snug mb-1.5">{ach.title}</h4>
                                <p className="text-[10px] text-muted">{ach.details} • {ach.achievement_year}</p>
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
