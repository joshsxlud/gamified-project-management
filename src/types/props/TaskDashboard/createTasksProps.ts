import type { Task } from "../../taskType";

export type CreateTaskWidgetProps = {
    createTask: (task: Omit<Task, "id">) => Task;
};