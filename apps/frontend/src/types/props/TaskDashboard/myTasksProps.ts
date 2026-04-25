import type { FrontendTask as Task } from "@shared/types/frontend-task";

export type MyTasksWidgetProps = {
    tasks: Task[];
    deleteTask: (id: number) => Promise<void>;
};