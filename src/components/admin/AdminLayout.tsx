import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Bell, Search } from "lucide-react";
import { getAuthUser } from "@/lib/auth";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-[#FAFAFA] relative overflow-hidden">
      <AdminSidebar />
      <SidebarInset className="flex flex-col min-w-0 bg-transparent relative z-10">
          {/* Ultra-Premium Ambient Background Orbs */}
          <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/60 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />
          <div className="fixed top-[40%] left-[20%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />

          <header className="h-16 flex items-center justify-between admin-glass-header px-6 shrink-0 sticky top-0 z-20">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="bg-white/60 backdrop-blur-xl border border-slate-200 shadow-sm text-slate-700 rounded-xl h-9 w-9 flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 transition-all" />
              <div>
                <h1 className="text-sm font-bold text-slate-800">
                  {getAuthUser()?.role === 'admin' ? "SEMCOM Admin" : "Counsellor Portal"}
                </h1>
                <p className="text-[10px] text-slate-500">{getAuthUser()?.name || "CVM University"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="border border-slate-200 bg-white/60 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 rounded-xl px-3 py-2 flex items-center gap-2 hidden sm:flex transition-all shadow-sm">
                <Search className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-xs text-slate-500 font-medium">Search...</span>
              </div>
              <button className="relative bg-white/60 backdrop-blur-xl border border-slate-200 shadow-sm rounded-xl h-9 w-9 flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 transition-all group">
                <Bell className="h-4 w-4 text-slate-500 group-hover:text-slate-800 transition-colors" />
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-blue-500 border-2 border-white animate-pulse" />
              </button>
              <div className="h-9 w-9 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white font-bold text-xs hover:scale-105 transition-transform cursor-pointer">
                {getAuthUser()?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6 md:p-8 overflow-auto relative z-10">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
