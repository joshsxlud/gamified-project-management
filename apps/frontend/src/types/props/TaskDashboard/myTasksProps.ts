import type { Task } from "../../taskType";

export type MyTasksWidgetProps = {
    tasks: Task[];
    deleteTask: (id: string) => void;
};