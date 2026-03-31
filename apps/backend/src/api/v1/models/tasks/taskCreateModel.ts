export interface CreateTaskData {
    title: string;
    assignedId: number;
    assignedOn: string;
    dueDate: string;
    difficulty: string;
    status?: boolean;
    description?: string;
}