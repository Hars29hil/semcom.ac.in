import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, UserCheck } from "lucide-react";
import { useState } from "react";

const alumni = [
  { id: 1, name: "Vikram Patel", batch: "2020", program: "BCA", company: "Infosys", role: "Software Engineer" },
  { id: 2, name: "Pooja Shah", batch: "2019", program: "BCom", company: "Deloitte", role: "Auditor" },
  { id: 3, name: "Rohan Mehta", batch: "2021", program: "BBA", company: "HDFC Bank", role: "Manager" },
  { id: 4, name: "Shruti Desai", batch: "2018", program: "MCom", company: "EY", role: "Consultant" },
  { id: 5, name: "Amit Trivedi", batch: "2022", program: "BCA", company: "TCS", role: "Developer" },
  { id: 6, name: "Nidhi Joshi", batch: "2020", program: "BBA (ITM)", company: "Wipro", role: "Analyst" },
];

const colors = ["from-primary to-info", "from-info to-success", "from-success to-warning", "from-warning to-primary"];

export default function AlumniPage() {
  const [search, setSearch] = useState("");
  const filtered = alumni.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) || a.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Alumni</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage alumni network and records</p>
        </div>
        <Badge variant="secondary" className="gap-1.5 py-1.5 px-3"><UserCheck className="h-3.5 w-3.5" />5,200+ Alumni</Badge>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search alumni..." className="pl-9 neu-inset rounded-xl border-none" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="skeu-surface rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-border/50">
          <h3 className="text-base font-bold text-foreground">Alumni Directory</h3>
        </div>
        <div className="divide-y divide-border/50">
          {filtered.map((a, i) => (
            <div key={a.id} className="flex items-center justify-between p-5 hover:bg-accent/30 transition-all group">
              <div className="flex items-center gap-3.5">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-primary-foreground font-bold text-xs shadow-md`}>
                  {a.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{a.name}</p>
                  <p className="text-[11px] text-muted-foreground">{a.program} • Batch {a.batch} • {a.role} at {a.company}</p>
                </div>
              </div>
              <Button variant="outline" size="sm"><Eye className="h-3 w-3 mr-1" />View</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
