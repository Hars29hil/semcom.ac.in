import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { getAuthUser } from "@/lib/auth";

// Pages
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import EventsPage from "./pages/EventsPage";
import ProgramsPage from "./pages/ProgramsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ResearchPage from "./pages/ResearchPage";
import FacultyPage from "./pages/FacultyPage";
import StudentsPage from "./pages/StudentsPage";
import AlumniPage from "./pages/AlumniPage";
import PlacementsPage from "./pages/PlacementsPage";
import GalleryPage from "./pages/GalleryPage";
import AccreditationsPage from "./pages/AccreditationsPage";
import ContactPage from "./pages/ContactPage";
import SettingsPage from "./pages/SettingsPage";
import CounsellorPage from "./pages/CounsellorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Auth Guard Component
const AuthGuard = ({ children, role }: { children: React.ReactNode, role?: 'admin' | 'counsellor' }) => {
  const user = getAuthUser();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) {
    return <Navigate to={user.role === 'admin' ? '/' : '/counsellor'} replace />;
  }
  return <AdminLayout>{children}</AdminLayout>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes */}
          <Route path="/" element={<AuthGuard role="admin"><DashboardPage /></AuthGuard>} />
          <Route path="/announcements" element={<AuthGuard role="admin"><AnnouncementsPage /></AuthGuard>} />
          <Route path="/events" element={<AuthGuard role="admin"><EventsPage /></AuthGuard>} />
          <Route path="/programs" element={<AuthGuard role="admin"><ProgramsPage /></AuthGuard>} />
          <Route path="/admissions" element={<AuthGuard role="admin"><AdmissionsPage /></AuthGuard>} />
          <Route path="/research" element={<AuthGuard role="admin"><ResearchPage /></AuthGuard>} />
          <Route path="/faculty" element={<AuthGuard role="admin"><FacultyPage /></AuthGuard>} />
          <Route path="/students" element={<AuthGuard role="admin"><StudentsPage /></AuthGuard>} />
          <Route path="/alumni" element={<AuthGuard role="admin"><AlumniPage /></AuthGuard>} />
          <Route path="/placements" element={<AuthGuard role="admin"><PlacementsPage /></AuthGuard>} />
          <Route path="/gallery" element={<AuthGuard role="admin"><GalleryPage /></AuthGuard>} />
          <Route path="/accreditations" element={<AuthGuard role="admin"><AccreditationsPage /></AuthGuard>} />
          <Route path="/contact" element={<AuthGuard role="admin"><ContactPage /></AuthGuard>} />
          <Route path="/settings" element={<AuthGuard role="admin"><SettingsPage /></AuthGuard>} />

          {/* Counsellor Route */}
          <Route path="/counsellor" element={<AuthGuard role="counsellor"><CounsellorPage /></AuthGuard>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
