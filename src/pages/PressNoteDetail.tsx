import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Download, Share2, FileText, ImageIcon, Loader2 } from 'lucide-react';

export default function PressNoteDetail() {
  const { id } = useParams();

  const [note, setNote] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await fetch(`/api/news/press-notes`);
        const data = await res.json();
        if (data.success) {
          const found = data.data.find((n: any) => n.id.toString() === id);
          setNote(found);
        }
      } catch (error) {
        console.error("Failed to fetch press note:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
       <Loader2 className="animate-spin text-white w-12 h-12" />
    </div>
  );

  if (!note) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
       <FileText size={64} className="text-gray-200 mb-4" />
       <h2 className="text-2xl font-black text-primary italic">Press Note Not Found</h2>
       <Link to="/news/press-notes" className="mt-4 text-secondary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Archive
       </Link>
    </div>
  );

  const displayDate = `${note.day} ${note.month}, ${new Date(note.created_at).getFullYear()}`;


  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-48 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-12">
              <ArrowLeft size={14} /> Back to News
            </Link>
            <div className="flex justify-center gap-6 mb-8">
              <span className="bg-secondary/20 text-secondary px-6 py-2 rounded-full border border-secondary/30 text-[10px] font-black uppercase tracking-widest">
                Press Release
              </span>
              <span className="text-white/40 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <Calendar size={14} /> {displayDate}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white italic leading-tight mb-8">
              {note.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-6 relative -mt-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="aspect-[21/9] overflow-hidden bg-gray-100 flex items-center justify-center">
              {note.image_url ? (
                <img src={note.image_url} className="w-full h-full object-cover" alt="Press release cover" />
              ) : (
                <ImageIcon size={64} className="text-gray-300" />
              )}
            </div>

            <div className="p-8 md:p-20 space-y-12">
              <div className="prose prose-xl max-w-none">
                <p className="text-gray-600 leading-[2] text-xl font-light whitespace-pre-line italic">
                  {note.content || "No detailed content available for this press release."}
                </p>
              </div>

              {note.relatedImages && note.relatedImages.length > 0 && (
                <div className="space-y-8">
                  <h4 className="text-2xl font-black text-primary italic flex items-center gap-4">
                    <ImageIcon className="text-secondary" /> Media Highlights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    {note.relatedImages.map((img: string, i: number) => (
                      <div key={i} className="rounded-[3rem] overflow-hidden aspect-video shadow-xl border-4 border-gray-50 group">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="News visual" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-gray-50">
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 bg-gray-50 text-primary px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-secondary transition-colors">
                    <Download size={18} /> Download PDF
                  </button>
                  <button className="flex items-center gap-3 bg-gray-50 text-primary px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-secondary transition-colors">
                    <Share2 size={18} /> Share Release
                  </button>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] italic">
                  Ref No: SEM/PR/2024/042
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
