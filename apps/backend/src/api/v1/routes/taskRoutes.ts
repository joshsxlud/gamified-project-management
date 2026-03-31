import express, { Router } from "express";
import * as taskControllers from "../controllers/taskController";
const router: Router = express.Router();

// Get all tasks for a user
router.get("/tasks", taskControllers.getTasks);

// Get task by ID
router.get("/tasks/:id", taskControllers.getTaskById);

// Create task
router.post("/tasks", taskControllers.createTasks);

// Update a task i.e. task details
router.put("/tasks/:id", taskControllers.updateTasks);

// Use to mark a task as complete
router.put("/tasks/:id/complete", taskControllers.markTasksAsComplete);

// Delete a task
// NOTE: Should be an admin route, as tasks should not be deleted
//       without permissions.
router.delete("/tasks/:id", taskControllers.deleteTasks);

export default router;