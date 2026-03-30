import type { Task } from "../models/taskModel";
import { prisma } from "../../../../prisma/client";

/**
 * Service to get all tasks.
 * 
 * @returns A list of all Tasks.
 */
export const getAllTasks = async (): Promise<Task[]> => {

    try { 
        return prisma.task.findMany();
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

        return task;
    } catch (error) {

        throw Error;
    }
}