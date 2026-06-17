import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Newspaper, ArrowRight, Loader2 } from 'lucide-react';

import { newsApi } from '@/lib/api';

export default function PressNotesList() {
  const [pressNotes, setPressNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPressNotes = async () => {
      try {
        const data = await newsApi.getPressNotes();
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
    <div className="pt-20 bg-background min-h-screen">
      {/* Header Section */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <button 
              onClick={() => navigate('/')} 
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest mb-6"
            >
              <ArrowLeft size={14} /> Back to Home
            </button>
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              Media <span className="text-secondary">Archive</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Explore our complete collection of press releases and official media announcements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <div className="bg-surface rounded-2xl shadow-card border border-border p-8 md:p-12 min-h-[600px]">
            
            {/* Search Bar */}
            <div className="relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input 
                type="text"
                placeholder="Search press releases..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-background rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium text-text placeholder:text-muted transition-all outline-none"
              />
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4 text-muted">
                <Loader2 size={40} className="animate-spin text-secondary" />
                <span className="font-bold text-sm">Loading Archive...</span>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNotes.length > 0 ? (
                  filteredNotes.map((note, idx) => {
                    const noteYear = note.created_at ? new Date(note.created_at).getFullYear() : new Date().getFullYear();
                    return (
                    <motion.div 
                      key={note.id || idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => navigate(`/news/press-note/${note.id || idx}`)}
                      className="group flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6 bg-background rounded-2xl border border-border hover:border-secondary/30 hover:shadow-sm transition-all cursor-pointer"
                    >
                       <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="text-2xl font-bold leading-none">{note.day}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">{note.month}</span>
                      </div>
                      
                      <div className="flex-grow space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Official Release</span>
                          <span className="text-xs font-medium text-muted">{note.day} {note.month} {noteYear}</span>
                        </div>
                        <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {note.title}
                        </h3>
                      </div>

                      <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-surface text-muted group-hover:text-secondary group-hover:bg-secondary/10 transition-colors shrink-0">
                         <ArrowRight size={20} />
                      </div>
                    </motion.div>
                  )})
                ) : (
                  <div className="text-center py-20">
                     <Newspaper size={48} className="mx-auto text-muted mb-4 opacity-50" />
                     <p className="text-muted font-medium">No results found for "{search}"</p>
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
