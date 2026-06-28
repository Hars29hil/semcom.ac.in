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
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Announcements", url: "/admin/announcements", icon: Bell },
  { title: "Events", url: "/admin/events", icon: Calendar },
  { title: "Press Notes", url: "/admin/press-notes", icon: FileText },
];

const academicItems = [
  { title: "Programs", url: "/admin/programs", icon: GraduationCap },
  { title: "Research", url: "/admin/research", icon: FlaskConical },
  { title: "Faculty", url: "/admin/faculty", icon: BookOpen },
];

const communityItems = [
  { title: "Alumni", url: "/admin/alumni", icon: UserCheck },
];

const contentItems = [
  { title: "Gallery", url: "/admin/gallery", icon: Image },
  { title: "Fixed Images", url: "/admin/fixed-images", icon: Image },
  { title: "Inquiries & Forms", url: "/admin/inquiries", icon: FileText },
  { title: "Accreditations", url: "/admin/accreditations", icon: Award },
  { title: "Contact Info", url: "/admin/contact", icon: Phone },
  { title: "Settings", url: "/admin/settings", icon: Settings },
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
                <SidebarMenuButton asChild tooltip={item.title}>
                  <NavLink
                    to={item.url}
                    end
                    className={`group relative rounded-xl transition-all duration-300 flex items-center ${
                      collapsed ? "justify-center" : ""
                    } ${
                      active
                        ? "bg-secondary text-white shadow-md shadow-secondary/30"
                        : "hover:bg-background text-muted hover:text-primary"
                    }`}
                    activeClassName=""
                  >
                    <item.icon className={`${collapsed ? "" : "mr-2.5"} h-[18px] w-[18px] shrink-0 transition-transform duration-200 ${
                      active && !collapsed ? "group-hover:scale-110" : ""
                    } ${
                      active ? "text-white" : ""
                    }`} />
                    {!collapsed && (
                      <span className="font-semibold text-sm">{item.title}</span>
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
    <Sidebar collapsible="icon" className="border-none bg-surface">
      <SidebarHeader className={`border-b border-border ${collapsed ? "p-2 py-4" : "p-5"}`}>
        <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
          <div className={`rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shrink-0 shadow-sm ${collapsed ? "w-8 h-8" : "w-9 h-9"}`}>
            <GraduationCap className={`text-white ${collapsed ? "h-4 w-4" : "h-5 w-5"}`} />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-extrabold text-sm text-primary tracking-wide">SEMCOM</h2>
              <p className="text-[10px] text-muted font-medium">Admin Panel</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-3 px-2">
        {(() => {
          const role = getAuthUser()?.role;
          if (role === 'admin') {
            return (
              <>
                {renderGroup("Overview", mainItems)}
                {renderGroup("Academics", academicItems)}
                {renderGroup("Community", communityItems)}
                {renderGroup("Content", contentItems)}
              </>
            );
          }
          if (role === 'librarian') {
            return (
              <>
                {renderGroup("Operations", [
                  { title: "Announcements", url: "/admin/announcements", icon: Bell },
                  { title: "Events", url: "/admin/events", icon: Calendar },
                  { title: "Press Notes", url: "/admin/press-notes", icon: FileText },
                ])}
              </>
            );
          }
          if (role === 'vp') {
            return (
              <>
                {renderGroup("Administration", [
                  { title: "Faculty & Staff", url: "/admin/faculty", icon: Users },
                ])}
              </>
            );
          }
          return (
            <>
              {renderGroup("Profile Management", [
                { title: "Personal Synopsis", url: "/admin/counsellor#synopsis", icon: UserCheck },
                { title: "Achievement Records", url: "/admin/counsellor#achievements", icon: Trophy },
                { title: "Career Path", url: "/admin/counsellor#trajectory", icon: Briefcase },
              ])}
              {renderGroup("Operations", [
                { title: "Events", url: "/admin/faculty/event", icon: Calendar },
                { title: "Press Notes", url: "/admin/faculty-press-notes", icon: FileText },
                { title: "Announcements", url: "/admin/faculty-announcements", icon: Bell },
              ])}
            </>
          );
        })()}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={() => logout()}
              tooltip="Logout Session"
              className={`w-full text-red-500 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-300 font-bold flex items-center ${collapsed ? "justify-center" : ""}`}
            >
              <LogOut className={`${collapsed ? "" : "mr-2"} h-[18px] w-[18px]`} />
              {!collapsed && <span>Logout Session</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
