import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Users, Trees, Coffee, MapPin } from 'lucide-react';

export default function AboutVVN() {
  const sections = [
    {
      title: "Culture",
      icon: <Users className="text-teal-600" size={24} />,
      content: "The town is the synthesis of varied cultures, which enable it to evolve and expand the quality life, as well as to foster the environment of creativity amongst the student citizens. Those who stay here always cherish the golden moments of life on the campus. Today, the town has compounded in strength and consolidated itself to take on the challenges of emerging future. Vidyanagar is a mixed culture of say pan-india. One is sure to find the different ways of cultural exchange among the students and faculties.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Life",
      icon: <Landmark className="text-indigo-600" size={24} />,
      content: "The life at Vidyanagar is all about discovering one's self. To be a part of the life that has to offer a lot if one is ready to take up the challenges. Academics are at its best, fun and frolics do compete with it. Days are hectic in studies while Nights go with fun places with discussion about the day's happenings and eating out at almost all places glittering with all those neon lights. Roaming till late night is usual with the citizens even for girls it's very safe.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cbad2ad6?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Environment",
      icon: <Trees className="text-green-600" size={24} />,
      content: "Once entered in the Vidyanagar the lush greenery catches the eyes of the naturalist which is a sure means of breathing fresh air in all seasons. Its lush green trees of different types and kinds have not only made the town environment-friendly, but also have created a serene and ever-enjoyable tranquil atmosphere generating synergistic ecstasy on the campus. The campuses built are surrounded by the trees of various kinds. Vallabh Vidyanagar is blessed with the splendor of nature, attracting many to make the town their permanent home, add value to the academic life on the campus.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Amenities",
      icon: <Coffee className="text-orange-600" size={24} />,
      content: "Vallabh Vidyanagar has all the amenities which major metropolis has, rather it has the best of both the worlds - glamour of a big city and simplicity of a small town. Apart from academic staff, V.V.Nagar has the unique chain of food courts, almost all nationalized and non- nationalized banks and accommodation up to the five star levels. It encapsulates the contemporary trends of the youth, while it attempts to make those trends meaningful by making the presence of different spiritual vibes.",
    },
    {
      title: "Location",
      icon: <MapPin className="text-red-600" size={24} />,
      content: "Vallabh Vidyanagar embraces a rarity of rawon dore behind its origin and a variety of education with its development and growth. Strategically located between Ahmedabad and Vadodara, Vallabh Vidyanagar today has reckoned to be an Active Educational core in the Western constituent of India & just six kilometers from India's milk city Anand. One can visit the city of Vallabh Vidyanagar by flying to the International airport facility at Ahmedabad as well as Domestic airport facility at Vadodara. If one chooses to travel by road, National Highway 8 can be utilized -it takes less than an hour to reach Vallabh Vidyanagar from Vadodara.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=2070" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-serif font-black text-white uppercase tracking-[0.2em]"
          >
            About Vallabh Vidyanagar
          </motion.h1>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-12 -mt-10 relative z-20">
        <div className="bg-white border-2 border-teal-600/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-gray-200/50 space-y-16">
          
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-10 items-center",
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Image Side (if exists) */}
              {section.image && (
                <div className="lg:w-1/2 w-full group">
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src={section.image} alt={section.title} className="w-full h-[300px] object-cover" />
                  </div>
                </div>
              )}

              {/* Text Side */}
              <div className={cn(
                "w-full space-y-6",
                section.image ? "lg:w-1/2" : "text-center max-w-3xl mx-auto"
              )}>
                <div className={cn(
                  "flex items-center gap-4 mb-4",
                  !section.image && "justify-center"
                )}>
                  <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
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

// Helper function local copy since I'm in a new file
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
