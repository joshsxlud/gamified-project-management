export interface CreateTaskData {
    assignedId: number;
    assignedOn: string;
    dueDate: string;
    difficulty: string;
    status?: boolean;
    description?: string;
}