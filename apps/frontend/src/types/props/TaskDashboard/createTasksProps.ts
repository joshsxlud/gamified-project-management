import type { FrontendTask as Task, DifficultyLevel } from "@shared/types/frontend-task";


export type CreateTaskWidgetProps = {
    createTask: (task: CreateTaskInput) => Promise<Task>;
};

export type CreateTaskInput = {
    title: string;
    description: string;
    dueDate: string;
    difficulty: DifficultyLevel;
    assignedId: number;
    assignedOn: string;
};