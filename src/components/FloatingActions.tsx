import { ChevronRight, Phone as WhatsApp, Instagram } from 'lucide-react';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop: Right Side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex-col gap-3 items-end hidden lg:flex">
        {/* Social */}
        <div className="flex flex-col gap-2 mr-2">
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            aria-label="Contact on WhatsApp"
          >
            <WhatsApp size={20} />
          </a>
          <a
            href="https://instagram.com/semcomindia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            aria-label="Follow on Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Apply Now — Vertical */}
        <a
          href="https://admissions.cvmu.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-white font-semibold uppercase tracking-wider text-[11px] py-6 px-3 rounded-l-xl shadow-lg hover:bg-secondary-hover transition-colors duration-300 [writing-mode:vertical-lr] flex items-center gap-2"
        >
          Apply Now
          <ChevronRight className="rotate-90 h-3.5 w-3.5" />
        </a>
      </div>

      {/* Mobile: Bottom */}
      <div className="fixed bottom-5 right-5 z-[90] flex flex-col gap-3 items-end lg:hidden">
        <a
          href="https://admissions.cvmu.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-white font-semibold uppercase tracking-wider text-[11px] py-3.5 px-5 rounded-full shadow-lg hover:bg-secondary-hover transition-colors duration-300 flex items-center gap-2"
        >
          Apply Now
          <ChevronRight className="h-4 w-4" />
        </a>

        <div className="flex flex-col gap-2.5">
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Contact on WhatsApp"
          >
            <WhatsApp size={22} />
          </a>
          <a
            href="https://instagram.com/semcomindia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Follow on Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>
    </>
  );
}
