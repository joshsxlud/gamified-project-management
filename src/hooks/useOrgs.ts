import { useEffect, useState } from "react";
import type { Organization } from "../types/organizationType";
import * as OrgService from "../services/orgService";

export function useOrgs(
  dependencies: unknown[],
  filterFn? : ((org: Organization) => boolean)|null,
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
    fetchOrgs,
    orgAddOrRemoveGroup
  };
}
