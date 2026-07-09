import { Link, useNavigate } from "react-router-dom";
import { Bell, Dumbbell } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { UserMenu } from "./UserMenu";
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

        <UserMenu />
      </div>{" "}
    </header>
  );
}
