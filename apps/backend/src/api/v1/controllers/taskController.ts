import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../constants/httpConstants";
import { errorResponse, successResponse } from "../models/responseModel";

/**
 * Controller to get all of the tasks.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const getTasks = async (req: Request, res: Response, Next: NextFunction): Promise <void> => {

    try {

        res.status(HTTP_STATUS.OK).json(successResponse("Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."))
    }
}

/**
 * Controller to get a task by ID.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const getTaskById = async (req: Request, res: Response, Next: NextFunction): Promise <void> => {

    try {

        res.status(HTTP_STATUS.OK).json(successResponse("Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."))
    }
}

/**
 * Controller to create a task.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const createTasks = async (req: Request, res: Response, Next: NextFunction): Promise <void> => {

    try {

        res.status(HTTP_STATUS.OK).json(successResponse("Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."))
    }
}

/**
 * Controller to update task details.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const updateTasks = async (req: Request, res: Response, Next: NextFunction): Promise <void> => {

    try {

        res.status(HTTP_STATUS.OK).json(successResponse("Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."))
    }
}

/**
 * Controller mark a task as complete.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const markTasksAsComplete = async (req: Request, res: Response, Next: NextFunction): Promise <void> => {

    try {

        res.status(HTTP_STATUS.OK).json(successResponse("Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."))
    }
}

/**
 * Controller to delete a task.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const deleteTasks = async (req: Request, res: Response, Next: NextFunction): Promise <void> => {

    try {

        res.status(HTTP_STATUS.OK).json(successResponse("Response is Okay."));

    } catch (error: unknown) {

        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Error Response."))
    }
}