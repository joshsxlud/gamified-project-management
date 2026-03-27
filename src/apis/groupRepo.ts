import type { Group } from "../types/groupType";
import { groupData } from "./mockGroupData";

// Get all groups attached to an organization
export function fetchGroups(): Group[] {
    return groupData;
}

// Creates a new group
export function createGroup(group: Group): Group {
    const newGroup: Group = {
    ...group,

    id: group.id ?? crypto.randomUUID(),
    };
    groupData.push(newGroup);
    return newGroup;
}

// Get a group by its id
export function getGroupById(groupId: string): Group {
    const foundGroup = groupData.find((g) => g.id === groupId);

    if (!foundGroup) {
        throw new Error(`Failed to fetch group with id ${groupId}`);
    }

    return foundGroup;
}

// Updates a group, ensures to get the group's id first
export async function updateGroup(group: Group): Promise<Group> {
    const foundGroupIndex = groupData.findIndex((g) => g.id === group.id);

    if (foundGroupIndex === -1) {
            throw new Error(`Failed to update group with id ${group.id}`);
        }
    
    groupData[foundGroupIndex] = group;
    return groupData[foundGroupIndex];
}

// Deletes a group using its id
export function deleteGroup(groupId: string): void {
    const foundGroup = groupData.findIndex((g) => g.id === groupId);

    if (foundGroup === -1) {
            throw new Error(`Failed to delete group with id ${groupId}`);
        }
    
    groupData.splice(foundGroup, 1);
}
