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
import { getAuthUser, logout } from "@/lib/auth";
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
      
      const profRes = await fetch(`/api/faculty`);
      const profData = await profRes.json();
      if (profData.success) {
         const me = profData.data.find((f: any) => f.email === user.username);
         if (me) {
           setName(me.name);
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
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        toast.info("Photo updated. Please sync profile to save.");
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, qualification: qualifications, area, bio, image_url })
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
        headers: { 'Content-Type': 'application/json' },
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
        headers: { 'Content-Type': 'application/json' },
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
      const res = await fetch(`/api/faculty/experience/${id}`, { method: 'DELETE' });
      if (res.ok) { fetchAllData(); toast.success("Entry removed"); }
    } catch (e) { toast.error("Error deleting entry"); }
  };

  const removeAchievement = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/faculty/achievements/${id}`, { method: 'DELETE' });
      if (res.ok) { fetchAllData(); toast.success("Record removed"); }
    } catch (e) { toast.error("Error deleting record"); }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Premium Header */}
      <div className="relative p-10 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] rounded-[3rem] border border-white/50 flex flex-col md:flex-row items-center gap-8 group">
        <label className="relative w-32 h-32 rounded-[2rem] bg-accent flex items-center justify-center shadow-2xl group/photo cursor-pointer overflow-hidden border-2 border-white ring-4 ring-primary/5">
          {image_url ? (
            <img src={image_url} alt="Profile" className="w-full h-full object-cover"/>
          ) : (
            <UserCircle className="w-16 h-16 text-muted-foreground/40" />
          )}
          <div className="absolute inset-0 bg-primary/80 text-white opacity-0 group-hover/photo:opacity-100 flex flex-col items-center justify-center transition-all">
             <Plus size={20} />
             <span className="text-[8px] font-black uppercase mt-1">Upload</span>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload}/>
        </label>
        <div className="flex-1 text-center md:text-left">
           <Badge className="bg-primary text-white border-none rounded-lg font-bold uppercase text-[9px] tracking-widest mb-3 px-3 py-1 shadow-sm">Faculty Hub</Badge>
           <h1 className="text-4xl font-black italic tracking-tighter text-[#1c2e5a]">{name || "Your Profile"}</h1>
           <p className="text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2 mt-1 px-1">
             {user?.username} • Faculty Member
           </p>
        </div>
        <div className="flex gap-3">
           <Button variant="secondary" className="rounded-2xl h-12 px-6 font-bold bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20" onClick={() => setShowPreview(true)}>
              <Eye className="w-4 h-4 mr-2" /> Live Preview
           </Button>
           <Button className="rounded-2xl h-12 px-8 font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" onClick={handleSaveProfile} disabled={saving}>
             {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
             Sync Profile
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info: Basic Profile */}
        <div className="lg:col-span-4 space-y-8" id="synopsis">
           <Card className="rounded-[2.5rem] border-none shadow-xl overflow-hidden">
             <CardHeader className="bg-primary/5">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                   <GradIcon className="w-4 h-4" /> Personal Synopsis
                </CardTitle>
             </CardHeader>
             <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Full Name</Label>
                   <Input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border-none bg-accent/50 focus-visible:bg-white h-11 transition-all font-bold"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Qualifications</Label>
                   <Input value={qualifications} onChange={(e) => setQualifications(e.target.value)} className="rounded-xl border-none bg-accent/50 focus-visible:bg-white h-11 transition-all"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Specialization</Label>
                   <Input value={area} onChange={(e) => setArea(e.target.value)} className="rounded-xl border-none bg-accent/50 focus-visible:bg-white h-11 transition-all"/>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Professional Bio</Label>
                   <Textarea value={bio} onChange={(e) => setBio(e.target.value)} className="rounded-2xl border-none bg-accent/50 focus-visible:bg-white min-h-[120px] p-4 text-sm font-medium leading-relaxed"/>
                </div>
             </CardContent>
           </Card>

           <Card className="rounded-[2.5rem] border-none shadow-xl bg-gradient-to-br from-brand-secondary to-brand-secondary/80 text-white">
             <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                   <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Achievement Count</p>
                   <Trophy className="w-5 h-5 opacity-50" />
                </div>
                <div className="text-5xl font-black italic">{achievements.length}</div>
                <p className="text-xs font-medium opacity-70">Records successfully synchronized with the public institutional database.</p>
             </CardContent>
           </Card>
        </div>

        {/* Right Info: Achievement Tabs */}
        <div className="lg:col-span-8 space-y-8" id="achievements">
           <Tabs defaultValue="Research Papers Published" className="w-full">
              <div className="flex items-center justify-between mb-6 bg-white p-2 rounded-[2rem] shadow-sm border border-gray-100 overflow-x-auto no-scrollbar">
                 <TabsList className="bg-transparent gap-1">
                    {achievementTypes.map(t => (
                      <TabsTrigger key={t.id} value={t.id} className="rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all whitespace-nowrap">
                         {t.id.split(' ')[0]}
                      </TabsTrigger>
                    ))}
                 </TabsList>
              </div>

              {achievementTypes.map(type => (
                <TabsContent key={type.id} value={type.id} className="mt-0 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                   <div className="flex justify-between items-center px-4">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">{type.icon}</div>
                         <h3 className="text-xl font-black text-[#1c2e5a] italic">{type.id}</h3>
                      </div>
                      <Button className="rounded-xl h-9 bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 border-none" onClick={() => setIsAddingAch(type.id)}>
                         <Plus className="w-4 h-4 mr-1.5" /> Add New
                      </Button>
                   </div>

                   <AnimatePresence>
                     {isAddingAch === type.id && (
                       <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="p-8 skeu-surface rounded-[2.5rem] border-2 border-primary/20 bg-white space-y-6 relative">
                          <button onClick={() => setIsAddingAch(null)} className="absolute top-6 right-6 text-muted-foreground"><X/></button>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                             <div className="md:col-span-3 space-y-2">
                                <Label className="text-[10px] font-black uppercase opacity-60">Entry Title / Paper Name</Label>
                                <Input value={newAch.title} onChange={(e) => setNewAch({...newAch, title: e.target.value})} className="rounded-xl h-11 font-bold" placeholder={`Full title of ${type.id}...`}/>
                             </div>
                             <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase opacity-60">Year</Label>
                                <Input value={newAch.achievement_year} onChange={(e) => setNewAch({...newAch, achievement_year: e.target.value})} className="rounded-xl h-11" placeholder="e.g. 2025"/>
                             </div>
                          </div>
                          <div className="space-y-2">
                             <Label className="text-[10px] font-black uppercase opacity-60">Details (Publisher, Supervisor name, DOI, etc.)</Label>
                             <Textarea value={newAch.details} onChange={(e) => setNewAch({...newAch, details: e.target.value})} className="rounded-2xl" placeholder="Provide context or links..."/>
                          </div>
                          <Button className="w-full h-12 rounded-2xl bg-[#1c2e5a] text-white font-black uppercase text-[10px] tracking-widest shadow-xl shadow-blue-900/20" onClick={() => handleAddAchievement(type.id)}>
                             Commit Entry
                          </Button>
                       </motion.div>
                     )}
                   </AnimatePresence>

                   <div className="grid gap-4">
                      {achievements.filter(a => a.achievement_type === type.id).map(ach => (
                        <Card key={ach.id} className="rounded-3xl border-none shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                           <CardContent className="p-6 flex items-center justify-between bg-white/40 group-hover:bg-white">
                              <div>
                                 <div className="text-[9px] font-black text-primary uppercase mb-1">{ach.achievement_year}</div>
                                 <h4 className="font-bold text-[#1c2e5a] text-base leading-tight">{ach.title}</h4>
                                 <p className="text-xs text-muted-foreground mt-1 font-medium">{ach.details}</p>
                              </div>
                              <button onClick={() => removeAchievement(ach.id)} className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-colors opacity-0 group-hover:opacity-100"><Trash2 size={18}/></button>
                           </CardContent>
                        </Card>
                      ))}
                      {achievements.filter(a => a.achievement_type === type.id).length === 0 && !isAddingAch && (
                        <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[3rem] italic text-gray-300 font-medium">
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
      <div className="space-y-8 pt-10 border-t border-gray-100" id="trajectory">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <Briefcase className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-[#1c2e5a] italic">Career Path</h3>
                  <p className="text-xs text-muted-foreground font-medium">Manage your professional journey and industry experience.</p>
               </div>
            </div>
            <Button className="rounded-2xl h-11 bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-lg shadow-brand-secondary/20" onClick={() => setIsAddingExp(true)}>
               <Plus className="w-4 h-4 mr-2" /> Record Experience
            </Button>
         </div>

         <AnimatePresence>
            {isAddingExp && (
              <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.95}} className="p-10 bg-white rounded-[3rem] border-2 border-brand-secondary/20 shadow-2xl space-y-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8">
                    <button onClick={() => setIsAddingExp(false)} className="text-muted-foreground hover:text-foreground"><X/></button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Company / Institution</Label>
                       <Input value={newExp.company} onChange={(e) => setNewExp({...newExp, company: e.target.value})} className="rounded-xl h-12 bg-accent/30 border-none px-5 font-bold" placeholder="e.g. SEMCOM College"/>
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Designation / Role</Label>
                       <Input value={newExp.role} onChange={(e) => setNewExp({...newExp, role: e.target.value})} className="rounded-xl h-12 bg-accent/30 border-none px-5 font-bold" placeholder="e.g. Senior Lecturer"/>
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Duration (Years)</Label>
                       <Input value={newExp.years} onChange={(e) => setNewExp({...newExp, years: e.target.value})} className="rounded-xl h-12 bg-accent/30 border-none px-5" placeholder="e.g. 2018 - 2022"/>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Role Description</Label>
                    <Textarea value={newExp.description} onChange={(e) => setNewExp({...newExp, description: e.target.value})} className="rounded-[2rem] bg-accent/30 border-none p-6 min-h-[150px]" placeholder="Briefly describe your responsibilities and achievements in this role..."/>
                 </div>
                 <Button className="w-full h-14 rounded-2xl bg-brand-secondary text-white font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-brand-secondary/20" onClick={handleAddExperience}>
                    Publish to Trajectory
                 </Button>
              </motion.div>
            )}
         </AnimatePresence>

         <div className="grid gap-6">
            {experiences.map((exp) => (
              <Card key={exp.id} className="rounded-[2.5rem] border-none shadow-xl overflow-hidden group">
                 <CardContent className="p-8 flex items-center justify-between bg-white/70 group-hover:bg-white transition-all">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-muted-foreground shrink-0 mt-1">
                          <History size={24} />
                       </div>
                       <div className="space-y-1">
                          <Badge variant="outline" className="rounded-full border-brand-secondary/20 text-brand-secondary font-black text-[9px] mb-2">{exp.years}</Badge>
                          <h4 className="text-xl font-black text-[#1c2e5a] tracking-tight">{exp.role}</h4>
                          <p className="text-sm font-bold uppercase tracking-widest text-[#0b807b]">{exp.company}</p>
                          <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-2xl font-medium">{exp.description}</p>
                       </div>
                    </div>
                    <button onClick={() => removeExperience(exp.id)} className="p-4 text-red-400 hover:bg-red-50 rounded-2xl transition-all opacity-0 group-hover:opacity-100"><Trash2 size={24}/></button>
                 </CardContent>
              </Card>
            ))}
            {experiences.length === 0 && !isAddingExp && (
              <div className="py-20 text-center bg-accent/30 rounded-[3rem] italic text-muted-foreground border-2 border-dashed border-accent/50">
                 No experience records have been added to your professional trajectory yet.
              </div>
            )}
         </div>
      </div>

      {/* Live Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-12">
            <div className="absolute inset-0 bg-[#0a1a3b]/90 backdrop-blur-xl" onClick={() => setShowPreview(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-5xl h-full max-h-[85vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
               <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
                  <div className="w-full md:w-[40%] bg-[#fcfcfc] p-10 flex flex-col items-center border-r border-gray-100">
                     <div className="w-40 h-48 rounded-[2.5rem] bg-white flex items-center justify-center shadow-xl border-8 border-white mb-6 overflow-hidden">
                        {image_url ? <img src={image_url} alt="Profile" className="w-full h-full object-cover"/> : <UserCircle className="w-20 h-20 text-muted-foreground/20" />}
                     </div>
                     <h2 className="text-2xl font-serif font-black text-[#1c2e5a] uppercase italic text-center leading-tight">{name}</h2>
                     <p className="text-teal-600 font-black text-[10px] uppercase tracking-widest mt-2 px-3 py-1 bg-teal-50 rounded-lg">Faculty Member</p>
                     
                     <div className="w-full mt-10 space-y-4">
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                           <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 shadow-sm">Degrees</p>
                           <p className="text-[11px] font-bold text-[#1c2e5a] leading-tight">{qualifications || "Not specified"}</p>
                        </div>
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                           <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 shadow-sm">Specialization</p>
                           <p className="text-[11px] font-bold text-[#1c2e5a] leading-tight">{area || "Not specified"}</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex-1 p-10 md:p-14 overflow-y-auto relative no-scrollbar">
                     <button onClick={() => setShowPreview(false)} className="absolute top-8 right-8 text-gray-400 hover:text-foreground"><X/></button>
                     <div className="mb-12">
                        <h3 className="text-4xl font-serif font-black text-[#1c2e5a] italic underline decoration-teal-500/20 underline-offset-8">Academic <span className="text-teal-600">Trajectory</span>.</h3>
                        <p className="text-gray-400 font-black text-[10px] mt-4 uppercase tracking-[0.2em]">Institutional Contributions & Research Portfolio</p>
                     </div>
                     <div className="space-y-12">
                        {achievementTypes.map(type => {
                          const items = achievements.filter(a => a.achievement_type === type.id);
                          if (items.length === 0) return null;
                          return (
                            <div key={type.id} className="space-y-6">
                               <h4 className="text-[11px] font-black text-teal-600 uppercase tracking-[0.3em] flex items-center gap-3">
                                  {type.icon} {type.id}
                               </h4>
                               <div className="grid gap-4">
                                  {items.map(i => (
                                    <div key={i.id} className="p-5 bg-gray-50/50 rounded-3xl border border-gray-100">
                                       <div className="text-[9px] font-black text-teal-600 uppercase mb-1">{i.achievement_year}</div>
                                       <div className="text-sm font-bold text-[#1c2e5a] mb-1">{i.title}</div>
                                       <div className="text-xs text-muted-foreground font-medium">{i.details}</div>
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
