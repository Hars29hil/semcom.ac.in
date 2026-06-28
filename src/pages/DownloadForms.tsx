import { motion } from 'motion/react';
import { 
  FileText, 
  Download, 
  ChevronRight, 
  FileCheck, 
  ClipboardCheck, 
  ScrollText, 
  GraduationCap,
  ShieldAlert,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const forms = [
  {
    title: "Bonafide Certificate",
    category: "Certificate",
    description: "Official document confirming your current enrollment status at SEMCOM.",
    icon: FileCheck,
    size: "72 KB",
    type: "PDF",
    fileUrl: "/forms/College_Bonafide.pdf"
  },
  {
    title: "Recommendation Letter",
    category: "Academic",
    description: "Request form for academic or professional recommendations from faculty.",
    icon: GraduationCap,
    size: "68 KB",
    type: "PDF",
    fileUrl: "/forms/College_Recommendation.pdf"
  },
  {
    title: "Transfer Certificate (TC)",
    category: "Administrative",
    description: "Application for issuance of TC upon completion of program or withdrawal.",
    icon: ClipboardCheck,
    size: "65 KB",
    type: "PDF",
    fileUrl: "/forms/College_Transfer.pdf"
  },
  {
    title: "Transcript Request",
    category: "Academic",
    description: "Official request for detailed academic records and semester-wise marks.",
    icon: ScrollText,
    size: "70 KB",
    type: "PDF",
    fileUrl: "/forms/College_Transcript.pdf"
  }
];

export default function DownloadForms() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredForms = forms.filter(form => 
    form.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <span className="text-white/60">Student Corner</span>
            <span>/</span>
            <span className="text-white/60">Forms</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            Downloadable <span className="text-accent">Forms</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
            Access and download essential academic and administrative forms directly from the student portal.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mt-6">
            <input 
              type="text" 
              placeholder="Search for a form..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all backdrop-blur-md text-sm font-medium"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40" size={20} />
          </div>
        </div>
      </div>

      {/* Forms Grid */}
      <section className="section-container py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredForms.map((form, idx) => (
            <motion.div
              key={form.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card !p-8 border border-border shadow-soft group relative overflow-hidden"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                  <form.icon size={24} />
                </div>
                
                <div className="space-y-3 flex-1">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">{form.category}</div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {form.title}
                    </h3>
                  </div>
                  <p className="text-muted text-xs leading-relaxed font-medium">
                    {form.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-border/80">
                    <a 
                      href={form.fileUrl} 
                      download
                      className="btn-accent text-primary !px-5 !py-2.5 !text-[11px] uppercase tracking-wider group-hover:shadow-md hover:bg-white transition-colors"
                    >
                      <Download size={14} className="mr-2" /> Download Form
                    </a>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted">
                      {form.size}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredForms.length === 0 && (
          <div className="text-center py-20 bg-surface rounded-3xl border border-border mt-8">
            <FileText size={48} className="mx-auto text-muted/50 mb-4" />
            <p className="text-muted font-bold uppercase tracking-widest text-sm">No forms matching your search found.</p>
          </div>
        )}
      </section>

      {/* Guidelines Section */}
      <section className="bg-surface py-12 sm:py-16 border-t border-border">
        <div className="section-container">
          <div className="card !p-8 md:!p-12 border border-border shadow-sm flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl text-accent flex items-center justify-center shrink-0 border border-accent/20">
              <ShieldAlert size={40} />
            </div>
            <div className="space-y-4 flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Submission <span className="text-secondary">Guidelines</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-background border border-border rounded flex items-center justify-center text-secondary shrink-0 mt-0.5"><ChevronRight size={14} /></div>
                  <p className="text-xs text-muted font-medium leading-relaxed">Forms must be filled clearly in English block letters.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-background border border-border rounded flex items-center justify-center text-secondary shrink-0 mt-0.5"><ChevronRight size={14} /></div>
                  <p className="text-xs text-muted font-medium leading-relaxed">Submit physical copies at the administrative office (Counter 1).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-background border border-border rounded flex items-center justify-center text-secondary shrink-0 mt-0.5"><ChevronRight size={14} /></div>
                  <p className="text-xs text-muted font-medium leading-relaxed">Please allow 3-5 working days for processing certificates.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-background border border-border rounded flex items-center justify-center text-secondary shrink-0 mt-0.5"><ChevronRight size={14} /></div>
                  <p className="text-xs text-muted font-medium leading-relaxed">Ensure all previous dues are cleared before applying.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
