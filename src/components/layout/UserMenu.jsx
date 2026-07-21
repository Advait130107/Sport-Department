import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircle2,
  User,
  CalendarDays,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { getCurrentStudent, logoutStudent } from "../../auth/storage";

export function UserMenu() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const student = getCurrentStudent();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutStudent();
    navigate("/");
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* User Card */}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-2xl bg-[#3A2C24] px-4 py-2 transition hover:bg-[#4B392F]"
      >
        <UserCircle2 size={36} className="text-[#D4A373]" />

        <div className="text-left">
          <p className="font-semibold text-[#F8F4EE]">
            {student?.name || "Student"}
          </p>

          <p className="text-xs text-[#C9B7A6]">
            {student?.course || "Sports Member"}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`text-[#D4A373] transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-[#5b4537] bg-[#2B211B] shadow-2xl">
          <div className="border-b border-[#5b4537] p-4">
            <p className="font-bold text-white">{student?.name}</p>

            <p className="text-sm text-[#C9B7A6]">{student?.rollNo}</p>
          </div>

          <button
            onClick={() => navigate("/profile")}
            className="flex w-full items-center gap-3 px-5 py-3 text-left text-[#F8F4EE] transition hover:bg-[#3A2C24]"
          >
            <User size={18} />
            My Profile
          </button>

          <button className="flex w-full items-center gap-3 px-5 py-3 text-left text-[#F8F4EE] transition hover:bg-[#3A2C24]">
            <Settings size={18} />
            Settings
          </button>

          <div className="border-t border-[#5b4537]" />

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-5 py-3 text-left text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
