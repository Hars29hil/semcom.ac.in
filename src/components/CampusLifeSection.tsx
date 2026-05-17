import { motion } from 'motion/react';
import { Camera, Music, Trophy, Users, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const activities = [
  {
    key: 'activity_cultural',
    title: 'Cultural Festivals',
    description: 'Celebrating diversity through arts, music, and literary competitions.',
    icon: Sparkles,
    image: '/images/activity_cultural.png',
    size: 'large',
  },
  {
    key: 'activity_nss',
    title: 'NSS & NCC Units',
    description: 'Fostering social responsibility and discipline through active camp service.',
    icon: Users,
    image: '/images/activity_nss.png',
    size: 'small',
  },
  {
    key: 'activity_sports',
    title: 'Sports & Athletics',
    description: 'Promoting excellence and sportsmanship with modern campus facilities.',
    icon: Trophy,
    image: '/images/activity_sports.png',
    size: 'small',
  },
  {
    key: 'activity_seminars',
    title: 'Expert Seminars',
    description: 'Bridging academia and industry through regular expert talk sessions.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1475721027187-401460590ed7?q=80&w=2070&auto=format&fit=crop',
    size: 'small',
  },
  {
    key: 'activity_workshops',
    title: 'Youth Workshops',
    description: 'Developing practical skills through hands-on technical environments.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    size: 'small',
  },
  {
    key: 'activity_honors',
    title: 'Academic Honors',
    description: 'Recognizing merit and achievement through annual prize-giving ceremonies.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    size: 'small',
  },
];

export default function CampusLifeSection() {
  const [displayActivities, setDisplayActivities] = useState(activities);

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        const updated = activities.map(act => ({
          ...act,
          image: data[act.key] || act.image
        }));
        setDisplayActivities(updated);
      })
      .catch(err => console.error('Error fetching activity config:', err));
  }, []);

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <span className="section-label justify-center">Campus Life</span>
          <h2>
            College <span className="text-secondary">Activities</span>
          </h2>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Beyond the classrooms, we celebrate energy, creativity, and leadership. Discover the spirit of SEMCOM through our diverse student ecosystems.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px]">
          {displayActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                activity.size === 'large'
                  ? 'md:col-span-2 md:row-span-2'
                  : 'col-span-1 row-span-1'
              }`}
            >
              {/* Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Icon Badge */}
                <div className="absolute top-5 left-5 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white shadow-lg">
                  <activity.icon size={20} />
                </div>

                {/* Text */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-1.5 !tracking-normal">
                    {activity.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-background rounded-full border border-border text-xs font-medium text-muted">
            <Users size={16} className="text-secondary" />
            Join 1500+ active students in campus activities
          </span>
        </div>
      </div>
    </section>
  );
}
