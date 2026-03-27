import * as groupRepo from "../apis/groupRepo";
import type { Group } from "../types/groupType";

// Calls the group repository to get all groups (departments)
export function fetchGroups(): Group[] {
    return groupRepo.fetchGroups();
}

// Creates a task using repo function
export function createGroup(group: Omit<Group, "id">): Group {

    // Sets the name of the group
    const name = group.name?.trim() ?? "";

    if (!name) {
        throw new Error("Department name is required");
    }

    return groupRepo.createGroup({
        ...group,
        name,
    });
}

// Deletes a group from the group mock data
export function deleteGroup(id: string): void {

    if (!id) {
        throw new Error("Group id is required");
    }

    groupRepo.deleteGroup(id);
}