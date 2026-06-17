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
    { id: "PhD Supervisors", icon: <School size={16}/> },
    { id: "Research Papers Published", icon: <FileText size={16}/> },
    { id: "Research Papers Presented", icon: <Presentation size={16}/> },
    { id: "Seminars / FDP", icon: <Mic2 size={16}/> },
    { id: "Awards", icon: <Trophy size={16}/> },
    { id: "Expert Lectures", icon: <Mic2 size={16}/> },
    { id: "Books", icon: <Book size={16}/> },
    { id: "Book Chapters", icon: <Book size={16}/> },
    { id: "Patents", icon: <Lightbulb size={16}/> }
  ];

  const fetchAllData = async () => {
    if (!user?.username) return;
    try {
      const expRes = await fetch(`/api/faculty/${user.username}/experience`);
      const expData = await expRes.json();
      setExperiences(expData || []);
      
      const profRes = await fetch(`/api/faculty?t=${Date.now()}`);
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

      const achRes = await fetch(`/api/faculty/${user.username}/achievements`);
      const achData = await achRes.json();
      setAchievements(achData || []);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [user?.username]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return toast.error("File is too large (max 2MB)");
      const reader = new FileReader();
      reader.onloadend = async () => {
        const newImageUrl = reader.result as string;
        setImageUrl(newImageUrl);
        
        // Auto-save the image
        if (user?.username) {
          try {
            const res = await fetch(`/api/faculty/profile/${user.username}`, {
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
              toast.success("Profile photo saved automatically");
            }
          } catch (e) {
            toast.error("Failed to auto-save photo");
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const [isAddingAch, setIsAddingAch] = useState<string | null>(null);
  const [newAch, setNewAch] = useState({ title: "", details: "", achievement_year: new Date().getFullYear().toString() });

  const handleSaveProfile = async () => {
    if (!user?.username) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/faculty/profile/${user.username}`, {
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
      const res = await fetch(`/api/faculty/${user.username}/achievements`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
        body: JSON.stringify({ ...newAch, achievement_type: type })
      });
      if (res.ok) {
        toast.success("Record added");
        setIsAddingAch(null);
        setNewAch({ title: "", details: "", achievement_year: "2025" });
        fetchAllData();
      }
    } catch (e) { toast.error("Error adding record"); }
  };

  const handleAddExperience = async () => {
    if (!newExp.company || !newExp.role) return toast.error("Company and Role are required");
    try {
      const res = await fetch(`/api/faculty/${user.username}/experience`, {
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
      const res = await fetch(`/api/faculty/experience/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${getToken()}` } });
      if (res.ok) { fetchAllData(); toast.success("Entry removed"); }
    } catch (e) { toast.error("Error deleting entry"); }
  };

  const removeAchievement = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/faculty/achievements/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${getToken()}` } });
      if (res.ok) { fetchAllData(); toast.success("Record removed"); }
    } catch (e) { toast.error("Error deleting record"); }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20 text-slate-900">
      {/* Premium Header */}
      <div className="relative p-10 admin-glass-panel flex flex-col md:flex-row items-center gap-8 group">
        <label className="relative w-32 h-32 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center shadow-2xl group/photo cursor-pointer overflow-hidden border border-white">
          {image_url ? (
            <img src={image_url} alt="Profile" className="w-full h-full object-cover"/>
          ) : (
            <UserCircle className="w-16 h-16 text-slate-400" />
          )}
          <div className="absolute inset-0 bg-black/60 text-slate-900 opacity-0 group-hover/photo:opacity-100 flex flex-col items-center justify-center transition-all">
             <Plus size={20} />
             <span className="text-[8px] font-black uppercase mt-1">Upload</span>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload}/>
        </label>
        <div className="flex-1 text-center md:text-left">
           <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all border-none rounded-lg font-bold uppercase text-[9px] tracking-widest mb-3 px-3 py-1 shadow-sm">Faculty Hub</Badge>
           <h1 className="text-4xl font-black italic tracking-tighter text-slate-900">{name || "Your Profile"}</h1>
           <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2 mt-1 px-1">
             {user?.username} • Faculty Member
           </p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-white/80 backdrop-blur-md" onClick={() => setShowPreview(true)}>
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
             <CardHeader className="border-b border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-slate-900">
                   <GradIcon className="w-4 h-4" /> Personal Synopsis
                </CardTitle>
             </CardHeader>
             <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-slate-500">Full Name</Label>
                   <Input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-11 transition-all font-bold"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-slate-500">Mobile Number</Label>
                   <Input value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-11 transition-all"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-slate-500">Qualifications</Label>
                   <Input value={qualifications} onChange={(e) => setQualifications(e.target.value)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-11 transition-all"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-slate-500">Specialization</Label>
                   <Input value={area} onChange={(e) => setArea(e.target.value)} className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 h-11 transition-all"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-slate-500">Professional Bio</Label>
                   <Textarea value={bio} onChange={(e) => setBio(e.target.value)} className="rounded-2xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 min-h-[120px] p-4 text-sm font-medium leading-relaxed custom-scrollbar"/>
                </div>
             </CardContent>
           </Card>

           <Card className="rounded-2xl border border-white shadow-xl bg-gradient-to-br from-accent/20 to-accent/5 text-slate-900 backdrop-blur-md">
             <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-700">Achievement Count</p>
                   <Trophy className="w-5 h-5 text-accent" />
                </div>
                <div className="text-5xl font-black italic text-slate-900">{achievements.length}</div>
                <p className="text-xs font-medium text-slate-900/70">Records successfully synchronized with the public institutional database.</p>
             </CardContent>
           </Card>
        </div>

        {/* Right Info: Achievement Tabs */}
        <div className="lg:col-span-8 space-y-8" id="achievements">
           <Tabs defaultValue="Research Papers Published" className="w-full">
              <div className="flex items-center justify-between mb-6 admin-glass-panel p-2 rounded-2xl shadow-sm overflow-x-auto custom-scrollbar">
                 <TabsList className="bg-transparent gap-1">
                    {achievementTypes.map(t => (
                      <TabsTrigger key={t.id} value={t.id} className="rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 data-[state=active]:bg-accent data-[state=active]:text-primary hover:text-slate-900 transition-all whitespace-nowrap">
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
                         <h3 className="text-xl font-black text-slate-900 italic">{type.id}</h3>
                      </div>
                      <Button className="rounded-xl h-9 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all font-bold hover:bg-accent/90 shadow-lg border-none" onClick={() => setIsAddingAch(type.id)}>
                         <Plus className="w-4 h-4 mr-1.5" /> Add New
                      </Button>
                   </div>

                   <AnimatePresence>
                     {isAddingAch === type.id && (
                       <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="p-8 admin-glass-panel border-2 border-accent/20 space-y-6 relative">
                          <button onClick={() => setIsAddingAch(null)} className="absolute top-6 right-6 text-slate-500 hover:text-slate-900"><X/></button>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                             <div className="md:col-span-3 space-y-2">
                                <Label className="text-[10px] font-black uppercase text-slate-500">Entry Title / Paper Name</Label>
                                <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 font-bold border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900" placeholder={`Full title of ${type.id}...`}/>
                             </div>
                             <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase text-slate-500">Year</Label>
                                <Input value={newAch.achievement_year} onChange={(e) => setNewAch({...newAch, achievement_year: e.target.value})} className="rounded-xl h-11 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900" placeholder="e.g. 2025"/>
                             </div>
                          </div>
                          <div className="space-y-2">
                             <Label className="text-[10px] font-black uppercase text-slate-500">Details (Publisher, Supervisor name, DOI, etc.)</Label>
                             <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 custom-scrollbar" placeholder="Provide context or links..."/>
                          </div>
                          <Button className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all font-black uppercase text-[10px] tracking-widest shadow-xl" onClick={() => handleAddAchievement(type.id)}>
                             Commit Entry
                          </Button>
                       </motion.div>
                     )}
                   </AnimatePresence>

                   <div className="grid gap-4">
                      {achievements.filter(a => a.achievement_type === type.id).map(ach => (
                        <Card key={ach.id} className="rounded-3xl border-none shadow-md overflow-hidden hover:-translate-y-1 transition-all duration-300 group admin-glass-card">
                           <CardContent className="p-6 flex items-center justify-between">
                              <div>
                                 <div className="text-[9px] font-black text-accent uppercase mb-1">{ach.achievement_year}</div>
                                 <h4 className="font-bold text-slate-900 text-base leading-tight group-hover:text-accent transition-colors">{ach.title}</h4>
                                 <p className="text-xs text-slate-500 mt-1 font-medium">{ach.details}</p>
                              </div>
                              <button onClick={() => removeAchievement(ach.id)} className="p-3 text-red-400 hover:bg-red-400/20 rounded-xl transition-colors opacity-0 group-hover:opacity-100"><Trash2 size={18}/></button>
                           </CardContent>
                        </Card>
                      ))}
                      {achievements.filter(a => a.achievement_type === type.id).length === 0 && !isAddingAch && (
                        <div className="py-20 text-center border-2 border-dashed border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] rounded-3xl italic text-slate-400 font-medium bg-white/80 backdrop-blur-md">
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
      <div className="space-y-8 pt-10 border-t border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" id="trajectory">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary">
                  <Briefcase className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-slate-900 italic">Career Path</h3>
                  <p className="text-xs text-slate-500 font-medium">Manage your professional journey and industry experience.</p>
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
                    <button onClick={() => setIsAddingExp(false)} className="text-slate-500 hover:text-slate-900"><X/></button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Company / Institution</Label>
                       <Input value={newExp.company} onChange={(e) => setNewExp({...newExp, company: e.target.value})} className="rounded-xl h-12 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 px-5 font-bold" placeholder="e.g. SEMCOM College"/>
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Designation / Role</Label>
                       <Input value={newExp.role} onChange={(e) => setNewExp({...newExp, role: e.target.value})} className="rounded-xl h-12 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 px-5 font-bold" placeholder="e.g. Senior Lecturer"/>
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Duration (Years)</Label>
                       <Input value={newExp.years} onChange={(e) => setNewExp({...newExp, years: e.target.value})} className="rounded-xl h-12 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 px-5" placeholder="e.g. 2018 - 2022"/>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Role Description</Label>
                    <Textarea value={newExp.description} onChange={(e) => setNewExp({...newExp, description: e.target.value})} className="rounded-2xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 text-slate-900 p-6 min-h-[150px] custom-scrollbar" placeholder="Briefly describe your responsibilities and achievements in this role..."/>
                 </div>
                 <Button className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all font-black uppercase text-xs tracking-[0.2em] shadow-xl" onClick={handleAddExperience}>
                    Publish to Trajectory
                 </Button>
              </motion.div>
            )}
         </AnimatePresence>

         <div className="grid gap-6">
            {experiences.map((exp) => (
              <Card key={exp.id} className="rounded-2xl border-none shadow-xl overflow-hidden group admin-glass-card">
                 <CardContent className="p-8 flex items-center justify-between transition-all">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary shrink-0 mt-1">
                          <History size={24} />
                       </div>
                       <div className="space-y-1">
                          <Badge variant="outline" className="rounded-full border-accent/20 text-accent font-black text-[9px] mb-2">{exp.years}</Badge>
                          <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-accent transition-colors">{exp.role}</h4>
                          <p className="text-sm font-bold uppercase tracking-widest text-slate-900/70">{exp.company}</p>
                          <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-2xl font-medium">{exp.description}</p>
                       </div>
                    </div>
                    <button onClick={() => removeExperience(exp.id)} className="p-4 text-red-400 hover:bg-red-400/20 rounded-2xl transition-all opacity-0 group-hover:opacity-100"><Trash2 size={24}/></button>
                 </CardContent>
              </Card>
            ))}
            {experiences.length === 0 && !isAddingExp && (
              <div className="py-20 text-center bg-white/80 backdrop-blur-md rounded-3xl italic text-slate-400 border-2 border-dashed border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
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
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-5xl h-full max-h-[85vh] admin-glass-panel rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white">
               <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
                  <div className="w-full md:w-[40%] bg-white/80 backdrop-blur-md p-10 flex flex-col items-center border-r border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                     <div className="w-40 h-48 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center shadow-xl border border-white mb-6 overflow-hidden">
                        {image_url ? <img src={image_url} alt="Profile" className="w-full h-full object-cover"/> : <UserCircle className="w-20 h-20 text-slate-900/20" />}
                     </div>
                     <h2 className="text-2xl font-black text-slate-900 uppercase italic text-center leading-tight">{name}</h2>
                     <p className="text-accent font-black text-[10px] uppercase tracking-widest mt-2 px-3 py-1 bg-accent/20 rounded-lg">Faculty Member</p>
                     
                     <div className="w-full mt-10 space-y-4">
                        <div className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 shadow-sm">Degrees</p>
                           <p className="text-[11px] font-bold text-slate-900 leading-tight">{qualifications || "Not specified"}</p>
                        </div>
                        <div className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 shadow-sm">Specialization</p>
                           <p className="text-[11px] font-bold text-slate-900 leading-tight">{area || "Not specified"}</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex-1 p-10 md:p-14 overflow-y-auto relative custom-scrollbar">
                     <button onClick={() => setShowPreview(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X/></button>
                     <div className="mb-12">
                        <h3 className="text-4xl font-black text-slate-900 italic underline decoration-accent/40 underline-offset-8">Academic <span className="text-accent">Trajectory</span>.</h3>
                        <p className="text-slate-400 font-black text-[10px] mt-4 uppercase tracking-[0.2em]">Institutional Contributions & Research Portfolio</p>
                     </div>
                     <div className="space-y-12">
                        {achievementTypes.map(type => {
                          const items = achievements.filter(a => a.achievement_type === type.id);
                          if (items.length === 0) return null;
                          return (
                            <div key={type.id} className="space-y-6">
                               <h4 className="text-[11px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-3">
                                  <span className="text-slate-900">{type.icon}</span> {type.id}
                               </h4>
                               <div className="grid gap-4">
                                  {items.map(i => (
                                    <div key={i.id} className="p-5 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                                       <div className="text-[9px] font-black text-accent uppercase mb-1">{i.achievement_year}</div>
                                       <div className="text-sm font-bold text-slate-900 mb-1">{i.title}</div>
                                       <div className="text-xs text-slate-500 font-medium">{i.details}</div>
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
