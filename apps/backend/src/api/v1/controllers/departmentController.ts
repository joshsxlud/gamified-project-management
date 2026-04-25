import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../constants/httpConstants";
import { errorResponse, successResponse } from "../models/responseModel";

import * as departmentService from "../services/departmentService";
import { Group } from "generated/prisma/client";
import { DepartmentCreateModel } from "../models/departments/departmentCreateModel";
import { DepartmentUpdateModel } from "../models/departments/departmentUpdateModel";

/**
 * Controller to get all of the departments.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const getDepartments = async (_req: Request, res: Response, next: NextFunction): Promise <void> => {
    try {
        const departments = await departmentService.getAllDepartments();
        res.status(HTTP_STATUS.OK).json(successResponse(departments, "All departments have been found."));

    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Internal error."));
        next(error);
    }
}

/**
 * Controller to get a department by ID.
 * 
 * @param req - Express request object. 
 * @param res - Express response object.
 * @param Next - Passes control to the next middleware.
 */
export const getDepartmentById = async (req: Request, res: Response, next: NextFunction): Promise <void> => {
    try {
        const departmentId = Number(req.params.id);
        const department: Group = await departmentService.getDepartmentById(departmentId);


        res.status(HTTP_STATUS.OK).json(successResponse(department, "Department has been found."));

    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Internal error."));
        next(error);
    }
}

export const createDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const departmentData: DepartmentCreateModel = {
            name: req.body.name,
            numberOfUsers: req.body.numberOfUsers,
            organizationId: req.body.organizationId,
        }

        if (!departmentData.name || !departmentData.numberOfUsers || !departmentData.organizationId) {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Invalid inputs."));
        }

        const createdDepartment = await departmentService.createDepartment(departmentData);
        res.status(HTTP_STATUS.OK).json(successResponse(createdDepartment, "Department has been created."));
    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Internal error."));
        next(error);
    }
}

export const updateDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const departmentId: number = Number(req.body.id);
        const updateData: DepartmentUpdateModel = {
            name: req.body.name,
            numberOfUsers: req.body.numberOfUsers,
        }

        const updatedDepartment = await departmentService.updateDepartment(departmentId, updateData);
        res.status(HTTP_STATUS.OK).json(successResponse(updatedDepartment, "Department has been updated."));
    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Internal error."));
        next(error);
    }
}

export const deleteDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const departmentId = Number(req.params.id);

        if (isNaN(departmentId)) {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Invalid department ID."));
            return;
        }

        await departmentService.deleteDepartment(departmentId);
        res.status(HTTP_STATUS.OK).json(successResponse("Department has been deleted."));
    } catch (error: unknown) {
        console.error("Delete department error:", error);
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Internal server error."));
        next(error);
    }
}