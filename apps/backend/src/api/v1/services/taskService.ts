import type { Task } from "../../../../generated/prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateTaskData } from "../models/tasks/taskCreateModel";
import { UpdateTaskData } from "../models/tasks/taskUpdateModel";

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

        throw new Error(`Task with id ${id} could not be retrieved.`);
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
                title: taskData.title,
                assignedId: taskData.assignedId,
                assignedOn: taskData.assignedOn,
                dueDate: taskData.dueDate,
                difficulty: taskData.difficulty,
                status: taskData.status ?? false,
                description: taskData.description,
            }
        });
        return structuredClone(newTask);
    } catch (error) {
        throw new Error(`Task could not be created.`);
    }
}

/**
 * Service to update a task's details.
 * 
 * @param id - The id of the task being updated.
 * @param updateData - The update data.
 * @returns Task - The updated task.
 */
export const updateTask = async (id: number, updateData: UpdateTaskData): Promise<Task> => {
    
    try {
        const updatedTask = await prisma.task.update({
            where: { id },
            data: updateData
        });

        return structuredClone(updatedTask);
    } catch (error) {

        throw new Error(`Task with id ${id} could not be updated.`);
    }
}

/**
 * Service to update the status of a task.
 * 
 * @param id - The id of the task being updated.
 * @param status - the status of the task. e.g. False = not completed.
 * @returns 
 */
export const updateTaskStatus = async (id: number, status: boolean): Promise<Task> => {

    try {
         const statusUpdateTask = prisma.task.update({
            where: { id },
            data: { status }
        });

        return structuredClone(statusUpdateTask);
    } catch {

        throw new Error(`Task with id ${id} could not be updated.`);
    }
}

export const deleteTask = async (id: number): Promise<void> => {

    try {

        await prisma.task.delete({
            where: { id }
        });
    } catch (error) {
        throw new Error(`Task with id ${id} could not be deleted.`);
    } 
}