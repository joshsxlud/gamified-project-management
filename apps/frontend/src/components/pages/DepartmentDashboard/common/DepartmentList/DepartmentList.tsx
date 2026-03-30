import type { DepartmentType } from "../../types/DepartmentType"

type DepartmentListDisplayProps = {
    departments: DepartmentType[];
    departmentIndex: (index: number) => void;
}

// The 0 in the task count is temporarly until we actually settle for how we would manage our data and figure out how we log completion/task completion.
export default function DepartmentList ({departments, departmentIndex} : DepartmentListDisplayProps) {
    return (
            <table className="table-fixed w-full border-collapse bg-zinc-700 rounded">
                <thead className="sticky top-0 bg-zinc-700 z-10">
                    <tr className="text-left">
                        <th>Department Name</th>
                        <th>Employee Count</th>
                        <th>Task/Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map(({departmentName, employeeCount, taskCount}, index) => (
                        <tr key={index} className="odd:bg-zinc-900 even:bg-zinc-800">
                            <td className="p-2">{departmentName}</td>
                            <td className="p-2">{employeeCount}</td>
                            <td className="p-2">0/{taskCount}</td>
                            <td className="p-2">
                                <button onClick={() => departmentIndex(index)} className="bg-[#D8382F] rounded">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}