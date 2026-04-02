import { motion } from 'motion/react';
import { 
  FileText, 
  Download,
  ChevronRight,
  Search
} from 'lucide-react';
import { useState } from 'react';

const forms = [
  { title: "Bonafide", ext: "PDF", size: "124 KB" },
  { title: "Recommendation Letter", ext: "DOCX", size: "45 KB" },
  { title: "Transfer Certificate", ext: "PDF", size: "112 KB" },
  { title: "Transcript", ext: "PDF", size: "198 KB" }
];

export default function DownloadForms() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredForms = forms.filter(form => 
    form.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Dark Hero Banner similar to the image provided */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden flex items-center justify-center min-h-[300px]">
        {/* Background Image (Using abstract dark or architectural look) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="Campus" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 w-full flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-widest text-center"
          >
            Downloadable Forms
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-lg mt-10 relative"
          >
            <input 
              type="text" 
              placeholder="Search forms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60" size={20} />
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          {filteredForms.length > 0 ? (
            <div className="bg-white rounded-[2rem] border border-brand-border p-8 md:p-12 shadow-[0_20px_60px_rgba(30,58,138,0.05)]">
              <h2 className="text-xl font-black text-brand-primary uppercase tracking-[0.2em] mb-8 pb-4 border-b border-brand-border flex items-center gap-3">
                <FileText className="text-brand-secondary" />
                Available Forms
              </h2>
              
              <ul className="space-y-6">
                {filteredForms.map((form, idx) => (
                  <motion.li
                    key={form.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl hover:bg-brand-primary/5 transition-colors border border-transparent hover:border-brand-primary/10">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary group-hover:scale-150 transition-transform" />
                        <span className="text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                          {form.title}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-6 ml-6 md:ml-0">
                        <span className="text-[10px] font-bold text-brand-subtext uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
                          {form.size} • {form.ext}
                        </span>
                        <button className="flex items-center gap-2 text-brand-primary font-black uppercase text-[11px] tracking-widest hover:text-brand-secondary transition-colors">
                          Download <Download size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-brand-border">
              <FileText size={64} className="mx-auto text-brand-subtext/30 mb-6" />
              <p className="text-brand-subtext font-black uppercase tracking-widest text-sm">No forms matching "{searchTerm}"</p>
            </div>
          )}

          {/* Submission Guidelines */}
          <div className="mt-12 bg-brand-primary/5 rounded-[2rem] p-10 border border-brand-primary/10">
            <h3 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-6">Submission Guidelines</h3>
            <ul className="space-y-3 text-brand-subtext font-medium text-sm">
              <li className="flex items-start gap-3">
                <ChevronRight size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                Forms must be filled clearly in English block letters.
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                Submit physical copies at the administrative office (Counter 1).
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                Please allow 3-5 working days for processing certificates.
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
