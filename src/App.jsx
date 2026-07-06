import { Routes, Route, Navigate } from "react-router-dom";
import MyEventsPage from "./pages/MyEventsPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SportsPage from "./pages/SportsPage";
import SportDetailsPage from "./pages/SportDetailsPage";
import EventsPage from "./pages/EventsPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard Home */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <DashboardPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Sports */}
        <Route
          path="/dashboard/sports"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <SportsPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Sport Details */}
        <Route
          path="/dashboard/sports/:sportId"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <SportDetailsPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/events"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EventsPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ProfilePage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/my-events"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MyEventsPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
