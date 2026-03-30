import "./OrgDashboard.css";

import DashboardSidebarNav, {
  mainNavTopLinks,
  mainNavBottomLinks,
} from "../common/dashboardSidebarNav/DashboardSidebarNav";
import OrgListPage from "./OrgDashboard/OrgListPage";

function OrgDashboard() {
  return(
    <><div className="outer-page-wrapper">
    <div className="page-wrapper">
    <div className="horizontal-wrapper">
      <DashboardSidebarNav
        topLinks={mainNavTopLinks}
        bottomLinks={mainNavBottomLinks}
      />

      {/* MAIN ORG CONTENT */}
      <section className="dashboard-content">
        <OrgListPage
          title="Organization Dashboard"
          orgDependencies={[]}
          orgFilterFn={null}
        />
      </section>
    </div>
    </div>
    </div></>
  )
}

export default OrgDashboard;