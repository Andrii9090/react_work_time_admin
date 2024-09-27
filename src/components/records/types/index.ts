export interface WorkRecord {
    id: number
    day: string
    start: string
    finish: string
    total_str: string
    comment?: string
}

export interface RecordItems {
    [date: string]: {
        records: WorkRecord[],
        total_day: string
    }
}

export interface RecordResponse {
    items: RecordItems
    total_hours_str: string
}



export interface RecordsFilterForm {
    dateStart: string
    dateEnd: string
}
