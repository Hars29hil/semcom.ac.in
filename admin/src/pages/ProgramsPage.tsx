import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Users, Loader2, X } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Program {
  id: number;
  name: string;
  type: string;
  students: number;
  status: 'active' | 'new' | 'archived';
}

const API_BASE = "/api/programs";

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  // Dialog states
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [newProgram, setNewProgram] = useState<Partial<Program>>({
    name: "",
    type: "UG",
    students: 0,
    status: "active"
  });

  const fetchPrograms = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setPrograms(data);
    } catch (error) {
      toast.error("Failed to fetch programs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleSave = async () => {
    const programData = editingProgram || newProgram;
    
    if (!programData.name) {
      toast.error("Program name is required");
      return;
    }

    try {
      const method = editingProgram ? "PUT" : "POST";
      const url = editingProgram ? `${API_BASE}/${editingProgram.id}` : API_BASE;
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(programData),
      });

      if (res.ok) {
        toast.success(`Program ${editingProgram ? "updated" : "added"} successfully`);
        setIsDialogOpen(false);
        setEditingProgram(null);
        setNewProgram({ name: "", type: "UG", students: 0, status: "active" });
        fetchPrograms();
      }
    } catch (error) {
      toast.error("Failed to save program");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this program?")) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Program deleted successfully");
        fetchPrograms();
      }
    } catch (error) {
      toast.error("Failed to delete program");
    }
  };

  const filtered = programs.filter((p) => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Programs</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage academic programs offered by SEMCOM</p>
        </div>
        <Button onClick={() => {
          setEditingProgram(null);
          setIsDialogOpen(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />Add Program
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search programs..." 
          className="pl-9 neu-inset rounded-xl border-none" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((prog) => (
            <div key={prog.id} className="clay clay-hover p-5 group">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="outline">{prog.type}</Badge>
                <Badge variant={prog.status === "new" ? "default" : "secondary"}>{prog.status}</Badge>
              </div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{prog.name}</h3>
              <div className="flex items-center gap-1.5 mt-2.5 text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">{prog.students} students enrolled</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    setEditingProgram(prog);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-3 w-3 mr-1" />Edit
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9"
                  onClick={() => handleDelete(prog.id)}
                >
                  <Trash2 className="h-3.5 w-3.5 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingProgram ? "Edit Program" : "Add New Program"}</DialogTitle>
            <DialogDescription>
              Enter the program details below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Program Name</Label>
              <Input
                id="name"
                value={editingProgram?.name || newProgram.name}
                onChange={(e) => editingProgram 
                  ? setEditingProgram({...editingProgram, name: e.target.value})
                  : setNewProgram({...newProgram, name: e.target.value})
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Program Type</Label>
              <Select 
                value={editingProgram?.type || newProgram.type}
                onValueChange={(val) => editingProgram
                  ? setEditingProgram({...editingProgram, type: val})
                  : setNewProgram({...newProgram, type: val})
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UG">Undergraduate (UG)</SelectItem>
                  <SelectItem value="PG">Postgraduate (PG)</SelectItem>
                  <SelectItem value="Doctoral">Doctoral</SelectItem>
                  <SelectItem value="Certificate">Certificate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="students">Enrolled Students</Label>
              <Input
                id="students"
                type="number"
                value={editingProgram?.students || newProgram.students}
                onChange={(e) => editingProgram
                  ? setEditingProgram({...editingProgram, students: parseInt(e.target.value) || 0})
                  : setNewProgram({...newProgram, students: parseInt(e.target.value) || 0})
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select 
                value={editingProgram?.status || newProgram.status}
                onValueChange={(val: any) => editingProgram
                  ? setEditingProgram({...editingProgram, status: val})
                  : setNewProgram({...newProgram, status: val})
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save Program</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
