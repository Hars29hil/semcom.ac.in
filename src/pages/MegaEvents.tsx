import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Trophy,
  Users,
  Calendar,
  Target,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "/api";

export default function MegaEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [activeEvent, setActiveEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const headers = { "Authorization": "mysecret123" };
        const res = await fetch(`${API_BASE_URL}/events`, { headers });
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setEvents(data.data);
          setActiveEvent(data.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <span className="section-label">Legacy of Excellence</span>
            <h2>Mega <span className="text-secondary">Events</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Empowering students through high-impact competitions, cultural showcases, and global immersion programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="section-container">
          {loading ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="animate-spin text-secondary w-12 h-12" />
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-20 bg-surface rounded-2xl border border-border">
              <AlertCircle size={48} className="mx-auto text-muted mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-text mb-2">No Mega Events Scheduled</h3>
              <p className="text-muted max-w-md mx-auto">Check back later for updates on our upcoming mega events and competitions.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-4 space-y-4">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setActiveEvent(event)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      activeEvent?.id === event.id 
                      ? 'bg-primary border-primary text-white shadow-md' 
                      : 'bg-surface border-border text-text hover:border-secondary/50'
                    }`}
                  >
                    <h4 className="font-bold">{event.title || event.name}</h4>
                    {event.date && (
                      <p className={`text-sm mt-1 ${activeEvent?.id === event.id ? 'text-white/80' : 'text-muted'}`}>
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    )}
                  </button>
                ))}
              </div>

              {/* Event Detail View */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {activeEvent && (
                    <motion.div
                      key={activeEvent.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-surface rounded-2xl border border-border overflow-hidden"
                    >
                      {activeEvent.image_url && (
                        <div className="w-full h-64 md:h-80 overflow-hidden">
                          <img src={activeEvent.image_url} alt={activeEvent.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      
                      <div className="p-8 space-y-8">
                        <div>
                          <h2 className="text-3xl font-bold text-text">{activeEvent.title || activeEvent.name}</h2>
                          {activeEvent.location && (
                            <p className="text-secondary font-medium mt-2">{activeEvent.location}</p>
                          )}
                        </div>

                        <p className="text-muted leading-relaxed whitespace-pre-line text-lg">
                          {activeEvent.description}
                        </p>

                        <button 
                          onClick={() => navigate(`/events/${activeEvent.id}`)}
                          className="btn-primary"
                        >
                          View Full Details
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Community / Impact Section */}
      <section className="section-padding bg-surface border-t border-border">
        <div className="section-container text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-2xl mb-8 text-primary border border-primary/10">
            <Users size={32} />
          </div>
          <h3 className="text-3xl font-bold text-text mb-4">More Than Just a Competition</h3>
          <p className="text-lg text-muted leading-relaxed mb-10 max-w-3xl mx-auto">
            These mega events are designed to push students beyond the classroom, encouraging persistence, determination, and the audacity to think differently.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Calendar className="text-secondary" />
              <span className="font-bold text-sm text-text">Annual Tradition</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="text-secondary" />
              <span className="font-bold text-sm text-text">Innovation Driven</span>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="text-secondary" />
              <span className="font-bold text-sm text-text">Cash Rewards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
