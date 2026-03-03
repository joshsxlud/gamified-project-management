import DashboardWidgetCard from "../common/DashboardWidgetCard"
import { useTasks } from "../../../../../hooks/useTasks";

const MyTasksWidget = () => {

    // uses the custom task hook to access task data
    const { tasks, deleteTask } = useTasks();

    return (
        <DashboardWidgetCard widgetTitle="My Tasks">
        {tasks.length === 0 ? (
            <p>No tasks yet. Create one above.</p>
        ) : (
            <div className="
                flex
                flex-col
                gap-2
                pr-1
                h-full
                overflow-y-auto
            ">
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
                    // only delete task if id is not null
                    // weird implementation, since there isn't any validation currently.
                    onClick={() => task.id != null && deleteTask(task.id)}
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

// I.3: New/Refactored Component: MyTasksWidget
// Hook: useTasks
// Uses the useTasks hook to access task data
// Implementation:
// Hook calls the service -> service calls the API (repository functions) -> API returns the task data -> 
// task data is returned to the hook -> hook returns the task data to the component
// In this case, task data is accessed from the hook and displayed in the component.
// The component also allows for deleting tasks.