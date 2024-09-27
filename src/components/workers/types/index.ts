export interface IWorker {
    id: number
    email: string
    phone: string
    first_name: string
    last_name: string
    position: string
    document: string
    is_active: boolean
    is_admin: boolean
}


export interface IWorkerDashboard {
    id: number
    first_name: string
    last_name: string
    start: string
}