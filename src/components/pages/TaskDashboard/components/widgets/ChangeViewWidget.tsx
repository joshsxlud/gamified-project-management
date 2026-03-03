import DashboardWidgetCard from "../common/DashboardWidgetCard";
import type { DashboardViewProps } from "../../../../../types/props/TaskDashboard/dashboardViewProps";

const ChangeViewWidget = ({ setView }: DashboardViewProps) => {
    return (
        <DashboardWidgetCard widgetTitle="View">
            <form className="flex gap-2 flex-col">
                <button
                    type="button"
                    onClick={() => setView("overview")}
                    className="
                        px-3
                        py-1
                        rounded 
                        bg-zinc-800
                    ">
                Overview
                </button>

                <button
                type="button"
                onClick={() => setView("myTasks")}
                className="
                    px-3
                    py-1
                    rounded 
                    bg-zinc-800
                ">
                My Tasks
                </button>
            </form>
        </DashboardWidgetCard>
    )
};

export default ChangeViewWidget;