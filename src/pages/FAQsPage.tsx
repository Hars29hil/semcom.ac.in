import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  PhoneCall, 
  Mail,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is SEMCOM?",
    answer: "SEMCOM (Sardar Gunj Mercantile Tertiary Bank Ltd. English Medium College of Commerce and Management) is a premier constituent college of Charutar Vidya Mandal University. Established in 1997 by Charutar Vidya Mandal, SEMCOM was accredited with grade 'A' by NAAC (2015-2020) and is renowned for academic excellence in Commerce and Management."
  },
  {
    question: "Which Programs Are Offered By SEMCOM?",
    answer: "SEMCOM offers a diverse range of programs including BBA (ITM) (Hons.), BBA (Hons.), BCA (Hons.), BCom (Hons.) at the undergraduate level, M.Com. at the postgraduate level, and Ph.D. programs in Commerce and Management."
  },
  {
    question: "What is a Multi-Faculty College?",
    answer: "SEMCOM is a multi-faculty institution because it provides specialized degree courses across three major disciplines: Commerce, Management, and Computer Applications, allowing for a shared, collaborative intellectual environment."
  },
  {
    question: "What is the Admission Procedure at SEMCOM?",
    answer: "Admissions are conducted primarily on the basis of merit. Candidates must fulfill the eligibility criteria set by CVM University. The process typically involves submitting an online application followed by verification of documents and merit-based selection."
  },
  {
    question: "Is Hostel Facility Available at SEMCOM?",
    answer: "Yes, Charutar Vidya Mandal provides excellent hostel facilities for both boys and girls with modern amenities, round-the-clock security, and a conducive environment for studies, located within easy reach of the college campus."
  },
  {
    question: "What Kind of Placement Support Is Offered by SEMCOM?",
    answer: "SEMCOM has an active Career Guidance and Placement Cell that organizes campus recruitment drives, provides career counseling, and conducts workshops on interview skills and personality development. Our graduates are placed in leading domestic and international corporate firms."
  },
  {
    question: "Is there a scholarship facility?",
    answer: "Yes, various government scholarships (SC/ST/OBC/EWS) and CVM-specific merits and needs-based scholarships are available for eligible students."
  },
  {
    question: "What are the infrastructure facilities available?",
    answer: "The college boasts state-of-the-art computer labs, an enriched digital library, audio-visual conference rooms, a gymkhana, and sports playgrounds to ensure holistic development."
  },
  {
    question: "How is SEMCOM different from other institutions?",
    answer: "SEMCOM stands out through its tech-integrated pedagogy, case-study based teaching, and a strong emphasis on co-curricular activities like NCC and NSS alongside academic rigor."
  },
  {
    question: "What are the various aspects of college discipline?",
    answer: "We maintain a high standard of professional conduct. This includes strict attendance requirements, a professional dress code, and adherence to the student code of conduct to prepare students for corporate life."
  }
];

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <span className="text-white/60">Frequently Asked Questions</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
            Everything you need to know about admissions, academic directories, infrastructure, and campus life at SEMCOM.
          </p>

          {/* Search bar inside header */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input 
              type="text"
              placeholder="Search your question here..."
              className="w-full bg-white text-primary pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/15 transition-all placeholder:text-muted/60 text-xs font-semibold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Sidebar Contact Helpdesk */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Helpdesk Box */}
            <div className="card !p-8 bg-surface border border-border">
              <h3 className="text-lg font-bold text-primary mb-4 pb-3 border-b border-border/80">Still have questions?</h3>
              <p className="text-muted text-xs leading-relaxed font-medium mb-6">If you can't find what you're looking for, our help desk is here to assist you.</p>
              
              <div className="space-y-5">
                <a href="tel:+912692238001" className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 bg-background border border-border rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm shrink-0">
                    <PhoneCall size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-muted uppercase tracking-wider">Call Us</p>
                    <p className="font-bold text-primary text-xs sm:text-sm">02692 238001</p>
                  </div>
                </a>
                
                <a href="mailto:principal@semcom.ac.in" className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 bg-background border border-border rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-muted uppercase tracking-wider">Email Us</p>
                    <p className="font-bold text-primary text-xs sm:text-sm">principal@semcom.ac.in</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 bg-background border border-border rounded-xl flex items-center justify-center text-secondary shadow-sm shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-muted uppercase tracking-wider">Visit Us</p>
                    <p className="font-bold text-primary text-xs sm:text-sm">Vallabh Vidyanagar, Anand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Banner */}
            <div className="card !p-8 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                  <MessageCircle size={20} />
                </div>
                <h4 className="text-base font-bold">Join the SEMCOM Legacy</h4>
                <p className="text-white/70 text-xs leading-relaxed font-medium">Admissions for 2026-27 are now open for all undergraduate and postgraduate programs.</p>
                <div className="pt-2">
                  <a 
                    href="https://admissions.cvmu.edu.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow"
                  >
                    <span>Apply Online</span>
                    <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Accordion list */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    className={`bg-surface rounded-2xl border ${activeIndex === index ? 'border-secondary shadow-soft' : 'border-border shadow-sm'} overflow-hidden transition-all`}
                  >
                    <button 
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="w-full px-6 py-6 flex items-center justify-between text-left group"
                    >
                      <span className={`text-sm sm:text-base font-bold ${activeIndex === index ? 'text-primary' : 'text-primary/80'} group-hover:text-secondary transition-colors pr-6`}>
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${activeIndex === index ? 'bg-secondary text-white rotate-180' : 'bg-background text-muted border border-border group-hover:bg-border/20'}`}>
                        {activeIndex === index ? <Minus size={15} /> : <Plus size={15} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/60 pt-4">
                            <div className="flex gap-3">
                              <div className="w-1 bg-secondary rounded-full shrink-0" />
                              <p className="font-medium">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-16 bg-surface rounded-2xl border border-dashed border-border/80 shadow-sm">
                  <HelpCircle size={44} className="mx-auto text-muted/30 mb-4" />
                  <h3 className="text-sm font-bold text-muted mb-2">No results found for your search.</h3>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="text-secondary font-bold text-xs hover:underline decoration-secondary underline-offset-2"
                  >
                    Clear Search Query
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
