import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  Leaf, 
  Heart, 
  BookOpen, 
  Tent, 
  Globe, 
  Users,
  Sprout,
  HeartHandshake,
  Wind,
  ShieldCheck,
  CalendarCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const extensionActivities = [
  {
    id: 'environment',
    name: 'World Environment Day',
    icon: Leaf,
    title: 'Plant for Planet Campaign',
    tagline: 'SEMCOM\'s Green Initiative 2025',
    description: 'On the occasion of World Environment Day 2025, SEMCOM launched its annual green initiative with a renewed focus on sustainability and community welfare. The campaign emphasizes the plantation of food-bearing saplings aimed at supporting local food resources and enhancing green cover.',
    highlights: [
      'Focus on food-bearing & nutritional saplings',
      'Community-centric afforestation approach',
      'Partnership with UNEP & NSS',
      'Commitment to combating climate change'
    ],
    stats: { label: 'Saplings Planted', value: '500+' }
  },
  { id: 'nss', name: 'National Service Scheme', icon: HeartHandshake, title: 'NSS Pillar of Service' },
  { id: 'bookworms', name: 'Bookworms\' Club', icon: BookOpen, title: 'Literary & Intellectual Growth' },
  { id: 'blood-donation', name: 'Blood Donation', icon: Heart, title: 'Gift of Life' },
  { id: 'tree-plantation', name: 'Tree Plantation', icon: Sprout, title: 'Greening the Future' },
  { id: 'nss-camp', name: 'NSS Annual Camp', icon: Tent, title: 'Rural Development Immersion' }
];

export default function ExtensionActivities() {
  const [activeTab, setActiveTab] = useState(extensionActivities[0]);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a3d62]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Nature backdrop"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 bg-secondary/20 w-fit px-6 py-2 rounded-full backdrop-blur-md mx-auto mb-8 border border-secondary/30">
              <Globe size={18} className="text-secondary animate-spin-slow" />
              <span className="text-secondary font-black text-xs uppercase tracking-[0.4em]">Service Above Self</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-6 italic">
              Extension <span className="text-secondary">Activities</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto border-t border-white/10 pt-8">
              Fostering a culture of social responsibility, environmental stewardship, and community welfare through student-led initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Navigation Grid */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {extensionActivities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setActiveTab(activity)}
                className={`p-6 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all group ${
                  activeTab.id === activity.id 
                  ? 'bg-primary text-white shadow-2xl scale-105' 
                  : 'bg-white text-gray-400 hover:text-primary hover:shadow-xl'
                }`}
              >
                <activity.icon size={24} className={activeTab.id === activity.id ? 'text-secondary' : 'group-hover:text-secondary'} />
                <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">
                  {activity.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="grid lg:grid-cols-5 gap-20 items-center"
            >
              {/* Left Side: Visual & Stats */}
              <div className="lg:col-span-2 space-y-12">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-gray-50 h-[500px]">
                  <img 
                    src={activeTab.id === 'environment' ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913' : 'https://images.unsplash.com/photo-1559027615-cd162c974340?q=80&w=2070'} 
                    alt="Activity visual"
                    className="w-full h-full object-cover"
                  />
                </div>
                {activeTab.stats && (
                  <div className="bg-secondary p-10 rounded-[3rem] text-primary flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-4xl">{activeTab.stats.value}</h4>
                      <p className="font-bold uppercase tracking-widest text-[10px] opacity-70">{activeTab.stats.label}</p>
                    </div>
                    <CalendarCheck size={40} className="opacity-20" />
                  </div>
                )}
              </div>

              {/* Right Side: Narrative */}
              <div className="lg:col-span-3 space-y-10">
                <div>
                  <div className="flex items-center gap-3 text-secondary mb-4">
                    <Sprout size={20} />
                    <span className="font-black uppercase tracking-widest text-xs">{activeTab.tagline || 'Community Outreach'}</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-serif font-black text-primary leading-tight italic">
                    {activeTab.title}
                  </h2>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {activeTab.description || "Our extension activities are designed to integrate social awareness with academic learning, encouraging students to actively contribute to the betterment of society."}
                </p>

                {activeTab.highlights ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {activeTab.highlights.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl border border-transparent hover:border-secondary transition-all group">
                        <div className="bg-white p-3 rounded-xl shadow-sm text-secondary">
                          <Wind size={18} />
                        </div>
                        <span className="font-bold text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-gray-50 rounded-full text-xs font-black uppercase tracking-widest text-primary border border-gray-100">Social Justice</div>
                    <div className="px-6 py-3 bg-gray-50 rounded-full text-xs font-black uppercase tracking-widest text-primary border border-gray-100">Environmental Awareness</div>
                    <div className="px-6 py-3 bg-gray-50 rounded-full text-xs font-black uppercase tracking-widest text-primary border border-gray-100">Humanitarian Aid</div>
                  </div>
                )}

                <div className="pt-8 flex flex-wrap gap-6">
                  <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all flex items-center gap-3 shadow-xl">
                    View Project Gallery <ChevronRight size={18} />
                  </button>
                  <button className="text-primary font-black uppercase tracking-widest text-xs border-b-2 border-secondary pb-1 flex items-center gap-2 group">
                    Collaborate with us <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Sustainable Impact Callout */}
      <section className="py-24 bg-[#f1f2f6] px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="bg-white p-12 rounded-[4rem] shadow-sm transform -rotate-2">
            <Users size={48} className="text-secondary mb-8" />
            <h4 className="text-2xl font-serif font-black mb-4 italic">Student Led</h4>
            <p className="text-gray-500 font-medium">Empowering the next generation to be socially conscious leaders and empathetic citizens.</p>
          </div>
          <div className="bg-primary p-12 rounded-[4rem] shadow-2xl text-white transform scale-110 relative z-10">
            <ShieldCheck size={48} className="text-secondary mb-8" />
            <h4 className="text-2xl font-serif font-black mb-4 italic">Lasting Impact</h4>
            <p className="text-gray-300 font-medium font-light">Focusing on food security, afforestation, and long-term community benefits for the local population.</p>
          </div>
          <div className="bg-white p-12 rounded-[4rem] shadow-sm transform rotate-2">
            <Globe size={48} className="text-secondary mb-8" />
            <h4 className="text-2xl font-serif font-black mb-4 italic">Global Goals</h4>
            <h4 className="text-gray-500 font-medium">Aligning with UNEP and NSS objectives to combat global climate change from a local level.</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
