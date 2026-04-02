import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, GraduationCap, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'BBA (ITM) (Hons.)',
    description: 'A cutting-edge program blending business administration with information technology management.',
    duration: '4 Years',
    seats: '60 Seats',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
    category: 'Technology',
    link: '/academics/bba-itm'
  },
  {
    title: 'BBA (Hons.)',
    description: 'Comprehensive study of modern business principles, leadership, and management strategies.',
    duration: '4 Years',
    seats: '120 Seats',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    category: 'Management',
    link: '/academics/bba'
  },
  {
    title: 'BCom (Hons.)',
    description: 'Expertise in professional accounting, finance, and advanced commercial practices.',
    duration: '4 Years',
    seats: '120 Seats',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
    category: 'Commerce',
    link: '/academics/bcom'
  },
  {
    title: 'BCA (Hons.)',
    description: 'Focus on software engineering, web development, and computational intelligence.',
    duration: '4 Years',
    seats: '120 Seats',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    category: 'Computer Science',
    link: '/academics/bca'
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-white relative overflow-hidden py-32">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-bg/50 -z-10" />
       
      <div className="max-w-[1440px] mx-auto relative z-10 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-28">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="subheading"
            >
              Academic Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-brand-text leading-[0.95] tracking-tight italic"
            >
              Curated <span className="text-gradient">Pathways</span> <br/> 
              To Global <span className="relative inline-block">
                Success.
                <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-brand-primary/10 rounded-full" />
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/academics" className="btn-primary group flex items-center gap-3 px-10 h-16 text-base shadow-2xl shadow-brand-primary/20">
              Explore Full Catalog
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-brand-border hover:shadow-[0_40px_80px_rgba(30,58,138,0.1)] transition-all duration-700 flex flex-col md:flex-row min-h-[340px]"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-[40%] overflow-hidden bg-slate-900 group-hover:w-[42%] transition-all duration-700 ease-in-out">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.2em] text-white border border-white/20 shadow-xl">
                    {course.category}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:w-[60%] flex flex-col justify-between group-hover:w-[58%] transition-all duration-700 ease-in-out">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-brand-bg rounded-xl text-brand-primary text-[10px] font-black uppercase tracking-widest border border-brand-border">
                      <Clock size={16} className="text-brand-secondary" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-brand-bg rounded-xl text-brand-primary text-[10px] font-black uppercase tracking-widest border border-brand-border">
                      <Users size={16} className="text-brand-secondary" />
                      {course.seats}
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-black text-brand-text mb-4 group-hover:text-brand-primary transition-colors leading-tight italic tracking-tighter">
                    {course.title}
                  </h3>
                  
                  <p className="text-brand-subtext font-medium text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-brand-border/40">
                   <Link to={course.link} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary group/link">
                      <div className="flex flex-col">
                        <span>Course</span>
                        <span className="text-brand-secondary">Briefing</span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover/link:bg-brand-primary group-hover/link:text-white transition-all">
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </div>
                   </Link>
                   <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-brand-primary border border-brand-border shadow-sm group-hover:rotate-12 transition-transform">
                      <BookOpen size={18} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blob */}
       <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px]" />
    </section>
  );
}
