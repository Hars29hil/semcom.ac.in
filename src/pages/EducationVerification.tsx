import { motion } from 'motion/react';
import { Mail, ShieldCheck, ArrowRight, FileCheck, CheckCircle2 } from 'lucide-react';

export default function EducationVerification() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Header Section */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary border border-primary/10 mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <span className="section-label">Institutional Integrity</span>
            <h2>Education <span className="text-secondary">Verification</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Ensuring authentic academic credentials through a streamlined, secure verification protocol for employers and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 md:p-12 shadow-card border border-border relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-text mb-4">Verification Protocol</h3>
                <p className="text-muted leading-relaxed mb-8">
                  SEMCOM maintains a dedicated desk for verifying the educational credentials of its alumni. We provide rapid responses to background screening agencies, corporate recruiters, and higher education institutions globally.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Standardized response format",
                    "Direct institutional verification",
                    "Secure digital communication",
                    "Official transcript validation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-text font-medium text-sm">
                      <CheckCircle2 size={18} className="text-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-8 md:p-10 rounded-2xl text-white shadow-lg">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Submit Your Request</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  For all Education Verification inquiries, please email your requests with scanned copies of the candidate's Marksheets/Degree Certificate and the requisite authorization.
                </p>
                <div className="p-4 bg-black/20 rounded-xl border border-white/10 break-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-1">Dedicated Node</span>
                  <a 
                    href="mailto:studentssupport.semcom@cvmu.edu.in" 
                    className="text-base sm:text-lg font-bold text-white hover:text-secondary transition-colors"
                  >
                    studentssupport.semcom@cvmu.edu.in
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-2 text-white/70 font-bold uppercase tracking-wider text-[10px]">
                  <span>Expect response within 3-5 days</span>
                  <ArrowRight size={14} className="text-secondary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guidelines */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
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
                 className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-card transition-shadow"
               >
                 <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4">
                   <item.icon size={24} />
                 </div>
                 <h4 className="text-lg font-bold text-text mb-2">{item.title}</h4>
                 <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
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
