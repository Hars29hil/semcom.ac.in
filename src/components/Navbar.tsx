import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
      { name: 'BBA-BA', href: '/academics/bba-ba' },
      { name: 'BBA-DM & AI', href: '/academics/bba-dm' },
      { name: 'BCom (Hons.)', href: '/academics/bcom' },
      { name: 'BCA (Hons.)', href: '/academics/bca' },
      { name: 'MBA', href: '/academics/mba' },
      { name: 'PhD', href: '/academics/phd' },
    ],
  },
  {
    name: 'Admission',
    href: '/admission',
    submenu: [
      { name: 'FAQs', href: '/admission/faqs' },
      { name: 'Admission Brochure For Foreign Students', href: '/admission/brochure' },
      { name: 'UG/PG Admission Inquiry Form', href: '/admission/inquiry' },
      { name: 'UG/PG Admission Form', href: 'https://admissions.cvmu.edu.in/', isExternal: true },
      { name: 'PhD Admission', href: 'https://phdadmission.cvmu.ac.in/', isExternal: true },
    ],
  },
  {
    name: 'Research & Consultancy',
    href: '/research',
    submenu: [
      { name: 'SMTR Peer Reviewed International Journal', href: '/research/journal' },
      { name: 'PhD Research Supervisors', href: 'https://semcom.ac.in/PDF/Research/Research%20Supervisor%20Details_12-JAN-2022.pdf', isExternal: true },
    ],
  },
  {
    name: 'Student Corner',
    href: '/student-corner',
    submenu: [
      { name: 'Facilities', href: '/student/facilities' },
      { name: 'Mega Events', href: '/events' },
      { name: 'Extension Activities', href: '/student/activities' },
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
      { name: 'MOU', href: '/pdf/MOU25.pdf', isExternal: true },
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
  },
  {
    name: 'Reach Us',
    href: '/contact',
    submenu: [
      { name: 'Contact', href: '/contact' },
      { name: 'Connect With Us On Facebook', href: 'https://www.facebook.com/SEMCOMIndia/', isExternal: true },
      { name: 'Connect With Us On Alumni Page', href: 'https://www.facebook.com/Semcomalumni/', isExternal: true },
      { name: 'Connect With Us On Instagram', href: 'https://www.instagram.com/semcomindia/', isExternal: true },
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
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
      className={cn(
        'sticky top-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md py-3 shadow-soft border-b border-border/50'
          : 'bg-surface py-4 border-b border-border'
      )}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/Picsart_26-04-28_09-18-02-251.png" alt="SEMCOM" className="h-14 lg:h-16 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1 flex-1 justify-center px-4">
          {navLinks.map((link, idx) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  'px-3.5 py-2.5 text-[12px] font-semibold transition-colors duration-200 flex items-center gap-1.5 rounded-lg',
                  location.pathname === link.href
                    ? 'text-secondary bg-secondary/5'
                    : 'text-text/80 hover:text-secondary hover:bg-secondary/5'
                )}
              >
                {link.name}
                {link.submenu && (
                  <ChevronDown
                    size={13}
                    className={cn(
                      'opacity-50 transition-transform duration-200',
                      activeSubmenu === link.name && 'rotate-180 opacity-100 text-secondary'
                    )}
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.submenu && activeSubmenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className={cn(
                      'absolute top-full mt-1 w-72 bg-surface shadow-soft rounded-xl border border-border p-2 overflow-hidden',
                      idx > navLinks.length - 4 ? 'right-0' : 'left-0'
                    )}
                  >
                    {link.submenu.map((sub, i) => (
                      <div key={i}>
                        {sub.isExternal ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3.5 py-2.5 text-[13px] font-medium text-text/70 hover:bg-secondary/5 hover:text-secondary transition-colors duration-200 rounded-lg group/item"
                          >
                            {sub.name}
                            <ArrowRight size={13} className="opacity-0 group-hover/item:opacity-70 transition-opacity" />
                          </a>
                        ) : (
                          <Link
                            to={sub.href}
                            onClick={() => setActiveSubmenu(null)}
                            className="flex items-center justify-between px-3.5 py-2.5 text-[13px] font-medium text-text/70 hover:bg-secondary/5 hover:text-secondary transition-colors duration-200 rounded-lg group/item"
                          >
                            {sub.name}
                            <ArrowRight size={13} className="opacity-0 group-hover/item:opacity-70 transition-opacity" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            asChild
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-md hover:shadow-lg transition-all px-6 whitespace-nowrap"
          >
            <a
              href="https://admissions.cvmu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>

          {/* CVMU Logo */}
          <div className="hidden md:flex items-center ml-4 pl-4 border-l border-border shrink-0">
            <a href="https://www.cvmu.edu.in/" target="_blank" rel="noopener noreferrer">
              <img src="/images/cvm-logo.png" alt="CVM University" className="h-14 lg:h-16 w-auto object-contain hover:scale-105 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-border text-primary hover:bg-background transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-0 bg-surface z-[200] p-6 xl:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/images/Picsart_26-04-28_09-18-02-251.png" alt="SEMCOM" className="h-10 w-auto object-contain" />
                <span className="text-xl font-bold text-primary font-heading">SEMCOM</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-lg bg-background flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div
                    className="flex items-center justify-between py-3 px-2 cursor-pointer"
                    onClick={() => link.submenu && setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                  >
                    <Link
                      to={link.href}
                      className="text-lg font-semibold text-primary"
                      onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <ChevronDown
                        size={20}
                        className={cn(
                          'text-muted transition-transform duration-200',
                          activeSubmenu === link.name && 'rotate-180 text-secondary'
                        )}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-1 border-l-2 border-secondary/20 ml-2 mb-2 overflow-hidden"
                      >
                        {link.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.href}
                            className="block py-2.5 px-3 text-[15px] font-medium text-muted hover:text-secondary transition-colors rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <a
              href="https://admissions.cvmu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Online
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
