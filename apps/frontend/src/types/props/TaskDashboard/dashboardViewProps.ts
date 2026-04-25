import type { DashboardViewOptions } from "../../dashboardViewOptions";
import type { FrontendTask as Task } from "@shared/types/frontend-task";
import { CreateTaskInput } from "./createTasksProps";

export type DashboardViewProps = {
    view: DashboardViewOptions;
    setView: (view: DashboardViewOptions) => void;
    tasks: Task[];
    createTask: (task: CreateTaskInput) => Promise<Task>;
    deleteTask: (id: number) => Promise<void>;
}