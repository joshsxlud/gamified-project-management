import type { Organization } from "../../../../types/organizationType";

export function OrgCell(
  {
    org
  } : {
    org: Organization
  }
) {
  return (
    <div>
      <h1>{org.name}</h1>
    </div>
  );
}