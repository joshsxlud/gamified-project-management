export type DepartmentFormProps = {
    selectedDepartment: string;
    addDepartment: (departmentName: string, employeeCount: number, taskCount: number) => void;
}
