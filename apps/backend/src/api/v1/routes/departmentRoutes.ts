import express, { Router } from "express";
import * as departmentController from "../controllers/departmentController"

const router: Router = express.Router();

// Get all departments
router.get("/departments", departmentController.getDepartments);

// Get department by ID
router.get("/departments/:id", departmentController.getDepartmentById);

// Create a department
router.post("/departments", departmentController.createDepartment);

// Update a department
router.put("/departments/:id", departmentController.updateDepartment);

// Delete a department
router.delete("/departments/:id", departmentController.deleteDepartment);

export default router;