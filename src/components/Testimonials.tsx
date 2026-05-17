import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'BBA Alumni, 2022',
    company: 'Deloitte',
    text: 'SEMCOM provided me with the perfect platform to develop my leadership skills. The faculty is incredibly supportive and the campus life is truly vibrant.',
    image: 'https://i.pravatar.cc/150?u=anjali',
    rating: 5,
  },
  {
    name: 'Rahul Patel',
    role: 'BCA Scholar, 2024',
    company: 'Microsoft',
    text: 'The advanced labs and corporate exposure at SEMCOM are exceptional. I feel empowered to lead in the global technology landscape.',
    image: 'https://i.pravatar.cc/150?u=rahul',
    rating: 5,
  },
  {
    name: 'Priya Desai',
    role: 'M.Com Graduate, 2023',
    company: 'KPMG',
    text: 'The academic rigor and focus on strategic knowledge helped me secure a high-impact role at a prestigious global firm.',
    image: 'https://i.pravatar.cc/150?u=priya',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'BBA ITM, 2023',
    company: 'Amazon',
    text: 'The industry connections and placement support at SEMCOM are unmatched. I landed my dream job before graduation!',
    image: 'https://i.pravatar.cc/150?u=arjun',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <span className="section-label justify-center">Student Voices</span>
          <h2>
            Alumni <span className="text-secondary">Stories</span>
          </h2>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Hear from graduates who are now leading across various industries worldwide.
          </p>
        </div>

        {/* Testimonials Grid — Simple Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 420}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="min-w-[380px] max-w-[380px] flex-shrink-0"
              >
                <div className="card group !p-7 h-full relative">
                  {/* Quote Mark */}
                  <div className="absolute top-5 right-5 text-border">
                    <Quote size={32} className="rotate-180" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[15px] text-text leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  {/* Company Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-border mb-6">
                    <TrendingUp size={12} className="text-secondary" />
                    <span className="text-[11px] font-semibold text-primary">{testimonial.company}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-5 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-border"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-[11px] text-muted font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 bg-secondary'
                  : 'w-2 bg-border hover:bg-muted/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-14 grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { label: 'Alumni Network', value: '5000+' },
            { label: 'Placement Rate', value: '92%' },
            { label: 'Global Reach', value: '15+ Countries' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center justify-center gap-4 p-5 bg-surface rounded-xl border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                {i === 0 && <Star size={18} />}
                {i === 1 && <TrendingUp size={18} />}
                {i === 2 && <Quote size={18} />}
              </div>
              <div>
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-[11px] text-muted font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
