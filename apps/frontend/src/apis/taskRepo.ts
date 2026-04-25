import type { FrontendTask as Task } from "@shared/types/frontend-task";
import { CreateTaskInput } from "../types/props/TaskDashboard/createTasksProps";
// import { taskData } from "./mockTaskData";


type TasksResponseJSON = {message: string, data: Task[]};
// type TaskResponseJSON = {message: String, data: Task};


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const TASK_ENDPOINT = "/tasks";

// Create task
export async function createTask(task: CreateTaskInput): Promise<Task> {
    const taskResponse: Response = await fetch(
        `${BASE_URL}${TASK_ENDPOINT}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        }
    );

    if (!taskResponse.ok) {
        throw new Error("Failed to create a task.");
    }

    return taskResponse.json();

}

// Get all tasks
export async function fetchTasks(): Promise <Task[]> {
    
    console.log(`${BASE_URL}${TASK_ENDPOINT}`);
    const taskResponse: Response = await fetch(
        `${BASE_URL}${TASK_ENDPOINT}`
    );

    if (!taskResponse.ok) {
        throw new Error("Failed to retrieve tasks.");
    }

    const json: TasksResponseJSON = await taskResponse.json();
    return json.data;
}


// // Get task by ID
// export function getTaskById(taskId: string): Task {
//     const foundTask = taskData.find((t) => t.id === taskId);

//     if (!foundTask) {
//         throw new Error(`Failed to fetch task with id ${taskId}`);
//     }

//     return foundTask;
// }

// // Update task
// export async function updateTask(task: Task): Promise<Task> {
//     const foundTaskIndex = taskData.findIndex((t) => t.id === task.id);

//     if (foundTaskIndex === -1) {
//         throw new Error(`Failed to update task with id ${task.id}`);
//     }

//     taskData[foundTaskIndex] = task;
//     return taskData[foundTaskIndex];
// }

// Delete task
export async function deleteTask(id: number): Promise<void> {
const taskResponse: Response = await fetch(
        `${BASE_URL}${TASK_ENDPOINT}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },           
        }
    );

    if (!taskResponse.ok) {
        throw new Error("Failed to delete task");
    }
}