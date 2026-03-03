import DisplayWidgets from "./TaskDashboard/components/DisplayWidgets";
import DashboardSidebarNav, {
  mainNavTopLinks,
  mainNavBottomLinks,
} from "../common/dashboardSidebarNav/DashboardSidebarNav";
import { useState } from "react";
import type { DashboardViewOptions } from "../../types/dashboardViewOptions";
import { useTasks } from "../../hooks/useTasks";

const TaskDashboard = () => {
    const [view, setView] = useState<DashboardViewOptions>("overview");
    const { tasks, createTask, deleteTask } = useTasks();

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
                                createTask={createTask}
                                deleteTask={deleteTask}
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