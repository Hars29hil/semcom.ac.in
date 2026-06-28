import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  UserCircle, 
  Briefcase, 
  GraduationCap, 
  Save, 
  Loader2, 
  Plus, 
  X,
  History,
  Star,
  Award,
  Eye,
  Book,
  FileText,
  Lightbulb,
  Mic2,
  Trophy,
  GraduationCap as GradIcon,
  Layers,
  Trash2,
  School,
  Presentation
} from "lucide-react";
import { getAuthUser, logout, getToken } from "@/lib/auth";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE } from "@/lib/api";

interface Experience {
  id: number;
  company: string;
  role: string;
  years: string;
  description: string;
}

interface Achievement {
  id: number;
  achievement_type: string;
  title: string;
  details: string;
  achievement_year: string;
}

export default function CounsellorPage() {
  const user = getAuthUser();
  const [saving, setSaving] = useState(false);
  const [bio, setBio] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState(user?.name || "");
  const [phone_number, setPhoneNumber] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isAddingExp, setIsAddingExp] = useState(false);
  const [newExp, setNewExp] = useState({ company: "", role: "", years: "", description: "" });
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const achievementTypes = [
    { id: "PHD", icon: <School size={16}/> },
    { id: "RESEARCH", icon: <FileText size={16}/> },
    { id: "SEMINARS", icon: <Mic2 size={16}/> },
    { id: "AWARDS", icon: <Trophy size={16}/> },
    { id: "EXPERT", icon: <Mic2 size={16}/> },
    { id: "BOOKS", icon: <Book size={16}/> },
    { id: "PATENTS", icon: <Lightbulb size={16}/> },
    { id: "LICENSE/CERTIFICATION", icon: <Award size={16}/> }
  ];

  const fetchAllData = async () => {
    if (!user?.username) return;
    try {
      const expRes = await fetch(`${API_BASE}/faculty/${user.username}/experience`);
      const expData = await expRes.json();
      setExperiences(expData || []);
      
      const profRes = await fetch(`${API_BASE}/faculty?t=${Date.now()}`);
      const profData = await profRes.json();
      if (profData.success) {
         const me = profData.data.find((f: any) => 
           f.email === user.username || 
           f.email === `mr..${user.username}` ||
           f.email === user.username.replace('mr..', '')
         );
         if (me) {
           setName(me.name);
           setPhoneNumber(me.phone_number || "");
           setQualifications(me.qualification || "");
           setArea(me.area || "");
           setBio(me.bio || "");
           setImageUrl(me.image_url || "");
         }
      }

      const achRes = await fetch(`${API_BASE}/faculty/${user.username}/achievements`);
      const achData = await achRes.json();
      setAchievements(achData || []);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [user?.username]);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error("Only image files are allowed");
        e.target.value = '';
        return;
      }
      if (file.size > 100 * 1024) {
        toast.error("do not allow the images more than 100 kb because the app pool crash");
        e.target.value = '';
        return;
      }
      
      const toastId = toast.loading("Uploading photo...");
      try {
        const formData = new FormData();
        formData.append('file', file);
        
        const uploadRes = await fetch(`${API_BASE}/upload`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${getToken()}` },
          body: formData
        });
        
        const uploadData = await uploadRes.json();
        
        if (uploadData.success && uploadData.imageUrl) {
          const newImageUrl = uploadData.imageUrl;
          setImageUrl(newImageUrl);
          
          // Auto-save the image URL
          if (user?.username) {
            const res = await fetch(`${API_BASE}/faculty/profile/${user.username}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
              body: JSON.stringify({ 
                name, 
                phone_number,
                qualification: qualifications, 
                area, 
                bio, 
                image_url: newImageUrl 
              })
            });
            if (res.ok) {
              toast.success("Profile photo saved automatically", { id: toastId });
            } else {
              toast.error("Failed to update profile with new photo", { id: toastId });
            }
          } else {
            toast.dismiss(toastId);
          }
        } else {
          toast.error("Upload failed", { id: toastId });
        }
      } catch (e) {
        toast.error("Failed to upload photo", { id: toastId });
      }
    }
  };

  const [isAddingAch, setIsAddingAch] = useState<string | null>(null);
  const [newAch, setNewAch] = useState({ 
    title: "", details: "", achievement_year: new Date().getFullYear().toString(),
    associated_with: "", issuer: "", issue_month: "", issue_year: "", 
    application_no: "", inventors: "", status: "", issue_date: "", 
    url: "", publisher: "", publication_date: "", authors: "", issuing_org: "", isbn: ""
  });

  const handleSaveProfile = async () => {
    if (!user?.username) return;
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/faculty/profile/${user.username}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
        body: JSON.stringify({ name, phone_number, qualification: qualifications, area, bio, image_url })
      });
      if (res.ok) {
        toast.success("Profile saved successfully");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleAddAchievement = async (type: string) => {
    if (!newAch.title) return toast.error("Title is required");
    try {
      const payloadDetails = JSON.stringify({
         description: newAch.details,
         associated_with: newAch.associated_with,
         issuer: newAch.issuer,
         issue_month: newAch.issue_month,
         issue_year: newAch.issue_year,
         application_no: newAch.application_no,
         inventors: newAch.inventors,
         status: newAch.status,
         issue_date: newAch.issue_date,
         url: newAch.url,
         publisher: newAch.publisher,
         publication_date: newAch.publication_date,
         authors: newAch.authors,
         issuing_org: newAch.issuing_org,
         isbn: newAch.isbn
      });
      const res = await fetch(`${API_BASE}/faculty/${user.username}/achievements`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
        body: JSON.stringify({ 
          title: newAch.title, 
          details: payloadDetails, 
          achievement_year: newAch.achievement_year, 
          achievement_type: type 
        })
      });
      if (res.ok) {
        toast.success("Record added");
        setIsAddingAch(null);
        setNewAch({ 
          title: "", details: "", achievement_year: new Date().getFullYear().toString(),
          associated_with: "", issuer: "", issue_month: "", issue_year: "", 
          application_no: "", inventors: "", status: "", issue_date: "", 
          url: "", publisher: "", publication_date: "", authors: "", issuing_org: "", isbn: ""
        });
        fetchAllData();
      }
    } catch (e) { toast.error("Error adding record"); }
  };

  const handleAddExperience = async () => {
    if (!newExp.company || !newExp.role) return toast.error("Company and Role are required");
    try {
      const res = await fetch(`${API_BASE}/faculty/${user.username}/experience`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
        body: JSON.stringify(newExp)
      });
      if (res.ok) {
        toast.success("Experience added");
        setIsAddingExp(false);
        setNewExp({ company: "", role: "", years: "", description: "" });
        fetchAllData();
      }
    } catch (e) { toast.error("Error adding experience"); }
  };

  const removeExperience = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`${API_BASE}/faculty/experience/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${getToken()}` } });
      if (res.ok) { fetchAllData(); toast.success("Entry removed"); }
    } catch (e) { toast.error("Error deleting entry"); }
  };

  const removeAchievement = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`${API_BASE}/faculty/achievements/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${getToken()}` } });
      if (res.ok) { fetchAllData(); toast.success("Record removed"); }
    } catch (e) { toast.error("Error deleting record"); }
  };

  const renderAchForm = (typeId: string) => {
    if (typeId === 'AWARDS') {
      return (
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Title</Label>
                <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" placeholder="Award Title..."/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Associated With</Label>
                <select value={newAch.associated_with} onChange={(e: any) => setNewAch({...newAch, associated_with: e.target.value})} className="w-full flex h-11 rounded-xl border border-border shadow-sm bg-surface px-3 py-2 text-sm text-primary">
                  <option value="">Select...</option>
                  <option value="Self">Self</option>
                  <option value="Department">Department</option>
                  <option value="Institution">Institution</option>
                </select>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Issuer</Label>
                <Input value={newAch.issuer} onChange={(e) => setNewAch({...newAch, issuer: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary" placeholder="Issuing Organization..."/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Issue Date</Label>
                <Input type="month" value={newAch.issue_month} onChange={(e) => setNewAch({...newAch, issue_month: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary [color-scheme:light]"/>
             </div>
          </div>
          <div className="space-y-2">
             <Label className="text-[10px] font-black uppercase text-muted">Description</Label>
             <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl border border-border shadow-sm bg-surface text-primary custom-scrollbar" placeholder="Description..."/>
          </div>
        </div>
      );
    }
    if (typeId === 'PATENTS') {
      return (
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Patent Title</Label>
                <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary" placeholder="Patent Title..."/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Application No</Label>
                <Input value={newAch.application_no} onChange={(e) => setNewAch({...newAch, application_no: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Inventor</Label>
                <Input value={newAch.inventors} onChange={(e) => setNewAch({...newAch, inventors: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Status</Label>
                <select value={newAch.status} onChange={(e: any) => setNewAch({...newAch, status: e.target.value})} className="w-full flex h-11 rounded-xl border border-border shadow-sm bg-surface px-3 py-2 text-sm text-primary">
                  <option value="">Select...</option>
                  <option value="Issued">Issued</option>
                  <option value="Pending">Pending</option>
                </select>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Issue Date</Label>
                <Input type="date" value={newAch.issue_date} onChange={(e) => setNewAch({...newAch, issue_date: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary [color-scheme:light]"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Patent URL</Label>
                <Input value={newAch.url} onChange={(e) => setNewAch({...newAch, url: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
          </div>
          <div className="space-y-2">
             <Label className="text-[10px] font-black uppercase text-muted">Description</Label>
             <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl border border-border shadow-sm bg-surface text-primary custom-scrollbar" placeholder="Description..."/>
          </div>
        </div>
      );
    }
    if (typeId === 'RESEARCH') {
      return (
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Title</Label>
                <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary" placeholder="Title..."/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Publisher / Publication</Label>
                <Input value={newAch.publisher} onChange={(e) => setNewAch({...newAch, publisher: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Publication Date</Label>
                <Input type="date" value={newAch.publication_date} onChange={(e) => setNewAch({...newAch, publication_date: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary [color-scheme:light]"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Author(s)</Label>
                <Input value={newAch.authors} onChange={(e) => setNewAch({...newAch, authors: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
             <div className="space-y-2 md:col-span-2">
                <Label className="text-[10px] font-black uppercase text-muted">Publication URL</Label>
                <Input value={newAch.url} onChange={(e) => setNewAch({...newAch, url: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
          </div>
          <div className="space-y-2">
             <Label className="text-[10px] font-black uppercase text-muted">Description</Label>
             <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl border border-border shadow-sm bg-surface text-primary custom-scrollbar" placeholder="Description..."/>
          </div>
        </div>
      );
    }
    if (typeId === 'BOOKS') {
      return (
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Book Title</Label>
                <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary" placeholder="Book Title..."/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Publisher Name</Label>
                <Input value={newAch.publisher} onChange={(e) => setNewAch({...newAch, publisher: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Month and Year</Label>
                <Input type="month" value={newAch.publication_date} onChange={(e) => setNewAch({...newAch, publication_date: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary [color-scheme:light]"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">ISBN Number</Label>
                <Input value={newAch.isbn || ''} onChange={(e) => setNewAch({...newAch, isbn: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
             <div className="space-y-2 md:col-span-2">
                <Label className="text-[10px] font-black uppercase text-muted">URL</Label>
                <Input value={newAch.url} onChange={(e) => setNewAch({...newAch, url: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
          </div>
          <div className="space-y-2">
             <Label className="text-[10px] font-black uppercase text-muted">Description (Attachment Info)</Label>
             <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl border border-border shadow-sm bg-surface text-primary custom-scrollbar" placeholder="Description or link to attachment..."/>
          </div>
        </div>
      );
    }
    if (typeId === 'LICENSE/CERTIFICATION' || typeId === 'SEMINARS' || typeId === 'EXPERT') {
      return (
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Name</Label>
                <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary" placeholder="Name..."/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Issuing Organization</Label>
                <Input value={newAch.issuing_org} onChange={(e) => setNewAch({...newAch, issuing_org: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary"/>
             </div>
             <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted">Issue Date</Label>
                <Input type="month" value={newAch.issue_month} onChange={(e) => setNewAch({...newAch, issue_month: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface text-primary [color-scheme:light]"/>
             </div>
          </div>
          <div className="space-y-2">
             <Label className="text-[10px] font-black uppercase text-muted">Description</Label>
             <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl border border-border shadow-sm bg-surface text-primary custom-scrollbar" placeholder="Description..."/>
          </div>
        </div>
      );
    }
    // Default fallback
    return (
      <div className="grid gap-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3 space-y-2">
               <Label className="text-[10px] font-black uppercase text-muted">Entry Title</Label>
               <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 font-bold border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" placeholder={`Full title of ${typeId}...`}/>
            </div>
            <div className="space-y-2">
               <Label className="text-[10px] font-black uppercase text-muted">Year</Label>
               <Input value={newAch.achievement_year} onChange={(e) => setNewAch({...newAch, achievement_year: e.target.value})} className="rounded-xl h-11 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" placeholder="e.g. 2025"/>
            </div>
         </div>
         <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase text-muted">Details (Publisher, Supervisor name, DOI, etc.)</Label>
            <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary custom-scrollbar" placeholder="Provide context or links..."/>
         </div>
      </div>
    );
  };

  const renderAchDetails = (ach: any) => {
    let detailsStr = ach.details;
    let parsed: any = null;
    try {
      parsed = JSON.parse(detailsStr);
    } catch(e) {}
    
    if (parsed) {
      const parts = [];
      if (parsed.issuer || parsed.issuing_org) parts.push(`By: ${parsed.issuer || parsed.issuing_org}`);
      if (parsed.issue_month || parsed.issue_date || parsed.publication_date) parts.push(`Date: ${parsed.issue_month || parsed.issue_date || parsed.publication_date}`);
      if (parsed.publisher) parts.push(`Publisher: ${parsed.publisher}`);
      if (parsed.application_no) parts.push(`App No: ${parsed.application_no}`);
      if (parsed.status) parts.push(`Status: ${parsed.status}`);
      if (parsed.isbn) parts.push(`ISBN: ${parsed.isbn}`);
      if (parsed.description) parts.push(parsed.description);
      return parts.join(' • ');
    }
    return detailsStr;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20 text-primary">
      {/* Premium Header */}
      <div className="relative p-10 admin-glass-panel flex flex-col md:flex-row items-center gap-8 group">
        <div className="flex flex-col items-center text-center">
          <p className="text-red-500 text-[10px] font-semibold mb-2">*Only image with 100 or lessthan 100 kb allowed..</p>
          <label className="relative w-32 h-32 rounded-2xl bg-surface flex items-center justify-center shadow-2xl group/photo cursor-pointer overflow-hidden border border-border">
          {image_url ? (
            <img src={image_url} alt="Profile" className="w-full h-full object-cover"/>
          ) : (
            <UserCircle className="w-16 h-16 text-muted-foreground" />
          )}
          <div className="absolute inset-0 bg-black/60 text-primary opacity-0 group-hover/photo:opacity-100 flex flex-col items-center justify-center transition-all">
             <Plus size={20} />
             <span className="text-[8px] font-black uppercase mt-1">Upload</span>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload}/>
        </label>
        </div>
        <div className="flex-1 text-center md:text-left">
           <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all border-none rounded-lg font-bold uppercase text-[9px] tracking-widest mb-3 px-3 py-1 shadow-sm">Faculty Hub</Badge>
           <h1 className="text-4xl font-black italic tracking-tighter text-primary">{name || "Your Profile"}</h1>
           <p className="text-muted font-medium flex items-center justify-center md:justify-start gap-2 mt-1 px-1">
             {user?.username} • Faculty Member
           </p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-border text-primary hover:bg-surface hover:text-primary bg-surface" onClick={() => setShowPreview(true)}>
              <Eye className="w-4 h-4 mr-2" /> Live Preview
           </Button>
           <Button className="rounded-2xl h-12 px-8 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 shadow-xl" onClick={handleSaveProfile} disabled={saving}>
             {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
             Sync Profile
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info: Basic Profile */}
        <div className="lg:col-span-4 space-y-8" id="synopsis">
           <Card className="rounded-2xl admin-glass-panel border-none shadow-xl overflow-hidden">
             <CardHeader className="border-b border-border shadow-sm">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                   <GradIcon className="w-4 h-4" /> Personal Synopsis
                </CardTitle>
             </CardHeader>
             <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted">Full Name</Label>
                   <Input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 transition-all font-bold"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted">Mobile Number</Label>
                   <Input 
                     value={phone_number} 
                     onChange={(e) => {
                       const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                       setPhoneNumber(val);
                     }}
                     maxLength={10}
                     placeholder="10 digit mobile number"
                     className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 transition-all"
                   />
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted">Qualifications</Label>
                   <Input value={qualifications} onChange={(e) => setQualifications(e.target.value)} className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 transition-all"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted">Specialization</Label>
                   <Input value={area} onChange={(e) => setArea(e.target.value)} className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary h-11 transition-all"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted">Professional Bio</Label>
                   <Textarea value={bio} onChange={(e) => setBio(e.target.value)} className="rounded-2xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary min-h-[120px] p-4 text-sm font-medium leading-relaxed custom-scrollbar"/>
                </div>
             </CardContent>
           </Card>

           <Card className="rounded-2xl border border-border shadow-xl bg-gradient-to-br from-accent/20 to-accent/5 text-primary backdrop-blur-md">
             <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                   <p className="text-[10px] font-black uppercase tracking-widest text-primary-light">Achievement Count</p>
                   <Trophy className="w-5 h-5 text-accent" />
                </div>
                <div className="text-5xl font-black italic text-primary">{achievements.length}</div>
                <p className="text-xs font-medium text-primary/70">Records successfully synchronized with the public institutional database.</p>
             </CardContent>
           </Card>
        </div>

        {/* Right Info: Achievement Tabs */}
        <div className="lg:col-span-8 space-y-8" id="achievements">
           <Tabs defaultValue="Research Papers Published" className="w-full">
              <div className="flex items-center justify-between mb-6 admin-glass-panel p-2 rounded-2xl shadow-sm overflow-x-auto custom-scrollbar">
                 <TabsList className="bg-transparent gap-1">
                    {achievementTypes.map(t => (
                      <TabsTrigger key={t.id} value={t.id} className="rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest text-muted data-[state=active]:bg-accent data-[state=active]:text-primary hover:text-primary transition-all whitespace-nowrap">
                         {t.id.split(' ')[0]}
                      </TabsTrigger>
                    ))}
                 </TabsList>
              </div>

              {achievementTypes.map(type => (
                <TabsContent key={type.id} value={type.id} className="mt-0 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                   <div className="flex justify-between items-center px-4">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary">{type.icon}</div>
                         <h3 className="text-xl font-black text-primary italic">{type.id}</h3>
                      </div>
                      <Button className="rounded-xl h-9 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all font-bold hover:bg-accent/90 shadow-lg border-none" onClick={() => setIsAddingAch(type.id)}>
                         <Plus className="w-4 h-4 mr-1.5" /> Add New
                      </Button>
                   </div>

                   <AnimatePresence>
                     {isAddingAch === type.id && (
                       <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="p-8 admin-glass-panel border-2 border-accent/20 space-y-6 relative">
                          <button onClick={() => setIsAddingAch(null)} className="absolute top-6 right-6 text-muted hover:text-primary"><X/></button>
                          {renderAchForm(type.id)}
                          <Button className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all font-black uppercase text-[10px] tracking-widest shadow-xl" onClick={() => handleAddAchievement(type.id)}>
                             Commit Entry
                          </Button>
                       </motion.div>
                     )}
                   </AnimatePresence>

                   <div className="grid gap-4">
                      {achievements.filter(a => a.achievement_type === type.id).map(ach => (
                        <div key={ach.id} className="admin-glass-card hover:bg-surface/50 transition-all p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border group">
                          <div className="flex-1 min-w-0">
                            <div className="text-[9px] font-black text-accent uppercase mb-1">{ach.achievement_year}</div>
                            <h4 className="font-bold text-primary text-base leading-tight group-hover:text-accent transition-colors truncate">{ach.title}</h4>
                            <p className="text-xs text-muted mt-1 font-medium truncate">{renderAchDetails(ach)}</p>
                          </div>
                          <div className="flex shrink-0 justify-end mt-2 md:mt-0">
                            <Button variant="ghost" size="icon" onClick={() => removeAchievement(ach.id)} className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20"><Trash2 className="h-4 w-4"/></Button>
                          </div>
                        </div>
                      ))}
                      {achievements.filter(a => a.achievement_type === type.id).length === 0 && !isAddingAch && (
                        <div className="py-20 text-center border-2 border-dashed border-border shadow-sm rounded-3xl italic text-muted-foreground font-medium bg-surface">
                           No entries recorded for this category.
                        </div>
                      )}
                   </div>
                </TabsContent>
              ))}
           </Tabs>
        </div>
      </div>

      {/* Professional Trajectory Section */}
      <div className="space-y-8 pt-10 border-t border-border shadow-sm" id="trajectory">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary">
                  <Briefcase className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-primary italic">Career Path</h3>
                  <p className="text-xs text-muted font-medium">Manage your professional journey and industry experience.</p>
               </div>
            </div>
            <Button className="rounded-2xl h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 shadow-lg" onClick={() => setIsAddingExp(true)}>
               <Plus className="w-4 h-4 mr-2" /> Record Experience
            </Button>
         </div>

         <AnimatePresence>
            {isAddingExp && (
              <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.95}} className="p-10 admin-glass-panel border-2 border-accent/20 shadow-2xl space-y-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8">
                    <button onClick={() => setIsAddingExp(false)} className="text-muted hover:text-primary"><X/></button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest text-muted">Company / Institution</Label>
                       <Input value={newExp.company} onChange={(e) => setNewExp({...newExp, company: e.target.value})} className="rounded-xl h-12 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary px-5 font-bold" placeholder="e.g. SEMCOM College"/>
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest text-muted">Designation / Role</Label>
                       <Input value={newExp.role} onChange={(e) => setNewExp({...newExp, role: e.target.value})} className="rounded-xl h-12 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary px-5 font-bold" placeholder="e.g. Senior Lecturer"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted">Start Date</Label>
                          <Input type="month" value={newExp.years.split(' - ')[0] || ''} onChange={(e) => {
                             const end = newExp.years.split(' - ')[1] || 'Present';
                             setNewExp({...newExp, years: `${e.target.value} - ${end}`});
                          }} className="rounded-xl h-12 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary px-5 [color-scheme:light]" />
                       </div>
                       <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted">End Date</Label>
                          <Input type="month" value={newExp.years.split(' - ')[1] === 'Present' ? '' : (newExp.years.split(' - ')[1] || '')} onChange={(e) => {
                             const start = newExp.years.split(' - ')[0] || '';
                             setNewExp({...newExp, years: `${start} - ${e.target.value || 'Present'}`});
                          }} className="rounded-xl h-12 border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary px-5 [color-scheme:light]" />
                       </div>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted">Role Description</Label>
                    <Textarea value={newExp.description} onChange={(e) => setNewExp({...newExp, description: e.target.value})} className="rounded-2xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary p-6 min-h-[150px] custom-scrollbar" placeholder="Briefly describe your responsibilities and achievements in this role..."/>
                 </div>
                 <Button className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all font-black uppercase text-xs tracking-[0.2em] shadow-xl" onClick={handleAddExperience}>
                    Publish to Trajectory
                 </Button>
              </motion.div>
            )}
         </AnimatePresence>

         <div className="grid gap-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="admin-glass-card hover:bg-surface/50 transition-all p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border group">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0 mt-1 shadow-sm">
                    <History className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="outline" className="rounded-lg border-accent/20 text-accent font-black text-[9px] mb-2">{exp.years}</Badge>
                    <h4 className="text-sm font-black text-primary tracking-tight group-hover:text-accent transition-colors truncate">{exp.role}</h4>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary/70 truncate">{exp.company}</p>
                    <p className="text-xs mt-1 text-muted font-medium line-clamp-2">{exp.description}</p>
                  </div>
                </div>
                <div className="flex shrink-0 justify-end mt-2 md:mt-0 items-start">
                  <Button variant="ghost" size="icon" onClick={() => removeExperience(exp.id)} className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20"><Trash2 className="h-4 w-4"/></Button>
                </div>
              </div>
            ))}
            {experiences.length === 0 && !isAddingExp && (
              <div className="py-20 text-center bg-surface rounded-3xl italic text-muted-foreground border-2 border-dashed border-border shadow-sm">
                 No experience records have been added to your professional trajectory yet.
              </div>
            )}
         </div>
      </div>

      {/* Live Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-12">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowPreview(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-5xl h-full max-h-[85vh] admin-glass-panel rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-border">
               <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
                  <div className="w-full md:w-[40%] bg-surface p-10 flex flex-col items-center border-r border-border shadow-sm">
                     <div className="w-40 h-48 rounded-2xl bg-surface flex items-center justify-center shadow-xl border border-border mb-6 overflow-hidden">
                        {image_url ? <img src={image_url} alt="Profile" className="w-full h-full object-cover"/> : <UserCircle className="w-20 h-20 text-primary/20" />}
                     </div>
                     <h2 className="text-2xl font-black text-primary uppercase italic text-center leading-tight">{name}</h2>
                     <p className="text-accent font-black text-[10px] uppercase tracking-widest mt-2 px-3 py-1 bg-accent/20 rounded-lg">Faculty Member</p>
                     
                     <div className="w-full mt-10 space-y-4">
                        <div className="p-5 bg-surface rounded-2xl shadow-sm border border-border shadow-sm">
                           <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1 shadow-sm">Degrees</p>
                           <p className="text-[11px] font-bold text-primary leading-tight">{qualifications || "Not specified"}</p>
                        </div>
                        <div className="p-5 bg-surface rounded-2xl shadow-sm border border-border shadow-sm">
                           <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1 shadow-sm">Specialization</p>
                           <p className="text-[11px] font-bold text-primary leading-tight">{area || "Not specified"}</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex-1 p-10 md:p-14 overflow-y-auto relative custom-scrollbar">
                     <button onClick={() => setShowPreview(false)} className="absolute top-8 right-8 text-muted-foreground hover:text-primary"><X/></button>
                     <div className="mb-12">
                        <h3 className="text-4xl font-black text-primary italic underline decoration-accent/40 underline-offset-8">Academic <span className="text-accent">Trajectory</span>.</h3>
                        <p className="text-muted-foreground font-black text-[10px] mt-4 uppercase tracking-[0.2em]">Institutional Contributions & Research Portfolio</p>
                     </div>
                     <div className="space-y-12">
                        {achievementTypes.map(type => {
                          const items = achievements.filter(a => a.achievement_type === type.id);
                          if (items.length === 0) return null;
                          return (
                            <div key={type.id} className="space-y-6">
                               <h4 className="text-[11px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-3">
                                  <span className="text-primary">{type.icon}</span> {type.id}
                               </h4>
                               <div className="grid gap-4">
                                  {items.map(i => (
                                    <div key={i.id} className="p-5 bg-surface rounded-3xl border border-border shadow-sm">
                                       <div className="text-[9px] font-black text-accent uppercase mb-1">{i.achievement_year}</div>
                                       <div className="text-sm font-bold text-primary mb-1">{i.title}</div>
                                       <div className="text-xs text-muted font-medium">{i.details}</div>
                                    </div>
                                  ))}
                               </div>
                            </div>
                          );
                        })}
                     </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
