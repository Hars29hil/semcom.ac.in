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
    <div className="space-y-8 pb-20 text-slate-900">
      {/* DIALOG: ANNOUNCEMENT */}
      <Dialog open={openAnnounceDialog} onOpenChange={(open) => !open && resetAnnounceForm()}>
        <DialogContent className="admin-glass-panel border-none max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-slate-900">{editingAnnounceId ? "Edit Announcement" : "New Announcement"}</DialogTitle>
            <DialogDescription className="text-slate-500">
              Create or update a circular for the institutional notice board.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="text-slate-700">Announcement Title</Label>
              <Input value={announceTitle} onChange={(e) => setAnnounceTitle(e.target.value)} placeholder="e.g. Holiday List 2024" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">Display Date</Label>
              <Input type="date" value={announceDate} onChange={(e) => setAnnounceDate(e.target.value)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12 [color-scheme:light]" />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">Type</Label>
              <select value={announceType} onChange={(e: any) => setAnnounceType(e.target.value)} className="w-full flex h-12 rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 px-3 py-2 text-sm text-slate-900">
                 <option value="bell" className="bg-white text-slate-900">General Announcement (Bell)</option>
                 <option value="file" className="bg-white text-slate-900">Document/Link (File)</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={resetAnnounceForm} className="text-slate-900 hover:bg-white/80 hover:text-slate-900">Cancel</Button>
            <Button disabled={isSavingAnnounce} onClick={() => saveAnnouncement({ title: announceTitle, date: announceDate, type: announceType })} className="rounded-xl px-8 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">
               {isSavingAnnounce ? <Loader2 className="animate-spin" /> : (editingAnnounceId ? "Save Changes" : "Save Announcement")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Announcements</h2>
          <p className="text-slate-500 text-sm mt-1">Manage institutional circulars and notifications</p>
        </div>
        
        <Button onClick={() => setOpenAnnounceDialog(true)} className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" />Add Announcement
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        <Input placeholder="Search announcements..." className="pl-9 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* ANNOUNCEMENTS SECTION */}
      <section className="space-y-4">
        <div className="admin-glass-panel overflow-hidden">
          {loadingAnnouncements ? (
            <div className="flex justify-center p-12"><Loader2 className="h-8 w-8 animate-spin text-accent" /></div>
          ) : (
            <div className="divide-y divide-white/10">
              {filteredAnnouncements.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between p-5 hover:bg-white/80 backdrop-blur-md transition-all group">
                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-white/80 flex items-center justify-center">
                      {item.type === 'file' ? <FileText className="h-4 w-4 text-accent" /> : <Bell className="h-4 w-4 text-accent" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-accent transition-colors">{item.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-white/80" onClick={() => startEditAnnouncement(item)}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-300 hover:bg-red-400/20" onClick={() => confirm("Delete this announcement?") && deleteAnnouncement(item.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
              {filteredAnnouncements.length === 0 && (
                <div className="p-12 text-center text-slate-500">
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



