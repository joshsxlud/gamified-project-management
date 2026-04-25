import type { FrontendTask as Task } from "@shared/types/frontend-task";
import * as taskRepo from "../apis/taskRepo";
import { CreateTaskInput } from "../types/props/TaskDashboard/createTasksProps";

// Call repo function to get tasks
export async function fetchTasks(): Promise<Task[]> {
    return taskRepo.fetchTasks();
}

// Call repo function to get task id
// export function getTaskById(id: string): Task {
//     return taskRepo.getTaskById(id);
// }

// Creates a task using repo function
export function createTask(task: CreateTaskInput): Promise<Task> {

    // Sets title and description to a blank string if not present
    const title = task.title.trim();
    const description = task.description.trim();

    if (!title) {
        throw new Error("Task title is required");
    }

    // Maybe add description validation?

    return taskRepo.createTask({
        ...task,
        title,
        description,
    });
}

export async function deleteTask(id: number): Promise<void> {
    if (id === undefined || id === null) {
        throw new Error("Task id is required");
    }

    await taskRepo.deleteTask(id);
}