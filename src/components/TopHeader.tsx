import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopHeader() {
  return (
    <div className="flex flex-col relative z-[110]">
      {/* Utility Bar */}
      <div className="bg-primary text-white/80 py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-medium border-b border-white/10">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-accent shrink-0" />
            <span className="truncate max-w-[140px] sm:max-w-none text-[11px]">Vallabh Vidyanagar, Gujarat</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5">
            <Globe size={12} className="text-accent" />
            <span className="text-[11px]">CVM University Institution</span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Quick Contact */}
          <div className="flex items-center gap-3 border-r border-white/10 pr-3 sm:pr-5">
            <a href="tel:+916352135360" className="hover:text-accent transition-colors" aria-label="Call us">
              <Phone size={13} />
            </a>
            <a href="mailto:principal.semcom@cvmu.edu.in" className="hover:text-accent transition-colors" aria-label="Email us">
              <Mail size={13} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-5 text-[11px]">
            <a href="#" className="hover:text-accent transition-colors">NIRF</a>
            <a href="#" className="hover:text-accent transition-colors">IQAC</a>
            <a href="#" className="hover:text-accent transition-colors">Alumni</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2.5">
            <a href="https://www.facebook.com/SEMCOMIndia/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook size={13} />
            </a>
            <a href="https://www.instagram.com/semcomindia/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram size={13} />
            </a>
            <a href="#" className="hidden sm:block hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter size={13} />
            </a>
            <a href="#" className="hidden sm:block hover:text-accent transition-colors" aria-label="YouTube">
              <Youtube size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="hidden sm:flex bg-surface py-5 px-6 lg:px-8 items-center justify-between gap-6 border-b border-border">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 shrink-0">
          <div className="h-16 md:h-20 flex items-center">
            <img
              src="/images/Picsart_26-04-28_09-18-02-251.png"
              alt="SEMCOM Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Right Info */}
        <div className="flex items-center gap-6 lg:gap-10">
          {/* Contact */}
          <div className="hidden xl:flex flex-col items-end gap-1">
            <a href="mailto:principal.semcom@cvmu.edu.in" className="flex items-center gap-2 text-muted text-xs font-medium hover:text-secondary transition-colors">
              <Mail size={14} className="text-secondary" />
              principal.semcom@cvmu.edu.in
            </a>
            <a href="tel:+916352135360" className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors">
              <Phone size={13} className="text-secondary" />
              (+91) 6352135360
            </a>
          </div>

          {/* CVM Partner Logo */}
          <div className="hidden lg:flex items-center gap-4 pl-6 border-l border-border">
            <a
              href="https://www.cvmu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="hidden xl:flex flex-col items-end">
                <span className="text-xs font-semibold text-primary group-hover:text-secondary transition-colors">CVM University</span>
                <span className="text-[10px] text-muted">Parent Body</span>
              </div>
              <div className="h-12 md:h-14 flex items-center transition-all group-hover:scale-105 overflow-hidden">
                <img src="/images/cvm-logo.png" alt="CVM University" className="h-full w-auto object-contain" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
