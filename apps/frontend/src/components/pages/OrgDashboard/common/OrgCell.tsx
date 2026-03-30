import type { Organization } from "../../../../types/organizationType";

export function OrgCell(
  {
    org
  } : {
    org: Organization
  }
) {
  return (
    <div className="org-cell">
      <h1>{org.name}</h1>
      <div></div>
    </div>
  );
}