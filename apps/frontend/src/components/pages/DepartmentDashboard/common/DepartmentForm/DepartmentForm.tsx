import type { DepartmentFormProps } from "../../types/DepartmentFormProps";
import useInput from "../../../../../hooks/useInput";

export default function DepartmentForm({
    addDepartment
    }: DepartmentFormProps) {
    
        const departmentInput = useInput({
            input: {
                type: "text",
                name: "Department Name",
                minLength: 4,
                id: "department-name",
            }
        });

        const onSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            departmentInput.handleSubmit( async (value) => {
                addDepartment(value, 0, "");
            })
        }
    
        return (
            <div className="flex flex-col mt-12">
                <form onSubmit={onSubmit}>
                    <div className="">
                        <label htmlFor="department-name" className="block text-sm/6 font-medium text-zinc-900 dark:text-white">Department Name</label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-zinc-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-zinc-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-zinc-500">
                                <div className="flex-1 text-base text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
                                    <input
                                    value={departmentInput.value}
                                    onChange={departmentInput.onChange}
                                    placeholder="Department Name"
                                    className="w-full min-w-0 bg-transparent py-2 pr-3 pl-1 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:text-white dark:placeholder:text-zinc-500"
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    {departmentInput.error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-2 py-0.5 rounded relative">
                            <p className="error-message">{departmentInput.error}</p>
                        </div>
                    )}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit" disabled={departmentInput.isSubmitting} className="rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-500 dark:shadow-none dark:focus-visible:outline-zinc-500">{departmentInput.isSubmitting ? "Submitting..." : "Submit"}</button>
                    </div>
                </form>
            </div>
        )
}