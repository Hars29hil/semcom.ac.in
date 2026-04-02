import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'BBA Alumni, 2022',
    text: 'SEMCOM provided me with the perfect platform to develop my leadership skills. The faculty is incredibly supportive and the campus life is truly vibrant.',
    image: 'https://i.pravatar.cc/150?u=anjali',
  },
  {
    name: 'Rahul Patel',
    role: 'BCA Scholar, 2024',
    text: 'The advanced labs and corporate exposure at SEMCOM are exceptional. I feel empowered to lead in the global technology landscape.',
    image: 'https://i.pravatar.cc/150?u=rahul',
  },
  {
    name: 'Priya Desai',
    role: 'M.Com Graduate, 2023',
    text: 'The academic rigor and focus on strategic knowledge helped me secure a high-impact role at a prestigious global firm.',
    image: 'https://i.pravatar.cc/150?u=priya',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-bg overflow-hidden relative">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <Quote className="absolute top-10 left-10 w-[400px] h-[400px] text-brand-primary" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary"
          >
            Voice of SEMCOM
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[56px] font-heading font-black text-brand-text leading-tight italic tracking-tighter"
          >
            Alumni <span className="text-brand-primary">Impact</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-subtext font-medium text-lg italic"
          >
            Hear from the graduates who are now leading across various industries worldwide.
          </motion.p>
        </div>

        <div className="relative group/marquee cursor-default">
           <motion.div 
             animate={{ x: ["0%", "-52.5%"] }}
             transition={{ 
               duration: 35, 
               repeat: Infinity, 
               ease: "linear" 
             }}
             className="flex gap-8 group-hover/marquee:[animation-play-state:paused]"
           >
             {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
               <div
                 key={`${testimonial.name}-${index}`}
                 className="min-w-[420px] max-w-[420px] card-premium group relative hover:border-brand-primary/20 transition-all duration-500 scale-95 hover:scale-100"
               >
                 <div className="absolute top-10 right-10 text-brand-primary/5 group-hover:text-brand-secondary transition-colors">
                   <Quote size={56} className="rotate-180" />
                 </div>
                 
                 <div className="flex gap-1 mb-8">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                   ))}
                 </div>

                 <p className="text-xl text-brand-text font-medium mb-12 leading-relaxed italic line-clamp-3">
                   "{testimonial.text}"
                 </p>

                 <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                   <div className="relative group-hover:scale-110 transition-transform duration-500">
                     <img
                       src={testimonial.image}
                       alt={testimonial.name}
                       className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg border-2 border-white"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-secondary rounded-lg flex items-center justify-center text-white border-2 border-white">
                       <Sparkles size={12} />
                     </div>
                   </div>
                   <div className="space-y-1">
                     <h4 className="text-lg font-heading font-black text-brand-primary italic">{testimonial.name}</h4>
                     <p className="text-[10px] font-black uppercase tracking-widest text-brand-subtext">{testimonial.role}</p>
                   </div>
                 </div>
               </div>
             ))}
           </motion.div>
           
           {/* Fade Edges */}
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
