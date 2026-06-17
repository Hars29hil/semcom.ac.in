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
  const [filterBatch, setFilterBatch] = useState("All");
  const [filterProgram, setFilterProgram] = useState("All");

  const batches = ["All", ...new Set(alumni.map(a => a.batch))].sort();
  const programs = ["All", "BBA", "BBA (ITM)", "BCom", "BCA", "MCom", "PhD"];

  const filtered = alumni.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || 
                          a.company.toLowerCase().includes(search.toLowerCase());
    const matchesBatch = filterBatch === "All" || a.batch === filterBatch;
    const matchesProgram = filterProgram === "All" || a.program === filterProgram;
    return matchesSearch && matchesBatch && matchesProgram;
  });

  return (
    <div className="space-y-6 text-slate-900 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Alumni</h2>
          <p className="text-slate-500 text-sm mt-1">Manage alumni network and records</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-white/80 backdrop-blur-md" onClick={() => {
            const headers = ["Name", "Batch", "Program", "Company", "Role"];
            const csvData = filtered.map((a) => [a.name, a.batch, a.program, a.company, a.role]);
            const csvContent = [headers, ...csvData].map(e => e.join(",")).join("\n");
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `alumni_data_${new Date().toISOString().split('T')[0]}.csv`;
            a.click();
          }}>Download Directory</Button>
          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all hover:bg-accent/90 gap-1.5 py-1.5 px-3"><UserCheck className="h-3.5 w-3.5" />5,200+ Alumni</Badge>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input placeholder="Search alumni..." className="pl-9 border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md focus-visible:bg-white/80 focus-visible:ring-2 focus-visible:ring-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 h-11" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <select 
          value={filterBatch} 
          onChange={(e) => setFilterBatch(e.target.value)}
          className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md shadow-sm h-11 px-6 text-xs font-bold focus:ring-2 focus:ring-white/30 outline-none text-slate-900 [color-scheme:light]"
        >
          <option value="All" className="bg-white text-slate-900">All Years</option>
          {batches.filter(b => b !== "All").map(b => <option key={b} value={b} className="bg-white text-slate-900">Batch {b}</option>)}
        </select>

        <select 
          value={filterProgram} 
          onChange={(e) => setFilterProgram(e.target.value)}
          className="rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md shadow-sm h-11 px-6 text-xs font-bold focus:ring-2 focus:ring-white/30 outline-none text-slate-900 [color-scheme:light]"
        >
          {programs.map(p => <option key={p} value={p} className="bg-white text-slate-900">{p}</option>)}
        </select>
      </div>

      <div className="admin-glass-panel overflow-hidden">
        <div className="p-5 border-b border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <h3 className="text-base font-bold text-slate-900">Alumni Directory</h3>
        </div>
        <div className="divide-y divide-white/10">
          {filtered.map((a, i) => (
            <div key={a.id} className="flex items-center justify-between p-5 hover:bg-white/80 backdrop-blur-md transition-all group">
              <div className="flex items-center gap-3.5">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-slate-900 font-bold text-xs shadow-md border border-white`}>
                  {a.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-accent transition-colors">{a.name}</p>
                  <p className="text-[11px] text-slate-500">{a.program} • Batch {a.batch} • {a.role} at {a.company}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-white text-slate-900 hover:bg-white/80 hover:text-slate-900 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity"><Eye className="h-3 w-3 mr-1" />View</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
