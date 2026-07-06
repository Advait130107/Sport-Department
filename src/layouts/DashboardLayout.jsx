import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#1C1511]">
      <Header />

      <main className="flex-1 pb-20">{children}</main>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
