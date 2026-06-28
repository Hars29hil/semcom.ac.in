import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Building2, 
  GraduationCap, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';

const importantLinks = [
  {
    name: "Charutar Vidya Mandal (CVM)",
    description: "The pioneering educational trust that transformed Vallabh Vidyanagar into a world-class academic hub.",
    url: "http://ecvm.net/",
    icon: Building2,
    color: "from-blue-600 to-indigo-800"
  },
  {
    name: "CVM University",
    description: "Our parent university committed to academic excellence and nurturing future-ready professionals.",
    url: "https://cvmu.edu.in/",
    icon: GraduationCap,
    color: "from-emerald-600 to-teal-800"
  },
  {
    name: "University Grants Commission (UGC)",
    description: "The statutory body of the Government of India for the coordination and maintenance of standards in higher education.",
    url: "https://www.ugc.gov.in/",
    icon: ShieldCheck,
    color: "from-orange-600 to-red-800"
  }
];

export default function ImportantLinks() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Important Links</span>
            </div>

            <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
              Important <span className="text-accent">Resources</span>
            </h1>
            <p className="text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
              Connect with our governing bodies, educational trusts, and regulatory authorities to access official platforms.
            </p>
          </div>
          
          <div className="hidden lg:flex w-24 h-24 bg-white/5 border border-white/10 rounded-full items-center justify-center p-6 text-accent">
            <Globe size={48} className="animate-spin-slow" />
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {importantLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02 }}
              className="card border border-border bg-surface hover:border-secondary transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-transform shrink-0">
                  <link.icon size={20} />
                </div>
                
                <h3 className="font-bold text-sm text-primary mb-3">
                  {link.name}
                </h3>
                
                <p className="text-xs text-muted leading-relaxed font-semibold mb-6">
                  {link.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[9px] font-bold text-muted uppercase tracking-wider">Visit Website</span>
                <div className="w-8 h-8 bg-background border border-border rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <ExternalLink size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-container pb-16">
        <div className="card !p-8 sm:!p-12 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white text-center space-y-6 relative overflow-hidden max-w-4xl mx-auto shadow-soft">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Looking for Student Internal Marks?</h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl mx-auto uppercase tracking-wider">Access the student portal for result verification and internal standings.</p>
            
            <div className="pt-2">
              <button className="bg-[#FACC15] hover:bg-[#EAB308] text-slate-900 font-bold rounded-xl inline-flex items-center gap-2 !py-2.5 !px-6 !text-xs mx-auto transition-colors">
                <span>Student Information System</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
