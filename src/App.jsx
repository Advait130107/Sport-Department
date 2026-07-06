import { Routes, Route, Navigate } from "react-router-dom";
import MyEventsPage from "./pages/MyEventsPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SportsPage from "./pages/SportsPage";
import SportDetailsPage from "./pages/SportDetailsPage";
import EventsPage from "./pages/EventsPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ProfilePage from "./pages/ProfilePage";
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
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />

        {/* Sports */}
        <Route
          path="/dashboard/sports"
          element={
            <DashboardLayout>
              <SportsPage />
            </DashboardLayout>
          }
        />

        {/* Sport Details */}
        <Route
          path="/dashboard/sports/:sportId"
          element={
            <DashboardLayout>
              <SportDetailsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/events"
          element={
            <DashboardLayout>
              <EventsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <DashboardLayout>
              <ProfilePage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/my-events"
          element={
            <DashboardLayout>
              <MyEventsPage />
            </DashboardLayout>
          }
        />
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
