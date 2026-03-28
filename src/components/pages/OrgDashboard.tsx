import { useState } from "react";
import "./OrgDashboard.css";

import { manageOrgs } from "../../hooks/manageOrgs";
import type { Organization } from "../../types/organizationType";
import DashboardSidebarNav, {
  mainNavTopLinks,
  mainNavBottomLinks,
} from "../common/dashboardSidebarNav/DashboardSidebarNav";

const OrgDashboard = () => {

  return (
    <><div className="outer-page-wrapper">
    <div className="page-wrapper">
    <div className="horizontal-wrapper">
      <DashboardSidebarNav
        topLinks={mainNavTopLinks}
        bottomLinks={mainNavBottomLinks}
      />

      {/* MAIN ORG CONTENT */}
      <section className="dashboard-content">
        {/* TODO */}
      </section>
    </div>
    </div>
    </div></>
  );
};

export default OrgDashboard;