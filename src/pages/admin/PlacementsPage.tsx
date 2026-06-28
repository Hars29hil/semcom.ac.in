import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Building2, Loader2, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { getToken } from "@/lib/auth";

interface Placement {
  id: number;
  company_name: string;
  student_name: string;
  package_detail: string;
  placement_year: string;
}

import { API_BASE as GLOBAL_API_BASE } from "@/lib/api";

const API_BASE = `${GLOBAL_API_BASE}/placements`;

export default function PlacementsPage() {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  // Dialog states
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPlacement, setEditingPlacement] = useState<Placement | null>(null);
  const [newPlacement, setNewPlacement] = useState<Partial<Placement>>({
    company_name: "",
    student_name: "",
    package_detail: "",
    placement_year: new Date().getFullYear().toString()
  });

  const fetchPlacements = async () => {
    try {
      const res = await fetch(API_BASE, {
        headers: { "Authorization": `Bearer ${getToken()}` }
      });
      const data = await res.json();
      setPlacements(data);
    } catch (error) {
      // If table doesn't exist yet, we'll get an error
      toast.error("Failed to fetch placement records");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlacements();
  }, []);

  const handleSave = async () => {
    const data = editingPlacement || newPlacement;
    
    if (!data.company_name || !data.student_name) {
      toast.error("Company and student names are required");
      return;
    }

    try {
      const method = editingPlacement ? "PUT" : "POST";
      const url = editingPlacement ? `${API_BASE}/${editingPlacement.id}` : API_BASE;
      
      const res = await fetch(url, {
        method,
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(`Placement record ${editingPlacement ? "updated" : "added"} successfully`);
        setIsDialogOpen(false);
        setEditingPlacement(null);
        setNewPlacement({ company_name: "", student_name: "", package_detail: "", placement_year: "2026" });
        fetchPlacements();
      }
    } catch (error) {
      toast.error("Failed to save placement record");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this record?")) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, { 
        method: "DELETE",
        headers: { "Authorization": `Bearer ${getToken()}` }
      });
      if (res.ok) {
        toast.success("Record deleted successfully");
        fetchPlacements();
      }
    } catch (error) {
      toast.error("Failed to delete record");
    }
  };

  const filtered = placements.filter((p) => 
    p.company_name?.toLowerCase().includes(search.toLowerCase()) ||
    p.student_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 text-primary">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-primary">Campus Placements</h2>
          <p className="text-muted text-sm mt-1">Management of student recruitment records and packages</p>
        </div>
        <Button className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90" onClick={() => {
          setEditingPlacement(null);
          setIsDialogOpen(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />Add Placement
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
        <Input 
          placeholder="Search company or student..." 
          className="pl-9 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-primary placeholder:text-muted-foreground h-11" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((item) => (
            <div key={item.id} className="admin-glass-card hover:bg-surface/50 transition-all p-4 flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden group gap-4 rounded-2xl border border-border">
              
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="h-12 w-12 rounded-xl bg-surface flex items-center justify-center text-accent border border-border shadow-sm shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 items-center min-w-0 pr-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors truncate">{item.company_name}</h3>
                    <p className="text-xs font-medium text-muted truncate">{item.student_name}</p>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-2 min-w-0">
                    <div className="text-[10px] font-black uppercase text-muted-foreground tracking-widest shrink-0">Package</div>
                    <div className="text-xs font-black text-accent truncate">{item.package_detail}</div>
                  </div>
                  
                  <div className="hidden md:block min-w-0">
                    <Badge variant="outline" className="rounded-lg font-bold border-accent/20 text-accent bg-accent/10 truncate max-w-full">
                      {item.placement_year}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 shrink-0 justify-end mt-2 md:mt-0">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-xl font-bold h-9 bg-transparent border-border shadow-sm text-primary hover:bg-surface hover:text-primary"
                  onClick={() => {
                    setEditingPlacement(item);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-3 w-3 mr-1.5" />Edit
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 rounded-xl hover:bg-red-400/20 text-red-400 transition-colors"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center text-muted italic border-2 border-dashed border-border shadow-sm bg-surface rounded-2xl">
              No placement records found. Click "Add Placement" to start.
            </div>
          )}
        </div>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[450px] admin-glass-panel border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black italic tracking-tighter text-primary">
              {editingPlacement ? "Modify Record" : "New Placement"}
            </DialogTitle>
            <DialogDescription className="font-medium text-muted">
              Maintain accurate records of student industry transitions.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-5 py-6">
            <div className="grid gap-2">
              <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted">Company Name</Label>
              <Input
                className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 px-4"
                value={editingPlacement?.company_name || newPlacement.company_name}
                onChange={(e) => editingPlacement 
                  ? setEditingPlacement({...editingPlacement, company_name: e.target.value})
                  : setNewPlacement({...newPlacement, company_name: e.target.value})
                }
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted">Student Name</Label>
              <Input
                className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 px-4"
                value={editingPlacement?.student_name || newPlacement.student_name}
                onChange={(e) => editingPlacement 
                  ? setEditingPlacement({...editingPlacement, student_name: e.target.value})
                  : setNewPlacement({...newPlacement, student_name: e.target.value})
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted">Package (e.g. 12 LPA)</Label>
                <Input
                  className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 px-4"
                  value={editingPlacement?.package_detail || newPlacement.package_detail}
                  onChange={(e) => editingPlacement
                    ? setEditingPlacement({...editingPlacement, package_detail: e.target.value})
                    : setNewPlacement({...newPlacement, package_detail: e.target.value})
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted">Year</Label>
                <Input
                  className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 px-4"
                  value={editingPlacement?.placement_year || newPlacement.placement_year}
                  onChange={(e) => editingPlacement
                    ? setEditingPlacement({...editingPlacement, placement_year: e.target.value})
                    : setNewPlacement({...newPlacement, placement_year: e.target.value})
                  }
                />
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="ghost" className="rounded-xl font-bold text-primary hover:bg-surface hover:text-primary" onClick={() => setIsDialogOpen(false)}>Discard</Button>
            <Button className="rounded-xl font-bold px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90" onClick={handleSave}>
              Save Record
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
