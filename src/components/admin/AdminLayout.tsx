import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Bell, Search } from "lucide-react";
import { getAuthUser } from "@/lib/auth";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-background relative overflow-hidden">
      <AdminSidebar />
      <SidebarInset className="flex flex-col min-w-0 bg-transparent relative z-10">
          <header className="h-16 flex items-center justify-between bg-surface border-b border-border px-6 shrink-0 sticky top-0 z-20">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="bg-surface border border-border shadow-sm text-primary rounded-xl h-9 w-9 flex items-center justify-center hover:bg-background transition-all" />
              <div>
                <h1 className="text-sm font-bold text-primary">
                  {getAuthUser()?.role === 'admin' ? "SEMCOM Admin" : "Counsellor Portal"}
                </h1>
                <p className="text-[10px] text-muted">{getAuthUser()?.name || "CVM University"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="border border-border bg-surface focus-within:ring-2 focus-within:ring-primary/20 rounded-xl px-3 py-2 flex items-center gap-2 hidden sm:flex transition-all shadow-sm">
                <Search className="h-3.5 w-3.5 text-muted" />
                <span className="text-xs text-muted font-medium">Search...</span>
              </div>
              <button className="relative bg-surface border border-border shadow-sm rounded-xl h-9 w-9 flex items-center justify-center hover:bg-background hover:text-primary transition-all group">
                <Bell className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-secondary border-2 border-white animate-pulse" />
              </button>
              <div className="h-9 w-9 rounded-xl bg-primary shadow-sm flex items-center justify-center text-white font-bold text-xs hover:scale-105 transition-transform cursor-pointer">
                {getAuthUser()?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6 md:p-8 overflow-auto relative z-10">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
