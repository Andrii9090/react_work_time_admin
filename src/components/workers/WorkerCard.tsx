import React from 'react'
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/16/solid'
import { CardUI } from '../ui/Card.ui'
import { IWorker } from './types'
import { Link } from 'react-router-dom'

type Props = {
    worker: IWorker
}

export const WorkerCard: React.FC<Props> = React.memo(({ worker }) => {
    return (
        <CardUI
            title={worker.first_name + ' ' + worker.last_name}
            footer={
                <Link
                    to={`${worker.id}`}
                    className="bg-indigo-400 w-full text-center p-1 text-white rounded-b-md hover:bg-indigo-600 transition-colors duration-300"
                >
                    Más
                </Link>
            }
        >
            <div className="flex flex-col justify-between items-center p-3">
                <div className="flex flex-auto">
                    <PhoneIcon className="size-5 mr-3 " />
                    <span className="text-sm">{worker.phone}</span>
                </div>
                <div className="flex flex-auto">
                    <AtSymbolIcon className="size-5 mr-3" />
                    <span className="text-sm">{worker.email}</span>
                </div>
            </div>
        </CardUI>
    )
})
