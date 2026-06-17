import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Download, Share2, FileText, ImageIcon, Loader2 } from 'lucide-react';
import { newsApi } from '@/lib/api';
import html2pdf from 'html2pdf.js';

export default function PressNoteDetail() {
  const { id } = useParams();

  const [note, setNote] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await newsApi.getPressNotes();
        if (data.success) {
          const found = data.data.find((n: any) => n.id?.toString() === id || (!n.id && data.data.indexOf(n).toString() === id));
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
    <div className="min-h-screen flex items-center justify-center bg-background">
       <Loader2 className="animate-spin text-secondary w-12 h-12" />
    </div>
  );

  if (!note) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
       <FileText size={64} className="text-muted mb-4 opacity-50" />
       <h2 className="text-2xl font-bold text-text">Press Note Not Found</h2>
       <Link to="/news/press-notes" className="mt-6 btn-outline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Archive
       </Link>
    </div>
  );

  const displayDate = note.created_at ? new Date(note.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : `${note.day} ${note.month}`;
  const refNo = note.reference_no || `SEM/PR/${note.created_at ? new Date(note.created_at).getFullYear() : new Date().getFullYear()}/${note.id || 'XXX'}`;

  const handleDownloadPDF = () => {
    // Create an off-screen container for the PDF content
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    
    // Create the clean PDF template using exact HEX colors to avoid html2canvas oklab crashes
    const element = document.createElement('div');
    element.style.width = '800px';
    element.style.padding = '40px';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.color = '#000000';
    element.style.backgroundColor = '#ffffff';

    let html = `
      <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 20px;">
        <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 10px; color: #1e3a8a;">${note.title}</h1>
        <p style="font-size: 12px; color: #64748b; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
          Ref No: ${refNo} &nbsp;|&nbsp; Date: ${displayDate}
        </p>
      </div>
    `;

    if (note.image_url) {
      html += `<img src="${note.image_url}" style="max-width: 100%; max-height: 400px; object-fit: contain; margin-bottom: 30px; border-radius: 8px;" crossorigin="anonymous" />`;
    }

    // Safely append content
    const contentP = document.createElement('p');
    contentP.style.fontSize = '16px';
    contentP.style.lineHeight = '1.8';
    contentP.style.whiteSpace = 'pre-wrap';
    contentP.style.color = '#334155';
    contentP.textContent = note.content || "No detailed content available for this press release.";

    element.innerHTML = html;
    element.appendChild(contentP);
    
    container.appendChild(element);
    document.body.appendChild(container);

    const opt = {
      margin:       0.5,
      filename:     `Press-Release-${note.title.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`,
      image:        { type: 'jpeg' as const, quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      document.body.removeChild(container);
    }).catch((err: any) => {
      console.error('PDF generation failed:', err);
      document.body.removeChild(container);
    });
  };

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div id="press-release-content">
      {/* Header Section */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <Link to="/news/press-notes" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest mb-4">
              <ArrowLeft size={14} /> Back to News
            </Link>
            
            <div className="flex justify-center gap-4 mb-4">
              <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full border border-secondary/20 text-[10px] font-bold uppercase tracking-widest">
                Press Release
              </span>
              <span className="text-muted flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Calendar size={14} /> {displayDate}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text">
              {note.title}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface rounded-2xl shadow-card overflow-hidden border border-border"
          >
            {note.image_url ? (
              <div className="w-full bg-primary/5 flex items-center justify-center p-6 border-b border-border">
                <img src={note.image_url} className="max-h-[500px] max-w-full object-contain rounded-xl shadow-sm" alt="Press release cover" />
              </div>
            ) : (
              <div className="aspect-[21/9] w-full overflow-hidden bg-primary/5 flex items-center justify-center">
                <ImageIcon size={48} className="text-muted opacity-30" />
              </div>
            )}

            <div className="p-8 md:p-12 space-y-10">
              <div className="prose max-w-none">
                <p className="text-text leading-relaxed text-lg whitespace-pre-line">
                  {note.content || "No detailed content available for this press release."}
                </p>
              </div>

              {note.relatedImages && note.relatedImages.length > 0 && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-text flex items-center gap-3">
                    <ImageIcon className="text-secondary" size={20} /> Media Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {note.relatedImages.map((img: string, i: number) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video border border-border bg-background group">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="News visual" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
                <div className="flex gap-4 w-full sm:w-auto">
                  <button 
                    onClick={handleDownloadPDF} 
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 btn-outline !py-3"
                  >
                    <Download size={16} /> Download PDF
                  </button>
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: note.title, url: window.location.href }).catch(() => {});
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 btn-outline !py-3"
                  >
                    <Share2 size={16} /> Share Release
                  </button>
                </div>
                <div className="text-[10px] font-bold text-muted uppercase tracking-widest">
                  Ref No: {refNo}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
