import { ChevronRight, Instagram } from 'lucide-react';

const WhatsApp = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function FloatingActions() {
  return (
    <>
      {/* Desktop: Right Side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex-col gap-3 items-end hidden lg:flex">
        {/* Social */}
        <div className="flex flex-col gap-2 mr-2">
          <a
            href="https://wa.me/916352135360"
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
