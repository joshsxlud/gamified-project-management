import type { Task } from "../models/taskModel";
import { prisma } from "../../../../prisma/client";
import { CreateTaskData } from "../models/taskCreateModel";

/**
 * Service to get all tasks.
 * 
 * @returns A list of all Tasks.
 */
export const getAllTasks = async (): Promise<Task[]> => {

    try {
        const tasks = await prisma.task.findMany();
        return structuredClone(tasks);
    } catch (error) {
        throw new Error("Failed to retrieve all tasks.");
    }
}

/**
 * Service to get a task by id.
 * 
 * @param id - The id of the task.
 * @returns Task - A task object.
 */
export const getTaskById = async (id: number): Promise<Task> => {

    try {
        const task: Task | null = await prisma.task.findUnique({
            where: {
                id: id,
            }
        });

        if (!task){
            throw new Error(`Could not get task with id ${"id"}.`)
        }

        return structuredClone(task);
    } catch (error) {

        throw Error;
    }
}

/**
 * Service to create a task.
 * 
 * @param taskData - Information about the task.
 * @returns - The newly created task.
 */
export const createTask = async (taskData: CreateTaskData): Promise<Task> => {
    try {
        const newTask = await prisma.task.create({
            data: {
                assignedId: taskData.assignedId,
                assignedOn: taskData.assignedOn,
                dueDate: taskData.dueDate,
                difficulty: taskData.difficulty,
                status: taskData.status ?? false,
                description: taskData.description ?? "",
            }
        });
        return structuredClone(newTask);
    } catch (error) {
        throw Error;
    }
}