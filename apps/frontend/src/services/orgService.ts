import * as OrgRepo from "../apis/orgRepo";
import type { Organization } from "../types/organizationType";

export async function fetchOrgs() {
  return await OrgRepo.fetchOrgs();
}

export async function fetchOrgById(id: number) {
  return await OrgRepo.getOrgById(id);
}

export async function createOrg(name: string) {
  const title = name?.trim() ?? "";

  if (!title) {
      throw new Error("Organization name is required.");
  }

  OrgRepo.createOrganization(name);
}

export async function deleteOrg(id: number) {
  if (!id) {
      throw new Error("ID is required");
  }

  OrgRepo.deleteOrganization(id);
}

export async function orgAddOrRemoveGroup(
  orgId: number,
  groupId: number
) {
  const orgData: Organization[] = await OrgRepo.fetchOrgs();
  let groupExists: boolean = false;

  // Check each group if the group is already in another organization
  for (const key in orgData) {
    const groupIndex: number = orgData[key].groups.findIndex(
      (g: number) => g === groupId
    );

    if (groupIndex !== -1) {
      groupExists = true;
    }
  }
  
  if (groupExists) {
    // Check if group already exists in the given organization
    const groupInOrg: number = orgData[orgId].groups.findIndex(
      (g: number) => g === groupId
    );

    if (groupInOrg !== -1) {
      // Removes group from org if it exists
      await OrgRepo.removeGroupFromOrg(orgId, groupId);
      return "Successfully removed group.";
    } else {
      return "Group already exists in another organization.";
    }
  } else {
    // Adds group if it hasn't been assigned anywhere yet
    await OrgRepo.addGroupToOrg(orgId, groupId);
    return "Successfully added group.";
  }
}
