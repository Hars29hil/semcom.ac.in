import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight, Youtube, Globe, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Institutional',
    links: [
      { name: 'About SEMCOM', href: '/about/semcom' },
      { name: 'Admissions 2026', href: '/admission' },
      { name: 'Academic Programs', href: '/academics' },
      { name: 'Research Journal', href: '/research/journal' },
      { name: 'Placement Cell', href: '/placement' },
      { name: 'IQAC Portal', href: '/about/iqac' },
    ],
  },
  {
    title: 'Student Services',
    links: [
      { name: 'Campus Facilities', href: '/student/facilities' },
      { name: 'Alumni Network', href: '/alumni' },
      { name: 'Downloads', href: '/student/downloads' },
      { name: 'Media Kit', href: '/media-kit' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/SEMCOMIndia/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/semcomindia/', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 sm:pt-20 pb-8 text-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/10">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="text-xl font-bold leading-none block">SEMCOM</span>
                <span className="text-[10px] text-accent font-medium tracking-wider">CVM University</span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed">
              Pioneering commerce and management education since 1997. A premier institution of Charutar Vidya Mandal University.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary text-white/70 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="pt-5 border-t border-white/10">
              <p className="text-[11px] font-medium text-white/40 uppercase tracking-wider mb-3">Stay Connected</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-secondary/50 transition-colors"
                />
                <button className="px-3 py-2.5 bg-secondary rounded-lg text-white hover:bg-secondary-hover transition-colors">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-accent border-b border-white/10 pb-3">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/50 text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-secondary/50" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-accent border-b border-white/10 pb-3">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Opp. Shastri Ground, V.V. Nagar - 388120, Gujarat, India.
                  </p>
                </div>
              </li>
              <li className="flex gap-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:principal.semcom@cvmu.edu.in" className="text-white/70 text-sm hover:text-white transition-colors">
                    principal.semcom@cvmu.edu.in
                  </a>
                </div>
              </li>
              <li className="flex gap-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+91-2692-230331" className="text-white/70 text-sm hover:text-white transition-colors">
                    +91-2692-230331
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/25 text-xs font-medium">
              © 2026 SEMCOM — A CVM University Institution. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-white/25 text-[11px] font-medium items-center">
              <Link to="/about/aicte" className="hover:text-white/60 transition-colors flex items-center gap-1.5">
                <Shield size={12} />
                AICTE Approved
              </Link>
              <Link to="/rankings" className="hover:text-white/60 transition-colors flex items-center gap-1.5">
                <Globe size={12} />
                NAAC A+
              </Link>
              <span className="text-accent/50 flex items-center gap-1.5">
                UGC Recognized
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
