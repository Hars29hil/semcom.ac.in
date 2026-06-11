import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, BookOpen, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'BBA (ITM) (Hons.)',
    description: 'A cutting-edge program blending business administration with information technology management.',
    duration: '4 Years',
    seats: '60 Seats',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
    category: 'Technology',
    link: '/academics/bba-itm',
  },
  {
    title: 'BBA (Hons.)',
    description: 'Comprehensive study of modern business principles, leadership, and management strategies.',
    duration: '4 Years',
    seats: '120 Seats',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    category: 'Management',
    link: '/academics/bba',
  },
  {
    title: 'BCom (Hons.)',
    description: 'Expertise in professional accounting, finance, and advanced commercial practices.',
    duration: '4 Years',
    seats: '120 Seats',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
    category: 'Commerce',
    link: '/academics/bcom',
  },
  {
    title: 'BCA (Hons.)',
    description: 'Focus on software engineering, web development, and computational intelligence.',
    duration: '4 Years',
    seats: '120 Seats',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    category: 'Computer Science',
    link: '/academics/bca',
  },
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="section-label">Academic Programs</span>
            <h2>
              Curated Pathways to <span className="text-secondary">Success</span>
            </h2>
          </div>
          <Link to="/academics" className="btn-primary group !py-3 !px-6">
            <span>Explore All Programs</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => navigate(course.link)}
              className="group bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full md:w-[42%] h-48 md:h-auto overflow-hidden shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-white/90 text-[11px] font-semibold text-primary flex items-center gap-1.5">
                    <Award size={12} />
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:w-[58%] flex flex-col justify-between">
                <div>
                  {/* Meta */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-background rounded-lg text-[11px] font-medium text-muted border border-border">
                      <Clock size={12} className="text-secondary" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-background rounded-lg text-[11px] font-medium text-muted border border-border">
                      <Users size={12} className="text-secondary" />
                      {course.seats}
                    </span>
                  </div>

                  <h3 className="!text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-border/60">
                  <Link
                    to={course.link}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs font-semibold text-secondary group/link"
                  >
                    View Details
                    <div className="w-8 h-8 rounded-full border border-secondary/30 flex items-center justify-center group-hover/link:bg-secondary group-hover/link:text-white transition-all">
                      <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted border border-border">
                    <BookOpen size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-background rounded-full border border-border text-xs font-medium text-muted">
            UGC Recognized • CVM University
          </span>
        </div>
      </div>
    </section>
  );
}
