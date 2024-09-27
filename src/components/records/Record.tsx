import React, { memo } from 'react'
import { WorkRecord } from './types'
import { formatTime } from '../../helpers/datetime.helper'

type Props = {
    record: WorkRecord
}

export const Record: React.FC<Props> = ({ record }) => {
    return (
        <div className="flex">
            <input
                type="text"
                defaultValue={formatTime(record.start)}
                className="border-b focus:outline-none p-1 w-2/12"
            />
            :
            <input
                type="text"
                defaultValue={formatTime(record.finish)}
                className="border-b focus:outline-none p-1 w-2/12"
            />
            <span className="mr-2 ml-2 text-gray-500 border-b border-dashed">
                {record.total_str}
            </span>
            <input
                type="text"
                placeholder="Comentario"
                defaultValue={record.comment}
                readOnly
                className="border-b focus:outline-none p-1 w-full ml-4"
            />
        </div>
    )
}
