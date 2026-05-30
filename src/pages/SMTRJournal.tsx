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
import { Link } from 'react-router-dom';

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
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">SMTR Journal</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            SEMCOM Management & <span className="text-accent">Technology Review (SMTR)</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            An International Peer-Reviewed Bi-Annual Research Journal (ISSN 2321-5968) dedicated to advancing knowledge in Commerce, Management, and Technology.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid lg:grid-cols-4 gap-10 items-start">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-3">
              {sidebarLinks.map((link, i) => (
                <button 
                  key={i} 
                  className="w-full flex items-center justify-between p-4 bg-surface rounded-xl border border-border shadow-sm hover:border-secondary transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <link.icon size={16} className="text-secondary shrink-0" />
                    <span className="font-bold text-primary group-hover:text-secondary text-xs">{link.name}</span>
                  </div>
                  {link.status && (
                    <span className="bg-emerald-100 text-emerald-800 text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {link.status}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Upcoming Issue Widget */}
            <div className="card !p-6 bg-surface border border-border">
              <h4 className="font-bold text-xs text-primary mb-3">Upcoming Issue</h4>
              <div className="flex items-center gap-2 text-secondary mb-1.5">
                <Calendar size={14} />
                <span className="font-bold text-xs">March 2026</span>
              </div>
              <p className="text-[10px] text-muted font-bold mb-4">Volume 14, Issue 1</p>
              <div className="h-1 bg-background rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-secondary" />
              </div>
            </div>
          </div>

          {/* Central content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Call for Papers Alert */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="card !p-8 border border-secondary shadow-soft relative overflow-hidden bg-surface"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <Bell size={18} className="animate-bounce" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-primary">Call for Papers</h2>
                    <p className="text-muted text-[9px] font-bold uppercase tracking-wider">March 2026 Issue</p>
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed font-semibold">
                  We are now accepting original research papers for the **March 2026** issue of SMTR. The portal is <span className="text-primary font-bold">Open Until November 29, 2026</span>.
                </p>
                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <button className="btn-primary !py-2.5 !px-6 !text-xs">
                    <span>Submit Your Paper</span>
                    <ExternalLink size={13} />
                  </button>
                  <button className="text-primary font-bold uppercase text-[10px] tracking-wider border-b border-secondary pb-0.5 hover:text-secondary transition-colors">
                    View Editorial Policy
                  </button>
                </div>
              </div>
              <FileText className="absolute top-1/2 right-4 -translate-y-1/2 w-32 h-32 text-primary/[0.02] -z-0 pointer-events-none" />
            </motion.div>

            {/* Current Issue Section */}
            <div className="card !p-8 sm:!p-10 border border-border bg-surface shadow-soft">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 text-center space-y-4">
                  <div className="bg-primary aspect-[3/4] rounded-xl shadow-md relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="absolute bottom-4 left-0 right-0 p-4 text-white z-20 text-left">
                      <p className="text-[9px] font-bold tracking-wider uppercase mb-1">Current Issue</p>
                      <h4 className="text-sm font-bold">October 2025</h4>
                      <p className="text-accent text-[9px] font-semibold">Vol. 13 | No. 2</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 group-hover:scale-102 transition-transform duration-700" alt="Journal cover" />
                  </div>
                  <button className="text-secondary font-bold text-xs flex items-center gap-1.5 mx-auto hover:text-primary transition-colors">
                    <span>Browse Full Issue</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-base font-bold text-primary pb-3 border-b border-border">Research Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-3.5">
                    {journalTopics.map((topic, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start p-3 bg-background border border-border rounded-xl">
                        <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                        <p className="text-[11px] font-semibold text-primary leading-tight">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Guidelines Summary */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card !p-8 bg-secondary/10 border border-secondary/20 text-primary space-y-3">
                <Milestone size={24} className="text-secondary" />
                <h3 className="font-bold text-sm">Submission Mandate</h3>
                <p className="text-xs text-muted leading-relaxed font-semibold">
                  Authors are required to submit papers through the official portal only. Direct email submissions will not be processed as per peer-review policies.
                </p>
              </div>
              
              <div className="card !p-8 bg-primary border border-transparent text-white space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <Search size={24} className="text-accent" />
                <h3 className="font-bold text-sm text-white">Ethics and Policy</h3>
                <p className="text-white/70 text-xs leading-relaxed font-medium">
                  Our rigorous double-blind peer-review process ensures the highest quality of research paper publications.
                </p>
                <div className="pt-2">
                  <button className="text-accent font-bold uppercase tracking-wider text-[9px] hover:text-white transition-colors">
                    Read Ethical Guidelines
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
