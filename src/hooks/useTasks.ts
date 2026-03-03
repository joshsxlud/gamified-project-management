import { useState } from "react";
import type { Task } from "../types/taskType";
import * as taskRepoFunctions from "../apis/taskRepo";

// Custom task hook to access task data
export function useTasks() {
    
    // Initialize a state for tasks
    // Takes existing tasks in mockTestData.ts
    const [tasks, setTasks] = useState<Task[]>(() => taskRepoFunctions.fetchTasks());

    // Creates a new task
    const createTask = (task: Omit<Task, "id">) => {

        // Create task using repo functions
        const newTask = taskRepoFunctions.createTask(task);

        // Since a new task was added to the mock data,
        // fetch updated data list, and set the new task
        setTasks(taskRepoFunctions.fetchTasks());
        return newTask;
    }
    
    const deleteTask = (id: string) => {
        
        // Remove task from mock data
        taskRepoFunctions.deleteTask(id);
        
        // fetch updated mock data list and set them
        setTasks(taskRepoFunctions.fetchTasks());
    }

    return { tasks, createTask, deleteTask }
}