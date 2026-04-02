import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Plus, Search, Edit, Trash2, Calendar, Loader2, Image as ImageIcon, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { eventApi, uploadApi } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { data: eventsRes, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: eventApi.getAll,
  });

  const { mutate: saveEvent, isPending: isSaving } = useMutation({
    mutationFn: async (payload: any) => {
      if (selectedImage) {
        const uploadRes = await uploadApi.uploadImage(selectedImage);
        if (uploadRes.success) payload.image_url = uploadRes.imageUrl;
      }
      return editingId ? eventApi.update(editingId, payload) : eventApi.add(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      toast({ title: editingId ? "Updated!" : "Created!" });
      resetForm();
    }
  });

  const { mutate: deleteEvent } = useMutation({
    mutationFn: eventApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      toast({ title: "Deleted", description: "Event has been removed." });
    }
  });

  const resetForm = () => {
    setOpenDialog(false);
    setSearch("");
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
    setSelectedImage(null);
    setEditingId(null);
  };

  const startEdit = (event: any) => {
    setEditingId(event.id);
    setTitle(event.title || event.name);
    setDate(event.date ? new Date(event.date).toISOString().split('T')[0] : "");
    setLocation(event.location || "");
    setDescription(event.description || "");
    setOpenDialog(true);
  };

  const events = eventsRes?.success ? eventsRes.data : [];
  const filtered = events.filter((e: any) =>
    (e.name || e.title || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Dialog open={openDialog} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="rounded-3xl clay border-none max-w-md">
          <DialogHeader><DialogTitle className="text-2xl font-black">{editingId ? "Edit Event" : "Create New Event"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto px-1">
            <div className="space-y-2"><Label>Event Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="rounded-xl border-none neu-inset h-12" /></div>
            <div className="space-y-2"><Label>Date</Label><Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-xl border-none neu-inset h-12" /></div>
            <div className="space-y-2"><Label>Location</Label><Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Venue" className="rounded-xl border-none neu-inset h-12" /></div>
            <div className="space-y-2"><Label>Description</Label><Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short summary" className="rounded-xl border-none neu-inset h-12" /></div>
            <div className="space-y-2">
              <Label>Event Poster</Label>
              <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all">
                <ImageIcon className="h-6 w-6 text-primary mb-2" />
                <p className="text-xs font-bold">{selectedImage ? selectedImage.name : "Choose file"}</p>
                <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => setSelectedImage(e.target.files?.[0] || null)} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={resetForm}>Cancel</Button>
            <Button disabled={isSaving} onClick={() => saveEvent({ title, date, location, description })} className="rounded-xl px-10 shadow-lg">
              {isSaving ? <Loader2 className="animate-spin" /> : (editingId ? "Save Changes" : "Save Event")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Events</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage institutional activities and workshops</p>
        </div>
        <Button onClick={() => setOpenDialog(true)}><Plus className="h-4 w-4 mr-2" />Add Event</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search events..." className="pl-9 neu-inset rounded-xl border-none" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {isLoading ? (
        <div className="flex justify-center p-20"><Loader2 className="h-10 w-10 animate-spin text-primary" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((event: any, i: number) => (
            <div key={event.id || i} className="clay p-5 group flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start justify-between mb-3"><Badge variant="outline" className="rounded-lg">{event.location || 'College Campus'}</Badge></div>
                <h3 className="font-bold text-foreground text-sm min-h-[2.5rem] line-clamp-2">{event.title || event.name}</h3>
                <div className="space-y-1.5 mt-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground"><Calendar className="h-3.5 w-3.5 text-primary" /><span className="text-[11px] font-medium">{event.date ? new Date(event.date).toDateString() : 'Date Pending'}</span></div>
                  <div className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-success" /><span className="text-[11px] font-medium">{event.location || 'SEMCOM'}</span></div>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl h-9" onClick={() => startEdit(event)}><Edit className="h-3 w-3 mr-1.5" />Edit</Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl" onClick={() => confirm("Delete this event?") && deleteEvent(event.id)}><Trash2 className="h-3.5 w-3.5 text-destructive" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

