import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../constants/httpConstants";
import { errorResponse, successResponse } from "../models/responseModel";
import * as taskService from "../services/taskService";
import { Task } from "generated/prisma/client";
import { CreateTaskData } from "../models/tasks/taskCreateModel";
import { UpdateTaskData } from "../models/tasks/taskUpdateModel";

/**
 * Controller to get all of the tasks.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const getTasks = async (_req: Request, res: Response, next: NextFunction): Promise <void> => {

    try {
        const tasks: Task[] = await taskService.getAllTasks();
        res.status(HTTP_STATUS.OK).json(successResponse(tasks, "Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."));
        next(error);
    }
}

/**
 * Controller to get a task by ID.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const getTaskById = async (req: Request, res: Response, next: NextFunction): Promise <void> => {

    try {
        const taskId = Number(req.params.id);
        const task: Task = await taskService.getTaskById(taskId);


        res.status(HTTP_STATUS.OK).json(successResponse(task, "Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."));
        next(error);
    }
}

/**
 * Controller to create a task.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const createTasks = async (req: Request, res: Response, next: NextFunction): Promise <void> => {

    try {
        const taskData: CreateTaskData = {
            assignedId: Number(req.body.assignedId),
            assignedOn: req.body.assignedOn,
            dueDate: req.body.dueDate,
            difficulty: req.body.difficulty,
            status: req.body.status ?? false,
            description: req.body.description ?? "",
        }

        if (
            !taskData.assignedId ||
            !taskData.assignedOn ||
            !taskData.difficulty
        ) {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Invalid inputs."));
        }

        const createdTask: Task = await taskService.createTask(taskData);
        res.status(HTTP_STATUS.OK).json(successResponse(createdTask, "Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."));
        next(error);
    }
}

/**
 * Controller to update task details.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const updateTasks = async (req: Request, res: Response, next: NextFunction): Promise <void> => {

    try {
        const taskId = req.body.id;
        const updateData: UpdateTaskData = {
            dueDate: req.body.dueDate,
            difficulty: req.body.difficulty,
            description: req.body.description
        }

        // joi validation later

        const updatedTask: Task = await taskService.updateTask(taskId, updateData);
        res.status(HTTP_STATUS.OK).json(successResponse(updatedTask,"Response is Okay."));

    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."));
        next(error);
    }
}

/**
 * Controller mark a task as complete.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const markTasksAsComplete = async (req: Request, res: Response, next: NextFunction): Promise <void> => {

    try {
        const taskId: number = req.body.id;
        const taskStatus: boolean = req.body.status;

        const markedTask = await taskService.updateTaskStatus(taskId, taskStatus);
        res.status(HTTP_STATUS.OK).json(successResponse(markedTask, "Response is Okay."));

    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."));
        next(error);
    }
}

// /**
//  * Controller to delete a task.
//  * 
//  * @param req - Express request object. 
//  * @param res - Express response object.
//  * @param Next - Passes control to the next middleware.
//  */
// export const deleteTasks = async (req: Request, res: Response, Next: nextFunction): Promise <void> => {

//     try {

//         res.status(HTTP_STATUS.OK).json(successResponse("Response is Okay."));

//     } catch (error: unknown) {

//         res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."))
//     }
// }