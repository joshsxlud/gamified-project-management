import type { Task } from "../../../../generated/prisma/client";

export interface User {

    id: number;
    username: string;
    email: string;
    groupId: number;
    tasks: Task[];
}