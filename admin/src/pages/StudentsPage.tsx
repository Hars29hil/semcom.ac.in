import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Users, Loader2 } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { studentApi } from "@/lib/api";

const colors = ["from-primary to-info", "from-info to-success", "from-success to-warning", "from-warning to-primary"];

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const { data: studentResponse, isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: studentApi.getAll,
  });

  const students = studentResponse?.success ? studentResponse.data : [];

  const filtered = students.filter((s: any) =>
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    (s.dept && s.dept.toLowerCase().includes(search.toLowerCase())) ||
    (s.enrollment_number && s.enrollment_number.includes(search))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold gradient-text">Students</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage student records and information</p>
        </div>
        <Badge variant="secondary" className="gap-1.5 py-1.5 px-3">
          <Users className="h-3.5 w-3.5" />
          {students.length} Loaded
        </Badge>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search students..." 
          className="pl-9 neu-inset rounded-xl border-none" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <div className="skeu-surface rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-border/50">
          <h3 className="text-base font-bold text-foreground">Student Directory</h3>
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center p-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="p-10 text-center text-destructive">
            <p className="font-bold">Failed to load student data</p>
            <p className="text-sm">Please ensure the backend server is running.</p>
          </div>
        ) : (
          <div className="divide-y divide-border/50">
            {filtered.map((s: any, i: number) => (
              <div key={s.id} className="flex items-center justify-between p-5 hover:bg-accent/30 transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-primary-foreground font-bold text-xs shadow-md`}>
                    {s.name ? s.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2) : 'ST'}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{s.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {s.dept || 'Department N/A'} • Sem {s.sem || 'N/A'} • {s.enrollment_number}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">
                    active
                  </Badge>
                  <Button variant="outline" size="sm"><Eye className="h-3 w-3 mr-1" />View</Button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="p-20 text-center text-muted-foreground">
                No students found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
