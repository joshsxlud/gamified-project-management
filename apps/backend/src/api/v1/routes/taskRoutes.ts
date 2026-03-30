import express, { Router } from "express";

const router: Router = express.Router();

// Get all tasks for a user
router.get("/tasks",);
// Get task by ID
router.get("/tasks/:id", );

// Create task
router.post("/tasks", )

// Update a task i.e. task details
router.put("/tasks/:id", );

// Use to mark a task as complete
router.put("/tasks/:id/complete", );

// Delete a task
// NOTE: Should be an admin route, as tasks should not be deleted
//       without permissions.
router.delete("/tasks/:id", );

export default router;