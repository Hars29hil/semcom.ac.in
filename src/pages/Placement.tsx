import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const placementStats = [
  { label: 'Highest Package', value: '₹12 LPA' },
  { label: 'Average Package', value: '₹4.5 LPA' },
  { label: 'Recruiters', value: '150+' },
  { label: 'Placement Rate', value: '95%' },
];

const recruiters = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=150',
];

export default function Placement() {
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
            <span className="text-white/60">Career & Placement</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Career & <span className="text-accent">Placements</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            The SEMCOM Placement Cell works tirelessly to bridge the gap between academia and industry, ensuring our students are prepared for the professional corporate world.
          </p>
        </div>
      </div>

      {/* Stats Section with Brand Theme */}
      <div className="bg-surface py-12 border-b border-border">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-6">
          {placementStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="card text-center !p-6"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recruitment Process */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-between">
          
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border">Our Recruitment Process</h2>
            <div className="space-y-6">
              {[
                { title: 'Skill Development', desc: 'Pre-placement training sessions including soft skills, communication, and aptitude training.' },
                { title: 'Mock Interviews', desc: 'Regular mock interviews conducted by experienced industry experts and alumni.' },
                { title: 'Campus Drives', desc: 'Direct recruitment drives from top companies organized on campus.' },
                { title: 'Final Placement', desc: 'Successful transition of students from academic learners to corporate leaders.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm shrink-0">
                    <span>{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-muted leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Media Block Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="card !p-0 overflow-hidden relative border border-border shadow-soft aspect-square max-w-md mx-auto group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Placement Cell"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 card !p-6 max-w-[200px] border border-border shadow-soft hidden sm:block">
              <div className="w-9 h-9 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4 shadow-sm">
                <Award size={18} />
              </div>
              <h3 className="text-xs font-bold text-primary mb-1">Elite Cell</h3>
              <p className="text-[9px] font-semibold text-muted leading-relaxed">Recognized for Excellence in Placements across Gujarat</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Recruiters Grid */}
      <div className="bg-surface py-12 sm:py-16 border-y border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Our Corporate Partners</h2>
            <p className="text-muted text-xs font-medium">Top recruiters hiring our graduates at regular intervals.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {recruiters.map((logo, i) => (
              <div key={i} className="card !p-4 bg-background border border-border shadow-sm flex items-center justify-center aspect-[16/10] hover:-translate-y-0.5 transition-all">
                <img src={logo} alt="Recruiter" className="h-10 w-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alumni Success Stories */}
      <div className="section-container py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Alumni Success Stories</h2>
          <p className="text-muted text-xs font-medium">Hear from our alumni working in globally leading organizations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: 'Sameer Shah', company: 'Google', role: 'Product Manager', text: 'SEMCOM gave me the rock-solid foundation, guidance, and analytical mindset I needed to succeed at a global level.' },
            { name: 'Neha Patel', company: 'TCS', role: 'Software Engineer', text: 'The technical skills, intensive workshops, and industry exposure at SEMCOM were absolutely invaluable in launching my career.' },
          ].map((alumni, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary text-base font-bold shrink-0">
                    {alumni.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary">{alumni.name}</h4>
                    <p className="text-[9px] font-bold text-secondary uppercase tracking-wider">{alumni.role} @ {alumni.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed font-medium italic">"{alumni.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
