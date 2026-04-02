import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Building2, Loader2, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Placement {
  id: number;
  company_name: string;
  student_name: string;
  package_detail: string;
  placement_year: string;
}

const API_BASE = "/api/placements";

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
      const res = await fetch(API_BASE);
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
        headers: { "Content-Type": "application/json" },
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
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
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
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Campus Placements</h2>
          <p className="text-muted-foreground text-sm mt-1">Management of student recruitment records and packages</p>
        </div>
        <Button className="rounded-2xl" onClick={() => {
          setEditingPlacement(null);
          setIsDialogOpen(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />Add Placement
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search company or student..." 
          className="pl-9 neu-inset rounded-xl border-none h-11" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Card key={item.id} className="clay clay-hover group overflow-hidden border-none shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="rounded-lg font-bold border-primary/20 text-primary">
                    {item.placement_year}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">{item.company_name}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-4">Student: <span className="text-foreground">{item.student_name}</span></p>
                
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl border border-primary/10 mb-6">
                   <div className="text-[10px] font-black uppercase text-primary/60 tracking-widest leading-none">Package</div>
                   <div className="text-sm font-black text-primary">{item.package_detail}</div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 rounded-xl font-bold h-9 bg-white/50"
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
                    className="h-9 w-9 rounded-xl hover:bg-destructive/10 transition-colors"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center text-muted-foreground italic border-2 border-dashed border-muted rounded-[2.5rem]">
              No placement records found. Click "Add Placement" to start.
            </div>
          )}
        </div>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[450px] rounded-[2.5rem] border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black italic tracking-tighter">
              {editingPlacement ? "Modify Record" : "New Placement"}
            </DialogTitle>
            <DialogDescription className="font-medium">
              Maintain accurate records of student industry transitions.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-5 py-6">
            <div className="grid gap-2">
              <Label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-50">Company Name</Label>
              <Input
                className="neu-inset border-none rounded-2xl h-11 px-4"
                value={editingPlacement?.company_name || newPlacement.company_name}
                onChange={(e) => editingPlacement 
                  ? setEditingPlacement({...editingPlacement, company_name: e.target.value})
                  : setNewPlacement({...newPlacement, company_name: e.target.value})
                }
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-50">Student Name</Label>
              <Input
                className="neu-inset border-none rounded-2xl h-11 px-4"
                value={editingPlacement?.student_name || newPlacement.student_name}
                onChange={(e) => editingPlacement 
                  ? setEditingPlacement({...editingPlacement, student_name: e.target.value})
                  : setNewPlacement({...newPlacement, student_name: e.target.value})
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-50">Package (e.g. 12 LPA)</Label>
                <Input
                  className="neu-inset border-none rounded-2xl h-11 px-4"
                  value={editingPlacement?.package_detail || newPlacement.package_detail}
                  onChange={(e) => editingPlacement
                    ? setEditingPlacement({...editingPlacement, package_detail: e.target.value})
                    : setNewPlacement({...newPlacement, package_detail: e.target.value})
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-50">Year</Label>
                <Input
                  className="neu-inset border-none rounded-2xl h-11 px-4"
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
            <Button variant="ghost" className="rounded-xl font-bold" onClick={() => setIsDialogOpen(false)}>Discard</Button>
            <Button className="rounded-xl font-bold px-8 bg-primary hover:bg-primary/90" onClick={handleSave}>
              Save Record
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
