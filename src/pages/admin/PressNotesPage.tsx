import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Image as ImageIcon, Loader2, Newspaper } from "lucide-react";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { newsApi, uploadApi } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export default function PressNotesPage({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [search, setSearch] = useState("");
  
  // Press Note State
  const [openPressNoteDialog, setOpenPressNoteDialog] = useState(false);
  const [pressNoteTitle, setPressNoteTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [pressNoteDate, setPressNoteDate] = useState(new Date().toISOString().split('T')[0]);
  const [editingPressId, setEditingPressId] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  // --- MUTATIONS ---

  const { mutate: savePressNote, isPending: isSavingPress } = useMutation({
    mutationFn: async (payload: any) => {
      let imageUrl = payload.image_url;
      if (selectedImage) {
        const res = await uploadApi.uploadImage(selectedImage);
        if (res.success) imageUrl = res.imageUrl;
      }
      
      const finalPayload = {
        ...payload,
        image_url: imageUrl || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
      };

      return editingPressId 
        ? newsApi.updatePressNote(editingPressId, finalPayload) 
        : newsApi.addPressNote(finalPayload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['press-notes'] });
      toast({ title: editingPressId ? "Updated!" : "Published!" });
      resetPressNoteForm();
    }
  });

  const { mutate: deletePressNote } = useMutation({
    mutationFn: newsApi.deletePressNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['press-notes'] });
      toast({ title: "Deleted", description: "Press note has been removed." });
    }
  });

  // --- HANDLERS ---

  const resetPressNoteForm = () => {
    setOpenPressNoteDialog(false);
    setPressNoteTitle("");
    setSelectedImage(null);
    setEditingPressId(null);
  };

  const startEditPressNote = (note: any) => {
    setEditingPressId(note.id);
    setPressNoteTitle(note.title);
    setPressNoteDate(note.date ? new Date(note.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]);
    setOpenPressNoteDialog(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert("Only image files are allowed");
        e.target.value = '';
        return;
      }
      if (file.size > 100 * 1024) {
        alert("do not allow the images more than 100 kb because the app pool crash");
        e.target.value = '';
        return;
      }
      setSelectedImage(file);
    }
  };

  const handlePublishPressNote = () => {
    if (!pressNoteTitle) return;
    savePressNote({ 
      title: pressNoteTitle, 
      date: pressNoteDate,
    });
  };

  // --- QUERIES ---

  const { data: pressNotesRes, isLoading: loadingPress } = useQuery({
    queryKey: ['press-notes'],
    queryFn: newsApi.getPressNotes,
  });

  const pressNotes = pressNotesRes?.success ? pressNotesRes.data : [];

  const filteredPressNotes = pressNotes.filter((n: any) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={isEmbedded ? "space-y-6 text-primary" : "space-y-8 pb-20 text-primary p-6 max-w-7xl mx-auto"}>
      {/* DIALOG: PRESS NOTE */}
      <Dialog open={openPressNoteDialog} onOpenChange={(open) => !open && resetPressNoteForm()}>
        <DialogContent className="admin-glass-panel border-none max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-primary">
              {editingPressId ? "Edit Press Note" : "New Press Note"}
            </DialogTitle>
            <DialogDescription className="text-muted">
              Provide the title and date for the press release.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label className="text-primary-light">Release Title</Label>
              <Input 
                value={pressNoteTitle} 
                onChange={(e) => setPressNoteTitle(e.target.value)} 
                placeholder="Title" 
                className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-primary" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Release Date</Label>
              <Input 
                type="date" 
                value={pressNoteDate} 
                onChange={(e) => setPressNoteDate(e.target.value)} 
                className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-primary [color-scheme:light]" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Release Image</Label>
              <p className="text-red-500 text-xs font-semibold mb-2">*Only image with 100 or lessthan 100 kb allowed..</p>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group border-2 border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-surface transition-all bg-surface"
              >
                <ImageIcon className="h-6 w-6 text-muted mb-2" />
                <p className="text-xs font-bold text-muted">{selectedImage ? selectedImage.name : "Click to upload image"}</p>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={resetPressNoteForm} className="text-primary hover:bg-surface hover:text-primary">Cancel</Button>
            <Button disabled={isSavingPress} onClick={handlePublishPressNote} className="rounded-xl px-8 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">
               {isSavingPress ? <Loader2 className="animate-spin" /> : (editingPressId ? "Save Changes" : "Publish")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* HEADER */}
      {!isEmbedded && (
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-primary">Press Notes</h2>
            <p className="text-muted text-sm mt-1">Manage official media releases and news coverage</p>
          </div>
          
          <Button onClick={() => setOpenPressNoteDialog(true)} className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />Add Press Note
          </Button>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <Input 
            placeholder="Search press notes..." 
            className="pl-9 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-primary placeholder:text-muted-foreground" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        {isEmbedded && (
          <Button onClick={() => setOpenPressNoteDialog(true)} className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />Add Press Note
          </Button>
        )}
      </div>

      {/* PRESS NOTES LIST */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
           {loadingPress ? (
             <div className="col-span-full border border-dashed border-border rounded-2xl flex justify-center p-12">
               <Loader2 className="h-8 w-8 animate-spin text-accent" />
             </div>
           ) : (
             filteredPressNotes.map((note: any) => (
               <div key={note.id} className="admin-glass-card hover:bg-surface/50 transition-all p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border group">
                 <div className="flex items-center gap-4 flex-1 min-w-0">
                   <div className="h-10 w-10 rounded-xl bg-surface flex items-center justify-center shrink-0 border border-border shadow-sm">
                     <Newspaper className="h-5 w-5 text-accent" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <h4 className="text-sm font-bold text-primary truncate group-hover:text-accent transition-colors">
                       {note.title}
                     </h4>
                     <span className="text-[11px] text-muted-foreground font-medium truncate mt-0.5 inline-block">
                        {note.day} {note.month} {note.year || ''} • Public Release
                     </span>
                   </div>
                 </div>
                 
                 <div className="flex gap-2 shrink-0 justify-end mt-2 md:mt-0">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-xl h-9 border-border text-primary hover:bg-surface hover:text-primary bg-transparent" 
                      onClick={() => startEditPressNote(note)}
                    >
                      <Edit className="h-3 w-3 mr-1.5" />Edit
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20" 
                      onClick={() => confirm("Delete this press note?") && deletePressNote(note.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                 </div>
               </div>
             ))
           )}
           {!loadingPress && filteredPressNotes.length === 0 && (
             <div className="col-span-full py-12 text-center text-muted">
               No press notes found.
             </div>
           )}
        </div>
      </section>
    </div>
  );
}
