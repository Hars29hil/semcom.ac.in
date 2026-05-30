import { motion } from 'motion/react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Globe2, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="bg-surface py-16 sm:py-24 border-b border-border">
        <div className="section-container">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-secondary mb-6 tracking-widest uppercase">
            <Link to="/" className="text-muted hover:text-primary transition-colors">Home</Link>
            <span className="text-muted">/</span>
            <Link to="/placement" className="text-muted hover:text-primary transition-colors">Placement</Link>
            <span className="text-muted">/</span>
            <span className="text-primary">Recruiters</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10"
          >
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
                Our Global <span className="text-secondary">Network</span>
              </h1>
              <p className="text-sm sm:text-base text-muted font-medium leading-relaxed">
                Partnering with industry leaders across diverse sectors—from technology giants to healthcare innovators—to provide our students with unparalleled corporate exposure.
              </p>
            </div>
            
            <div className="w-full lg:w-80 relative shrink-0">
              <input 
                type="text" 
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-background border border-border rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all shadow-sm text-sm font-semibold text-primary"
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" size={16} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industry Overview */}
      <section className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industryCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card !p-6 bg-primary text-white border border-primary relative overflow-hidden group hover:-translate-y-1 transition-transform shadow-soft"
            >
              <div className="relative z-10 space-y-3">
                <cat.icon size={20} className="text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-white mb-0.5">{cat.count}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/60">{cat.name}</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 text-white/5 font-bold text-6xl select-none pointer-events-none group-hover:scale-110 transition-transform">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company List */}
      <section className="section-container pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompanies.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card !p-5 border border-border bg-surface hover:border-secondary transition-all group flex items-center justify-between shadow-sm cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <Building2 size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary group-hover:text-secondary transition-colors truncate">{company}</h3>
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted font-bold mt-1">
                    <MapPin size={10} className="text-secondary" /> <span>Pan India / Global</span>
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 rounded-md bg-background border border-border flex items-center justify-center text-muted group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all shrink-0">
                <ChevronRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredCompanies.length === 0 && (
          <div className="text-center py-24 bg-surface rounded-2xl border-2 border-dashed border-border mt-6">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
              <Search size={24} className="text-muted" />
            </div>
            <p className="text-primary font-bold text-sm">No matching partner found</p>
            <p className="text-muted text-xs mt-1 font-medium">Try adjusting your search criteria</p>
          </div>
        )}
      </section>

      {/* Recruiter CTA */}
      <section className="section-container pb-16">
        <div className="card !p-8 sm:!p-12 bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white text-center space-y-8 relative overflow-hidden shadow-soft max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Join Our Network of <span className="text-accent">Excellence</span></h2>
            <p className="text-white/70 text-sm leading-relaxed font-semibold">
              Are you looking to recruit the bright minds of tomorrow? Partner with SEMCOM for your next internship or placement cycle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button className="btn-primary flex items-center gap-2">
                <span>Register as Recruiter</span>
                <ArrowRight size={14} />
              </button>
              <button className="bg-white/10 text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
                <span>Placement Report</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
