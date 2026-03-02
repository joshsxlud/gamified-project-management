import DashboardWidgetCard from "../common/DashboardWidgetCard"
import type { Task } from "../../../../../types/taskType";

type MyTasksWidgetProps = {
  tasks: Task[];
  removeTask: (id: string) => void;
};

const MyTasksWidget = ({ tasks, removeTask }: MyTasksWidgetProps) => {

    return (
        <DashboardWidgetCard widgetTitle="My Tasks">
        {tasks.length === 0 ? (
            <p>
            No tasks yet. Create one above.
            </p>
        ) : (
            <div className="flex flex-col gap-2 pr-1">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="
                        flex
                        items-start
                        justify-between
                        gap-3
                        rounded-md
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-2
                ">
                <div className="flex flex-col">
                    <p>{task.title}</p>

                    {task.description && (
                        <p>{task.description}</p>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => removeTask(task.id)}
                    className="
                    h-8
                    px-3
                    rounded-md
                    border
                    border-white/10
                    bg-white/5
                ">
                    Delete
                </button>
                </div>
            ))}
            </div>
        )}
        </DashboardWidgetCard>
    );
};

export default MyTasksWidget;