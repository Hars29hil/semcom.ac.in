import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Image as ImageIcon, Loader2, Users } from "lucide-react";
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { councilApi, uploadApi } from "@/lib/api";
import { toast } from "sonner";

export default function CouncilPage() {
  const [search, setSearch] = useState("");
  
  // Council Member State
  const [openDialog, setOpenDialog] = useState(false);
  const [memberName, setMemberName] = useState("");
  const [memberRole, setMemberRole] = useState("");
  const [memberYear, setMemberYear] = useState("2025-2026");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  // --- MUTATIONS ---

  const { mutate: saveMember, isPending: isSaving } = useMutation({
    mutationFn: async (payload: any) => {
      let imageUrl = existingImageUrl;
      if (selectedImage) {
        const res = await uploadApi.uploadImage(selectedImage);
        if (res.success) imageUrl = res.imageUrl;
      }
      
      const finalPayload = {
        ...payload,
        image_url: imageUrl
      };

      return editingId 
        ? councilApi.update(editingId, finalPayload) 
        : councilApi.add(finalPayload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['council'] });
      toast.success(editingId ? "Updated successfully!" : "Added successfully!");
      resetForm();
    },
    onError: () => {
      toast.error("An error occurred");
    }
  });

  const { mutate: deleteMember } = useMutation({
    mutationFn: councilApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['council'] });
      toast.success("Council member has been removed.");
    }
  });

  // --- HANDLERS ---

  const resetForm = () => {
    setOpenDialog(false);
    setMemberName("");
    setMemberRole("");
    setMemberYear("2025-2026");
    setSelectedImage(null);
    setEditingId(null);
    setExistingImageUrl("");
  };

  const startEdit = (member: any) => {
    setEditingId(member.id);
    setMemberName(member.name);
    setMemberRole(member.role);
    setMemberYear(member.year);
    setExistingImageUrl(member.image_url || "");
    setOpenDialog(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSave = () => {
    if (!memberName || !memberRole || !memberYear) return;
    saveMember({ 
      name: memberName, 
      role: memberRole,
      year: memberYear
    });
  };

  // --- QUERIES ---

  const { data: councilRes, isLoading } = useQuery({
    queryKey: ['council'],
    queryFn: councilApi.getAll,
  });

  const councilMembers = councilRes?.success ? councilRes.data : [];

  const filteredMembers = councilMembers.filter((m: any) =>
    m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      {/* DIALOG: COUNCIL MEMBER */}
      <Dialog open={openDialog} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="rounded-3xl bg-white border border-border shadow-sm max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">
              {editingId ? "Edit Council Member" : "New Council Member"}
            </DialogTitle>
            <DialogDescription>
              Provide the details for the student council member.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input 
                value={memberName} 
                onChange={(e) => setMemberName(e.target.value)} 
                placeholder="Full Name" 
                className="rounded-xl border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 border-none h-12" 
              />
            </div>
            <div className="space-y-2">
              <Label>Role / Position</Label>
              <Input 
                value={memberRole} 
                onChange={(e) => setMemberRole(e.target.value)} 
                placeholder="e.g. President, General Secretary" 
                className="rounded-xl border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 border-none h-12" 
              />
            </div>
            <div className="space-y-2">
              <Label>Academic Year</Label>
              <Input 
                value={memberYear} 
                onChange={(e) => setMemberYear(e.target.value)} 
                placeholder="e.g. 2025-2026" 
                className="rounded-xl border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 border-none h-12" 
              />
            </div>
            <div className="space-y-2">
              <Label>Profile Image (Optional)</Label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group border-2 border-dashed border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all bg-accent/5"
              >
                <ImageIcon className="h-6 w-6 text-primary mb-2" />
                <p className="text-xs font-bold">{selectedImage ? selectedImage.name : (existingImageUrl ? "Click to change image" : "Click to upload image")}</p>
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
            <Button variant="ghost" onClick={resetForm}>Cancel</Button>
            <Button disabled={isSaving || !memberName || !memberRole} onClick={handleSave} className="rounded-xl px-8 shadow-lg">
               {isSaving ? <Loader2 className="animate-spin" /> : (editingId ? "Save Changes" : "Add Member")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Student Council</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage the details and members of the student council</p>
        </div>
        
        <Button onClick={() => setOpenDialog(true)} className="rounded-xl shadow-lg">
          <Plus className="h-4 w-4 mr-2" />Add Member
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search members..." 
          className="pl-9 border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl border-none" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {/* COUNCIL MEMBERS LIST */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {isLoading ? (
             <div className="col-span-full border border-dashed rounded-2xl flex justify-center p-12">
               <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
           ) : (
             filteredMembers.map((member: any) => (
               <div key={member.id} className="bg-white border border-border shadow-sm p-5 flex gap-4 group items-center relative overflow-hidden">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                    {member.image_url ? (
                      <img src={member.image_url} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <Users className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-grow min-w-0 z-10">
                     <h4 className="text-[15px] font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                       {member.name}
                     </h4>
                     <p className="text-xs text-muted-foreground font-medium mt-0.5">{member.role}</p>
                     <div className="flex justify-between items-center mt-3">
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase font-bold tracking-tight">
                           {member.year}
                        </span>
                        <div className="flex gap-1">
                           <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-8 w-8" 
                             onClick={() => startEdit(member)}
                           >
                             <Edit className="h-3.5 w-3.5" />
                           </Button>
                           <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10" 
                             onClick={() => confirm("Delete this member?") && deleteMember(member.id)}
                           >
                             <Trash2 className="h-3.5 w-3.5" />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
             ))
           )}
           {!isLoading && filteredMembers.length === 0 && (
             <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed rounded-3xl bg-accent/20">
               No council members found.
             </div>
           )}
        </div>
      </section>
    </div>
  );
}
