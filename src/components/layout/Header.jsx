import { Link, useNavigate } from "react-router-dom";
import { Dumbbell, LogOut, Bell, UserCircle2 } from "lucide-react";

import { NavLinks } from "./NavLinks";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("studentRollNo");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 px-6 py-2 bg-[#0a0603] ">
      <div className="mx-auto flex  items-center justify-between rounded-3xl border border-[#5b4537] bg-[#2B211B]/80 px-8 py-4 shadow-2xl backdrop-blur-xl">
        {/* Logo */}

        <Link to="/dashboard" className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A47149] to-[#D4A373] shadow-lg">
            <Dumbbell className="h-7 w-7 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-black text-[#F8F4EE]">
              Sports Department
            </h1>

            <p className="text-xs text-[#C9B7A6]">
              MES Abasaheb Garware College
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <NavLinks />

        {/* Right Side */}

        <div className="flex items-center gap-4">
          <button className="rounded-xl bg-[#3A2C24] p-3 transition hover:bg-[#4B392F]">
            <Bell size={20} className="text-[#D4A373]" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl bg-[#3A2C24] px-4 py-2">
            <UserCircle2 size={34} className="text-[#D4A373]" />

            <div>
              <p className="text-sm font-semibold text-[#F8F4EE]">Student</p>

              <p className="text-xs text-[#C9B7A6]">Sports Member</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#A47149] to-[#D4A373] px-5 py-3 font-semibold text-white transition duration-300 hover:scale-105"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
