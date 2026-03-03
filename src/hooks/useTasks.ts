import { useState } from "react";
import type { Task } from "../types/taskType";
import * as taskService from "../services/taskService";

export function useTasks() {

    // Initialize task state using a CLONED version of the taskData
    const [tasks, setTasks] = useState<Task[]>(() => [...taskService.fetchTasks()]);

    // Creates a new task and adds it to the mock data
    const createTask = (task: Omit<Task, "id">) => {
        const newTask = taskService.createTask(task);
        setTasks([...taskService.fetchTasks()]);
        return newTask;
    };

    // Deletes a task from the mock data
    const deleteTask = (id: string) => {
        taskService.deleteTask(id);
        setTasks([...taskService.fetchTasks()]);
    };

    return { tasks, createTask, deleteTask };
}