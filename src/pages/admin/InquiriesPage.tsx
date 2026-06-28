import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/api";
import { Download, Loader2, Mail, Phone, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InquiriesPage() {
  const [activeTab, setActiveTab] = useState("UG_PG_Admission");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const { data: response, isLoading } = useQuery({
    queryKey: ['inquiries', activeTab],
    queryFn: () => fetcher<{ data: any[] }>(`/inquiries?type=${activeTab}`),
  });

  const inquiries = response?.data || [];
  
  const filteredInquiries = inquiries.filter((inquiry: any) => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (inquiry.program && inquiry.program.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const year = new Date(inquiry.created_at).getFullYear().toString();
    const matchesYear = selectedYear === "All" || year === selectedYear;
    
    return matchesSearch && matchesYear;
  });

  const uniqueYears = ["All", ...Array.from(new Set(inquiries.map((inq: any) => new Date(inq.created_at).getFullYear().toString())))].sort((a: any, b: any) => b.localeCompare(a));

  const tabs = [
    { id: "UG_PG_Admission", label: "UG/PG Inquiries" },
    { id: "Foreign_Admission", label: "Foreign Brochure Requests" },
    { id: "Placement_Quick_Inquiry", label: "Placement Quick Inquiries" },
    { id: "Alumni_Registration", label: "Alumni Registrations" },
  ];

  const exportToCSV = () => {
    if (filteredInquiries.length === 0) return;

    // Define standard columns
    const headers = ["ID", "Date", "Name", "Email", "Phone", "City", "Program", "Message"];
    
    // Map data to rows
    const csvRows = filteredInquiries.map((row: any) => {
      const date = new Date(row.created_at).toLocaleString();
      // Escape strings containing quotes or commas
      const mapField = (field: string) => {
        if (!field) return "";
        const str = String(field).replace(/"/g, '""');
        return `"${str}"`;
      };
      
      return [
        row.id,
        mapField(date),
        mapField(row.name),
        mapField(row.email),
        mapField(row.phone),
        mapField(row.city),
        mapField(row.program),
        mapField(row.message)
      ].join(",");
    });

    const csvContent = [headers.join(","), ...csvRows].join("\n");
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `semcom_${activeTab}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 max-w-6xl text-primary pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-primary">Inquiries & Forms</h2>
          <p className="text-muted text-sm mt-1">Manage admission and placement form submissions</p>
        </div>
        
        <Button 
          onClick={exportToCSV}
          disabled={filteredInquiries.length === 0}
          className="rounded-xl shadow-lg bg-green-600 hover:bg-green-700 text-white transition-all cursor-pointer"
        >
          <Download className="h-4 w-4 mr-2" />
          Export to Excel/CSV
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-border">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab.id 
                ? "bg-accent text-primary shadow-md" 
                : "bg-surface text-muted hover:bg-surface-hover"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="text"
            placeholder="Search by name, email, or program..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 rounded-xl border-border bg-surface shadow-sm focus-visible:ring-accent"
          />
        </div>
        
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-2 rounded-xl border-border bg-surface shadow-sm text-sm font-semibold text-primary-light outline-none focus:ring-2 focus:ring-accent w-full sm:w-40"
        >
          {uniqueYears.map((year) => (
            <option key={year} value={year}>{year === "All" ? "All Years" : year}</option>
          ))}
        </select>
        
        <div className="text-sm font-semibold text-muted bg-surface px-4 py-2 rounded-xl border border-border">
          Total Submissions: <span className="text-accent font-black text-lg ml-1">{filteredInquiries.length}</span>
        </div>
      </div>

      {/* Data Table */}
      <div className="admin-glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-background/50 text-muted font-semibold border-b border-border">
              <tr>
                <th className="px-6 py-4 rounded-tl-2xl">Date</th>
                <th className="px-6 py-4">Applicant</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/40">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-accent mx-auto" />
                    <p className="text-muted mt-2 text-xs uppercase tracking-widest font-bold">Loading Data...</p>
                  </td>
                </tr>
              ) : filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <p className="text-muted italic">No inquiries found for this category.</p>
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((inquiry: any) => (
                  <tr key={inquiry.id} className="hover:bg-white/40 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap text-muted text-xs">
                      {new Date(inquiry.created_at).toLocaleDateString()}
                      <br/>
                      <span className="text-[10px] text-muted-foreground">{new Date(inquiry.created_at).toLocaleTimeString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-primary group-hover:text-accent transition-colors">{inquiry.name}</p>
                      {inquiry.program && <p className="text-xs text-secondary mt-1 font-semibold">{inquiry.program}</p>}
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <a href={`mailto:${inquiry.email}`} className="hover:text-accent hover:underline">{inquiry.email}</a>
                      </div>
                      {inquiry.phone && (
                        <div className="flex items-center gap-2 text-xs text-muted">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span>{inquiry.phone}</span>
                        </div>
                      )}
                      {inquiry.city && (
                        <div className="flex items-center gap-2 text-xs text-muted">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span>{inquiry.city}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-xs text-muted max-w-xs">
                      {inquiry.message ? (
                        <div className="bg-surface p-2 rounded-lg border border-border line-clamp-3">
                          {inquiry.message}
                        </div>
                      ) : (
                        <span className="text-muted-foreground italic">No extra details provided</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
