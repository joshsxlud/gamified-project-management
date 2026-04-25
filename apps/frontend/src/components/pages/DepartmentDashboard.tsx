import { useState } from "react";
import DepartmentForm from "./DepartmentDashboard/common/DepartmentForm/DepartmentForm";
import DepartmentList from "./DepartmentDashboard/common/DepartmentList/DepartmentList";
import DashboardSidebarNav, {
    mainNavTopLinks,
    mainNavBottomLinks,
} from "../common/dashboardSidebarNav/DashboardSidebarNav";

import { useEffect } from "react";
import { fetchGroups } from "../../apis/groupRepo";
import { deleteGroup } from "../../apis/groupRepo";

import { createGroup } from "../../apis/groupRepo";
// import type { groupType } from "../../types/groupType";

import type { DepartmentBranch as Group } from "../../../../../shared/types/frontend-department";

const DepartmentDashboard = () => {
    const [departments, setDepartments] = useState<Group[]>([]);

    const [selectedDepartment] = useState<string>("");

    useEffect(() => {
        const loadDepartments = async () => {
            try {
                const groups = await fetchGroups();
                setDepartments(groups);
            } catch (error) {
                console.error("Failed to load departments:", error);
            }
        };

        loadDepartments();
    }, []);

    const addDepartment = async (
        departmentName: string,
        numberOfUsers: number,
        organizationId: number,
    ): Promise<void> => {

        console.log("CREATE PAYLOAD:", {
            name: departmentName,
            numberOfUsers,
            organizationId
        });

        const newGroup = await createGroup({
            name: departmentName,
            numberOfUsers: numberOfUsers,
            organizationId: Number("1"),
        });

        setDepartments(prev => [...prev, newGroup]);
    };

    const removeDepartmentAtIndex = async (index: number) => {
        const departmentToRemove = departments[index];
        if (!departmentToRemove) return;

        try {
            await deleteGroup(departmentToRemove.id);

            setDepartments(prev => prev.filter((_, i) => i !== index));
        } catch (error) {
            console.error("Failed to delete department:", error);
            alert("Failed to delete department. Please try again.");
        }
    };

    return (
        <main>
            <div className="min-h-screen w-full bg-zinc-900 p-4 flex flex-col">
                <div className="rounded-3xl bg-zinc-950 w-full flex-1 flex">
                    <div className="flex w-full flex-1">

                        <DashboardSidebarNav
                            topLinks={mainNavTopLinks}
                            bottomLinks={mainNavBottomLinks}
                        />

                        <section className="flex-1 p-6 flex flex-col">
                            <div className="flex-1 overflow-y-auto min-h-0">
                                <DepartmentList
                                    departments={departments}
                                    departmentIndex={removeDepartmentAtIndex}
                                />
                            </div>

                            <div className="mt-6 border-t border-white/10 pt-6">
                                <DepartmentForm
                                    selectedDepartment={selectedDepartment}
                                    addDepartment={addDepartment}
                                />
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default DepartmentDashboard;