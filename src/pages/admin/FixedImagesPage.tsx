import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Upload, User, Image as ImageIcon, Star, Sparkles, Users, Trophy, Camera, Music, Building2 } from "lucide-react";
import { configApi, uploadFile } from "@/lib/api";

export default function FixedImagesPage() {
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
  const [heroSliderImages, setHeroSliderImages] = useState<string[]>([]);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  
  const [isUploading, setIsUploading] = useState<string | null>(null);

  useEffect(() => {
    configApi.getAll()
      .then((data: any) => {
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
        
        if (data.hero_slider_images) {
          try { setHeroSliderImages(JSON.parse(data.hero_slider_images)); } catch(e) {}
        } else {
          const legacy = [];
          if (data.hero_slider_1) legacy.push(data.hero_slider_1);
          if (data.hero_slider_2) legacy.push(data.hero_slider_2);
          if (data.hero_slider_3) legacy.push(data.hero_slider_3);
          if (data.hero_slider_4) legacy.push(data.hero_slider_4);
          if (legacy.length > 0) setHeroSliderImages(legacy);
        }

        if (data.facility_images) {
          try { setFacilityImages(JSON.parse(data.facility_images)); } catch(e) {}
        }
      });
  }, []);

  const handleImageUpload = async (file: File, configKey: string) => {
    setIsUploading(configKey);

    try {
      const uploadData = await uploadFile(file);

      if (uploadData.success) {
        const configRes = await configApi.update(configKey, uploadData.imageUrl);

        if (configRes.success) {
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

  const handleMultiImageUpload = async (file: File, configKey: string, currentUrls: string[], setter: any) => {
    setIsUploading(configKey);
    try {
      const uploadData = await uploadFile(file);
      if (uploadData.success) {
        const newUrls = [...currentUrls, uploadData.imageUrl];
        const configRes = await configApi.update(configKey, JSON.stringify(newUrls));
        if (configRes.success) {
          setter(newUrls);
          toast.success("Image added successfully");
        }
      }
    } catch (error) {
      toast.error("Failed to add image");
    } finally {
      setIsUploading(null);
    }
  };

  const removeMultiImage = async (index: number, configKey: string, currentUrls: string[], setter: any) => {
    const newUrls = [...currentUrls];
    newUrls.splice(index, 1);
    try {
      const configRes = await configApi.update(configKey, JSON.stringify(newUrls));
      if (configRes.success) {
        setter(newUrls);
        toast.success("Image removed");
      }
    } catch (error) {
      toast.error("Failed to remove image");
    }
  };

  const ConfigImageSection = ({ title, configKey, currentUrl, icon: Icon }: any) => (
    <div className="admin-glass-card p-6">
      <div className="flex items-center gap-2 mb-5">
        <Icon className="h-5 w-5 text-accent" />
        <h3 className="text-base font-bold text-primary">{title}</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-40 aspect-[4/5] rounded-2xl overflow-hidden bg-surface border-2 border-dashed border-border flex items-center justify-center relative group">
          {currentUrl ? (
            <img src={currentUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <Icon className="h-12 w-12 text-primary/20" />
          )}
          {isUploading === configKey && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-accent" />
            </div>
          )}
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <Label className="text-primary-light">Image Asset</Label>
            <p className="text-red-500 text-xs font-semibold mb-2">*Only image with 100 or lessthan 100 kb allowed..</p>
            <div className="flex gap-3">
              <Input 
                type="file" 
                accept="image/*" 
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    if (!file.type.startsWith('image/')) {
                      alert("Only image files are allowed");
                      e.target.value = '';
                      return;
                    }
                    if (file.size > 100 * 1024) {
                      alert("do not allow the images more than 100 kb because the app pool crash");
                      e.target.value = '';
                      return;
                    }
                    handleImageUpload(file, configKey);
                  }
                }}
                className="hidden" 
                id={`upload-${configKey}`}
              />
              <Button asChild variant="outline" className="border-border text-primary hover:bg-surface hover:text-primary bg-surface cursor-pointer">
                <label htmlFor={`upload-${configKey}`}>
                  <Upload className="h-4 w-4 mr-2" />
                  {currentUrl ? "Change Photo" : "Upload Photo"}
                </label>
              </Button>
            </div>
            <p className="text-[11px] text-muted"> Recommended aspect ratio 4:5 for portraits, 16:9 for banners.</p>
          </div>
          {currentUrl && (
            <div className="space-y-2">
              <Label className="text-primary-light">Current URL</Label>
              <Input readOnly value={currentUrl} className="rounded-xl border border-border shadow-sm bg-surface text-muted text-[10px] h-8 focus-visible:ring-0" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ConfigMultiImageSection = ({ title, configKey, currentUrls, setter, icon: Icon, description }: any) => (
    <div className="admin-glass-card p-6 col-span-1 md:col-span-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-4">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-accent" />
          <div>
            <h3 className="text-base font-bold text-primary">{title}</h3>
            {description && <p className="text-[11px] text-muted">{description}</p>}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-red-500 text-xs font-semibold">*Only image with 100 or lessthan 100 kb allowed..</p>
          <div className="flex items-center gap-3">
            <Input 
              type="file" 
              accept="image/*" 
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  if (!file.type.startsWith('image/')) {
                    alert("Only image files are allowed");
                    e.target.value = '';
                    return;
                  }
                  if (file.size > 100 * 1024) {
                    alert("do not allow the images more than 100 kb because the app pool crash");
                    e.target.value = '';
                    return;
                  }
                  handleMultiImageUpload(file, configKey, currentUrls, setter);
                }
              }}
            className="hidden" 
            id={`upload-${configKey}`}
          />
          <Button asChild className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:bg-indigo-700 transition-all cursor-pointer">
            <label htmlFor={`upload-${configKey}`}>
              {isUploading === configKey ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
              Add Image
            </label>
          </Button>
        </div>
        </div>
      </div>
      
      {currentUrls.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentUrls.map((url: string, index: number) => (
            <div key={index} className="aspect-video rounded-xl overflow-hidden relative group border border-border">
              <img src={url} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeMultiImage(index, configKey, currentUrls, setter)}
                  className="scale-90"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl bg-background/50">
          <ImageIcon className="h-12 w-12 text-slate-300 mb-3" />
          <p className="text-sm font-medium text-muted">No images added yet</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6 max-w-4xl px-4 md:px-0 text-primary pb-20">
      <div>
        <h2 className="text-3xl font-extrabold text-primary">Fixed Images</h2>
        <p className="text-muted text-sm mt-1">Manage static images across the application</p>
      </div>

      <ConfigImageSection 
        title="Chairman Portrait" 
        configKey="chairman_image" 
        currentUrl={chairmanImage} 
        icon={User} 
      />

      <ConfigImageSection 
        title="SEMCOM Building Image" 
        configKey="about_building_image" 
        currentUrl={aboutBuilding} 
        icon={ImageIcon} 
      />

      <div className="pt-8 pb-2">
        <h3 className="text-xl font-black text-accent italic">Dynamic Galleries</h3>
        <p className="text-muted text-xs mt-1">Manage multi-image sliders and galleries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConfigMultiImageSection 
          title="Homepage Hero Slider" 
          configKey="hero_slider_images" 
          currentUrls={heroSliderImages} 
          setter={setHeroSliderImages}
          icon={ImageIcon} 
          description="Add multiple images for the rotating hero banner on the home page."
        />

        <ConfigMultiImageSection 
          title="Campus Facilities" 
          configKey="facility_images" 
          currentUrls={facilityImages} 
          setter={setFacilityImages}
          icon={Building2} 
          description="Add images to showcase the campus infrastructure in the Student Corner."
        />
      </div>

      <div className="pt-8 pb-4">
        <h3 className="text-xl font-black text-accent italic">College Activities</h3>
        <p className="text-muted text-xs mt-1">Manage images for the homepage activity tiles</p>
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
    </div>
  );
}
