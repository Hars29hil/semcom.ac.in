import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Briefcase, Calendar, TrendingUp, FileText, Image, Bell, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { statsApi } from "@/lib/api";

const recentActivities = [
  { action: "New admission application received", time: "2 min ago", type: "admission" },
  { action: "Faculty meeting scheduled for April 5", time: "1 hour ago", type: "event" },
  { action: "Placement drive by TCS confirmed", time: "3 hours ago", type: "placement" },
  { action: "NAAC accreditation document uploaded", time: "5 hours ago", type: "accreditation" },
];

const quickActions = [
  { label: "Add Announcement", icon: Bell, desc: "Post new notice" },
  { label: "New Event", icon: Calendar, desc: "Schedule activity" },
  { label: "Upload Photos", icon: Image, desc: "Gallery update" },
  { label: "View Applications", icon: FileText, desc: "Review pending" },
];

export default function DashboardPage() {
  const { data: statsResponse, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: statsApi.getSummary,
  });

  const apiStats = statsResponse?.success ? statsResponse.data : null;

  const stats = [
    { 
      label: "Programs", 
      value: apiStats?.totalPrograms?.toString() || "...", 
      icon: GraduationCap, 
      change: "Active", 
      color: "from-blue-500 to-blue-300" 
    },
    { 
      label: "Faculty", 
      value: apiStats?.totalFaculty?.toString() || "...", 
      icon: Briefcase, 
      change: "Staff", 
      color: "from-emerald-500 to-emerald-300" 
    },
    { 
      label: "Events", 
      value: apiStats?.totalEvents?.toString() || "...", 
      icon: Calendar, 
      change: "Upcoming", 
      color: "from-amber-500 to-amber-300" 
    },
  ];

  return (
    <div className="space-y-8 text-slate-900">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900">Dashboard</h2>
        <p className="text-slate-500 text-sm mt-1">Welcome back! Here's an overview of SEMCOM.</p>
      </div>

      {/* Stats - Glass cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-glass-card hover:-translate-y-1 transition-all p-5 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">{stat.label}</p>
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin mt-1.5 text-slate-500" />
                ) : (
                  <p className="text-3xl font-extrabold text-slate-900 mt-1.5">{stat.value}</p>
                )}
              </div>
              <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-5 w-5 text-slate-900" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-semibold">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions - Glass buttons */}
        <div className="admin-glass-card p-6">
          <h3 className="text-base font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="w-full flex items-center gap-3.5 p-3.5 rounded-xl border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] bg-white/80 backdrop-blur-md hover:bg-white/80 transition-all text-left group"
              >
                <div className="h-9 w-9 rounded-xl bg-accent shadow-lg shadow-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <action.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-900">{action.label}</span>
                  <p className="text-[10px] text-slate-500">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity - Glass card */}
        <div className="admin-glass-card p-6 lg:col-span-2">
          <div className="flex flex-row items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900">Recent Activity</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/80 px-2 py-1 rounded-md text-slate-900 border border-white">Live Updates</span>
          </div>
          <div>
            <div className="space-y-1">
              {recentActivities.slice(0, 5).map((activity, i) => (
                <div key={i} className="flex items-start justify-between gap-3 py-3 border-b border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] last:border-0 group hover:bg-white/80 backdrop-blur-md rounded-lg px-2 -mx-2 transition-colors">
                  <div>
                    <p className="text-sm text-slate-900 group-hover:text-accent transition-colors font-medium">{activity.action}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{activity.time}</p>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-tighter shrink-0 h-5 bg-white/80 px-2 rounded flex items-center justify-center text-slate-700">{activity.type}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2.5 text-xs font-black text-accent uppercase tracking-[0.2em] border border-dashed border-accent/30 rounded-xl hover:bg-accent/10 transition-colors">
              View Audit Log
            </button>
          </div>
        </div>
      </div>

      {/* Programs Overview */}
      <div className="admin-glass-card p-6">
        <h3 className="text-base font-bold text-slate-900 mb-4">Institutional Programs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { name: "BBA (Hons.)" },
            { name: "BCA" },
            { name: "BCom (Hons.)" },
            { name: "BBA (ITM)" },
            { name: "MCom" },
            { name: "MBA" },
            { name: "BBA - Analytics" },
            { name: "Ph.D." },
          ].map((prog) => (
            <div key={prog.name} className="bg-white/80 backdrop-blur-md border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] rounded-xl p-3.5 group cursor-pointer hover:bg-white/80 transition-all">
              <p className="text-sm font-semibold text-slate-900">{prog.name}</p>
              <p className="text-xs text-accent mt-1">View Details</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
