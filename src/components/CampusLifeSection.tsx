import { motion } from 'motion/react';
import { Camera, Music, Trophy, Users, Sparkles } from 'lucide-react';

const activities = [
  {
    title: 'Cultural Festivals',
    description: 'Celebrating diversity through arts, music, and literary competitions.',
    icon: Sparkles,
    image: '/images/activity_cultural.png',
  },
  {
    title: 'NSS & NCC Units',
    description: 'Fostering social responsibility and discipline through active camp service.',
    icon: Users,
    image: '/images/activity_nss.png',
  },
  {
    title: 'Sports & Athletics',
    description: 'Promoting excellence and sportsmanship with modern campus facilities.',
    icon: Trophy,
    image: '/images/activity_sports.png',
  },
  {
    title: 'Expert Seminars',
    description: 'Bridging academia and industry through regular expert talk sessions.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1475721027187-401460590ed7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Youth Workshops',
    description: 'Developing practical skills through hands-on technical environments.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Academic Honors',
    description: 'Recognizing merit and achievement through annual prize-giving ceremonies.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function CampusLifeSection() {
  return (
    <section className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary"
          >
            Vibrant Community
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[56px] font-heading font-black text-brand-text leading-tight italic tracking-tighter"
          >
            College <span className="text-brand-primary">Activities</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-subtext font-medium text-lg leading-relaxed"
          >
            Beyond the classrooms, we celebrate energy, creativity, and leadership. Discover the spirit of SEMCOM through our diverse student ecosystems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-all duration-700 mx-1 border-8 border-white bg-white">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-10 space-y-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-brand-secondary flex items-center justify-center text-white mb-6 shadow-xl shadow-brand-secondary/20">
                    <activity.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-heading font-black text-white italic transition-transform group-hover:-translate-y-1">{activity.title}</h3>
                  <p className="text-white/80 text-xs font-semibold leading-relaxed tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {activity.description}
                  </p>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <Camera size={20} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
