import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  Lightbulb, 
  Tv, 
  Plane, 
  Camera, 
  Leaf, 
  Music,
  Trophy,
  Users,
  Calendar,
  Sparkles,
  ChevronRight,
  Target
} from 'lucide-react';

const events = [
  { 
    id: 'bbic', 
    name: 'Business Idea Contest', 
    icon: Lightbulb, 
    tagline: 'Fostering Entrepreneurial Mindset',
    description: 'The concept of entrepreneurship encompasses a mindset involving risk-taking, ingenuity, leadership, and persistence. At SEMCOM, we develop Entrepreneurial Thinking, focusing on opportunity-driven ventures.',
    stats: [
      { label: 'Founded', value: '2003' },
      { label: 'Prize Pool', value: '₹2 Lacs+' },
      { label: 'Scale', value: 'University Level' }
    ],
    bbic2024: {
      highlights: '13 teams from 8 colleges competed in the 2024 edition, hosted by SEMCOM under CVMUISC.',
      winners: ['Agastya (Swoosh-Ecowash) - SEMCOM', 'Shri Saga Gluten Free Diet - NVPAS', 'Haath Kaala - SMAID'],
      prize: '₹15,000 each'
    }
  },
  { id: 'ad-making', name: 'Ad-Making Contest', icon: Tv, tagline: 'Creativity Unleashed' },
  { id: 'edu-tour', name: 'International Tour', icon: Plane, tagline: 'Global Exposure' },
  { id: 'photography', name: 'Smart-Eye Photography', icon: Camera, tagline: 'Capturing Moments' },
  { id: 'green-business', name: 'Green Business', icon: Leaf, tagline: 'Sustainable Future' },
  { id: 'navratri', name: 'Ratri B4 Navratri', icon: Music, tagline: 'Cultural Vibrance' }
];

export default function MegaEvents() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop" 
            alt="Event background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary font-black uppercase tracking-[0.5em] text-xs mb-6 block">Legacy of Excellence</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-6 italic">
              Mega <span className="text-secondary">Events</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto border-t border-white/10 pt-6">
              Empowering students through high-impact competitions, cultural showcases, and global immersion programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs / Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm overflow-x-auto">
        <div className="container mx-auto px-6">
          <div className="flex gap-12 whitespace-nowrap py-8">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event)}
                className={`flex items-center gap-3 font-black uppercase tracking-widest text-[10px] transition-all pb-1 border-b-2 ${
                  activeEvent.id === event.id 
                  ? 'text-primary border-primary scale-110' 
                  : 'text-gray-400 border-transparent hover:text-primary'
                }`}
              >
                <event.icon size={16} />
                {event.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-2 gap-20 items-start"
            >
              {/* Left Column - Information */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-4 text-secondary">
                    <Sparkles size={24} />
                    <span className="font-black uppercase tracking-widest text-sm">{activeEvent.tagline}</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-serif font-black text-primary leading-tight italic">
                    {activeEvent.name}
                  </h2>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {activeEvent.description || "Building future leaders through collaborative learning, creative problem solving, and real-world application of academic concepts."}
                </p>

                {activeEvent.stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {activeEvent.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                        <div className="text-2xl font-black text-primary mb-1">{stat.value}</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeEvent.bbic2024 && (
                  <div className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-3xl font-serif font-black mb-6 italic decoration-secondary decoration-4 underline underline-offset-8">BBIC 2024 Results</h3>
                      <p className="mb-8 text-gray-300 leading-relaxed">{activeEvent.bbic2024.highlights}</p>
                      
                      <div className="space-y-4 mb-10">
                        {activeEvent.bbic2024.winners.map((winner, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm font-bold bg-white/5 p-4 rounded-xl border border-white/10">
                            <Trophy size={16} className="text-secondary" />
                            {winner}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-8">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Total Prize Won</div>
                          <div className="text-2xl font-black text-secondary">{activeEvent.bbic2024.prize}</div>
                        </div>
                        <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-secondary transition-colors">
                          Full Report <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                    {/* Background Icon */}
                    <Target className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
                  </div>
                )}
              </div>

              {/* Right Column - Visuals */}
              <div className="grid grid-cols-2 gap-6 h-fit sticky top-48">
                <div className="col-span-2 rounded-[3rem] overflow-hidden h-[400px] shadow-2xl">
                  <img 
                    src={activeEvent.id === 'bbic' ? 'https://images.unsplash.com/photo-1591115765373-520b7a2d765b?q=80&w=2070' : 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070'} 
                    className="w-full h-full object-cover" 
                    alt="Event main head"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden h-[250px] shadow-lg">
                  <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070" className="w-full h-full object-cover" alt="Event detail 1" />
                </div>
                <div className="rounded-[2rem] overflow-hidden h-[250px] shadow-lg">
                  <img src="https://images.unsplash.com/photo-1528605248644-14dd04cb11c1?q=80&w=2070" className="w-full h-full object-cover" alt="Event detail 2" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Community / Impact Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-sm mb-10 text-primary">
            <Users size={40} />
          </div>
          <h3 className="text-4xl font-serif font-black text-primary italic mb-6">More Than Just a Competition</h3>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl mx-auto">
            These mega events are designed to push students beyond the classroom, encouraging persistence, determination, and the audacity to think differently.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center gap-3">
              <Calendar className="text-secondary" />
              <span className="font-black uppercase tracking-widest text-xs">Annual Tradition</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="text-secondary" />
              <span className="font-black uppercase tracking-widest text-xs">Innovation Driven</span>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="text-secondary" />
              <span className="font-black uppercase tracking-widest text-xs">Cash Rewards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
