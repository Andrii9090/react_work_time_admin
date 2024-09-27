import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { IWorkerDashboard } from '../workers/types'
import { formatDateTime } from '../../helpers/datetime.helper'
type Props = { worker: IWorkerDashboard }
export const DasboardWorker: React.FC<Props> = memo(
    ({ worker: { first_name, last_name, start, id } }) => {
        return (
            <div className="flex w-full justify-between flex-col sm:flex-row border-b m-1">
                <div className="font-bold">{first_name + ' ' + last_name}</div>
                <div className="flex items-center">
                    <span className="italic mr-3">ultima vez ha fichado </span>
                    <span className="font-bold">{formatDateTime(start)}</span>
                </div>
                <div className="flex">
                    <Link
                        to={'workers/' + id}
                        className="bg-indigo-400 w-full text-center pr-3 pl-3 pt-1 pb-1 text-white rounded-md hover:bg-indigo-600 transition-colors duration-300"
                    >
                        Ver
                    </Link>
                </div>
            </div>
        )
    }
)
