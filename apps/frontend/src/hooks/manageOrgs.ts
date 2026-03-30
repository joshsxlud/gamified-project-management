import { useEffect, useState } from "react";
import type { Organization } from "../types/organizationType";
import * as OrgService from "../services/orgService";

export function manageOrgs(
  dependencies: unknown[],
  filterFn? : ((orgs: Organization) => boolean)|null,
) {
  const [orgs, updateOrgs] = useState<Organization[]>([]);
  const [response, setResponse] = useState<string | null>();

  const fetchOrgs = async() => {
    try {
      let result = await OrgService.fetchOrgs();

      if(filterFn) {
        result = result.filter(filterFn);
      }

      updateOrgs([...result]);
      
      console.log("Orgs updated.")
    } catch(e) {
      setResponse(`${e}`);
    }
  }

  const orgAddOrRemoveGroup = async(
    orgId: number,
    groupId: number
  ) => {
    try {
      await OrgService.orgAddOrRemoveGroup(orgId, groupId);
      await fetchOrgs();
    } catch(e) {
      setResponse(`${e}`);
    }
  }

  useEffect(() => {
    fetchOrgs();
  }, [...dependencies]);

  return {
    orgs,
    response,
    orgAddOrRemoveGroup
  };
}
