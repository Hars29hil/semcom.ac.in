import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Plus, Search, Edit, Trash2, Calendar, Loader2, Image as ImageIcon, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { eventApi, uploadApi, facultyApi } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [schedule, setSchedule] = useState("");
  const [departments, setDepartments] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [status, setStatus] = useState("Upcoming");
  const [committee, setCommittee] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { data: eventsRes, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: eventApi.getAll,
  });

  const { data: facultyRes } = useQuery({
    queryKey: ['faculty'],
    queryFn: facultyApi.getAll,
  });
  const faculties = facultyRes?.success ? facultyRes.data : [];

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
    setEndDate("");
    setLocation("");
    setDescription("");
    setHighlights("");
    setSchedule("");
    setDepartments("");
    setLevel("");
    setType("");
    setRegistrationLink("");
    setStatus("Upcoming");
    setCommittee([]);
    setSelectedImage(null);
    setEditingId(null);
  };

  const startEdit = (event: any) => {
    setEditingId(event.id);
    setTitle(event.title || event.name);
    setDate(event.date ? new Date(event.date).toISOString().split('T')[0] : "");
    setEndDate(event.end_date ? new Date(event.end_date).toISOString().split('T')[0] : "");
    setLocation(event.location || "");
    setDescription(event.description || "");
    setHighlights(event.highlights || "");
    setSchedule(event.schedule || "");

    // Convert JSON array back to comma-separated string for editing
    try {
      setDepartments(event.departments ? JSON.parse(event.departments).join(', ') : "");
    } catch {
      setDepartments(event.departments || "");
    }

    setLevel(event.level || "");
    setType(event.type || "");
    setRegistrationLink(event.registration_link || "");
    setStatus(event.status || "Upcoming");
    try {
      setCommittee(typeof event.committee === 'string' ? JSON.parse(event.committee) : (event.committee || []));
    } catch (e) {
      setCommittee([]);
    }
    setOpenDialog(true);
  };

  const addCommitteeMember = () => {
    setCommittee([...committee, { name: "", role: "Convenor", email: "", phone: "" }]);
  };

  const updateMember = (index: number, field: string, value: string) => {
    const updated = [...committee];
    updated[index][field] = value;
    setCommittee(updated);
  };

  const removeMember = (index: number) => {
    setCommittee(committee.filter((_, i) => i !== index));
  };

  const events = eventsRes?.success ? eventsRes.data : [];
  const filtered = events.filter((e: any) =>
    (e.name || e.title || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 text-slate-900 pb-20">
      <Dialog open={openDialog} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="admin-glass-panel border-none max-w-4xl max-h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2 shrink-0">
            <DialogTitle className="text-2xl font-black text-slate-900">{editingId ? "Edit Event" : "Create New Event"}</DialogTitle>
            <DialogDescription className="text-slate-500">
              Set the date, location, and detailed sections including committee members.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-2 overflow-y-auto min-h-0">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-accent italic">Basic Info</h3>
                <div className="space-y-2"><Label className="text-slate-700">Event Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label className="text-slate-700">Start Date</Label><Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900 [color-scheme:light]" /></div>
                  <div className="space-y-2"><Label className="text-slate-700">End Date</Label><Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900 [color-scheme:light]" /></div>
                </div>
                <div className="space-y-2"><Label className="text-slate-700">Location</Label><Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Venue" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900" /></div>
                <div className="space-y-2">
                  <Label className="text-slate-700">Event Poster</Label>
                  <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-white/80 backdrop-blur-md transition-all h-32 bg-white/80 backdrop-blur-md">
                    <ImageIcon className="h-6 w-6 text-slate-500 mb-2" />
                    <p className="text-[10px] font-bold text-center px-2 text-slate-500">{selectedImage ? selectedImage.name : "Choose file"}</p>
                    <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => setSelectedImage(e.target.files?.[0] || null)} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-accent italic">Detailed Content</h3>
                <div className="space-y-2">
                  <Label className="text-slate-700">About Event</Label>
                  <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Detailed about section" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 min-h-[100px] resize-none text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">Highlights</Label>
                  <Textarea value={highlights} onChange={(e) => setHighlights(e.target.value)} placeholder="Bullet points" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 min-h-[100px] resize-none text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">Objectives of the Event</Label>
                  <Textarea value={schedule} onChange={(e) => setSchedule(e.target.value)} placeholder="Event objectives..." className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 min-h-[100px] resize-none text-slate-900 placeholder:text-slate-400" />
                </div>

                <h3 className="text-sm font-black uppercase tracking-widest text-accent italic pt-4">Event Metadata</h3>
                <div className="space-y-2"><Label className="text-slate-700">Departments (comma separated)</Label><Input value={departments} onChange={(e) => setDepartments(e.target.value)} placeholder="Automobile Engineering, Computer Engineering" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label className="text-slate-700">Level</Label><Input value={level} onChange={(e) => setLevel(e.target.value)} placeholder="International Level" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900" /></div>
                  <div className="space-y-2"><Label className="text-slate-700">Type</Label><Input value={type} onChange={(e) => setType(e.target.value)} placeholder="Conference" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900" /></div>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">Status</Label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 px-3 text-sm text-slate-900"
                  >
                    <option value="Upcoming" className="bg-white">Upcoming</option>
                    <option value="Ongoing" className="bg-white">Ongoing</option>
                    <option value="Completed" className="bg-white">Completed</option>
                  </select>
                </div>
                <div className="space-y-2"><Label className="text-slate-700">Registration Link</Label><Input value={registrationLink} onChange={(e) => setRegistrationLink(e.target.value)} placeholder="https://forms.gle/..." className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 text-slate-900" /></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black uppercase tracking-widest text-accent italic">Committee Members</h3>
                <Button variant="outline" size="sm" onClick={addCommitteeMember} className="rounded-lg h-8 px-3 text-[10px] font-bold border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-white/80 backdrop-blur-md"><Plus size={14} className="mr-1" /> Add Member</Button>
              </div>

              <div className="space-y-4">
                {committee.map((member, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-within:bg-white/80 space-y-3 relative group transition-all">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-7 w-7 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-400/20"
                      onClick={() => removeMember(idx)}
                    >
                      <Trash2 size={14} className="text-red-400" />
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label className="text-[10px] opacity-60 text-slate-900">Name</Label>
                        <select
                          value={member.name}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === "") {
                              updateMember(idx, 'name', "");
                              updateMember(idx, 'email', "");
                              updateMember(idx, 'phone', "");
                              return;
                            }

                            const selectedFac = faculties.find((f: any) => f.name === val);
                            if (selectedFac) {
                              const updated = [...committee];
                              updated[idx].name = selectedFac.name;
                              updated[idx].email = selectedFac.email || "";
                              updated[idx].phone = selectedFac.phone_number || "";
                              setCommittee(updated);
                            } else {
                              updateMember(idx, 'name', val);
                            }
                          }}
                          className="w-full h-9 rounded-lg border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md text-slate-900 text-xs font-bold px-2 focus-visible:ring-2 focus-visible:ring-white/20"
                        >
                          <option value="" className="bg-white">Select Faculty...</option>
                          {faculties.map((f: any) => (
                            <option key={f.id} value={f.name} className="bg-white">{f.name}</option>
                          ))}
                          {member.name && !faculties.find((f:any) => f.name === member.name) && (
                            <option value={member.name} className="bg-white">{member.name} (Custom)</option>
                          )}
                        </select>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-[10px] opacity-60 text-slate-900">Role/Designation</Label>
                        <Input value={member.role} onChange={(e) => updateMember(idx, 'role', e.target.value)} placeholder="Convenor" className="h-9 rounded-lg border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md text-slate-900 text-xs font-bold placeholder:text-slate-900/30" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label className="text-[10px] opacity-60 text-slate-900">Email</Label>
                        <Input value={member.email} onChange={(e) => updateMember(idx, 'email', e.target.value)} placeholder="email@semcom.ac.in" className="h-9 rounded-lg border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md text-slate-900 text-xs font-bold placeholder:text-slate-900/30" />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-[10px] opacity-60 text-slate-900">Phone</Label>
                        <Input value={member.phone} onChange={(e) => updateMember(idx, 'phone', e.target.value)} placeholder="98XXXXXXXX" className="h-9 rounded-lg border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md text-slate-900 text-xs font-bold placeholder:text-slate-900/30" />
                      </div>
                    </div>
                  </div>
                ))}
                {committee.length === 0 && (
                  <div className="text-center py-10 border-2 border-dashed border-white bg-white/80 backdrop-blur-md rounded-2xl">
                    <p className="text-xs font-bold text-slate-500 italic">No members added yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <DialogFooter className="p-6 pt-4 border-t border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] shrink-0">
            <Button variant="ghost" onClick={resetForm} className="text-slate-900 hover:bg-white/80 hover:text-slate-900">Cancel</Button>
            <Button disabled={isSaving} onClick={() => {
              const depsArray = departments ? departments.split(',').map(d => d.trim()).filter(Boolean) : [];
              saveEvent({
                title, date, location, description, highlights, schedule, committee,
                end_date: endDate,
                departments: JSON.stringify(depsArray),
                level, type, registration_link: registrationLink, status
              });
            }} className="rounded-xl px-10 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">
              {isSaving ? <Loader2 className="animate-spin" /> : (editingId ? "Save Changes" : "Save Event")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Events</h2>
          <p className="text-slate-500 text-sm mt-1">Manage institutional activities and workshops</p>
        </div>
        <Button onClick={() => setOpenDialog(true)} className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90"><Plus className="h-4 w-4 mr-2" />Add Event</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        <Input placeholder="Search events..." className="pl-9 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {isLoading ? (
        <div className="flex justify-center p-20"><Loader2 className="h-10 w-10 animate-spin text-accent" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((event: any, i: number) => (
            <div key={event.id || i} className="admin-glass-card p-5 group flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start justify-between mb-3"><Badge variant="outline" className="rounded-lg border-white text-slate-900 bg-white/80 backdrop-blur-md">{event.location || 'College Campus'}</Badge></div>
                <h3 className="font-bold text-slate-900 text-sm min-h-[2.5rem] line-clamp-2">{event.title || event.name}</h3>
                <div className="space-y-1.5 mt-3">
                  <div className="flex items-center gap-1.5 text-slate-500"><Calendar className="h-3.5 w-3.5 text-accent" /><span className="text-[11px] font-medium">{event.date ? new Date(event.date).toDateString() : 'Date Pending'}</span></div>
                  <div className="flex items-center gap-1.5 text-slate-500"><MapPin className="h-3.5 w-3.5 text-emerald-400" /><span className="text-[11px] font-medium">{event.location || 'SEMCOM'}</span></div>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl h-9 border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-transparent" onClick={() => startEdit(event)}><Edit className="h-3 w-3 mr-1.5" />Edit</Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20" onClick={() => confirm("Delete this event?") && deleteEvent(event.id)}><Trash2 className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

