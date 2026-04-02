import { motion } from 'motion/react';
import { 
  BookOpen, 
  FileText, 
  Archive, 
  Bell, 
  ShieldCheck, 
  Gavel,
  ArrowRight,
  ExternalLink,
  Milestone,
  Newspaper,
  Calendar,
  Search,
  CheckCircle2
} from 'lucide-react';

const journalTopics = [
  "Entrepreneurial Behavior & Business Performance",
  "Sustainable Development Models",
  "Business Resilience Challenges",
  "Facial Recognition Algorithms",
  "Large Language Models in HR",
  "Financial Reporting Prediction",
  "Leadership & Corporate Communication",
  "Consumer Behavior Analysis"
];

const sidebarLinks = [
  { name: 'SMTR Home', icon: BookOpen },
  { name: 'Call for Papers', icon: Bell, status: 'OPEN' },
  { name: 'Archive', icon: Archive },
  { name: 'Subscription', icon: Newspaper },
  { name: 'Certificate of Originality', icon: ShieldCheck },
  { name: 'Ethical Policy', icon: Gavel }
];

export default function SMTRJournal() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-[#1c2e5a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" 
            alt="Journal background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e5a] to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6 bg-secondary/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-secondary/30">
              <span className="text-secondary font-black text-xs uppercase tracking-[0.3em]">ISSN 2321-5968</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight">
              SEMCOM Management & <br />
              <span className="text-secondary italic">Technology Review</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-sans max-w-2xl border-l-4 border-secondary pl-6">
              An International Peer Reviewed Bi-Annual Research Journal dedicated to advancing knowledge in Commerce, Management, and Technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                {sidebarLinks.map((link, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-secondary hover:shadow-md transition-all group">
                    <div className="flex items-center gap-4">
                      <link.icon size={20} className="text-primary group-hover:text-secondary" />
                      <span className="font-bold text-primary group-hover:underline text-sm">{link.name}</span>
                    </div>
                    {link.status && (
                      <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest">
                        {link.status}
                      </span>
                    )}
                  </button>
                ))}
                
                <div className="mt-8 bg-primary p-8 rounded-3xl text-white">
                  <h4 className="font-serif font-black text-xl mb-4 italic">Upcoming Issue</h4>
                  <div className="flex items-center gap-3 mb-2 text-secondary">
                    <Calendar size={18} />
                    <span className="font-bold">March 2025</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">Volume 12, Issue 2</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-secondary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Central Content Area */}
            <div className="lg:col-span-3 space-y-12">
              
              {/* Call for Papers Alert */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border-2 border-dashed border-secondary p-10 rounded-[3rem] relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                      <Bell size={24} className="animate-bounce" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif font-black text-primary italic">Call for Papers</h2>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">March 2025 Issue</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We are now accepting original research papers for the **March 2025** issue of SMTR. The portal is <span className="text-primary font-black uppercase">Open Until November 29, 2025</span>.
                  </p>
                  <div className="flex flex-wrap gap-6 items-center">
                    <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                      Submit Your Paper <ExternalLink size={18} />
                    </button>
                    <button className="text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-secondary pb-1">
                      View Editorial Policy
                    </button>
                  </div>
                </div>
                {/* Visual Backdrop */}
                <FileText className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 text-gray-50 -z-0" />
              </motion.div>

              {/* Current Issue Section */}
              <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/3 text-center">
                    <div className="bg-primary aspect-[3/4] rounded-2xl shadow-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                      <div className="absolute bottom-8 left-0 right-0 p-6 text-white">
                        <p className="text-xs font-black tracking-[0.3em] uppercase mb-2">Current Issue</p>
                        <h4 className="text-2xl font-serif font-black italic">October 2024</h4>
                        <p className="text-secondary font-bold">Vol. 12 | No. 1</p>
                      </div>
                      <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" alt="Journal cover" />
                    </div>
                    <button className="mt-8 text-primary font-black flex items-center gap-2 mx-auto hover:gap-4 transition-all">
                      Browse Full Issue <ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="w-full md:w-2/3">
                    <h3 className="text-3xl font-serif font-black text-primary mb-8 border-b border-gray-200 pb-6">Research Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {journalTopics.map((topic, idx) => (
                        <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
                          <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                          <p className="text-sm font-bold text-gray-700 leading-snug">{topic}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submission Guidelines Summary */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary p-10 rounded-[3rem] text-primary">
                  <Milestone size={40} className="mb-6" />
                  <h3 className="text-2xl font-serif font-black mb-4 italic">Submission Mandate</h3>
                  <p className="font-medium leading-relaxed opacity-80">
                    Authors are required to submit papers through the official link only. Direct email submissions will not be entertained as per the revised Peer Review policy.
                  </p>
                </div>
                <div className="bg-gray-900 p-10 rounded-[3rem] text-white overflow-hidden relative group">
                  <Search size={40} className="mb-6 text-secondary" />
                  <h3 className="text-2xl font-serif font-black mb-4 italic">Ethics and Policy</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Our rigorous peer-review process ensures the highest quality of scholarly research. All submissions must include a Certificate of Originality.
                  </p>
                  <button className="text-secondary font-black tracking-widest text-[10px] uppercase group-hover:underline">Read Ethical Guidelines</button>
                  <Gavel size={128} className="absolute -right-10 -bottom-10 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
