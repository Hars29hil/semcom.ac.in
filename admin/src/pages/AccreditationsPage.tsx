import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Award } from "lucide-react";

const accreditations = [
  { id: 1, name: "NAAC Grade 'A'", body: "NAAC", period: "2009-2020", status: "expired", description: "National Assessment and Accreditation Council" },
  { id: 2, name: "CVM University Affiliation", body: "CVM University", period: "1997-Present", status: "active", description: "Affiliated to The Charutar Vidya Mandal University" },
  { id: 3, name: "UGC Recognition", body: "UGC", period: "2000-Present", status: "active", description: "Recognized by University Grants Commission" },
  { id: 4, name: "ISO 9001:2015", body: "ISO", period: "2020-2025", status: "active", description: "Quality Management System Certification" },
];

const rankings = [
  { id: 1, title: "Top 50 Commerce Colleges in Gujarat", source: "Education World", year: "2025" },
  { id: 2, title: "Best BCA Programs - Western India", source: "India Today", year: "2025" },
  { id: 3, title: "Leadership Legacy of 75 Years", source: "CVM University", year: "2024" },
];

export default function AccreditationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Accreditations & Rankings</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage accreditations, certifications and rankings</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" />Add</Button>
      </div>

      <h3 className="font-bold text-foreground text-lg">Accreditations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {accreditations.map((a) => (
          <div key={a.id} className="clay clay-hover p-5 group">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl clay-primary flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{a.name}</h4>
              </div>
              <Badge variant={a.status === "active" ? "default" : "destructive"}>{a.status}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{a.description}</p>
            <p className="text-[11px] text-muted-foreground mt-1 font-medium">{a.body} • {a.period}</p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm"><Edit className="h-3 w-3 mr-1" />Edit</Button>
              <Button variant="ghost" size="icon" className="h-9 w-9"><Trash2 className="h-3.5 w-3.5 text-destructive" /></Button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-foreground text-lg pt-2">Rankings</h3>
      <div className="skeu-surface rounded-2xl overflow-hidden">
        <div className="divide-y divide-border/50">
          {rankings.map((r) => (
            <div key={r.id} className="flex items-center justify-between p-5 hover:bg-accent/30 transition-all group">
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{r.title}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{r.source} • {r.year}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
