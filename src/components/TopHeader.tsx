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


    </div>
  );
}
