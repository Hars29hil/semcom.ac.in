import { motion } from 'motion/react';
import { Calendar, FileText, CreditCard, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Online Registration',
    description: 'Fill out the online application form on our website.',
    icon: FileText,
  },
  {
    title: 'Document Verification',
    description: 'Submit original documents for verification at the college office.',
    icon: CheckCircle2,
  },
  {
    title: 'Entrance Test/Interview',
    description: 'Attend the entrance test or interview as per the course requirement.',
    icon: Calendar,
  },
  {
    title: 'Fee Payment',
    description: 'Pay the admission fees to confirm your seat.',
    icon: CreditCard,
  },
];

const dates = [
  { event: 'Application Start Date', date: 'May 15, 2026' },
  { event: 'Application End Date', date: 'June 30, 2026' },
  { event: 'Entrance Test Date', date: 'July 10, 2026' },
  { event: 'Merit List Announcement', date: 'July 15, 2026' },
  { event: 'Commencement of Classes', date: 'August 01, 2026' },
];

export default function Admissions() {
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
            <span className="text-white/60">Admissions</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Admissions <span className="text-accent">Open</span> (2026-27)
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Begin your journey towards a successful career with SEMCOM. We offer a transparent, merit-based, and highly structured admission process.
          </p>
        </div>
      </div>

      {/* Admission Process */}
      <div className="section-container py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Simple 4-Step Process</h2>
          <p className="text-muted text-sm font-medium">Follow our structured path to confirm your academic seat.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="card text-center relative"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mx-auto mb-6">
                <step.icon size={22} />
              </div>
              <h3 className="text-base font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted text-xs leading-relaxed font-medium">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-border z-10">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dates and Financial Aid Split */}
      <div className="bg-surface py-12 sm:py-16 border-y border-border">
        <div className="section-container grid lg:grid-cols-2 gap-10">
          
          {/* Important Dates */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary pb-3 border-b border-border/80">Important Dates</h2>
            <div className="space-y-4">
              {dates.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                  <span className="text-sm font-semibold text-primary">{item.event}</span>
                  <span className="text-xs font-bold text-secondary">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarships */}
          <div className="card !p-8 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <div className="relative z-10 space-y-5">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold">Merit-Based Scholarships</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We offer scholarships to students who have demonstrated exceptional academic performance in their qualifying exams.
              </p>
              <ul className="space-y-3.5">
                <li className="flex items-center gap-3 text-xs font-semibold">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>90% and above: 50% Tuition Fee Waiver</span>
                </li>
                <li className="flex items-center gap-3 text-xs font-semibold">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>80% - 90%: 25% Tuition Fee Waiver</span>
                </li>
                <li className="flex items-center gap-3 text-xs font-semibold">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Sports & Cultural Excellence Awards</span>
                </li>
              </ul>
              
              <div className="pt-2">
                <a
                  href="https://admissions.cvmu.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-white hover:text-primary transition-all shadow-md"
                >
                  Apply for Scholarship
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="section-container py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary-hover p-8 sm:p-16 rounded-2xl text-white text-center relative overflow-hidden shadow-soft"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.15)_100%)]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Ready to Begin Your Journey?</h2>
            <p className="text-sm text-white/80 leading-relaxed font-medium">
              Join SEMCOM and become part of a legacy that values academic brilliance, professional innovation, and ethical leadership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="https://admissions.cvmu.edu.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent text-primary px-8 py-3 rounded-xl text-xs font-bold hover:bg-white transition-all shadow"
              >
                Apply Online Now
              </a>
              <button className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">
                Download Prospectus
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
