import { motion } from 'motion/react';
import { Mail, ShieldCheck, ArrowRight, FileCheck, CheckCircle2 } from 'lucide-react';

export default function EducationVerification() {
  return (
    <div className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8"
          >
            <ShieldCheck size={40} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-sans font-black uppercase tracking-[0.5em] text-secondary mb-4"
          >
            Institutional Integrity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-black text-primary leading-tight tracking-tighter mb-8"
          >
            Education <span className="italic text-secondary">Verification</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-light max-w-2xl mx-auto italic"
          >
            Ensuring authentic academic credentials through a streamlined, secure verification protocol for employers and institutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-primary/5 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl text-secondary" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-black text-primary italic mb-6">Verification Protocol</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  SEMCOM maintains a dedicated desk for verifying the educational credentials of its alumni. We provide rapid responses to background screening agencies, corporate recruiters, and higher education institutions globally.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Standardized response format",
                    "Direct institutional verification",
                    "Secure digital communication",
                    "Official transcript validation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-primary font-bold italic">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl shadow-primary/30 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Mail size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-serif font-black italic mb-4 text-secondary">Submit Your Request</h3>
                <p className="text-white/60 mb-8 leading-relaxed font-medium">
                  For all Education Verification inquiries, please email your requests with scanned copies of the candidate's Marksheets/Degree Certificate and the requisite authorization.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 break-all">
                  <span className="text-xs font-black uppercase tracking-widest text-white/40 block mb-2">Dedicated Node</span>
                  <a 
                    href="mailto:studentssupport.semcom@cvmu.edu.in" 
                    className="text-lg md:text-xl font-black italic text-white hover:text-secondary transition-colors"
                  >
                    studentssupport.semcom@cvmu.edu.in
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-[10px]">
                  <span>Expect response within 3-5 days</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guidelines */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
             {[
               {
                 title: "Authorization",
                 desc: "Candidate consent form is mandatory for all third-party background checks.",
                 icon: ShieldCheck
               },
               {
                 title: "Documentation",
                 desc: "Ensure all attachments are in high-resolution PDF or JPEG format.",
                 icon: FileCheck
               },
               {
                 title: "Processing",
                 desc: "Normal processing time ranges between 3 to 5 business days.",
                 icon: Clock
               }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl"
               >
                 <div className="text-secondary mb-6"><item.icon size={28} /></div>
                 <h4 className="text-lg font-serif font-black text-primary italic mb-3">{item.title}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Clock({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
