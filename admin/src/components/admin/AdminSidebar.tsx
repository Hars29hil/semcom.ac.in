import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileText,
  Image,
  Award,
  Briefcase,
  Calendar,
  Bell,
  Settings,
  BookOpen,
  UserCheck,
  Phone,
  FlaskConical,
  LogOut,
  Trophy,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { getAuthUser } from "@/lib/auth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { logout } from "@/lib/auth";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Announcements", url: "/announcements", icon: Bell },
  { title: "Events", url: "/events", icon: Calendar },
];

const academicItems = [
  { title: "Programs", url: "/programs", icon: GraduationCap },
  { title: "Admissions", url: "/admissions", icon: FileText },
  { title: "Research", url: "/research", icon: FlaskConical },
  { title: "Faculty", url: "/faculty", icon: BookOpen },
];

const communityItems = [
  { title: "Students", url: "/students", icon: Users },
  { title: "Alumni", url: "/alumni", icon: UserCheck },
  { title: "Placements", url: "/placements", icon: Briefcase },
];

const contentItems = [
  { title: "Gallery", url: "/gallery", icon: Image },
  { title: "Accreditations", url: "/accreditations", icon: Award },
  { title: "Contact Info", url: "/contact", icon: Phone },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const renderGroup = (label: string, items: typeof mainItems) => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sidebar-foreground/40 uppercase text-[10px] tracking-[0.2em] font-bold mb-1">
        {!collapsed && label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = location.pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.url}
                    end
                    className={`group relative rounded-xl transition-all duration-300 ${
                      active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-lg shadow-sidebar-accent/20"
                        : "hover:bg-sidebar-accent/40 text-sidebar-foreground/80 hover:text-sidebar-foreground"
                    }`}
                    activeClassName=""
                  >
                    <item.icon className={`mr-2.5 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                      active ? "text-sidebar-accent-foreground" : ""
                    }`} />
                    {!collapsed && (
                      <span className="font-medium text-[13px]">{item.title}</span>
                    )}
                    {active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-sidebar-primary" />
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader className="p-5 border-b border-sidebar-border/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-sidebar-primary to-sidebar-primary/80 flex items-center justify-center shrink-0 shadow-lg shadow-sidebar-primary/20 animate-float">
            <GraduationCap className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-extrabold text-sm text-sidebar-foreground tracking-wide">SEMCOM</h2>
              <p className="text-[10px] text-sidebar-foreground/50 font-medium">Admin Panel</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-3 px-2">
        {getAuthUser()?.role === 'admin' ? (
          <>
            {renderGroup("Overview", mainItems)}
            {renderGroup("Academics", academicItems)}
            {renderGroup("Community", communityItems)}
            {renderGroup("Content", contentItems)}
          </>
        ) : (
          renderGroup("Profile Management", [
            { title: "Personal Synopsis", url: "/counsellor#synopsis", icon: UserCheck },
            { title: "Achievement Records", url: "/counsellor#achievements", icon: Trophy },
            { title: "Career Path", url: "/counsellor#trajectory", icon: Briefcase },
          ])
        )}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={() => logout()}
              className="w-full text-destructive hover:text-white hover:bg-destructive rounded-xl transition-all duration-300 font-bold"
            >
              <LogOut className="mr-2 h-4 w-4" />
              {!collapsed && <span>Logout Session</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
