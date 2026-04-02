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
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-12"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 bg-primary/5 w-fit px-4 py-2 rounded-full border border-primary/10">
                <Zap size={16} className="text-primary animate-pulse" />
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Quick Access Portal</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-black text-primary italic leading-tight mb-8">
                Important <br />
                <span className="text-secondary">Resources</span>
              </h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed border-l-4 border-secondary pl-8">
                Connect with our governing bodies, educational trusts, and regulatory authorities to access official platforms and information.
              </p>
            </div>
            
            <div className="hidden lg:block w-96 h-96 relative">
              <div className="absolute inset-0 bg-secondary/10 rounded-full animate-ping opacity-20" />
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center p-12">
                <LayoutGrid size={120} className="text-primary opacity-10" />
                <Globe size={180} className="text-primary absolute" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importantLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
                    <link.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-black text-primary mb-4 group-hover:text-secondary transition-colors italic">
                    {link.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-primary font-black uppercase tracking-widest text-[10px]">Visit Website</span>
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto bg-[#1c2e5a] text-white p-12 md:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-serif font-black mb-6 italic">Looking for Student Internal Marks?</h3>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto uppercase tracking-widest">Access the student portal for result verification and internal standings.</p>
            <button className="bg-secondary text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              Student Information System <ArrowRight size={18} />
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
      </section>
    </div>
  );
}
