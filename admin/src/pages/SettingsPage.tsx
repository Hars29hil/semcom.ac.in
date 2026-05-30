import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Loader2, Upload, User, Image as ImageIcon, Star, Sparkles, Users, Trophy, Camera, Music } from "lucide-react";

export default function SettingsPage() {
  const [chairmanImage, setChairmanImage] = useState("");
  const [aboutBanner, setAboutBanner] = useState("");
  const [aboutBuilding, setAboutBuilding] = useState("");
  const [instExcellence, setInstExcellence] = useState("");
  const [activityCultural, setActivityCultural] = useState("");
  const [activityNss, setActivityNss] = useState("");
  const [activitySports, setActivitySports] = useState("");
  const [activitySeminars, setActivitySeminars] = useState("");
  const [activityWorkshops, setActivityWorkshops] = useState("");
  const [activityHonors, setActivityHonors] = useState("");
  const [collegeLogo, setCollegeLogo] = useState("");
  const [isUploading, setIsUploading] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/config")
      .then((res) => res.json())
      .then((data) => {
        if (data.college_logo) setCollegeLogo(data.college_logo);
        if (data.chairman_image) setChairmanImage(data.chairman_image);
        if (data.about_banner_image) setAboutBanner(data.about_banner_image);
        if (data.about_building_image) setAboutBuilding(data.about_building_image);
        if (data.institutional_excellence_image) setInstExcellence(data.institutional_excellence_image);
        if (data.activity_cultural) setActivityCultural(data.activity_cultural);
        if (data.activity_nss) setActivityNss(data.activity_nss);
        if (data.activity_sports) setActivitySports(data.activity_sports);
        if (data.activity_seminars) setActivitySeminars(data.activity_seminars);
        if (data.activity_workshops) setActivityWorkshops(data.activity_workshops);
        if (data.activity_honors) setActivityHonors(data.activity_honors);
      });
  }, []);

  const handleImageUpload = async (file: File, configKey: string) => {
    setIsUploading(configKey);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const uploadRes = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();

      if (uploadData.success) {
        const configRes = await fetch("http://localhost:5000/api/config", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            key: configKey,
            value: uploadData.imageUrl,
          }),
        });

        if (configRes.ok) {
          if (configKey === "college_logo") setCollegeLogo(uploadData.imageUrl);
          if (configKey === "chairman_image") setChairmanImage(uploadData.imageUrl);
          if (configKey === "about_banner_image") setAboutBanner(uploadData.imageUrl);
          if (configKey === "about_building_image") setAboutBuilding(uploadData.imageUrl);
          if (configKey === "institutional_excellence_image") setInstExcellence(uploadData.imageUrl);
          if (configKey === "activity_cultural") setActivityCultural(uploadData.imageUrl);
          if (configKey === "activity_nss") setActivityNss(uploadData.imageUrl);
          if (configKey === "activity_sports") setActivitySports(uploadData.imageUrl);
          if (configKey === "activity_seminars") setActivitySeminars(uploadData.imageUrl);
          if (configKey === "activity_workshops") setActivityWorkshops(uploadData.imageUrl);
          if (configKey === "activity_honors") setActivityHonors(uploadData.imageUrl);
          toast.success("Image updated successfully");
        }
      }
    } catch (error) {
      toast.error("Failed to update image");
    } finally {
      setIsUploading(null);
    }
  };

  const ConfigImageSection = ({ title, configKey, currentUrl, icon: Icon }: any) => (
    <div className="border border-border bg-white shadow-sm rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="text-base font-bold text-foreground">{title}</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-40 aspect-[4/5] rounded-2xl overflow-hidden bg-muted border-2 border-dashed border-muted-foreground/20 flex items-center justify-center relative group">
          {currentUrl ? (
            <img src={currentUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <Icon className="h-12 w-12 text-muted-foreground opacity-20" />
          )}
          {isUploading === configKey && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <Label>Image Asset</Label>
            <div className="flex gap-3">
              <Input 
                type="file" 
                accept="image/*" 
                onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0], configKey)}
                className="hidden" 
                id={`upload-${configKey}`}
              />
              <Button asChild variant="outline" className="border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20-hover">
                <label htmlFor={`upload-${configKey}`} className="cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  {currentUrl ? "Change Photo" : "Upload Photo"}
                </label>
              </Button>
            </div>
            <p className="text-[11px] text-muted-foreground"> Recommended aspect ratio 4:5 for portraits, 16:9 for banners.</p>
          </div>
          {currentUrl && (
            <div className="space-y-2">
              <Label>Current URL</Label>
              <Input readOnly value={currentUrl} className="border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 text-[10px] h-8 border-none" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 max-w-2xl px-4 md:px-0">
      <div>
        <h2 className="text-3xl font-extrabold gradient-text">Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">Manage institutional and admin preferences</p>
      </div>

      <ConfigImageSection 
        title="College Official Logo" 
        configKey="college_logo" 
        currentUrl={collegeLogo} 
        icon={ImageIcon} 
      />

      <ConfigImageSection 
        title="Chairman Portrait" 
        configKey="chairman_image" 
        currentUrl={chairmanImage} 
        icon={User} 
      />

      <ConfigImageSection 
        title="About Us Banner" 
        configKey="about_banner_image" 
        currentUrl={aboutBanner} 
        icon={ImageIcon} 
      />

      <ConfigImageSection 
        title="SEMCOM Building Image" 
        configKey="about_building_image" 
        currentUrl={aboutBuilding} 
        icon={ImageIcon} 
      />

      <ConfigImageSection 
        title="Institutional Excellence (Legacy)" 
        configKey="institutional_excellence_image" 
        currentUrl={instExcellence} 
        icon={Star} 
      />

      <div className="pt-8 pb-4">
        <h3 className="text-xl font-black text-brand-primary italic">College Activities</h3>
        <p className="text-muted-foreground text-xs mt-1">Manage images for the homepage activity tiles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConfigImageSection 
          title="Cultural Festivals" 
          configKey="activity_cultural" 
          currentUrl={activityCultural} 
          icon={Sparkles} 
        />
        <ConfigImageSection 
          title="NSS & NCC Units" 
          configKey="activity_nss" 
          currentUrl={activityNss} 
          icon={Users} 
        />
        <ConfigImageSection 
          title="Sports & Athletics" 
          configKey="activity_sports" 
          currentUrl={activitySports} 
          icon={Trophy} 
        />
        <ConfigImageSection 
          title="Expert Seminars" 
          configKey="activity_seminars" 
          currentUrl={activitySeminars} 
          icon={Camera} 
        />
        <ConfigImageSection 
          title="Youth Workshops" 
          configKey="activity_workshops" 
          currentUrl={activityWorkshops} 
          icon={Music} 
        />
        <ConfigImageSection 
          title="Academic Honors" 
          configKey="activity_honors" 
          currentUrl={activityHonors} 
          icon={Trophy} 
        />
      </div>
      <div className="border border-border bg-white shadow-sm rounded-2xl p-6">
        <h3 className="text-base font-bold text-foreground mb-5">Website Settings</h3>
        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Site Title</Label>
            <Input className="border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl border-none" defaultValue="SEMCOM - College of Commerce & Management" />
          </div>
          <div className="space-y-2">
            <Label>Meta Description</Label>
            <Input className="border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl border-none" defaultValue="SEMCOM, a college of CVM University, offering BBA, BCA, BCom, MBA, MCom and Ph.D. programs." />
          </div>
          <Separator />
          {[
            { title: "Maintenance Mode", desc: "Temporarily disable the public website", checked: false },
            { title: "Admission Portal", desc: "Enable online admission applications", checked: true },
            { title: "Alumni Registration", desc: "Allow alumni to register on the portal", checked: true },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between p-3 rounded-xl glass-tint">
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-[11px] text-muted-foreground">{item.desc}</p>
              </div>
              <Switch defaultChecked={item.checked} />
            </div>
          ))}
          <Button>Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
