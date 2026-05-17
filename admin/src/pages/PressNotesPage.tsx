import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Image as ImageIcon, Loader2, Newspaper } from "lucide-react";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { newsApi, uploadApi } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export default function PressNotesPage() {
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
    <div className="space-y-8 pb-20">
      {/* DIALOG: PRESS NOTE */}
      <Dialog open={openPressNoteDialog} onOpenChange={(open) => !open && resetPressNoteForm()}>
        <DialogContent className="rounded-3xl clay border-none max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">
              {editingPressId ? "Edit Press Note" : "New Press Note"}
            </DialogTitle>
            <DialogDescription>
              Provide the title and date for the press release.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Release Title</Label>
              <Input 
                value={pressNoteTitle} 
                onChange={(e) => setPressNoteTitle(e.target.value)} 
                placeholder="Title" 
                className="rounded-xl neu-inset border-none h-12" 
              />
            </div>
            <div className="space-y-2">
              <Label>Release Date</Label>
              <Input 
                type="date" 
                value={pressNoteDate} 
                onChange={(e) => setPressNoteDate(e.target.value)} 
                className="rounded-xl neu-inset border-none h-12" 
              />
            </div>
            <div className="space-y-2">
              <Label>Release Image</Label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group border-2 border-dashed border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all bg-accent/5"
              >
                <ImageIcon className="h-6 w-6 text-primary mb-2" />
                <p className="text-xs font-bold">{selectedImage ? selectedImage.name : "Click to upload image"}</p>
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
            <Button variant="ghost" onClick={resetPressNoteForm}>Cancel</Button>
            <Button disabled={isSavingPress} onClick={handlePublishPressNote} className="rounded-xl px-8 shadow-lg">
               {isSavingPress ? <Loader2 className="animate-spin" /> : (editingPressId ? "Save Changes" : "Publish")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Press Notes</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage official media releases and news coverage</p>
        </div>
        
        <Button onClick={() => setOpenPressNoteDialog(true)} className="rounded-xl shadow-lg">
          <Plus className="h-4 w-4 mr-2" />Add Press Note
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search press notes..." 
          className="pl-9 neu-inset rounded-xl border-none" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {/* PRESS NOTES LIST */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           {loadingPress ? (
             <div className="col-span-full border border-dashed rounded-2xl flex justify-center p-12">
               <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
           ) : (
             filteredPressNotes.map((note: any) => (
               <div key={note.id} className="clay p-5 flex gap-4 group items-center">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Newspaper className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow min-w-0">
                     <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                       {note.title}
                     </h4>
                     <div className="flex justify-between items-center mt-3">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">
                           {note.day} {note.month} {note.year || ''} • Public Release
                        </span>
                        <div className="flex gap-1">
                           <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-8 w-8" 
                             onClick={() => startEditPressNote(note)}
                           >
                             <Edit className="h-3.5 w-3.5" />
                           </Button>
                           <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10" 
                             onClick={() => confirm("Delete this press note?") && deletePressNote(note.id)}
                           >
                             <Trash2 className="h-3.5 w-3.5" />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
             ))
           )}
           {!loadingPress && filteredPressNotes.length === 0 && (
             <div className="col-span-full py-12 text-center text-muted-foreground">
               No press notes found.
             </div>
           )}
        </div>
      </section>
    </div>
  );
}
