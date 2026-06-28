import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { API_BASE } from '@/lib/api';
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
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/config`)
      .then(async res => {
        if (!res.ok) return;
        const data = await res.json();
        if (data.facility_images) {
          try {
            setGalleryImages(JSON.parse(data.facility_images));
          } catch(e) {}
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <span className="section-label">Our Infrastructure</span>
            <h2>World-Class <span className="text-secondary">Facilities</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Providing a holistic, safe, and technologically advanced environment for the leaders of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-background border-b border-border shadow-sm overflow-x-auto">
        <div className="section-container">
          <div className="flex gap-8 whitespace-nowrap py-4">
            {facilityCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 font-medium text-sm transition-all pb-2 border-b-2 ${
                  activeTab === cat.id 
                  ? 'text-primary border-primary' 
                  : 'text-muted border-transparent hover:text-primary'
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
      <section className="section-padding bg-background">
        <div className="section-container">
          {activeTab === 'boys-hostel' && (
            <div className="space-y-16">
              {hostelDetails.map((hostel, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-card border border-border h-[400px]">
                      <img src={hostel.image} alt={hostel.title} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 space-y-6"
                  >
                    <div>
                      <span className="section-label">{hostel.subtitle}</span>
                      <h3 className="text-3xl font-bold text-text mt-2">{hostel.title}</h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {hostel.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-border">
                          <div className="text-primary flex-shrink-0">
                            <feature.icon size={18} />
                          </div>
                          <span className="font-medium text-text text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <button className="btn-primary mt-4">
                      Check Vacancy <ChevronRight size={16} />
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          )}

          {activeTab !== 'boys-hostel' && (
            <div className="text-center py-20 bg-surface rounded-2xl border border-border">
              <Sparkles size={48} className="mx-auto text-secondary mb-6 opacity-50" />
              <h3 className="text-2xl font-bold text-text mb-4">Coming Soon</h3>
              <p className="text-muted max-w-lg mx-auto">We are updating our multimedia gallery for this section to provide you with a high-definition tour of our campus facilities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Dynamic Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="section-padding bg-background border-t border-border">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="section-label">Gallery</span>
              <h2 className="text-3xl font-bold mt-2">Campus <span className="text-secondary">Facilities</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((url, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-card border border-border aspect-square relative group"
                >
                  <img src={url} alt={`Facility ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Safety & Community Callout */}
      <section className="section-padding bg-surface border-t border-border">
        <div className="section-container">
          <div className="bg-primary/5 p-10 rounded-2xl border border-primary/10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text mb-3">Safety and Well-being First</h3>
              <p className="text-muted leading-relaxed">
                At SEMCOM, your safety is handled by 24/7 on-site professional security teams. Our hosteler-to-staff ratio ensures that every student gets the attention and support needed to thrive in a home away from home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
