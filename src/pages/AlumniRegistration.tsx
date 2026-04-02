import { motion } from 'motion/react';
import { 
  Lock, 
  Clock, 
  MessageSquare, 
  Users, 
  Bell, 
  Globe, 
  ArrowLeft,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AlumniRegistration() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-red-500/10 px-6 py-2 rounded-full border border-red-500/20 mb-8 backdrop-blur-md">
              <ShieldAlert size={16} className="text-red-500" />
              <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">System Status</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white italic mb-8 leading-tight">
              Registration <span className="text-red-500 underline decoration-4 underline-offset-8">Status</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Status Card */}
      <section className="py-24 px-6 relative -mt-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-gray-100 text-center relative overflow-hidden"
          >
            {/* Visual Icon */}
            <div className="relative z-10 space-y-12">
              <div className="bg-red-50 w-32 h-32 rounded-full flex items-center justify-center text-red-600 mx-auto border-8 border-white shadow-xl">
                <Lock size={48} strokeWidth={1.5} />
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-black text-primary italic leading-tight">
                  Sorry! Registrations <br />
                  <span className="text-red-600">Have Been Closed</span>
                </h2>
                <div className="w-24 h-1 bg-red-100 mx-auto rounded-full" />
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xl mx-auto">
                  The alumni registration portal is currently offline. We only accept new member registrations during specific cycles or before major signature events.
                </p>
              </div>

              {/* Alternative Options */}
              <div className="grid md:grid-cols-2 gap-6 pt-12">
                <div className="bg-gray-50 p-8 rounded-[3rem] text-left border border-gray-100 hover:border-red-100 transition-colors group">
                  <div className="p-4 bg-white rounded-2xl w-fit text-primary mb-6 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                    <Bell size={24} />
                  </div>
                  <h4 className="font-black text-primary mb-2 italic">Notify Me</h4>
                  <p className="text-xs text-gray-400 mb-6">Receive an email alert when the registration window reopens.</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-2">
                    Subscribe Now <Clock size={12} />
                  </button>
                </div>

                <div className="bg-gray-50 p-8 rounded-[3rem] text-left border border-gray-100 hover:border-red-100 transition-colors group">
                  <div className="p-4 bg-white rounded-2xl w-fit text-primary mb-6 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <h4 className="font-black text-primary mb-2 italic">Direct Inquiry</h4>
                  <p className="text-xs text-gray-400 mb-6">Need urgent access? Connect with our Alumni Relations team.</p>
                  <a href="mailto:alumni@semcom.ac.in" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-2">
                    Email Team <Globe size={12} />
                  </a>
                </div>
              </div>

              {/* Back Button */}
              <div className="pt-8">
                <Link to="/alumni/list" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-primary transition-colors group">
                  <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Association
                </Link>
              </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-50/50 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-50/50 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Community Info Section */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm">
          <div className="flex -space-x-4 shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-gray-100">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" />
              </div>
            ))}
            <div className="w-16 h-16 rounded-full border-4 border-white bg-secondary flex items-center justify-center text-primary font-black text-xs">+5k</div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-black text-primary italic mb-2">Join our <span className="text-secondary">Community</span></h3>
            <p className="text-gray-500 font-light">Despite registration closures, our network continues to grow through official events and alumni-led initiatives globaly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
