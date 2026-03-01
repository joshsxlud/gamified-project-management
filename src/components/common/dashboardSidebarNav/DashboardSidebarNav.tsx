import type { ReactNode } from "react";
import NavItem from "./NavItem";

export type DashboardNavLink = {
  to: string;
  label: string;
};

/** Main app nav links for the sidebar (shared by all dashboard pages). */
export const mainNavTopLinks: DashboardNavLink[] = [
  { to: "/", label: "Home" },
  { to: "/task-dashboard", label: "Task Dashboard" },
  { to: "/department-dashboard", label: "Department Dashboard" },
];

export const mainNavBottomLinks: DashboardNavLink[] = [
  { to: "#", label: "Options" },
  { to: "#", label: "Account" },
];

type DashboardSidebarNavProps = {
  topLinks?: DashboardNavLink[];
  bottomLinks?: DashboardNavLink[];
  footer?: ReactNode;
};

// Nav Template for all dashboard pages
function DashboardSidebarNav({
  topLinks,
  bottomLinks,
  footer,
}: DashboardSidebarNavProps) {

  // Top half of sidebar NAV
  const topContent = topLinks?.length ? (
topLinks.map((link) => (
      <NavItem key={link.to} to={link.to} label={link.label} />
    ))
  ) : (
    <>
      <div className="h-10 rounded bg-zinc-700" />
      <div className="h-10 rounded bg-zinc-700" />
      <div className="h-10 rounded bg-zinc-700" />
    </>
  );

  // Bottom half of sidebar NAV
  const bottomContent = bottomLinks?.length ? (
    bottomLinks.map((link) => (
      <NavItem key={link.to} to={link.to} label={link.label} />
    ))
  ) : (
    <>
      <div className="h-10 rounded bg-zinc-700" />
      <div className="h-10 rounded bg-zinc-700" />
      <div className="h-10 rounded bg-zinc-700" />
    </>
  );

  return (
    <aside
      className="
        w-64
        shrink-0
        px-8
        py-8
        border-r
        border-white/10
        gap-6
        flex
        flex-col
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          flex-1
        "
      >
        <nav
          className="
            flex
            flex-col
            gap-2
          "
        >
          {topContent}
        </nav>

        <div className="h-px bg-white/10 my-4" />

        <nav
          className="
            flex
            flex-col
            gap-2
          "
        >
          {bottomContent}
        </nav>

        <div className="flex-1" />
      </div>

      <div
        className="
          h-10
          rounded
          bg-zinc-700
        "
      >
        {footer}
      </div>
    </aside>
  );
}

export default DashboardSidebarNav;
