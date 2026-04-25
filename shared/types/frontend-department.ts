import type { User } from "../../apps/backend/src/api/v1/models/userModel";

export type DepartmentBranch = {

    id: number; 
    name: string;
    numberOfUsers: number;
    organizationId: number;
    users: User[];
};

export type CreateGroupDTO = {
    name: string;
    numberOfUsers: number;
    organizationId: number;
};