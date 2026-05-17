import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Search, Newspaper, ArrowRight, Loader2 } from 'lucide-react';

const API_BASE_URL = "/api";
const ADMIN_TOKEN = "mysecret123";

export default function PressNotesList() {
  const [pressNotes, setPressNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPressNotes = async () => {
      try {
        const headers = { "Authorization": ADMIN_TOKEN };
        const res = await fetch(`${API_BASE_URL}/news/press-notes`, { headers });
        const data = await res.json();
        if (data.success) {
          setPressNotes(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch press notes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPressNotes();
  }, []);

  const filteredNotes = pressNotes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-48 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <button 
              onClick={() => navigate('/')} 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-12"
            >
              <ArrowLeft size={14} /> Back to Home
            </button>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white italic mb-8 leading-tight">
              Media <span className="text-secondary">Archive</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8">
              Explore our complete collection of press releases and official media announcements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-6 relative -mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[4rem] shadow-2xl p-8 md:p-16 border border-gray-100 min-h-[600px]">
            
            {/* Search Bar */}
            <div className="relative max-w-md mb-16 mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Search press releases..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-16 pr-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 font-bold text-primary placeholder:text-gray-400 shadow-inner"
              />
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-300">
                <Loader2 size={48} className="animate-spin text-secondary" />
                <span className="font-black uppercase tracking-widest text-xs">Loading Archive...</span>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNotes.length > 0 ? (
                  filteredNotes.map((note, idx) => (
                    <motion.div 
                      key={note.id || idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.6 }}
                      onClick={() => navigate(`/news/press-note/${note.id || idx}`)}
                      className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center p-10 bg-white/40 backdrop-blur-md rounded-[3rem] border border-white/50 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                       <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-[1.5rem] flex flex-col items-center justify-center text-white shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-3xl font-black leading-none">{note.day}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-60">{note.month}</span>
                      </div>
                      
                      <div className="flex-grow space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-secondary/20">Official Release</span>
                          <div className="h-px w-8 bg-gray-200" />
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">{note.day} {note.month} 2024</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-black text-primary leading-tight group-hover:text-secondary transition-colors italic">
                          {note.title}
                        </h3>
                      </div>

                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 text-secondary opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                         <ArrowRight size={24} />
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-24">
                     <Newspaper size={64} className="mx-auto text-gray-100 mb-6" />
                     <p className="text-gray-400 font-bold italic">No results found for "{search}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
