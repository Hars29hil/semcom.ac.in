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
      return facultyApi.update(editingId!, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faculty'] });
      toast({ title: "Updated!", description: "Faculty profile has been synchronized." });
      resetForm();
    }
  });

  const resetForm = () => {
    setOpenDialog(false);
    setName("");
    setEmail("");
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
    <div className="space-y-6 text-slate-900 pb-20">
      <Dialog open={openDialog} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="admin-glass-panel border-none sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-slate-900">{editingId ? "Edit Faculty Profile" : "Add Faculty"}</DialogTitle>
            <DialogDescription className="text-slate-500">
              Update the staff member's profile and academic details.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto px-1 custom-scrollbar">
             <div className="flex justify-center mb-4">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative h-24 w-24 rounded-3xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 overflow-hidden cursor-pointer group"
                >
                   {selectedImage ? (
                      <img src={URL.createObjectURL(selectedImage)} className="h-full w-full object-cover" />
                   ) : currentImageUrl ? (
                      <img src={currentImageUrl} className="h-full w-full object-cover" />
                   ) : (
                      <div className="h-full w-full flex items-center justify-center bg-white/80 backdrop-blur-md"><ImageIcon className="h-8 w-8 text-slate-400" /></div>
                   )}
                   <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-slate-900 font-bold uppercase">Change Photo</span>
                   </div>
                   <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => setSelectedImage(e.target.files?.[0] || null)} />
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label className="text-slate-700">Full Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" /></div>
                <div className="space-y-2"><Label className="text-slate-700">Email</Label><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" /></div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label className="text-slate-700">Designation</Label><Input value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="e.g. Professor" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" /></div>
                <div className="space-y-2"><Label className="text-slate-700">Mobile Number</Label><Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="e.g. 9876543210" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" /></div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label className="text-slate-700">Department</Label><Input value={dept} onChange={(e) => setDept(e.target.value)} placeholder="e.g. BBA" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" /></div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-700">Staff Category</Label>
                  <select value={staffType} onChange={(e) => setStaffType(e.target.value)} className="w-full rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white focus-visible:bg-white/90 focus-visible:ring-2 focus-visible:ring-slate-300 h-12 px-3 focus:outline-none text-sm font-medium text-slate-900 [color-scheme:light]">
                     <option value="Teaching" className="bg-white text-slate-900">Teaching Faculty</option>
                     <option value="Technical" className="bg-white text-slate-900">Technical Staff</option>
                     <option value="Admin" className="bg-white text-slate-900">Administrative Staff</option>
                     <option value="Support" className="bg-white text-slate-900">Supportive Staff</option>
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
                   <Label htmlFor="is_vp" className="cursor-pointer text-slate-700">Assign as Vice Principal (VP)</Label>
                </div>
             </div>

             <div className="space-y-2"><Label className="text-slate-700">Qualification</Label><Input value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder="e.g. M.Com, PhD" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" /></div>
             <div className="space-y-2"><Label className="text-slate-700">Expertise Area</Label><Input value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. Computer Science" className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-12" /></div>
             
          </div>
          <DialogFooter>
             <Button variant="ghost" onClick={resetForm} className="text-slate-900 hover:bg-white/80 hover:text-slate-900">Cancel</Button>
             <Button disabled={isUpdating} onClick={() => updateFaculty({ name, email, phone_number: phoneNumber, designation, dept, qualification, area, staff_type: staffType, is_vp: isVP, image_url: currentImageUrl })} className="rounded-xl px-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 shadow-lg">
                {isUpdating ? <Loader2 className="animate-spin" /> : "Save Profile"}
             </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Faculty & Staff</h2>
          <p className="text-slate-500 text-sm mt-1">Manage institutional staff and academic profiles</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-white/80 backdrop-blur-md" onClick={() => {
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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input placeholder="Search name..." className="pl-9 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 h-11" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        
        <div className="flex items-center gap-2">
           <Label className="text-[10px] uppercase font-black text-slate-500 tracking-widest hidden sm:block">Dept:</Label>
           <select 
            value={filterDept} 
            onChange={(e) => setFilterDept(e.target.value)}
            className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md shadow-sm h-11 px-6 text-xs font-bold focus:ring-2 focus:ring-white/30 outline-none text-slate-900 [color-scheme:light]"
           >
              {departments.map(d => <option key={d} value={d} className="bg-white text-slate-900">{d}</option>)}
           </select>
        </div>

        <div className="flex items-center gap-2">
           <Label className="text-[10px] uppercase font-black text-slate-500 tracking-widest hidden sm:block">Type:</Label>
           <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md shadow-sm h-11 px-6 text-xs font-bold focus:ring-2 focus:ring-white/30 outline-none text-slate-900 [color-scheme:light]"
           >
              <option value="All" className="bg-white text-slate-900">All Categories</option>
              <option value="Teaching" className="bg-white text-slate-900">Teaching</option>
              <option value="Technical" className="bg-white text-slate-900">Technical</option>
              <option value="Admin" className="bg-white text-slate-900">Admin</option>
              <option value="Support" className="bg-white text-slate-900">Support</option>
           </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-20"><Loader2 className="h-8 w-8 animate-spin text-accent" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((f: any, i: number) => (
            <div key={f.id} className="admin-glass-card hover:-translate-y-1 transition-all p-5 flex flex-col justify-between relative overflow-hidden group">
              {f.is_vp === 1 && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[8px] font-black px-3 py-1 rounded-bl-xl shadow-sm uppercase tracking-widest z-10">
                  VP
                </div>
              )}
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  {f.image_url ? (
                    <img src={f.image_url} className="h-12 w-12 rounded-2xl object-cover shadow-lg border-2 border-white" />
                  ) : (
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-slate-900 font-bold text-sm shadow-lg`}>
                      {f.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors">{f.name}</p>
                    <p className="text-[11px] text-slate-500">{f.designation}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="outline" className="rounded-lg border-white text-slate-900 bg-white/80 backdrop-blur-md">{f.dept}</Badge>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500"><Mail className="h-3 w-3" /><span className="truncate max-w-[130px]">{f.email}</span></div>
                </div>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl h-9 border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-transparent" onClick={() => startEdit(f)}><Edit className="h-3 w-3 mr-1.5" />Edit</Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20"><Trash2 className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

