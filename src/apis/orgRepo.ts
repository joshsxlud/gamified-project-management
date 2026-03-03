import type { Organization } from "../types/organizationType";
import { orgData } from "./mockOrgData";

export function fetchOrg(): Organization[] {
  return orgData;
}

export function getOrgById(orgId: number): Organization {
  try {
    const getOrg = orgData.find(entry => entry.id === orgId);

    if(!getOrg) {
      throw new Error(`Org with ${orgId} cannot be found`);
    }

    return getOrg;
  } catch (error: unknown) {
    throw error;
  }
}

export function addGroupToOrg(
  orgId: number,
  groupId: number
) {
  try {
    const index: number = orgData.findIndex(
      (organization: Organization) => organization.id === orgId
    );

    if (index === -1) {
      throw new Error(`Org with ${orgId} cannot be found`);
    }

    orgData[index].groups.push(groupId);

    return orgData;
  } catch (error: unknown) {
    throw error;
  }
}

export function removeGroupFromOrg(
  orgId: number,
  groupId: number
) {
  try {
    const orgIndex: number = orgData.findIndex(
      (organization: Organization) => organization.id === orgId
    );

    if (orgIndex === -1) {
      throw new Error(`Org with ${orgId} cannot be found`);
    } else {
      const groupIndex: number = orgData[orgIndex].groups.findIndex(
        (group: number) => group === groupId
      );

      if (orgIndex === -1) {
        throw new Error(`Group with ${groupId} cannot be found`);
      }

      orgData[orgIndex].groups.splice(groupIndex, 1);
    }

    return orgData;
  } catch (error: unknown) {
    throw error;
  }
}

export function createOrganization(orgName: string): Organization {
  try {
    let newId: number = 0;
    let isNotUnique: boolean = true;

    // Goes through branches until new ID doesn't match existing IDs
    while (isNotUnique) {
      newId += 1;
      isNotUnique = false;

      for (const key in orgData) {
        if (newId === orgData[key].id) {
          isNotUnique = true;
          break
        }
      }
    }

    const newOrg: Organization = {
      id: newId,
      name: orgName,
      groups: []
    };

    orgData.push(newOrg);
    return newOrg;
  } catch (error: unknown) {
    throw error;
  }
}

export function deleteOrganization(orgId: number) {
  try {
    const index: number = orgData.findIndex(
      (organization: Organization) => organization.id === orgId
    );

    if (index === -1) {
      throw new Error(`Org with ${orgId} cannot be found`);
    }
      
    orgData.splice(index, 1);
  } catch (error: unknown) {
    throw error;
  }
}