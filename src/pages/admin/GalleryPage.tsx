import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Upload, Trash2, Image as ImageIcon, Eye, X, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { uploadFile } from "@/lib/api";
import { getToken } from "@/lib/auth";

interface Album {
  id: number;
  name: string;
  count: number;
  cover_emoji: string;
  album_date: string;
}

const API_BASE = "/api/gallery";

const gradients = [
  "from-primary/20 to-info/20",
  "from-warning/20 to-success/20",
  "from-info/20 to-primary/20",
  "from-success/20 to-warning/20",
  "from-primary/20 to-success/20",
  "from-warning/20 to-info/20",
];

const emojis = ["🎭", "🎓", "🏆", "🏫", "🎤", "🎨", "🌟", "📸", "🎒", "💻"];

export default function GalleryPage() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("📸");
  
  // Upload state
  const [uploadAlbumId, setUploadAlbumId] = useState<string>("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchAlbums = async () => {
    try {
      const res = await fetch(`${API_BASE}/albums`);
      const data = await res.json();
      setAlbums(data);
    } catch (error) {
      toast.error("Failed to fetch albums");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState<Album | null>(null);
  const [albumPhotos, setAlbumPhotos] = useState<{id: number, url: string}[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  const handleViewAlbum = async (album: Album) => {
    setCurrentAlbum(album);
    setIsViewDialogOpen(true);
    setLoadingPhotos(true);
    try {
      const res = await fetch(`${API_BASE}/albums/${album.id}/photos`);
      const data = await res.json();
      setAlbumPhotos(data);
    } catch (error) {
      toast.error("Failed to load photos");
    } finally {
      setLoadingPhotos(false);
    }
  };

  const handleCreateAlbum = async () => {
    if (!newAlbumName.trim()) {
      toast.error("Please enter an album name");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/albums`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify({
          name: newAlbumName,
          cover_emoji: selectedEmoji,
        }),
      });

      if (res.ok) {
        toast.success("Album created successfully");
        setNewAlbumName("");
        setIsCreateDialogOpen(false);
        fetchAlbums();
      }
    } catch (error) {
      toast.error("Failed to create album");
    }
  };

  const handleDeleteAlbum = async (id: number) => {
    if (!confirm("Are you sure you want to delete this album?")) return;

    try {
      const res = await fetch(`${API_BASE}/albums/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${getToken()}` },
      });

      if (res.ok) {
        toast.success("Album deleted successfully");
        fetchAlbums();
      }
    } catch (error) {
      toast.error("Failed to delete album");
    }
  };

  const handleDeletePhoto = async (id: number) => {
    if (!confirm("Are you sure you want to delete this photo?")) return;

    try {
      const res = await fetch(`${API_BASE}/photos/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${getToken()}` },
      });

      if (res.ok) {
        toast.success("Photo deleted successfully");
        if (currentAlbum) {
          handleViewAlbum(currentAlbum);
          fetchAlbums(); // To update the count
        }
      }
    } catch (error) {
      toast.error("Failed to delete photo");
    }
  };

  const handleUploadPhotos = async () => {
    if (!uploadAlbumId || !uploadFile) {
      toast.error("Please select an album and a file");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", uploadFile);

    try {
      // 1. Upload photo to server
      const uploadData = await uploadFile(uploadFile);

      if (uploadData.success) {
        // 2. Link photo to album
        const linkRes = await fetch(`${API_BASE}/photos`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
          },
          body: JSON.stringify({
            album_id: parseInt(uploadAlbumId),
            url: uploadData.imageUrl,
          }),
        });

        if (linkRes.ok) {
          toast.success("Photo uploaded successfully");
          setIsUploadDialogOpen(false);
          setUploadFile(null);
          fetchAlbums();
        }
      }
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 text-slate-900 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Gallery</h2>
          <p className="text-slate-500 text-sm mt-1">Manage photo albums and media</p>
        </div>
        <div className="flex gap-2">
          {/* Upload Photos Dialog */}
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-white/80 backdrop-blur-md"><Upload className="h-4 w-4 mr-2" />Upload Photos</Button>
            </DialogTrigger>
            <DialogContent className="admin-glass-panel border-none sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-slate-900">Upload Photos</DialogTitle>
                <DialogDescription className="text-slate-500">
                  Select an album and upload a photo.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label className="text-slate-700">Select Album</Label>
                  <Select value={uploadAlbumId} onValueChange={setUploadAlbumId}>
                    <SelectTrigger className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900">
                      <SelectValue placeholder="Pick an album..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] text-slate-900">
                      {albums.map(album => (
                        <SelectItem key={album.id} value={album.id.toString()} className="focus:bg-white/80 focus:text-slate-900">
                          {album.cover_emoji} {album.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label className="text-slate-700">File</Label>
                  <Input type="file" accept="image/*" onChange={(e) => setUploadFile(e.target.files?.[0] || null)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 file:text-slate-900 file:bg-white/80 file:border-0 file:rounded-lg file:mr-4 file:px-4 file:py-1 hover:file:bg-slate-100" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)} disabled={isUploading} className="text-slate-900 hover:bg-white/80 hover:text-slate-900 border-white bg-transparent">Cancel</Button>
                <Button onClick={handleUploadPhotos} disabled={isUploading || !uploadFile} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 rounded-xl px-8 shadow-lg">
                  {isUploading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  {isUploading ? "Uploading..." : "Upload"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90"><Plus className="h-4 w-4 mr-2" />New Album</Button>
            </DialogTrigger>
            <DialogContent className="admin-glass-panel border-none sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-slate-900">Create New Album</DialogTitle>
                <DialogDescription className="text-slate-500">
                  Enter a name and pick an icon for your new photo album.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-slate-700">Album Name</Label>
                  <Input
                    id="name"
                    value={newAlbumName}
                    onChange={(e) => setNewAlbumName(e.target.value)}
                    placeholder="e.g. Annual Day 2026"
                    className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-slate-700">Pick an Icon</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {emojis.map((emoji) => (
                      <button
                         key={emoji}
                         type="button"
                         onClick={() => setSelectedEmoji(emoji)}
                         className={`h-12 w-12 flex items-center justify-center text-2xl rounded-lg border-2 transition-all ${
                           selectedEmoji === emoji ? "border-accent bg-accent/20 scale-110" : "border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md hover:bg-white/80"
                         }`}
                       >
                         {emoji}
                       </button>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="text-slate-900 hover:bg-white/80 hover:text-slate-900 border-white bg-transparent">Cancel</Button>
                <Button onClick={handleCreateAlbum} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 rounded-xl px-8 shadow-lg">Create Album</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* View Album Photos Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="admin-glass-panel border-none sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-slate-900">
              {currentAlbum?.cover_emoji} {currentAlbum?.name}
            </DialogTitle>
            <DialogDescription className="text-slate-500">
              {albumPhotos.length} photos in this album
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {loadingPhotos ? (
              <div className="py-20 flex justify-center"><Loader2 className="animate-spin text-accent" /></div>
            ) : albumPhotos.length === 0 ? (
              <div className="py-10 text-center text-slate-500 italic">No photos in this album yet.</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {albumPhotos.map((photo) => (
                  <div key={photo.id} className="relative aspect-square rounded-xl overflow-hidden group">
                    <img src={photo.url} alt="Gallery" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        className="h-8 w-8 bg-red-500/80 hover:bg-red-500 text-slate-900"
                        onClick={() => handleDeletePhoto(photo.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {albums.length === 0 ? (
        <div className="text-center py-20 admin-glass-panel border-dashed border-white rounded-3xl">
          <ImageIcon className="h-12 w-12 mx-auto text-slate-900/20 mb-4" />
          <p className="text-slate-500 font-medium">No albums found. Create your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {albums.map((album, i) => (
            <div key={album.id} className="admin-glass-card hover:-translate-y-1 transition-all overflow-hidden group p-0">
              <div className={`h-36 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-5xl group-hover:scale-105 transition-transform`}>
                {album.cover_emoji}
              </div>
              <div className="p-4 border-t border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-accent transition-colors">{album.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1.5 text-slate-500">
                      <ImageIcon className="h-3 w-3" />
                      <span className="text-[11px] font-medium">{album.count} photos • {new Date(album.album_date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-slate-900 hover:bg-white/80"
                      onClick={() => handleViewAlbum(album)}
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-400/20"
                      onClick={() => handleDeleteAlbum(album.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
