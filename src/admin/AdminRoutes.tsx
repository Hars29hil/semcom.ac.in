import { Route, Routes, Navigate } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { getAuthUser, isAuthenticated } from "@/lib/auth";
import ErrorBoundary from "@/components/ErrorBoundary";

// Pages
import LoginPage from "@/pages/admin/LoginPage";
import DashboardPage from "@/pages/admin/DashboardPage";
import AnnouncementsPage from "@/pages/admin/AnnouncementsPage";
import EventsPage from "@/pages/admin/EventsPage";
import ProgramsPage from "@/pages/admin/ProgramsPage";
import AdmissionsPage from "@/pages/admin/AdmissionsPage";
import ResearchPage from "@/pages/admin/ResearchPage";
import FacultyPage from "@/pages/admin/FacultyPage";
import AlumniPage from "@/pages/admin/AlumniPage";
import PressNotesPage from "@/pages/admin/PressNotesPage";
import GalleryPage from "@/pages/admin/GalleryPage";
import AccreditationsPage from "@/pages/admin/AccreditationsPage";
import ContactPage from "@/pages/admin/ContactPage";
import SettingsPage from "@/pages/admin/SettingsPage";
import CounsellorPage from "@/pages/admin/CounsellorPage";
import NotFound from "@/pages/admin/NotFound";

// Auth Guard Component
const AuthGuard = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const user = getAuthUser();
  if (!isAuthenticated() || !user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin" replace />;
    if (user.role === 'librarian') return <Navigate to="/admin/announcements" replace />;
    if (user.role === 'vp') return <Navigate to="/admin/faculty" replace />;
    return <Navigate to="/admin/counsellor" replace />;
  }
  return (
    <ErrorBoundary>
      <AdminLayout>{children}</AdminLayout>
    </ErrorBoundary>
  );
};

export const AdminRoutes = () => (
  <Routes>
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

    {/* Counsellor Route */}
    <Route path="/counsellor" element={<AuthGuard allowedRoles={['counsellor', 'counselor']}><CounsellorPage /></AuthGuard>} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AdminRoutes;
