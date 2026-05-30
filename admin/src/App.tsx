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
import AlumniPage from "./pages/AlumniPage";
import PressNotesPage from "./pages/PressNotesPage";
import GalleryPage from "./pages/GalleryPage";
import AccreditationsPage from "./pages/AccreditationsPage";
import ContactPage from "./pages/ContactPage";
import SettingsPage from "./pages/SettingsPage";
import CounsellorPage from "./pages/CounsellorPage";
import CouncilPage from "./pages/CouncilPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Auth Guard Component
const AuthGuard = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const user = getAuthUser();
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/" replace />;
    if (user.role === 'librarian') return <Navigate to="/announcements" replace />;
    if (user.role === 'vp') return <Navigate to="/faculty" replace />;
    return <Navigate to="/counsellor" replace />;
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
          {/* Admin Routes */}
          <Route path="/" element={<AuthGuard allowedRoles={['admin']}><DashboardPage /></AuthGuard>} />
          <Route path="/announcements" element={<AuthGuard allowedRoles={['admin', 'librarian']}><AnnouncementsPage /></AuthGuard>} />
          <Route path="/events" element={<AuthGuard allowedRoles={['admin', 'librarian']}><EventsPage /></AuthGuard>} />
          <Route path="/press-notes" element={<AuthGuard allowedRoles={['admin', 'librarian']}><PressNotesPage /></AuthGuard>} />
          <Route path="/programs" element={<AuthGuard allowedRoles={['admin']}><ProgramsPage /></AuthGuard>} />
          <Route path="/admissions" element={<AuthGuard allowedRoles={['admin']}><AdmissionsPage /></AuthGuard>} />
          <Route path="/research" element={<AuthGuard allowedRoles={['admin']}><ResearchPage /></AuthGuard>} />
          <Route path="/faculty" element={<AuthGuard allowedRoles={['admin', 'vp']}><FacultyPage /></AuthGuard>} />
          <Route path="/alumni" element={<AuthGuard allowedRoles={['admin']}><AlumniPage /></AuthGuard>} />
          <Route path="/gallery" element={<AuthGuard allowedRoles={['admin']}><GalleryPage /></AuthGuard>} />
          <Route path="/accreditations" element={<AuthGuard allowedRoles={['admin']}><AccreditationsPage /></AuthGuard>} />
          <Route path="/contact" element={<AuthGuard allowedRoles={['admin']}><ContactPage /></AuthGuard>} />
          <Route path="/settings" element={<AuthGuard allowedRoles={['admin']}><SettingsPage /></AuthGuard>} />
          
          <Route path="/council" element={<AuthGuard allowedRoles={['admin']}><CouncilPage /></AuthGuard>} />

          {/* Counsellor Route */}
          <Route path="/counsellor" element={<AuthGuard allowedRoles={['counsellor']}><CounsellorPage /></AuthGuard>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
