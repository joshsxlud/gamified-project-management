export interface User {
    id: number;
    username: string;
    email: string;
    groupId: number;
}

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