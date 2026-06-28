import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Users, Trees, Coffee, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutVVN() {
  const sections = [
    {
      title: "Culture",
      icon: <Users className="text-secondary" size={20} />,
      content: "The town is the synthesis of varied cultures, which enable it to evolve and expand the quality of life, as well as to foster the environment of creativity amongst the student citizens. Those who stay here always cherish the golden moments of life on the campus. Today, the town has compounded in strength and consolidated itself to take on the challenges of the emerging future. Vidyanagar is a mixed culture of say pan-India. One is sure to find the different ways of cultural exchange among the students and faculties.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Life",
      icon: <Landmark className="text-secondary" size={20} />,
      content: "Life at Vidyanagar is all about discovering one's self. To be a part of the life that has to offer a lot if one is ready to take up the challenges. Academics are at its best, fun and frolics do compete with it. Days are hectic in studies while nights go with fun places with discussions about the day's happenings and eating out at almost all places glittering with neon lights. Roaming till late night is usual with the citizens — even for girls it is extremely safe.",
      image: "/life.png"
    },
    {
      title: "Environment",
      icon: <Trees className="text-secondary" size={20} />,
      content: "Once entered in Vidyanagar, the lush greenery catches the eyes of the naturalist, which is a sure means of breathing fresh air in all seasons. Its lush green trees of different types and kinds have not only made the town environment-friendly, but also have created a serene and ever-enjoyable tranquil atmosphere generating synergistic ecstasy on campus. Vallabh Vidyanagar is blessed with the splendor of nature, attracting many to make the town their permanent home, adding value to the academic life on campus.",
      image: "/Environment.png"
    },
    {
      title: "Amenities",
      icon: <Coffee className="text-secondary" size={20} />,
      content: "Vallabh Vidyanagar has all the amenities which major metropolises have, rather it has the best of both worlds — the glamour of a big city and the simplicity of a small town. Apart from academic staff, V.V. Nagar has a unique chain of food courts, almost all nationalized and non-nationalized banks, and accommodation up to five-star levels. It encapsulates the contemporary trends of youth while attempting to make those trends meaningful through different spiritual vibes.",
    },
    {
      title: "Location",
      icon: <MapPin className="text-secondary" size={20} />,
      content: "Vallabh Vidyanagar embraces a rarity of rawon dore behind its origin and a variety of education with its development and growth. Strategically located between Ahmedabad and Vadodara, Vallabh Vidyanagar today is reckoned to be an active educational core in Western India & just six kilometers from India's milk city, Anand. One can visit Vallabh Vidyanagar by flying to the international airport at Ahmedabad or the domestic airport at Vadodara. If traveling by road, National Highway 8 takes less than an hour from Vadodara.",
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner — Clean Dark Primary Theme matching Hero */}
      <div className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-primary text-white py-16 sm:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">About Vallabh Vidyanagar</span>
          </div>

          <h1 className="text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold tracking-tight mb-4">
            About <span className="text-accent">Vallabh Vidyanagar</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Discover the rich culture, lively campus life, tranquil environment, and premium student amenities of Western India's premier academic township.
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="section-container py-12 sm:py-16">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-10 items-center justify-between",
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Image Side (if exists) */}
              {section.image && (
                <div className="lg:w-1/2 w-full group shrink-0">
                  <div className="card !p-0 overflow-hidden relative border border-border shadow-soft aspect-[1.5]">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" />
                  </div>
                </div>
              )}

              {/* Text Side */}
              <div className={cn(
                "w-full space-y-4",
                section.image ? "lg:w-1/2" : "text-center max-w-3xl mx-auto"
              )}>
                <div className={cn(
                  "flex items-center gap-3 pb-3 border-b border-border/80 mb-2",
                  !section.image && "justify-center"
                )}>
                  <div className="w-9 h-9 bg-surface border border-border rounded-xl flex items-center justify-center text-secondary shrink-0 shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="font-bold text-lg text-primary uppercase tracking-wider">
                    {section.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-semibold">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper function
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
