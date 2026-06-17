import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, Share2, Bookmark, Loader2, GraduationCap, Mail, Phone, Building2, Flag, Tag, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Fetch event using standard API path relative to origin
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 size={40} className="animate-spin text-secondary" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
        <Calendar size={64} className="text-muted mb-4 opacity-50" />
        <h2 className="text-2xl font-bold text-text">Event Not Found</h2>
        <Link to="/student/events" className="mt-6 btn-outline flex items-center gap-2">
           <ArrowLeft size={16} /> Back to Events
        </Link>
      </div>
    );
  }

  // Format dates
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  
  const eventDate = formatDate(event.date);
  const endDate = formatDate(event.end_date);
  const dateDisplay = endDate ? `${eventDate} - ${endDate}` : (eventDate || "Date TBD");

  let departmentsArray: string[] = [];
  if (event.departments) {
    try {
      departmentsArray = JSON.parse(event.departments);
    } catch {
      departmentsArray = [event.departments];
    }
  }

  let committeeMembers = [];
  try {
    if (event.committee) {
      committeeMembers = typeof event.committee === 'string' ? JSON.parse(event.committee) : event.committee;
    }
  } catch (e) {
    console.error("Failed to parse committee data", e);
  }

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Header */}
      <section className="section-padding bg-surface border-b border-border pb-8">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {event.title || event.name}
            </h2>
            
            <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-blue-400" />
                {dateDisplay}
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-red-400" />
                {event.location || "Location TBD"}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {departmentsArray.map((dept, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-slate-500 hover:bg-slate-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors cursor-default">
                  <Building2 size={16} />
                  {dept}
                </span>
              ))}
              
              {event.level && (
                <span className="inline-flex items-center gap-1.5 bg-[#0dcaf0] hover:bg-[#0bacce] text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors cursor-default">
                  <Flag size={16} />
                  {event.level}
                </span>
              )}
              
              {event.type && (
                <span className="inline-flex items-center gap-1.5 bg-[#ffc107] hover:bg-[#e0a800] text-slate-900 px-3 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors cursor-default">
                  <Tag size={16} />
                  {event.type}
                </span>
              )}

              <span className="inline-flex items-center gap-1.5 bg-[#0d6efd] text-white px-3 py-2 rounded-md text-sm font-bold shadow-sm cursor-default">
                <Calendar size={16} />
                {event.status || 'Upcoming'}
              </span>
              
              {event.registration_link && (
                <a href={event.registration_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[#dc3545] hover:bg-[#c82333] text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm transition-colors hover:shadow-md">
                  <UserPlus size={18} />
                  Register Now
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              {event.image_url && (
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-primary/5 border border-border shadow-sm">
                  <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-text mb-6">About the <span className="text-secondary">Event</span></h3>
                <p className="text-muted leading-relaxed text-lg whitespace-pre-line">
                  {event.description}
                </p>
              </div>

              {event.highlights && (
                <div className="bg-surface rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-text mb-6">Event Highlights</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {event.highlights.split('\n').filter((h: string) => h.trim()).map((h: string, i: number) => (
                      <li key={i} className="flex gap-3 items-start text-text font-medium text-sm">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.schedule && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-text">Objectives of the Event</h3>
                  <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm">
                     <div className="whitespace-pre-line text-muted font-medium leading-loose">
                       {event.schedule}
                     </div>
                  </div>
                </div>
              )}

              {committeeMembers.length > 0 && (
                <div className="space-y-8 pt-6">
                  <h3 className="text-2xl font-bold text-text">Committee <span className="text-secondary">Hub</span></h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {committeeMembers.map((member: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative p-6 rounded-2xl bg-surface border border-border hover:shadow-card transition-all overflow-hidden"
                      >
                        <div className="relative space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                              <GraduationCap size={24} />
                            </div>
                            {member.role && (
                              <span className="px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
                                {member.role}
                              </span>
                            )}
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-text truncate">
                              {member.name}
                            </h4>
                          </div>

                          {(member.email || member.phone) && (
                            <div className="space-y-2 pt-4 border-t border-border">
                              {member.email && (
                                <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-muted hover:text-primary transition-colors text-sm font-medium">
                                  <Mail size={16} />
                                  <span className="truncate">{member.email}</span>
                                </a>
                              )}
                              {member.phone && (
                                <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-muted hover:text-primary transition-colors text-sm font-medium">
                                  <Phone size={16} />
                                  <span>{member.phone}</span>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-surface p-8 rounded-2xl border border-border space-y-6 sticky top-28 shadow-sm">
                <h3 className="text-xl font-bold text-text">Interested?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Join us for this event. Stay tuned for registration details or follow the provided instructions.
                </p>
                {event.registration_link ? (
                  <a href={event.registration_link} target="_blank" rel="noopener noreferrer" className="w-full btn-primary !py-4 block text-center">
                    Register for Event
                  </a>
                ) : (
                  <button className="w-full btn-primary !py-4 opacity-50 cursor-not-allowed" disabled>
                    Registration Not Open
                  </button>
                )}
                <div className="flex justify-between items-center pt-6 border-t border-border">
                  <button className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors">
                    <Share2 size={16} /> Share
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors">
                    <Bookmark size={16} /> Save
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
