import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, CheckCircle, XCircle, FileText } from "lucide-react";
import { useState } from "react";

const applications = [
  { id: 1, name: "Priya Patel", program: "BCA", date: "2026-04-01", status: "pending" },
  { id: 2, name: "Raj Mehta", program: "BBA (Hons.)", date: "2026-03-30", status: "pending" },
  { id: 3, name: "Anita Shah", program: "BCom (Hons.)", date: "2026-03-28", status: "approved" },
  { id: 4, name: "Kiran Desai", program: "MBA", date: "2026-03-27", status: "pending" },
  { id: 5, name: "Sanjay Joshi", program: "MCom", date: "2026-03-25", status: "rejected" },
  { id: 6, name: "Neha Trivedi", program: "BBA - Digital Marketing", date: "2026-03-24", status: "approved" },
];

const stats = [
  { label: "Total Applications", value: "342", icon: FileText, color: "from-primary to-primary/60" },
  { label: "Pending Review", value: "58", icon: Eye, color: "from-warning to-warning/60" },
  { label: "Approved", value: "264", icon: CheckCircle, color: "from-success to-success/60" },
  { label: "Rejected", value: "20", icon: XCircle, color: "from-destructive to-destructive/60" },
];

export default function AdmissionsPage() {
  const [search, setSearch] = useState("");
  const filtered = applications.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) || a.program.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold gradient-text">Admissions</h2>
        <p className="text-muted-foreground text-sm mt-1">Manage student admission applications</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.label} className="clay clay-hover p-5 flex items-center gap-4">
            <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
              <stat.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">{stat.label}</p>
              <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search applications..." className="pl-9 neu-inset rounded-xl border-none" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="skeu-surface rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-border/50">
          <h3 className="text-base font-bold text-foreground">Recent Applications</h3>
        </div>
        <div className="divide-y divide-border/50">
          {filtered.map((app) => (
            <div key={app.id} className="flex items-center justify-between p-5 hover:bg-accent/30 transition-all group">
              <div className="flex items-center gap-3.5">
                <div className="h-9 w-9 rounded-xl glass-tint flex items-center justify-center text-primary font-bold text-xs">
                  {app.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{app.name}</p>
                  <p className="text-[11px] text-muted-foreground">{app.program} • Applied {app.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={app.status === "approved" ? "default" : app.status === "rejected" ? "destructive" : "secondary"}>
                  {app.status}
                </Badge>
                <Button variant="outline" size="sm"><Eye className="h-3 w-3 mr-1" />View</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
