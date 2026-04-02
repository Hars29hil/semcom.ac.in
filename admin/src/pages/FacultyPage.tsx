import { Card, CardContent } from "@/components/ui/card";
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
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [dept, setDept] = useState("");
  const [qualification, setQualification] = useState("");
  const [area, setArea] = useState("");
  const [staffType, setStaffType] = useState("Teaching");
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
    setDesignation("");
    setDept("");
    setQualification("");
    setArea("");
    setStaffType("Teaching");
    setSelectedImage(null);
    setCurrentImageUrl("");
    setEditingId(null);
  };

  const startEdit = (f: any) => {
    setEditingId(f.id);
    setName(f.name);
    setEmail(f.email);
    setDesignation(f.designation);
    setDept(f.dept);
    setQualification(f.qualification || "");
    setArea(f.area || "");
    setStaffType(f.staff_type || "Teaching");
    setCurrentImageUrl(f.image_url || "");
    setOpenDialog(true);
  };

  const faculty = facultyResponse?.success ? facultyResponse.data : [];
  const filtered = faculty.filter((f: any) =>
    f.name.toLowerCase().includes(search.toLowerCase()) || f.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Dialog open={openDialog} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="rounded-3xl clay border-none max-w-lg">
          <DialogHeader><DialogTitle className="text-2xl font-black">{editingId ? "Edit Faculty Profile" : "Add Faculty"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto px-1">
             <div className="flex justify-center mb-4">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative h-24 w-24 rounded-3xl neu-inset overflow-hidden cursor-pointer group"
                >
                   {selectedImage ? (
                      <img src={URL.createObjectURL(selectedImage)} className="h-full w-full object-cover" />
                   ) : currentImageUrl ? (
                      <img src={currentImageUrl} className="h-full w-full object-cover" />
                   ) : (
                      <div className="h-full w-full flex items-center justify-center bg-accent/20"><ImageIcon className="h-8 w-8 text-muted-foreground" /></div>
                   )}
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-white font-bold uppercase">Change Photo</span>
                   </div>
                   <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => setSelectedImage(e.target.files?.[0] || null)} />
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Full Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="rounded-xl border-none neu-inset h-12" /></div>
                <div className="space-y-2"><Label>Email</Label><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded-xl border-none neu-inset h-12" /></div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Designation</Label><Input value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="e.g. Professor" className="rounded-xl border-none neu-inset h-12" /></div>
                <div className="space-y-2">
                  <Label>Staff Category</Label>
                  <select value={staffType} onChange={(e) => setStaffType(e.target.value)} className="w-full rounded-xl border-none neu-inset h-12 px-3 focus:outline-none text-sm font-medium">
                     <option value="Teaching">Teaching Faculty</option>
                     <option value="Technical">Technical Staff</option>
                     <option value="Admin">Administrative Staff</option>
                     <option value="Support">Supportive Staff</option>
                  </select>
                </div>
             </div>

             <div className="space-y-2"><Label>Qualification</Label><Input value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder="e.g. M.Com, PhD" className="rounded-xl border-none neu-inset h-12" /></div>
             <div className="space-y-2"><Label>Expertise Area</Label><Input value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. Computer Science" className="rounded-xl border-none neu-inset h-12" /></div>
             
          </div>
          <DialogFooter>
             <Button variant="ghost" onClick={resetForm}>Cancel</Button>
             <Button disabled={isUpdating} onClick={() => updateFaculty({ name, email, designation, qualification, area, staff_type: staffType, image_url: currentImageUrl })} className="rounded-xl px-10 shadow-lg">
                {isUpdating ? <Loader2 className="animate-spin" /> : "Save Profile"}
             </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Faculty</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage institutional staff and academic profiles</p>
        </div>
        <Button onClick={() => setOpenDialog(true)}><Plus className="h-4 w-4 mr-2" />Add Faculty</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search faculty..." className="pl-9 neu-inset rounded-xl border-none" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((f: any, i: number) => (
            <div key={f.id} className="clay p-5 group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  {f.image_url ? (
                    <img src={f.image_url} className="h-12 w-12 rounded-2xl object-cover shadow-lg border-2 border-white/50" />
                  ) : (
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg`}>
                      {f.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{f.name}</p>
                    <p className="text-[11px] text-muted-foreground">{f.designation}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="outline" className="rounded-lg">{f.dept}</Badge>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Mail className="h-3 w-3" /><span className="truncate max-w-[130px]">{f.email}</span></div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl h-9" onClick={() => startEdit(f)}><Edit className="h-3 w-3 mr-1.5" />Edit</Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl outline-destructive/20 hover:bg-destructive/10"><Trash2 className="h-3.5 w-3.5 text-destructive" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

