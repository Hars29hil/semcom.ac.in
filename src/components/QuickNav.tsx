import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Home, 
  Info, 
  BookOpen, 
  UserPlus, 
  Search, 
  Users, 
  Target, 
  GraduationCap, 
  Image as ImageIcon, 
  Award, 
  MapPin 
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Academics', href: '/academics', icon: BookOpen },
  { name: 'Admission', href: '/admission', icon: UserPlus },
  { name: 'Research & Consultancy', href: '/research', icon: Search },
  { name: 'Student Corner', href: '/student-corner', icon: Users },
  { name: 'Placement', href: '/placement', icon: Target },
  { name: 'Alumni', href: '/alumni', icon: GraduationCap },
  { name: 'Gallery', href: '/gallery', icon: ImageIcon },
  { name: 'Accreditations & Rankings', href: '/rankings', icon: Award },
  { name: 'Reach Us', href: '/contact', icon: MapPin },
];

export default function QuickNav() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={link.href}
                className="group p-4 bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <link.icon size={20} />
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
