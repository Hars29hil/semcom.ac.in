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
    <section className="bg-background py-10 sm:py-14">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
            >
              <Link
                to={link.href}
                className="group flex flex-col items-center justify-center text-center gap-2.5 p-4 sm:p-5 bg-surface rounded-xl border border-border w-[100px] sm:w-[120px] hover:shadow-soft hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/8 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <link.icon size={20} />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-text/80 group-hover:text-secondary transition-colors leading-tight">
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
