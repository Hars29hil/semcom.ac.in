import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageIcon, Calendar, ArrowRight, X, Loader2 } from 'lucide-react';

interface Album {
  id: number;
  name: string;
  count: number;
  cover_emoji: string;
  album_date: string;
}

interface Photo {
  id: number;
  url: string;
}

const API_BASE = "http://localhost:5000/api/gallery";

export default function Gallery() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const res = await fetch(`${API_BASE}/albums`);
      const data = await res.json();
      setAlbums(data);
    } catch (error) {
      console.error("Failed to fetch albums", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAlbum = async (album: Album) => {
    setSelectedAlbum(album);
    setLoadingPhotos(true);
    try {
      const res = await fetch(`${API_BASE}/albums/${album.id}/photos`);
      const data = await res.json();
      setPhotos(data);
    } catch (error) {
      console.error("Failed to fetch photos", error);
    } finally {
      setLoadingPhotos(false);
    }
  };

  const gradients = [
    "from-blue-500/20 to-teal-500/20",
    "from-orange-500/20 to-amber-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-emerald-500/20 to-green-500/20",
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary"
          >
            Visual Chronicles
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black text-brand-text italic tracking-tighter"
          >
            Our <span className="text-brand-primary">Gallery</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-subtext max-w-2xl mx-auto font-medium"
          >
            Explore the vibrant moments, academic achievements, and cultural heritage of SEMCOM through our digital memory lane.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-brand-primary" />
          </div>
        ) : albums.length === 0 ? (
          <div className="text-center py-20 opacity-40 italic">No albums found in our archive.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, idx) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleOpenAlbum(album)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-white bg-white shadow-2xl skew-y-1 group-hover:skew-y-0 transition-all duration-700">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]} group-hover:scale-110 transition-transform duration-1000`} />
                  <div className="absolute inset-0 flex items-center justify-center text-7xl select-none group-hover:scale-125 transition-transform duration-700">
                    {album.cover_emoji}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight className="text-brand-primary" size={32} />
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-1 px-4">
                  <h3 className="text-2xl font-heading font-black text-brand-text group-hover:text-brand-primary transition-colors">{album.name}</h3>
                  <div className="flex items-center gap-4 text-brand-subtext font-bold text-[10px] uppercase tracking-widest">
                    <div className="flex items-center gap-1">
                      <ImageIcon size={12} className="text-brand-secondary" />
                      {album.count} Photos
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-brand-secondary" />
                      {new Date(album.album_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Overlay */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-text/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
          >
            <button
              onClick={() => setSelectedAlbum(null)}
              className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors group"
            >
              <X size={28} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>

            <div className="w-full max-w-7xl h-full flex flex-col pt-16">
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white italic tracking-tighter">
                  {selectedAlbum.cover_emoji} {selectedAlbum.name}
                </h2>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mt-4">
                   Capture Highlights • Archive of {new Date(selectedAlbum.album_date).getFullYear()}
                </p>
              </div>

              <div className="flex-grow overflow-y-auto custom-scrollbar pr-4 pb-12">
                {loadingPhotos ? (
                  <div className="h-full flex items-center justify-center">
                    <Loader2 className="h-10 w-10 animate-spin text-brand-secondary" />
                  </div>
                ) : photos.length === 0 ? (
                   <div className="h-full flex items-center justify-center text-white/20 italic text-xl">
                      No memories recorded in this album yet.
                   </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, idx) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative"
                      >
                         <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white/10 bg-white/5 transition-transform duration-700 hover:scale-[1.02]">
                            <img 
                              src={photo.url} 
                              alt="Gallery" 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                               <div className="w-10 h-10 rounded-xl bg-brand-secondary flex items-center justify-center text-white">
                                  <ImageIcon size={20} />
                               </div>
                            </div>
                         </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
