import type { Task } from "./tasks/taskModel";

export interface User {

    id: number;
    username: string;
    email: string;
    groupId: number;
    tasks: Task[];
}