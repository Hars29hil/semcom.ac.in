import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowLeft, Share2, Bookmark, Loader2, GraduationCap, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events/${id}`);
        const data = await res.json();
        if (data.success) {
          setEvent(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch event:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 size={40} className="animate-spin text-brand-secondary" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4">
        <h2 className="text-2xl font-black text-brand-primary">Event Not Found</h2>
        <Link to="/student/events" className="btn-primary">Back to Events</Link>
      </div>
    );
  }

  // Format date
  const eventDate = event.date ? new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : "Date TBD";


  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={event.image_url || "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070"} 
          className="w-full h-full object-cover"
          alt={event.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-secondary transition-colors text-xs font-black uppercase tracking-widest">
                <ArrowLeft size={16} /> All Events
              </Link>
              <h1 className="text-4xl md:text-7xl font-serif font-black text-white italic leading-tight">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-white/90">
                <div className="flex items-center gap-3 font-bold text-sm">
                  <Calendar className="text-brand-secondary" size={20} />
                  {eventDate}
                </div>
                <div className="flex items-center gap-3 font-bold text-sm">
                  <MapPin className="text-brand-secondary" size={20} />
                  {event.location || "SEMCOM Campus"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <div className="prose prose-xl max-w-none">
              <h2 className="text-3xl font-black text-brand-primary italic mb-8">About the <span className="text-brand-secondary">Event</span></h2>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {event.description}
              </p>
            </div>

            {event.highlights && (
              <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
                <h3 className="text-2xl font-black text-brand-primary italic mb-8">Event Highlights</h3>
                <ul className="grid md:grid-cols-1 gap-6">
                  {event.highlights.split('\n').filter((h: string) => h.trim()).map((h: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start text-gray-600 font-medium italic">
                      <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                      </div>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.schedule && (
              <div className="space-y-8">
                <h3 className="text-2xl font-black text-brand-primary italic">At a <span className="text-brand-secondary">Glance</span></h3>
                <div className="bg-white rounded-[2rem] p-10 border-2 border-brand-primary/5 shadow-xl">
                   <div className="whitespace-pre-line text-gray-600 font-medium italic leading-loose">
                     {event.schedule}
                   </div>
                </div>
              </div>
            )}

            {event.committee && (
              <div className="space-y-12">
                <h3 className="text-2xl font-black text-brand-primary italic">Committee <span className="text-brand-secondary">Hub</span></h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {(typeof event.committee === 'string' ? JSON.parse(event.committee) : event.committee).map((member: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                            <GraduationCap size={28} />
                          </div>
                          <span className="px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-[10px] font-black uppercase tracking-widest">
                            {member.role || "Member"}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-xl font-black text-brand-primary italic group-hover:text-brand-secondary transition-colors truncate">
                            {member.name}
                          </h4>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-tight mt-1">
                            SEMCOM Institutional Body
                          </p>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-gray-50">
                          <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-secondary transition-colors">
                            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                              <Mail size={14} />
                            </div>
                            <span className="text-sm font-bold truncate">{member.email || "N/A"}</span>
                          </a>
                          <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-secondary transition-colors">
                            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                              <Phone size={14} />
                            </div>
                            <span className="text-sm font-bold">{member.phone || "N/A"}</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-brand-primary p-10 rounded-[3rem] text-white space-y-8 sticky top-32 shadow-2xl">
              <h3 className="text-2xl font-black italic">Interested?</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Registration is open for all SEMCOM students and relevant departments.
              </p>
              <button className="w-full bg-brand-secondary text-white font-black uppercase py-5 rounded-2xl hover:scale-105 transition-transform tracking-widest text-xs">
                Register for Event
              </button>
              <div className="flex justify-between items-center pt-8 border-t border-white/10">
                <button className="flex items-center gap-2 text-xs font-bold hover:text-brand-secondary transition-colors">
                  <Share2 size={16} /> Share
                </button>
                <button className="flex items-center gap-2 text-xs font-bold hover:text-brand-secondary transition-colors">
                  <Bookmark size={16} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
