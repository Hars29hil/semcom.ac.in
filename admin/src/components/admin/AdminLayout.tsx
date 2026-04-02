import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Bell, Search } from "lucide-react";
import { getAuthUser } from "@/lib/auth";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 flex items-center justify-between glass-strong border-b border-border/50 px-6 shrink-0 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="neu rounded-xl h-9 w-9 flex items-center justify-center hover:shadow-lg transition-all" />
              <div>
                <h1 className="text-sm font-bold text-foreground">
                  {getAuthUser()?.role === 'admin' ? "SEMCOM Admin" : "Counsellor Portal"}
                </h1>
                <p className="text-[10px] text-muted-foreground">{getAuthUser()?.name || "CVM University"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="neu-inset rounded-xl px-3 py-2 flex items-center gap-2 hidden sm:flex">
                <Search className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Search...</span>
              </div>
              <button className="relative neu rounded-xl h-9 w-9 flex items-center justify-center neu-hover">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-destructive badge-glow" />
              </button>
              <div className="h-9 w-9 rounded-2xl clay-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                {getAuthUser()?.name?.charAt(0) || "U"}
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
