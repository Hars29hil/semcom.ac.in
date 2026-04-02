import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold gradient-text">Contact Information</h2>
        <p className="text-muted-foreground text-sm mt-1">Manage college contact details displayed on the website</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="neu rounded-2xl p-6">
          <h3 className="text-base font-bold text-foreground mb-5">General Information</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>College Name</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="SEMCOM - S.G.M. English Medium College of Commerce & Management" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="principal.semcom@cvmu.edu.in" />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="+91 6352135360" />
            </div>
            <div className="space-y-2">
              <Label>Website</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="https://semcom.ac.in" />
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea className="neu-inset rounded-xl border-none" defaultValue="Vallabh Vidyanagar, Anand, Gujarat, India - 388120" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </div>

        <div className="neu rounded-2xl p-6">
          <h3 className="text-base font-bold text-foreground mb-5">Social Media Links</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Facebook</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="https://facebook.com/semcom" />
            </div>
            <div className="space-y-2">
              <Label>Instagram</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="https://instagram.com/semcom" />
            </div>
            <div className="space-y-2">
              <Label>Twitter</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="https://twitter.com/semcom" />
            </div>
            <div className="space-y-2">
              <Label>YouTube</Label>
              <Input className="neu-inset rounded-xl border-none" defaultValue="https://youtube.com/semcom" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>

      <div className="skeu-surface rounded-2xl p-6">
        <h3 className="text-base font-bold text-foreground mb-4">Current Contact Display</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MapPin, label: "Address", value: "Vallabh Vidyanagar, Anand, Gujarat" },
            { icon: Phone, label: "Phone", value: "+91 6352135360" },
            { icon: Mail, label: "Email", value: "principal.semcom@cvmu.edu.in" },
            { icon: Globe, label: "Website", value: "semcom.ac.in" },
          ].map((item) => (
            <div key={item.label} className="glass-tint rounded-xl p-4 flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg clay-primary flex items-center justify-center shrink-0">
                <item.icon className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">{item.label}</p>
                <p className="text-sm font-medium text-foreground mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
