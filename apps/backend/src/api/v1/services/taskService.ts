import type { Task } from "../../../../generated/prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateTaskData } from "../models/tasks/taskCreateModel";
import { UpdateTaskData } from "../models/tasks/taskUpdateModel";

/**
 * Calls the prisma client to get all the tasks.
 * 
 * @returns {Promise<Task[]>} A list of all Tasks.
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
 * Calls the prisma client to get a task by id.
 * 
 * @param {number} id - id of the task.
 * @returns {Promise<Task>} Task object.
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
 * Calls the Prisma client to create a new task.
 * 
 * @param {CreateTaskData} taskData - Information used to create a task.
 * @returns {Task} New task object.
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
        console.error(error);
        throw new Error(`Task could not be created.`);
    }
}

/**
 * Calls the Prisma client to update the details of a task.
 * 
 * @param {number} id - id of the task being updated.
 * @param {updateData} updateData - Details of the task to update.
 * @returns {Promise<Task>} updated task object.
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
 * Calls the Prisma client to update the status of a task.
 * 
 * @param {number} id - id of the task being updated.
 * @param {boolean} status - Updated status of the task.
 * @returns {Promise<Task>} Updated task object.
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

/**
 * Calls the Prisma client to delete a task.
 * 
 * @param {number} id - id of the task being deleted.
 */
export const deleteTask = async (id: number): Promise<void> => {

    try {
        await prisma.task.delete({
            where: { id }
        });
    } catch (error) {
        throw new Error(`Task with id ${id} could not be deleted.`);
    } 
}