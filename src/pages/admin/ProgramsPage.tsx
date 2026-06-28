import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Users, Loader2, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { getToken } from "@/lib/auth";

interface Program {
  id: number;
  name: string;
  type: string;
  students: number;
  status: 'active' | 'new' | 'archived';
  description?: string;
}

import { API_BASE as GLOBAL_API_BASE } from "@/lib/api";

const API_BASE = `${GLOBAL_API_BASE}/programs`;

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
    status: "active",
    description: ""
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
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`
        },
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
      const res = await fetch(`${API_BASE}/${id}`, { 
        method: "DELETE",
        headers: { "Authorization": `Bearer ${getToken()}` }
      });
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
    <div className="space-y-6 text-primary pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-primary">Programs</h2>
          <p className="text-muted text-sm mt-1">Manage academic programs offered by SEMCOM</p>
        </div>
        <Button onClick={() => {
          setEditingProgram(null);
          setIsDialogOpen(true);
        }} className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" />Add Program
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
        <Input 
          placeholder="Search programs..." 
          className="pl-9 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-primary placeholder:text-muted-foreground" 
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
          {filtered.map((prog) => (
            <div key={prog.id} className="admin-glass-card hover:bg-surface/50 transition-all p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border group">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-border text-primary bg-surface">{prog.type}</Badge>
                  <Badge className={prog.status === "new" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all" : "bg-surface text-primary hover:bg-background"}>{prog.status}</Badge>
                </div>
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors truncate">{prog.name}</h3>
              </div>

              <div className="flex gap-2 shrink-0 justify-end mt-2 md:mt-0">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-xl h-9 border-border text-primary hover:bg-surface hover:text-primary bg-transparent"
                  onClick={() => {
                    setEditingProgram(prog);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-3 w-3 mr-1.5" />Edit
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20"
                  onClick={() => handleDelete(prog.id)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="admin-glass-panel border-none sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-primary">{editingProgram ? "Edit Program" : "Add New Program"}</DialogTitle>
            <DialogDescription className="text-muted">
              Enter the program details below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-primary-light">Program Name</Label>
              <Input
                id="name"
                value={editingProgram?.name || newProgram.name}
                onChange={(e) => editingProgram 
                  ? setEditingProgram({...editingProgram, name: e.target.value})
                  : setNewProgram({...newProgram, name: e.target.value})
                }
                className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type" className="text-primary-light">Program Type</Label>
              <Select 
                value={editingProgram?.type || newProgram.type}
                onValueChange={(val) => editingProgram
                  ? setEditingProgram({...editingProgram, type: val})
                  : setNewProgram({...newProgram, type: val})
                }
              >
                <SelectTrigger className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-border shadow-sm text-primary">
                  <SelectItem value="UG" className="focus:bg-surface focus:text-primary">Undergraduate (UG)</SelectItem>
                  <SelectItem value="PG" className="focus:bg-surface focus:text-primary">Postgraduate (PG)</SelectItem>
                  <SelectItem value="Doctoral" className="focus:bg-surface focus:text-primary">Doctoral</SelectItem>
                  <SelectItem value="Certificate" className="focus:bg-surface focus:text-primary">Certificate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="status" className="text-primary-light">Status</Label>
              <Select 
                value={editingProgram?.status || newProgram.status}
                onValueChange={(val: any) => editingProgram
                  ? setEditingProgram({...editingProgram, status: val})
                  : setNewProgram({...newProgram, status: val})
                }
              >
                <SelectTrigger className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-border shadow-sm text-primary">
                  <SelectItem value="active" className="focus:bg-surface focus:text-primary">Active</SelectItem>
                  <SelectItem value="new" className="focus:bg-surface focus:text-primary">New</SelectItem>
                  <SelectItem value="archived" className="focus:bg-surface focus:text-primary">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-primary-light">Program Details / Description</Label>
              <textarea
                id="description"
                rows={4}
                className="flex w-full rounded-xl border border-border shadow-sm bg-surface px-3 py-2 text-sm text-primary placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
                value={editingProgram?.description || newProgram.description}
                onChange={(e) => editingProgram
                  ? setEditingProgram({...editingProgram, description: e.target.value})
                  : setNewProgram({...newProgram, description: e.target.value})
                }
                placeholder="Enter detailed program information, curriculum summary, etc."
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="text-primary hover:bg-surface hover:text-primary border-border bg-transparent">Cancel</Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 rounded-xl px-8 shadow-lg">Save Program</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
