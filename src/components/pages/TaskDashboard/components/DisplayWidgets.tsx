import ChangeViewWidget from "./widgets/ChangeViewWidget";
import WidgetThree from "./widgets/WidgetThree";
import WidgetFour from "./widgets/WidgetFour";
import WidgetSix from "./widgets/WidgetSix";
import MyTasksWidget from "./widgets/MyTasksWidget";
import type { DashboardViewOptions } from "../../../../types/dashboardViewOptions";
import CreateTaskWidget from "./widgets/CreateTaskWidget";

type DashboardViewProps = {
    view: DashboardViewOptions;
    setView: (view: DashboardViewOptions) => void;
}

// Displays all of the widgets on the dashboard
// If more widgets get added, update grid layout
const DisplayWidgets = ({ view, setView }: DashboardViewProps) => {
    return (
        <section className="
            w-full
            flex
            flex-col
            flex-1
            min-h-0
            pt-6
            pb-6
            px-8
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
            <div className="flex-1 min-h-0 mt-4" >

                {/* Div for the top half of the widgets. */}
                {/* TOP GRID */}
                <div className="grid grid-cols-3 gap-4 h-full items-stretch">
                    {/* LEFT GRID */}
                    <div className="col-span-1 self-start">
                        <div className="inline-flex">
                            <ChangeViewWidget
                                view={view}
                                setView={setView}
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
                            <CreateTaskWidget />
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
    
                <div className="flex-1 min-h-0">
                    <MyTasksWidget />
                </div>
        </section>
    )
};

export default DisplayWidgets;