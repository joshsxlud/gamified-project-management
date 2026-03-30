import type { ReactNode } from "react";

type DashboardWidgetCardProps = {
    widgetTitle: string;

    children: ReactNode;
};

const DashboardWidgetCard = ({widgetTitle, children}: DashboardWidgetCardProps) => {

    return (
        <div className="
            w-full
            h-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            flex
            flex-col
        ">
            
            <div className="pb-3">
                <h3>{widgetTitle}</h3>
            </div>
            {/* Will render the content depending on the widget. */}
            <div className="flex-1 min-h-0">{children}</div>

        </div>
    )
}

export default DashboardWidgetCard;