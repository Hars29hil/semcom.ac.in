import { motion } from 'motion/react';
import { Calendar, ArrowRight, Image as ImageIcon, Bell, FileText, ChevronRight } from 'lucide-react';

const pressNotes = [
  { day: '14', month: 'MAR', title: '304 teams participated in Hackathon 4.0 in Vidhanagar' },
  { day: '14', month: 'MAR', title: 'Hackathon held in CVM University' },
  { day: '14', month: 'MAR', title: 'A project to store hydrogen at low cost using plastic and cold temperatures' },
  { day: '23', month: 'JAN', title: 'CVM University Cadets Selected for Republic Day Camp (RDC) 2' },
];

const upcomingEvents = [
  { day: '04', month: 'APR', title: 'Interdisciplinary Research Symposium' },
  { day: '25', month: 'APR', title: 'ADIT Alumni Meet-2026 at Baroda' },
  { day: '25', month: 'JUN', title: 'International conference at ADIT - ICSSSD-2026' },
];

const announcements = [
  { title: 'List of Holidays - 2026', date: '02 Feb 2026', id: 1 },
  { title: 'Academic Calender', date: '02 Feb 2026', id: 2 },
  { title: 'Academic Calendar 2025-26', date: '12 Dec 2025', id: 3 },
  { title: 'Circular: Mandatory Internship Submission for Final Year Students', date: '02 Feb 2026', id: 4 },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-brand-bg relative overflow-hidden px-6 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Press Notes */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-black text-brand-primary tracking-tight">Press Notes</h2>
              <div className="h-1.5 w-20 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(30,58,138,0.3)]" />
            </div>
            
            <div className="space-y-6">
              {pressNotes.map((note, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-16 h-20 bg-brand-primary rounded-2xl flex flex-col items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-2xl font-black leading-none">{note.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">{note.month}</span>
                  </div>
                  <div className="space-y-2 py-1">
                    <h3 className="text-base font-black text-brand-text leading-tight group-hover:text-brand-primary transition-colors line-clamp-3">
                      {note.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-subtext uppercase tracking-widest opacity-60">
                      <ImageIcon size={12} className="text-brand-secondary" />
                      Click to view image
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ x: 5 }}
              className="px-8 py-4 border-2 border-brand-primary/20 rounded-2xl text-brand-primary font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              View All Press Notes
              <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-black text-brand-primary tracking-tight">Upcoming Events</h2>
              <div className="h-1.5 w-16 bg-brand-secondary rounded-full shadow-[0_0_15px_rgba(20,184,166,0.3)]" />
            </div>

            <div className="bg-white/50 backdrop-blur-md p-8 rounded-[3rem] border border-white/40 shadow-2xl shadow-brand-primary/5 space-y-8">
              {upcomingEvents.map((event, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-primary/10 rounded-2xl flex flex-col items-center justify-center text-brand-primary border border-brand-primary/10 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <span className="text-xl font-black leading-none">{event.day}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest mt-1">{event.month}</span>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-base font-black text-brand-text leading-tight group-hover:text-brand-secondary transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ x: 5 }}
              className="px-8 py-4 border-2 border-brand-primary/20 rounded-2xl text-brand-primary font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              View All Events
            </motion.button>
          </div>

          {/* Circulars & Announcements */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-black text-brand-primary tracking-tight">Circulars & Announcements</h2>
              <div className="h-1.5 w-24 bg-brand-primary/40 rounded-full" />
            </div>

            <div className="space-y-4 relative">
               {/* Vertical Accent Line */}
               {/* <div className="absolute left-[-1.5rem] top-0 bottom-0 w-1.5 bg-brand-secondary/40 rounded-full" /> */}
               
               <div className="space-y-4">
                  {announcements.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group cursor-pointer hover:border-brand-secondary transition-all hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                           {idx % 2 === 0 ? <Bell size={20} /> : <FileText size={20} />}
                        </div>
                        <div className="space-y-1 flex-grow">
                          <h3 className="text-[15px] font-black text-brand-text line-clamp-2 leading-snug group-hover:text-brand-primary">
                            {item.title}
                          </h3>
                          <p className="text-[10px] font-bold text-brand-subtext uppercase tracking-widest opacity-60">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            <motion.button 
              whileHover={{ x: 5 }}
              className="px-8 py-4 border-2 border-brand-primary/20 rounded-2xl text-brand-primary font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              View All Announcements
            </motion.button>
          </div>

        </div>
      </div>

      {/* Sticky Apply Now Side Button */}
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[100]"
      >
        <a 
          href="https://www.ecvm.net/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-red-500 text-white font-black uppercase tracking-[0.2em] text-sm py-8 px-4 rounded-l-3xl shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-all [writing-mode:vertical-lr] flex items-center gap-4 group"
        >
          APPLY NOW
          <ChevronRight className="rotate-90 group-hover:translate-y-2 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
