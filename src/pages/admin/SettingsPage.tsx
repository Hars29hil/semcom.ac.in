import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl px-4 md:px-0 text-primary pb-20">
      <div>
        <h2 className="text-3xl font-extrabold text-primary">Settings</h2>
        <p className="text-muted text-sm mt-1">Manage institutional and admin preferences</p>
      </div>

      <div className="admin-glass-panel p-6">
        <h3 className="text-base font-bold text-primary mb-5">Website Settings</h3>
        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="text-primary-light">Site Title</Label>
            <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="SEMCOM - College of Commerce & Management" />
          </div>
          <div className="space-y-2">
            <Label className="text-primary-light">Meta Description</Label>
            <Input className="rounded-xl border border-border shadow-sm bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-slate-300 text-primary" defaultValue="SEMCOM, a college of CVM University, offering BBA, BCA, BCom, MBA and Ph.D. programs." />
          </div>
          <Separator className="bg-surface" />
          {[
            { title: "Maintenance Mode", desc: "Temporarily disable the public website", checked: false },
            { title: "Admission Portal", desc: "Enable online admission applications", checked: true },
            { title: "Alumni Registration", desc: "Allow alumni to register on the portal", checked: true },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border shadow-sm">
              <div>
                <p className="text-sm font-semibold text-primary">{item.title}</p>
                <p className="text-[11px] text-muted">{item.desc}</p>
              </div>
              <Switch defaultChecked={item.checked} className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-background" />
            </div>
          ))}
          <Button className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90">Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
