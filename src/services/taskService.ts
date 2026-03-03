import type { Task } from "../types/taskType";
import * as taskRepo from "../apis/taskRepo";

// Call repo function to get tasks
export function fetchTasks(): Task[] {
    return taskRepo.fetchTasks();
}

// Call repo function to get task id
export function getTaskById(id: string): Task {
    return taskRepo.getTaskById(id);
}

// Creates a task using repo function
export function createTask(task: Omit<Task, "id">): Task {

    // Sets title and description to a blank string if not present
    const title = task.title?.trim() ?? "";
    const description = task.description?.trim() ?? "";

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
// Deletes a task from the mock data using repo function
export function deleteTask(id: string): void {

    if (!id) {
        throw new Error("Task id is required");
    }

    taskRepo.deleteTask(id);
}