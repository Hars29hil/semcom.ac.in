import { motion } from 'motion/react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Globe2, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';

const companies = [
  "Reliance Communication", "Alstom Ltd", "Serco BPO PVT. LTD.", "Merit Life Sciences Pvt Ltd",
  "Eon solutions Pvt ltd", "JAY CHEMICAL INDUSTRIES LTD", "ACE INDIA Consultancy",
  "Universal Hunt Pvt. Ltd", "TIANNO", "Tesco Global Pvt Ltd", "Info Edge India Ltd",
  "Blue Star Pvt. Ltd", "Collabera Technologies Pvt. Ltd.", "Atul Ltd", "Steeltrack Industries",
  "Cyberoam Pvt. Ltd", "Bajaj Allianz Pvt Ltd", "NJ INDIA INVEST PVT. LTD.", "SEO WebPlanet Solutions",
  "Zydus Cadila Healthcare Ltd", "Encardio-Rite India Pvt. Ltd.", "VALUE CHAIN SOLUTION PVT LTD",
  "Tata Consultancy Services", "Jhaveri Securities", "Greenopia", "Laxmi Diamond Pvt. Ltd",
  "Peass Industrial Engineers Pvt. Ltd.", "Jupiter Personal Services Pvt Ltd", "Creative Management Services"
];

const industryCategories = [
  { name: "IT & Software", count: "12+", icon: Globe2 },
  { name: "Healthcare", count: "8+", icon: TrendingUp },
  { name: "Manufacturing", count: "15+", icon: Building2 },
  { name: "Finance", count: "10+", icon: Briefcase }
];

export default function CompanyDetail() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companies.filter(company =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row justify-between items-end gap-12"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6 bg-secondary/10 w-fit px-4 py-2 rounded-full border border-secondary/20">
                <Building2 size={16} className="text-primary" />
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Recruitment Partners</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-black text-primary leading-tight italic mb-8">
                Our Global <br />
                <span className="text-secondary underline decoration-4 underline-offset-8">Network</span>
              </h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed border-l-4 border-secondary pl-8">
                Partnering with industry leaders across diverse sectors—from technology giants to healthcare innovators—to provide our students with unparalleled corporate exposure.
              </p>
            </div>
            
            <div className="w-full lg:w-96 relative">
              <input 
                type="text" 
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-5 px-8 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all shadow-sm"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-primary text-white p-8 rounded-[3rem] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform"
              >
                <div className="relative z-10">
                  <cat.icon size={24} className="text-secondary mb-4" />
                  <div className="text-3xl font-black mb-1">{cat.count}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{cat.name}</div>
                </div>
                <div className="absolute -bottom-4 -right-4 text-white/5 font-black text-8xl italic select-none">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 20) * 0.03 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex items-center justify-between group hover:shadow-2xl hover:border-secondary transition-all cursor-default"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{company}</h3>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-black mt-1">
                      <MapPin size={10} className="text-secondary" /> Pan India / Global
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary transition-all">
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCompanies.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[4rem] border-2 border-dashed border-gray-200">
              <Search size={48} className="mx-auto text-gray-200 mb-6" />
              <p className="text-gray-400 font-black uppercase tracking-widest text-sm italic">No matching partner found</p>
            </div>
          )}
        </div>
      </section>

      {/* Recruiter CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a2e5a] to-[#0a1931] p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic mb-8">Join Our Network of <span className="text-secondary italic underline decoration-secondary underline-offset-8">Excellence</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Are you looking to recruit the bright minds of tomorrow? Partner with SEMCOM for your next internship or placement cycle.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-secondary text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3">
                Register as Recruiter <ArrowRight size={16} />
              </button>
              <button className="bg-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all border border-white/10 flex items-center gap-3">
                Placement Report <ExternalLink size={16} />
              </button>
            </div>
          </div>
          {/* Background Decorative Rings */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
      </section>
    </div>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
