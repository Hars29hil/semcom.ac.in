import { motion } from 'motion/react';
import { Calendar, FileText, CreditCard, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-sans font-bold uppercase tracking-widest text-secondary mb-4"
          >
            Join Our Community
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary leading-[0.9] tracking-tighter mb-8"
          >
            Admissions <br />
            <span className="italic text-secondary">Open</span> for 2026-27.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Begin your journey towards a successful career with SEMCOM. 
            We offer a transparent and merit-based admission process.
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-primary mb-16 text-center">Admission <span className="italic text-secondary">Process</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-primary/5 text-center relative"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-primary/20">
                    <ArrowRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates & Scholarships */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-10">Important <span className="italic text-secondary">Dates</span></h2>
            <div className="space-y-6">
              {dates.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                  <span className="text-lg font-medium text-gray-700">{item.event}</span>
                  <span className="text-lg font-serif font-bold text-primary">{item.date}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-10">Scholarships & <span className="italic text-secondary">Financial Aid</span></h2>
            <div className="bg-primary p-12 rounded-[3rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mb-8">
                  <Award size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6">Merit-Based Scholarships</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  We offer scholarships to students who have demonstrated exceptional academic performance in their previous studies.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-secondary" />
                    <span>90% and above: 50% Tuition Fee Waiver</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-secondary" />
                    <span>80% - 90%: 25% Tuition Fee Waiver</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-secondary" />
                    <span>Sports & Cultural Excellence Scholarships</span>
                  </li>
                </ul>
                <button className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-medium hover:bg-secondary hover:text-white transition-all">
                  Apply for Scholarship
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary p-20 rounded-[4rem] text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Ready to <span className="italic">Begin</span> Your Journey?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Join SEMCOM and become part of a community that values excellence, innovation, and ethical leadership.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-secondary px-10 py-5 rounded-2xl text-xl font-bold hover:bg-primary hover:text-white transition-all shadow-2xl shadow-black/20">
                Apply Online Now
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all">
                Download Prospectus
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
