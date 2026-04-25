import ChangeViewWidget from "./widgets/ChangeViewWidget";
import WidgetThree from "./widgets/WidgetThree";
import WidgetFour from "./widgets/WidgetFour";
import WidgetSix from "./widgets/WidgetSix";
import MyTasksWidget from "./widgets/MyTasksWidget";
import type { DashboardViewProps } from "../../../../types/props/TaskDashboard/dashboardViewProps";
import CreateTaskWidget from "./widgets/CreateTaskWidget";

// Displays all of the widgets on the dashboard
// If more widgets get added, update grid layout
const DisplayWidgets = ({ view, setView, tasks, createTask, deleteTask }: DashboardViewProps) => {
    return (
        <section className="
            w-full
            flex
            flex-col
            flex-1
            min-h-0
        ">
            <h1 className="
                text-2xl
                font-bold
                tracking-tight
                pb-2
            ">
                Task Dashboard
            </h1>

            <div className="
                h-px
                w-full
                bg-white/10
            "/>
            <div className="mt-4" >

                {/* Div for the top half of the widgets. */}
                {/* TOP GRID */}
                <div className="grid grid-cols-3 gap-4 items-start">
                    {/* LEFT GRID */}
                    <div className="col-span-1 self-start">
                        <div className="inline-flex">
                            <ChangeViewWidget
                                setView={setView}
                                view={view}
                                tasks={tasks}
                                createTask={createTask}
                                deleteTask={deleteTask}
                            />
                        </div>
                    </div>

                    {/* RIGHT GRID */}
                    <div className="col-span-2">
                        {view === "overview" && (
                        <div className="
                            grid
                            grid-cols-2
                            gap-4 
                            auto-rows-fr
                            h-full
                        ">
                            <CreateTaskWidget createTask={createTask} />
                            <WidgetThree />
                            <WidgetFour />
                            <WidgetSix />
                        </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Div for the bottom half of the widgets. */}
            <div className="h-6"/>
    
                <div className="h-[300px]">
                    <MyTasksWidget tasks={tasks} deleteTask={deleteTask} />
                </div>
        </section>
    )
};

export default DisplayWidgets;