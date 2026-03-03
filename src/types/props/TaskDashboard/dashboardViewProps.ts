import type { DashboardViewOptions } from "../../dashboardViewOptions";
import type { Task } from "../../taskType";

export type DashboardViewProps = {
    view: DashboardViewOptions;
    setView: (view: DashboardViewOptions) => void;
    tasks: Task[];
    createTask: (task: Omit<Task, "id">) => Task;
    deleteTask: (id: string) => void;
}