import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-6 text-primary pb-20">
      <div>
        <h2 className="text-3xl font-extrabold text-primary">Contact Information</h2>
        <p className="text-muted text-sm mt-1">Manage college contact details displayed on the website</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="admin-glass-panel p-6">
          <h3 className="text-base font-bold text-primary mb-5">General Information</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-primary-light">College Name</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="SEMCOM - S.G.M. English Medium College of Commerce & Management" />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Email</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="principal.semcom@cvmu.edu.in" />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Phone</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="+91 6352135360" />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Website</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="https://semcom.ac.in" />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Address</Label>
              <Textarea className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="Vallabh Vidyanagar, Anand, Gujarat, India - 388120" />
            </div>
            <Button className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 w-full mt-2">Save Changes</Button>
          </div>
        </div>

        <div className="admin-glass-panel p-6">
          <h3 className="text-base font-bold text-primary mb-5">Social Media Links</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-primary-light">Facebook</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="https://facebook.com/semcom" />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Instagram</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="https://instagram.com/semcom" />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">Twitter</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="https://twitter.com/semcom" />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-light">YouTube</Label>
              <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="https://youtube.com/semcom" />
            </div>
            <Button className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 w-full mt-2">Save Changes</Button>
          </div>
        </div>
      </div>

      <div className="admin-glass-panel p-6">
        <h3 className="text-base font-bold text-primary mb-4">Current Contact Display</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MapPin, label: "Address", value: "Vallabh Vidyanagar, Anand, Gujarat" },
            { icon: Phone, label: "Phone", value: "+91 6352135360" },
            { icon: Mail, label: "Email", value: "principal.semcom@cvmu.edu.in" },
            { icon: Globe, label: "Website", value: "semcom.ac.in" },
          ].map((item) => (
            <div key={item.label} className="bg-surface border border-border shadow-sm rounded-xl p-4 flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <item.icon className="h-3.5 w-3.5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-muted font-semibold uppercase tracking-wide">{item.label}</p>
                <p className="text-sm font-medium text-primary mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
