import { useEffect, useState } from "react";
import type { FrontendTask as Task } from "@shared/types/frontend-task";
import * as taskService from "../services/taskService";
import { CreateTaskInput } from "../types/props/TaskDashboard/createTasksProps";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function getTasks() {
            try {
                console.log("useTasks: loading tasks...");
                const fetchedTasks = await taskService.fetchTasks();
                console.log("useTasks: fetchedTasks =", fetchedTasks);
                setTasks(fetchedTasks);
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        }

        getTasks();
    }, []);

    const createTask = async (task: CreateTaskInput) => {
        const newTask = await taskService.createTask(task);
        const updatedTasks = await taskService.fetchTasks();
        setTasks(updatedTasks);
        return newTask;
    };

    const deleteTask = async (id: number) => {
        await taskService.deleteTask(id);
        const updatedTasks = await taskService.fetchTasks();
        setTasks(updatedTasks);
    };

    return { tasks, createTask, deleteTask};
}