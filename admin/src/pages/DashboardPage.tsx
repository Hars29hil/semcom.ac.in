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
      label: "Total Students", 
      value: apiStats?.totalStudents?.toString() || "...", 
      icon: Users, 
      change: "+12%", 
      color: "from-primary to-primary/70" 
    },
    { 
      label: "Programs", 
      value: apiStats?.totalPrograms?.toString() || "...", 
      icon: GraduationCap, 
      change: "Active", 
      color: "from-info to-info/70" 
    },
    { 
      label: "Faculty", 
      value: apiStats?.totalFaculty?.toString() || "...", 
      icon: Briefcase, 
      change: "Staff", 
      color: "from-success to-success/70" 
    },
    { 
      label: "Events", 
      value: apiStats?.totalEvents?.toString() || "...", 
      icon: Calendar, 
      change: "Upcoming", 
      color: "from-warning to-warning/70" 
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold gradient-text">Dashboard</h2>
        <p className="text-muted-foreground text-sm mt-1">Welcome back! Here's an overview of SEMCOM.</p>
      </div>

      {/* Stats - Claymorphism cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.label} className="clay clay-hover p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">{stat.label}</p>
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin mt-1.5 text-muted-foreground" />
                ) : (
                  <p className="text-3xl font-extrabold text-foreground mt-1.5">{stat.value}</p>
                )}
              </div>
              <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                <stat.icon className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-success" />
              <span className="text-xs text-success font-semibold">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions - Neumorphism buttons */}
        <div className="neu rounded-2xl p-6">
          <h3 className="text-base font-bold text-foreground mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="w-full flex items-center gap-3.5 p-3.5 rounded-xl neu-inset neu-hover text-left group"
              >
                <div className="h-9 w-9 rounded-xl clay-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <action.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">{action.label}</span>
                  <p className="text-[10px] text-muted-foreground">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity - Glass card */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {recentActivities.map((activity, i) => (
                <div key={i} className="flex items-start justify-between gap-3 py-3 border-b border-border/50 last:border-0 group hover:bg-accent/30 rounded-lg px-2 -mx-2 transition-colors">
                  <div>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">{activity.action}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="text-[10px] shrink-0">{activity.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Programs Overview */}
      <div className="skeu-surface rounded-2xl p-6">
        <h3 className="text-base font-bold text-foreground mb-4">Institutional Programs</h3>
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
            <div key={prog.name} className="glass-tint rounded-xl p-3.5 group cursor-pointer hover:scale-[1.02] transition-all">
              <p className="text-sm font-semibold text-foreground">{prog.name}</p>
              <p className="text-xs text-muted-foreground mt-1 text-primary">View Details</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
