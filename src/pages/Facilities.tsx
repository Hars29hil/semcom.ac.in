import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Home, 
  Coffee, 
  ShieldCheck, 
  Wifi, 
  Droplets, 
  Thermometer,
  Dumbbell,
  BookOpen,
  Monitor,
  Users,
  Building2,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const facilityCategories = [
  { id: 'boys-hostel', name: 'Boys Hostel', icon: Home },
  { id: 'girls-hostel', name: 'Girls Hostel', icon: Building2 },
  { id: 'sports', name: 'Sports Facility', icon: Dumbbell },
  { id: 'classrooms', name: 'Class Rooms', icon: BookOpen },
  { id: 'it-centre', name: 'IT Centre', icon: Monitor },
  { id: 'resource-centre', name: 'Information Resource', icon: Sparkles }
];

const hostelDetails = [
  {
    title: "A M Naik House of Scholars",
    subtitle: "Boys Hostel",
    image: "https://images.unsplash.com/photo-1555854816-802f188090e4?q=80&w=2070&auto=format&fit=crop",
    features: [
      { text: "Well-ventilated Rooms (AC/Non-AC Options)", icon: Wifi },
      { text: "Cafeteria & Canteen on-site", icon: Coffee },
      { text: "24/7 CCTV & Professional Security", icon: ShieldCheck },
      { text: "Complete Furniture (Cot, Desk, Cupboard)", icon: Home },
      { text: "RO Treated Cold Drinking Water", icon: Droplets },
      { text: "Hot Water Supply in Bathrooms", icon: Thermometer }
    ]
  },
  {
    title: "Bhaikaka Boys Hostel",
    subtitle: "Value Living",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
    features: [
      { text: "Prime Location (300m from Campus)", icon: Building2 },
      { text: "Twin/Triple Sharing Ventilation", icon: Users },
      { text: "Dedicated Study Space for Each Resident", icon: BookOpen },
      { text: "24/7 Security Personnel", icon: ShieldCheck },
      { text: "Pure RO Drinking Water", icon: Droplets },
      { text: "Consistent Hot Water Access", icon: Thermometer }
    ]
  }
];

export default function Facilities() {
  const [activeTab, setActiveTab] = useState('boys-hostel');

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Infrastructure</span>
              <h1 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight">
                World-Class <br />
                <span className="text-secondary italic">Facilities</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-md font-light border-l-2 border-white/20 pl-8 mb-4">
              Providing a holistic, safe, and technologically advanced environment for the leaders of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm overflow-x-auto">
        <div className="container mx-auto px-6">
          <div className="flex gap-10 whitespace-nowrap py-6">
            {facilityCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 font-black uppercase tracking-widest text-xs transition-all pb-2 border-b-2 ${
                  activeTab === cat.id 
                  ? 'text-primary border-primary scale-110' 
                  : 'text-gray-400 border-transparent hover:text-primary'
                }`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'boys-hostel' && (
            <div className="space-y-24">
              {hostelDetails.map((hostel, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 relative group"
                  >
                    <div className="absolute -inset-4 bg-gray-100 rounded-[3rem] -z-10 group-hover:bg-secondary transition-colors" />
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                      <img src={hostel.image} alt={hostel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 space-y-8"
                  >
                    <div>
                      <h4 className="text-secondary font-black uppercase tracking-widest text-sm mb-2">{hostel.subtitle}</h4>
                      <h3 className="text-4xl md:text-5xl font-serif font-black text-primary italic leading-tight">{hostel.title}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {hostel.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                            <feature.icon size={20} />
                          </div>
                          <span className="font-bold text-gray-700 text-sm leading-snug">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all shadow-xl">
                      Check Vacancy <ChevronRight size={18} />
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          )}

          {activeTab !== 'boys-hostel' && (
            <div className="text-center py-40">
              <Sparkles size={64} className="mx-auto text-secondary mb-10 animate-pulse" />
              <h2 className="text-4xl font-serif font-black text-primary italic mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">We are updating our multimedia gallery for this section to provide you with a high-definition tour of our campus facilities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Safety & Community Callout */}
      <section className="py-24 bg-gray-50 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 rounded-[4rem] shadow-sm flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
          <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-secondary shrink-0 rotate-12">
            <ShieldCheck size={48} />
          </div>
          <div>
            <h3 className="text-3xl font-serif font-black text-primary mb-4 italic">Safety and Well-being First</h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              At SEMCOM, your safety is handled by 24/7 on-site professional security teams. Our hosteler-to-staff ratio ensures that every student gets the attention and support needed to thrive in a home away from home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
