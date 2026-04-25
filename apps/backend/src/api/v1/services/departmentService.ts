import type { Group } from "../../../../generated/prisma/client";
import { prisma } from "../../../../prisma/client";
import { DepartmentCreateModel } from "../models/departments/departmentCreateModel";
import { DepartmentUpdateModel } from "../models/departments/departmentUpdateModel";

/**
 * Service to get all departments.
 * 
 * @returns A list of all departments.
 */
export const getAllDepartments = async (): Promise<Group[]> => {

    try {
        const departments = await prisma.group.findMany();
        return structuredClone(departments);
    } catch (error) {
        throw new Error("Failed to retrieve all departments.");
    }
}

/**
 * Service to get a department by id.
 * 
 * @param id - The id of a department.
 * @returns Group - A department object.
 */
export const getDepartmentById = async (id: number): Promise<Group> => {

    try {
        const department: Group | null = await prisma.group.findUnique({
            where: {
                id: id,
            }
        });

        if (!department){
            throw new Error(`Could not get department with id ${"id"}.`)
        }

        return structuredClone(department);
    } catch (error: unknown) {

        throw new Error(`Department with id ${id} could not be retrieved.`);
    }
}

export const createDepartment = async (groupData: DepartmentCreateModel): Promise<Group> => {
    try {
        const newDepartment = await prisma.group.create({
            data: {
                name: groupData.name,
                numberOfUsers: groupData.numberOfUsers,
                organizationId: groupData.organizationId,
            }
        });
        return structuredClone(newDepartment);
    } catch (error: unknown) {
        throw new Error(`Department could not be created.`);
    }
}

export const updateDepartment = async (id: number, updateData: DepartmentUpdateModel): Promise<Group> => {
    try {
        const updateDepartment = await prisma.group.update({
            where: { id },
            data: updateData
        });

        return structuredClone(updateDepartment);
    } catch (error: unknown) {
        throw new Error(`Department with id ${id} could not be updated.`);
    }
}

export const deleteDepartment = async (id: number): Promise<void> => {
    try {
        await prisma.group.delete({
            where: { id }
        });
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`Department with id ${id} could not be deleted.`)
    }
}