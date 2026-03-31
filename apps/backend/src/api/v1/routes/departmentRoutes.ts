import express, { Router } from "express";

const router: Router = express.Router();

// Get all departments
router.get("/departments", );

// Get department by ID
router.get("/departments/:id", );

// Create a department
router.post("/departments", );

// Update a department
router.put("/departments/:id", );

// Delete a department
router.delete("/departments/:id");

export default router;