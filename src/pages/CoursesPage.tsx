import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, CheckCircle2, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'BBA (ITM) (Hons.)',
    path: '/academics/bba-itm',
    description: 'A specialized program focusing on Information Technology Management with dual specialization options.',
    duration: '3 Years',
    students: '180 Seats',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
    category: 'Management & IT',
    features: ['HR Management', 'Marketing Management', 'Financial Management', 'International Business', 'Information Technology'],
    eligibility: 'Candidate who has completed 12th / HSC / Equivalent.',
  },
  {
    title: 'BBA (Hons.)',
    path: '/academics/bba',
    description: 'A comprehensive program offering specializations in Accounting, Finance, Marketing, and HR Management.',
    duration: '3 Years',
    students: '120 Seats',
    image: 'https://images.unsplash.com/photo-1523240715630-979bb0701d43?q=80&w=2070&auto=format&fit=crop',
    category: 'Management',
    features: ['Accounting & Finance', 'Marketing Management', 'Human Resource Management', 'Business Analytics'],
    eligibility: 'Candidate who has completed 12th / HSC / Equivalent.',
  },
  {
    title: 'BCA (Hons.)',
    path: '/academics/bca',
    description: 'A cutting-edge program for future software engineers and tech visionaries.',
    duration: '3 Years',
    students: '120 Seats',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    category: 'Technology',
    features: ['Software Development', 'Networking', 'Systems Analysis', 'Web Design'],
    eligibility: 'Candidate who has completed 12th / HSC / Equivalent.',
  },
  {
    title: 'BCom (Hons.)',
    path: '/academics/bcom',
    description: 'A tech-integrated commerce program with unique specializations like FinTech and AccTech.',
    duration: '3 Years',
    students: '40 Seats',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    category: 'Commerce & Technology',
    features: ['AccTech', 'CostTech', 'FinTech', 'TaxTech'],
    eligibility: 'Candidate who has completed 12th / HSC / Equivalent.',
  },
  {
    title: 'Master of Commerce (M.Com.)',
    path: '/academics/mcom',
    description: 'A pragmatic postgraduate program focused on corporate leadership and research.',
    duration: '2 Years',
    students: '40 Seats',
    image: 'https://images.unsplash.com/photo-1454165833767-0274b27f28a0?q=80&w=2070&auto=format&fit=crop',
    category: 'Post Graduate',
    features: ['Case Studies', 'Management Games', 'Seminar Presentations', 'Industry Interaction'],
    eligibility: 'Bachelor\'s degree in Commerce / Management / Equivalent under 10+2+3.',
  },
  {
    title: 'Doctor of Philosophy (Ph.D.)',
    path: '/academics/phd',
    description: 'An elite doctoral program in Commerce and Management within a rich research ecosystem.',
    duration: '3-5 Years',
    students: 'Per Vacancy',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop',
    category: 'Research',
    features: ['Research Mentorship', 'CVM University Affiliated', 'SHODH Fellowship', 'Case-Study Specialized'],
    eligibility: 'As per CVM University Ph.D. Rules & Regulations 2020.',
  },
];

export default function CoursesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-sans font-black uppercase tracking-widest text-secondary mb-4"
          >
            Academic Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-black text-primary leading-[0.9] tracking-tighter mb-8"
          >
            Shape Your <br />
            <span className="italic text-secondary">Future</span> with Our Courses.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            We offer a range of undergraduate and postgraduate programs that are designed to meet the demands of the modern business world.
          </motion.p>
        </div>
      </section>

      {/* Detailed Course List */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 text-glow">
                    <span className="px-6 py-3 rounded-full glass text-sm font-black uppercase tracking-widest text-primary">
                      {course.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-6 mb-8 text-xs font-sans font-black uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-secondary" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-secondary" />
                    {course.students}
                  </div>
                </div>

                <h2 className="text-5xl font-serif font-black text-primary mb-6 leading-tight">
                  {course.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-1" />
                      <span className="text-sm font-black text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
                  <h4 className="text-xs font-sans font-black uppercase tracking-widest text-gray-400 mb-2">Eligibility Criteria</h4>
                  <p className="text-gray-700 font-bold">{course.eligibility}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {course.path && (
                    <Link 
                      to={course.path}
                      className="bg-primary text-white px-8 py-4 rounded-2xl text-lg font-black hover:bg-[#152a4a] transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group"
                    >
                      View Details
                      <Info size={20} className="group-hover:scale-110 transition-transform" />
                    </Link>
                  )}
                  <button className="bg-secondary text-[#1c2e5a] px-8 py-4 rounded-2xl text-lg font-black hover:bg-[#fbd38d] transition-all shadow-xl shadow-secondary/20 flex items-center gap-2 group">
                    Apply Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
