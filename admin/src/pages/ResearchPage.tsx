import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, FlaskConical, Loader2 } from "lucide-react";
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

interface Project {
  id: number;
  title: string;
  faculty: string;
  type: string;
  status: 'ongoing' | 'completed' | 'proposed';
}

const API_BASE = "/api/research";

export default function ResearchPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  // Dialog states
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: "",
    faculty: "",
    type: "Research",
    status: "ongoing"
  });

  const fetchProjects = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSave = async () => {
    const projectData = editingProject || newProject;
    
    if (!projectData.title || !projectData.faculty) {
      toast.error("Project title and faculty name are required");
      return;
    }

    try {
      const method = editingProject ? "PUT" : "POST";
      const url = editingProject ? `${API_BASE}/${editingProject.id}` : API_BASE;
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      if (res.ok) {
        toast.success(`Project ${editingProject ? "updated" : "added"} successfully`);
        setIsDialogOpen(false);
        setEditingProject(null);
        setNewProject({ title: "", faculty: "", type: "Research", status: "ongoing" });
        fetchProjects();
      }
    } catch (error) {
      toast.error("Failed to save project");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Project deleted successfully");
        fetchProjects();
      }
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  const filtered = projects.filter((p) => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.faculty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Research & Consultancy</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage research projects and consultancy work</p>
        </div>
        <Button onClick={() => {
          setEditingProject(null);
          setIsDialogOpen(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />Add Project
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search projects..." 
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
        <div className="skeu-surface rounded-3xl border border-white/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className="divide-y divide-border/50">
            {filtered.length === 0 ? (
              <div className="p-20 text-center text-muted-foreground italic">No projects found matching your search.</div>
            ) : (
              filtered.map((proj) => (
                <div key={proj.id} className="flex items-center justify-between p-6 hover:bg-white/40 transition-all group backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <FlaskConical className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{proj.title}</p>
                      <p className="text-[11px] font-medium text-muted-foreground mt-0.5 tracking-wide">{proj.faculty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="rounded-lg bg-white/50">{proj.type}</Badge>
                    <Badge 
                      variant={proj.status === "ongoing" ? "default" : proj.status === "completed" ? "secondary" : "outline"}
                      className="rounded-lg capitalize shadow-sm"
                    >
                      {proj.status}
                    </Badge>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-9 w-9 rounded-xl hover:bg-primary/10"
                        onClick={() => {
                          setEditingProject(proj);
                          setIsDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-9 w-9 rounded-xl hover:bg-destructive/10"
                        onClick={() => handleDelete(proj.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black italic tracking-tighter">
              {editingProject ? "Refine Project" : "Initiate Project"}
            </DialogTitle>
            <DialogDescription className="font-medium">
              Specify the details of the research or consultancy initiative.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-6">
            <div className="grid gap-2">
              <Label htmlFor="title" className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted-foreground">Project Title</Label>
              <Input
                id="title"
                className="neu-inset border-none rounded-2xl h-12 px-5"
                value={editingProject?.title || newProject.title}
                onChange={(e) => editingProject 
                  ? setEditingProject({...editingProject, title: e.target.value})
                  : setNewProject({...newProject, title: e.target.value})
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="faculty" className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted-foreground">Faculty Lead</Label>
              <Input
                id="faculty"
                className="neu-inset border-none rounded-2xl h-12 px-5"
                value={editingProject?.faculty || newProject.faculty}
                onChange={(e) => editingProject 
                  ? setEditingProject({...editingProject, faculty: e.target.value})
                  : setNewProject({...newProject, faculty: e.target.value})
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="type" className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted-foreground">Type</Label>
                <Select 
                  value={editingProject?.type || newProject.type}
                  onValueChange={(val) => editingProject
                    ? setEditingProject({...editingProject, type: val})
                    : setNewProject({...newProject, type: val})
                  }
                >
                  <SelectTrigger className="neu-inset border-none rounded-2xl h-12 px-5">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Research">Research</SelectItem>
                    <SelectItem value="Consultancy">Consultancy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status" className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted-foreground">Current Status</Label>
                <Select 
                  value={editingProject?.status || newProject.status}
                  onValueChange={(val: any) => editingProject
                    ? setEditingProject({...editingProject, status: val})
                    : setNewProject({...newProject, status: val})
                  }
                >
                  <SelectTrigger className="neu-inset border-none rounded-2xl h-12 px-5">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="proposed">Proposed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="ghost" className="rounded-2xl font-bold" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button className="rounded-2xl font-bold px-8 bg-primary hover:bg-primary/90" onClick={handleSave}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
