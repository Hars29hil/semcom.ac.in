import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight, Youtube, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Institutional Link',
    links: [
      { name: 'About SEMCOM', href: '/about/semcom' },
      { name: 'Admissions 2026', href: '/admission' },
      { name: 'Academic Calendar', href: '/academics' },
      { name: 'Research Journal', href: '/research/journal' },
      { name: 'Placement Cell', href: '/placement' },
      { name: 'IQAC Portal', href: '/about/iqac' },
    ],
  },
  {
    title: 'Student Services',
    links: [
      { name: 'NEEV Cell', href: '/student/neev' },
      { name: 'Facilities', href: '/student/facilities' },
      { name: 'Alumni Network', href: '/alumni' },
      { name: 'Downloads', href: '/student/downloads' },
      { name: 'Reach Us', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary pt-32 pb-16 text-white overflow-hidden relative">
      {/* Background Accent Architecture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
         <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-brand-secondary rounded-full blur-[200px]" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-white rounded-full blur-[150px]" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-4 gap-20 mb-28">
          <div className="lg:col-span-1 space-y-12">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:bg-brand-secondary group-hover:border-transparent transition-all duration-500 shadow-2xl group-hover:rotate-12">
                <GraduationCap size={36} />
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-heading font-black tracking-[-0.05em] block leading-none italic">
                  SEMCOM
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary block opacity-80">
                  Legacy Node
                </span>
              </div>
            </Link>
            
            <p className="text-white/60 font-medium leading-relaxed italic text-base max-w-xs">
              Pioneering commerce and management education since 1997. A premier institution of Charutar Vidya Mandal (CVM) University.
            </p>
            
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-white hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (section.title === 'Institutional Link' ? (
            <div key={section.title} className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary border-b border-white/10 pb-4 inline-block">{section.title}</h4>
              <ul className="space-y-6">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/60 font-bold hover:text-brand-secondary transition-all flex items-center gap-4 group text-[13px] uppercase tracking-widest"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-secondary scale-50 group-hover:scale-100 opacity-20 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={section.title} className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary border-b border-white/10 pb-4 inline-block">{section.title}</h4>
              <ul className="space-y-6">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/60 font-bold hover:text-brand-secondary transition-all flex items-center gap-4 group text-[13px] uppercase tracking-widest"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-secondary scale-50 group-hover:scale-100 opacity-20 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )))}

          <div className="space-y-10">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary border-b border-white/10 pb-4 inline-block">Contact Hub</h4>
            <ul className="space-y-10">
              <li className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary border border-white/10 shrink-0 group hover:bg-brand-secondary hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                   <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30">Official Address</p>
                   <p className="text-white/80 text-sm font-bold leading-relaxed max-w-[200px] italic">
                     Opp. Shastri Ground, V.V. Nagar - 388120, Gujarat, India.
                   </p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary border border-white/10 shrink-0 group hover:bg-brand-secondary hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                   <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30">Direct Enquiry</p>
                   <p className="text-white/80 text-sm font-bold leading-relaxed italic">
                     principal.semcom@cvmu.edu.in
                   </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Sub-footer */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 group/sub">
          <div className="flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-brand-secondary animate-pulse shadow-[0_0_15px_rgba(13,148,136,0.5)]" />
             <p className="text-white/20 text-[11px] font-black uppercase tracking-[0.3em] group-hover/sub:text-white/40 transition-colors">
               © 2026 SEMCOM • A CVM University Institution • Crafted For Excellence
             </p>
          </div>
          <div className="flex gap-12 text-white/20 text-[10px] font-black uppercase tracking-[0.4em] items-center">
            <Link to="/about/aicte" className="hover:text-brand-secondary transition-colors flex items-center gap-2">
              <Shield size={14} />
              AICTE
            </Link>
            <Link to="/rankings" className="hover:text-brand-secondary transition-colors flex items-center gap-2">
              <Globe size={14} />
              University
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
