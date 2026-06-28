import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageIcon, Calendar, ArrowRight, X, Loader2, Search } from 'lucide-react';

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

import { API_BASE as GLOBAL_API_BASE } from "@/lib/api";

const API_BASE = `${GLOBAL_API_BASE}/gallery`;

export default function Gallery() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");

  const filteredAlbums = albums.filter((album) => {
    const matchesSearch = album.name.toLowerCase().includes(searchQuery.toLowerCase());
    const date = new Date(album.album_date);
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    
    const matchesYear = selectedYear === "All" || year === selectedYear;
    const matchesMonth = selectedMonth === "All" || month === selectedMonth;
    
    return matchesSearch && matchesYear && matchesMonth;
  });

  const uniqueYears = ["All", ...Array.from(new Set(albums.map(a => new Date(a.album_date).getFullYear().toString())))].sort((a: any, b: any) => b.localeCompare(a));
  const months = [
    { value: "All", label: "All Months" },
    { value: "0", label: "January" },
    { value: "1", label: "February" },
    { value: "2", label: "March" },
    { value: "3", label: "April" },
    { value: "4", label: "May" },
    { value: "5", label: "June" },
    { value: "6", label: "July" },
    { value: "7", label: "August" },
    { value: "8", label: "September" },
    { value: "9", label: "October" },
    { value: "10", label: "November" },
    { value: "11", label: "December" },
  ];

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const res = await fetch(`${API_BASE}/albums`);
      if (!res.ok) {
        throw new Error("Failed to fetch albums");
      }
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
      if (!res.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await res.json();
      setPhotos(data);
    } catch (error) {
      console.error("Failed to fetch photos", error);
    } finally {
      setLoadingPhotos(false);
    }
  };

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
            <span className="section-label">Visual Chronicles</span>
            <h2>Our <span className="text-secondary">Gallery</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Explore the vibrant moments, academic achievements, and cultural heritage of SEMCOM through our digital memory lane.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Album Grid */}
      <section className="section-padding">
        <div className="section-container">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-secondary" />
            </div>
          ) : (
            <>
              {albums.length > 0 && (
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                    <input 
                      type="text"
                      placeholder="Search events..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                    />
                  </div>
                  <div className="flex gap-4">
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="px-4 py-2 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      {uniqueYears.map((year) => (
                        <option key={year} value={year}>{year === "All" ? "All Years" : year}</option>
                      ))}
                    </select>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="px-4 py-2 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      {months.map((m) => (
                        <option key={m.value} value={m.value}>{m.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {filteredAlbums.length === 0 ? (
                <div className="text-center py-20 bg-surface rounded-2xl border border-border">
                  <ImageIcon size={48} className="mx-auto text-muted mb-4 opacity-50" />
                  <h3 className="text-xl font-bold text-text mb-2">No Albums Found</h3>
                  <p className="text-muted max-w-md mx-auto">We couldn't find any albums matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredAlbums.map((album, idx) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleOpenAlbum(album)}
                  className="group cursor-pointer bg-surface rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all shadow-sm hover:shadow-card"
                >
                  <div className="relative aspect-video bg-primary/5 border-b border-border">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                      {album.cover_emoji}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ArrowRight className="text-primary" size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">{album.name}</h3>
                    <div className="flex items-center gap-4 text-muted text-sm font-medium">
                      <div className="flex items-center gap-1.5">
                        <ImageIcon size={14} className="text-secondary" />
                        {album.count} Photos
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-secondary" />
                        {new Date(album.album_date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox / Overlay */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center p-4 md:p-8"
          >
            <div className="w-full max-w-7xl flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text">
                  {selectedAlbum.cover_emoji} {selectedAlbum.name}
                </h2>
                <p className="text-muted text-sm font-medium mt-1">
                   {selectedAlbum.count} Photos • Archive of {new Date(selectedAlbum.album_date).getFullYear()}
                </p>
              </div>
              <button
                onClick={() => setSelectedAlbum(null)}
                className="w-12 h-12 rounded-xl bg-surface border border-border hover:bg-background text-text flex items-center justify-center transition-colors group shadow-sm"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto w-full max-w-7xl custom-scrollbar pr-2 pb-12">
              {loadingPhotos ? (
                <div className="h-full flex items-center justify-center min-h-[400px]">
                  <Loader2 className="h-10 w-10 animate-spin text-secondary" />
                </div>
              ) : photos.length === 0 ? (
                 <div className="h-full flex flex-col items-center justify-center min-h-[400px] text-muted space-y-4">
                    <ImageIcon size={48} className="opacity-50" />
                    <p className="font-medium">No photos found in this album yet.</p>
                 </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {photos.map((photo, idx) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group relative"
                    >
                       <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface hover:shadow-card transition-all duration-300">
                          <img 
                            src={photo.url} 
                            alt="Gallery Photo" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                       </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
