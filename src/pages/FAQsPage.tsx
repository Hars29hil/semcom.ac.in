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

const faqs = [
  {
    question: "What is SEMCOM?",
    answer: "SEMCOM (Sardar Gunj Mercantile Tertiary Bank Ltd. English Medium College of Commerce and Management) is a premier constituent college of Charutar Vidya Mandal University. Established in 1997 by Charutar Vidya Mandal, SEMCOM was accredited with grade 'A' by NAAC (2015-2020) and is known for its academic excellence in Commerce and Management."
  },
  {
    question: "Which Programs Are Offered By SEMCOM?",
    answer: "SEMCOM offers a diverse range of programs including BBA (ITM) (Hons.), BBA (Hons.), BCA (Hons.), BCom (Hons.) at the undergraduate level, M.Com. at the postgraduate level, and Ph.D. programs in Commerce and Management."
  },
  {
    question: "What is a Multi-Faculty College?",
    answer: "SEMCOM is a multi-faculty institution because it provides specialized degree courses across three major disciplines: Commerce, Management, and Computer Applications, allowing for a shared intellectual environment."
  },
  {
    question: "What is the Admission Procedure at SEMCOM?",
    answer: "Admissions are conducted primarily on the basis of merit. Candidates must fulfill the eligibility criteria set by CVM University. The process typically involves submitting an online application followed by verification of documents and merit-based selection."
  },
  {
    question: "Is Hostel Facility Available at SEMCOM?",
    answer: "Yes, Charutar Vidya Mandal provides excellent hostel facilities for both boys and girls with modern amenities, security, and a conducive environment for studies, located within easy reach of the college campus."
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
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">Frequently Asked <span className="text-secondary italic">Questions</span></h1>
            <p className="text-xl text-gray-300 mb-12">Everything you need to know about admissions, academics, and life at SEMCOM.</p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input 
                type="text"
                placeholder="Search your question here..."
                className="w-full bg-white/10 border border-white/20 backdrop-blur-md text-white px-16 py-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-gray-500 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-serif font-black text-primary mb-6">Still have <span className="text-secondary italic">questions?</span></h3>
                  <p className="text-gray-600 mb-8">If you can't find what you're looking for, our help desk is here to assist you.</p>
                  
                  <div className="space-y-6">
                    <a href="tel:+912692238001" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <PhoneCall size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                        <p className="font-bold text-primary">02692 238001</p>
                      </div>
                    </a>
                    
                    <a href="mailto:principal@semcom.ac.in" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Us</p>
                        <p className="font-bold text-primary">principal@semcom.ac.in</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Visit Us</p>
                        <p className="font-bold text-primary">Vallabh Vidyanagar</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-10 rounded-[3rem] shadow-xl">
                  <MessageCircle size={40} className="text-primary mb-6" />
                  <h4 className="text-2xl font-serif font-black text-primary mb-4 italic">Join the SEMCOM Family</h4>
                  <p className="text-primary/70 font-medium mb-8 italic">Admissions for 2024-25 are now open for all undergraduate and postgraduate programs.</p>
                  <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                    Apply Online <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`bg-white rounded-3xl border ${activeIndex === index ? 'border-secondary shadow-lg shadow-secondary/5' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all`}
                    >
                      <button 
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full px-8 py-8 flex items-center justify-between text-left group"
                      >
                        <span className={`text-xl font-bold ${activeIndex === index ? 'text-primary' : 'text-gray-700'} group-hover:text-primary transition-colors pr-8`}>
                          {faq.question}
                        </span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeIndex === index ? 'bg-secondary text-primary rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                          {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-8 pb-8 text-lg text-gray-500 leading-relaxed border-t border-gray-50 pt-6">
                              <div className="flex gap-4">
                                <div className="w-1 h-auto bg-secondary rounded-full" />
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
                    <HelpCircle size={64} className="mx-auto text-gray-200 mb-6" />
                    <h3 className="text-2xl font-serif font-black text-gray-400">No results found for your search.</h3>
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="mt-4 text-primary font-black uppercase tracking-widest text-sm underline decoration-secondary decoration-2 underline-offset-4"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
