import type { Task } from "../types/taskType";
import { taskData } from "./mockTaskData";

// Create task
export function createTask(task: Task): Task {
  const newTask: Task = {
    ...task,

    // Generate random UUID FOR NOW
    id: task.id ?? crypto.randomUUID(),
  };
  taskData.push(newTask);
  return newTask;
}

// Get all tasks
export function fetchTasks(): Task[] {
    return taskData;
  }
  
// Get task by ID
export function getTaskById(taskId: string): Task {
    const foundTask = taskData.find((t) => t.id === taskId);

    if (!foundTask) {
        throw new Error(`Failed to fetch task with id ${taskId}`);
    }

    return foundTask;
}

// Update task
export async function updateTask(task: Task): Promise<Task> {
    const foundTaskIndex = taskData.findIndex((t) => t.id === task.id);

    if (foundTaskIndex === -1) {
        throw new Error(`Failed to update task with id ${task.id}`);
    }

    taskData[foundTaskIndex] = task;
    return taskData[foundTaskIndex];
}

// Delete task
export function deleteTask(taskId: string): void {
    const foundTask = taskData.findIndex((t) => t.id === taskId);

    if (foundTask === -1) {
        throw new Error(`Failed to delete task with id ${taskId}`);
    }

    taskData.splice(foundTask, 1);
}