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
    <div className="space-y-6 text-primary pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-primary">Accreditations & Rankings</h2>
          <p className="text-muted text-sm mt-1">Manage accreditations, certifications and rankings</p>
        </div>
        <Button className="rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90"><Plus className="h-4 w-4 mr-2" />Add</Button>
      </div>

      <h3 className="font-bold text-primary text-lg">Accreditations</h3>
      <div className="flex flex-col gap-3">
        {accreditations.map((a) => (
          <div key={a.id} className="admin-glass-card hover:bg-surface/50 transition-all p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border group">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-primary text-sm group-hover:text-accent transition-colors truncate">{a.name}</h4>
                  <Badge className={a.status === "active" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90" : "bg-red-400/20 text-red-400 hover:bg-red-400/30"}>{a.status}</Badge>
                </div>
                <p className="text-xs text-muted truncate">{a.description}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 font-medium truncate">{a.body} • {a.period}</p>
              </div>
            </div>
            
            <div className="flex gap-2 shrink-0 justify-end mt-2 md:mt-0">
              <Button variant="outline" size="sm" className="rounded-xl h-9 border-border text-primary hover:bg-surface hover:text-primary bg-transparent"><Edit className="h-3 w-3 mr-1.5" />Edit</Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20"><Trash2 className="h-3.5 w-3.5" /></Button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-primary text-lg pt-2">Rankings</h3>
      <div className="admin-glass-panel overflow-hidden">
        <div className="divide-y divide-white/10">
          {rankings.map((r) => (
            <div key={r.id} className="flex items-center justify-between p-5 hover:bg-surface transition-all group">
              <div>
                <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{r.title}</p>
                <p className="text-[11px] text-muted mt-0.5">{r.source} • {r.year}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-primary hover:bg-surface hover:text-primary"><Edit className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/20"><Trash2 className="h-4 w-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
