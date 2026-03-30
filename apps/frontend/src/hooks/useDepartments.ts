import { useState } from "react";
import type { Group } from "../types/groupType";
import * as groupService from "../services/groupService";

export function useDepartments() {
    const [departments, setDepartments] = useState<Group[]>(() => [...groupService.fetchGroups()]);

    // Creates a new department and adds it to the mock data
    const createDepartment = (department: Omit<Group, "id">) => {
        const newDepartment = groupService.createGroup(department);
        setDepartments([...groupService.fetchGroups()]);
        return newDepartment;
    };

    // Deletes a department from the mock data
    const deleteDepartment = (id: string) => {
        groupService.deleteGroup(id);
        setDepartments([...groupService.fetchGroups()]);
    };

    return { departments, createDepartment, deleteDepartment };
}
