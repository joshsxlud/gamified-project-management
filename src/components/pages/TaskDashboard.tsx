import DisplayWidgets from "./TaskDashboard/components/DisplayWidgets";
import DashboardSidebarNav, {
  mainNavTopLinks,
  mainNavBottomLinks,
} from "../common/dashboardSidebarNav/DashboardSidebarNav";
import { useState } from "react";

// Type for different views, move into type folder
export type DashboardViewOptions = "overview" | "myTasks";

// Type for a TASK. MOVE to a types folder later
// NOTE: id, description, and completed are CREATED when a task is made
// BUT: State is NOT reflected in the UI.
export type Task = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

const TaskDashboard = () => {

    // State to handle dashboard views
    const [ view, setView ] = useState<DashboardViewOptions>("overview");

    // State to handle adding tasks
    const [ tasks, setTasks ] = useState<Task[]>([]);

    // Callback passed to DisplayWidgets to add tasks
    const addTask = (title: string, description: string) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            description,
            completed: false,
    };
        
        setTasks((prevTasks) => [...prevTasks, newTask]);

    };

    // Callback passed to DisplayWidgets to remove tasks
    const removeTasks = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
    
    return (
        <main>
            {/* Outer page wrapper */}
            <div className="
                min-h-screen
                w-full
                bg-zinc-900
                p-4
                flex
                flex-col
                overflow-hidden
                ">

                {/* Page wrapper */}
                <div className="
                    rounded-3xl
                    bg-zinc-950
                    w-full
                    flex-1
                    flex
                    min-h-0
                ">
                    {/* Content wrapper for a horizontal layout */}
                    <div className="flex w-full flex-1 min-h-0">

                        <DashboardSidebarNav
                          topLinks={mainNavTopLinks}
                          bottomLinks={mainNavBottomLinks}
                        />

                        {/* Main dashboard content */}
                        <section className="
                            w-full
                            flex-1
                            min-h-0
                            pl-6
                            flex
                            flex-col
                            px-8
                            pb-6
                            pt-6
                        ">
                            <DisplayWidgets
                                view={view}
                                setView={setView}
                                tasks={tasks}
                                addTask={addTask}
                                removeTask={removeTasks}
                            />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};


// IMPORTANT:
// WHEN TESTING, REMEMBER TO FIX WHAT IS RENDERED IN APP.TSX TO TASKDASHBOARD

export default TaskDashboard;