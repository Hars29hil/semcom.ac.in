import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Plus, Search, Edit, Trash2, Mail, Loader2, Image as ImageIcon } from "lucide-react";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { facultyApi, uploadApi } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const colors = [
  "from-primary to-primary/60",
  "from-info to-info/60",
  "from-success to-success/60",
  "from-warning to-warning/60",
];


export default function FacultyPage() {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [dept, setDept] = useState("");
  const [qualification, setQualification] = useState("");
  const [area, setArea] = useState("");
  const [staffType, setStaffType] = useState("Teaching");
  const [isVP, setIsVP] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { data: facultyResponse, isLoading, error } = useQuery({
    queryKey: ['faculty'],
    queryFn: facultyApi.getAll,
  });

  const { mutate: updateFaculty, isPending: isUpdating } = useMutation({
    mutationFn: async (payload: any) => {
      if (selectedImage) {
        const uploadRes = await uploadApi.uploadImage(selectedImage);
        if (uploadRes.success) payload.image_url = uploadRes.imageUrl;
      }
      return editingId 
        ? facultyApi.update(editingId, payload)
        : facultyApi.add(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faculty'] });
      toast({ title: "Success!", description: editingId ? "Faculty profile has been updated." : "New faculty member added. Login credentials created." });
      resetForm();
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to save profile", variant: "destructive" });
    }
  });

  const { mutate: deleteFaculty } = useMutation({
    mutationFn: (id: number) => facultyApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faculty'] });
      toast({ title: "Deleted", description: "Faculty member has been deleted." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to delete profile", variant: "destructive" });
    }
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this faculty member?")) {
      deleteFaculty(id);
    }
  };

  const resetForm = () => {
    setOpenDialog(false);
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setDesignation("");
    setDept("");
    setQualification("");
    setArea("");
    setStaffType("Teaching");
    setIsVP(false);
    setSelectedImage(null);
    setCurrentImageUrl("");
    setEditingId(null);
  };

  const startEdit = (f: any) => {
    setEditingId(f.id);
    setName(f.name);
    setEmail(f.email);
    setPassword("");
    setPhoneNumber(f.phone_number || "");
    setDesignation(f.designation);
    setDept(f.dept);
    setQualification(f.qualification || "");
    setArea(f.area || "");
    setStaffType(f.staff_type || "Teaching");
    setIsVP(f.is_vp === 1 || f.is_vp === true);
    setCurrentImageUrl(f.image_url || "");
    setOpenDialog(true);
  };

  const handleSave = () => {
    if (!name || !email || !phoneNumber || !designation || !dept || !qualification || !area || !staffType || (!editingId && !password)) {
      toast({ title: "Validation Error", description: "All fields are mandatory.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Validation Error", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({ title: "Validation Error", description: "Mobile number must contain only numbers.", variant: "destructive" });
      return;
    }
    if (phoneNumber.length < 10) {
      toast({ title: "Validation Error", description: "Mobile number must be at least 10 digits.", variant: "destructive" });
      return;
    }
    updateFaculty({ name, email, password: password || undefined, phone_number: phoneNumber, designation, dept, qualification, area, staff_type: staffType, is_vp: isVP, image_url: currentImageUrl });
  };

  const faculty = facultyResponse?.success ? facultyResponse.data : [];
  
  const departments = ["All", ...new Set(faculty.map((f: any) => f.dept))] as string[];

  const filtered = faculty.filter((f: any) => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || 
                          f.dept.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDept === "All" || f.dept === filterDept;
    const matchesType = filterType === "All" || f.staff_type === filterType;
    return matchesSearch && matchesDept && matchesType;
  });

  return (
    <div className="space-y-6 text-primary pb-20">
      <Dialog open={openDialog} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="admin-glass-panel border-none sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-primary">{editingId ? "Edit Faculty Profile" : "Add Faculty"}</DialogTitle>
            <DialogDescription className="text-muted">
              Update the staff member's profile and academic details.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto px-1 custom-scrollbar">
             <div className="flex flex-col items-center justify-center mb-4">
                <p className="text-red-500 text-xs font-semibold mb-2">*Only image with 100 or lessthan 100 kb allowed..</p>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative h-24 w-24 rounded-3xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 overflow-hidden cursor-pointer group"
                >
                   {selectedImage ? (
                      <img src={URL.createObjectURL(selectedImage)} className="h-full w-full object-cover" />
                   ) : currentImageUrl ? (
                      <img src={currentImageUrl} className="h-full w-full object-cover" />
                   ) : (
                      <div className="h-full w-full flex items-center justify-center bg-surface"><ImageIcon className="h-8 w-8 text-muted-foreground" /></div>
                   )}
                   <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-primary font-bold uppercase">Change Photo</span>
                   </div>
                   <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => {
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
                     } else {
                       setSelectedImage(null);
                     }
                   }} />
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label className="text-primary-light">Full Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-12" /></div>
                <div className="space-y-2"><Label className="text-primary-light">Email (Login ID)</Label><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-12" /></div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label className="text-primary-light">Password {editingId ? "(Leave empty to keep current)" : "*"}</Label><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-12" /></div>
                <div className="space-y-2"><Label className="text-primary-light">Mobile Number</Label><Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))} placeholder="e.g. 9876543210" className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-12" /></div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-primary-light">Designation</Label>
                  <select value={designation} onChange={(e) => setDesignation(e.target.value)} className="w-full rounded-xl border border-border shadow-sm bg-white focus-visible:bg-white/90 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 px-3 focus:outline-none text-sm font-medium text-primary [color-scheme:light]">
                    <option value="" disabled className="bg-white text-primary">Select Designation</option>
                    <option value="Principal (In-Charge)" className="bg-white text-primary">Principal (In-Charge)</option>
                    <option value="Assistant Professor" className="bg-white text-primary">Assistant Professor</option>
                    <option value="Associate Professor" className="bg-white text-primary">Associate Professor</option>
                    <option value="Professor" className="bg-white text-primary">Professor</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-primary-light">Department</Label>
                  <select value={dept} onChange={(e) => setDept(e.target.value)} className="w-full rounded-xl border border-border shadow-sm bg-white focus-visible:bg-white/90 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 px-3 focus:outline-none text-sm font-medium text-primary [color-scheme:light]">
                    <option value="" disabled className="bg-white text-primary">Select Department</option>
                    <option value="Computer Science" className="bg-white text-primary">Computer Science</option>
                    <option value="Commerce and Management" className="bg-white text-primary">Commerce and Management</option>
                    <option value="Mathematics & Statistics" className="bg-white text-primary">Mathematics & Statistics</option>
                    <option value="English" className="bg-white text-primary">English</option>
                  </select>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-primary-light">Staff Category</Label>
                  <select value={staffType} onChange={(e) => setStaffType(e.target.value)} className="w-full rounded-xl border border-border shadow-sm bg-white focus-visible:bg-white/90 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 px-3 focus:outline-none text-sm font-medium text-primary [color-scheme:light]">
                     <option value="Teaching" className="bg-white text-primary">Teaching Faculty</option>
                     <option value="Technical" className="bg-white text-primary">Technical Staff</option>
                     <option value="Admin" className="bg-white text-primary">Administrative Staff</option>
                     <option value="Support" className="bg-white text-primary">Supportive Staff</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 pt-8">
                   <input 
                    type="checkbox" 
                    id="is_vp" 
                    checked={isVP} 
                    onChange={(e) => setIsVP(e.target.checked)}
                    className="w-5 h-5 accent-accent"
                   />
                   <Label htmlFor="is_vp" className="cursor-pointer text-primary-light">Assign as Vice Principal (VP)</Label>
                </div>
             </div>

             <div className="space-y-2"><Label className="text-primary-light">Qualification</Label><Input value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder="e.g. M.Com, PhD" className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-12" /></div>
             <div className="space-y-2"><Label className="text-primary-light">Expertise Area</Label><Input value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. Computer Science" className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-12" /></div>
             
          </div>
          <DialogFooter>
             <Button variant="ghost" onClick={resetForm} className="text-primary hover:bg-surface hover:text-primary">Cancel</Button>
             <Button disabled={isUpdating} onClick={handleSave} className="rounded-xl px-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 shadow-lg">
                {isUpdating ? <Loader2 className="animate-spin" /> : "Save Profile"}
             </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-primary">Faculty & Staff</h2>
          <p className="text-muted text-sm mt-1">Manage institutional staff and academic profiles</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-border text-primary hover:bg-surface hover:text-primary bg-surface" onClick={() => {
            const headers = ["Name", "Email", "Designation", "Department", "Staff Type", "Qualification", "Expertise"];
            const csvData = filtered.map((f: any) => [
              f.name, f.email, f.designation, f.dept, f.staff_type, f.qualification, f.area
            ]);
            const csvContent = [headers, ...csvData].map(e => e.join(",")).join("\n");
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `faculty_data_${new Date().toISOString().split('T')[0]}.csv`;
            a.click();
          }}>
            Download List (CSV)
          </Button>
          <Button onClick={() => setOpenDialog(true)} className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90"><Plus className="h-4 w-4 mr-2" />Add New Staff</Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative max-w-xs flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <Input placeholder="Search name..." className="pl-9 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-primary placeholder:text-muted-foreground h-11" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        
        <div className="flex items-center gap-2">
           <Label className="text-[10px] uppercase font-black text-muted tracking-widest hidden sm:block">Dept:</Label>
           <select 
            value={filterDept} 
            onChange={(e) => setFilterDept(e.target.value)}
            className="rounded-xl border border-border shadow-sm bg-surface shadow-sm h-11 px-6 text-xs font-bold focus:ring-2 focus:ring-white/30 outline-none text-primary [color-scheme:light]"
           >
              {departments.map(d => <option key={d} value={d} className="bg-white text-primary">{d}</option>)}
           </select>
        </div>

        <div className="flex items-center gap-2">
           <Label className="text-[10px] uppercase font-black text-muted tracking-widest hidden sm:block">Type:</Label>
           <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className="rounded-xl border border-border shadow-sm bg-surface shadow-sm h-11 px-6 text-xs font-bold focus:ring-2 focus:ring-white/30 outline-none text-primary [color-scheme:light]"
           >
              <option value="All" className="bg-white text-primary">All Categories</option>
              <option value="Teaching" className="bg-white text-primary">Teaching</option>
              <option value="Technical" className="bg-white text-primary">Technical</option>
              <option value="Admin" className="bg-white text-primary">Admin</option>
              <option value="Support" className="bg-white text-primary">Support</option>
           </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-20"><Loader2 className="h-8 w-8 animate-spin text-accent" /></div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((f: any, i: number) => (
            <div key={f.id} className="admin-glass-card hover:bg-surface/50 transition-all p-4 flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden group gap-4 rounded-2xl border border-border cursor-pointer" onClick={() => startEdit(f)}>
              {f.is_vp === 1 && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[8px] font-black px-3 py-1 rounded-bl-xl shadow-sm uppercase tracking-widest z-10">
                  VP
                </div>
              )}
              
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {f.image_url ? (
                  <img src={f.image_url} className="h-12 w-12 rounded-xl object-cover shadow-sm border border-border shrink-0" />
                ) : (
                  <div className={`h-12 w-12 rounded-xl shrink-0 bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-primary font-bold text-sm shadow-sm`}>
                    {f.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 items-center min-w-0 pr-4">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors truncate">{f.name}</p>
                    <p className="text-xs text-muted truncate">{f.designation}</p>
                  </div>
                  
                  <div className="hidden md:block min-w-0">
                    <Badge variant="outline" className="rounded-lg border-border text-primary bg-surface shadow-sm truncate max-w-full">{f.dept}</Badge>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-1.5 text-xs text-muted min-w-0">
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{f.email}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 shrink-0 justify-end mt-2 md:mt-0">
                <Button variant="outline" size="sm" className="rounded-xl h-9 border-border text-primary hover:bg-surface hover:text-primary bg-transparent" onClick={(e) => { e.stopPropagation(); startEdit(f); }}>
                  <Edit className="h-3 w-3 mr-1.5" />Edit
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20" onClick={(e) => { e.stopPropagation(); handleDelete(f.id); }}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

