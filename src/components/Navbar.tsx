import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, GraduationCap, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    submenu: [
      { name: 'About SEMCOM', href: '/about/semcom' },
      { name: 'Dream, Vision, And Mission', href: '/about/vision' },
      { name: 'About Charutar Vidya Mandal', href: 'https://www.ecvm.net/', isExternal: true },
      { name: 'About Vallabh Vidyanagar', href: '/about/vvn' },
      { name: 'Chairman\'s Message', href: '/about/chairman' },
      { name: 'Principal\'s Message', href: '/about/principal' },
      { name: 'Faculty Team', href: '/faculty' },
      { name: 'IQAC', href: '/about/iqac' },
      { name: 'AICTE', href: '/about/aicte' },
      { name: 'Accreditations And Rankings', href: '/rankings' },
      { name: 'SEDGs Cell', href: '/about/sedgs' },
      { name: 'SC/ST/OBC Grievance Cell', href: '/about/grievance' },
    ],
  },
  {
    name: 'Academics',
    href: '/academics',
    submenu: [
      { name: 'BBA (ITM) (Hons.)', href: '/academics/bba-itm' },
      { name: 'BBA (Hons.)', href: '/academics/bba' },
      { name: 'BCom (Hons.)', href: '/academics/bcom' },
      { name: 'BCA (Hons.)', href: '/academics/bca' },
      { name: 'MCom', href: '/academics/mcom' },
      { name: 'PhD', href: '/academics/phd' },
    ],
  },
  {
    name: 'Admission',
    href: '/admission',
    submenu: [
      { name: 'FAQs', href: '/admission/faqs' },
      { name: 'Admission Brochure For Foreign Students', href: '/admission/brochure' },
      { name: 'UG/PG Admission Inquiry Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLScEV8t9uZNzw_AE_8YZL7XlDkhDJsv31q3T0pmKGZz_44JRzQ/viewform', isExternal: true },
      { name: 'UG/PG Admission Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfW7DaPvtSV331d4nwj02322wIHC6HX4DAamrxpBaqRZ5Zh7Q/viewform', isExternal: true },
      { name: 'PhD Admission', href: 'https://phdadmission.cvmu.ac.in/', isExternal: true },
    ],
  },
  {
    name: 'Research & Consultancy',
    href: '/research',
    submenu: [
      { name: 'SMTR Peer Reviewed International Journal', href: '/research/journal' },
      { name: 'SEMCOM E-Newsletter SEMSpire', href: '/research/newsletter' },
      { name: 'PhD Research Supervisors', href: 'https://semcom.ac.in/PDF/Research/Research%20Supervisor%20Details_12-JAN-2022.pdf', isExternal: true },
    ],
  },
  {
    name: 'Student Corner',
    href: '/student-corner',
    submenu: [
      { name: 'Students Council 2024-25', href: '/student/council' },
      { name: 'Facilities', href: '/student/facilities' },
      { name: 'Mega Events', href: '/student/events' },
      { name: 'Extension Activities', href: '/student/activities' },
      { name: 'NEEV Cell', href: '/student/neev' },
      { name: 'Important Links', href: '/student/links' },
      { name: 'Downloadable Forms', href: '/student/forms' },
    ],
  },
  {
    name: 'Placement',
    href: '/placement',
    submenu: [
      { name: 'Internship & Placement Cell', href: '/placement' },
      { name: 'Company Partners', href: '/placement/companies' },
      { name: 'MOU', href: '/placement/mou' },
      { name: 'Contact Placement Office', href: '/placement/contact' },
    ],
  },
  {
    name: 'Alumni',
    href: '/alumni',
    submenu: [
      { name: 'SEMCOM Alumni', href: '/alumni/list' },
      { name: 'Alumni Registration Form', href: '/alumni/register' },
    ],
  },
  {
    name: 'Gallery',
    href: '/gallery',
    submenu: [
      { name: 'Activities Photo', href: '/gallery/photos' },
      { name: 'Media Kit', href: '/gallery/media-kit' },
      { name: 'Press Note', href: '/gallery/press-note' },
    ],
  },
  {
    name: 'Reach Us',
    href: '/contact',
    submenu: [
      { name: 'Contact', href: '/contact' },
      { name: 'Education Verification', href: '/education-verification' },
      { name: 'Connect With Us On Facebook', href: 'https://www.facebook.com/SEMCOMIndia/', isExternal: true },
      { name: 'Connect With Us On Alumni Page', href: 'https://www.facebook.com/Semcomalumni/', isExternal: true },
      { name: 'Connect With Us On Instagram', href: 'https://www.instagram.com/semcomindia/', isExternal: true },
      { name: 'Career', href: 'https://www.cvmu.edu.in/career', isExternal: true },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-[100] transition-all duration-500 px-6 md:px-12',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl py-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border-b border-brand-border' 
          : 'bg-white/50 backdrop-blur-md py-6 border-b border-brand-border/5'
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link to="/" className={cn(
          "flex items-center gap-4 group shrink-0 transition-all duration-500",
          !isScrolled && "lg:opacity-0 lg:pointer-events-none lg:-translate-x-4"
        )}>
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-500 shadow-2xl",
            isScrolled ? "bg-brand-primary" : "bg-brand-primary/10"
          )}>
            <GraduationCap size={24} className={isScrolled ? "text-white" : "text-brand-primary"} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-black tracking-tighter block leading-none text-brand-primary">
              SEMCOM
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.2em] block mt-1 text-brand-subtext">
              Excellence Node
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <div
              key={link.name}
              className="relative group px-0.5"
              onMouseEnter={() => setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  'px-3 py-2 text-[9.5px] font-bold uppercase tracking-[0.12em] transition-all flex items-center gap-1.5 h-10 rounded-xl hover:bg-brand-primary/5',
                  isScrolled 
                    ? location.pathname === link.href ? 'text-brand-primary bg-brand-primary/5' : 'text-brand-text'
                    : location.pathname === link.href ? 'text-brand-primary' : 'text-brand-text'
                )}
              >
                <span className="relative">
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-secondary rounded-full" />
                  )}
                </span>
                {link.submenu && <ChevronDown size={14} className={cn('transition-transform duration-300 opacity-40', activeSubmenu === link.name && 'rotate-180 opacity-100 text-brand-secondary')} />}
              </Link>
              
              {link.submenu && activeSubmenu === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "absolute top-[calc(100%-4px)] w-72 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)] rounded-[2rem] border border-brand-border p-3",
                    idx > navLinks.length - 4 ? "right-0" : "left-0"
                  )}
                >
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar space-y-1">
                    {link.submenu.map((sub, i) => (
                      <div key={i}>
                        {sub.isExternal ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-brand-subtext hover:bg-brand-secondary/5 hover:text-brand-secondary transition-all rounded-2xl group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-border group-hover/item:bg-brand-secondary transition-colors" />
                            {sub.name}
                          </a>
                        ) : (
                          <Link
                            to={sub.href}
                            className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-brand-subtext hover:bg-brand-secondary/5 hover:text-brand-secondary transition-all rounded-2xl group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-border group-hover/item:bg-brand-secondary transition-colors" />
                            {sub.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-4">
           <Link to="/admission" className="btn-primary hidden md:flex items-center gap-2 !px-7 !py-2.5 !text-[10px] !rounded-xl !h-auto">
             Get Started
             <ArrowRight size={14} />
           </Link>
           <button
             className="xl:hidden w-11 h-11 flex items-center justify-center bg-brand-primary/5 rounded-xl text-brand-primary"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 p-6 xl:hidden flex flex-col gap-2 max-h-[85vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-50 last:border-0">
                <div className="flex items-center justify-between py-4">
                  <Link
                    to={link.href}
                    className={cn(
                      'text-lg font-bold transition-colors',
                      location.pathname === link.href ? 'text-brand-primary' : 'text-brand-text'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
                      }}
                      className="p-2 bg-gray-50 rounded-lg"
                    >
                      <ChevronDown size={20} className={cn('transition-transform duration-300', activeSubmenu === link.name && 'rotate-180')} />
                    </button>
                  )}
                </div>
                {link.submenu && activeSubmenu === link.name && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="pl-4 pb-4 flex flex-col gap-1 border-l-2 border-brand-secondary/20"
                  >
                    {link.submenu.map((sub, i) => (
                      sub.isExternal ? (
                        <a
                          key={i}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-subtext py-2.5 text-sm font-semibold hover:text-brand-secondary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ) : (
                        <Link
                          key={i}
                          to={sub.href}
                          className="text-brand-subtext py-2.5 text-sm font-semibold hover:text-brand-secondary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      )
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link to="/admission" className="btn-primary mt-6 text-center text-sm font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
              Start Admission Process
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
