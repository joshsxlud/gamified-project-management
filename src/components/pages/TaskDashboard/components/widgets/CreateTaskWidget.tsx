import { useState } from "react";
import DashboardWidgetCard from "../common/DashboardWidgetCard";
import type { CreateTaskWidgetProps } from "../../../../../types/props/TaskDashboard/createTasksProps";

const CreateTaskWidget = ({ createTask }: CreateTaskWidgetProps) => {

    // State variables local to the form inputs
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

  return (
    <DashboardWidgetCard widgetTitle="Add Task">
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (!title.trim() || !description.trim()) {
                    return;
                }
                createTask({ title: title.trim(), description: description.trim(), completed: false });
                setTitle("");
                setDescription("");
                }}
            className="flex gap-2
            ">
            <div className="flex flex-col gap-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task title"
                    className="
                        flex-1
                        h-9
                        rounded-md
                        border
                        border-white/10
                        bg-white/5
                        px-3
                "/>

                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="
                        h-9
                        rounded-md
                        border 
                        border-white/10
                        bg-white/5
                        px-3
                "/>
            </div>

            <button
                type="submit"
                className="
                    h-9
                    px-3
                    rounded-md
                    border
                    border-white/10
                    bg-white/10
                ">
                Add
            </button>
        </form>
    </DashboardWidgetCard>
    );
};

export default CreateTaskWidget;


// I.3: New/Refactored Component: CreateTaskWidget
// Hook: useTasks
// Uses the useTasks hook to create a new task
// Implementation:
// Hook calls the service -> service calls the API (repository functions) -> API returns the task data -> 
// task data is returned to the hook -> hook returns the task data to the component