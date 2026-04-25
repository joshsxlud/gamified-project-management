import type { DepartmentBranch as Group } from "../../../../shared/types/frontend-department";
import type { CreateGroupDTO as CreateGroupDTO } from "../../../../shared/types/frontend-department";

type DepartmentsResponseJSON = {message: String, data: Group[]};
type DepartmentResponseJSON = {message: String, data: Group};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const DEPARTMENT_ENDPOINT = "/departments"

// Get all groups attached to an organization
export async function fetchGroups(): Promise<Group[]> {
    try {
        const departmentResponse: Response = await fetch(
            `${BASE_URL}${DEPARTMENT_ENDPOINT}`
        );

        if (!departmentResponse.ok) {
            throw new Error("Failed to fetch departments.");
        }

        const json: DepartmentsResponseJSON = await departmentResponse.json();
        return json.data;
    } catch (error: unknown) {
        throw new Error(`Fetching failed, ${error}`);
    }
}

// Get a group by its id
export async function getGroupById(groupId: number): Promise<Group> {
    try {
        const departmentResponse: Response = await fetch(
            `${BASE_URL}${DEPARTMENT_ENDPOINT}/${groupId}`
        );

        if(!departmentResponse.ok) {
            throw new Error(`Failed to fetch department with id ${groupId}`);
        }

        const json: DepartmentResponseJSON = await departmentResponse.json();
        return json.data;
    } catch (error: unknown) {
        throw new Error(`Fetching failed, ${error}`);
    }
}

// Creates a new group
export async function createGroup(group: CreateGroupDTO): Promise<Group> {
    const res = await fetch(`${BASE_URL}${DEPARTMENT_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(group),
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to create department: ${errorText}`);
    }

    const json = await res.json();
    return json.data;
}

// Updates a group, ensures to get the group's id first
export async function updateGroup(group: Group): Promise<Group> {
    try {
        const updateResponse: Response = await fetch(
            `${BASE_URL}${DEPARTMENT_ENDPOINT}/${group.id}`,
            {
                method: "PUT",
                body: JSON.stringify({...group}),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
            
        if(!updateResponse.ok) {
            throw new Error(`Failed to update department with id ${group.id}.`);
        }
    
        const json: DepartmentResponseJSON = await updateResponse.json();
        return json.data;
    } catch (error: unknown) {
        throw new Error(`Update failed, ${error}`);
    }
}

// Deletes a group using its id
export async function deleteGroup(groupId: number) {
    try {
        const deleteResponse: Response = await fetch(
            `${BASE_URL}${DEPARTMENT_ENDPOINT}/${groupId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
            
        if(!deleteResponse.ok) {
            throw new Error(`Failed to delete department with id ${groupId}.`);
        }
    } catch (error: unknown) {
        throw new Error(`Deletion failed, ${error}`);
    }
}
