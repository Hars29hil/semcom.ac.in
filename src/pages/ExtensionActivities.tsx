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
    tagline: 'SEMCOM\'s Green Initiative',
    description: 'On the occasion of World Environment Day, SEMCOM launched its annual green initiative with a renewed focus on sustainability and community welfare. The campaign emphasizes the plantation of food-bearing saplings aimed at supporting local food resources and enhancing green cover.',
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
    <div className="pt-20 bg-background min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="flex items-center gap-2 justify-center mb-2">
              <Globe size={18} className="text-secondary" />
              <span className="section-label !mb-0">Service Above Self</span>
            </div>
            <h2>Extension <span className="text-secondary">Activities</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Fostering a culture of social responsibility, environmental stewardship, and community welfare through student-led initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Navigation Grid */}
      <div className="bg-background border-b border-border py-8">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {extensionActivities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setActiveTab(activity)}
                className={`p-4 rounded-xl flex flex-col items-center gap-3 transition-all border ${
                  activeTab.id === activity.id 
                  ? 'bg-primary border-primary text-white shadow-md' 
                  : 'bg-surface border-border text-muted hover:border-secondary/50 hover:text-text'
                }`}
              >
                <activity.icon size={20} className={activeTab.id === activity.id ? 'text-white' : 'text-secondary'} />
                <span className="text-xs font-bold text-center">
                  {activity.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-5 gap-12 items-center"
            >
              {/* Left Side: Visual & Stats */}
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-2xl overflow-hidden shadow-card border border-border h-[400px]">
                  <img 
                    src={activeTab.id === 'environment' ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913' : 'https://images.unsplash.com/photo-1559027615-cd162c974340?q=80&w=2070'} 
                    alt="Activity visual"
                    className="w-full h-full object-cover"
                  />
                </div>
                {activeTab.stats && (
                  <div className="bg-surface p-6 rounded-2xl border border-border flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-3xl text-text">{activeTab.stats.value}</h4>
                      <p className="text-sm font-medium text-muted mt-1">{activeTab.stats.label}</p>
                    </div>
                    <CalendarCheck size={32} className="text-secondary opacity-50" />
                  </div>
                )}
              </div>

              {/* Right Side: Narrative */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <Sprout size={18} />
                    <span className="font-bold text-sm uppercase tracking-wider">{activeTab.tagline || 'Community Outreach'}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text">
                    {activeTab.title}
                  </h2>
                </div>

                <p className="text-lg text-muted leading-relaxed">
                  {activeTab.description || "Our extension activities are designed to integrate social awareness with academic learning, encouraging students to actively contribute to the betterment of society."}
                </p>

                {activeTab.highlights ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeTab.highlights.map((item, i) => (
                      <div key={i} className="flex gap-3 items-center bg-surface p-4 rounded-xl border border-border">
                        <Wind size={16} className="text-secondary shrink-0" />
                        <span className="font-medium text-text text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text border border-border">Social Justice</div>
                    <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text border border-border">Environmental Awareness</div>
                    <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text border border-border">Humanitarian Aid</div>
                  </div>
                )}

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button className="btn-primary flex items-center gap-2">
                    View Project Gallery <ChevronRight size={16} />
                  </button>
                  <button className="text-primary font-bold text-sm flex items-center gap-2 hover:text-secondary transition-colors group">
                    Collaborate with us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Sustainable Impact Callout */}
      <section className="section-padding bg-surface border-t border-border">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl border border-border">
              <Users size={32} className="text-secondary mb-4" />
              <h4 className="text-xl font-bold text-text mb-2">Student Led</h4>
              <p className="text-muted text-sm leading-relaxed">Empowering the next generation to be socially conscious leaders and empathetic citizens.</p>
            </div>
            <div className="bg-primary p-8 rounded-2xl shadow-card text-white">
              <ShieldCheck size={32} className="text-secondary mb-4" />
              <h4 className="text-xl font-bold mb-2">Lasting Impact</h4>
              <p className="text-white/80 text-sm leading-relaxed">Focusing on food security, afforestation, and long-term community benefits for the local population.</p>
            </div>
            <div className="bg-background p-8 rounded-2xl border border-border">
              <Globe size={32} className="text-secondary mb-4" />
              <h4 className="text-xl font-bold text-text mb-2">Global Goals</h4>
              <p className="text-muted text-sm leading-relaxed">Aligning with UNEP and NSS objectives to combat global climate change from a local level.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
