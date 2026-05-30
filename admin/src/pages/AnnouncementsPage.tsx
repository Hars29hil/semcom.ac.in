import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Bell, FileText, Loader2 } from "lucide-react";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { newsApi } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export default function AnnouncementsPage() {
  const [search, setSearch] = useState("");
  
  // Announcement State
  const [openAnnounceDialog, setOpenAnnounceDialog] = useState(false);
  const [announceTitle, setAnnounceTitle] = useState("");
  const [announceDate, setAnnounceDate] = useState("");
  const [announceType, setAnnounceType] = useState<"bell" | "file">("bell");
  const [editingAnnounceId, setEditingAnnounceId] = useState<number | null>(null);

  const queryClient = useQueryClient();

  // --- MUTATIONS ---

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({ title: "Deleted", description: "Announcement has been removed." });
    }
  });

  // --- HANDLERS ---

  const resetAnnounceForm = () => {
    setOpenAnnounceDialog(false);
    setAnnounceTitle("");
    setAnnounceDate("");
    setEditingAnnounceId(null);
  };

  const startEditAnnouncement = (ann: any) => {
    setEditingAnnounceId(ann.id);
    setAnnounceTitle(ann.title);
    setAnnounceDate(ann.date);
    setAnnounceType(ann.type);
    setOpenAnnounceDialog(true);
  };

  // --- QUERIES ---

  const { data: announcementsRes, isLoading: loadingAnnouncements } = useQuery({
    queryKey: ['announcements'],
    queryFn: newsApi.getAnnouncements,
  });

  const announcements = announcementsRes?.success ? announcementsRes.data : [];

  const filteredAnnouncements = announcements.filter((a: any) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      {/* DIALOG: ANNOUNCEMENT */}
      <Dialog open={openAnnounceDialog} onOpenChange={(open) => !open && resetAnnounceForm()}>
        <DialogContent className="rounded-3xl bg-white border border-border shadow-sm max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">{editingAnnounceId ? "Edit Announcement" : "New Announcement"}</DialogTitle>
            <DialogDescription>
              Create or update a circular for the institutional notice board.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Announcement Title</Label>
              <Input value={announceTitle} onChange={(e) => setAnnounceTitle(e.target.value)} placeholder="e.g. Holiday List 2024" className="rounded-xl border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 border-none h-12" />
            </div>
            <div className="space-y-2">
              <Label>Display Date</Label>
              <Input value={announceDate} onChange={(e) => setAnnounceDate(e.target.value)} placeholder="e.g. 15 Aug 2024" className="rounded-xl border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 border-none h-12" />
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <select value={announceType} onChange={(e: any) => setAnnounceType(e.target.value)} className="w-full flex h-12 rounded-xl border-none border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 bg-transparent px-3 py-2 text-sm">
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
          <h2 className="text-3xl font-extrabold gradient-text">Announcements</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage institutional circulars and notifications</p>
        </div>
        
        <Button onClick={() => setOpenAnnounceDialog(true)} className="rounded-xl shadow-lg">
          <Plus className="h-4 w-4 mr-2" />Add Announcement
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search announcements..." className="pl-9 border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl border-none" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* ANNOUNCEMENTS SECTION */}
      <section className="space-y-4">
        <div className="bg-white border border-border shadow-sm rounded-2xl overflow-hidden">
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
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => confirm("Delete this announcement?") && deleteAnnouncement(item.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
              {filteredAnnouncements.length === 0 && (
                <div className="p-12 text-center text-muted-foreground">
                  No announcements found.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}



