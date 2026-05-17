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
    description: 'A pragmatic postgraduate program focused on commerce, corporate leadership, and academic research.',
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
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Academic Programs</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Academic <span className="text-accent">Programs</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            SEMCOM offers a diverse spectrum of undergraduate, postgraduate, and research programs designed to develop next-generation global leaders.
          </p>
        </div>
      </div>

      {/* Detailed Course List */}
      <div className="section-container py-12 sm:py-16">
        <div className="space-y-16 lg:space-y-24">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col lg:flex-row gap-10 items-center justify-between ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Media Card */}
              <div className="w-full lg:w-1/2">
                <div className="card !p-0 overflow-hidden relative border border-border shadow-soft aspect-[16/10] group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 bg-primary/90 text-accent text-[9px] font-bold uppercase tracking-wider rounded-lg shadow-md border border-white/10">
                      {course.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details Segment */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-muted">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-secondary" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-secondary" />
                    <span>Intake: {course.students}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
                  {course.title}
                </h2>
                
                <p className="text-sm text-muted leading-relaxed font-medium">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pb-2 border-b border-border/60">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-primary">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-surface p-4 rounded-xl border border-border">
                  <h4 className="text-[9px] font-bold uppercase tracking-wider text-muted mb-1">Eligibility Criteria</h4>
                  <p className="text-primary text-xs font-bold">{course.eligibility}</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {course.path && (
                    <Link 
                      to={course.path}
                      className="btn-primary !py-2.5 !px-6 !text-xs"
                    >
                      <span>View Details</span>
                      <Info size={14} />
                    </Link>
                  )}
                  <a 
                    href="https://admissions.cvmu.edu.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-accent text-primary hover:bg-white hover:text-primary transition-all shadow-sm border border-transparent hover:border-border"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
