import type { User } from "./userModel";

export interface Group {

    id: number; 
    groupId: number;
    name: string;
    numberOfUsers: number;
    organizationId: number;
    users: User[];
}