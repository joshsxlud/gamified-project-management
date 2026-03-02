import DepartmentForm from "./common/DepartmentForm/DepartmentForm";
import DepartmentList from "./common/DepartmentList/DepartmentList";
import DashboardSidebarNav, {
  mainNavTopLinks,
  mainNavBottomLinks,
} from "../../../common/dashboardSidebarNav/DashboardSidebarNav";
import { useState } from "react";
import tempData from "./assets/tempData.json";
import type { DepartmentType } from "./types/DepartmentType";

const DepartmentDashboard = () => {
    const [departments, setDepartments] = useState<DepartmentType[]>(tempData.departments);
        const [selectedDepartment] = useState<string>(
        tempData.departments[0]?.departmentName ?? ""
    )

    const addDepartment = (
        departmentName: string,
        employeeCount: number,
        taskCount: number
    ): void => {
        setDepartments(prev => [
            ...prev,
            {
                departmentName,
                employeeCount,
                taskCount,
            }
        ])
    }

    const removeDepartmentAtIndex = (index: number) => {
        setDepartments(prev => prev.filter((_, i) => i !== index));
    }

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
                ">

                {/* Page wrapper */}
                <div className="
                    rounded-3xl
                    bg-zinc-950
                    w-full
                    flex-1
                    flex
                ">
                    {/* Content wrapper for a horizontal layout */}
                    <div className="flex w-full flex-1">

                        <DashboardSidebarNav
                            topLinks={mainNavTopLinks}
                            bottomLinks={mainNavBottomLinks}
                        />

                        {/* Main dashboard content */}
                        <section className="flex-1 p-6 flex flex-col">
                            <div className="flex-1 overflow-y-auto min-h-0">
                                <DepartmentList
                                departments={departments}
                                departmentIndex={removeDepartmentAtIndex}
                                />
                            </div >
                            <div className="mt-6 border-t border-white/10 pt-6">
                                <DepartmentForm
                                selectedDepartment={selectedDepartment}
                                addDepartment={addDepartment}/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DepartmentDashboard;