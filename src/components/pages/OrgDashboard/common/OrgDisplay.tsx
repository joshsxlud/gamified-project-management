import type { Organization } from "../../../../types/organizationType";
import type { JSX } from "react";
import { OrgCell } from "../widgets/OrgCell";

export function OrgDisplay(
  {
    orgs
  } : {
    orgs: Organization[]
  }
) {
  const listOrgs: JSX.Element[] = orgs.map((org) => {
    return (
      <OrgCell
        org={org}
        key={org.id}
      />
    );
  })

  return (
    <ol>{listOrgs}</ol>
  )
}