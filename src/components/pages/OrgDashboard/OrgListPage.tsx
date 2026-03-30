import { useState } from "react";
import type { JSX } from "react";
 
import type { Organization } from "../../../types/organizationType";
import { manageOrgs } from "../../../hooks/manageOrgs";
import { OrgDisplay } from "./common/OrgDisplay";

type OrgListPageProps = {
  title: string,
  orgDependencies: any[],
  orgFilterFn: ((org: Organization) => boolean)|null
}

const OrgListPage = ({title, orgDependencies, orgFilterFn}: OrgListPageProps) => {
  const { orgs, response, orgAddOrRemoveGroup } = manageOrgs(orgDependencies, orgFilterFn);

  return (
    <>
      <h1>{title}</h1>
      <OrgDisplay 
        orgs={orgs}
      />
    </>
  );
};

export default OrgListPage;