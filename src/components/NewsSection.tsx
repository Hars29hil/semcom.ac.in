import { motion } from 'motion/react';
import { Calendar, ArrowRight, Bell, FileText, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "/api";
const ADMIN_TOKEN = "mysecret123";

export default function NewsSection() {
  const [pressNotes, setPressNotes] = useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
          setPressNotes(pressData.data.slice(0, 3));
        }

        // Fetch Upcoming Events
        const eventRes = await fetch(`${API_BASE_URL}/events`, { headers });
        const eventData = await eventRes.json();
        if (eventData.success) {
          const formattedEvents = eventData.data.slice(0, 3).map((e: any) => {
            const d = new Date(e.date);
            return {
              id: e.id,
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
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="section-label">Latest Updates</span>
          <h2>News & <span className="text-secondary">Announcements</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Press Notes */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h3 className="!text-lg font-semibold">Press Notes</h3>
            </div>

            <div className="space-y-3">
              {pressNotes.length > 0 ? (
                pressNotes.map((note, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex gap-4 group cursor-pointer items-center p-3 rounded-xl hover:bg-surface hover:shadow-card transition-all duration-300"
                    onClick={() => navigate(`/news/press-note/${note.id || idx}`)}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex flex-col items-center justify-center text-white group-hover:bg-secondary transition-colors duration-300">
                      <span className="text-lg font-bold leading-none">{note.day}</span>
                      <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5 opacity-70">{note.month}</span>
                    </div>
                    <h4 className="text-sm font-medium text-text leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                      {note.title}
                    </h4>
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-muted py-4">Waiting for updates...</p>
              )}
            </div>

            <button onClick={() => navigate('/news/press-notes')} className="btn-outline w-full !text-xs">
              View All Press Notes
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="w-1 h-6 bg-secondary rounded-full" />
              <h3 className="!text-lg font-semibold">Upcoming Events</h3>
            </div>

            <div className="bg-surface p-5 rounded-xl border border-border space-y-4 min-h-[220px]">
              {loading ? (
                <div className="flex justify-center py-12"><Loader2 className="animate-spin text-secondary" size={24} /></div>
              ) : (
                upcomingEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex gap-4 group cursor-pointer items-center"
                    onClick={() => navigate(`/events/${event.id || idx}`)}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-secondary/8 rounded-xl flex flex-col items-center justify-center text-secondary border border-secondary/15 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <span className="text-lg font-bold leading-none">{event.day}</span>
                      <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">{event.month}</span>
                    </div>
                    <h4 className="text-sm font-medium text-text leading-snug group-hover:text-secondary transition-colors">
                      {event.title}
                    </h4>
                  </motion.div>
                ))
              )}
            </div>

            <button className="btn-outline w-full !text-xs">
              View All Events
              <Calendar size={14} />
            </button>
          </div>

          {/* Circulars & Announcements */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <h3 className="!text-lg font-semibold">Circulars</h3>
            </div>

            <div className="space-y-3">
              {loading ? (
                <div className="flex justify-center py-12"><Loader2 className="animate-spin text-muted" size={24} /></div>
              ) : (
                announcements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex gap-3 items-center p-3 bg-surface rounded-xl border border-border group cursor-pointer hover:border-secondary/30 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-background rounded-lg flex items-center justify-center text-muted group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                      {item.type === 'file' ? <FileText size={16} /> : <Bell size={16} />}
                    </div>
                    <h4 className="text-[13px] font-medium text-text line-clamp-2 leading-snug group-hover:text-secondary transition-colors">
                      {item.title}
                    </h4>
                  </motion.div>
                ))
              )}
            </div>

            <button className="btn-outline w-full !text-xs">
              View All Announcements
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
