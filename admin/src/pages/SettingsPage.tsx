import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-3xl font-extrabold gradient-text">Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">Manage admin panel preferences</p>
      </div>

      <div className="neu rounded-2xl p-6">
        <h3 className="text-base font-bold text-foreground mb-5">Website Settings</h3>
        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Site Title</Label>
            <Input className="neu-inset rounded-xl border-none" defaultValue="SEMCOM - College of Commerce & Management" />
          </div>
          <div className="space-y-2">
            <Label>Meta Description</Label>
            <Input className="neu-inset rounded-xl border-none" defaultValue="SEMCOM, a college of CVM University, offering BBA, BCA, BCom, MBA, MCom and Ph.D. programs." />
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

      <div className="neu rounded-2xl p-6">
        <h3 className="text-base font-bold text-foreground mb-5">Admin Account</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Admin Email</Label>
            <Input className="neu-inset rounded-xl border-none" defaultValue="admin@semcom.ac.in" />
          </div>
          <div className="space-y-2">
            <Label>Change Password</Label>
            <Input className="neu-inset rounded-xl border-none" type="password" placeholder="New password" />
          </div>
          <Button>Update Account</Button>
        </div>
      </div>
    </div>
  );
}
