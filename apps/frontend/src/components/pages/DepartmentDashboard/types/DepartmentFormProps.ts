export type DepartmentFormProps = {
    selectedDepartment: string;
    addDepartment: (
        name: string,
        numberOfUsers: number,
        organizationId: number,
    ) => void;
};