import { formatDate } from '../../helpers/datetime.helper'
import { WorkRecord } from './types'
import { Record } from './Record'

type Props = {
    day: string
    records: WorkRecord[]
    total_day: string
}

export const RecordCard: React.FC<Props> = ({ day, records, total_day }) => {
    return (
        <div className="flex w-full shadow-md border rounded-md mb-2">
            <div className="flex items-center justify-center p-1 rounded-l-md bg-indigo-600">
                <span className="text-xl text-center text-white font-thin">
                    {formatDate(day)}
                </span>
            </div>
            <div className="flex flex-col items-center p-4 w-full">
                {records.map((record: WorkRecord) => (
                    <Record record={record} key={record.id + record.start} />
                ))}
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center items-center p-4 w-full">
                    <span className="text-center font-bold text-indigo-600">
                        {total_day}
                    </span>
                </div>
            </div>
        </div>
    )
}
