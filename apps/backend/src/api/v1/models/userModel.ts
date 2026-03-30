import type { Task } from "./taskModel";

export interface User {

    id: number;
    username: string;
    email: string;
    groupId: number;
    tasks: Task[];
}