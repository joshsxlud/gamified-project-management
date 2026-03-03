export type Group = {
    id?: number,
    organization_id: number,
    name: string,
    tasks: 
        {task: number, 
        completed: number},
}