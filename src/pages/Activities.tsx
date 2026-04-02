import { motion } from 'motion/react';
import { Trophy, Music, Users, Globe, Camera, Heart, Flag, Zap } from 'lucide-react';

const activities = [
  {
    title: 'NSS & NCC',
    description: 'Developing character and discipline through social service and military training.',
    icon: Flag,
    color: 'bg-vibrant-purple/10 text-vibrant-purple',
  },
  {
    title: 'Sports & Athletics',
    description: 'State-of-the-art sports facilities for cricket, football, basketball, and more.',
    icon: Trophy,
    color: 'bg-vibrant-teal/10 text-vibrant-teal',
  },
  {
    title: 'Cultural Events',
    description: 'Annual cultural festivals, dance competitions, and music performances.',
    icon: Music,
    color: 'bg-vibrant-pink/10 text-vibrant-pink',
  },
  {
    title: 'Industrial Visits',
    description: 'Regular visits to leading corporations to provide practical industry exposure.',
    icon: Globe,
    color: 'bg-secondary/10 text-secondary',
  },
  {
    title: 'Student Clubs',
    description: 'Various clubs for photography, literature, coding, and entrepreneurship.',
    icon: Camera,
    color: 'bg-accent/10 text-accent',
  },
  {
    title: 'Social Initiatives',
    description: 'Community outreach programs and blood donation camps.',
    icon: Heart,
    color: 'bg-danger/10 text-danger',
  },
];

export default function Activities() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-sans font-bold uppercase tracking-widest text-secondary mb-4"
          >
            Campus Life
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary leading-[0.9] tracking-tighter mb-8"
          >
            Beyond the <br />
            <span className="italic text-secondary">Classroom</span> Experience.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            We believe in the holistic development of our students. 
            Our campus offers a vibrant environment with numerous activities and opportunities.
          </motion.p>
        </div>
      </section>

      {/* Activity Grid */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 rounded-[3rem] border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <activity.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{activity.title}</h3>
              <p className="text-gray-500 leading-relaxed">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Event */}
      <section className="section-padding mt-24">
        <div className="max-w-7xl mx-auto bg-primary rounded-[4rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
          <div className="grid lg:grid-cols-2 items-center relative z-10">
            <div className="p-16 lg:p-24 text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-sans font-bold uppercase tracking-widest mb-8"
              >
                <Zap size={16} className="text-secondary" />
                Annual Festival
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">SEMCOM <span className="italic text-secondary">Utsav</span> 2026.</h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Our annual cultural festival is a celebration of talent, creativity, and diversity. 
                Join us for three days of music, dance, drama, and fun.
              </p>
              <div className="flex gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-serif font-bold text-secondary">3 Days</span>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/40">Duration</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-serif font-bold text-secondary">50+</span>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/40">Events</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-serif font-bold text-secondary">2000+</span>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/40">Participants</span>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src="https://picsum.photos/seed/festival/1000/1000"
                alt="Festival"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-primary mb-16 text-center">Life at <span className="italic text-secondary">SEMCOM</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <img
                  src={`https://picsum.photos/seed/gallery-${i}/600/600`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
