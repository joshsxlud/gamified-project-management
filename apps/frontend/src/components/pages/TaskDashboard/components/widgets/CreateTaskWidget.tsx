import { useState } from "react";
import DashboardWidgetCard from "../common/DashboardWidgetCard";
import type { CreateTaskWidgetProps } from "../../../../../types/props/TaskDashboard/createTasksProps";
import { DifficultyLevel } from "@shared/types/frontend-task";
import { difficultyRating } from "../../../../../../../../shared/types/frontend-task";

const CreateTaskWidget = ({ createTask }: CreateTaskWidgetProps) => {

    // State variables local to the form inputs
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [difficulty, setDifficulty] = useState<DifficultyLevel>(2);
    const [dueDate, setDueDate] = useState<string>("");

    // For now, all new tasks should be assigned to user id 1.
    const [assignedId, setAssignedId] = useState<number>(1);

  return (
    <DashboardWidgetCard widgetTitle="Add Task">
        <form
            onSubmit={async (e) => {

                const trimmedTitle = title.trim();
                const trimmedDescription = description.trim();
                const assignedOn = new Date().toISOString().split("T")[0];

                e.preventDefault();

                if (!trimmedTitle || !trimmedDescription) {
                    return;
                }
                await createTask({
                    title: trimmedTitle,
                    description: trimmedDescription,
                    difficulty,
                    dueDate,
                    assignedId,
                    assignedOn,
                });
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

            <div className="flex flex-col gap-2">
                <input
                    type="number"
                    value={assignedId}
                    onChange={(e) => setAssignedId(Number(e.target.value))}
                    placeholder="Assigned user ID"
                    className="
                        h-9
                        rounded-md
                        border
                        border-white/10
                        bg-white/5
                        px-3
                    "
                />
                <input
                    type="date"
                    className="
                    rounded-md
                    border border-white/10
                    bg-white/5
                    px-3 py-2
                    "
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <select
                    value={difficulty}
                    onChange={(e) =>
                        setDifficulty(Number(e.target.value) as DifficultyLevel)
                    }
                    className="
                        h-9
                        rounded-md
                        border
                        border-white/10
                        bg-white/5
                        px-3
                    "
                >
                    {Object.entries(difficultyRating).map(([value, label]) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
                    
            </div>
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