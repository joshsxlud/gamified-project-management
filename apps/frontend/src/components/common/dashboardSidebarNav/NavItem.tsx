import { NavLink } from "react-router-dom";

// Nav Items styling for all dashboard pages
const baseClass = "h-10 rounded flex items-center px-3 text-white transition-colors";

export default function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClass} ${isActive ? "bg-zinc-600" : "bg-zinc-700 hover:bg-zinc-600"}`
      }
    >
      {label}
    </NavLink>
  );
}