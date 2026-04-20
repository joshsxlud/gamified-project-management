/**
 * Model for sending updates to an existing
 * task.
 */
export interface UpdateTaskData {
    dueDate?: string;
    difficulty?: string;
    description?: string;
}