import { Link, useLocation } from "react-router-dom";

const links = [
  {
    path: "/dashboard",
    label: "Home",
  },
  {
    path: "/dashboard/sports",
    label: "Sports",
  },
  {
    path: "/dashboard/events",
    label: "Events",
  },
  {
    path: "/dashboard/my-events",
    label: "My Events",
  },
];

export function NavLinks() {
  const { pathname } = useLocation();

  return (
    <nav className="hidden items-center gap-3 lg:flex">
      {links.map((link) => {
        const active =
          link.path === "/dashboard"
            ? pathname === link.path
            : pathname.startsWith(link.path);

        return (
          <Link
            key={link.path}
            to={link.path}
            className={`rounded-xl px-5 py-3 font-medium transition-all duration-300 ${
              active
                ? "bg-gradient-to-r from-[#A47149] to-[#D4A373] text-white shadow-lg"
                : "text-[#C9B7A6] hover:bg-[#3A2C24] hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
