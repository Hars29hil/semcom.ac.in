import { motion } from 'motion/react';
import { Calendar, ArrowRight, Image as ImageIcon, Bell, FileText, ChevronRight, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

// API Configuration as per architecture summary
const API_BASE_URL = "http://localhost:5000/api";
const ADMIN_TOKEN = "mysecret123";

export default function NewsSection() {
  const [pressNotes, setPressNotes] = useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { "Authorization": ADMIN_TOKEN };

        // Fetch Press Notes
        const pressRes = await fetch(`${API_BASE_URL}/news/press-notes`, { headers });
        const pressData = await pressRes.json();
        console.log('Press Data received:', pressData);
        if (pressData.success) {
          console.log('Setting press notes:', pressData.data);
          setPressNotes(pressData.data.slice(0, 4));
        }

        // Fetch Upcoming Events
        const eventRes = await fetch(`${API_BASE_URL}/events`, { headers });
        const eventData = await eventRes.json();
        if (eventData.success) {
          // Format event data to match UI needs (day, month)
          const formattedEvents = eventData.data.slice(0, 3).map((e: any) => {
            const d = new Date(e.date);
            return {
              day: d.getDate().toString().padStart(2, '0'),
              month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
              title: e.name || e.title
            };
          });
          setUpcomingEvents(formattedEvents);
        }

        // Fetch Announcements
        const announceRes = await fetch(`${API_BASE_URL}/news/announcements`, { headers });
        const announceData = await announceRes.json();
        if (announceData.success) setAnnouncements(announceData.data.slice(0, 4));

      } catch (error) {
        console.error("Failed to fetch news data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
              {pressNotes.length > 0 ? (
                pressNotes.map((note, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-6 group cursor-pointer"
                    onClick={() => {
                      console.log('Image clicked:', note.image_url);
                      if (note.image_url) window.open(note.image_url, '_blank');
                    }}
                  >
                    <div className="flex-shrink-0 w-16 h-20 bg-[#1E3A8A] rounded-2xl flex flex-col items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
                      <span className="text-2xl font-black leading-none">{note.day}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">{note.month}</span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-base font-black text-[#0F172A] leading-tight group-hover:text-[#1E3A8A] transition-colors line-clamp-2">
                        {note.title}
                      </h3>
                      {note.image_url && (
                        <div className="mt-2 w-full h-24 rounded-xl overflow-hidden bg-gray-100 border border-brand-border/50 group-hover:shadow-md transition-shadow">
                           <img src={note.image_url} alt={note.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="flex items-center gap-2 mt-3 text-[10px] font-bold text-[#475569] uppercase tracking-widest opacity-60">
                        <ImageIcon size={12} className="text-[#0D9488]" />
                        Click to view full image
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-brand-subtext/60 italic font-bold">Waiting for media updates...</p>
              )}
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

            <div className="bg-white/50 backdrop-blur-md p-8 rounded-[3rem] border border-white/40 shadow-2xl shadow-brand-primary/5 space-y-8 min-h-[300px]">
              {loading ? (
                <div className="flex justify-center p-12"><Loader2 className="animate-spin text-brand-secondary" /></div>
              ) : (
                upcomingEvents.map((event, idx) => (
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
                ))
              )}
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
               <div className="space-y-4">
                  {loading ? (
                    <div className="flex justify-center p-12"><Loader2 className="animate-spin text-brand-primary/40" /></div>
                  ) : (
                    announcements.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group cursor-pointer hover:border-brand-secondary transition-all hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                             {item.type === 'file' ? <FileText size={20} /> : <Bell size={20} />}
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
                    ))
                  )}
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
        <button className="bg-red-500 text-white font-black uppercase tracking-[0.2em] text-sm py-8 px-4 rounded-l-3xl shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-all [writing-mode:vertical-lr] flex items-center gap-4 group">
          APPLY NOW
          <ChevronRight className="rotate-90 group-hover:translate-y-2 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
