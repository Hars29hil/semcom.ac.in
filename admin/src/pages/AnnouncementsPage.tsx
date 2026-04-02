import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Bell, FileText, Image as ImageIcon, Loader2, Calendar, Newspaper, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { newsApi, uploadApi } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export default function AnnouncementsPage() {
  const [search, setSearch] = useState("");
  
  // Press Note State
  const [openPressNoteDialog, setOpenPressNoteDialog] = useState(false);
  const [pressNoteTitle, setPressNoteTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [pressNoteDate, setPressNoteDate] = useState(new Date().toISOString().split('T')[0]);
  const [editingPressId, setEditingPressId] = useState<number | null>(null);

  // Announcement State
  const [openAnnounceDialog, setOpenAnnounceDialog] = useState(false);
  const [announceTitle, setAnnounceTitle] = useState("");
  const [announceDate, setAnnounceDate] = useState("");
  const [announceType, setAnnounceType] = useState<"bell" | "file">("bell");
  const [editingAnnounceId, setEditingAnnounceId] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  // --- MUTATIONS ---

  const { mutate: savePressNote, isPending: isSavingPress } = useMutation({
    mutationFn: (payload: any) => 
      editingPressId ? newsApi.updatePressNote(editingPressId, payload) : newsApi.addPressNote(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['press-notes'] });
      toast({ title: editingPressId ? "Updated!" : "Published!" });
      resetPressNoteForm();
    }
  });

  const { mutate: deletePressNote } = useMutation({
    mutationFn: newsApi.deletePressNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['press-notes'] })
  });

  const { mutate: saveAnnouncement, isPending: isSavingAnnounce } = useMutation({
    mutationFn: (payload: any) => 
      editingAnnounceId ? newsApi.updateAnnouncement(editingAnnounceId, payload) : newsApi.addAnnouncement(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({ title: editingAnnounceId ? "Updated!" : "Created!" });
      resetAnnounceForm();
    }
  });

  const { mutate: deleteAnnouncement } = useMutation({
    mutationFn: newsApi.deleteAnnouncement,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['announcements'] })
  });

  // --- HANDLERS ---

  const resetPressNoteForm = () => {
    setOpenPressNoteDialog(false);
    setPressNoteTitle("");
    setSelectedImage(null);
    setEditingPressId(null);
  };

  const resetAnnounceForm = () => {
    setOpenAnnounceDialog(false);
    setAnnounceTitle("");
    setAnnounceDate("");
    setEditingAnnounceId(null);
  };

  const startEditPressNote = (note: any) => {
    setEditingPressId(note.id);
    setPressNoteTitle(note.title);
    setOpenPressNoteDialog(true);
  };

  const startEditAnnouncement = (ann: any) => {
    setEditingAnnounceId(ann.id);
    setAnnounceTitle(ann.title);
    setAnnounceDate(ann.date);
    setAnnounceType(ann.type);
    setOpenAnnounceDialog(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handlePublishPressNote = async () => {
    if (!pressNoteTitle) return;

    let imageUrl = "";
    if (selectedImage) {
      const res = await uploadApi.uploadImage(selectedImage);
      if (res.success) imageUrl = res.imageUrl;
    }

    savePressNote({ 
      title: pressNoteTitle, 
      date: pressNoteDate,
      image_url: imageUrl || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
    });
  };

  // --- QUERIES ---

  const { data: announcementsRes, isLoading: loadingAnnouncements } = useQuery({
    queryKey: ['announcements'],
    queryFn: newsApi.getAnnouncements,
  });

  const { data: pressNotesRes, isLoading: loadingPress } = useQuery({
    queryKey: ['press-notes'],
    queryFn: newsApi.getPressNotes,
  });

  const announcements = announcementsRes?.success ? announcementsRes.data : [];
  const pressNotes = pressNotesRes?.success ? pressNotesRes.data : [];

  const filteredAnnouncements = announcements.filter((a: any) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-20">
      {/* DIALOG: PRESS NOTE */}
      <Dialog open={openPressNoteDialog} onOpenChange={(open) => !open && resetPressNoteForm()}>
        <DialogContent className="rounded-3xl clay border-none max-w-md">
          <DialogHeader><DialogTitle className="text-2xl font-black">{editingPressId ? "Edit Press Note" : "New Press Note"}</DialogTitle></DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Release Title</Label>
              <Input value={pressNoteTitle} onChange={(e) => setPressNoteTitle(e.target.value)} placeholder="Title" className="rounded-xl neu-inset border-none h-12" />
            </div>
            {!editingPressId && (
              <div className="space-y-2">
                <Label>Release Date</Label>
                <Input type="date" value={pressNoteDate} onChange={(e) => setPressNoteDate(e.target.value)} className="rounded-xl neu-inset border-none h-12" />
              </div>
            )}
            <div className="space-y-2">
              <Label>Release Image</Label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group border-2 border-dashed border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all bg-accent/5"
              >
                <ImageIcon className="h-6 w-6 text-primary mb-2" />
                <p className="text-xs font-bold">{selectedImage ? selectedImage.name : "Click to upload image"}</p>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
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

      {/* DIALOG: ANNOUNCEMENT */}
      <Dialog open={openAnnounceDialog} onOpenChange={(open) => !open && resetAnnounceForm()}>
        <DialogContent className="rounded-3xl clay border-none max-w-md">
          <DialogHeader><DialogTitle className="text-2xl font-black">{editingAnnounceId ? "Edit Announcement" : "New Announcement"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Announcement Title</Label>
              <Input value={announceTitle} onChange={(e) => setAnnounceTitle(e.target.value)} placeholder="e.g. Holiday List 2024" className="rounded-xl neu-inset border-none h-12" />
            </div>
            <div className="space-y-2">
              <Label>Display Date</Label>
              <Input value={announceDate} onChange={(e) => setAnnounceDate(e.target.value)} placeholder="e.g. 15 Aug 2024" className="rounded-xl neu-inset border-none h-12" />
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <select value={announceType} onChange={(e: any) => setAnnounceType(e.target.value)} className="w-full flex h-12 rounded-xl border-none neu-inset bg-transparent px-3 py-2 text-sm">
                 <option value="bell">General Announcement (Bell)</option>
                 <option value="file">Document/Link (File)</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={resetAnnounceForm}>Cancel</Button>
            <Button disabled={isSavingAnnounce} onClick={() => saveAnnouncement({ title: announceTitle, date: announceDate, type: announceType })} className="rounded-xl px-8 shadow-lg">
               {isSavingAnnounce ? <Loader2 className="animate-spin" /> : (editingAnnounceId ? "Save Changes" : "Save Announcement")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">News & Updates</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage institutional updates and media releases</p>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button className="rounded-xl shadow-lg"><Plus className="h-4 w-4 mr-2" />Add New <ChevronDown className="h-4 w-4 ml-1 opacity-50" /></Button></DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl clay">
            <DropdownMenuItem onClick={() => setOpenPressNoteDialog(true)} className="rounded-xl gap-3 py-2.5 cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center"><Newspaper className="h-4 w-4 text-primary" /></div>
              <div className="flex flex-col"><span className="font-bold text-sm">Pressnote</span><span className="text-[10px] text-muted-foreground">Official media release</span></div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAnnounceDialog(true)} className="rounded-xl gap-3 py-2.5 cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center"><Bell className="h-4 w-4 text-success" /></div>
              <div className="flex flex-col"><span className="font-bold text-sm">Announcement</span><span className="text-[10px] text-muted-foreground">Circulars & notifications</span></div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search everything..." className="pl-9 neu-inset rounded-xl border-none" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* ANNOUNCEMENTS SECTION */}
      <section className="space-y-4">
        <div className="flex items-center gap-2"><Bell className="h-5 w-5 text-primary" /><h3 className="text-xl font-bold">Circulars & Announcements</h3></div>
        <div className="skeu-surface rounded-2xl overflow-hidden">
          {loadingAnnouncements ? (
            <div className="flex justify-center p-12"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
          ) : (
            <div className="divide-y divide-border/50">
              {filteredAnnouncements.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between p-5 hover:bg-accent/30 transition-all group">
                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl glass-tint flex items-center justify-center">
                      {item.type === 'file' ? <FileText className="h-4 w-4 text-primary" /> : <Bell className="h-4 w-4 text-primary" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => startEditAnnouncement(item)}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => confirm("Delete this announcement?") && deleteAnnouncement(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PRESS NOTES SECTION */}
      <section className="space-y-4">
        <div className="flex items-center gap-2"><ImageIcon className="h-5 w-5 text-brand-secondary" /><h3 className="text-xl font-bold">Press Notes</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           {loadingPress ? (
             <div className="col-span-full border border-dashed rounded-2xl flex justify-center p-12"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
           ) : (
             pressNotes.map((note: any) => (
               <div key={note.id} className="clay p-5 flex gap-4 group">
                  <div className="w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-white shrink-0">
                     <span className="text-xl font-black">{note.day}</span>
                     <span className="text-[9px] font-bold uppercase">{note.month}</span>
                  </div>
                  <div className="flex-grow min-w-0">
                     <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{note.title}</h4>
                     <div className="flex justify-between items-center mt-3">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">Public Release</span>
                        <div className="flex gap-1">
                           <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => startEditPressNote(note)}><Edit className="h-3.5 w-3.5" /></Button>
                           <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => confirm("Delete this press note?") && deletePressNote(note.id)}><Trash2 className="h-3.5 w-3.5 text-destructive" /></Button>
                        </div>
                     </div>
                  </div>
               </div>
             ))
           )}
        </div>
      </section>
    </div>
  );
}


