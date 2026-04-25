import type { DepartmentBranch } from "../../../../../../../../shared/types/frontend-department"

type DepartmentListDisplayProps = {
    departments: DepartmentBranch[];
    departmentIndex: (index: number) => void;
}

export default function DepartmentList({ departments, departmentIndex }: DepartmentListDisplayProps) {
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
                {departments.map(({ name, numberOfUsers, users }, index) => {
                    const actualUsers = users ?? []; // fallback if undefined
                    return (
                        <tr key={index} className="odd:bg-zinc-900 even:bg-zinc-800">
                            <td className="p-2">{name}</td>
                            <td className="p-2">{numberOfUsers ?? actualUsers.length}</td>
                            <td className="p-2">0/{actualUsers.length}</td>
                            <td className="p-2">
                                <button
                                    onClick={() => departmentIndex(index)}
                                    className="bg-[#D8382F] rounded px-2 py-1 text-white"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}