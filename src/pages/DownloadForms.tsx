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

const forms = [
  {
    title: "Bonafide Certificate",
    category: "Certificate",
    description: "Official document confirming your current enrollment status at SEMCOM.",
    icon: FileCheck,
    size: "124 KB",
    type: "PDF"
  },
  {
    title: "Recommendation Letter",
    category: "Academic",
    description: "Request form for academic or professional recommendations from faculty.",
    icon: GraduationCap,
    size: "156 KB",
    type: "PDF"
  },
  {
    title: "Transfer Certificate (TC)",
    category: "Administrative",
    description: "Application for issuance of TC upon completion of program or withdrawal.",
    icon: ClipboardCheck,
    size: "112 KB",
    type: "PDF"
  },
  {
    title: "Transcript Request",
    category: "Academic",
    description: "Official request for detailed academic records and semester-wise marks.",
    icon: ScrollText,
    size: "198 KB",
    type: "PDF"
  }
];

export default function DownloadForms() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredForms = forms.filter(form => 
    form.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-secondary font-black uppercase tracking-[0.5em] text-xs mb-6 block">Document Portal</span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white italic leading-tight mb-8">
              Downloadable <span className="text-secondary underline decoration-4 underline-offset-8">Forms</span>
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mt-12">
              <input 
                type="text" 
                placeholder="Search for a form..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 px-8 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary transition-all backdrop-blur-md"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredForms.map((form, idx) => (
              <motion.div
                key={form.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 shadow-sm hover:shadow-xl transition-all group flex gap-8 items-start relative overflow-hidden"
              >
                {/* Visual Category Label */}
                <div className="absolute top-8 right-8 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 font-black uppercase tracking-widest text-[8px] text-gray-400 group-hover:text-primary transition-colors">
                  {form.category}
                </div>

                <div className="bg-primary/5 p-6 rounded-3xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <form.icon size={32} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-black text-primary italic">
                    {form.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    {form.description}
                  </p>
                  
                  <div className="flex items-center gap-6 pt-4">
                    <button className="flex items-center gap-3 bg-secondary text-primary px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform shadow-lg shadow-secondary/20">
                      <Download size={14} /> Download {form.type}
                    </button>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                      Filesize: {form.size}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredForms.length === 0 && (
            <div className="text-center py-20 bg-gray-100 rounded-[4rem] border-2 border-dashed border-gray-200">
              <FileText size={64} className="mx-auto text-gray-300 mb-6" />
              <p className="text-gray-400 font-black uppercase tracking-widest text-sm">No forms matching your search found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-16 items-center">
          <div className="bg-red-50 p-12 rounded-full text-red-600 shrink-0">
            <ShieldAlert size={80} strokeWidth={1} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-primary leading-tight italic">
              Submission <span className="text-secondary">Guidelines</span>
            </h2>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="flex items-center gap-3">
                <ChevronRight className="text-secondary" />
                Forms must be filled clearly in English block letters.
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="text-secondary" />
                Submit physical copies at the administrative office (Counter 1).
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="text-secondary" />
                Please allow 3-5 working days for processing certificates.
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="text-secondary" />
                Ensure all previous dues are cleared before applying.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
