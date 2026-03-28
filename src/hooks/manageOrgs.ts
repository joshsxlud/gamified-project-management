import { useState } from "react";
import type { Organization } from "../types/organizationType";
import * as OrgService from "../services/orgService";

export function fetchOrgs() {
  const [orgs, updateOrgs] = useState<Organization[]>([]);
  const [response, setResponse] = useState<string | null>();

  const fetchOrgs = async() => {
    try {
      updateOrgs([...await OrgService.fetchOrg()]);
    } catch(e) {
      setResponse(`${e}`);
    }
  }

  const orgAddOrRemoveGroup = async(
    orgId: number,
    groupId: number
  ) => {
    try {
      setResponse(await OrgService.orgAddOrRemoveGroup(orgId, groupId));
      await fetchOrgs();
    } catch(e) {
      setResponse(`${e}`);
    }
  }

  return {
    orgs,
    response,
    fetchOrgs,
    orgAddOrRemoveGroup
  };
}
